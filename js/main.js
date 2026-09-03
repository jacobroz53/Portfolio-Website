/* =============================================================================
   MAIN  —  js/main.js
   Nav · scroll reveals · 3-way theme toggle · tile rendering · bottom sheet.

   You shouldn't need to edit this file to add content.
   Content lives in js/work-data.js and js/journal-data.js.
   ============================================================================= */
(function () {
  'use strict';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Background colours per theme, for the mobile browser chrome (<meta theme-color>) */
  var THEME_COLORS = {
    copywriting: '#f7f3ec',
    passion:     '#08090a',
    journal:     '#e9dfcb'
  };

  /* ---------------------------------------------------------------------------
     1. Footer year
     ------------------------------------------------------------------------- */
  var yearEl = $('#year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  /* ---------------------------------------------------------------------------
     2. Scroll reveals
     ------------------------------------------------------------------------- */
  function initReveals(scope) {
    var items = $$('.reveal', scope || document).filter(function (el) { return !el.classList.contains('is-in'); });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el, i) {
      el.style.setProperty('--i', i);
      io.observe(el);
    });
  }

  /* ---------------------------------------------------------------------------
     3. Rendering helpers
     ------------------------------------------------------------------------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text != null) { node.textContent = text; }
    return node;
  }

  /* Turns a `body` array from work-data.js into DOM.
     Strings  -> <p> (inline HTML like <strong> is allowed — it's your own file)
     {heading}-> <h3>
     {list}   -> <ul><li> */
  function renderBody(container, blocks) {
    (blocks || []).forEach(function (block) {
      if (typeof block === 'string') {
        var p = document.createElement('p');
        p.innerHTML = block;
        container.appendChild(p);
      } else if (block && block.heading) {
        container.appendChild(el('h3', null, block.heading));
      } else if (block && block.list) {
        var ul = document.createElement('ul');
        block.list.forEach(function (item) {
          var li = document.createElement('li');
          li.innerHTML = item;
          ul.appendChild(li);
        });
        container.appendChild(ul);
      }
    });
  }

  /* ---------------------------------------------------------------------------
     4. Work tiles
     ------------------------------------------------------------------------- */

  /* Tilt the card toward the pointer. Only on devices with a real pointer — on a
     touchscreen there's nothing to follow, and :hover would stick after a tap. */
  var canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion;
  var MAX_TILT = 8;   // degrees at the very edge of the card

  function addTilt(wrap, tile) {
    var raf = 0, rx = 0, ry = 0;

    function apply() {
      raf = 0;
      tile.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      tile.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    }

    wrap.addEventListener('pointermove', function (e) {
      var r = tile.getBoundingClientRect();
      if (!r.width || !r.height) { return; }
      ry = (((e.clientX - r.left) / r.width) - 0.5) * 2 * MAX_TILT;
      rx = (((e.clientY - r.top) / r.height) - 0.5) * -2 * MAX_TILT;
      if (!raf) { raf = requestAnimationFrame(apply); }   /* one write per frame */
    });

    wrap.addEventListener('pointerleave', function () {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      tile.style.setProperty('--rx', '0deg');
      tile.style.setProperty('--ry', '0deg');
    });
  }
  function buildTile(item, groupKey) {
    var btn = el('button', 'tile');
    btn.type = 'button';
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.dataset.group = groupKey;
    btn.dataset.id = item.id;

    /* optional image slot — a labelled placeholder box until a file is set */
    if (item.media) {
      var media = el('div', 'tile__media');
      if (item.media.image) {
        var img = document.createElement('img');
        img.src = item.media.image;
        img.alt = item.media.alt || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        media.appendChild(img);
      } else {
        media.classList.add('tile__media--empty');
        media.appendChild(el('span', 'chip', '[PLACEHOLDER]'));
      }
      btn.appendChild(media);
    }

    var head = el('div', 'tile__head');
    head.appendChild(el('span', 'tile__eyebrow', item.eyebrow || ''));

    btn.appendChild(head);
    btn.appendChild(el('h3', 'tile__title', item.title || 'Untitled'));
    btn.appendChild(el('p', 'tile__summary', item.summary || ''));

    var foot = el('div', 'tile__foot');
    if (item.placeholder) {
      foot.appendChild(el('span', 'chip', '[PLACEHOLDER]'));
    } else {
      foot.appendChild(el('span', null, item.footnote || ''));
    }
    var arrow = el('span', 'tile__arrow');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    foot.appendChild(arrow);
    btn.appendChild(foot);

    btn.addEventListener('click', function () { openSheet(item, btn); });

    /* the wrapper owns the perspective; the button is what actually rotates */
    var wrap = el('div', 'tile3d');
    wrap.appendChild(btn);
    if (canTilt) { addTilt(wrap, btn); }
    return wrap;
  }

  function renderTiles(groupKey, mountId) {
    var mount = $(mountId);
    if (!mount || typeof WORK_DATA === 'undefined') { return; }
    var items = WORK_DATA[groupKey] || [];
    mount.innerHTML = '';
    if (!items.length) {
      mount.appendChild(el('p', 'work__intro', 'Nothing here yet. Add a project in js/work-data.js.'));
      return;
    }
    items.forEach(function (item) { mount.appendChild(buildTile(item, groupKey)); });
  }

  /* ---------------------------------------------------------------------------
     5. Journal feed  (newest first, sorted by date)
     ------------------------------------------------------------------------- */
  function formatDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d.getTime())) { return iso; }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function renderJournal() {
    var mount = $('#journal-feed');
    if (!mount || typeof JOURNAL_ENTRIES === 'undefined') { return; }

    var entries = JOURNAL_ENTRIES.slice().sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);   /* newest first */
    });

    mount.innerHTML = '';
    if (!entries.length) {
      mount.appendChild(el('p', 'work__intro', 'No entries yet. Add one in js/journal-data.js.'));
      return;
    }

    entries.forEach(function (entry, i) {
      /* Blank lines in the template literal become separate paragraphs. */
      var paras = String(entry.body || '').trim().split(/\n\s*\n/)
        .map(function (chunk) { return chunk.replace(/\s*\n\s*/g, ' ').trim(); })
        .filter(Boolean);

      mount.appendChild(buildTile({
        id: 'entry-' + i,
        media: { image: entry.image || null, alt: entry.imageAlt || '' },
        eyebrow: formatDate(entry.date),
        title: entry.title || 'Untitled',
        footnote: 'Read entry',
        placeholder: false,
        plainBody: paras
      }, 'journal'));
    });
  }

  /* ---------------------------------------------------------------------------
     6. Segmented toggle — swaps the panel AND the whole page theme
     ------------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------------
     The heading flip. Each letter is its own element so they can stagger; the
     typeface is exchanged while they're blurred out, hiding the swap.
     ------------------------------------------------------------------------- */
  var reflection = $('.neon__reflection');
  var workTitle = $('#work-title');
  var FLIP_MS = 620, STAGGER = 22, letterCount = 0, flipTimer = 0, swapTimer = 0;

  if (reflection && workTitle) { reflection.textContent = workTitle.textContent; }

  if (workTitle) {
    var headingText = workTitle.textContent;
    /* the split is decorative — the heading keeps one readable name for AT */
    workTitle.setAttribute('aria-label', headingText);

    var letters = el('span', 'flip');
    letters.setAttribute('aria-hidden', 'true');
    headingText.split('').forEach(function (ch, i) {
      var sp = el('span', 'ltr', ch === ' ' ? '\u00A0' : ch);
      sp.style.setProperty('--i', i);
      letters.appendChild(sp);
    });
    letterCount = headingText.length;
    workTitle.textContent = '';
    workTitle.appendChild(letters);
  }

  function flipHeading(key) {
    if (!workTitle) { return; }

    if (reduceMotion) {                       /* no theatre — just swap */
      document.body.setAttribute('data-headfont', key);
      return;
    }

    window.clearTimeout(swapTimer);
    window.clearTimeout(flipTimer);

    workTitle.classList.remove('is-flip');
    void workTitle.offsetWidth;               /* restart the animation */
    workTitle.classList.add('is-flip');

    /* swap when the middle letter is at its most blurred */
    var swapAt = FLIP_MS * 0.5 + (letterCount / 2) * STAGGER;
    swapTimer = window.setTimeout(function () {
      document.body.setAttribute('data-headfont', key);
    }, swapAt);

    flipTimer = window.setTimeout(function () {
      workTitle.classList.remove('is-flip');
    }, FLIP_MS + letterCount * STAGGER + 60);
  }

  /* Tilt the neon sign toward the pointer as you move around the section header,
     so it reads as an object standing off the wall rather than flat artwork.
     Passion theme only, real pointers only. */
  (function () {
    var neon = $('.neon');
    var area = $('.work__head');
    if (!canTilt || !neon || !area || !workTitle) { return; }

    var raf = 0, rx = 0, ry = 0;
    function clamp(v, max) { return Math.max(-max, Math.min(max, v)); }

    function apply() {
      raf = 0;
      workTitle.style.setProperty('--nrx', rx.toFixed(2) + 'deg');
      workTitle.style.setProperty('--nry', ry.toFixed(2) + 'deg');
    }

    area.addEventListener('pointermove', function (e) {
      if (document.body.dataset.theme !== 'passion') { return; }
      var r = neon.getBoundingClientRect();
      if (!r.width || !r.height) { return; }
      /* clamped: the tracking area is taller than the sign, so without this the
         pointer near the tiles would swing it far past the intended range */
      ry = clamp((((e.clientX - r.left) / r.width) - 0.5) * 12, 6);
      rx = clamp((((e.clientY - r.top) / r.height) - 0.5) * -8, 4);
      if (!raf) { raf = requestAnimationFrame(apply); }
    });

    function level() {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      workTitle.style.setProperty('--nrx', '0deg');
      workTitle.style.setProperty('--nry', '0deg');
    }
    area.addEventListener('pointerleave', level);
    window.addEventListener('themechange', level);
  })();

  /* The neon script face is only ever used by the Passion theme, so it isn't in
     index.html — it's fetched the first time someone opens that tab. */
  var neonFontRequested = false;
  function loadNeonFont() {
    if (neonFontRequested) { return; }
    neonFontRequested = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Allura&display=swap';
    document.head.appendChild(link);
  }
  var tabs = $$('.segmented__btn');
  var pill = $('.segmented__pill');
  var introEl = $('#work-intro');
  var themeMeta = $('meta[name="theme-color"]');

  function movePill(btn) {
    if (!pill || !btn) { return; }
    pill.style.width = btn.offsetWidth + 'px';
    pill.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
  }

  function selectTab(btn, opts) {
    opts = opts || {};
    if (!btn) { return; }
    var key = btn.dataset.themeKey;

    tabs.forEach(function (t) {
      var on = t === btn;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;

      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (!panel) { return; }
      if (on) {
        panel.hidden = false;
        /* restart the panel entry animation */
        panel.style.animation = 'none';
        void panel.offsetHeight;
        panel.style.animation = '';
      } else {
        panel.hidden = true;
      }
    });

    if (key === 'passion') { loadNeonFont(); }
    flipHeading(key);
    window.dispatchEvent(new Event('themechange'));

    /* The page-wide theme crossfade lives entirely in CSS. */
    document.body.setAttribute('data-theme', key);
    if (themeMeta && THEME_COLORS[key]) { themeMeta.setAttribute('content', THEME_COLORS[key]); }

    if (introEl && typeof WORK_COPY !== 'undefined' && WORK_COPY[key]) {
      introEl.textContent = WORK_COPY[key];
    }

    movePill(btn);
    if (opts.focus) { btn.focus(); }
    initReveals();
  }

  tabs.forEach(function (btn, index) {
    btn.addEventListener('click', function () { selectTab(btn); });

    /* Roving-tabindex keyboard support for the tablist */
    btn.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { next = tabs[(index + 1) % tabs.length]; }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { next = tabs[(index - 1 + tabs.length) % tabs.length]; }
      else if (e.key === 'Home') { next = tabs[0]; }
      else if (e.key === 'End') { next = tabs[tabs.length - 1]; }
      if (next) { e.preventDefault(); selectTab(next, { focus: true }); }
    });
  });

  window.addEventListener('resize', function () {
    movePill(tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0]);
    if (sheetOpen) { updateScrollEnd(); }
  });

  /* ---------------------------------------------------------------------------
     7. Nav — active link highlighting
     ------------------------------------------------------------------------- */
  function initNav() {
    var links = $$('.nav__link');
    var sections = links
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) { return; }

    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0; });

      var bestId = null, best = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > best) { best = visible[id]; bestId = id; }
      });
      if (!bestId) { return; }
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + bestId);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------------------------------------------------------------------------
     8. Bottom sheet (project detail overlay)
     ------------------------------------------------------------------------- */
  var sheet      = $('#sheet');
  var scrim      = $('#scrim');
  var sheetScroll= $('#sheet-scroll');
  var closeBtn   = $('#sheet-close');
  var lastFocus  = null;
  var sheetOpen  = false;

  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  /* Clears the bottom fade once there's nothing left to scroll to, so a short
     entry doesn't look like it's been cut off. */
  function updateScrollEnd() {
    if (!sheetScroll) { return; }
    var reachedEnd = sheetScroll.scrollTop + sheetScroll.clientHeight >= sheetScroll.scrollHeight - 4;
    var fitsAlready = sheetScroll.scrollHeight <= sheetScroll.clientHeight + 4;
    sheet.classList.toggle('is-end', reachedEnd || fitsAlready);
  }

  if (sheetScroll) {
    sheetScroll.addEventListener('scroll', updateScrollEnd, { passive: true });
  }

  function lockScroll(lock) {
    if (lock) {
      var gap = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = gap > 0 ? gap + 'px' : '';
      document.body.classList.add('is-locked');
    } else {
      document.body.classList.remove('is-locked');
      document.body.style.paddingRight = '';
    }
  }

  function fillSheet(item) {
    $('#sheet-eyebrow').textContent = item.eyebrow || '';
    $('#sheet-title').textContent = item.title || '';

    var tagList = $('#sheet-tags');
    tagList.innerHTML = '';
    (item.tags || []).forEach(function (tag) { tagList.appendChild(el('li', null, tag)); });
    tagList.hidden = !(item.tags && item.tags.length);

    var metaList = $('#sheet-meta');
    metaList.innerHTML = '';
    (item.meta || []).forEach(function (row) {
      var wrap = document.createElement('div');
      wrap.appendChild(el('dt', null, row.label));
      wrap.appendChild(el('dd', null, row.value));
      metaList.appendChild(wrap);
    });
    metaList.hidden = !(item.meta && item.meta.length);

    var body = $('#sheet-body');
    body.innerHTML = '';
    if (item.plainBody) {
      /* journal prose — inserted as text, never parsed as markup */
      item.plainBody.forEach(function (para) { body.appendChild(el('p', null, para)); });
    } else {
      renderBody(body, item.body);
    }

    /* Optional pull-out block of sample copy */
    if (item.excerpt && item.excerpt.lines && item.excerpt.lines.length) {
      var box = el('div', 'sheet__excerpt');
      if (item.excerpt.label) { box.appendChild(el('h3', null, item.excerpt.label)); }
      item.excerpt.lines.forEach(function (line) {
        var p = document.createElement('p');
        p.innerHTML = line;
        box.appendChild(p);
      });
      body.appendChild(box);
    }

    /* Optional outbound link */
    if (item.link && item.link.href) {
      var a = el('a', 'sheet__link', item.link.label || 'View project');
      a.href = item.link.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.insertAdjacentHTML('beforeend', ' <span aria-hidden="true">↗</span>');
      var row = el('p', 'sheet__linkrow');
      row.appendChild(a);
      body.appendChild(row);
    }
  }

  function openSheet(item, trigger) {
    lastFocus = trigger || document.activeElement;
    fillSheet(item);

    scrim.hidden = false;
    sheetOpen = true;
    sheet.setAttribute('aria-hidden', 'false');
    lockScroll(true);

    requestAnimationFrame(function () {
      scrim.classList.add('is-open');
      sheet.classList.add('is-open');
    });

    sheetScroll.scrollTop = 0;
    requestAnimationFrame(updateScrollEnd);          /* after the content is in */
    window.setTimeout(function () { closeBtn.focus(); }, reduceMotion ? 0 : 120);
  }

  function closeSheet() {
    if (!sheetOpen) { return; }
    sheetOpen = false;
    sheet.classList.remove('is-open');
    scrim.classList.remove('is-open');
    sheet.setAttribute('aria-hidden', 'true');
    lockScroll(false);

    window.setTimeout(function () {
      if (!sheetOpen) { scrim.hidden = true; }
    }, reduceMotion ? 0 : 440);

    if (lastFocus && typeof lastFocus.focus === 'function') { lastFocus.focus(); }
  }

  if (scrim) { scrim.addEventListener('click', closeSheet); }
  if (closeBtn) { closeBtn.addEventListener('click', closeSheet); }

  document.addEventListener('keydown', function (e) {
    if (!sheetOpen) { return; }

    if (e.key === 'Escape') { e.preventDefault(); closeSheet(); return; }

    /* Focus trap */
    if (e.key === 'Tab') {
      var focusables = $$(FOCUSABLE, sheet).filter(function (n) {
        return n.offsetWidth || n.offsetHeight || n.getClientRects().length;
      });
      if (!focusables.length) { e.preventDefault(); return; }
      var first = focusables[0];
      var last = focusables[focusables.length - 1];

      if (!sheet.contains(document.activeElement)) {
        e.preventDefault(); first.focus(); return;
      }
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------------------------------------------------------------------
     9. Boot
     ------------------------------------------------------------------------- */
  renderTiles('copywriting', '#tiles-copywriting');
  renderTiles('passion', '#tiles-passion');
  renderJournal();
  initNav();
  initReveals();

  /* Default state: Copywriting */
  var initialTab = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
  if (initialTab) {
    if (introEl && typeof WORK_COPY !== 'undefined') { introEl.textContent = WORK_COPY[initialTab.dataset.themeKey] || ''; }
    /* No transition on the very first pill placement */
    var prev = pill ? pill.style.transition : '';
    if (pill) { pill.style.transition = 'none'; }
    movePill(initialTab);
    requestAnimationFrame(function () { if (pill) { pill.style.transition = prev; } });
  }

  /* Fonts can change button widths — reposition once they land */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      movePill(tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0]);
    });
  }
})();

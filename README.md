# Portfolio — Jacob Roz

One page. Three themes. No build step, no dependencies, no npm.

## Files

    index.html          page structure + all static copy (hero, about, contact)
    css/style.css       every style; themes are CSS variables on <body>
    js/main.js          nav, theme toggle, tile rendering, bottom sheet  (rarely edit)
    js/work-data.js     ← your work tiles live here
    js/journal-data.js  ← your journal entries live here

## Preview locally

Double-click `index.html`. That's it.

If you'd rather use a local server (nicer for caching):

    python3 -m http.server 8000     # then open http://localhost:8000

## Deploy

**GitHub Pages** — push this folder to a repo, then Settings → Pages → Source:
`Deploy from a branch` → `main` / `(root)`.

**Netlify** — drag this folder onto app.netlify.com/drop. Done.

No build command, no publish directory. It's static files.

## Add a journal entry

Open `js/journal-data.js`, paste this inside the `JOURNAL_ENTRIES` array, save, redeploy:

    {
      title: 'Your title',
      date: '2026-09-01',        // YYYY-MM-DD — sorting and display are automatic
      image: null,               // optional, e.g. 'img/my-entry.jpg' (cards crop to 16:10)
      imageAlt: '',              // describe the picture; required if image is set
      body: `
    First paragraph.

    Second paragraph — blank lines become new paragraphs.
    `
    },

Order in the file doesn't matter; entries always render newest first.

Entries display as cards showing the image, date and title. Clicking a card opens
the full text in the bottom sheet. Leave `image` as `null` and the card shows a
`[PLACEHOLDER]` box in its place.

## Add a work tile

Open `js/work-data.js` and paste a new object into either `copywriting[]` or
`passion[]`. The full commented template is at the top of that file. Set
`placeholder: false` once it's real work so the `[PLACEHOLDER]` chip disappears.

## Swap the portrait

1. Put your photo in an `img/` folder.
2. In `index.html`, delete the `<div class="ph">…</div>` block.
3. Uncomment the `<img>` below it and update `src` + `alt`.

## Alignment

The whole page is centre-aligned. The one exception is long-form reading text —
journal entry bodies and the project write-ups inside the detail sheet — which stays
left-aligned inside its centred column, because centred ragged text gets hard to read
past a few lines. To centre those too, open `css/style.css` and change:

    --prose-align: left;   ->   --prose-align: center;

## Placeholders to replace

Search the project for `[PLACEHOLDER]` and `you@example.com`.

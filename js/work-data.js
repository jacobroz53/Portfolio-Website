/* =============================================================================
   WORK DATA  —  js/work-data.js
   This is the only file you touch to add, edit, or reorder work tiles.
   Nothing here requires editing index.html.

   ---------------------------------------------------------------------------
   COPY-PASTE TEMPLATE for a new tile (drop it inside copywriting[] or passion[]):

     {
       id: 'unique-slug',                 // any unique string, lowercase-with-dashes
       eyebrow: 'Category or format',     // small label at the top of the tile
       title: 'The project name',         // tile headline
       summary: 'One or two lines that make someone want to click.',
       footnote: 'Year · Format',         // small text bottom-left of the tile
       placeholder: true,                 // true shows a [PLACEHOLDER] chip — set false for real work
       tags: ['Tag one', 'Tag two'],      // optional; shown as pills in the detail sheet
       meta: [                            // optional; the key/value table in the sheet
         { label: 'Role',  value: 'Copywriter' },
         { label: 'Year',  value: '2026' }
       ],
       body: [                            // the detail sheet's paragraphs, in order
         'First paragraph.',
         { heading: 'The problem' },      // an object with `heading` renders a small section label
         'Paragraph under that heading.',
         { list: ['Bullet one', 'Bullet two'] }   // an object with `list` renders a bulleted list
       ],
       excerpt: {                         // optional pull-out block for actual sample copy
         label: 'Sample copy',
         lines: ['Subject line: ...', 'Body: ...']
       },
       link: null                         // or { label: 'Read the full case study', href: 'https://...' }
     },
   ---------------------------------------------------------------------------
   NOTE: tiles render in the order they appear below. Newest first is a good habit.
   ============================================================================= */

const WORK_DATA = {

  /* ===================== TAB 1 — COPYWRITING (default) ===================== */
  copywriting: [

    /* ---- PLACEHOLDER PROJECT 1: Email campaign ---- */
    {
      id: 'email-campaign',
      eyebrow: 'Email campaign',
      title: '[PLACEHOLDER] A lifecycle email campaign',
      summary: 'A welcome-to-winback sequence written to sound like a person, not an automation rule.',
      footnote: '20XX · Email',
      placeholder: true,
      tags: ['Email', 'Lifecycle', 'CRM', 'Voice'],
      meta: [
        { label: 'Client', value: '[PLACEHOLDER]' },
        { label: 'Role', value: 'Copywriter' },
        { label: 'Deliverables', value: 'X emails + subject line bank' },
        { label: 'Year', value: '20XX' }
      ],
      body: [
        '[PLACEHOLDER] Open with the situation in two sentences. What was the business trying to do, and what was standing in the way? Resist the urge to explain the whole org chart.',
        { heading: 'The problem' },
        '[PLACEHOLDER] One short paragraph on what was broken — the open rates, the tone, the fact that every email started with "We are excited to announce."',
        { heading: 'What I did' },
        { list: [
          '[PLACEHOLDER] The strategic move — the insight that reframed the whole sequence.',
          '[PLACEHOLDER] The craft move — voice, structure, subject line approach.',
          '[PLACEHOLDER] The practical move — templates, tone guide, whatever you left behind.'
        ] },
        { heading: 'The result' },
        '[PLACEHOLDER] Once you have real numbers, put them here. Until then, describe the qualitative outcome — do not invent metrics.'
      ],
      excerpt: {
        label: 'Sample copy',
        lines: [
          '<strong>Subject:</strong> [PLACEHOLDER — your best subject line goes here]',
          '<strong>Preview:</strong> [PLACEHOLDER — the line that earns the open]',
          '[PLACEHOLDER] Two or three lines of body copy so a hiring manager can see how you actually write, not just how you describe writing.'
        ]
      },
      link: null
    },

    /* ---- PLACEHOLDER PROJECT 2: Product descriptions ---- */
    {
      id: 'product-descriptions',
      eyebrow: 'Product copy',
      title: '[PLACEHOLDER] Product descriptions at scale',
      summary: 'A few hundred SKUs, one voice, zero sentences that begin with "Introducing."',
      footnote: '20XX · Ecommerce',
      placeholder: true,
      tags: ['Ecommerce', 'Product', 'SEO', 'Systems'],
      meta: [
        { label: 'Client', value: '[PLACEHOLDER]' },
        { label: 'Role', value: 'Copywriter' },
        { label: 'Deliverables', value: 'X descriptions + writing system' },
        { label: 'Year', value: '20XX' }
      ],
      body: [
        '[PLACEHOLDER] Set the scene: a catalogue that needed to sound consistent without sounding copy-pasted.',
        { heading: 'The approach' },
        '[PLACEHOLDER] Describe the system you built — the structure every description follows, the rules about specifics over adjectives, the words you banned.',
        { heading: 'Why it worked' },
        { list: [
          '[PLACEHOLDER] A rule that made the writing faster.',
          '[PLACEHOLDER] A rule that made the writing better.',
          '[PLACEHOLDER] A rule that kept everyone else on-voice after you left.'
        ] }
      ],
      excerpt: {
        label: 'Sample description',
        lines: [
          '[PLACEHOLDER] Paste one real description here — the shortest one that still shows range.'
        ]
      },
      link: null
    },

    /* ---- PLACEHOLDER PROJECT 3: Rebranding ---- */
    {
      id: 'rebrand',
      eyebrow: 'Brand & voice',
      title: '[PLACEHOLDER] A rebranding project',
      summary: 'New name, new voice, new set of words the whole company could actually use.',
      footnote: '20XX · Brand',
      placeholder: true,
      tags: ['Positioning', 'Naming', 'Tone of voice', 'Messaging'],
      meta: [
        { label: 'Client', value: '[PLACEHOLDER]' },
        { label: 'Role', value: 'Copywriter / Verbal identity' },
        { label: 'Deliverables', value: 'Positioning, voice guide, launch copy' },
        { label: 'Year', value: '20XX' }
      ],
      body: [
        '[PLACEHOLDER] What did the brand sound like before, and why was that a problem for the business?',
        { heading: 'The shift' },
        '[PLACEHOLDER] The one-sentence version of the repositioning. If you can\'t say it in a sentence, it isn\'t finished.',
        { heading: 'What shipped' },
        { list: [
          '[PLACEHOLDER] Positioning statement and messaging hierarchy.',
          '[PLACEHOLDER] Tone-of-voice principles with real before/after examples.',
          '[PLACEHOLDER] Launch copy — site, campaign, internal comms.'
        ] },
        { heading: 'Afterwards' },
        '[PLACEHOLDER] How the team used it once you handed it over.'
      ],
      excerpt: {
        label: 'Before / after',
        lines: [
          '<strong>Before:</strong> [PLACEHOLDER — the old line, in all its beige glory]',
          '<strong>After:</strong> [PLACEHOLDER — yours]'
        ]
      },
      link: null
    }

    /* ---- ADD YOUR NEXT COPYWRITING PROJECT HERE (copy the template above) ---- */
  ],

  /* ===================== TAB 2 — PASSION PROJECTS ===================== */
  passion: [

    /* ---- PLACEHOLDER PROJECT 1: The app ---- */
    {
      id: 'app-in-progress',
      eyebrow: 'In progress',
      title: '[PLACEHOLDER] The application I\'m building',
      summary: 'A thing I am making because it did not exist and the absence was annoying me.',
      footnote: 'Ongoing · Product',
      placeholder: true,
      tags: ['Product', 'Design', 'Writing', 'Building in public'],
      meta: [
        { label: 'Status', value: 'In development' },
        { label: 'Role', value: 'Everything, currently' },
        { label: 'Started', value: '[PLACEHOLDER]' }
      ],
      body: [
        '[PLACEHOLDER] What is it, in one sentence a stranger would understand?',
        { heading: 'Why I started it' },
        '[PLACEHOLDER] The itch. The moment you thought "someone should build this" and then remembered you are someone.',
        { heading: 'Where it is now' },
        { list: [
          '[PLACEHOLDER] What works today.',
          '[PLACEHOLDER] What is half-built.',
          '[PLACEHOLDER] What you have learned that surprised you.'
        ] },
        { heading: 'What it taught me about writing' },
        '[PLACEHOLDER] The bridge back to the day job — the part a hiring manager will quietly find impressive.'
      ],
      excerpt: null,
      /* When it's live, swap in: { label: 'See it in progress', href: 'https://...' } */
      link: null
    },

    /* ---- PLACEHOLDER PROJECT 2: YouTube ---- */
    {
      id: 'youtube',
      eyebrow: 'Video',
      title: '[PLACEHOLDER] My YouTube project',
      summary: 'Scripts, edits, thumbnails, and the ongoing discovery that talking is just writing with worse posture.',
      footnote: 'Ongoing · Video',
      placeholder: true,
      tags: ['Scripting', 'Editing', 'Audience', 'Voice'],
      meta: [
        { label: 'Status', value: 'Ongoing' },
        { label: 'Role', value: 'Writer, host, editor' },
        { label: 'Started', value: '[PLACEHOLDER]' }
      ],
      body: [
        '[PLACEHOLDER] What the channel is about and who it is for.',
        { heading: 'The format' },
        '[PLACEHOLDER] How an episode gets made — the outline, the script, the part where you delete the first ninety seconds because nobody needed them.',
        { heading: 'What I have learned' },
        { list: [
          '[PLACEHOLDER] Something about hooks.',
          '[PLACEHOLDER] Something about pacing.',
          '[PLACEHOLDER] Something about writing for the ear instead of the eye.'
        ] }
      ],
      excerpt: null,
      /* Swap in your channel: { label: 'Watch on YouTube', href: 'https://youtube.com/@you' } */
      link: null
    }

    /* ---- ADD YOUR NEXT PASSION PROJECT HERE ---- */
  ]
};

/* =============================================================================
   SECTION INTRO COPY — the line under the toggle. Edit freely.
   ============================================================================= */
const WORK_COPY = {
  copywriting: 'Client work, campaigns, and copy systems. Placeholder projects for now — the real ones are being screenshotted as we speak.',
  passion: 'The things nobody assigned me. Built after hours, mostly out of curiosity and mild stubbornness.',
  journal: 'Longer thoughts, loosely edited. Written for the pleasure of the sentence rather than the click.'
};

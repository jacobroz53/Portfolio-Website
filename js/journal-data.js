/* =============================================================================
   JOURNAL DATA  —  js/journal-data.js
   Add an entry, save, redeploy. That's the whole publishing pipeline.

   ---------------------------------------------------------------------------
   COPY-PASTE TEMPLATE — paste it anywhere inside the JOURNAL_ENTRIES array.
   Order in the file does NOT matter: entries are sorted by date, newest first.

     {
       title: 'Your entry title',
       date: '2026-09-01',          // ALWAYS YYYY-MM-DD. It's formatted for display automatically.

       // OPTIONAL image for the entry's card. Leave both out (or set image to
       // null) and the card shows a [PLACEHOLDER] box instead.
       // Drop the file in /img and point at it, e.g. 'img/my-entry.jpg'.
       // Cards crop to 16:10, so ~800x500 is plenty.
       image: null,
       imageAlt: '',                // describe the picture; required if image is set

       body: `
   First paragraph.

   Second paragraph. Leave a blank line between paragraphs and they become
   separate <p> elements. Line breaks inside a paragraph are fine — they get
   folded together.
   `
     },

   Entries render as cards showing the image, the date and the title. Clicking a
   card opens the full text in the bottom sheet.

   Notes:
   - Use backticks (`) around body so you can write multiple lines freely.
   - If you use an apostrophe in the title, use double quotes around it:  title: "Don't",
   - Avoid a stray backtick inside the body; escape it as \` if you need one.
   ---------------------------------------------------------------------------
   ============================================================================= */

const JOURNAL_ENTRIES = [

  /* ---- PLACEHOLDER ENTRY (delete once you have real ones) ---- */
  {
    title: 'On the tyranny of the second draft',
    date: '2026-08-24',
    body: `
[PLACEHOLDER ENTRY]

The first draft is easy because it is allowed to be wrong. It arrives like weather —
unbidden, unshaped, faintly embarrassing. Nobody expects anything of it.

The second draft is where the trouble starts. The second draft knows it is being
watched. It has read the first draft and formed opinions. It wants to be good, and
wanting to be good is the most reliable way I know of not being good.

So I have started treating the second draft the way you would treat a nervous animal:
slowly, without eye contact, and with the understanding that if I reach for it too
quickly it will bolt.
`
  },

  /* ---- PLACEHOLDER ENTRY ---- */
  {
    title: 'Pine, and other arguments for slowness',
    date: '2026-07-11',
    body: `
[PLACEHOLDER ENTRY]

There is a particular quiet inside a stand of pine trees that is not the absence of
sound but the presence of something patient. The needles take the noise apart. What
comes back is softened, older, less urgent than it was.

I think about this when I write. Most sentences are loud because they are afraid of
being ignored. The good ones are quiet because they have decided not to be.

A tree does not revise. It just keeps adding rings and lets the shape be the argument.
`
  },

  /* ---- PLACEHOLDER ENTRY ---- */
  {
    title: 'A short defence of the semicolon',
    date: '2026-05-02',
    body: `
[PLACEHOLDER ENTRY]

People say the semicolon is pretentious. What they mean is that it asks for a kind of
attention they were not planning to give.

It is the only punctuation mark that admits two thoughts are related without saying how.
No "because." No "and so." Just a small held breath and the assumption that you will
work it out yourself.

That is not pretension. That is trust.
`
  },

  /* ---- ADD YOUR NEW ENTRY HERE — paste the template from the top of this file ---- */

];

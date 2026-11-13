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
         { list: ['Bullet one', 'Bullet two'] },  // an object with `list` renders a bulleted list
         { caption: {                            // a writing sample, shown as a card
             school: 'Label above the sample',   //   small uppercase label (optional)
             image: 'img/collegiate/uof-1.jpg',  // optional photo for the post
             alt: 'What the photo shows.',        // required whenever image is set
             text: 'The caption itself.',
             featured: 'Product line, if there was one.',   // optional
             tags: '#hash #tags',                           // optional
             note: 'An aside under the sample.'             // optional
         } },
         { asset: {                              // a visual deliverable, full width
             image: 'img/collegiate/email-1.jpg',
             alt: 'What the asset shows.',
             label: 'Email banner',              // optional
             note: 'A line about the thinking.'  // optional
         } }
       ],

       // OPTIONAL: split a project across channels, which renders as tabs inside
       // the window. Each section takes the same block types as `body` above.
       // The first section is the one shown when the window opens.
       sections: [
         { id: 'email', label: 'Email', blocks: [ ...same block types as body... ] },
         { id: 'web',   label: 'Web',   blocks: [ ...same block types as body... ] }
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

    /* ---- REAL PROJECT: Foster Grant Collegiate social captions ----
       Caption blocks below use { caption: {...} } — see the template at the top
       of this file. To add more, copy any one of them. ---- */
    {
      id: 'foster-grant-collegiate',
      eyebrow: 'Foster Grant®',
      title: 'The Collegiate Collection',
      summary: 'A college sunglasses line in fifteen school colourways, launched across email, social and retail.',
      footnote: '15 schools · 3 channels',
      placeholder: false,

      /* The campaign's own key art, used on the tile. */
      media: {
        image: 'img/collegiate/key-art.jpg',
        alt: 'Foster Grant Collegiate Collection key art, set on a football field'
      },

      /* Campaign artwork at the top of the detail window, plus an accent sampled
         from the turf in it. Both optional — leave them out and a project gets
         the plain header. */
      hero: {
        image: 'img/collegiate/key-art.jpg',
        alt: 'Foster Grant Collegiate Collection campaign artwork, set on a football field'
      },
      accent: '#475724',

      tags: ['Instagram', 'Brand voice', 'Campaign', 'Consumer'],
      meta: [
        { label: 'Client', value: 'Foster Grant®' },
        { label: 'Role', value: 'Copywriter' },
        { label: 'Line', value: '15 schools, 2 frames' },
        { label: 'Channels', value: 'Email · Social · Web' }
      ],
      body: [
        'Foster Grant’s Collegiate line is one pair of sunglasses in fifteen school colourways. I wrote the launch voice across every channel it appeared in.',

        { heading: 'The problem' },
        'The efficient way to write this is one caption, recoloured fifteen times. It is also the way to get scrolled past. College fans do not respond to school-agnostic enthusiasm — they respond to their own vocabulary, and they can tell inside four words whether you have it.',

        { heading: 'The approach' },
        'Every caption is built on something only that fanbase would say out loud. Florida gets the Chomp. Arkansas gets a Hog Call loud enough to annoy a roommate. Wisconsin gets Jump Around at Camp Randall. LSU gets a whole sentence respelled in Cajun. The product appears in all fifty, but it is never what the caption is about.',
      ],

      /* ---- Channels. Each becomes a tab inside the project window. -------- */
      sections: [

        {
          id: 'email',
          label: 'Email',
          blocks: [
            'Two sends: one introducing the collection, one built for College Colors Day. Small formats, where a headline has about three words to earn the click.',

            { asset: {
              image: 'img/collegiate/email-2.jpg',
              alt: 'Collegiate Collection email banner reading “Are You Game-Day Ready?” over a football field',
              label: 'Collection launch',
              note: 'The headline asks a question the reader answers by clicking. “Anywhere, anytime” is doing the quiet work underneath — widening the product past Saturday afternoon, so it isn’t something you buy for one day a week.'
            } },

            { asset: {
              image: 'img/collegiate/email-1.jpg',
              alt: 'College Colors Day email banner reading “Warning: may cause extreme team spirit”',
              label: 'College Colors Day',
              note: 'Borrowing the form of a product warning label lets the enthusiasm land as a joke instead of a boast. Written sincerely — “show your team spirit!” — the same sentiment is unreadable.'
            } }
          ]
        },

        {
          id: 'social',
          label: 'Social',
          blocks: [
            'Fifty captions across fifteen schools and two frame styles. Every post followed one structure — hook, featured-product line, four hashtags — tight enough to hand to a social team, loose enough that no two read alike.',
            'Twenty-three of them, shown as delivered.',

        { caption: {
          school: 'Florida · Way',
          image: 'img/collegiate/uof-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Florida Gator Way sunglasses',
          text: 'notebooks: closed. Gator sunnies: on. Chomp chomp!!! 🐊',
          featured: 'Foster Grant® Collegiate Florida Gator Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGators #GatorNation #CollegeStudent',
          note: 'Shipped with a context note for the reviewers: “chomp” is something they say down there.'
        } },
        { caption: {
          school: 'Michigan State · Way',
          image: 'img/collegiate/msu-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Michigan State Spartans Way sunglasses',
          text: 'Sunnies on, laptop off, brain already at Spartan Stadium. Go Green!!! 💚🤍',
          featured: 'Foster Grant® Collegiate Michigan State Spartans Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGreen #SpartanNation #CollegeStudent'
        } },
        { caption: {
          school: 'Florida · Shield',
          image: 'img/collegiate/uof-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Florida Gator Shield sunglasses',
          text: 'Shield frames on, inside voice off, Gator mode activated. Let’s Go Gators!!! 🐊',
          featured: 'Foster Grant® Collegiate Florida Gator Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGators #GatorNation #GameDay'
        } },
        { caption: {
          school: 'Arkansas · Shield',
          image: 'img/collegiate/ark-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Arkansas Razorbacks Shield sunglasses',
          text: 'Roommate: “can you keep it down, I’m studying.” Me, mid-Hog Call: absolutely not 🐗',
          featured: 'Foster Grant® Collegiate Arkansas Razorbacks Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #WooPigSooie #Razorbacks #CollegeStudent'
        } },
        { caption: {
          school: 'Michigan · Way',
          image: 'img/collegiate/uom-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate University of Michigan Wolverines Way sunglasses',
          text: 'My GPA: on the rise. My Michigan pride: already maxed out. Go Blue!!! 〽️💛💙',
          featured: 'Foster Grant® Collegiate University of Michigan Wolverines Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoBlue #MichiganWolverines #CampusLife'
        } },
        { caption: {
          school: 'Alabama · Way',
          image: 'img/collegiate/alb-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Alabama Way sunglasses',
          text: 'Alabama shades on = Roll Tide to the barista, Roll Tide to my professor, Roll Tide to my group chat. There’s no off switch 🐘❤️',
          featured: 'Foster Grant® Collegiate Alabama Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #RollTide #BamaNation #CollegeStudent'
        } },
        { caption: {
          school: 'Florida · Way',
          image: 'img/collegiate/uof-3.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Florida Gator Way sunglasses',
          text: 'Gator sunnies on = I’m doing the Chomp at anyone who says hi. Sorry in advance 🐊',
          featured: 'Foster Grant® Collegiate Florida Gator Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGators #GatorNation #CollegeLife'
        } },
        { caption: {
          school: 'Wisconsin · Way',
          image: 'img/collegiate/wis-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Wisconsin Badgers Way sunglasses',
          text: 'Regular me: can’t dance. Badger sunnies me: Jump Around champion of Camp Randall 🦡❤️',
          featured: 'Foster Grant® Collegiate Wisconsin Badgers Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #OnWisconsin #Badgers #CampusLife'
        } },
        { caption: {
          school: 'Michigan State · Way',
          image: 'img/collegiate/msu-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Michigan State Spartans Way sunglasses',
          text: 'It’s 45° in East Lansing and I’ve still got Michigan State sunglasses on. That’s called having PRIORITIES 💚🤍',
          featured: 'Foster Grant® Collegiate Michigan State Spartans Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGreen #SpartanNation #CampusLife'
        } },
        { caption: {
          school: 'Kentucky · Way',
          image: 'img/collegiate/ken-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Kentucky Wildcat Way sunglasses',
          text: 'Regular me: “I’m not a morning person.” Kentucky sunglasses me: tailgate spot claimed by 8am 💙',
          featured: 'Foster Grant® Collegiate Kentucky Wildcat Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoCats #BBN #CollegeStudent'
        } },
        { caption: {
          school: 'Texas A&M · Way',
          image: 'img/collegiate/tam-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Texas A&M Aggies Way sunglasses',
          text: 'Maroon frames, white temples, and a Howdy for literally everyone. The Aggie starter pack 👍',
          featured: 'Foster Grant® Collegiate Texas A&M Aggies Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GigEm #AggieNation #CollegeLife'
        } },
        { caption: {
          school: 'Kentucky · Way',
          image: 'img/collegiate/ken-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Kentucky Wildcat Way sunglasses',
          text: 'Midterm done, sunnies on, Kroger Field next. Now that’s what a good week 💙🤍',
          featured: 'Foster Grant® Collegiate Kentucky Wildcat Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoCats #BigBlueNation #CampusLife'
        } },
        { caption: {
          school: 'LSU · Way',
          image: 'img/collegiate/lsu-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate LSU Tiger Way sunglasses',
          text: 'Me after one semester at LSU: “don’teaux forgeteaux your sunglasseaux.” My mom: “are you okay??” 💜💛',
          featured: 'Foster Grant® Collegiate LSU Tiger Way Unisex Sunglasses 😎',
          tags: '#FosterGrant #GeauxTigers #LSU #CollegeStudent'
        } },
        { caption: {
          school: 'Houston · Shield',
          image: 'img/collegiate/hou-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Houston Cougars Shield sunglasses',
          text: 'Homework done. Reward: Houston sun, red-gold shield, zero plans until kickoff ❤️🤍',
          featured: 'Foster Grant® Collegiate Houston Cougars Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoCoogs #CoogNation #GameDay'
        } },
        { caption: {
          school: 'Wisconsin · Shield',
          image: 'img/collegiate/wis-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Wisconsin Badgers Shield sunglasses',
          text: 'Shield on = Badger mode activated. Side effects include losing your voice by halftime 🦡❤️',
          featured: 'Foster Grant® Collegiate Wisconsin Badgers Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #OnWisconsin #Badgers #CollegeLife'
        } },
        { caption: {
          school: 'Texas · Shield',
          image: 'img/collegiate/txs-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Texas Longhorns Shield sunglasses',
          text: 'They say everything’s bigger in Texas. This shield frame included. Hook ’em!!! 🤘🧡',
          featured: 'Foster Grant® Collegiate Texas Longhorns Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #HookEm #Longhorns #GameDay'
        } },
        { caption: {
          school: 'Houston · Shield',
          image: 'img/collegiate/hou-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Houston Cougars Shield sunglasses',
          text: 'Wearing my shades on the 50-yard line. Main character behavior. Go Coogs!!! 🐾',
          featured: 'Foster Grant® Collegiate Houston Cougars Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoCoogs #UHCougars #CampusLife'
        } },
        { caption: {
          school: 'Michigan State · Shield',
          image: 'img/collegiate/msu-3.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Michigan State Spartans Shield sunglasses',
          text: 'Every Spartan needs a shield. mine just happens to have mirrored lenses. Go Green!!! 💚',
          featured: 'Foster Grant® Collegiate Michigan State Spartans Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGreen #MSU #GameDay'
        } },
        { caption: {
          school: 'Kentucky · Shield',
          image: 'img/collegiate/ken-3.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Kentucky Wildcat Shield sunglasses',
          text: 'Smiling this big because the shield matches the shirt and the shirt matches Kroger Field 💙🤍',
          featured: 'Foster Grant® Collegiate Kentucky Wildcat Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoCats #BBN #CampusLife'
        } },
        { caption: {
          school: 'Michigan State · Shield',
          image: 'img/collegiate/msu-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Michigan State Spartans Shield sunglasses',
          text: 'Ancient Spartans carried shields into battle. I wear mine with a bracelet stack and a smile 💚✨',
          featured: 'Foster Grant® Collegiate Michigan State Spartans Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoGreen #SpartanNation #CollegeLife'
        } },
        { caption: {
          school: 'Michigan · Shield',
          image: 'img/collegiate/uom-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate University of Michigan Wolverines Shield sunglasses',
          text: 'Putting on the gold shield frames like it’s a crown. Ann Arbor royalty 〽️💛',
          featured: 'Foster Grant® Collegiate University of Michigan Wolverines Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoBlue #UMich #CampusLife'
        } },
        { caption: {
          school: 'Arkansas · Shield',
          image: 'img/collegiate/ark-2.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Arkansas Razorbacks Shield sunglasses',
          text: 'Ozark sunsets are red and gold too. Guess the sunnies just get it 🌅🐗',
          featured: 'Foster Grant® Collegiate Arkansas Razorbacks Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #WooPigSooie #Razorbacks #GameDay'
        } },
        { caption: {
          school: 'Georgia · Shield',
          image: 'img/collegiate/geo-1.jpg',
          alt: 'Model wearing Foster Grant® Collegiate Georgia Bulldogs Shield sunglasses',
          text: 'Red sleeves, red shield, chin up. DawgNation doesn’t do shy 🐶❤️',
          featured: 'Foster Grant® Collegiate Georgia Bulldogs Shield Unisex Sunglasses 😎',
          tags: '#FosterGrant #GoDawgs #DawgNation #CollegeLife'
        } }
          ]
        },

        {
          id: 'web',
          label: 'Web',
          blocks: [
            'Product copy for FosterGrant.com and Walmart. Every listing has to carry the same mandated block — scratch and impact resistant, 100% UVA-UVB protection — and it appears almost word for word in all ten. So the only room left to write is at the edges.',
            'Which is where the school goes. Death Valley opens the LSU listing and “Geaux Tigers” closes it; Houston opens on “Whose house?”; Arkansas signs off with a Hog Call. One compliance spine, ten different front doors.',

            { product: {
              name: 'Foster Grant® Collegiate LSU Tiger Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-lsu-shield.jpg',
              alt: 'Foster Grant® Collegiate purple LSU Tiger shield sunglasses with gold mirrored lens',
              text: 'Make every day feel like a Saturday in Death Valley! These Foster Grant® Collegiate LSU Tiger Shield Unisex Sunglasses hit hard with a bold frame, purple-to-gold mirrored shield lens, and full wraparound coverage. Scratch and impact resistant lenses take everything the day throws down, and the mirror coating brings the shine. Bring the noise like the loudest house in college football and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. Foster Grant has you game-day ready. Geaux Tigers.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Houston Cougars Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-hou-shield.jpg',
              alt: 'Foster Grant® Collegiate white Houston Cougars shield sunglasses with red-gold mirrored lens',
              text: 'Whose house? Coogs’ house! These Foster Grant® Collegiate Houston Cougars Shield Unisex Sunglasses hit hard with a clean white frame and a striking red-gold mirrored shield lens. Scratch and impact resistant lenses are built to keep up, and the bold look carries the quality Foster Grant is known for. Rep the Cougars from kickoff to the final whistle, and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. Foster Grant has you game-day ready. Go Coogs.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Wisconsin Badgers Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-wis-shield.jpg',
              alt: 'Foster Grant® Collegiate red Wisconsin Badgers shield sunglasses with gold mirrored lens',
              text: 'Camp Randall, it’s go time! These Foster Grant® Collegiate Wisconsin Badgers Shield Unisex Sunglasses hit hard with a sleek red frame and full-coverage red-to-gold mirrored shield lens. Scratch and impact resistant lenses are built to keep up, and the sporty shape carries the quality Foster Grant is known for. Strap them on, bring that Jump Around energy wherever you go and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. Foster Grant has you game-day ready. On, Wisconsin.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Auburn Tigers Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-aub-shield.jpg',
              alt: 'Foster Grant® Collegiate navy Auburn Tigers shield sunglasses with orange-gold mirrored lens',
              text: 'Auburn through and through! These Foster Grant® Collegiate Auburn Tigers Shield Unisex Sunglasses mean business. Navy frame, orange-gold mirrored shield lens, full wraparound coverage. Scratch and impact resistant lenses take the hits, the mirror coating brings the shine, and 100% UVA-UVB lens protection from the sun’s harmful rays has you covered. War Eagle. All in. Foster Grant.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Arkansas Razorbacks® Way Unisex Sunglasses',
              image: 'img/collegiate/pdp-ark-way.jpg',
              alt: 'Foster Grant® Collegiate red and white Arkansas Razorbacks Way sunglasses with mirrored lenses',
              text: 'Bleed Razorback® red every day with these Foster Grant® Collegiate Arkansas Razorbacks® Way Unisex Sunglasses. Red front, white arms, warm mirrored lenses. Built to back you up. Scratch and impact resistant lenses take whatever the day throws at them, and the mirror coating brings the shine. Pull them on, call the Hogs loud and proud, and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Florida Gator Way Unisex Sunglasses',
              image: 'img/collegiate/pdp-uof-way.jpg',
              alt: 'Foster Grant® Collegiate orange and blue Florida Gator Way sunglasses with blue mirrored lenses',
              text: 'Saturdays in The Swamp, all year long! These Foster Grant® Collegiate Florida Gator Way Unisex Sunglasses show up with a bright orange front, bold blue temples, and cool blue-mirrored lenses. Scratch and impact resistant lenses keep this classic shape ready for whatever the day throws down, and the mirror coating brings the shine. Carry that Gator pride from campus to the water’s edge and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. It’s a new era. Foster Grant has you game-day ready. Go Gators.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Kentucky Wildcat Way Unisex Sunglasses',
              image: 'img/collegiate/pdp-ken-way.jpg',
              alt: 'Foster Grant® Collegiate blue and white Kentucky Wildcat Way sunglasses with mirrored lenses',
              text: 'Big Blue Nation, this one’s for you! These Foster Grant® Collegiate Kentucky Wildcat Way Unisex Sunglasses come ready with a blue front, clean white temples, and crisp mirrored lenses. Scratch and impact resistant lenses keep this classic shape ready for whatever the day throws at you. Rep the Bluegrass State from the 859 and beyond and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. Foster Grant has you game-day ready. Sky’s the limit. Go Cats.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Arkansas Razorbacks® Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-ark-shield.jpg',
              alt: 'Foster Grant® Collegiate red Arkansas Razorbacks shield sunglasses with red-gold mirrored lens',
              text: 'Razorback® red, front to back! These Foster Grant® Collegiate Arkansas Razorbacks® Shield Unisex Sunglasses go all in. Streamlined red frame, fiery red-gold mirrored shield lens, full wraparound coverage. Scratch and impact resistant lenses take the hits, the mirror coating brings the shine, and 100% UVA-UVB lens protection from the sun’s harmful rays has you covered. Wooo Pig Sooie®'
            } },

            { product: {
              name: 'Foster Grant® Collegiate USC Gamecocks Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-usc-shield.jpg',
              alt: 'Foster Grant® Collegiate garnet USC Gamecocks shield sunglasses with smoke mirrored lens',
              text: 'Williams-Brice, it’s go time! These Foster Grant® Collegiate USC Gamecocks Shield Unisex Sunglasses hit hard with a garnet frame, smoke mirrored shield lens, and full wraparound coverage. Scratch and impact resistant lenses are built to keep up, and the sleek shape carries the quality Foster Grant is known for. Ride that Sandstorm roar wherever you go and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. Foster Grant has you game-day ready.'
            } },

            { product: {
              name: 'Foster Grant® Collegiate Georgia Bulldogs Shield Unisex Sunglasses',
              image: 'img/collegiate/pdp-geo-shield.jpg',
              alt: 'Foster Grant® Collegiate red Georgia Bulldogs shield sunglasses with warm mirrored lens',
              text: 'DawgNation, it’s go time! These Foster Grant® Collegiate Georgia Bulldogs Shield Unisex Sunglasses hit hard with a streamlined red frame, warm mirrored wraparound lens, and full coverage. Scratch and impact resistant lenses are built to keep up and the mirror coating brings the shine Foster Grant is known for. Bring that Between the Hedges energy wherever you go and let 100% UVA-UVB lens protection from the sun’s harmful rays have your back. Foster Grant has you game-day ready. Go Dawgs.'
            } }
          ]
        }

      ],
      excerpt: null,
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
  copywriting: 'Client work, campaigns, and copy systems. Written to sound like a person and still survive a brand review.',
  passion: 'The things nobody assigned me. Built after hours, mostly out of curiosity and mild stubbornness.',
  journal: 'Longer thoughts, loosely edited. Written for the pleasure of the sentence rather than the click.'
};

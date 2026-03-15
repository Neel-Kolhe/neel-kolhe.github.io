/**
 * ============================================================
 *  WEBSITE DATA — Edit this file to update your website
 * ============================================================
 *
 *  TEXT FORMATTING — All text fields support Markdown:
 *
 *    **bold**          *italic*          ~~strikethrough~~
 *    ## Heading        ### Sub-heading   #### Smaller heading
 *    - bullet item     1. numbered item
 *    [link text](url)
 *    ---               (horizontal rule)
 *    > blockquote
 *
 *  SIDEBARS: Set sidebar.left / sidebar.right to an asset path,
 *  or null to leave that side empty.
 * ============================================================
 */

const SITE = {

  // ── META ──────────────────────────────────────────────────
  name:         "Neel Kolhe",
  footer:       "🄯 2025 Neel Kolhe. Images used on the website are in the public domain, attempts at attributions have been made when under creative commons, please get in touch if I missed something.",
  headerImage:  "assets/header.png",
  profilePhoto: "assets/profile.jpg",

  // ── PROFILE LINKS (shown on Home & Publications) ──────────
  profileLinks: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=uNi-v5sAAAAJ&hl=en" },
    { label: "ORCID",          url: "https://orcid.org" },
    { label: "INSPIRE-HEP",    url: "https://inspirehep.net" },
    { label: "arXiv",          url: "https://arxiv.org" },
  ],

  // ── SOCIAL LINKS (shown on Contact) ───────────────────────
  socialLinks: [
    { label: "Twitter",   url: "https://twitter.com/neel_kolhe" },
    { label: "Instagram", url: "https://www.instagram.com/neel_observes/" },
    //{ label: "GitHub",    url: "https://github.com/yourusername" },
    //{ label: "LinkedIn",  url: "https://linkedin.com/in/yourprofile" },
  ],

  // ══════════════════════════════════════════════════════════
  //  PAGES — add, remove, or reorder sections here
  // ══════════════════════════════════════════════════════════
  pages: [

    // ── HOME ────────────────────────────────────────────────
    {
      id:    "home",
      label: "Home",
      sidebar: {
        left:  "assets/sibe_bar_flower.jpg",
        right: "assets/sky4.jpg",
      },
      content: {
        type: "home",

        // bio supports full Markdown — use ## for headings, **bold**, *italic*, - lists, etc.
        bio: `
I am a PhD scholar at the **Paris Observatory**. My current work focuses on the
dynamics of **Dwarf Irregular galaxies** using state-of-the-art 21 cm Radio observations
and N-body hydrodynamical simulations. I study internal gas structures inside isolated
irregulars and how they interact with the intergalactic medium (IGM) they are embedded in.



---

### Research Themes

Dwarf Irregulars have long been known to have asymmetric kinematics, gas distributions
offset from stellar structures, distinct dichotomies in their population — some being
extremely gas rich and others not at all. My thesis work aims to push towards understanding
the origins of these properties.

Dwarf irregulars are the most common galaxy type in the universe, and their progenitors
are considered to be the building blocks in the hierarchical merger growth and evolution of
larger galaxies, and yet their dynamics is poorly understood. Isolated irregulars are often
used to test various ideas spanning many subfields, including dark matter studies. Therefore
a rigorous understanding of their dynamics is crucial.
        `,
      },
    },

    // ── PUBLICATIONS ────────────────────────────────────────
    {
      id:    "publications",
      label: "Science Publications",
      sidebar: {
        left:  "assets/raven_vas.jpg",
        right: "assets/sky5.jpg",
      },
      content: {
        type: "publications",

        selected: [
          {
            title:   "Title of Your Most Important Publication",
            authors: "Author 1, Author 2, Neel Kolhe, Author 4",
            venue:   "Top Journal Name, Vol. 1(1), pp. 1–20, 2024",
            url:     "https://arxiv.org",
          },
          {
            title:   "Title of Another Key Publication",
            authors: "Neel Kolhe, Collaborator 1, Collaborator 2",
            venue:   "Major Conference Proceedings, 2023",
            url:     null,
          },
        ],

        all: [
          {
            title:   "Title of Publication 1",
            authors: "Authors list",
            venue:   "Journal/Conference, 2024",
            url:     null,
          },
          {
            title:   "Title of Publication 2",
            authors: "Authors list",
            venue:   "Journal/Conference, 2023",
            url:     null,
          },
          {
            title:   "Title of Publication 3",
            authors: "Authors list",
            venue:   "Journal/Conference, 2023",
            url:     null,
          },
          {
            title:   "Title of Publication 4",
            authors: "Authors list",
            venue:   "Journal/Conference, 2022",
            url:     null,
          },
          {
            title:   "Title of Publication 5",
            authors: "Authors list",
            venue:   "Journal/Conference, 2022",
            url:     null,
          },
        ],
      },
    },

    // ── WRITINGS ────────────────────────────────────────────
    {
      id:    "writings",
      label: "Other Writings",
      sidebar: {
        left:  "assets/collage1.jpg",
        right: "assets/sibe_bar_flower2.jpg",
      },
      content: {
        type: "writings",
        items: [
          {
            title:   "Near-Miss Collisions with Starlink Satellites Are a Wake-Up Call for the Space Sector",
            date:    "March 2025",
            venue:   "The Wire",
            // text supports Markdown — **bold**, *italic*, - lists, links, etc.
            text:    `With more satellite constellations soon to be in orbit, there needs to be a
global dialogue about the unintended consequences of orbit crowding,
light pollution and space debris. There is very little discussion aboout how this affects current and future astronomical observatories in India.`,
            url:     "https://thewire.in/space/near-miss-collisions-with-starlink-satellites-are-a-wake-up-call-for-the-space-sector",
          },
          {
            title:   "What Are the Alternatives to MCQs for PhD Admissions?",
            date:    "April 2024",
            venue:   "The Wire",
            text:    `With a steady centralising drift towards all postgrad admissions in India through single channels of entry, institutions loose
            academic autonomy. This article discusses the concerns surrounding the issue, and offers alternative structures to PhD admissions, all with their own flaws, but alternatives nevertheless.`,
            url:     "https://thewire.in/education/what-are-the-alternatives-to-mcqs-for-phd-admissions",
          },
          {
            title:   "Title of Blog Post or Article 3",
            date:    "October 2023",
            venue:   null,
            text:    `Reflections on your research journey, explanations of complex topics,
or thoughts on current developments in your field.`,
            url:     null,
          },
        ],
      },
    },

    // ── TALKS / OUTREACH ─────────────────────────────────────
    {
      id:    "outreach",
      label: "Talks",
      sidebar: {
        left:  "assets/sput.jpg",
        right: "assets/sput2.jpg",
      },
      content: {
        type: "outreach",
        items: [
          {
            title:     "Public Lecture: Understanding the Universe",
            image:     "assets/outreach1.jpg",
            // text supports Markdown
            text:      `A talk for general audiences exploring the fundamental questions
in modern physics and how we're working to answer them through
cutting-edge research and observations.`,
            linkLabel: "Learn more →",
            url:       "#",
          },
          {
            title:     "Science Festival Workshop",
            image:     "assets/outreach2.jpg",
            text:      `Interactive workshop for high school students introducing the basics
of galaxy dynamics. Participants engaged in hands-on activities and
discussions about careers in science.`,
            linkLabel: "Learn more →",
            url:       "#",
          },
          {
            title:     "Podcast Interview: The Science Show",
            image:     "assets/outreach3.jpg",
            text:      `Discussion about my research and its implications for our understanding
of galaxy evolution. We explored how fundamental research connects to
everyday life and future technologies.`,
            linkLabel: "Listen here →",
            url:       "#",
          },
          {
            title:     "School Visit Program",
            image:     "assets/outreach4.jpg",
            text:      `Regular visits to local schools to inspire young students about
science, mathematics, and research. Includes demonstrations, Q&A
sessions, and mentorship opportunities.`,
            linkLabel: "Learn more →",
            url:       "#",
          },
        ],
      },
    },

    // ── CV ──────────────────────────────────────────────────
    {
      id:    "cv",
      label: "CV",
      sidebar: {
        left:  "assets/sky2.jpg",
        right: "assets/astro2.jpg",
      },
      content: {
        type:    "cv",
        pdfPath: "assets/cv.pdf",
      },
    },

    // ── CONTACT ─────────────────────────────────────────────
    {
      id:    "contact",
      label: "Contact",
      sidebar: {
        left:  "assets/Haeckel_jelly.jpg",
        right: "assets/jelly2.jpg",
      },
      content: {
        type:  "contact",
        email: "kolhe.sci@gmail.com",
        address: [
          "Room 4, Building 12-Copernicus,",
          "Observatoire de Paris,",
          "Place Jules Janssen, 92195 Meudon,",
          "France",
        ],
        note: "(I can also be found in my home city of Mumbai on random occasions!)",
      },
    },

  ], // end pages
};

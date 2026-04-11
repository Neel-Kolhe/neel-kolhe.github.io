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
  footer:       "🄯. Images used on the website are in the public domain, attempts at attributions have been made when under creative commons, please get in touch if I missed something. Assume stuff in the body of this site to be CC BY if made by me. ",
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

In the past I have contributed to observational and theoretical studies in the field of detecting
low frequency gravitational waves using pulsar timing. Our work included studies which showed the
first evidence towards the detection of a gravitational wave background. 

Whenever I get the time, I also work on developing pedagogocal tools and physics experiments which make teaching the subject more fun.

I deeply believe in taking scientists' responsibility of taking science as is out of observatories, labs and abstractions to the people 
in the communities we serve and who fund us, not just for the sake of communication but as a means of social transformation and active dialogue
between socieites and science, as science itself is a deeply human and social endeavour.    



---



        `,
      },
    },



    {
  id:    "research",              // change this if you duplicate the page
  label: "Research",             // this is what shows in the menu

  // Optional decorative side images
  sidebar: {
        left:  "assets/sibe_bar_flower.jpg",
        right: "assets/sky4.jpg",
  },

  content: {
    type: "page",   // generic rich-text page

    // Main page content supports FULL MARKDOWN
    body: `

## Research Overview

*This page contains a overview of my science work, for a full list of research publications, please check the next page*

##  Dynamics of Dwarf Irregular Galaxies

#### Gas dynamics in galaxies and it's relationship to gas on cosmological scales

Dwarf Irregulars have long been known to have asymmetric kinematics, gas distributions
offset from stellar structures, distinct dichotomies in their population — some being
extremely gas rich and others not at all. My thesis work aims to push towards understanding
the origins of these properties.

Dwarf irregulars are the most common galaxy type in the universe, and their progenitors
are considered to be the building blocks in the hierarchical merger growth and evolution of
larger galaxies, and yet their dynamics is poorly understood. Isolated irregulars are often
used to test various ideas spanning many subfields, including dark matter studies. Therefore
a rigorous understanding of their dynamics is crucial.

There is emerging evidence that even a low density intergalactic medium can perturb the outskirts of these galaxies,
we are attempting to study the complexities of this interaction, and use these interactions as a probe into the properties
of the IGM itself in an independent manner.

### Add an image below

![HI gas map of a dwarf irregular](assets/research_image1.jpg)

*Caption describing what the image shows.*

---

//## Theme 2 — Interaction with the Intergalactic Medium (IGM)

//Explain the IGM interaction story here.

//![Simulation snapshot](assets/research_image2.jpg)

---

//## Theme 3 — Past Work: Pulsar Timing & Gravitational Waves

//Brief description of earlier work and how it connects to present research.

---

//## Methods I Use

//- 21 cm radio observations
//- Kinematic modelling
//- N-body + hydrodynamical simulations
//- Data analysis pipelines

---

//## Why Dwarf Irregulars Matter

//This is a good place for a slightly more conceptual / big-picture explanation.

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
            title:   "WLM: Dynamics of an isolated dwarf irregular galaxy under ram pressure in the Local Group",
            authors: "Neel Kolhe, Francois Hammer, Yanbin Yang, Brenda Namumba, Laurent Chemin, Philippe Amram, Roger Ianjamasimanana, Claude Carignan",
            venue:   "Astronomy & Astrophysics, 707, A309 (2026)",
            url:     "https://doi.org/10.1051/0004-6361/202557380",
          },
          {
            title:   "The second data release from the European Pulsar Timing Array III. Search for gravitational wave signals",
            authors: "European Pulsar Timing Array Collaboration, Indian Pulsar Timing Array Collaboration",
            venue:   "Astronomy & Astrophysics, 678, A50 (2023)",
            url:     null,
          },

          {
            title:   "A novel cantenna based demonstration of frustrated total internal reflection as an analog for quantum tunnelling",
            authors: "Neel Kolhe, Sreyashi Shetty",
            venue:   "IOP Science Phys. Educ. 58 025011 (2023)",
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
      label: "Public Talks & appearances",
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

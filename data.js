/**
 * ============================================================
 *  WEBSITE DATA — Edit this file to update your website
 * ============================================================
 *
 *  SIDEBARS: Each section can optionally show images in the
 *  left/right columns. Set sidebar.left and/or sidebar.right
 *  to a path inside assets/, e.g. "assets/galaxy.jpg".
 *  Set to null to leave a sidebar empty for that section.
 * ============================================================
 */

const SITE = {

  // ── META ──────────────────────────────────────────────────
  name:       "Neel Kolhe",
  footer:     "© 2025 Neel Kolhe. All rights reserved.",
  headerImage: "assets/header.png",
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
  //  Each page needs: id, label, and content block
  // ══════════════════════════════════════════════════════════
  pages: [

    // ── HOME ────────────────────────────────────────────────
    {
      id:    "home",
      label: "Home",
      sidebar: {
        left:  null,               // e.g. "assets/milkyway.jpg"
        right: null,
      },
      content: {
        type: "home",
        bio: [
          `I am a PhD scholar at the Paris Observatory. My current work focuses on
          the dynamics of Dwarf Irregular galaxies using state-of-the-art 21 cm
          Radio observations and N-body hydrodynamical simulations. Dwarf Irregulars
          are the most common galaxy type in the universe, and yet their dynamics
          and evolution on a cosmological time scale is poorly understood.

          
        
          `,

          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.`,
        ],
      },
    },

    // ── PUBLICATIONS ────────────────────────────────────────
    {
      id:    "publications",
      label: "Publications",
      sidebar: {
        left:  null,
        right: null,              // e.g. "assets/telescope.jpg"
      },
      content: {
        type: "publications",

        // ── Selected (shown first with a "Selected" heading) ──
        selected: [
          {
            title:   "Title of Your Most Important Publication",
            authors: "Author 1, Author 2, Neel Kolhe, Author 4",
            venue:   "Top Journal Name, Vol. 1(1), pp. 1–20, 2024",
            url:     "https://arxiv.org",           // set to null to hide link
          },
          {
            title:   "Title of Another Key Publication",
            authors: "Neel Kolhe, Collaborator 1, Collaborator 2",
            venue:   "Major Conference Proceedings, 2023",
            url:     null,
          },
        ],

        // ── All publications ──────────────────────────────────
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

    // ── CV ──────────────────────────────────────────────────
    {
      id:    "cv",
      label: "CV",
      sidebar: {
        left:  null,
        right: null,
      },
      content: {
        type:    "cv",
        pdfPath: "assets/cv.pdf",
      },
    },

    // ── OUTREACH ────────────────────────────────────────────
    {
      id:    "outreach",
      label: "Science Outreach",
      sidebar: {
        left:  null,
        right: null,
      },
      content: {
        type: "outreach",
        items: [
          {
            title:  "Public Lecture: Understanding the Universe",
            image:  "assets/outreach1.jpg",
            text:   `A talk for general audiences exploring the fundamental questions
                    in modern physics and how we're working to answer them through
                    cutting-edge research and observations.`,
            linkLabel: "Learn more →",
            url:    "#",
          },
          {
            title:  "Science Festival Workshop",
            image:  "assets/outreach2.jpg",
            text:   `Interactive workshop for high school students introducing the basics
                    of galaxy dynamics. Participants engaged in hands-on activities and
                    discussions about careers in science.`,
            linkLabel: "Learn more →",
            url:    "#",
          },
          {
            title:  "Podcast Interview: The Science Show",
            image:  "assets/outreach3.jpg",
            text:   `Discussion about my research and its implications for our understanding
                    of galaxy evolution. We explored how fundamental research connects to
                    everyday life and future technologies.`,
            linkLabel: "Listen here →",
            url:    "#",
          },
          {
            title:  "School Visit Program",
            image:  "assets/outreach4.jpg",
            text:   `Regular visits to local schools to inspire young students about
                    science, mathematics, and research. Includes demonstrations, Q&A
                    sessions, and mentorship opportunities.`,
            linkLabel: "Learn more →",
            url:    "#",
          },
        ],
      },
    },

    // ── WRITINGS ────────────────────────────────────────────
    {
      id:    "writings",
      label: "Other Writings",
      sidebar: {
        left:  null,
        right: null,
      },
      content: {
        type: "writings",
        items: [
          {
            title: "Title of Blog Post or Article 1",
            date:  "January 2024",
            text:  `A brief description of this writing piece. This could be a blog post,
                   opinion article, or popular science piece explaining your research to
                   a broader audience.`,
            linkLabel: "Read more →",
            url:  "#",
          },
          {
            title: "Title of Blog Post or Article 2",
            date:  "December 2023",
            text:  `Another piece of writing that showcases your communication skills
                   and ability to engage with different audiences beyond academic papers.`,
            linkLabel: "Read more →",
            url:  "#",
          },
          {
            title: "Title of Blog Post or Article 3",
            date:  "October 2023",
            text:  `Reflections on your research journey, explanations of complex topics,
                   or thoughts on current developments in your field.`,
            linkLabel: "Read more →",
            url:  "#",
          },
        ],
      },
    },

    // ── CONTACT ─────────────────────────────────────────────
    {
      id:    "contact",
      label: "Contact",
      sidebar: {
        left:  null,
        right: null,
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

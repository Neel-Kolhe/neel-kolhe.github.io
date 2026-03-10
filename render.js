/**
 * render.js — reads SITE from data.js and builds the page.
 * You should never need to edit this file.
 *
 * Text fields in data.js support Markdown:
 *   **bold**  *italic*  ## Heading  ### Sub-heading
 *   - bullet  1. numbered  [link](url)  ---  > blockquote
 */

(function () {
  "use strict";

  // ── Markdown helper ───────────────────────────────────────
  // Renders a markdown string into a div.
  // Falls back to plain text if marked.js isn't loaded.
  function md(text) {
    if (!text) return el("span", {});
    const html = (typeof marked !== "undefined")
      ? marked.parse(text.trim())
      : text.trim().replace(/\n/g, "<br>");
    return el("div", { class: "md-body", html });
  }

  // ── helpers ───────────────────────────────────────────────
  function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v;
      else if (k === "html")  e.innerHTML = v;
      else e.setAttribute(k, v);
    }
    children.flat().forEach(c => {
      if (c == null) return;
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return e;
  }

  function h2(text) { return el("h2", {}, text); }

  function linkButton(label, url) {
    return el("a", { class: "btn", href: url, target: "_blank" }, label);
  }

  function profileLinksRow(links) {
    return el("div", { class: "profile-links" },
      ...links.map(l => linkButton(l.label, l.url))
    );
  }

  // ── publication item ──────────────────────────────────────
  function pubItem(p) {
    const titleEl = p.url
      ? el("a", { class: "pub-title-link", href: p.url, target: "_blank" }, p.title)
      : el("span", {}, p.title);
    return el("div", { class: "publication-item" },
      el("div", { class: "publication-title" }, titleEl),
      el("div", { class: "publication-authors" }, p.authors),
      el("div", { class: "publication-venue" }, p.venue),
    );
  }

  // ── page renderers ────────────────────────────────────────
  const renderers = {

    home(content) {
      const wrap = el("div", { class: "profile-section" });
      const textCol = el("div", { class: "profile-content" });
      textCol.appendChild(el("h1", {}, SITE.name));

      // bio can be a markdown string OR a legacy array of strings
      const bioText = Array.isArray(content.bio)
        ? content.bio.join("\n\n")
        : content.bio;
      textCol.appendChild(md(bioText));

      textCol.appendChild(profileLinksRow(SITE.profileLinks));
      wrap.appendChild(textCol);

      const imgCol = el("div", { class: "profile-image-container" });
      imgCol.appendChild(el("img", {
        src: SITE.profilePhoto,
        alt: SITE.name,
        class: "profile-photo",
      }));
      wrap.appendChild(imgCol);
      return wrap;
    },

    publications(content) {
      const frag = document.createDocumentFragment();
      frag.appendChild(profileLinksRow(SITE.profileLinks));

      frag.appendChild(h2("Selected Publications"));
      const selList = el("div", { class: "publications-list" });
      content.selected.forEach(p => selList.appendChild(pubItem(p)));
      frag.appendChild(selList);

      frag.appendChild(h2("All Publications"));
      const allList = el("div", { class: "publications-list" });
      content.all.forEach(p => allList.appendChild(pubItem(p)));
      frag.appendChild(allList);

      return frag;
    },

    // ── Generic markdown page ─────────────────────────────
    // Use type: "markdown" in data.js for any freeform page.
    // content.body is a markdown string.
    markdown(content) {
      return md(content.body);
    },

    cv(content) {
      const wrap = el("div", { class: "cv-embed" });
      wrap.appendChild(el("iframe", { src: content.pdfPath, title: "Curriculum Vitae" }));
      wrap.appendChild(el("br", {}));
      wrap.appendChild(el("a", {
        class: "btn download-cv",
        href: content.pdfPath,
        download: "",
      }, "Download CV (PDF)"));
      return wrap;
    },

    outreach(content) {
      const list = el("div", { class: "outreach-list" });
      content.items.forEach(item => {
        const card = el("div", { class: "outreach-item" });
        if (item.image) {
          card.appendChild(el("img", {
            src: item.image, alt: item.title, class: "outreach-thumbnail",
          }));
        }
        const body = el("div", { class: "outreach-content" });
        body.appendChild(el("h3", {}, item.title));
        body.appendChild(md(item.text));                // ← markdown support
        if (item.url && item.url !== "#") {
          body.appendChild(el("a", { href: item.url, target: "_blank" }, item.linkLabel));
        } else if (item.url) {
          body.appendChild(el("a", { href: item.url }, item.linkLabel));
        }
        card.appendChild(body);
        list.appendChild(card);
      });
      return list;
    },

    writings(content) {
      const list = el("div", { class: "writings-list" });
      content.items.forEach(item => {
        const card = el("div", { class: "writing-item" });

        // Title — clickable if url is set
        const titleEl = item.url
          ? el("a", { class: "writing-title-link", href: item.url, target: "_blank" }, item.title)
          : el("span", {}, item.title);
        card.appendChild(el("h3", {}, titleEl));

        // Meta: date · venue/journal
        const venue = item.venue || item.journal || null;
        const meta = el("div", { class: "writing-meta" });
        if (item.date)   meta.appendChild(el("span", { class: "writing-date" }, item.date));
        if (item.date && venue) meta.appendChild(el("span", { class: "writing-sep" }, " · "));
        if (venue)       meta.appendChild(el("span", { class: "writing-journal" }, venue));
        card.appendChild(meta);

        card.appendChild(md(item.text));                // ← markdown support
        list.appendChild(card);
      });
      return list;
    },

    contact(content) {
      const frag = document.createDocumentFragment();
      const info = el("div", { class: "contact-info" });

      info.appendChild(el("p", {},
        el("strong", {}, "Email: "),
        el("a", { href: `mailto:${content.email}` }, content.email),
      ));

      const addrP = el("p", {});
      addrP.appendChild(el("strong", {}, "Office Address:"));
      content.address.forEach(line => {
        addrP.appendChild(el("br", {}));
        addrP.appendChild(document.createTextNode(line));
      });
      info.appendChild(addrP);

      if (content.note) {
        info.appendChild(el("p", { class: "contact-note" },
          el("strong", {}, content.note)
        ));
      }
      frag.appendChild(info);
      frag.appendChild(h2("Find Me Online"));
      frag.appendChild(profileLinksRow(SITE.socialLinks));
      return frag;
    },
  };

  // ── sidebar ───────────────────────────────────────────────
  function makeSidebar(src) {
    const col = el("div", { class: "sidebar-col" });
    if (src) col.appendChild(el("img", { src, alt: "", class: "sidebar-img" }));
    return col;
  }

  // ── build nav ─────────────────────────────────────────────
  function buildNav() {
    const ul = document.querySelector("nav ul");
    SITE.pages.forEach(page => {
      const li = el("li", {});
      const a = el("a", { href: `#${page.id}` }, page.label);
      a.addEventListener("click", e => {
        e.preventDefault();
        showPage(page.id);
        history.pushState(null, "", `#${page.id}`);
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  // ── build pages ───────────────────────────────────────────
  function buildPages() {
    const container = document.getElementById("pages-container");
    SITE.pages.forEach((page, i) => {
      const row = el("div", { class: "page-row", id: `page-${page.id}` });
      if (i === 0) row.classList.add("active");

      const sb = page.sidebar || {};
      row.appendChild(makeSidebar(sb.left));

      const main = el("div", { class: "page-main" });
      if (page.content.type !== "home") main.appendChild(h2(page.label));

      const renderer = renderers[page.content.type];
      if (renderer) {
        const built = renderer(page.content);
        main.appendChild(built);
      }

      row.appendChild(main);
      row.appendChild(makeSidebar(sb.right));
      container.appendChild(row);
    });
  }

  // ── show/hide pages ───────────────────────────────────────
  function showPage(id) {
    document.querySelectorAll(".page-row").forEach(r => r.classList.remove("active"));
    const target = document.getElementById(`page-${id}`);
    if (target) target.classList.add("active");
    document.querySelectorAll("nav a").forEach(a => {
      a.classList.toggle("nav-active", a.getAttribute("href") === `#${id}`);
    });
  }

  window.showPage = showPage;

  // ── init ──────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    const hdr = document.getElementById("header-img");
    if (hdr) hdr.src = SITE.headerImage;
    const ftr = document.getElementById("footer-text");
    if (ftr) ftr.textContent = SITE.footer;

    buildNav();
    buildPages();

    const hash = window.location.hash.substring(1);
    if (hash && SITE.pages.some(p => p.id === hash)) showPage(hash);
    else showPage(SITE.pages[0].id);

    window.addEventListener("popstate", () => {
      const h = window.location.hash.substring(1);
      if (h) showPage(h);
    });
  });

})();

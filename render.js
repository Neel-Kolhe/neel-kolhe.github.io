/**
 * render.js — reads SITE from data.js and builds the page
 * You should never need to edit this file.
 */

(function () {
  "use strict";

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

  function h2(text) {
    return el("h2", {}, text);
  }

  function linkButton(label, url) {
    return el("a", { class: "btn", href: url, target: "_blank" }, label);
  }

  // ── profile-links row ─────────────────────────────────────
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
      const desc = el("div", { class: "description" });
      content.bio.forEach(p => desc.appendChild(el("p", {}, p.trim())));
      textCol.appendChild(desc);
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

    cv(content) {
      const wrap = el("div", { class: "cv-embed" });
      wrap.appendChild(el("iframe", { src: content.pdfPath, title: "Curriculum Vitae" }));
      const dl = el("a", {
        class: "btn download-cv",
        href: content.pdfPath,
        download: "",
      }, "Download CV (PDF)");
      wrap.appendChild(el("br", {}));
      wrap.appendChild(dl);
      return wrap;
    },

    outreach(content) {
      const list = el("div", { class: "outreach-list" });
      content.items.forEach(item => {
        const card = el("div", { class: "outreach-item" });
        if (item.image) {
          card.appendChild(el("img", {
            src: item.image,
            alt: item.title,
            class: "outreach-thumbnail",
          }));
        }
        const body = el("div", { class: "outreach-content" });
        body.appendChild(el("h3", {}, item.title));
        body.appendChild(el("p", {}, item.text.trim()));
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
        card.appendChild(el("h3", {}, item.title));
        card.appendChild(el("div", { class: "writing-date" }, `Published: ${item.date}`));
        card.appendChild(el("p", {}, item.text.trim()));
        if (item.url) {
          card.appendChild(el("a", { href: item.url }, item.linkLabel));
        }
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

  // ── sidebar image ─────────────────────────────────────────
  function makeSidebar(src) {
    const col = el("div", { class: "sidebar-col" });
    if (src) {
      col.appendChild(el("img", { src, alt: "", class: "sidebar-img" }));
    }
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
      // Outer row: left sidebar | content | right sidebar
      const row = el("div", { class: "page-row", id: `page-${page.id}` });
      if (i === 0) row.classList.add("active");

      const sb = page.sidebar || {};
      row.appendChild(makeSidebar(sb.left));

      // Main content column
      const main = el("div", { class: "page-main" });
      if (page.content.type !== "home") {
        main.appendChild(h2(page.label));
      }
      const renderer = renderers[page.content.type];
      if (renderer) {
        const built = renderer(page.content);
        if (built instanceof DocumentFragment) main.appendChild(built);
        else main.appendChild(built);
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

    // update nav active state
    document.querySelectorAll("nav a").forEach(a => {
      a.classList.toggle("nav-active", a.getAttribute("href") === `#${id}`);
    });
  }

  // ── expose globally for potential external use ────────────
  window.showPage = showPage;

  // ── init ──────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    // Header image
    const hdr = document.getElementById("header-img");
    if (hdr) hdr.src = SITE.headerImage;

    // Footer
    const ftr = document.getElementById("footer-text");
    if (ftr) ftr.textContent = SITE.footer;

    buildNav();
    buildPages();

    // Handle URL hash
    const hash = window.location.hash.substring(1);
    if (hash && SITE.pages.some(p => p.id === hash)) {
      showPage(hash);
    } else {
      showPage(SITE.pages[0].id);
    }

    // Browser back/forward
    window.addEventListener("popstate", () => {
      const h = window.location.hash.substring(1);
      if (h) showPage(h);
    });
  });

})();

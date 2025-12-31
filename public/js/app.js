// app.js
// Portfolio SPA (Hash Router) + Resume opens in new tab + Project Screenshot Gallery (Lightbox)
// ===============================================================================

const APP = document.getElementById("app");

// ------------------------- CONTACT + RESUME -------------------------
const CONTACT = {
  email: "wasiuomololaz@email.com",
  linkedin: "https://www.linkedin.com/in/tayo-omolola/",
  github: "https://github.com/RumeoLola",
  location: "Baltimore, MD",
};

// IMPORTANT: Your actual file name includes a space.
// Keep the %20 encoding for the space:
const RESUME_URL = "assets/resume/Tayo%20Resume.pdf";

const CERTIFICATES = [
  {
    title: "CompTIA A+ Certificate",
    subtitle: "Credential verification document",
    file: "assets/certificates/CompTIA A+ ce certificate.pdf", // note: + must be encoded as %2B
  }
];

// ------------------------- PROJECT DATA -------------------------
const PROJECTS = [
  {
    id: "trip-cost",
    title: "Java GUI Trip Cost Calculator",
    category: ["java"],
    tech: ["Java", "Swing", "OOP"],
    summary:
      "A desktop application that estimates road-trip fuel costs while supporting both Imperial and Metric unit combinations.",
    bullets: [
      "Designed a clean Swing interface with unit selection controls",
      "Implemented immutable calculation logic for consistent results",
      "Supported multiple unit-conversion pathways accurately",
    ],
    links: { github: "#", demo: "#" },
    screenshots: [
      "assets/img/projects/trip-cost/1.png",
      "assets/img/projects/trip-cost/2.png",
      "assets/img/projects/trip-cost/3.png",
    ],
  },
  {
    id: "web-store",
    title: "Single-Page Web Store (SPA)",
    category: ["web"],
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap", "Local Storage"],
    summary:
      "A responsive storefront with product browsing, cart persistence, and structured UI patterns for real usability.",
    bullets: [
      "Built dynamic product rendering and reusable UI sections",
      "Implemented cart logic with persistent browser storage",
      "Focused on responsive layout and clear user flow",
    ],
    links: { github: "#", demo: "#" },
    screenshots: [
      "assets/img/projects/web-store/1.png",
      "assets/img/projects/web-store/2.png",
      "assets/img/projects/web-store/3.png",
    ],
  },
  {
    id: "irrigation",
    title: "Embedded Irrigation Automation System",
    category: ["python", "embedded"],
    tech: ["Python", "Raspberry Pi", "Arduino"],
    summary:
      "An automation prototype integrating programmable logic with hardware inputs and outputs for scheduled irrigation behavior.",
    bullets: [
      "Wrote Python scripts to coordinate sensors and actions",
      "Integrated microcontroller signals into a reliable workflow",
      "Emphasized system stability and repeatable configuration",
    ],
    links: { github: "#", demo: "#" },
    screenshots: [
      "assets/img/projects/irrigation/1.png",
      "assets/img/projects/irrigation/2.png",
      "assets/img/projects/irrigation/3.png",
    ],
  },
  {
    id: "unity",
    title: "Unity Game Development Prototypes",
    category: ["game"],
    tech: ["C#", "Unity"],
    summary:
      "2D prototypes focused on player movement, collisions, and reusable gameplay logic built through iterative development.",
    bullets: [
      "Implemented movement and interaction logic using C# scripts",
      "Designed reusable components to reduce repetition",
      "Improved debugging and iteration workflow inside an engine environment",
    ],
    links: { github: "#", demo: "#" },
    screenshots: [
      "assets/img/projects/unity/1.png",
      "assets/img/projects/unity/2.png",
      "assets/img/projects/unity/3.png",
    ],
  },
];

// ------------------------- ROUTES -------------------------
const routes = {
  home: renderHome,
  about: renderAbout,
  skills: renderSkills,
  certification: renderCertification,
  projects: renderProjects,
  experience: renderExperience,
  contact: renderContact,
};

function getRoute() {
  const hash = window.location.hash || "#/home";
  const route = hash.replace("#/", "").trim() || "home";
  return routes[route] ? route : "home";
}

function setActiveNav(route) {
  document.querySelectorAll(".nav-menu a[data-route]").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === route);
  });
}

function closeMobileNav() {
  const navMenu = document.getElementById("navMenu");
  const navToggle = document.getElementById("navToggle");
  navMenu?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function render() {
  const route = getRoute();
  setActiveNav(route);
  routes[route]();
  closeMobileNav();

  // Keep SPA page at top when switching routes
  window.scrollTo({ top: 0, behavior: "instant" });

  // Bind route-specific buttons after content is injected
  bindResumeButtons();
}

// ------------------------- RESUME (OPEN NEW TAB) -------------------------
function openResume() {
  // Opens PDF in a new tab/window
  window.open(RESUME_URL, "_blank", "noopener,noreferrer");
}

function bindResumeButtons() {
  // Navbar button (exists on every route if index.html has it)
  const navBtn = document.getElementById("resumeBtnNav");

  // Buttons only on some routes
  const homeBtn = document.getElementById("resumeBtnHome");
  const homeBtnAlt = document.getElementById("resumeBtnHomeAlt");
  const certBtn = document.getElementById("resumeBtnCert");
  const contactBtn = document.getElementById("resumeBtnContact");

  const handler = (e) => {
    e?.preventDefault?.();
    openResume();
  };

  navBtn?.addEventListener("click", handler);
  homeBtn?.addEventListener("click", handler);
  homeBtnAlt?.addEventListener("click", handler);
  certBtn?.addEventListener("click", handler);
  contactBtn?.addEventListener("click", handler);
}

// ------------------------- PAGES -------------------------
function renderHome() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <div>
          <p class="kicker">Computer Technician • CompTIA A+ • Computer Science Undergraduate (UMGC)</p>
          <h1 class="hero-title">Building reliable systems, practical tools, and clean user experiences.</h1>
          <p class="hero-sub">
            I am an entry-level technology professional with hands-on experience in device support, troubleshooting, and software development. This portfolio highlights applied projects in Java GUI development, web application design, and embedded automation, reflecting a strong foundation in technical fundamentals and real-world problem solving.
          </p>
          <div class="hero-cta">
            <a class="btn" href="#/projects">View Projects</a>
            <button class="btn btn-ghost" id="resumeBtnHome" type="button">View Resume</button>
            <a class="btn btn-ghost" href="#/contact">Contact</a>
          </div>
        </div>
      </div>

      <div class="badges">
        <div class="badge">
          <span class="badge-title">CompTIA A+</span>
          <span class="badge-sub">Hardware • OS • Networking • Security</span>
        </div>
        <div class="badge">
          <span class="badge-title">Hands-on Projects</span>
          <span class="badge-sub">Java • JavaScript • Python • Embedded</span>
        </div>
        <div class="badge">
          <span class="badge-title">Support Mindset</span>
          <span class="badge-sub">Documentation • Reliability • User-first</span>
        </div>
      </div>

      <div class="grid-2">
        <div class="panel">
          <h2>Quick Profile</h2>
          <p><strong>Location:</strong> <span class="muted">${escapeHtml(CONTACT.location)}</span></p>
          <p><strong>Focus:</strong> <span class="muted">IT Support • Systems • Development</span></p>
          <p><strong>Availability:</strong> <span class="muted">Open to tech roles</span></p>
          <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
            <a class="btn btn-small" href="#/contact">Contact</a>
            <button class="btn btn-small btn-ghost" id="resumeBtnHomeAlt" type="button">View Resume</button>
          </div>
        </div>

        <div class="panel">
          <h2>Hiring-Ready Focus</h2>
          <p>
            Certification visibility, practical projects, and clear technologies are presented for fast recruiter evaluation.
          </p>
          <p class="muted">
            Feel free to explore my portfolio for a detailed overview of my technical background, projects, and applied experience in technology-focused roles.
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <h1>About</h1>
        <p>A practical builder with a support-first mindset, focused on stability, clarity, and measurable outcomes.</p>
      </div>

      <div class="grid-2">
        <div class="panel">
          <h2>Professional Summary</h2>
          <p>
            I am a Computer Science undergraduate at UMGC and a technology professional with experience in IT support and software development.
            I have worked on device troubleshooting workflows and built projects demonstrating GUI development, web application structure, automation,
            and hardware-software integration.
          </p>
          <p>
            His goal is to contribute to teams that value reliability, thoughtful documentation, and user-centered implementation.
          </p>
        </div>

        <div class="panel">
          <h2>Strengths</h2>
          <ul class="muted" style="margin:0; padding-left:18px;">
            <li>Structured troubleshooting and clear communication</li>
            <li>Strong fundamentals across Windows and Linux environments</li>
            <li>Clean, maintainable code and consistent project organization</li>
            <li>Hands-on systems work: Raspberry Pi, Arduino, and automation</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <h1>Skills</h1>
        <p>Focused technical breadth with strong fundamentals.</p>
      </div>

      <div class="grid-2">
        <div class="panel">
          <h2>IT Support</h2>
          <ul class="muted" style="margin:0; padding-left:18px;">
            <li>Hardware diagnostics and repair workflows</li>
            <li>Operating system installation and configuration</li>
            <li>Ticketing discipline, documentation, and handoffs</li>
            <li>Networking fundamentals and endpoint troubleshooting</li>
          </ul>
        </div>

        <div class="panel">
          <h2>Programming + Tools</h2>
          <ul class="muted" style="margin:0; padding-left:18px;">
            <li>Java (OOP, Swing GUI)</li>
            <li>Python (automation and scripting)</li>
            <li>JavaScript (SPA patterns, local storage)</li>
            <li>C# (Unity scripting), Git/GitHub, Linux CLI</li>
          </ul>
        </div>
      </div>

      <div class="panel">
        <h2>Systems + Embedded</h2>
        <p class="muted" style="margin:0;">
          Raspberry Pi integrations, Arduino prototyping, sensor/actuator logic, automation mindset, and reliability-first implementation.
        </p>
      </div>
    </section>
  `;
}

function renderCertification() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <h1>Certification</h1>
        <p>Credentials and completion certificates embedded for easy review.</p>
      </div>

      <div class="panel">
        <h2>Certificates</h2>
        <p class="muted">Feel free to explore my certifications for a detailed view of the technical credentials and training that support my professional qualifications.</p>
      </div>

      <div class="cert-grid">
        ${CERTIFICATES.map((c, idx) => `
          <article class="panel cert-card">
            <div class="cert-head">
              <div>
                <h3 style="margin:0 0 6px;">${escapeHtml(c.title)}</h3>
                <p class="muted" style="margin:0;">${escapeHtml(c.subtitle || "")}</p>
              </div>

              <div class="cert-actions">
                <a class="btn btn-small btn-ghost" href="${escapeHtml(c.file)}" target="_blank" rel="noreferrer">
                  Open in New Tab
                </a>
              </div>
            </div>

            <div class="cert-embed">
              <iframe
                title="${escapeHtml(c.title)}"
                src="${escapeHtml(c.file)}#view=FitH"
                loading="lazy"
              ></iframe>
            </div>

            <p class="muted" style="margin:10px 0 0;">
              If the embedded viewer does not load, use “Open in New Tab”.
            </p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProjects() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <h1>Projects</h1>
        <p>Featured work with clear technologies, outcomes, and screenshot evidence.</p>
      </div>

      <div class="panel">
        <div class="toolbar">
          <div class="chips" role="tablist" aria-label="Project filters">
            <button class="chip active" data-filter="all" role="tab" aria-selected="true">All</button>
            <button class="chip" data-filter="java" role="tab" aria-selected="false">Java</button>
            <button class="chip" data-filter="web" role="tab" aria-selected="false">Web</button>
            <button class="chip" data-filter="python" role="tab" aria-selected="false">Python</button>
            <button class="chip" data-filter="embedded" role="tab" aria-selected="false">Embedded</button>
            <button class="chip" data-filter="game" role="tab" aria-selected="false">Unity</button>
          </div>

          <div class="search">
            <label class="sr-only" for="projectSearch">Search projects</label>
            <input id="projectSearch" type="search" placeholder="Search projects…" autocomplete="off" />
          </div>
        </div>
      </div>

      <div class="projects-grid" id="projectsGrid"></div>
    </section>
  `;

  initProjectsUI();
}

function renderExperience() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <h1>Experience</h1>
        <p>Operational experience that supports performance in IT environments.</p>
      </div>

      <div class="grid-2">
        <div class="panel">
          <h2>Computer Technician</h2>
          <p class="muted">
            Supported end-user devices with accurate diagnostics, consistent documentation, and a focus on minimizing downtime.
          </p>
          <ul class="muted" style="margin:0; padding-left:18px;">
            <li>Performed device checks, issue isolation, and repair workflows</li>
            <li>Documented resolutions to improve repeatability and speed</li>
            <li>Diagnosed and repaired hardware issues on desktops, laptops, and peripherals</li>
            <li>Communicated status updates clearly to stakeholders</li>
          </ul>
        </div>

        <div class="panel">
          <h2>Computer Science Undergraduate (UMGC)</h2>
          <p class="muted">
            Coursework and project work in programming, object-oriented design, and building practical applications with clear structure.
          </p>
          <ul class="muted" style="margin:0; padding-left:18px;">
            <li>Java GUI applications with immutable logic classes</li>
            <li>Web application development with structured state handling</li>
            <li>Embedded automation projects using Python and microcontrollers</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  APP.innerHTML = `
    <section class="page">
      <div class="page-head">
        <h1>Contact</h1>
        <p>Make it easy for recruiters to reach out quickly.</p>
      </div>

      <div class="grid-2">
        <div class="panel">
          <h2>Contact Details</h2>
          <p class="muted">Ways to reach me.</p>

          <div style="display:grid; gap:10px; margin-top:12px;">
            <a class="panel" style="padding:14px;" href="mailto:${escapeHtml(CONTACT.email)}">
              <strong>Email</strong><div class="muted">${escapeHtml(CONTACT.email)}</div>
            </a>
            <a class="panel" style="padding:14px;" href="${escapeHtml(CONTACT.linkedin)}" target="_blank" rel="noreferrer">
              <strong>LinkedIn</strong><div class="muted">${escapeHtml(CONTACT.linkedin.replace("https://",""))}</div>
            </a>
            <a class="panel" style="padding:14px;" href="${escapeHtml(CONTACT.github)}" target="_blank" rel="noreferrer">
              <strong>GitHub</strong><div class="muted">${escapeHtml(CONTACT.github.replace("https://",""))}</div>
            </a>
            <div class="panel" style="padding:14px;">
              <strong>Location</strong><div class="muted">${escapeHtml(CONTACT.location)}</div>
            </div>
          </div>

          <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-small" id="copyEmailBtn" type="button">Copy Email</button>
            <button class="btn btn-small btn-ghost" id="resumeBtnContact" type="button">View Resume</button>
            <a class="btn btn-small btn-ghost" href="#/projects">View Projects</a>
          </div>
        </div>

        <div class="panel">
          <h2>Recruiter Note</h2>
          <p>
            This portfolio is designed for fast evaluation: certification visibility, relevant projects,
            clear technologies, outcomes, and screenshot proof.
          </p>
          <p class="muted">
            Optional additions: short demo clips, and concise GitHub README setup instructions.
          </p>
        </div>
      </div>
    </section>
  `;

  const copyBtn = document.getElementById("copyEmailBtn");
  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      const prev = copyBtn.textContent;
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = prev), 1100);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  });
}

// ------------------------- PROJECTS GRID + FILTERS -------------------------
function createProjectCard(p) {
  const galleryHtml =
    p.screenshots && p.screenshots.length
      ? `
      <div class="gallery" aria-label="Project screenshot gallery">
        ${p.screenshots.slice(0, 6).map((src, i) => `
          <button class="thumb" type="button" data-project="${escapeHtml(p.id)}" data-index="${i}" aria-label="Open screenshot ${i + 1}">
            <img src="${escapeHtml(src)}" alt="${escapeHtml(p.title)} screenshot ${i + 1}" loading="lazy" />
          </button>
        `).join("")}
      </div>
    `
      : `<p class="muted" style="margin-top:10px;">No screenshots added yet.</p>`;

  return `
    <article class="project" data-project-card="${escapeHtml(p.id)}">
      <h3>${escapeHtml(p.title)}</h3>

      <div class="tags">
        ${p.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>

      <p>${escapeHtml(p.summary)}</p>

      <ul>
        ${p.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>

      <div class="project-actions">
        <a class="btn btn-small btn-ghost" href="${escapeHtml(p.links.github || "#")}" target="_blank" rel="noreferrer">GitHub</a>
        <a class="btn btn-small" href="${escapeHtml(p.links.demo || "#")}" target="_blank" rel="noreferrer">Live Demo</a>
      </div>

      ${galleryHtml}
    </article>
  `;
}

function initProjectsUI() {
  const grid = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("projectSearch");
  const chips = Array.from(document.querySelectorAll(".chip"));

  const renderProjectsGrid = (list) => {
    if (!grid) return;

    if (!list.length) {
      grid.innerHTML = `<div class="panel"><h3>No matching projects</h3><p class="muted">Try a different filter or search term.</p></div>`;
      return;
    }

    grid.innerHTML = list.map(createProjectCard).join("");
    bindGalleryClicks();
  };

  const getActiveFilter = () => {
    const active = chips.find((c) => c.classList.contains("active"));
    return active ? active.dataset.filter : "all";
  };

  const applyFilters = () => {
    const filter = getActiveFilter();
    const query = (searchInput?.value || "").trim().toLowerCase();

    const filtered = PROJECTS.filter((p) => {
      const matchesFilter = filter === "all" ? true : p.category.includes(filter);
      const haystack = `${p.title} ${p.summary} ${p.tech.join(" ")} ${p.bullets.join(" ")}`.toLowerCase();
      const matchesSearch = query ? haystack.includes(query) : true;
      return matchesFilter && matchesSearch;
    });

    renderProjectsGrid(filtered);
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      chips.forEach((c) =>
        c.setAttribute("aria-selected", c.classList.contains("active") ? "true" : "false")
      );
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", applyFilters);
  renderProjectsGrid(PROJECTS);
}

// ------------------------- LIGHTBOX (GALLERY VIEWER) -------------------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxThumbs = document.getElementById("lightboxThumbs");
const btnClose = document.getElementById("lightboxClose");
const btnPrev = document.getElementById("lightboxPrev");
const btnNext = document.getElementById("lightboxNext");

let lbProject = null;
let lbIndex = 0;

function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id) || null;
}

function openLightbox(projectId, index) {
  const p = getProjectById(projectId);
  if (!p || !p.screenshots || !p.screenshots.length) return;

  lbProject = p;
  lbIndex = clamp(index, 0, p.screenshots.length - 1);

  lightbox?.classList.add("open");
  lightbox?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  renderLightbox();
}

function closeLightbox() {
  lightbox?.classList.remove("open");
  lightbox?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lbProject = null;
  lbIndex = 0;
}

function renderLightbox() {
  if (!lbProject) return;

  const shots = lbProject.screenshots;
  const src = shots[lbIndex];

  if (lightboxTitle) lightboxTitle.textContent = lbProject.title;
  if (lightboxCounter) lightboxCounter.textContent = `${lbIndex + 1} / ${shots.length}`;
  if (lightboxImg) lightboxImg.src = src;

  if (btnPrev) btnPrev.disabled = lbIndex === 0;
  if (btnNext) btnNext.disabled = lbIndex === shots.length - 1;

  if (lightboxThumbs) {
    lightboxThumbs.innerHTML = shots
      .map(
        (s, i) => `
      <button class="modal-thumb ${i === lbIndex ? "active" : ""}" type="button" data-thumb="${i}" aria-label="Open screenshot ${i + 1}">
        <img src="${escapeHtml(s)}" alt="${escapeHtml(lbProject.title)} thumbnail ${i + 1}" loading="lazy" />
      </button>
    `
      )
      .join("");

    lightboxThumbs.querySelectorAll("[data-thumb]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.getAttribute("data-thumb"));
        if (!Number.isNaN(i)) {
          lbIndex = i;
          renderLightbox();
        }
      });
    });
  }
}

function bindGalleryClicks() {
  document.querySelectorAll(".thumb[data-project][data-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      const index = Number(btn.getAttribute("data-index"));
      openLightbox(projectId, Number.isNaN(index) ? 0 : index);
    });
  });
}

btnClose?.addEventListener("click", closeLightbox);
btnPrev?.addEventListener("click", () => {
  if (lbProject && lbIndex > 0) {
    lbIndex--;
    renderLightbox();
  }
});
btnNext?.addEventListener("click", () => {
  if (lbProject && lbIndex < lbProject.screenshots.length - 1) {
    lbIndex++;
    renderLightbox();
  }
});

lightbox?.addEventListener("click", (e) => {
  const t = e.target;
  if (t && t.dataset && t.dataset.close === "true") closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox?.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft" && lbProject && lbIndex > 0) {
    lbIndex--;
    renderLightbox();
  }
  if (e.key === "ArrowRight" && lbProject && lbIndex < lbProject.screenshots.length - 1) {
    lbIndex++;
    renderLightbox();
  }
});

// ------------------------- MOBILE NAV -------------------------
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

navMenu?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMobileNav();
});

// ------------------------- UTIL -------------------------
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// Footer year
const yearText = document.getElementById("yearText");
if (yearText) {
  yearText.textContent = `© ${new Date().getFullYear()} • Built for hiring-ready clarity`;
}

// ------------------------- STARTUP -------------------------
window.addEventListener("hashchange", render);
window.addEventListener("load", () => {
  if (!window.location.hash) window.location.hash = "#/home";
  render();
});

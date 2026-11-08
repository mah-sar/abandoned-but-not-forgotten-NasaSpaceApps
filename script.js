// script.js - small functions that build the pages from the information in data.js.
// All three pages (index.html, explore.html, quiz.html) load data.js first and then this file,
// so "objects" and "quizQuestions" are available here. The code at the very bottom builds
// only the parts that exist on the current page.

const SITE_NAME = "Abandoned but Not Forgotten";
const EMPTY_MESSAGE = "Content will be added after NASA data collection.";
let currentObject = 0;  // which object's story is open
let currentStep = 0;    // 0 = The Mission, 1 = The Discovery, 2 = Where Is It Now?, 3 = Timeline

// Team branding. These texts are used on every page, so change them here only.
const CREDIT_LINE = "Designed & developed by NEBIX";
const EVENT_LINE = "NEBIX \u2014 NASA Space Apps Challenge 2026";

// The three pages. They are used by the navigation bar and the footer.
const PAGES = [
  { id: "home", file: "index.html", label: "Home" },
  { id: "explore", file: "explore.html", label: "Explore Objects" },
  { id: "quiz", file: "quiz.html", label: "Quiz" }
];

// ===== Helpers =====

// The NEBIX logo (assets/nebix-logo.png). If the file is missing, the plain text NEBIX is shown instead.
function logoImg(extraClass) {
  return `<img class="nebix-logo ${extraClass || ""}" src="assets/nebix-logo.png" alt="NEBIX team logo: a moon with a teal orbit" onerror="logoFallback(this)">`;
}
function logoFallback(img) {
  const text = document.createElement("span");
  text.className = "nebix-text";
  text.textContent = "NEBIX";
  img.replaceWith(text);
}

// "moon" or "mars" (from the target field), used to give cards and stories a Moon or Mars accent color.
function worldOf(obj) {
  const target = (obj.target || "").toLowerCase();
  return (target === "moon" || target === "mars") ? target : "";
}
// Makes text safe to put on the page: < > & " ' are turned into harmless characters,
// so text from data.js is always shown as plain text and never runs as HTML or JavaScript.
function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Returns the (safe) text, or a grey placeholder message when the text is empty.
function show(value, fallback) {
  return value ? esc(value) : `<span class="empty">${fallback || EMPTY_MESSAGE}</span>`;
}

// Shows a source. Text starting with https:// becomes a clickable link that opens in a new tab.
// Anything else (for example an image credit) is shown as plain text.
function sourceLink(text, fallback) {
  if (!/^https?:\/\//.test(text)) {
    return show(text, fallback);
  }
  return `<a href="${esc(text)}" target="_blank" rel="noopener noreferrer">${esc(text)}</a>`;
}

// Builds an image box. With no image (or a missing file) the placeholder text stays visible.
// file = file name inside assets/, alt = a description of the photo for screen readers,
// position = optional crop position such as "center 60%".
function imageBox(file, alt, position) {
  const style = position ? ` style="object-position: ${esc(position)}"` : "";  // optional crop position
  const img = file
    ? `<img src="assets/${esc(file)}" alt="${esc(alt)}"${style} onerror="this.style.display='none'">`
    : "";
  return `<div class="image-box">Image coming soon${img}</div>`;
}

// A small rounded label, for example "Moon" or "1969". Empty text gives no chip.
function chip(text, extraClass) {
  return text ? `<span class="chip ${extraClass || ""}">${esc(text)}</span>` : "";
}

// The first four-digit number in the mission date: "July 20, 1969 (Moon landing)" gives "1969".
function getYear(obj) {
  const match = (obj.missionDate || "").match(/\d{4}/);
  return match ? match[0] : "";
}

// Like sourceLink, but also accepts a list of sources (for example sources.timeline in data.js).
function sourceLinks(value, fallback) {
  const list = [].concat(value || []).filter(Boolean);  // one source or a list: always make a list
  if (list.length === 0) {
    return show("", fallback);
  }
  return list.map(function (item) { return sourceLink(item); }).join("<br>");
}

// ===== Shared parts: the navigation bar and the footer (the same on all three pages) =====
// Each page's <body> has data-page="home", "explore" or "quiz", which marks the current link.
function buildNav() {
  const header = document.getElementById("site-header");
  const current = document.body.dataset.page;
  let links = "";
  PAGES.forEach(function (page) {
    const here = (page.id === current) ? ' class="active" aria-current="page"' : "";
    links += `<a href="${page.file}"${here}>${page.label}</a>`;
  });
  header.className = "site-header";
  header.innerHTML = `
    <nav class="navbar" aria-label="Main">
      <a class="brand" href="index.html">${logoImg("brand-logo")}<span class="logo">${SITE_NAME}</span></a>
      <div class="nav-links">${links}</div>
    </nav>`;
}

function buildFooter() {
  const footer = document.getElementById("site-footer");
  let links = "";
  PAGES.forEach(function (page) {
    links += `<a href="${page.file}">${page.label}</a>`;
  });
  links += `<a href="index.html#credits">Sources and Credits</a>`;
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap footer-grid">
      <div>
        <strong>${SITE_NAME}</strong>
        <p>The stories of NASA equipment left behind on the Moon and Mars: their missions, discoveries and where they are now.</p>
      </div>
      <nav class="footer-links" aria-label="Footer">${links}</nav>
      <div>
        <strong>${esc(CREDIT_LINE)}</strong>
        <p>${esc(EVENT_LINE)}</p>
        <p class="fine">This is a student project and is not an official NASA website.</p>
      </div>
    </div>
    <p class="wrap footer-note">NASA photographs and information are credited to NASA and the sources listed in each object's Sources and Credits box. NEBIX branding identifies this website, not ownership of NASA images.</p>`;
}

// The logo in the home page credits section.
function buildTeamBits() {
  document.querySelectorAll("[data-team-logo]").forEach(function (el) {
    el.innerHTML = `<a href="index.html">${logoImg("team-logo")}</a>`;
  });
}

// ===== Home page: photo collage, one photo for every object that has an image =====
function buildCollage() {
  const collage = document.getElementById("hero-collage");
  let html = "";
  objects.forEach(function (obj, i) {
    if (obj.image) {
      html += `
        <a href="explore.html#object-${i + 1}" title="${esc(obj.name)}" aria-label="Open the story of ${esc(obj.name)}">
          <img src="assets/${esc(obj.image)}" alt="${esc(obj.imageCaption || obj.name)}" style="object-position: ${esc(obj.imagePosition || "")}" onerror="this.parentNode.style.display='none'">
        </a>`;
    }
  });
  collage.innerHTML = html;
  collage.hidden = (html === "");
}

// ===== Explore page: cards (one card for each object in data.js) =====
function buildCards() {
  let html = "";
  objects.forEach(function (obj, i) {
    const label = obj.name || "Object " + (i + 1);
    const year = getYear(obj);
    const firstParagraph = (obj.description || "").split("\n\n")[0];
    html += `
      <article class="card" data-world="${worldOf(obj)}">
        <a class="card-image" href="#object-${i + 1}" aria-label="Explore the story of ${esc(label)}">
          ${imageBox(obj.image, obj.imageCaption || label, obj.imagePosition)}
          ${chip(obj.target, "chip-target")}
        </a>
        <div class="card-body">
          <h3>${show(obj.name, "Object " + (i + 1))}</h3>
          <p class="card-meta">${show(obj.missionName, "Mission name to be added")}${year ? " · " + year : ""}</p>
          <p class="card-text">${show(firstParagraph, "Short description to be added.")}</p>
          <a class="button" href="#object-${i + 1}">Explore Story</a>
        </div>
      </article>`;
  });
  document.getElementById("cards").innerHTML = html;
}

// ===== C. Object story =====

// The three stages of a story. Edit the labels here if you want different wording.
function getSteps(obj) {
  return [
    { title: "The Mission", source: obj.sources.mission,
      facts: [["Mission", obj.missionName], ["Date", obj.missionDate], ["Target", obj.target], ["Purpose", obj.purpose]] },
    { title: "The Discovery", source: obj.sources.discovery,
      facts: [["What it achieved and discovered", obj.discoveries], ["Why it was important", obj.importance]] },
    { title: "Where Is It Now?", source: obj.sources.location,
      facts: [["Where it was left", obj.location], ["Is it still there?", obj.stillThere], ["Current known condition", obj.status]] },
    { title: "Timeline", source: obj.sources.timeline, timeline: true, facts: [] }
  ];
}

// Shows the story named in the web address (explore.html#object-3), or the five cards when
// the address names no object. Every card and button is a simple link such as href="#object-3".
function showFromHash() {
  const match = location.hash.match(/^#object-(\d+)$/);
  const index = match ? Number(match[1]) - 1 : -1;
  if (objects[index]) {
    openStory(index);
  } else {
    closeStory();
  }
}

// Back to the five cards.
function closeStory() {
  document.getElementById("overview").hidden = false;
  document.getElementById("story").hidden = true;
  document.title = "Explore Objects | " + SITE_NAME;
}

// "Previous object" and "Next object" links under the story.
function buildObjectNav(index) {
  function link(i, label, side) {
    if (!objects[i]) { return "<span></span>"; }
    return `<a class="${side}" href="#object-${i + 1}"><small>${label}</small>${show(objects[i].name, "Object " + (i + 1))}</a>`;
  }
  document.getElementById("object-nav").innerHTML =
    link(index - 1, "← Previous object", "prev") +
    `<a class="button secondary" href="#objects">All Objects</a>` +
    link(index + 1, "Next object →", "next");
}

// Fills the story with the information of one object.
function openStory(index) {
  const obj = objects[index];
  const label = obj.name || "Object " + (index + 1);
  currentObject = index;
  document.getElementById("overview").hidden = true;
  document.getElementById("story").hidden = false;
  document.getElementById("story").dataset.world = worldOf(obj);  // Moon or Mars accent color
  document.title = label + " | " + SITE_NAME;

  // Large photo at the top, with its caption and credit
  document.getElementById("story-image").innerHTML = `
    ${imageBox(obj.image, obj.imageCaption || label, obj.imagePosition)}
    <figcaption>${show(obj.imageCaption, "Image caption to be added.")}<br>
    Credit: ${show(obj.imageCredit, "Image credit to be added.")}</figcaption>`;

  // Title, quick-fact chips (all taken from data.js) and the short description
  const stillThere = obj.stillThere ? "Still there: " + obj.stillThere.split(",")[0] : "";
  document.getElementById("story-title").innerHTML = show(obj.name, "Object " + (index + 1));
  document.getElementById("story-chips").innerHTML =
    chip(obj.target, "chip-target") + chip(obj.missionName) + chip(getYear(obj)) + chip(stillThere);
  document.getElementById("story-description").innerHTML = show(obj.description);

  buildChapters(obj);
  buildMorePhotos(obj);
  buildSources(obj);
  buildObjectNav(index);
  goToStep(0);
  window.scrollTo(0, 0);
}

// "The Full Story": short numbered chapters (story in data.js), shown above the four tabs.
function buildChapters(obj) {
  const chapters = obj.story || [];
  let html = "";
  chapters.forEach(function (chapter, i) {
    html += `
      <article class="chapter">
        <span class="chapter-num">${i + 1}</span>
        <div>
          <h4>${esc(chapter.heading)}</h4>
          <p>${esc(chapter.text)}</p>
        </div>
      </article>`;
  });
  document.getElementById("story-chapters").innerHTML = chapters.length
    ? `<h3>The Full Story</h3>
       <div class="chapters">${html}</div>
       <p class="source">Sources for this story:<br>${sourceLinks(obj.sources.story, "To be added.")}</p>`
    : "";
}

// Optional extra photos (moreImages in data.js), shown under the tour.
function buildMorePhotos(obj) {
  const extras = obj.moreImages || [];
  let html = "";
  extras.forEach(function (m) {
    html += `
      <figure${m.wide ? ' class="wide"' : ""}>
        ${imageBox(m.image, m.caption || obj.name, m.position)}
        <figcaption>${show(m.caption, "Image caption to be added.")}<br>
        Credit: ${show(m.credit, "Image credit to be added.")}</figcaption>
      </figure>`;
  });
  document.getElementById("story-more").innerHTML =
    extras.length ? `<h3>More photos</h3><div class="more-grid">${html}</div>` : "";
}

// ===== Stage 4: the Timeline, a vertical list of dated events (timeline in data.js) =====
function buildTimeline(obj) {
  const events = obj.timeline || [];
  if (events.length === 0) {
    return `<p>${show("")}</p>`;
  }
  let html = obj.timelineLocation ? `<p class="meta">${esc(obj.timelineLocation)}</p>` : "";
  html += `<ol class="timeline">`;
  events.forEach(function (ev) {
    html += `
      <li class="tl-item ${ev.key ? "key" : ""}">
        <span class="tl-date">${esc(ev.date)}</span>
        <strong class="tl-title">${esc(ev.title)}</strong>
        <span class="tl-text">${esc(ev.text)}</span>
      </li>`;
  });
  html += `</ol>`;
  if (obj.timelineHighlight) { html += `<p class="callout">${esc(obj.timelineHighlight)}</p>`; }
  if (obj.timelineNote) { html += `<p class="meta">${esc(obj.timelineNote)}</p>`; }
  html += `<p class="meta">This timeline lists historical events recorded by NASA. It is not a prediction of what will happen next.</p>`;
  return html;
}

// ===== D. Story tour: shows one stage (0 to 3). Previous / Next call this too. =====
function goToStep(index) {
  currentStep = index;
  const steps = getSteps(objects[currentObject]);
  const step = steps[index];

  // The tour panel gets a class (step-0 to step-3) that sets the accent color of this stage
  document.getElementById("tour").className = "panel tour step-" + index;

  // Three numbered step buttons: the current one is highlighted, earlier ones are marked "done"
  let tabs = "";
  steps.forEach(function (s, i) {
    const state = (i === index) ? "active" : (i < index ? "done" : "");
    tabs += `<button class="tab step-${i} ${state}" onclick="goToStep(${i})"><span class="num">${i + 1}</span>${s.title}</button>`;
  });
  document.getElementById("step-tabs").innerHTML = tabs;

  // The facts of this stage, followed by their source
  let html = `<h3>${step.title}</h3>`;
  if (step.timeline) {
    html += buildTimeline(objects[currentObject]);
  }
  step.facts.forEach(function (fact) {
    html += `<p><span class="fact-label">${fact[0]}</span><br>${show(fact[1])}</p>`;
  });
  html += `<p class="source">Source: ${sourceLinks(step.source, "Source to be added.")}</p>`;
  document.getElementById("step-content").innerHTML = html;

  // Progress indicator and Previous / Next buttons
  document.getElementById("progress-text").textContent = `Step ${index + 1} of ${steps.length}`;
  document.getElementById("progress-bar").style.width = ((index + 1) / steps.length * 100) + "%";
  document.getElementById("prev-btn").disabled = (index === 0);
  document.getElementById("next-btn").disabled = (index === steps.length - 1);
}

// ===== E. Sources and credits =====
function buildSources(obj) {
  const s = obj.sources;
  const rows = [
    ["NASA source: The Mission", s.mission], ["NASA source: The Discovery", s.discovery],
    ["NASA source: Where Is It Now?", s.location], ["NASA source: Timeline", s.timeline],
    ["Sources: The Full Story", s.story],
    ["Research references", s.research],
    ["Image source", s.image], ["Image credit", obj.imageCredit]
  ];
  (obj.moreImages || []).forEach(function (m, i) {
    rows.push(["Extra photo " + (i + 1) + " credit", m.credit], ["Extra photo " + (i + 1) + " source", m.source]);
  });
  let html = "";
  rows.forEach(function (row) {
    html += `<dt>${row[0]}</dt><dd>${sourceLinks(row[1], "To be added.")}</dd>`;
  });
  document.getElementById("source-list").innerHTML = html;
}

// ===== Quiz (questions come from quizQuestions in data.js) =====
let quizIndex = 0;  // number of the question being shown (starts at 0)
let score = 0;      // number of correct answers so far

function showQuestion() {
  const box = document.getElementById("quiz-box");

  // No questions yet: show the waiting message
  if (quizQuestions.length === 0) {
    box.innerHTML = `<p class="empty">Mission briefing in progress. Quiz questions will be added soon.</p>`;
    return;
  }
  // All questions answered: show the final results
  if (quizIndex >= quizQuestions.length) {
    box.innerHTML = `
      <h3>Briefing complete</h3>
      <p class="big-score">${score} / ${quizQuestions.length}</p>
      <p>You scored ${score} out of ${quizQuestions.length}.</p>
      <div class="button-row">
        <button onclick="restartQuiz()">Restart Quiz</button>
        <a class="button secondary" href="explore.html">Explore Objects</a>
      </div>`;
    return;
  }
  // Otherwise show the current question with its four options
  const q = quizQuestions[quizIndex];
  const percent = (quizIndex + 1) / quizQuestions.length * 100;  // question progress bar
  // The related object becomes a link to its story on the Explore page
  const relatedIndex = objects.findIndex(function (o) { return o.name === q.object; });
  const related = relatedIndex >= 0
    ? `<a href="explore.html#object-${relatedIndex + 1}">${esc(q.object)}</a>`
    : esc(q.object || "");
  let options = "";
  q.options.forEach(function (text, i) {
    options += `<label class="option"><input type="radio" name="answer" value="${i + 1}"> ${esc(text)}</label>`;
  });
  box.innerHTML = `
    <p class="meta">Question ${quizIndex + 1} of ${quizQuestions.length} | Score: <span id="score">${score}</span></p>
    <div class="progress"><div id="quiz-bar" style="width: ${percent}%"></div></div>
    <h3>${esc(q.question)}</h3>
    ${q.object ? `<p class="meta">Related object: ${related}</p>` : ""}
    ${options}
    <p id="feedback"></p>
    <button id="submit-btn" onclick="submitAnswer()">Submit Answer</button>
    <button id="next-q-btn" onclick="nextQuestion()" hidden>Next Question</button>`;
}

function submitAnswer() {
  const chosen = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");
  if (!chosen) { feedback.textContent = "Please choose an answer first."; return; }
  const q = quizQuestions[quizIndex];
  const isCorrect = (Number(chosen.value) === q.correct);
  if (isCorrect) { score = score + 1; }
  // Immediate feedback + short explanation
  feedback.className = isCorrect ? "correct" : "wrong";
  feedback.textContent = isCorrect
    ? "Correct! " + q.explanation
    : "Incorrect. The right answer is: " + q.options[q.correct - 1] + ". " + q.explanation;
  document.getElementById("score").textContent = score;
  // Lock the answers, then swap Submit for Next (or "See Results" on the last question)
  document.querySelectorAll('input[name="answer"]').forEach(function (r) { r.disabled = true; });
  // Mark the options: the right answer turns green, a wrong choice turns red
  document.querySelectorAll(".option")[q.correct - 1].classList.add("is-correct");
  if (!isCorrect) { chosen.parentNode.classList.add("is-wrong"); }
  document.getElementById("submit-btn").hidden = true;
  document.getElementById("next-q-btn").hidden = false;
  if (quizIndex === quizQuestions.length - 1) { document.getElementById("next-q-btn").textContent = "See Results"; }
}

function nextQuestion() { quizIndex = quizIndex + 1; showQuestion(); }
function restartQuiz() { quizIndex = 0; score = 0; showQuestion(); }

// ===== Start: build only the parts that exist on the current page =====
buildNav();
buildFooter();
buildTeamBits();

if (document.getElementById("hero-collage")) {  // home page
  buildCollage();
}
if (document.getElementById("cards")) {         // explore page
  buildCards();
  window.addEventListener("hashchange", showFromHash);
  showFromHash();
}
if (document.getElementById("quiz-box")) {      // quiz page
  showQuestion();
}

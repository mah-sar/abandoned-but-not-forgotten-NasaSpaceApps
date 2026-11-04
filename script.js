// script.js - small functions that build the page from the information in data.js.
// (index.html loads data.js first, so "objects" and "quizQuestions" are available here.)

const EMPTY_MESSAGE = "Content will be added after NASA data collection.";
let currentObject = 0;  // which object's story is open
let currentStep = 0;    // 0 = The Mission, 1 = The Discovery, 2 = Where Is It Now?

// ===== Helpers =====
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
// file = file name inside assets/, alt = a description of the photo for screen readers.
function imageBox(file, alt) {
  const img = file
    ? `<img src="assets/${esc(file)}" alt="${esc(alt)}" onerror="this.style.display='none'">`
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

// ===== A. Hero photo strip: one small photo for every object that has an image =====
function buildStrip() {
  let html = "";
  objects.forEach(function (obj, i) {
    if (obj.image) {
      html += `
        <button class="strip-item" onclick="openStory(${i})" aria-label="Open the story of ${esc(obj.name)}" title="${esc(obj.name)}">
          <img src="assets/${esc(obj.image)}" alt="${esc(obj.imageCaption || obj.name)}" onerror="this.parentNode.style.display='none'">
        </button>`;
    }
  });
  document.getElementById("hero-strip").innerHTML = html;
  document.getElementById("strip-label").hidden = (html === "");
}

// ===== B. Explore cards (one card for each object in data.js) =====
function buildCards() {
  let html = "";
  objects.forEach(function (obj, i) {
    const label = obj.name || "Object " + (i + 1);
    const year = getYear(obj);
    const firstParagraph = (obj.description || "").split("\n\n")[0];
    html += `
      <article class="card">
        <a class="card-image" href="#story" onclick="openStory(${i}); return false;" aria-label="Explore the story of ${esc(label)}">
          ${imageBox(obj.image, obj.imageCaption || label)}
          ${chip(obj.target, "chip-target")}
        </a>
        <div class="card-body">
          <h3>${show(obj.name, "Object " + (i + 1))}</h3>
          <p class="card-meta">${show(obj.missionName, "Mission name to be added")}${year ? " · " + year : ""}</p>
          <p class="card-text">${show(firstParagraph, "Short description to be added.")}</p>
          <button onclick="openStory(${i})">Explore story</button>
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
      facts: [["Where it was left", obj.location], ["Is it still there?", obj.stillThere], ["Current known condition", obj.status]] }
  ];
}

// Called when a card, a card photo or a hero photo is clicked.
function openStory(index) {
  const obj = objects[index];
  const label = obj.name || "Object " + (index + 1);
  currentObject = index;
  document.getElementById("story").hidden = false;

  // Large photo at the top, with its caption and credit
  document.getElementById("story-image").innerHTML = `
    ${imageBox(obj.image, obj.imageCaption || label)}
    <figcaption>${show(obj.imageCaption, "Image caption to be added.")}<br>
    Credit: ${show(obj.imageCredit, "Image credit to be added.")}</figcaption>`;

  // Title, quick-fact chips (all taken from data.js) and the short description
  const stillThere = obj.stillThere ? "Still there: " + obj.stillThere.split(",")[0] : "";
  document.getElementById("story-title").innerHTML = show(obj.name, "Object " + (index + 1));
  document.getElementById("story-chips").innerHTML =
    chip(obj.target, "chip-target") + chip(obj.missionName) + chip(getYear(obj)) + chip(stillThere);
  document.getElementById("story-description").innerHTML = show(obj.description);

  buildMorePhotos(obj);
  buildSources(obj);
  goToStep(0);
  document.getElementById("story").scrollIntoView();
}

// Optional extra photos (moreImages in data.js), shown under the tour.
function buildMorePhotos(obj) {
  const extras = obj.moreImages || [];
  let html = "";
  extras.forEach(function (m) {
    html += `
      <figure>
        ${imageBox(m.image, m.caption || obj.name)}
        <figcaption>${show(m.caption, "Image caption to be added.")}<br>
        Credit: ${show(m.credit, "Image credit to be added.")}</figcaption>
      </figure>`;
  });
  document.getElementById("story-more").innerHTML =
    extras.length ? `<h3>More photos</h3><div class="more-grid">${html}</div>` : "";
}

// ===== D. Timeline tour: shows one stage (0, 1 or 2). Previous / Next call this too. =====
function goToStep(index) {
  currentStep = index;
  const steps = getSteps(objects[currentObject]);
  const step = steps[index];

  // The tour panel gets a class (step-0, step-1 or step-2) that sets the accent color of this stage
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
  step.facts.forEach(function (fact) {
    html += `<p><span class="fact-label">${fact[0]}</span><br>${show(fact[1])}</p>`;
  });
  html += `<p class="source">Source: ${sourceLink(step.source, "Source to be added.")}</p>`;
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
    ["NASA source: Where Is It Now?", s.location], ["Research references", s.research],
    ["Image source", s.image], ["Image credit", obj.imageCredit]
  ];
  (obj.moreImages || []).forEach(function (m, i) {
    rows.push(["Extra photo " + (i + 1) + " credit", m.credit], ["Extra photo " + (i + 1) + " source", m.source]);
  });
  let html = "";
  rows.forEach(function (row) {
    html += `<dt>${row[0]}</dt><dd>${sourceLink(row[1], "To be added.")}</dd>`;
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
      <h3>Quiz complete</h3>
      <p>You scored ${score} out of ${quizQuestions.length}.</p>
      <button onclick="restartQuiz()">Restart Quiz</button>`;
    return;
  }
  // Otherwise show the current question with its four options
  const q = quizQuestions[quizIndex];
  let options = "";
  q.options.forEach(function (text, i) {
    options += `<label class="option"><input type="radio" name="answer" value="${i + 1}"> ${esc(text)}</label>`;
  });
  box.innerHTML = `
    <p class="meta">Question ${quizIndex + 1} of ${quizQuestions.length} | Score: <span id="score">${score}</span></p>
    <h3>${esc(q.question)}</h3>
    ${q.object ? `<p class="meta">Related object: ${esc(q.object)}</p>` : ""}
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
  document.getElementById("submit-btn").hidden = true;
  document.getElementById("next-q-btn").hidden = false;
  if (quizIndex === quizQuestions.length - 1) { document.getElementById("next-q-btn").textContent = "See Results"; }
}

function nextQuestion() { quizIndex = quizIndex + 1; showQuestion(); }
function restartQuiz() { quizIndex = 0; score = 0; showQuestion(); }

// ===== Start: build the cards, the hero photo strip and the quiz when the page loads =====
buildCards();
buildStrip();
showQuestion();

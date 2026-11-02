// script.js - small functions that build the page from the information in data.js.
// (index.html loads data.js first, so "objects" and "quizQuestions" are available here.)

const EMPTY_MESSAGE = "Content will be added after NASA data collection.";
let currentObject = 0;  // which object's story is open
let currentStep = 0;    // 0 = The Mission, 1 = The Discovery, 2 = Where Is It Now?

// ===== Helpers =====
// Returns the text, or a grey placeholder message when the text is empty.
function show(value, fallback) {
  return value || `<span class="empty">${fallback || EMPTY_MESSAGE}</span>`;
}

// Builds an image box. With no image (or a missing file) the placeholder text stays visible.
function imageBox(obj) {
  const img = obj.image
    ? `<img src="assets/${obj.image}" alt="${obj.imageCaption || obj.name}" onerror="this.style.display='none'">`
    : "";
  return `<div class="image-box">Image coming soon${img}</div>`;
}

// ===== B. Explore cards (one card for each object in data.js) =====
function buildCards() {
  let html = "";
  objects.forEach(function (obj, i) {
    html += `
      <article class="card">
        ${imageBox(obj)}
        <h3>${show(obj.name, "Object " + (i + 1))}</h3>
        <p>Mission: ${show(obj.missionName, "To be added")}</p>
        <p>Date: ${show(obj.missionDate, "To be added")}</p>
        <button onclick="openStory(${i})">Discover Story</button>
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

// Called when a "Discover Story" button is clicked.
function openStory(index) {
  const obj = objects[index];
  currentObject = index;
  document.getElementById("story").hidden = false;
  document.getElementById("story-title").innerHTML = show(obj.name, "Object " + (index + 1));
  document.getElementById("story-description").innerHTML = show(obj.description);
  document.getElementById("story-image").innerHTML = `
    ${imageBox(obj)}
    <figcaption>${show(obj.imageCaption, "Image caption to be added.")}<br>
    Credit: ${show(obj.imageCredit, "Image credit to be added.")}</figcaption>`;
  buildSources(obj);
  goToStep(0);
  document.getElementById("story").scrollIntoView();
}

// ===== D. Timeline tour: shows one stage (0, 1 or 2). Previous / Next call this too. =====
function goToStep(index) {
  currentStep = index;
  const steps = getSteps(objects[currentObject]);
  const step = steps[index];

  // Clickable labels for the three stages
  let tabs = "";
  steps.forEach(function (s, i) {
    tabs += `<button class="tab ${i === index ? "active" : ""}" onclick="goToStep(${i})">${i + 1}. ${s.title}</button>`;
  });
  document.getElementById("step-tabs").innerHTML = tabs;

  // The facts of this stage, followed by their source
  let html = `<h3>${step.title}</h3>`;
  step.facts.forEach(function (fact) {
    html += `<p><span class="fact-label">${fact[0]}</span><br>${show(fact[1])}</p>`;
  });
  html += `<p class="source">Source: ${show(step.source, "Source to be added.")}</p>`;
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
  let html = "";
  rows.forEach(function (row) {
    html += `<dt>${row[0]}</dt><dd>${show(row[1], "To be added.")}</dd>`;
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
    options += `<label class="option"><input type="radio" name="answer" value="${i + 1}"> ${text}</label>`;
  });
  box.innerHTML = `
    <p class="meta">Question ${quizIndex + 1} of ${quizQuestions.length} | Score: <span id="score">${score}</span></p>
    <h3>${q.question}</h3>
    ${q.object ? `<p class="meta">Related object: ${q.object}</p>` : ""}
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

// ===== Start: build the cards and the quiz when the page loads =====
buildCards();
showQuestion();

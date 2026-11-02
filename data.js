// data.js - ALL editable content lives in this file.
//
// HOW TO EDIT:
//  1. Type your text between the quote marks, e.g.   name: "Your text",
//  2. Keep the quote marks and the comma at the end of every line.
//  3. Leave a field empty ("") to show "Content will be added after NASA data collection."
//  4. Images: put the file in the assets/ folder and type ONLY its file name,
//     e.g.   image: "my-picture.jpg"
//  5. Every fact needs a source: fill in the "sources" line of the same object.

const objects = [
  // ---------- OBJECT 1 (objects 2 to 5 have exactly the same fields) ----------
  {
    name: "",           // Object name
    missionName: "",    // Mission it belonged to
    missionDate: "",    // When the mission happened
    target: "",         // "Moon" or "Mars"
    description: "",    // Short story description (1-2 sentences)
    purpose: "",        // Stage 1 (The Mission): what it was designed to do and why
    discoveries: "",    // Stage 2 (The Discovery): what it achieved and discovered
    importance: "",     // Stage 2 (The Discovery): why it was important
    location: "",       // Stage 3 (Where Is It Now?): where it was left
    stillThere: "",     // Stage 3: is it still there? (Yes / No / Unknown)
    status: "",         // Stage 3: current known condition
    image: "",          // Image file name inside assets/
    imageCaption: "",   // Text shown under the image
    imageCredit: "",    // Who created or owns the image
    // Sources: mission / discovery / location = NASA sources for each stage,
    // research = other references, image = where the image came from
    sources: { mission: "", discovery: "", location: "", research: "", image: "" }
  },
  // ---------- OBJECT 2 ----------
  {
    name: "", missionName: "", missionDate: "", target: "", description: "",
    purpose: "", discoveries: "", importance: "",
    location: "", stillThere: "", status: "",
    image: "", imageCaption: "", imageCredit: "",
    sources: { mission: "", discovery: "", location: "", research: "", image: "" }
  },
  // ---------- OBJECT 3 ----------
  {
    name: "", missionName: "", missionDate: "", target: "", description: "",
    purpose: "", discoveries: "", importance: "",
    location: "", stillThere: "", status: "",
    image: "", imageCaption: "", imageCredit: "",
    sources: { mission: "", discovery: "", location: "", research: "", image: "" }
  },
  // ---------- OBJECT 4 ----------
  {
    name: "", missionName: "", missionDate: "", target: "", description: "",
    purpose: "", discoveries: "", importance: "",
    location: "", stillThere: "", status: "",
    image: "", imageCaption: "", imageCredit: "",
    sources: { mission: "", discovery: "", location: "", research: "", image: "" }
  },
  // ---------- OBJECT 5 ----------
  {
    name: "", missionName: "", missionDate: "", target: "", description: "",
    purpose: "", discoveries: "", importance: "",
    location: "", stillThere: "", status: "",
    image: "", imageCaption: "", imageCredit: "",
    sources: { mission: "", discovery: "", location: "", research: "", image: "" }
  }
];

// ---------- QUIZ QUESTIONS (empty for now) ----------
// To add a question, copy the block below INTO the square brackets,
// remove the // marks, and fill it in. Separate several questions with commas.
//   {
//     question: "",
//     options: ["", "", "", ""],   // exactly four answer options
//     correct: 1,                  // number of the correct option: 1, 2, 3 or 4
//     explanation: "",             // shown after the visitor answers
//     object: ""                   // related NASA object (its name)
//   }
const quizQuestions = [
];

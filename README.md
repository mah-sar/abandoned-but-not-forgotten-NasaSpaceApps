# Abandoned but Not Forgotten

A simple website template for the NASA Space Apps 2026 challenge "Abandoned but Not Forgotten".
It tells the stories of NASA objects left on the Moon or Mars.

**This is a blank template.** It contains no NASA data yet. Every field is empty and the website shows
"Content will be added after NASA data collection." until you fill it in.

The website uses only HTML, CSS and basic JavaScript. It makes **no network requests**:
no APIs, no libraries, no CDNs, no external fonts or images. Everything is stored in this folder.

## Files

| File | What it does |
|------|--------------|
| `index.html` | Page structure and the fixed texts (hero, about, footer) |
| `style.css` | All colors, spacing and layout |
| `data.js` | **All object information and all quiz questions** (the file you will edit most) |
| `script.js` | Small functions that build the cards, story tour, sources and quiz from `data.js` |
| `assets/` | Put your image files here |

## 1. How to open the website

1. Keep all files together in one folder (with `assets/` next to `index.html`).
2. Double-click `index.html`. It opens in your browser (Chrome, Edge, Firefox or Safari).
3. No installation, internet or server is needed.

After you change a file, save it and press **F5** (refresh) in the browser.

## 2. Where to add object information

Open `data.js`. There are five blocks, one for each object. Type your text between the quote marks:

```js
name: "Your object name",
```

Keep the quote marks `" "` and the comma `,` at the end of each line.
Leave a field empty (`""`) to keep showing the "Content will be added..." message.

| Field | Where it appears |
|-------|------------------|
| `name`, `missionName`, `missionDate` | Object card and story |
| `target` | Stage 1, The Mission ("Moon" or "Mars") |
| `description` | Short text at the top of the story |
| `purpose` | Stage 1, The Mission |
| `discoveries`, `importance` | Stage 2, The Discovery |
| `location`, `stillThere`, `status` | Stage 3, Where Is It Now? |
| `image`, `imageCaption`, `imageCredit` | Image under the story and on the card |
| `sources` | Sources shown for each stage and in "Sources and Credits" |

Your changes show up automatically. You never need to edit the HTML for an object.

**Tips**
- Keep each text short. Short paragraphs are easier to read.
- Do not use the characters `<` or `>` in your text. Write them as `&lt;` and `&gt;` if you need them.
- If the page goes blank after an edit, you probably deleted a quote mark or a comma in `data.js`.
  Press **F12** in the browser and open the **Console** tab to see which line has the problem.

## 3. Where to put images

1. Copy the image into the `assets/` folder (JPG or PNG, any size; wide images around 16:9 look best).
2. In `data.js`, type only the file name: `image: "my-picture.jpg"`.
3. Fill in `imageCaption` and `imageCredit`.

If `image` is empty or the file name is wrong, the website shows a clean "Image coming soon" box instead of a broken image.
Only use images you have permission to use, and always write the credit.

## 4. How to add sources

Every object has a `sources` line in `data.js`:

```js
sources: { mission: "", discovery: "", location: "", research: "", image: "" }
```

- `mission`: where the facts for stage 1 came from
- `discovery`: where the facts for stage 2 came from
- `location`: where the facts for stage 3 came from
- `research`: any other references
- `image`: where the image came from (the credit goes in `imageCredit`)

Write the exact source (title, organization, page, date, and URL if you have one). URLs are displayed as text.
Do not add a source you have not actually read. Each stage shows its own source, and all sources are
listed again in the "Sources and Credits" box.

## 5. How to add quiz questions

At the bottom of `data.js`, `quizQuestions` is an empty list. Copy this into the square brackets:

```js
const quizQuestions = [
  {
    question: "Your question?",
    options: ["Option A", "Option B", "Option C", "Option D"],  // always four options
    correct: 2,                                                  // 1 = A, 2 = B, 3 = C, 4 = D
    explanation: "Short explanation shown after answering.",
    object: "Related object name"
  },
  { ...next question... }
];
```

Put a comma between questions. Base every question and explanation on verified NASA information.
While the list is empty, the quiz shows "Mission briefing in progress. Quiz questions will be added soon."

## 6. How to change text and colors

- **Hero title, intro, About text, footer:** edit the text in `index.html`.
- **Names of the three story stages and the labels of each fact:** edit `getSteps` in `script.js`.
- **Colors:** edit the variables at the top of `style.css` (section 1):
  `--bg` (background), `--panel` (cards), `--text`, `--muted`, `--blue`, `--orange`.
- **Font:** it uses the standard system font. Change `font-family` in `body` if you wish
  (only use fonts already installed on computers; do not link external fonts).

## 7. How to add or remove an object slot

- **Remove a slot:** in `data.js`, delete one whole block from `{` to `},`
  (the last block has no comma after `}`). The cards update automatically.
- **Add a slot:** copy a whole block, paste it after another block, and make sure there is a
  comma between blocks. The challenge supports 3 to 5 objects, so five is the maximum recommended.

## 8. Testing template (three students)

Ask each tester to explore the website alone for about 10 minutes. Do **not** write down names or any
personal information; use "Tester 1", "Tester 2" and "Tester 3". Do not explain anything before they try.

| | Tester 1 | Tester 2 | Tester 3 |
|---|---|---|---|
| What did they try? (cards, story, Previous/Next, sources, quiz) | | | |
| Did they understand the object's story? (yes / partly / no, and why) | | | |
| Was the navigation easy? (1 = very hard, 5 = very easy) | | | |
| What confused them? | | | |
| Suggestions they gave | | | |

**What we improved after testing**

| Problem found | What we changed | Fixed? (yes / no) |
|---------------|-----------------|-------------------|
| | | |
| | | |
| | | |

Also check: it works on a phone, every fact has a source, and every image has a credit.

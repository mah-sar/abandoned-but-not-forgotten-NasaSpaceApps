# Abandoned but Not Forgotten

A simple website for the NASA Space Apps 2026 challenge "Abandoned but Not Forgotten".
It tells the stories of five NASA objects left on the Moon or Mars, in three stages:
**The Mission → The Discovery → Where Is It Now?**

| # | Object | Target |
|---|--------|--------|
| 1 | Apollo 11 Lunar Module Descent Stage (Eagle) | Moon |
| 2 | Surveyor 3 | Moon |
| 3 | Apollo 15 Lunar Roving Vehicle (LRV) | Moon |
| 4 | Viking 1 Lander | Mars |
| 5 | Opportunity Rover | Mars |

The website uses only HTML, CSS and basic JavaScript. It makes **no network requests**
when it opens: no APIs, no libraries, no CDNs, no external fonts or images.
The only web addresses are the NASA source links, and they are only used when a visitor clicks one.

## Files

| File | What it does |
|------|--------------|
| `index.html` | Page structure and the fixed texts (hero, about, footer) |
| `style.css` | All colors, spacing and layout |
| `data.js` | **All object information, sources, image credits and quiz questions** (the file you edit most) |
| `script.js` | Small functions that build the cards, story tour, sources and quiz from `data.js` |
| `assets/` | Put your image files here |

## 1. How to open and test the website locally

1. Keep all files together in one folder (with `assets/` next to `index.html`).
2. Double-click `index.html`. It opens in your browser. No installation, internet or server is needed.
3. After you change a file, save it and press **F5** (refresh) in the browser.

Quick test checklist:
- Five cards appear in "Explore the Objects" and each "Discover Story" button opens the right story.
- In each story, Next / Previous and the three stage labels work, and the progress bar changes.
- Every stage shows a source link, and "Sources and Credits" lists five links. Click each one to check it opens the right NASA page.
- The quiz shows question 1 of 5, marks answers, shows the explanation, counts the score, and Restart Quiz works.
- Resize the window (or open the page on a phone) to check the layout.
- If something looks wrong, press **F12** and open the **Console** tab to see error messages.

## 2. Images (you still need to add these)

The image fields in `data.js` are empty, so every image box shows "Image coming soon".
For each object:

1. Open the NASA image page, download the original image, and check the credit shown on the page.
2. Save it in the `assets/` folder with the file name below.
3. In `data.js`, find the line `image: "",` under that object (it has a TODO comment) and type the file name,
   for example `image: "apollo11-descent-stage.jpg",`.
4. Refresh the page. The caption and credit are already written.

| # | Save the image as | NASA image page | Credit |
|---|-------------------|-----------------|--------|
| 1 | `apollo11-descent-stage.jpg` | https://science.nasa.gov/resource/apollo-11-landing-site/ | NASA/Goddard Space Flight Center/Arizona State University |
| 2 | `surveyor-3-apollo12.jpg` | https://science.nasa.gov/resource/apollo-12-and-surveyor-3/ | NASA (check it on the page) |
| 3 | `apollo15-lunar-rover.jpg` | https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/ | NASA (check it on the page) |
| 4 | `viking1-first-mars-photo.jpg` | https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/ | NASA/JPL |
| 5 | `opportunity-rover.jpg` | https://science.nasa.gov/photojournal/opportunitys-first-selfie/ | NASA/JPL-Caltech |

To replace an image later, save the new file in `assets/` and change the file name in `data.js`
(also update `imageCaption`, `imageCredit` and `sources.image`).
If a file name is wrong or the file is missing, the website shows the placeholder, not a broken image.
Always keep the credit shown on the original NASA image page, and read NASA's media and brand usage guidelines
before you publish. Do not use the NASA logo and do not suggest that NASA endorses this project.
Image 3 (Apollo 15) is a photo of the rover's final parking spot. Image 4 is a view *from* the Viking 1 lander,
not a photo of the lander itself (the caption says so).

## 3. Editing object information

Open `data.js`. There are five blocks, one for each object. Type your text between the quote marks:

```js
name: "Your object name",
```

Keep the quote marks `" "` and the comma `,` at the end of each line.

- Use `\n\n` inside a text to start a new paragraph.
- To put a quote mark inside a text, write `\"`.
- Leave a field empty (`""`) to show "Content will be added after NASA data collection."
- Text from `data.js` is always shown as plain text. Characters such as `<` and `>` are safe and cannot run code.
- If the page goes blank after an edit, you probably deleted a quote mark or a comma in `data.js`. Check the Console (F12).

| Field | Where it appears |
|-------|------------------|
| `name`, `missionName`, `missionDate` | Object card and story |
| `target` | Stage 1, The Mission ("Moon" or "Mars") |
| `description` | Short text at the top of the story |
| `purpose` | Stage 1, The Mission |
| `discoveries`, `importance` | Stage 2, The Discovery |
| `location`, `stillThere`, `status` | Stage 3, Where Is It Now? |
| `image`, `imageCaption`, `imageCredit` | Image under the story and on the card |
| `sources` | Source line of each stage and the "Sources and Credits" box |

Keep what an object achieved separate from what the whole mission achieved, and only write facts you can source.

## 4. Sources and image credits

Every object has a `sources` block in `data.js`:

```js
sources: {
  mission: "https://...",    // facts in stage 1 (The Mission)
  discovery: "https://...",  // facts in stage 2 (The Discovery)
  location: "https://...",   // facts in stage 3 (Where Is It Now?)
  research: "https://...",   // other references
  image: "https://..."       // page the image came from
}
```

Type the full address starting with `https://`. It becomes a clickable link that opens in a new tab.
Text that does not start with `https://` is shown as plain text, so you can also write a book or paper title.
The image credit is the `imageCredit` field. Do not add a source you have not read.

## 5. Quiz questions

The quiz questions are in the `quizQuestions` list at the bottom of `data.js`. To add one, copy a block,
paste it after the last block, and put a comma between blocks:

```js
{
  question: "Your question?",
  options: ["Option A", "Option B", "Option C", "Option D"],  // always exactly four options
  correct: 2,                                                  // 1 = A, 2 = B, 3 = C, 4 = D
  explanation: "Short explanation shown after answering.",
  object: "Name of the related object"
}
```

Base every question and explanation on verified NASA information. To remove a question, delete its whole block.
If the list is empty, the quiz shows "Mission briefing in progress. Quiz questions will be added soon."

## 6. Changing text and colors

- **Hero title, intro, About text, footer:** edit the text in `index.html`.
- **Names of the three story stages and the labels of each fact:** edit `getSteps` in `script.js`.
- **Colors:** edit the variables at the top of `style.css` (section 1):
  `--bg` (background), `--panel` (cards), `--text`, `--muted`, `--blue`, `--orange`.
- **Font:** the website uses the standard system font. Do not link external fonts.

## 7. Adding or removing an object slot

- **Remove a slot:** in `data.js`, delete one whole block from `{` to `},` (the last block has no comma after `}`).
  The cards update automatically. Also update or delete the quiz questions about that object.
- **Add a slot:** copy a whole block, paste it after another block, put a comma between blocks, and fill it in.
  The challenge supports 3 to 5 objects, so five is the maximum recommended.

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

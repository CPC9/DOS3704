# PRD-10: Final Assembly — index.html

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Produce `index.html` — the final, single self-contained HTML file that combines the Study Map and Flashcard Decks pages into one tabbed SPA. No external file references. Works 100% offline when opened directly in a browser.

**Prerequisites (ALL must exist before running this PRD):**
- `study-map.html` (PRD-01)
- `data/foundations.js` (PRD-02)
- `data/resources-a.js` (PRD-03)
- `data/resources-b.js` (PRD-04)
- `data/process-demand.js` (PRD-05)
- `data/process-supply.js` (PRD-06)
- `data/tech.js` (PRD-07)
- `data/cases.js` (PRD-08)
- `flashcards.html` (PRD-09)
- `build_flashcards.js` (pre-built)

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\index.html`
- **Read:** all files listed in Prerequisites above

---

## Steps

- [ ] **Step 1: Read ALL prerequisite files**

Read every file in the prerequisites list. You will inline their content into index.html.

- [ ] **Step 2: Understand the structure**

`index.html` is a merger of `study-map.html` and `flashcards.html`:
- Single `<style>` block — CSS from either file (they use the same CSS; just use one copy)
- Single `<body>` with two `<div class="page">` sections:
  - `id="page-study"` — contains everything from study-map.html's `<div class="page active">`
  - `id="page-flashcards"` — contains everything from flashcards.html's `<div class="page active">`
- The top nav has BOTH tabs (Study Map | Flashcard Decks) that switch between pages
- Single `<script>` block that contains:
  - All content from all `data/*.js` files (inlined verbatim)
  - The `build_flashcards.js` content (inlined verbatim)
  - The study map render engine JS (from study-map.html)
  - The flashcard app JS (from flashcards.html)
  - The `showPage()` tab-switching function

- [ ] **Step 3: Write `index.html`**

Use the assembly structure below.

- [ ] **Step 4: Verify all 11 checks below**

---

## Assembly Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOS3704 · Operations Strategy Study Tool</title>
  <style>
    [CSS — copy the entire <style> block from study-map.html or flashcards.html — they're identical]
  </style>
</head>
<body>

<!-- ═══════════════════════════════════════════
     TOP NAVIGATION BAR
═══════════════════════════════════════════ -->
<nav class="topbar">
  <div class="topbar-brand">DOS<span>3704</span> · Operations Strategy</div>
  <div class="topbar-nav">
    <button class="nav-btn active" id="tab-study" onclick="showPage('study')">Study Map</button>
    <button class="nav-btn" id="tab-flashcards" onclick="showPage('flashcards')">Flashcard Decks</button>
  </div>
</nav>

<!-- ═══════════════════════════════════════════
     PAGE 1: STUDY MAP
═══════════════════════════════════════════ -->
<div class="page active" id="page-study">
  [PASTE the entire inner content of study-map.html's <div class="page active"> here]
  [This includes: page-header, central-questions div, and the topics-container div]
  [Do NOT include the standalone-notice paragraph]
</div>

<!-- ═══════════════════════════════════════════
     PAGE 2: FLASHCARD DECKS
═══════════════════════════════════════════ -->
<div class="page" id="page-flashcards">
  [PASTE the entire inner content of flashcards.html's <div class="page active"> here]
  [This includes: page-header, deck-selector div, fc-arena div]
  [Do NOT include the standalone-notice paragraph]
</div>

<!-- ═══════════════════════════════════════════
     ALL JAVASCRIPT (inlined)
═══════════════════════════════════════════ -->
<script>
// ── CONTENT DATA (inlined from data/*.js files) ──────────────
[PASTE entire content of data/foundations.js here]
[PASTE entire content of data/resources-a.js here]
[PASTE entire content of data/resources-b.js here]
[PASTE entire content of data/process-demand.js here]
[PASTE entire content of data/process-supply.js here]
[PASTE entire content of data/tech.js here]
[PASTE entire content of data/cases.js here]

// ── FLASHCARD DATA (inlined from build_flashcards.js) ────────
[PASTE entire content of build_flashcards.js here]

// ── TAB NAVIGATION ──────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('tab-' + page).classList.add('active');
}

// ── STUDY MAP ENGINE (from study-map.html <script> block) ────
[PASTE the entire <script> block content from study-map.html here]
[This includes: TOPIC_CONFIG, renderTopics(), renderSubtopic(), toggleTopic(), toggleSub()]
[Also paste the DOMContentLoaded listener: document.addEventListener('DOMContentLoaded', renderTopics)]

// ── FLASHCARD ENGINE (from flashcards.html <script> block) ───
[PASTE the entire <script> block content from flashcards.html here]
[This includes: DECK_CONFIG, shuffle(), buildMasterDeck(), buildDeckSelector(),
 selectDeck(), showCard(), flipCard(), nextCard(), prevCard(),
 showDoneScreen(), hideDoneScreen(), shuffleAndRestart()]
[Also paste the DOMContentLoaded listener that calls buildDeckSelector() and auto-loads c1]

</script>

</body>
</html>
```

---

## Important Assembly Notes

1. **No duplicate `DOMContentLoaded` conflicts:** If both the study map and flashcard engines register `DOMContentLoaded` listeners, that's fine — they each initialize their own component. Both will fire on load.

2. **No duplicate variable names:** Check that the study map JS and flashcard JS don't use the same variable names at the global scope. If there are conflicts, rename one (e.g., prefix flashcard functions with `fc_` if needed).

3. **The `page` CSS class:** `study-map.html` and `flashcards.html` both use `.page { display: none; } .page.active { display: block; }`. This CSS is already in the mockup stylesheet — just make sure it's present once in the `<style>` block.

4. **The TOPIC_CONFIG in study-map.html references `window.TOPIC_FOUNDATIONS`, etc.** Since all data is now inlined in the same `<script>` block, these global variables are accessible directly. No changes needed.

5. **Remove the `<script src="...">` tags** from the study-map and flashcard content when pasting — they're replaced by the inlined data.

6. **No `.standalone-notice` paragraphs** in the final file — those are only for the standalone pages.

---

## Verification Checklist

Open `index.html` in a browser and confirm ALL of the following:

- [ ] **Tab navigation:** "Study Map" tab loads the study map; "Flashcard Decks" tab loads flashcards; switching back and forth works
- [ ] **Topic blocks:** All 7 topic blocks appear on the Study Map page
- [ ] **Accordion expand/collapse:** Clicking a topic block header expands/collapses it; chevron rotates
- [ ] **Subtopic expand/collapse:** Clicking a subtopic card header expands/collapses its body
- [ ] **Formula boxes:** Formula boxes render in dark background with monospace font and Intuition section
- [ ] **Cross-reference tags:** link-tag spans appear at the bottom of subtopic bodies
- [ ] **Flashcard deck selector:** 8 deck buttons appear; clicking each loads that deck
- [ ] **Flip animation:** Clicking a flashcard triggers 3D flip — front shows term, back shows class tag + definition
- [ ] **Progress bar:** Updates correctly as you navigate through a deck
- [ ] **Finish screen:** Appears after the last card; "Shuffle & Go Again" works
- [ ] **Offline / self-contained:** Close the page, copy index.html to a USB drive or desktop, open it — everything still works with no internet connection or other files needed

---

## Total Content Verification

Before declaring done, count:
- [ ] Total topic blocks visible on Study Map: **7**
- [ ] Foundation subtopics: **11**
- [ ] Resources A subtopics: **9**
- [ ] Resources B subtopics: **8**
- [ ] Process Demand subtopics: **8**
- [ ] Process Supply subtopics: **7**
- [ ] Tech & Innovation subtopics: **7**
- [ ] Case Studies subtopics: **4** (all with amber dots)
- [ ] **Total study map subtopics: 54**
- [ ] Total flashcards: **159** (25+17+21+17+22+35+22)
- [ ] Flashcard decks: **8** (Class 1–7 + Master)

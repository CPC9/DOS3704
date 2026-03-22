# PRD-09: Flashcard Decks Page

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Create `flashcards.html` — a complete, standalone, fully functional flashcard page with 3D flip animation, deck selector, progress bar, navigation, and completion screen. All data comes from `build_flashcards.js` (already exists with 159 cards).

**Architecture:** Single HTML file with embedded CSS (same palette as study-map.html) and all JS logic. Reads `build_flashcards.js` via a `<script>` tag.

**Prerequisite:** `build_flashcards.js` must exist at `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\build_flashcards.js`. (It does — it was pre-built with 159 flashcards across 7 class decks.)

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\flashcards.html`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\build_flashcards.js` (to understand the data structure before writing)
- **Read (for CSS):** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\.superpowers\brainstorm\509-1774181369\revised-mockup.html`

---

## Steps

- [ ] **Step 1: Read `build_flashcards.js` to understand the FLASHCARDS object structure**

The file defines `const FLASHCARDS` with keys: `c1, c2, c3, c4, c5, c6, c7`. Each is an array of `{ term, def, cls }` objects. Do not modify this file.

- [ ] **Step 2: Read the mockup CSS**

Copy the full `<style>` block from revised-mockup.html — use the exact same CSS variables and classes.

- [ ] **Step 3: Write `flashcards.html`**

Use the complete structure below.

- [ ] **Step 4: Verify**

Open flashcards.html in browser and confirm all 10 verification checks below pass.

---

## Complete File Specification

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOS3704 · Flashcard Decks</title>
  <style>
    [PASTE FULL CSS FROM MOCKUP — same as study-map.html]

    /* Additional styles for standalone page */
    .standalone-notice {
      text-align: center; font-size: 11px; color: #2a3f5c;
      margin-top: 32px; padding-top: 14px;
      border-top: 1px solid var(--border);
    }
  </style>
</head>
<body>

<nav class="topbar">
  <div class="topbar-brand">DOS<span>3704</span> · Operations Strategy</div>
  <div class="topbar-nav">
    <a href="study-map.html" style="text-decoration:none">
      <button class="nav-btn">← Study Map</button>
    </a>
    <button class="nav-btn active">Flashcard Decks</button>
  </div>
</nav>

<div class="page active" id="page-flashcards">

  <div class="page-header">
    <h1>Flashcard Decks</h1>
    <p>Select a deck · Click card to flip · Use Prev/Next to navigate</p>
  </div>

  <!-- Deck selector buttons -->
  <div class="deck-selector" id="deck-selector">
    <!-- Populated by JS -->
  </div>

  <!-- Flashcard arena -->
  <div class="fc-arena">

    <!-- Progress bar -->
    <div class="fc-progress-bar-wrap">
      <div class="fc-progress-bar">
        <div class="fc-progress-fill" id="progress-fill" style="width:0%"></div>
      </div>
      <span class="fc-counter" id="card-counter">Card 1 of N</span>
    </div>

    <!-- The flip card -->
    <div class="fc-card-wrap">
      <div class="fc-card" id="fc-card" onclick="flipCard()">
        <div class="fc-front">
          <div class="term" id="card-term">Select a deck to begin</div>
          <div class="hint" id="card-hint">Click to reveal definition</div>
        </div>
        <div class="fc-back">
          <div class="class-tag" id="card-cls"></div>
          <div class="definition" id="card-def"></div>
        </div>
      </div>
    </div>

    <!-- Navigation controls -->
    <div class="fc-controls">
      <button class="fc-btn" id="btn-prev" onclick="prevCard()" disabled>← Prev</button>
      <button class="fc-btn primary" id="btn-next" onclick="nextCard()">Next →</button>
    </div>

    <!-- Completion screen -->
    <div class="fc-done-screen" id="done-screen">
      <h2>🎉 Deck Complete!</h2>
      <p id="done-msg">You reviewed N cards.</p>
      <button class="fc-btn primary" onclick="shuffleAndRestart()">🔀 Shuffle &amp; Go Again</button>
    </div>

  </div>

  <p class="standalone-notice">DOS3704 Operations Strategy Study Tool · Flashcard Decks Page</p>
</div>

<!-- Load flashcard data (must come before the app script) -->
<script src="build_flashcards.js"></script>

<script>
// ═══════════════════════════════════════════════════════
// DECK CONFIGURATION
// ═══════════════════════════════════════════════════════
const DECK_CONFIG = [
  { key: 'c1', label: 'Class 1 — Foundations' },
  { key: 'c2', label: 'Class 2 — Trade-offs & Positioning' },
  { key: 'c3', label: 'Class 3 — Capacity: Size & Timing' },
  { key: 'c4', label: 'Class 4 — Capacity: Flexibility' },
  { key: 'c5', label: 'Class 5 — Capacity: Location' },
  { key: 'c6', label: 'Class 6 — Supply & Demand' },
  { key: 'c7', label: 'Class 7 — Technology & Innovation' },
  { key: 'master', label: '🔀 Master Deck', isMaster: true }
];

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let currentDeck = [];
let currentIndex = 0;
let isFlipped = false;

// ═══════════════════════════════════════════════════════
// FISHER-YATES SHUFFLE
// ═══════════════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ═══════════════════════════════════════════════════════
// BUILD MASTER DECK
// ═══════════════════════════════════════════════════════
function buildMasterDeck() {
  const all = [];
  ['c1','c2','c3','c4','c5','c6','c7'].forEach(key => {
    if (FLASHCARDS[key]) all.push(...FLASHCARDS[key]);
  });
  return shuffle(all);
}

// ═══════════════════════════════════════════════════════
// INIT DECK SELECTOR
// ═══════════════════════════════════════════════════════
function buildDeckSelector() {
  const sel = document.getElementById('deck-selector');
  sel.innerHTML = '';
  DECK_CONFIG.forEach(cfg => {
    const btn = document.createElement('button');
    btn.className = 'deck-btn' + (cfg.isMaster ? ' master' : '');
    btn.textContent = cfg.label;
    // Show card count in label
    const count = cfg.isMaster
      ? (['c1','c2','c3','c4','c5','c6','c7'].reduce((n,k) => n + (FLASHCARDS[k]||[]).length, 0))
      : (FLASHCARDS[cfg.key] || []).length;
    btn.textContent += ` (${count})`;
    btn.onclick = () => selectDeck(cfg.key, btn);
    sel.appendChild(btn);
  });
}

// ═══════════════════════════════════════════════════════
// SELECT DECK
// ═══════════════════════════════════════════════════════
function selectDeck(key, btnEl) {
  // Update active button
  document.querySelectorAll('.deck-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  // Load deck
  if (key === 'master') {
    currentDeck = buildMasterDeck();
  } else {
    currentDeck = [...(FLASHCARDS[key] || [])];
  }

  currentIndex = 0;
  hideDoneScreen();
  showCard();
}

// ═══════════════════════════════════════════════════════
// SHOW CARD
// ═══════════════════════════════════════════════════════
function showCard() {
  if (currentDeck.length === 0) return;

  const card = currentDeck[currentIndex];
  const total = currentDeck.length;

  // Reset flip
  isFlipped = false;
  document.getElementById('fc-card').classList.remove('flipped');

  // Populate front
  document.getElementById('card-term').textContent = card.term;
  document.getElementById('card-hint').textContent = 'Click to reveal definition';

  // Populate back
  document.getElementById('card-cls').textContent = card.cls;
  document.getElementById('card-def').textContent = card.def;

  // Update progress
  const pct = Math.round(((currentIndex + 1) / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('card-counter').textContent = `Card ${currentIndex + 1} of ${total}`;

  // Update buttons
  document.getElementById('btn-prev').disabled = (currentIndex === 0);

  const nextBtn = document.getElementById('btn-next');
  if (currentIndex === total - 1) {
    nextBtn.textContent = 'Finish ✓';
  } else {
    nextBtn.textContent = 'Next →';
  }
}

// ═══════════════════════════════════════════════════════
// FLIP CARD
// ═══════════════════════════════════════════════════════
function flipCard() {
  if (currentDeck.length === 0) return;
  isFlipped = !isFlipped;
  document.getElementById('fc-card').classList.toggle('flipped');
}

// ═══════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════
function nextCard() {
  if (currentDeck.length === 0) return;
  if (currentIndex < currentDeck.length - 1) {
    currentIndex++;
    showCard();
  } else {
    // Show completion screen
    showDoneScreen();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard();
  }
}

// ═══════════════════════════════════════════════════════
// COMPLETION SCREEN
// ═══════════════════════════════════════════════════════
function showDoneScreen() {
  document.getElementById('done-screen').classList.add('visible');
  document.getElementById('done-msg').textContent =
    `You reviewed all ${currentDeck.length} cards. Great work!`;
  // Hide card and controls
  document.querySelector('.fc-card-wrap').style.display = 'none';
  document.querySelector('.fc-controls').style.display = 'none';
  document.querySelector('.fc-progress-bar-wrap').style.display = 'none';
}

function hideDoneScreen() {
  document.getElementById('done-screen').classList.remove('visible');
  document.querySelector('.fc-card-wrap').style.display = '';
  document.querySelector('.fc-controls').style.display = '';
  document.querySelector('.fc-progress-bar-wrap').style.display = '';
}

function shuffleAndRestart() {
  currentDeck = shuffle(currentDeck);
  currentIndex = 0;
  hideDoneScreen();
  showCard();
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildDeckSelector();
  // Auto-load Class 1 deck on startup
  const firstBtn = document.querySelector('.deck-btn');
  if (firstBtn) selectDeck('c1', firstBtn);
});
</script>

</body>
</html>
```

---

## Verification Checklist

Open `flashcards.html` in a browser and confirm ALL of the following:

- [ ] Page loads with correct blue/dark styling
- [ ] Deck selector shows 8 buttons (Class 1–7 + Master Deck) each with card counts
- [ ] Class 1 deck auto-loads on page open; "Class 1 — Foundations" button is active
- [ ] Card counter shows "Card 1 of 25" (Class 1 has 25 cards)
- [ ] Clicking the card triggers the 3D flip animation (front shows term, back shows class tag + definition)
- [ ] Next → advances to card 2, card counter updates
- [ ] Progress bar fills as you advance through the deck
- [ ] Prev ← button is disabled on card 1; enabled after advancing
- [ ] On the last card, Next button relabels to "Finish ✓"
- [ ] Clicking Finish ✓ shows the completion screen with "🎉 Deck Complete!" and card count
- [ ] "🔀 Shuffle & Go Again" restarts the same deck in a different order
- [ ] Clicking a different deck button loads that deck from card 1
- [ ] Master Deck button (dashed border) loads all cards shuffled
- [ ] No JavaScript errors in console

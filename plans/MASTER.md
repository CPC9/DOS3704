# DOS3704 Study Website — Master Build Plan

> **For agentic workers:** Execute PRDs in the order shown below. PRDs within the same Stage can be dispatched in parallel. Each PRD is fully self-contained — an agent can execute it with zero additional context.

**Goal:** Build `index.html` — a single self-contained offline HTML file that is a full interactive study tool for the DOS3704 Operations Strategy final exam.

**Architecture:** Two pages (Study Map + Flashcard Decks) built as standalone HTML files first, then assembled into one tabbed SPA. Content is written as JS data files by separate agents, then inlined at assembly.

---

## Build Stages

### Stage 1 — Shell (run first, alone)
| PRD | Output | What it does |
|-----|--------|-------------|
| PRD-01 | `study-map.html` | Full CSS, Three Central Questions, topic accordion engine, includes data file script tags |

### Stage 2 — Content (run all in parallel after Stage 1)
| PRD | Output | Subtopic Count |
|-----|--------|---------------|
| PRD-02 | `data/foundations.js` | 11 subtopics (Classes 1–2) |
| PRD-03 | `data/resources-a.js` | 9 subtopics (Classes 3–4, first half) |
| PRD-04 | `data/resources-b.js` | 8 subtopics (Classes 4–5, second half) |
| PRD-05 | `data/process-demand.js` | 8 subtopics (Class 6 demand) |
| PRD-06 | `data/process-supply.js` | 7 subtopics (Class 6 supply) |
| PRD-07 | `data/tech.js` | 7 subtopics (Class 7) |
| PRD-08 | `data/cases.js` | 4 case study subtopics |

### Stage 3 — Flashcards (run in parallel with Stage 2)
| PRD | Output | What it does |
|-----|--------|-------------|
| PRD-09 | `flashcards.html` | Complete flashcard UI; reads existing `build_flashcards.js` |

### Stage 4 — Assembly (run last, after all above complete)
| PRD | Output | What it does |
|-----|--------|-------------|
| PRD-10 | `index.html` | Inlines everything into one self-contained file with tab nav |

---

## File Map

```
DOS Exam Prep/
  plans/                         ← you are here
    MASTER.md
    PRD-01-shell.md
    PRD-02-foundations.md
    PRD-03-resources-a.md
    PRD-04-resources-b.md
    PRD-05-process-demand.md
    PRD-06-process-supply.md
    PRD-07-tech.md
    PRD-08-cases.md
    PRD-09-flashcards.md
    PRD-10-assembly.md
  data/
    foundations.js               ← PRD-02
    resources-a.js               ← PRD-03
    resources-b.js               ← PRD-04
    process-demand.js            ← PRD-05
    process-supply.js            ← PRD-06
    tech.js                      ← PRD-07
    cases.js                     ← PRD-08
  build_flashcards.js            ← ALREADY EXISTS (159 cards, 7 class decks)
  study-map.html                 ← PRD-01
  flashcards.html                ← PRD-09
  index.html                     ← PRD-10 (FINAL OUTPUT)
  .superpowers/brainstorm/509-1774181369/revised-mockup.html  ← CSS source
  Study Notes/                   ← content source files
    CONCEPTUAL_MAP.md
    01_Class_1_Notes.md
    02_Class_2_Notes.md
    03_Class_3_Notes.md
    04_Class_4_Notes.md
    05_Class_5_Notes.md
    06_Class_6_Notes.md
    07_Class_7_Notes.md
```

---

## CSS Variables (all agents must use these)

```css
--bg:        #1c2d4a;
--bg-card:   #243556;
--bg-sub:    #1a2840;
--bg-deep:   #142036;
--border:    rgba(120,160,220,0.15);
--border-hi: rgba(120,160,220,0.3);
--text:      #dde6f5;
--text-mute: #8fa8cc;
--text-dim:  #5c7a9e;
--accent:    #6a9fd8;
--accent-hi: #8fb8f0;
--white:     #f0f4fb;
--formula-bg:#111f35;
--formula-border: rgba(100,160,255,0.25);
```

Font: `'Calibri', 'Trebuchet MS', 'Segoe UI', sans-serif` — everywhere, 15px base.

---

## Content Body HTML Reference (ALL content agents must use these exact classes)

```html
<!-- Section label (small caps header) -->
<div class="section-label">THE CORE IDEA</div>

<!-- Prose paragraph -->
<p class="prose">Text goes here. Use <strong>bold</strong> for key terms.</p>

<!-- Bullet list -->
<ul class="bullets">
  <li><strong>Term:</strong> definition or explanation</li>
  <li>Another point</li>
</ul>

<!-- Formula box — use for EVERY formula, always include Intuition subsection -->
<div class="formula-wrap">
  <div class="formula">NPV = C₀ + Σ [ Cₜ / (1+r)ᵗ ]</div>
  <div class="formula-explain">
    <strong>C₀</strong> = initial investment (negative — it's a cost)<br>
    <strong>Cₜ</strong> = cash flow in period t<br>
    <strong>r</strong> = discount rate (opportunity cost of capital)<br>
    <strong>t</strong> = time period (1 to T)<br>
    <br>
    <strong>Intuition:</strong> Future cash flows are worth less than today's cash
    because capital could be deployed elsewhere (the discount rate captures this).
    A positive NPV means the project creates value beyond the cost of capital.
    The higher the discount rate, the more the formula penalizes far-future returns —
    meaning risky or capital-intensive operations must pay off quickly.
  </div>
</div>

<!-- Insight box — use for exam-critical takeaways -->
<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The key exam takeaway goes here.</p>
</div>

<!-- Cross-reference tags — put these at the bottom of every subtopic body -->
<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">NPV (Class 1)</span>
  <span class="link-tag">Trade-offs (Class 2)</span>
</div>
```

---

## Data File Format (PRDs 02–08)

Each content PRD writes a JS file like this:

```js
const TOPIC_FOUNDATIONS = {
  id: 'foundations',
  eyebrow: 'Classes 1–2 · Foundation Layer',
  title: 'The Framework, Alignment & Trade-offs',
  icon: '🏛',
  desc: 'Strategy hierarchy · 3 views · SOA · PPM · Trade-offs · NPV · Cost decomposition',
  subtopics: [
    {
      id: 'strategy-hierarchy',
      title: 'Strategy Hierarchy',
      isCase: false,
      body: `<div class="section-label">THE BIG PICTURE</div>
<p class="prose">...</p>`
    },
    // ... more subtopics
  ]
};
```

Case study subtopics use `isCase: true` — they render with an amber dot instead of the default accent dot.

---

## Quality Bar (apply to all content)

Every subtopic body MUST contain:
1. **Prose intro** — 2–4 sentences explaining WHAT it is and WHY it matters strategically, written for someone who has never attended class
2. **At least one section label** (`<div class="section-label">`)
3. **Formulas** — EVERY formula gets a `formula-wrap` box with variable definitions AND an Intuition subsection
4. **Insight box** — at least one `insight-box` per subtopic with a key exam takeaway
5. **Cross-refs** — link-tag row at the bottom connecting to related subtopics
6. **Depth** — enough detail that someone who never attended class could understand the concept

Definitions must be sourced verbatim or near-verbatim from the notes files. Do not invent content.

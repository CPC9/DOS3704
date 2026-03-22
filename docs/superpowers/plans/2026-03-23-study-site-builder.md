# Study Site Builder — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a self-contained Claude Code plugin that turns a folder of course materials into a polished, multi-page static study website through an orchestrated 7-phase pipeline.

**Architecture:** A single plugin (`study-site-builder`) containing 9 skills (1 orchestrator, 6 pipeline phases, 2 standalone), pre-built HTML/CSS/JS templates (5 themes, 2 exam formats, 6 page templates), and reference schemas defining the data contracts between skills. No external dependencies — all orchestration patterns are encoded directly in the skill prompts.

**Tech Stack:** Claude Code plugin format (SKILL.md files with YAML frontmatter), static HTML/CSS/JS templates, JSON data schemas, Markdown reference docs.

**Spec:** `docs/superpowers/specs/2026-03-23-study-site-builder-design.md`

---

## Chunk 1: Foundation

Plugin scaffolding, reference schemas, and the CSS variable contract that all themes must implement.

### Task 1: Create plugin directory and manifest

**Files:**
- Create: `study-site-builder/.claude-plugin/plugin.json`
- Create: `study-site-builder/LICENSE`

- [ ] **Step 1: Create the plugin root directory structure**

```bash
mkdir -p study-site-builder/.claude-plugin
mkdir -p study-site-builder/skills/{start,content-ingest,concept-mapper,content-auditor,site-designer,site-builder,exam-generator,mobile-checker,tutor}
mkdir -p study-site-builder/templates/themes/{midnight-blue,warm-ivory,forest-green,slate-minimal,sunset-coral}
mkdir -p study-site-builder/templates/exam-formats/{card-style,classic-style}
mkdir -p study-site-builder/templates/page-templates
mkdir -p study-site-builder/references
```

- [ ] **Step 2: Write plugin.json**

Create `study-site-builder/.claude-plugin/plugin.json`:

```json
{
  "name": "study-site-builder",
  "description": "Turn a folder of course materials into a polished study website — orchestrated pipeline with content ingestion, synthesis, templated site generation, practice exams, and a conversational tutor",
  "version": "0.1.0",
  "author": {
    "name": "Connor Clark"
  },
  "repository": "https://github.com/connorpclark9/study-site-builder",
  "license": "MIT",
  "keywords": ["study", "education", "website", "flashcards", "practice-exams", "tutor", "pipeline"]
}
```

- [ ] **Step 3: Write LICENSE with attributions**

Create `study-site-builder/LICENSE` with MIT license under Connor Clark's name. Include attribution notice at the bottom:

```
---
ATTRIBUTION NOTICES

This project incorporates orchestration patterns adapted from:
- superpowers (MIT License, Copyright (c) 2025 Jesse Vincent)
  https://github.com/obra/superpowers

Theme development was informed by:
- ui-ux-pro-max (MIT License, Copyright (c) 2024 Next Level Builder)
```

- [ ] **Step 4: Commit**

```bash
cd study-site-builder
git init
git add .claude-plugin/plugin.json LICENSE
git commit -m "feat: initialize plugin with manifest and license"
```

---

### Task 2: Define the study notes reference schema

**Files:**
- Create: `study-site-builder/references/study-notes-format.md`

This schema defines the exact markdown structure that content-ingest agents must produce. It's the contract between Phase 1 and all downstream phases.

- [ ] **Step 1: Write study-notes-format.md**

Create `study-site-builder/references/study-notes-format.md`:

```markdown
# Study Notes Format Schema

Every study note file produced by the content-ingest skill MUST follow this structure.
Files are written to `study-notes/` with kebab-case names (e.g., `lecture-01-foundations.md`).

## Required Frontmatter

---
title: "Lecture 1: Foundations of Operations Strategy"
source_files:
  - "Lecture1-Intro.pdf"
  - "Lecture1-Slides.pptx"
topics:
  - "operations strategy"
  - "competitive priorities"
lecture_number: 1
---

## Required Sections

### 1. Overview
A 2-3 paragraph summary of the lecture/topic. What is this about? Why does it matter?
What driving questions does it address?

### 2. Key Concepts
Organized by subtopic with clear headings. Each concept should include:
- **Definition** — what it is
- **Context** — why it matters and when it applies
- **Relationships** — how it connects to other concepts in the course

### 3. Frameworks & Mental Models
Any frameworks, models, or structured approaches introduced. Include:
- Name of the framework
- Visual description or structure (use markdown tables or ASCII diagrams)
- How to apply it
- When to use it vs alternatives

### 4. Formulas & Quantitative Tools (if applicable)
For each formula:
- The formula itself (in plain text or LaTeX-style notation)
- What each variable represents
- Intuitive interpretation (what does this formula actually tell you?)
- Example application with numbers
- Common mistakes or edge cases

### 5. Case Studies (if applicable)
For each case:
- Company/scenario name
- Key situation and challenge
- What was done (or should be done)
- Key takeaway and connection to course concepts

### 6. Key Takeaways
5-10 bullet points summarizing the most important ideas from this lecture.
These should be things a student needs to remember for an exam.

### 7. Key Terms and Definitions Glossary
An alphabetical list of every important term from this lecture.
Format:

- **Term Name**: Definition of the term. [Related: Other Term, Another Term]

This section is extracted by the concept-mapper to generate flashcards.
Every term that appears in the lecture content MUST be included here.

## Formatting Rules

- Use markdown headers (## for sections, ### for subsections)
- Use bold for term definitions: **Term**: Definition
- Use bullet lists for enumerated items
- Use markdown tables for comparisons and frameworks
- Use > blockquotes for important callouts or exam tips
- Use `code formatting` for formulas and variable names
- Keep paragraphs short (3-5 sentences max)
- Cross-reference other lectures by name: "See also: Lecture 3 - Capacity"
```

- [ ] **Step 2: Commit**

```bash
git add references/study-notes-format.md
git commit -m "feat: add study notes format schema"
```

---

### Task 3: Define the flashcard JSON schema

**Files:**
- Create: `study-site-builder/references/flashcard-format.md`

- [ ] **Step 1: Write flashcard-format.md**

Create `study-site-builder/references/flashcard-format.md`:

```markdown
# Flashcard JSON Schema

The concept-mapper skill extracts terms from the Key Terms and Definitions Glossary
sections of all study note files and produces `synthesis/flashcards.json`.

## Schema

{
  "decks": [
    {
      "id": "lecture-01",
      "title": "Lecture 1: Foundations",
      "cards": [
        {
          "id": "lecture-01-001",
          "term": "Operations Strategy",
          "definition": "A pattern of decisions that shapes the long-term capabilities of an operation and their contribution to overall strategy.",
          "relatedTerms": ["Competitive Priorities", "Trade-offs"],
          "sourceLecture": "Lecture 1: Foundations"
        }
      ]
    }
  ],
  "metadata": {
    "totalCards": 150,
    "totalDecks": 8,
    "generatedFrom": "study-notes/",
    "generatedAt": "2026-03-23T02:00:00Z"
  }
}

## Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decks` | array | yes | One deck per lecture/study note file |
| `decks[].id` | string | yes | Kebab-case identifier matching the study note filename |
| `decks[].title` | string | yes | Human-readable deck title |
| `decks[].cards` | array | yes | All flashcards for this deck |
| `cards[].id` | string | yes | Unique card ID: `{deck-id}-{3-digit-number}` |
| `cards[].term` | string | yes | The term or concept name (front of card) |
| `cards[].definition` | string | yes | The definition (back of card). Max 300 characters. |
| `cards[].relatedTerms` | array | no | Names of related terms from any deck |
| `cards[].sourceLecture` | string | yes | Which lecture this term comes from |
| `metadata.totalCards` | number | yes | Total card count across all decks |
| `metadata.totalDecks` | number | yes | Number of decks |
| `metadata.generatedFrom` | string | yes | Source directory path |
| `metadata.generatedAt` | string | yes | ISO 8601 timestamp |

## Rules

- One deck per study note file (1:1 mapping)
- Every term from every Key Terms and Definitions Glossary section must appear
- Definitions should be concise (max 300 characters) — students flip cards quickly
- If a glossary definition is too long, condense it while preserving accuracy
- Card IDs must be globally unique
- Decks should be ordered by lecture number
```

- [ ] **Step 2: Commit**

```bash
git add references/flashcard-format.md
git commit -m "feat: add flashcard JSON schema"
```

---

### Task 4: Define the exam question JSON schema

**Files:**
- Create: `study-site-builder/references/exam-format.md`

- [ ] **Step 1: Write exam-format.md**

Create `study-site-builder/references/exam-format.md`:

```markdown
# Exam Question JSON Schema

The exam-generator skill produces one JSON file per practice exam in `site/data/`.

## Schema

{
  "examId": "exam-1",
  "title": "Practice Exam 1: Comprehensive Review",
  "description": "Covers all course topics with balanced representation.",
  "focusAreas": [],
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which of the following best describes the sand cone model?",
      "options": [
        {"id": "a", "text": "A model for sequential capability building"},
        {"id": "b", "text": "A framework for cost reduction"},
        {"id": "c", "text": "A tool for demand forecasting"},
        {"id": "d", "text": "A method for inventory management"}
      ],
      "correctAnswer": "a",
      "explanation": "The sand cone model proposes that operational capabilities must be built in a specific sequence: quality first, then delivery, then flexibility, then cost.",
      "sourceLecture": "Lecture 2: Trade-offs",
      "difficulty": "medium"
    },
    {
      "id": "q2",
      "type": "multiple-multiple-choice",
      "question": "Which of the following are competitive priorities? (Select all that apply)",
      "options": [
        {"id": "a", "text": "Cost"},
        {"id": "b", "text": "Quality"},
        {"id": "c", "text": "Branding"},
        {"id": "d", "text": "Flexibility"}
      ],
      "correctAnswers": ["a", "b", "d"],
      "explanation": "Cost, quality, delivery, and flexibility are the four classical competitive priorities. Branding is a marketing concept, not an operations priority.",
      "sourceLecture": "Lecture 1: Foundations",
      "difficulty": "easy"
    },
    {
      "id": "q3",
      "type": "short-answer",
      "question": "Define 'economies of scale' in the context of capacity planning.",
      "correctAnswer": "Economies of scale refer to the cost advantages that arise when increasing production volume — the cost per unit decreases as fixed costs are spread across more units.",
      "acceptableKeywords": ["cost per unit", "fixed costs", "volume", "decreases"],
      "sourceLecture": "Lecture 3: Capacity",
      "difficulty": "medium"
    },
    {
      "id": "q4",
      "type": "long-answer",
      "question": "Explain how the concept of trade-offs applies to operations strategy. Use a specific example.",
      "sampleAnswer": "Trade-offs in operations strategy mean that improving one competitive priority often comes at the expense of another...",
      "gradingCriteria": [
        "Defines trade-offs correctly",
        "Identifies at least two competitive priorities in tension",
        "Provides a specific, relevant example",
        "Explains the mechanism of the trade-off"
      ],
      "sourceLecture": "Lecture 2: Trade-offs",
      "difficulty": "hard"
    }
  ],
  "metadata": {
    "totalQuestions": 30,
    "questionTypes": {
      "multiple-choice": 15,
      "multiple-multiple-choice": 5,
      "short-answer": 7,
      "long-answer": 3
    },
    "generatedAt": "2026-03-23T02:00:00Z",
    "verifiedAgainstNotes": true
  }
}

## Field Definitions

### Exam-Level Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `examId` | string | yes | Unique exam identifier: `exam-{N}` |
| `title` | string | yes | Human-readable exam title |
| `description` | string | yes | What this exam covers |
| `focusAreas` | array | no | Specific topics to emphasize (empty = balanced) |
| `questions` | array | yes | All questions in this exam |

### Question Fields (All Types)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Unique within this exam: `q{N}` |
| `type` | string | yes | One of: `multiple-choice`, `multiple-multiple-choice`, `short-answer`, `long-answer` |
| `question` | string | yes | The question text |
| `sourceLecture` | string | yes | Which lecture this question draws from |
| `difficulty` | string | yes | One of: `easy`, `medium`, `hard` |

### Type-Specific Fields

**multiple-choice:**
| Field | Type | Description |
|-------|------|-------------|
| `options` | array | 4 options, each with `id` (a-d) and `text` |
| `correctAnswer` | string | The `id` of the correct option |
| `explanation` | string | Why this answer is correct |

**multiple-multiple-choice:**
| Field | Type | Description |
|-------|------|-------------|
| `options` | array | 4-6 options, each with `id` and `text` |
| `correctAnswers` | array | Array of correct option `id`s |
| `explanation` | string | Why these answers are correct |

**short-answer:**
| Field | Type | Description |
|-------|------|-------------|
| `correctAnswer` | string | Model answer (shown to student) |
| `acceptableKeywords` | array | Key terms that a good answer should include |

**long-answer:**
| Field | Type | Description |
|-------|------|-------------|
| `sampleAnswer` | string | Full model answer |
| `gradingCriteria` | array | Checklist of points a good answer should cover |

## Rules

- Every question must cite its source lecture
- Every correct answer must be verifiable against the study notes
- Multiple-choice distractors should be plausible but clearly wrong
- Explanations should teach, not just state the answer
- Aim for difficulty distribution: 30% easy, 50% medium, 20% hard
- Questions should cover all lectures proportionally unless focusAreas specifies otherwise
```

- [ ] **Step 2: Commit**

```bash
git add references/exam-format.md
git commit -m "feat: add exam question JSON schema"
```

---

### Task 5: Define the CSS variable contract

**Files:**
- Create: `study-site-builder/references/theme-css-contract.md`

This defines the shared set of CSS variable names that every theme must implement. Derived from the DOS3704 design system.

- [ ] **Step 1: Write theme-css-contract.md**

Create `study-site-builder/references/theme-css-contract.md`:

```markdown
# Theme CSS Variable Contract

Every theme MUST define all of these CSS custom properties in its `theme.css` file
under the `:root` selector. Page templates and shared JS reference these variables
exclusively — no hardcoded colors or sizes.

## Required Variables

### Colors

:root {
  /* Primary backgrounds */
  --bg:             /* Page background */
  --bg-card:        /* Card/section background */
  --bg-sub:         /* Sub-item/nested background */
  --bg-deep:        /* Deepest nested elements (icons, badges) */

  /* Borders */
  --border:         /* Subtle border (default state) */
  --border-hi:      /* Prominent border (hover/focus state) */

  /* Text */
  --text:           /* Primary body text */
  --text-mute:      /* Secondary/muted text */
  --text-dim:       /* Tertiary/disabled text */

  /* Accent */
  --accent:         /* Primary accent (links, active states) */
  --accent-hi:      /* Bright accent (hover, highlights) */

  /* Utility */
  --white:          /* Highest contrast text/element */
  --formula-bg:     /* Code/formula block background */
  --formula-border: /* Code/formula block border */

  /* Exam feedback */
  --correct:        /* Correct answer indicator (green family) */
  --correct-bg:     /* Correct answer background tint */
  --incorrect:      /* Incorrect answer indicator (red family) */
  --incorrect-bg:   /* Incorrect answer background tint */
}

### Typography

:root {
  --font-primary:   /* Main text font stack, e.g., 'Calibri', 'Segoe UI', sans-serif */
  --font-mono:      /* Code/formula font stack, e.g., 'Consolas', monospace */
}

### Layout

:root {
  --max-width:      1100px;    /* Page content max-width */
  --radius:         12px;      /* Standard border-radius for cards */
  --radius-sm:      8px;       /* Small border-radius for buttons/badges */
  --spacing:        12px;      /* Standard gap between elements */
  --spacing-lg:     24px;      /* Large gap (between sections) */
  --padding-card:   18px;      /* Standard card padding */
  --padding-page:   28px 32px; /* Page-level padding (desktop) */
}

### Responsive Overrides

Themes MAY override layout variables at breakpoints but MUST use these exact
media queries for consistency with page templates:

@media (max-width: 768px) {
  :root {
    --padding-page: 20px 16px;
    --padding-card: 14px;
  }
}

@media (max-width: 480px) {
  :root {
    --padding-page: 16px 12px;
    --padding-card: 12px;
  }
}

## Theme Folder Structure

templates/themes/<theme-name>/
├── theme.css      # All variables + base styles using those variables
├── preview.md     # 3-5 sentence text description for the design phase
└── assets/        # Optional: background patterns, gradients, etc.

## Rules

- Every variable listed above MUST be defined — templates will break if any are missing
- Colors should form a cohesive palette with sufficient contrast (WCAG AA minimum)
- Font stacks should include system font fallbacks
- Layout variables should remain consistent across themes (only colors/fonts change)
- The `--correct` and `--incorrect` variables should be clearly distinguishable
```

- [ ] **Step 2: Commit**

```bash
git add references/theme-css-contract.md
git commit -m "feat: add CSS variable contract for themes"
```

---

### Task 6: Define the nav-config schema

**Files:**
- Create: `study-site-builder/references/nav-config-format.md`

- [ ] **Step 1: Write nav-config-format.md**

Create `study-site-builder/references/nav-config-format.md`:

```markdown
# Navigation Config Schema

The site-builder produces `site/data/nav-config.json` which `nav.js` reads
to render the navigation bar on every page. The exam-generator and add-exam
skills update this file when adding new exam pages.

## Schema

{
  "siteName": "DOS3704 Study Guide",
  "pages": [
    {"id": "index", "title": "Home", "path": "index.html", "type": "core"},
    {"id": "study-map", "title": "Study Map", "path": "study-map.html", "type": "core"},
    {"id": "flashcards", "title": "Flashcards", "path": "flashcards.html", "type": "core"},
    {"id": "last-minute-review", "title": "Last-Minute Review", "path": "last-minute-review.html", "type": "core"},
    {"id": "sample-questions", "title": "Sample Questions", "path": "sample-questions.html", "type": "core"},
    {"id": "exam-1", "title": "Practice Exam 1", "path": "exams/practice-exam-1.html", "type": "exam"},
    {"id": "exam-2", "title": "Practice Exam 2", "path": "exams/practice-exam-2.html", "type": "exam"}
  ]
}

## Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `siteName` | string | yes | Displayed in nav bar header |
| `pages` | array | yes | Ordered list of navigation links |
| `pages[].id` | string | yes | Unique page identifier |
| `pages[].title` | string | yes | Display text in nav |
| `pages[].path` | string | yes | Relative path from site root |
| `pages[].type` | string | yes | `core` or `exam` — exams may be grouped in a dropdown |

## Rules

- Page order in the array determines nav order
- Core pages come before exam pages
- When adding a new exam, append to the end of the pages array
- The `type` field allows nav.js to group exams in a sub-menu if there are many
```

- [ ] **Step 2: Commit**

```bash
git add references/nav-config-format.md
git commit -m "feat: add nav-config JSON schema"
```

---

## Chunk 2: Templates

Pre-built themes, page templates, exam format templates, and shared JavaScript.

### Task 7: Build the Midnight Blue theme

**Files:**
- Create: `study-site-builder/templates/themes/midnight-blue/theme.css`
- Create: `study-site-builder/templates/themes/midnight-blue/preview.md`

This is the flagship theme — directly extracted from the DOS3704 site's proven design.

- [ ] **Step 1: Write theme.css**

Create `study-site-builder/templates/themes/midnight-blue/theme.css` implementing all CSS variables from the contract. Base colors:
- `--bg: #1c2d4a` (dark navy)
- `--bg-card: #243556` (card navy)
- `--accent: #6a9fd8` (steel blue)
- `--text: #dde6f5` (light blue-white)
- `--font-primary: 'Calibri', 'Trebuchet MS', 'Segoe UI', sans-serif`

Include base styles that use the variables: body reset, card component, button styles, header styles, scrollbar styling, responsive breakpoints (768px, 480px), and touch target sizing for `@media (pointer: coarse)`.

- [ ] **Step 2: Write preview.md**

Create `study-site-builder/templates/themes/midnight-blue/preview.md`:

```markdown
# Midnight Blue

A dark navy theme with soft blue accents and light text. Professional and easy on the
eyes for long study sessions. Inspired by the DOS3704 Operations Strategy study site.

**Palette:** Deep navy backgrounds (#1c2d4a), steel blue accents (#6a9fd8), cool white
text (#dde6f5). Cards float on a slightly lighter navy (#243556) with subtle blue borders.

**Personality:** Focused, professional, calm. Good for technical and business courses.

**Best for:** Evening study sessions, courses with lots of reading, students who prefer
dark interfaces.
```

- [ ] **Step 3: Commit**

```bash
git add templates/themes/midnight-blue/
git commit -m "feat: add midnight-blue theme"
```

---

### Task 8: Build the remaining 4 themes

**Files:**
- Create: `study-site-builder/templates/themes/warm-ivory/theme.css`
- Create: `study-site-builder/templates/themes/warm-ivory/preview.md`
- Create: `study-site-builder/templates/themes/forest-green/theme.css`
- Create: `study-site-builder/templates/themes/forest-green/preview.md`
- Create: `study-site-builder/templates/themes/slate-minimal/theme.css`
- Create: `study-site-builder/templates/themes/slate-minimal/preview.md`
- Create: `study-site-builder/templates/themes/sunset-coral/theme.css`
- Create: `study-site-builder/templates/themes/sunset-coral/preview.md`

Each theme implements the full CSS variable contract with its own color palette and personality. All share the same base styles structure as midnight-blue — only the variable values change.

- [ ] **Step 1: Write warm-ivory theme**

Colors: `--bg: #faf6f0` (warm cream), `--bg-card: #fff` (white), `--accent: #c8963e` (warm gold), `--text: #2c2416` (dark brown). Light theme with textbook aesthetics.

- [ ] **Step 2: Write forest-green theme**

Colors: `--bg: #1a2e1f` (deep forest), `--bg-card: #243a28` (forest card), `--accent: #6ab878` (soft green), `--text: #d8e8dc` (pale green-white). Dark theme, earthy and calming.

- [ ] **Step 3: Write slate-minimal theme**

Colors: `--bg: #f8f9fa` (near-white), `--bg-card: #fff` (white), `--accent: #4a5568` (slate gray), `--text: #1a202c` (near-black). Ultra-clean light theme, maximum readability.

- [ ] **Step 4: Write sunset-coral theme**

Colors: `--bg: #1f1520` (dark plum), `--bg-card: #2a1d2e` (dark card), `--accent: #e8775a` (warm coral), `--text: #ede0e5` (pale pink-white). Dark theme with warm, energetic personality.

- [ ] **Step 5: Commit all 4 themes**

```bash
git add templates/themes/warm-ivory/ templates/themes/forest-green/ templates/themes/slate-minimal/ templates/themes/sunset-coral/
git commit -m "feat: add warm-ivory, forest-green, slate-minimal, and sunset-coral themes"
```

---

### Task 9: Build shared JavaScript files

**Files:**
- Create: `study-site-builder/templates/shared-js/nav.js`
- Create: `study-site-builder/templates/shared-js/flashcards.js`

- [ ] **Step 1: Write nav.js**

Create `study-site-builder/templates/shared-js/nav.js` that:
- Fetches `data/nav-config.json` on page load
- Renders a sticky top navigation bar with the site name and page links
- Highlights the current page based on `window.location`
- Groups exam-type pages in a dropdown if there are 3+ exams
- Is responsive — collapses to a hamburger menu at 768px

- [ ] **Step 2: Write flashcards.js**

Create `study-site-builder/templates/shared-js/flashcards.js` that:
- Fetches `data/flashcards.json` on page load
- Renders a deck selector (one deck per lecture)
- Shows one card at a time with flip animation (click to reveal definition)
- Provides previous/next navigation and a card counter
- Has a shuffle button
- Shows a completion screen when all cards in a deck are reviewed
- Tracks progress per deck (how many cards reviewed)

- [ ] **Step 3: Commit**

```bash
git add templates/shared-js/
git commit -m "feat: add shared nav.js and flashcards.js"
```

---

### Task 10: Build exam format templates

**Files:**
- Create: `study-site-builder/templates/exam-formats/card-style/exam-template.html`
- Create: `study-site-builder/templates/exam-formats/card-style/exam-styles.css`
- Create: `study-site-builder/templates/exam-formats/card-style/exam-checker.js`
- Create: `study-site-builder/templates/exam-formats/classic-style/exam-template.html`
- Create: `study-site-builder/templates/exam-formats/classic-style/exam-styles.css`
- Create: `study-site-builder/templates/exam-formats/classic-style/exam-checker.js`

- [ ] **Step 1: Write card-style exam template**

`exam-template.html`: Page structure with `{{THEME_CSS}}`, `{{NAV_LINKS}}`, `{{EXAM_DATA_PATH}}`, `{{SHARED_JS}}` placeholders. Questions rendered as rounded box cards with rounded answer option cards.

`exam-styles.css`: Card-specific styling — rounded corners (var(--radius)), card backgrounds (var(--bg-card)), hover states on answer options, selected state styling.

`exam-checker.js`: Reads the exam JSON data file path from a `data-exam` attribute. On "Show Correct Answers" click:
- For multiple-choice: green border + checkmark on correct option, red border on selected-but-wrong option
- For multiple-multiple-choice: same, but multiple greens possible
- For short-answer: reveals the model answer and highlights acceptable keywords
- For long-answer: reveals the sample answer and grading criteria checklist
- Scrolls to the first incorrect answer for quick review

- [ ] **Step 2: Write classic-style exam template**

Same functionality as card-style but with traditional visual treatment:
- Plain text questions (no card wrapper)
- Radio button circles for multiple-choice
- Checkboxes for multiple-multiple-choice
- Text areas for short/long answer
- Same exam-checker.js logic, different visual feedback (colored circles/checkboxes instead of card borders)

- [ ] **Step 3: Commit**

```bash
git add templates/exam-formats/
git commit -m "feat: add card-style and classic-style exam format templates"
```

---

### Task 11: Build page templates

**Files:**
- Create: `study-site-builder/templates/page-templates/index.html`
- Create: `study-site-builder/templates/page-templates/study-map.html`
- Create: `study-site-builder/templates/page-templates/flashcards.html`
- Create: `study-site-builder/templates/page-templates/last-minute-review.html`
- Create: `study-site-builder/templates/page-templates/sample-questions.html`
- Create: `study-site-builder/templates/page-templates/practice-exam.html`

Each template is a structural HTML skeleton with placeholder markers.

- [ ] **Step 1: Write index.html template**

Landing page with:
- `{{THEME_CSS}}` in head
- `{{SITE_NAME}}` as page title
- `{{NAV_LINKS}}` placeholder for nav.js
- Welcome section with course name and description
- Quick links grid to all other pages
- `{{SHARED_JS}}` before closing body

- [ ] **Step 2: Write study-map.html template**

Hierarchical topic layout with:
- Collapsible sections per lecture/topic
- Nested subtopics with expand/collapse
- Connection indicators showing relationships between topics
- `{{STUDY_MAP_CONTENT}}` placeholder for the conceptual map content

- [ ] **Step 3: Write flashcards.html template**

Container for the flashcard app:
- Deck selector sidebar/dropdown
- Card display area with `{{FLASHCARD_DATA_PATH}}` placeholder
- Navigation controls (prev, next, shuffle)
- Progress bar and card counter
- Links flashcards.js

- [ ] **Step 4: Write last-minute-review.html template**

Condensed review layout:
- Single-scroll page, no collapsible sections (everything visible)
- Key concepts in brief bullet form
- Formula reference cards
- Critical terms highlighted
- `{{REVIEW_CONTENT}}` placeholder

- [ ] **Step 5: Write sample-questions.html template**

Quick self-test page:
- Curated questions displayed inline (not paginated like exams)
- Spoiler-style answer reveals (click to show)
- `{{SAMPLE_QUESTIONS_CONTENT}}` placeholder
- Lighter weight than full exam — no scoring, no "check all" button

- [ ] **Step 6: Write practice-exam.html template**

Wrapper that loads the selected exam format template:
- `{{EXAM_FORMAT_CSS}}` for card-style or classic-style CSS
- `{{EXAM_FORMAT_JS}}` for the corresponding exam-checker.js
- `{{EXAM_DATA_PATH}}` pointing to the specific exam JSON
- "Show Correct Answers" button at the bottom

- [ ] **Step 7: Commit**

```bash
git add templates/page-templates/
git commit -m "feat: add all 6 page templates"
```

---

## Chunk 3: Skill Prompts

The 9 SKILL.md files that define what each agent does. These are the core intelligence of the plugin.

### Task 12: Write the orchestrator skill (start)

**Files:**
- Create: `study-site-builder/skills/start/SKILL.md`

This is the most important skill — it manages the entire pipeline.

- [ ] **Step 1: Write start/SKILL.md**

Frontmatter:
```yaml
---
name: start
description: "Orchestrates the full study site pipeline — from course materials folder to deployed website. Manages phases, checkpoints, context compaction, and user input pauses."
---
```

The skill body must include:
1. **Pipeline overview** — list all 7 phases with their inputs/outputs
2. **Startup logic** — check for `pipeline-status.json`, offer to resume if exists
3. **Phase dispatch instructions** — for each phase, specify:
   - Which skill to invoke
   - What files to verify before moving on
   - When to compact context
   - When to pause for user input
4. **Parallel dispatch pattern** — instructions for how to determine subagent count based on file sizes, how to assign work, and how to verify all subagents completed
5. **Checkpoint protocol** — exact steps: verify files exist, update pipeline-status.json, compact context, read next phase inputs
6. **Error recovery** — what to do if a phase fails partway through
7. **Completion** — final message with deployment instructions (GitHub Pages)

- [ ] **Step 2: Commit**

```bash
git add skills/start/
git commit -m "feat: add orchestrator skill (start)"
```

---

### Task 13: Write the content-ingest skill

**Files:**
- Create: `study-site-builder/skills/content-ingest/SKILL.md`

- [ ] **Step 1: Write content-ingest/SKILL.md**

Frontmatter:
```yaml
---
name: content-ingest
description: "Phase 1: Parallel ingestion of course materials (PDFs, PPTXs, DOCXs, XLSX) into structured markdown study notes."
---
```

Body must include:
1. **File scanning instructions** — how to scan `source-materials/`, classify files by content (not naming), and group by lecture/topic
2. **Agent sizing logic** — how to determine how many subagents to dispatch based on file sizes (two small lectures per agent if each is under ~20 slides, one per agent for dense lectures)
3. **Subagent prompt template** — the exact prompt each subagent receives, referencing `references/study-notes-format.md`
4. **File format handling** — specific instructions for PDFs (use Read tool), PPTXs (use pptx skill if available, otherwise Read), DOCXs (use docx skill if available, otherwise Read), XLSX (extract relevant data tables)
5. **Output verification** — how to check that each study note file was written correctly
6. **Incremental write requirement** — each agent writes its file immediately upon completion

- [ ] **Step 2: Commit**

```bash
git add skills/content-ingest/
git commit -m "feat: add content-ingest skill"
```

---

### Task 14: Write the concept-mapper skill

**Files:**
- Create: `study-site-builder/skills/concept-mapper/SKILL.md`

- [ ] **Step 1: Write concept-mapper/SKILL.md**

Frontmatter:
```yaml
---
name: concept-mapper
description: "Phase 2: Synthesizes all study notes into a conceptual map, last-minute review, and flashcard data."
---
```

Body must include:
1. **Input reading** — read all files in `study-notes/`
2. **Conceptual map generation** — instructions for creating `synthesis/conceptual-map.md`: identify driving questions, map topic relationships, show how lectures build on each other, create a narrative overview
3. **Last-minute review generation** — instructions for `synthesis/last-minute-review.md`: condense the conceptual map into a refresher format, assume the student already knows the material, focus on key formulas, critical distinctions, and common exam topics
4. **Flashcard extraction** — instructions for `synthesis/flashcards.json`: extract all terms from Key Terms and Definitions Glossary sections, follow the schema in `references/flashcard-format.md`, condense definitions to 300 chars max
5. **Cross-referencing** — how to identify connections between lectures and tag related terms

- [ ] **Step 2: Commit**

```bash
git add skills/concept-mapper/
git commit -m "feat: add concept-mapper skill"
```

---

### Task 15: Write the content-auditor skill

**Files:**
- Create: `study-site-builder/skills/content-auditor/SKILL.md`

- [ ] **Step 1: Write content-auditor/SKILL.md**

Frontmatter:
```yaml
---
name: content-auditor
description: "Phase 3: Cross-checks study notes and synthesis against original source materials. Flags uncertain content for user review."
---
```

Body must include:
1. **Audit scope** — what to check: factual accuracy of study notes, completeness of glossaries, correctness of flashcard definitions, accuracy of conceptual map relationships
2. **Comparison method** — read original source files and compare key claims, definitions, and formulas against the study notes
3. **Report format** — `audit/audit-report.md` with two sections: Verified items (with brief confirmation) and Flagged items (with specific concern and source reference)
4. **User interaction** — how to present flagged items to the user, format for easy review, how to collect user decisions (confirm, correct, or remove)
5. **Correction application** — apply corrections in-place to `study-notes/` and `synthesis/` files
6. **Source of truth declaration** — after corrections, explicitly state that markdown files are now the verified source of truth

- [ ] **Step 2: Commit**

```bash
git add skills/content-auditor/
git commit -m "feat: add content-auditor skill"
```

---

### Task 16: Write the site-designer skill

**Files:**
- Create: `study-site-builder/skills/site-designer/SKILL.md`

- [ ] **Step 1: Write site-designer/SKILL.md**

Frontmatter:
```yaml
---
name: site-designer
description: "Phase 4: Gathers user preferences for theme, exam format, page selection, and practice exam scope. Produces a design spec."
---
```

Body must include:
1. **Theme presentation** — read `preview.md` from each theme folder, present all 5 options to the user with descriptions
2. **Exam format presentation** — describe card-style vs classic-style, let user choose
3. **Page selection** — list available page types (study-map, flashcards, last-minute-review, sample-questions, practice-exams), let user select which ones to include
4. **Exam configuration** — how many practice exams, what question types (multiple-choice, multiple-multiple-choice, short-answer, long-answer), approximate question count per exam
5. **Learning style / preferences** — ask about any learning style or organizational preferences that should influence content presentation
6. **Design spec output** — write all choices to `design/design-spec.md` in a structured format that downstream skills can parse
7. **Question format** — use AskUserQuestion tool with multiple-choice options where possible for quick user input

- [ ] **Step 2: Commit**

```bash
git add skills/site-designer/
git commit -m "feat: add site-designer skill"
```

---

### Task 17: Write the site-builder skill

**Files:**
- Create: `study-site-builder/skills/site-builder/SKILL.md`

- [ ] **Step 1: Write site-builder/SKILL.md**

Frontmatter:
```yaml
---
name: site-builder
description: "Phase 5: Assembles the multi-page static website from templates and verified content. Dispatches parallel subagents per page."
---
```

Body must include:
1. **Design spec parsing** — read `design/design-spec.md` to determine theme, pages, and exam format
2. **Sub-PRD generation** — for each page in `designChoices.pages`, write a sub-PRD to `build/` containing: which template to use, what content to fill in, which theme CSS to copy, what data files to reference
3. **Parallel dispatch** — dispatch one subagent per page, each receiving its sub-PRD
4. **Theme copying** — copy the selected theme's `theme.css` to `site/css/theme.css`
5. **Shared JS copying** — copy `nav.js` and `flashcards.js` to `site/js/`
6. **Data file copying** — copy `flashcards.json` from `synthesis/` to `site/data/`
7. **Nav config generation** — create `site/data/nav-config.json` based on selected pages
8. **Template filling** — instructions for how subagents replace placeholder markers with actual content
9. **Sample questions generation** — how to create curated questions for `sample-questions.html` from the study notes
10. **Verification** — check all pages exist and are well-formed HTML

- [ ] **Step 2: Commit**

```bash
git add skills/site-builder/
git commit -m "feat: add site-builder skill"
```

---

### Task 18: Write the exam-generator skill

**Files:**
- Create: `study-site-builder/skills/exam-generator/SKILL.md`

- [ ] **Step 1: Write exam-generator/SKILL.md**

Frontmatter:
```yaml
---
name: exam-generator
description: "Phase 6 and standalone via /study-site add-exam: Generates practice exams with verified answers. Each exam is its own HTML page."
---
```

Body must include:
1. **Dual mode** — this skill runs both as Phase 6 (called by orchestrator) and standalone (via `/study-site add-exam`)
2. **Standalone entry** — when called standalone, read `pipeline-status.json` for theme/format, ask user for focus areas
3. **Question generation** — how to generate questions from study notes: read each lecture's content, create questions at varying difficulty, ensure balanced topic coverage (unless focus areas specified)
4. **Answer verification** — for each question, verify the correct answer against the study notes before including it. If uncertain, flag it.
5. **Self-audit pass** — after generating all questions, do a second pass reviewing answers. Present any flagged items to the user.
6. **Output** — write `site/data/exam-N.json` following `references/exam-format.md`, write `site/exams/practice-exam-N.html` using the selected exam format template
7. **Nav update** — update `site/data/nav-config.json` to include the new exam page
8. **Pipeline status update** — increment exam count in `pipeline-status.json`

- [ ] **Step 2: Commit**

```bash
git add skills/exam-generator/
git commit -m "feat: add exam-generator skill"
```

---

### Task 19: Write the mobile-checker skill

**Files:**
- Create: `study-site-builder/skills/mobile-checker/SKILL.md`

- [ ] **Step 1: Write mobile-checker/SKILL.md**

Frontmatter:
```yaml
---
name: mobile-checker
description: "Phase 7: Verifies responsive behavior across all pages and fixes any issues found."
---
```

Body must include:
1. **Check scope** — list all HTML files in `site/` and `site/exams/`
2. **Verification checklist** — for each page, check:
   - Content doesn't overflow horizontally at 768px and 480px
   - Touch targets are at least 44px
   - Text is readable without zooming
   - Navigation is usable on mobile (hamburger menu works)
   - Flashcard interactions work on touch devices
   - Exam answer selection works on touch devices
3. **Fix methodology** — modify CSS in `site/css/theme.css` or page-specific styles to fix issues. Prefer CSS-only fixes.
4. **Verification approach** — use preview tools if available, otherwise inspect CSS rules

- [ ] **Step 2: Commit**

```bash
git add skills/mobile-checker/
git commit -m "feat: add mobile-checker skill"
```

---

### Task 20: Write the tutor skill

**Files:**
- Create: `study-site-builder/skills/tutor/SKILL.md`

- [ ] **Step 1: Write tutor/SKILL.md**

Frontmatter:
```yaml
---
name: tutor
description: "Standalone conversational study aid. References study notes and conceptual map to help students understand course material."
---
```

Body must include:
1. **Initialization** — read `study-notes/` and `synthesis/conceptual-map.md` to build context
2. **Conversation mode** — enter an interactive loop where the student asks questions
3. **Capabilities** — explain any topic, go deeper on request, work through practice problems step-by-step, explain connections between topics using the conceptual map
4. **Citation** — always reference which lecture/study note the information comes from
5. **Adaptive depth** — start with concise answers, go deeper if the student asks follow-ups
6. **Boundaries** — read-only, never modify website files. Acknowledge when a question goes beyond the course materials.

- [ ] **Step 2: Commit**

```bash
git add skills/tutor/
git commit -m "feat: add tutor skill"
```

---

## Chunk 4: Documentation & Distribution

### Task 21: Write the README

**Files:**
- Create: `study-site-builder/README.md`

- [ ] **Step 1: Write README.md**

The README must be a zero-to-website guide for users with no prior knowledge of GitHub or Claude Code. Structure:

1. **What This Does** — 2-3 sentence description with a screenshot or example link
2. **Prerequisites** — what you need before starting (a computer, internet access)
3. **Step 1: Install Claude Code** — link to Claude Code installation, brief walkthrough
4. **Step 2: Install This Plugin** — exact commands to install the study-site-builder plugin
5. **Step 3: Organize Your Course Materials** — put all files in a folder (any structure is fine — the plugin auto-classifies)
6. **Step 4: Run the Pipeline** — `cd` into your project folder, run `/study-site start`, description of what to expect at each phase
7. **Step 5: Deploy to GitHub Pages** — create a GitHub repo, push the `site/` folder, enable GitHub Pages in repo settings
8. **Adding More Practice Exams** — how to use `/study-site add-exam`
9. **Using the Tutor** — how to use `/study-site tutor`
10. **Customization** — how to add new themes or modify templates
11. **Troubleshooting** — common issues and solutions

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "feat: add comprehensive README"
```

---

### Task 22: Create hooks for skill registration

**Files:**
- Create: `study-site-builder/hooks/hooks.json`

- [ ] **Step 1: Write hooks.json**

Create `study-site-builder/hooks/hooks.json` that registers the user-facing skills on session start. Follow the superpowers pattern:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup|resume|clear|compact",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'study-site-builder plugin loaded'",
            "async": false
          }
        ]
      }
    ]
  }
}
```

Note: The exact hook format may need adjustment based on Claude Code plugin conventions at time of implementation. The key requirement is that `/study-site start`, `/study-site add-exam`, and `/study-site tutor` become available as slash commands.

- [ ] **Step 2: Commit**

```bash
git add hooks/
git commit -m "feat: add session hooks for skill registration"
```

---

### Task 23: Final integration check and initial release commit

- [ ] **Step 1: Verify directory structure matches spec**

Run `find study-site-builder -type f | sort` and compare against the directory structure in the design spec. Verify all files exist:
- `.claude-plugin/plugin.json`
- `LICENSE`
- `README.md`
- 9 `skills/*/SKILL.md` files
- 5 theme folders with `theme.css` + `preview.md`
- 2 exam format folders with template + CSS + JS
- 6 page templates
- 2 shared JS files
- 5 reference schema docs
- `hooks/hooks.json`

- [ ] **Step 2: Verify all references are consistent**

Check that:
- Every file path mentioned in SKILL.md files exists
- Every CSS variable referenced in templates is defined in the contract
- Every JSON field referenced in skills matches the schema docs
- `pipeline-status.json` phase names match skill folder names

- [ ] **Step 3: Tag initial release**

```bash
git tag -a v0.1.0 -m "Initial release: study-site-builder plugin"
```

- [ ] **Step 4: Push to GitHub**

```bash
git remote add origin https://github.com/connorpclark9/study-site-builder.git
git push -u origin main --tags
```

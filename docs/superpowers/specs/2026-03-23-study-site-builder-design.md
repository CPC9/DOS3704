# Study Site Builder — Plugin Design Spec

**Date:** 2026-03-23
**Status:** Draft
**Author:** Connor Clark + Claude

## Overview

A Claude Code plugin that bundles multiple specialized skills into an orchestrated pipeline for turning a folder of course materials into a polished, multi-page static study website. Designed to codify the workflow and lessons learned from building the DOS3704 Operations Strategy study site.

**Target users:** Students who already have Claude Code installed and want to quickly generate a high-quality study website from their course materials.

## Goals

1. Make building a study website a smooth, repeatable process — not a one-off engineering project
2. Eliminate the pain points from the DOS3704 build: agents dying mid-work with no progress saved, token waste from redoing steps, context window overflow
3. Produce consistently high-quality output through pre-built templates, structured pipelines, and content auditing
4. Allow easy expansion (add more practice exams, themes, etc.) after the initial build

## Non-Goals

- Building a SaaS product or hosted service
- Supporting non-Claude-Code environments (e.g., Claude Desktop, web UI)
- Real-time collaboration or multi-user editing
- Dynamic server-side features (everything is static HTML)

## Dependencies

**None.** The plugin is fully self-contained — it requires only Claude Code itself.

- **No runtime dependency on superpowers or ui-ux-pro-max.** The orchestration patterns needed for parallel agent dispatch, checkpoint management, and sub-PRD generation are adapted directly into the plugin's own skill prompts (both are MIT licensed, so incorporating their patterns is permitted with attribution).
- **Pre-built themes eliminate the need for runtime design intelligence.** The 5 themes ship as polished, ready-to-copy CSS — the site-builder agent assembles, it doesn't design. (ui-ux-pro-max is useful as a dev-time tool when creating/refining themes, but is not needed by end users.)
- **Attribution:** The plugin's LICENSE file should acknowledge that orchestration patterns were adapted from superpowers (MIT, Jesse Vincent) and that theme development was informed by ui-ux-pro-max (MIT, Next Level Builder).

---

## Plugin Architecture

### Structure

The plugin follows the same pattern as the superpowers plugin: a single installable plugin containing multiple specialized skills that work together.

```
study-site-builder/
├── .claude-plugin/
│   └── plugin.json
├── LICENSE
├── README.md
├── hooks/
│   └── hooks.json
├── skills/
│   ├── start/                   # Orchestrator
│   │   └── SKILL.md
│   ├── content-ingest/          # Phase 1
│   │   └── SKILL.md
│   ├── concept-mapper/          # Phase 2
│   │   └── SKILL.md
│   ├── content-auditor/         # Phase 3
│   │   └── SKILL.md
│   ├── site-designer/           # Phase 4
│   │   └── SKILL.md
│   ├── site-builder/            # Phase 5
│   │   └── SKILL.md
│   ├── exam-generator/          # Phase 6 (also standalone)
│   │   └── SKILL.md
│   ├── mobile-checker/          # Phase 7
│   │   └── SKILL.md
│   └── tutor/                   # Standalone
│       └── SKILL.md
├── templates/
│   ├── themes/
│   │   ├── midnight-blue/
│   │   ├── warm-ivory/
│   │   ├── forest-green/
│   │   ├── slate-minimal/
│   │   └── sunset-coral/
│   ├── exam-formats/
│   │   ├── card-style/
│   │   └── classic-style/
│   ├── page-templates/
│   │   ├── index.html
│   │   ├── study-map.html
│   │   ├── flashcards.html
│   │   ├── last-minute-review.html
│   │   ├── sample-questions.html
│   │   └── practice-exam.html
│   └── shared-js/
│       ├── nav.js
│       └── flashcards.js
└── references/
    ├── study-notes-format.md
    ├── flashcard-format.md
    ├── exam-format.md
    ├── theme-css-contract.md
    └── nav-config-format.md
```

### User-Facing Commands

| Command | Description |
|---------|-------------|
| `/study-site start` | Kicks off the full pipeline from course folder to finished website |
| `/study-site add-exam` | Generates and adds a new practice exam to an existing site |
| `/study-site tutor` | Starts a conversational tutor that references the study materials |

All other skills (content-ingest, concept-mapper, etc.) are internal — called by the orchestrator, not directly by the user.

---

## Pipeline Flow

### Phase 1: Content Ingest

**Skill:** `content-ingest`
**Input:** User's `source-materials/` folder containing PDFs, PowerPoints, Word docs, and occasionally Excel files
**Output:** `study-notes/` folder with structured markdown files

Process:
- The orchestrator scans the source folder and auto-classifies files by analyzing their content (no required folder naming conventions)
- Dispatches parallel subagents, each covering 1-2 lectures worth of content depending on file size (e.g., two small 15-slide lectures can be handled by one agent, while a dense 60-slide lecture warrants its own agent)
- Each subagent produces a structured markdown study note file immediately upon completion (incremental writes, not batch)
- Study notes follow a consistent structure defined in `references/study-notes-format.md`, tailored to the course topic, including:
  - Logical section breakdown
  - All relevant terms, definitions, key insights
  - Driving questions and frameworks/mental models
  - Formulas with interpretations and applications
  - Case studies if relevant
  - Key takeaways
  - Key Terms and Definitions Glossary (used later for flashcards)

**Checkpoint:** All study note files written to disk. Context compaction.

### Phase 2: Concept Mapping

**Skill:** `concept-mapper`
**Input:** All files in `study-notes/`
**Output:** `synthesis/` folder containing:
- `conceptual-map.md` — high-level course overview showing how topics connect, driving questions, and topic relationships. Designed to prime the student with structure before learning details.
- `last-minute-review.md` — condensed refresher version of the conceptual map. Assumes the student has already learned the material and needs a quick jog before an exam.
- `flashcards.json` — extracted from the Key Terms and Definitions Glossary sections of all study note files.

**Checkpoint:** All synthesis artifacts written to disk. Context compaction.

### Phase 3: Content Audit

**Skill:** `content-auditor`
**Input:** `study-notes/`, `synthesis/`, and `source-materials/` (original files for cross-reference)
**Output:** `audit/audit-report.md`

Process:
- Audit agent compares the study notes and synthesis files against the original source materials
- Produces an audit report categorizing each piece of content as:
  - Verified — confident the content is accurate
  - Flagged — uncertain, needs human review
- **User pause:** Presents flagged items to the user for verification
- User confirms or corrects flagged items
- Agent applies corrections in-place to files in `study-notes/` and `synthesis/`
- After this phase, the verified markdown files become the **source of truth**. Original source materials are never read again by any subsequent phase.

**Checkpoint:** Audit complete, corrections applied. Context compaction.

### Phase 4: Site Design

**Skill:** `site-designer`
**Input:** `synthesis/` (to understand what content exists)
**Output:** `design/design-spec.md`

**User input pause.** The agent asks the user about:
- Theme selection (5 options: midnight-blue, warm-ivory, forest-green, slate-minimal, sunset-coral)
- Exam format preference (card-style or classic-style)
- Page selection (which pages to include in the site)
- Practice exam scope (how many exams, what question types)
- Learning style or organizational preferences

All choices are consolidated into `design-spec.md`.

**Checkpoint:** Design spec written to disk. Context compaction.

### Phase 5: Site Build

**Skill:** `site-builder`
**Input:** `design/design-spec.md`, `synthesis/`, `templates/`
**Output:** `build/` folder (sub-PRDs) and `site/` folder (the complete multi-page static website)

Process:
- Agent generates modular sub-PRDs from the design spec — one per page listed in `designChoices.pages` — and writes them to `build/`. Only pages selected by the user are generated.
- Dispatches parallel subagents — one per page
- Each subagent copies the selected theme CSS and page template, fills in content from the verified synthesis files using placeholder markers
- Shared assets (CSS, JS) are written to `site/css/` and `site/js/`
- Content data files (e.g., `flashcards.json`) are copied from `synthesis/` to `site/data/`
- The `sample-questions.html` page contains a curated selection of representative questions across all topics — a lighter alternative to full practice exams, useful for quick self-testing. Its content is generated from the study notes during this phase.

**Checkpoint:** All HTML/CSS/JS files written to disk. Context compaction.

### Phase 6: Exam Generation

**Skill:** `exam-generator`
**Input:** `study-notes/`, `design/design-spec.md`, `templates/exam-formats/`
**Output:** `site/exams/` and `site/data/` (exam pages and data files)

Process:
- Reads study notes for source content and design spec for question types/count
- Generates practice exams with pre-verified answers
- Self-verifies answers against the verified study notes
- Each exam produces two files: `data/exam-N.json` and `exams/practice-exam-N.html`
- Updates the site navigation to include links to new exam pages. Navigation is managed through `nav.js`, which reads a `site/data/nav-config.json` manifest file listing all pages — both the site-builder and `add-exam` skill update this manifest rather than editing HTML across multiple files.

**Checkpoint:** Exam pages written to disk. Context compaction.

### Phase 7: Mobile Check

**Skill:** `mobile-checker`
**Input:** All files in `site/`
**Output:** Fixes applied directly to site files

Process:
- Verifies responsive behavior across all pages
- Checks touch targets, overflow handling, readability at mobile breakpoints
- Fixes any issues found
- Site is finalized and ready for deployment

**Checkpoint:** Site finalized. Pipeline complete.

---

## File-Based Interfaces

Every phase reads input files and writes output files. This is the contract between skills.

### Working Directory Structure

```
my-course-project/
├── source-materials/              # User's original course files (input)
│   ├── Lecture1-Intro.pdf
│   ├── Lecture2-Slides.pptx
│   ├── Case-Study-Toyota.docx
│   └── ...
├── study-notes/                   # Phase 1 output
│   ├── lecture-01-foundations.md
│   ├── lecture-02-trade-offs.md
│   ├── case-toyota.md
│   └── ...
├── synthesis/                     # Phase 2 output
│   ├── conceptual-map.md
│   ├── last-minute-review.md
│   └── flashcards.json
├── audit/                         # Phase 3 output
│   └── audit-report.md
├── design/                        # Phase 4 output
│   └── design-spec.md
├── build/                         # Phase 5 intermediate (sub-PRDs)
│   ├── prd-index.md
│   ├── prd-study-map.md
│   ├── prd-flashcards.md
│   └── ...
├── site/                          # Phase 5-6 output (the website)
│   ├── index.html
│   ├── study-map.html
│   ├── flashcards.html
│   ├── last-minute-review.html
│   ├── sample-questions.html
│   ├── exams/
│   │   ├── practice-exam-1.html
│   │   └── practice-exam-2.html
│   ├── css/
│   │   └── theme.css
│   ├── js/
│   │   ├── flashcards.js
│   │   ├── exam-checker.js
│   │   └── nav.js
│   └── data/
│       ├── nav-config.json
│       ├── flashcards.json
│       ├── exam-1.json
│       └── exam-2.json
└── pipeline-status.json           # Orchestrator state
```

### Pipeline Status Tracking

```json
{
  "currentPhase": "site-builder",
  "completedPhases": ["content-ingest", "concept-mapper", "content-auditor", "site-designer"],
  "startedAt": "2026-03-23T02:00:00Z",
  "designChoices": {
    "theme": "midnight-blue",
    "examFormat": "card-style",
    "pages": ["study-map", "flashcards", "last-minute-review", "sample-questions", "practice-exams"],
    "examCount": 2,
    "examTypes": ["multiple-choice", "short-answer"]
  }
}
```

---

## Template System

### Themes

5 pre-built themes, each a self-contained folder:

```
templates/themes/<theme-name>/
├── theme.css          # CSS variables, colors, typography, spacing
├── preview.md         # Text description for the design phase
└── assets/            # Theme-specific assets
```

| Theme | Description |
|-------|-------------|
| Midnight Blue | Dark blue background, light text, blue accents (DOS3704 style) |
| Warm Ivory | Light cream background, dark text, warm gold accents (textbook feel) |
| Forest Green | Dark green tones, earthy palette (calm, focused) |
| Slate Minimal | Near-white background, gray/black text, minimal color (clean) |
| Sunset Coral | Dark background, warm coral/orange accents (modern, energetic) |

All themes share the same CSS variable names so HTML templates work identically regardless of theme. The site-builder copies the selected `theme.css` into `site/css/` — no CSS generation needed.

### Exam Format Templates

2 pre-built exam formats:

```
templates/exam-formats/<format-name>/
├── exam-template.html    # Full page template
├── exam-styles.css       # Format-specific CSS
└── exam-checker.js       # Show/check answer logic
```

| Format | Description |
|--------|-------------|
| Card Style | Rounded box cards for questions + rounded multiple-choice box cards for answers |
| Classic Style | Plain text for questions with multiple-choice circles (radio buttons) |

Both formats support: multiple choice, multiple-multiple choice, short answer, and long answer. Both include a "Show Correct Answers" button that reveals green checkmarks on correct answers and red highlights on incorrect user selections.

### Page Templates

Structural skeletons with placeholder markers:

```html
<!-- {{THEME_CSS}} -->
<!-- {{NAV_LINKS}} -->
<!-- {{PAGE_CONTENT}} -->
<!-- {{SHARED_JS}} -->
```

The site-builder reads templates, replaces markers with content from processed data files, and writes final HTML. Agents assemble pages, they don't design them.

---

## Standalone Skills

### `/study-site add-exam`

Generates and adds a new practice exam to an existing site. Completable in a single context window.

Flow:
1. Reads `pipeline-status.json` to confirm site exists and find theme/exam format
2. Asks user for focus areas (optional — defaults to balanced coverage)
3. Reads `study-notes/` for source content
4. Generates questions + pre-verified answers
5. Runs self-audit pass — flags uncertain answers to user
6. Writes `data/exam-N.json` + `exams/practice-exam-N.html`
7. Updates `site/data/nav-config.json` to include new exam link
8. Updates `pipeline-status.json` with new exam count

### `/study-site tutor`

Conversational study aid that references the course materials. Read-only — does not modify any website files.

Flow:
1. Reads `study-notes/` and `synthesis/conceptual-map.md` for course context
2. Enters conversational mode where the student can:
   - Ask questions about any topic
   - Request deeper explanations beyond what's on the website
   - Work through practice problems step-by-step
   - Ask how topics relate to each other (using the conceptual map)
3. References specific study notes and cites source lectures
4. Adapts explanation depth to the student's level

---

## Error Handling & Resilience

### Agent Failure Recovery

Every subagent writes output incrementally (file by file), not in batch at the end. If a subagent dies after processing 1 of 2 assigned lectures, only the missing lecture needs to be re-dispatched. The orchestrator checks which output files exist to determine what's been completed.

### Pipeline Resumption

`pipeline-status.json` tracks completed phases. When `/study-site start` is run on a project with existing progress:
1. Orchestrator reads `pipeline-status.json`
2. Identifies which phases are complete and verifies their output files exist
3. Asks the user: "Phases 1-3 are complete. Resume from Phase 4?"
4. Picks up exactly where it left off

### Content Integrity

Multi-pass verification:
1. Content ingest agents summarize from source — they don't invent
2. Content auditor (Phase 3) cross-checks markdown against originals, flags uncertainty to user
3. After audit, verified markdown is the source of truth
4. Exam generator self-verifies answers against verified study notes

### Token Efficiency

- Each skill only reads the files it needs (site-builder never reads original PDFs)
- Context compaction between every phase
- Pre-built templates eliminate CSS/JS generation
- Sub-PRD architecture keeps each subagent's scope small (one page per agent)
- Parallel subagent dispatch reduces wall-clock time

---

## Built-In Orchestration Patterns

The orchestrator skill (`start/SKILL.md`) encodes the following patterns directly, adapted from superpowers (MIT). This eliminates any external plugin dependency.

### Parallel Agent Dispatch

The orchestrator instructs Claude to dispatch independent subagents for parallelizable work (content ingestion across lectures, site build across pages). Each skill that uses parallel dispatch specifies:
- How to determine the number of agents (based on content volume and file sizes, not a fixed count)
- What each agent's scope is (e.g., one study note file, one HTML page)
- That each agent writes its output to disk immediately upon completion (not batched)

### Checkpoint & Context Compaction

At each phase boundary, the orchestrator:
1. Verifies all expected output files exist on disk
2. Updates `pipeline-status.json` with the completed phase
3. Triggers context compaction (`/compact`) to free up the context window
4. Reads only the artifacts needed for the next phase from disk

The skill prompts explicitly instruct this behavior — the orchestrator knows the checkpoint contract for each phase transition.

### Pipeline Resumption

When `/study-site start` is invoked on a project with existing `pipeline-status.json`:
1. The orchestrator reads the status file and checks which phases are complete
2. For each completed phase, it verifies the expected output files still exist on disk
3. It presents the user with the current state and asks whether to resume from the next incomplete phase
4. If a phase partially completed (e.g., 5 of 8 study notes exist), it identifies the missing outputs and only re-dispatches work for those

### Sub-PRD Generation

The site-builder skill instructs the agent to decompose the website build into one sub-PRD per page. Each sub-PRD is written to `build/` as a standalone markdown file that contains everything a subagent needs to build that page — which template to use, what content to fill in, which theme CSS to copy. This keeps each subagent's context small and focused.

---

## Distribution

The plugin will be hosted in a public GitHub repository with a comprehensive README covering:
- What the plugin does
- Installation instructions (from zero — no assumed knowledge of GitHub or Claude Code)
- Step-by-step usage guide
- Example output (screenshots or link to the DOS3704 site)
- How to customize themes or add new templates

Licensed under MIT.

---

## Open Questions

1. **Study notes format schema** — the exact markdown structure for study notes needs to be defined in `references/study-notes-format.md`. Should be based on what worked for DOS3704 but generalized.
2. **Flashcard JSON schema** — exact format for `flashcards.json` needs definition.
3. **Exam question JSON schema** — exact format for exam data files needs definition.
4. **Theme CSS variable contract** — the shared set of CSS variable names that all themes must define.
5. **How should the orchestrator handle partial phase completion?** — e.g., Phase 1 completed 5 of 8 study notes before failure. Current design: check which files exist and only re-dispatch missing ones. Needs validation.
6. **`plugin.json` schema** — the plugin manifest format needs to be defined (name, version, skill references, etc.). Should follow Claude Code plugin conventions.

---
name: start
description: "Orchestrates the full study site pipeline — from course materials folder to deployed website. Manages phases, checkpoints, context compaction, and user input pauses."
---

# Study Site Builder — Orchestrator

You are the orchestrator for the study-site-builder pipeline. Your job is to guide the entire process from raw course materials to a fully built study website. You manage phase sequencing, checkpoint verification, context compaction, error recovery, and user interaction pauses.

## Pipeline Overview

The pipeline has 7 phases, executed in order:

| # | Phase | Skill | Input | Output |
|---|-------|-------|-------|--------|
| 1 | content-ingest | `content-ingest` | `source-materials/` | `study-notes/` |
| 2 | concept-mapper | `concept-mapper` | `study-notes/` | `synthesis/` |
| 3 | content-auditor | `content-auditor` | `source-materials/` + `study-notes/` + `synthesis/` | `audit/` + corrected files |
| 4 | site-designer | `site-designer` | User preferences | `design/design-spec.md` |
| 5 | site-builder | `site-builder` | `study-notes/` + `synthesis/` + `design/` + `templates/` | `site/` |
| 6 | exam-generator | `exam-generator` | `study-notes/` + `design/design-spec.md` | practice exam HTML files in `site/` |
| 7 | mobile-checker | `mobile-checker` | `site/` | verification report |

## Startup Logic

When invoked, perform these steps in order:

### Step 1: Check for Existing Pipeline State

1. Look for `pipeline-status.json` in the plugin root directory (`study-site-builder/`).
2. If it exists, read it and determine the current state.
3. If phases have been completed, present the status to the user:
   - List completed phases with their completion timestamps.
   - Show the current/next phase.
   - Ask the user: "A previous pipeline run was found. Would you like to resume from phase {next_phase}, or start fresh?"
4. If the user chooses to resume, skip completed phases and continue from the next pending phase.
5. If the user chooses to start fresh, delete the existing `pipeline-status.json` and any output directories (`study-notes/`, `synthesis/`, `audit/`, `design/`, `site/`).

### Step 2: Fresh Start Initialization

1. Ask the user for the course name.
2. Verify that `source-materials/` exists and contains files. If not, instruct the user to create `study-site-builder/source-materials/` and place their course files (PDFs, PPTXs, DOCXs, XLSX) inside it.
3. List the files found in `source-materials/` and confirm with the user that these are the correct materials.
4. Create `pipeline-status.json` with initial state:

```json
{
  "courseName": "User-provided course name",
  "startedAt": "ISO 8601 timestamp",
  "currentPhase": "content-ingest",
  "phases": [
    {"name": "content-ingest", "status": "pending"},
    {"name": "concept-mapper", "status": "pending"},
    {"name": "content-auditor", "status": "pending"},
    {"name": "site-designer", "status": "pending"},
    {"name": "site-builder", "status": "pending"},
    {"name": "exam-generator", "status": "pending"},
    {"name": "mobile-checker", "status": "pending"}
  ],
  "designChoices": {},
  "examCount": 0
}
```

## Phase Dispatch Instructions

For each phase, follow this exact sequence:

### Phase 1: content-ingest

1. Update `pipeline-status.json`: set `currentPhase` to `"content-ingest"`, set phase status to `"in-progress"`.
2. Invoke the `content-ingest` skill using the Skill tool.
3. **Verification before moving on:**
   - Confirm that `study-notes/` directory exists and contains `.md` files.
   - Verify each study note file has valid YAML frontmatter with `title`, `source_files`, `topics`, and `lecture_number`.
   - Verify each file contains all 7 required sections (Overview, Key Concepts, Frameworks & Mental Models, Formulas & Quantitative Tools, Case Studies, Key Takeaways, Key Terms and Definitions Glossary).
   - Verify each glossary has at least 10 terms.
4. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp.
5. **Compact context:** Summarize what was produced (file count, total terms extracted), then release detailed file contents from working memory.

### Phase 2: concept-mapper

1. Update `pipeline-status.json`: set `currentPhase` to `"concept-mapper"`, set phase status to `"in-progress"`.
2. Invoke the `concept-mapper` skill using the Skill tool.
3. **Verification before moving on:**
   - Confirm `synthesis/conceptual-map.md` exists and has headers matching lecture names.
   - Confirm `synthesis/last-minute-review.md` exists with condensed review content.
   - Confirm `synthesis/flashcards.json` exists, is valid JSON, and follows the schema in `references/flashcard-format.md`.
   - Validate that every glossary term from every study note has a corresponding flashcard.
4. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp.
5. **Compact context.**

### Phase 3: content-auditor

1. Update `pipeline-status.json`: set `currentPhase` to `"content-auditor"`, set phase status to `"in-progress"`.
2. Invoke the `content-auditor` skill using the Skill tool.
3. **User interaction pause:** This phase will pause to present flagged items to the user for review. Wait for the skill to complete, which includes user decisions on all flagged items.
4. **Verification before moving on:**
   - Confirm `audit/audit-report.md` exists.
   - Confirm that all user-approved corrections have been applied to `study-notes/` and `synthesis/` files.
5. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp.
6. **Compact context.**

### Phase 4: site-designer

1. Update `pipeline-status.json`: set `currentPhase` to `"site-designer"`, set phase status to `"in-progress"`.
2. Invoke the `site-designer` skill using the Skill tool.
3. **User interaction pause:** This phase involves multiple user preference questions. Wait for the skill to complete with all user choices gathered.
4. **Verification before moving on:**
   - Confirm `design/design-spec.md` exists with all required sections (Theme, Exam Format, Pages, Exam Configuration, Learning Preferences).
5. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp. Store design choices in `designChoices` field. Store exam count in `examCount` field.
6. **Compact context.**

### Phase 5: site-builder

1. Update `pipeline-status.json`: set `currentPhase` to `"site-builder"`, set phase status to `"in-progress"`.
2. Invoke the `site-builder` skill using the Skill tool.
3. **Verification before moving on:**
   - Confirm `site/` directory exists.
   - Confirm `site/index.html` exists.
   - Confirm all pages specified in `design/design-spec.md` have corresponding HTML files in `site/`.
   - Confirm theme CSS is present in `site/`.
   - Confirm `site/flashcards.json` exists (copied or generated from synthesis).
4. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp.
5. **Compact context.**

### Phase 6: exam-generator

1. Update `pipeline-status.json`: set `currentPhase` to `"exam-generator"`, set phase status to `"in-progress"`.
2. Invoke the `exam-generator` skill using the Skill tool.
3. **Verification before moving on:**
   - Confirm practice exam HTML files exist in `site/` matching the count specified in `design/design-spec.md`.
   - Confirm each exam file contains the question types specified in the design spec.
4. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp. Update `examCount`.
5. **Compact context.**

### Phase 7: mobile-checker

1. Update `pipeline-status.json`: set `currentPhase` to `"mobile-checker"`, set phase status to `"in-progress"`.
2. Invoke the `mobile-checker` skill using the Skill tool.
3. **Verification:** Review the mobile-checker report. If critical issues are found, present them to the user and offer to re-run site-builder with fixes.
4. Update `pipeline-status.json`: mark phase as `"completed"` with `completedAt` timestamp.

## Parallel Dispatch Pattern (Phase 1: content-ingest)

When dispatching the content-ingest phase, determine how to split work across subagents:

1. **Scan files in `source-materials/`:** List all files, note their sizes and types.
2. **Estimate density:**
   - Small/simple files (under ~20 slides or ~10 pages): group 2 per agent.
   - Dense files (20+ slides, 10+ pages of dense text): 1 per agent.
3. **Cap at 5 parallel agents.** If more groupings are needed, queue them.
4. **Assignment:** Pass each agent its file list and the study-notes-format reference. Each agent writes its output file immediately upon completion.
5. **Verification:** After all agents report completion, verify all expected output files exist and meet the format requirements.

## Checkpoint Protocol

After every phase completion:

1. **Verify output files exist** — use the Glob tool to confirm expected files are present.
2. **Update `pipeline-status.json`** — set the completed phase's status to `"completed"` and record `completedAt` with an ISO 8601 timestamp. Set `currentPhase` to the next phase name.
3. **Compact context** — summarize what was produced in 2-3 sentences, then let go of detailed file contents. Only retain: file paths created, key metrics (term count, file count, etc.), and any issues encountered.
4. **Read next phase inputs** — before dispatching the next phase, read only the files that phase needs as input (headers/frontmatter only where possible).

## Error Recovery

If a phase fails (skill errors, missing files, malformed output):

1. **Log the error** in `pipeline-status.json` by adding an `error` field to the phase object:
   ```json
   {"name": "concept-mapper", "status": "failed", "error": "flashcards.json missing 15 terms from lecture 3 glossary"}
   ```
2. **Present the error to the user** with a clear explanation of what went wrong.
3. **Offer options:**
   - **Retry:** Re-invoke the failed phase skill.
   - **Skip:** Mark the phase as `"skipped"` and continue to the next phase (warn the user about downstream impacts).
   - **Abort:** Stop the pipeline entirely, preserving all completed work.
4. If the user chooses retry, reset the phase status to `"pending"` and re-dispatch.

## Completion

When all 7 phases are complete:

1. Update `pipeline-status.json` with all phases marked `"completed"`.
2. Present a summary to the user:
   - Course name
   - Number of study notes generated
   - Number of flashcards created
   - Number of practice exams generated
   - List of pages included in the site
   - Theme selected
3. Provide deployment instructions:

   **To deploy your study site with GitHub Pages:**
   1. Create a new GitHub repository (e.g., `{course-name}-study-site`).
   2. Copy the contents of the `site/` folder into the repository root.
   3. Push to GitHub.
   4. Go to Settings > Pages in your repository.
   5. Under "Source", select the `main` branch and `/ (root)` folder.
   6. Click Save. Your site will be live at `https://{username}.github.io/{repo-name}/` within a few minutes.

4. Ask if the user would like to make any adjustments (re-run a phase, change theme, add more exams).

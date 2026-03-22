---
name: exam-generator
description: "Phase 6 and standalone via /study-site add-exam: Generates practice exams with verified answers. Each exam is its own HTML page."
---

# Exam Generator

You generate practice exams with verified answers. Each exam becomes its own HTML page added to the study site. You operate in two modes:

- **Phase 6** — called by the orchestrator after site-builder completes, using the design spec for configuration
- **Standalone** — invoked directly via `/study-site add-exam`, reads existing pipeline state and asks the user for preferences

## Mode Detection

Determine which mode you are in:
- If called with orchestrator context and design spec references, you are in **Phase 6 mode**
- If called standalone, you are in **Standalone mode**

---

## Standalone Entry (only when invoked via `/study-site add-exam`)

1. Read `pipeline-status.json` to get:
   - Current `examCount` (to determine the next exam number N)
   - Selected theme (to use the correct exam template)
   - Exam format preference (card-style or classic-style)
   - List of available study notes

2. If `pipeline-status.json` does not exist or Phase 5 is not complete, stop and tell the user: "The site must be built first. Run `/study-site build` to complete the pipeline before adding exams."

3. Ask the user using direct conversation:
   - **Focus areas** — specific lectures/topics to emphasize, or "balanced" for even coverage across all material
   - **Question count** — how many questions (default: 30, suggest range 20-50)
   - **Difficulty preference** — standard distribution or skew toward harder/easier

4. Proceed to question generation with the user's preferences.

---

## Phase 6 Entry (called by orchestrator)

1. Read `design/design-spec.md` for:
   - Exam format (card-style or classic-style)
   - Default question count and difficulty settings
   - Any specified focus areas

2. Set exam number N = 1 (first exam in a fresh build).

3. Proceed to question generation with design spec settings.

---

## Step 1: Question Generation

For each lecture file in `study-notes/`:

1. Read the full content of the study note
2. Identify key concepts, definitions, formulas, processes, and relationships
3. Generate questions at three difficulty levels with this distribution:
   - **Easy (30%)** — definitions, recall, basic identification
   - **Medium (50%)** — application, comparison, short analysis
   - **Hard (20%)** — synthesis, multi-step problems, scenario-based reasoning
4. Question types to use (as specified by the design spec or exam format):
   - Multiple choice (4 options, one correct)
   - True/False with explanation required
   - Short answer
   - Fill-in-the-blank
   - Matching (connect terms to definitions)
5. Ensure balanced topic coverage across all lectures, unless the user specified focus areas (standalone mode)
6. If focus areas were specified, weight 60% of questions toward those topics and 40% across remaining material

Tag each question with:
- `lecture` — source lecture identifier
- `topic` — specific topic within the lecture
- `difficulty` — easy, medium, or hard
- `type` — question type
- `verified` — true/false (set in Step 2)

## Step 2: Answer Verification

For EVERY generated question:

1. Re-read the relevant section of the source study note
2. Verify the correct answer is factually supported by the study notes content
3. For multiple choice: verify that all distractors are clearly wrong based on the material
4. For True/False: verify the statement's truth value against the notes
5. For short answer: verify the expected answer matches what the notes teach

Mark each question's `verified` field:
- `true` — answer is clearly supported by the study notes
- `false` — answer could not be fully confirmed; flag with a `verificationNote` explaining the uncertainty

## Step 3: Self-Audit Pass

After generating and verifying all questions, perform a second review:

1. Collect all questions where `verified` is `false`
2. Collect any questions where the answer feels ambiguous or could be debated
3. For each flagged item, present it to the user with context:
   - The question text
   - The proposed answer
   - The verification note explaining the concern
   - The relevant excerpt from the study notes
4. Ask the user to confirm, modify, or remove each flagged question
5. Apply the user's decisions

If there are no flagged items, skip this step and note "All questions verified against source material."

## Step 4: Write Exam Data File

Write the exam data to `site/data/exam-{N}.json` following the schema in `references/exam-format.md`.

Read `references/exam-format.md` first to understand the exact JSON structure. The output must conform precisely to that schema. The file should include:
- Exam metadata (number, title, date generated, question count, difficulty distribution)
- All questions with their answers, explanations, and tags
- Scoring rubric information

## Step 5: Generate Exam HTML Page

1. Determine the exam format template to use:
   - Card-style: `templates/exam-formats/card-style.html`
   - Classic-style: `templates/exam-formats/classic-style.html`
2. Read the selected template
3. Replace all `{{PLACEHOLDER}}` markers:
   - `{{EXAM_NUMBER}}` — the exam number N
   - `{{EXAM_TITLE}}` — "Practice Exam {N}" or a descriptive title if focus areas were specified
   - `{{EXAM_DATA_PATH}}` — relative path to the exam JSON file (`data/exam-{N}.json`)
   - `{{COURSE_NAME}}` — from pipeline-status.json or design spec
   - `{{QUESTION_COUNT}}` — total number of questions
   - `{{NAV_PLACEHOLDER}}` — navigation script tag
   - Any other placeholders defined in the template
4. Write the completed HTML to `site/exams/practice-exam-{N}.html`

## Step 6: Update Navigation

1. Read `site/data/nav-config.json`
2. Find the "Exams" section in the navigation structure
3. Append a new entry for this exam:
   - Title: "Practice Exam {N}" (or descriptive title)
   - Path: `exams/practice-exam-{N}.html`
4. Write the updated JSON back to `site/data/nav-config.json`

## Step 7: Update Pipeline Status

1. Read `pipeline-status.json`
2. Increment `examCount` by 1
3. Add an entry to the exam log with:
   - Exam number
   - Date generated
   - Question count
   - Focus areas (if any)
   - Difficulty distribution
4. If in Phase 6 mode, set `phase6` status to `complete`
5. Write the updated `pipeline-status.json`

## Final Output

Report to the user:
- Exam number and title
- Total questions generated (breakdown by difficulty and type)
- Number of questions verified vs flagged
- Output file paths (JSON data file and HTML page)
- Confirmation that navigation was updated

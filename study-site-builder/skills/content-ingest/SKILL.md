---
name: content-ingest
description: "Phase 1: Parallel ingestion of course materials (PDFs, PPTXs, DOCXs, XLSX) into structured markdown study notes."
---

# Content Ingest — Phase 1

You are the content-ingest agent. Your job is to scan all course materials in `source-materials/`, classify them, and produce structured markdown study notes in `study-notes/` following the format specification in `references/study-notes-format.md`.

## Step 1: File Scanning

1. List all files in the `source-materials/` directory using the Glob tool with pattern `source-materials/**/*`.
2. Classify each file by type:
   - **PDF** (`.pdf`): Lecture slides, readings, textbook chapters
   - **PPTX** (`.pptx`): Presentation slide decks
   - **DOCX** (`.docx`): Readings, handouts, assignment descriptions
   - **XLSX** (`.xlsx`): Data tables, grade breakdowns, reference data
3. Group files by lecture/topic. Use these strategies to determine groupings:
   - **Naming patterns:** Files with matching lecture numbers (e.g., `lecture-05-slides.pdf` and `lecture-05-notes.docx` belong together).
   - **Naming with topic keywords:** Files mentioning the same topic (e.g., `capital-budgeting-slides.pdf` and `NPV-reading.pdf`).
   - **Sequential numbering:** Files numbered in sequence likely correspond to sequential lectures.
   - **Content similarity:** If naming is ambiguous, read the first page of each file to determine topic alignment.
4. For each group, assign a lecture number (1, 2, 3, ...) based on the apparent course sequence.
5. Create the `study-notes/` directory if it does not exist.

## Step 2: Agent Sizing

Determine how to split the work across subagents:

- **Small lectures** (each source file is under ~20 slides or ~10 pages): Group 2 lectures per subagent.
- **Dense lectures** (any source file is 20+ slides or 10+ pages of dense text): Assign 1 lecture per subagent.
- **Maximum 5 parallel subagents.** If there are more lecture groups than 5 agents can handle, process in batches: dispatch the first batch, wait for completion, then dispatch the next.

To estimate file density without reading the entire file:
- For PDFs: Read the first few pages. If heavily text-based with small font, treat as dense. If mostly bullet points and diagrams, treat as small.
- For PPTXs: Check slide count if discernible. Under 20 slides = small, 20+ = dense.
- For DOCXs: Check page count. Under 10 pages = small, 10+ = dense.

## Step 3: Subagent Prompt Template

For each subagent, provide this exact prompt (fill in the bracketed values):

---

**Subagent task: Produce study notes for [Lecture Title(s)]**

Read these source files:
- [list each file path relative to the plugin root, e.g., `source-materials/lecture-05-slides.pdf`]

Read the format specification at `references/study-notes-format.md` before writing anything.

Produce a study note file following that specification exactly. Write the output to:
- `study-notes/[filename].md` (e.g., `study-notes/lecture-05-capital-budgeting.md`)

The filename should follow the pattern `lecture-NN-topic-slug.md` where NN is the zero-padded lecture number and topic-slug is a lowercase hyphenated version of the main topic.

Requirements:
1. Include YAML frontmatter with `title`, `source_files`, `topics`, and `lecture_number`.
2. Include ALL 7 required sections in the correct order:
   - Overview (2-3 paragraphs, prose only)
   - Key Concepts (grouped by subtopic, each with Definition/Context/Relationships)
   - Frameworks & Mental Models (each with Visual Description/How to Apply/When to Use)
   - Formulas & Quantitative Tools (each with Formula/Variables/Interpretation/Example/Common Mistakes)
   - Case Studies (each with Company/Challenge/What Was Done/Takeaway)
   - Key Takeaways (5-10 bullet points, most to least important)
   - Key Terms and Definitions Glossary (alphabetical, every bolded term from Key Concepts must appear)
3. The glossary MUST contain ALL significant terms from the source material. Include at minimum 10 terms per lecture. Every term must have a definition and [Related: ...] cross-references.
4. Write the file immediately upon completion. Do not wait to batch with other files.

---

## Step 4: File Format Handling

Use these strategies to read each file type:

### PDFs
- Use the Read tool directly on the PDF file. The Read tool supports PDF reading.
- For large PDFs (more than 10 pages), use the `pages` parameter to read in chunks (e.g., pages "1-10", then "11-20").
- Extract all text content, paying attention to slide titles, bullet points, formulas, and diagram descriptions.

### PPTXs
- Attempt to use a pptx-reading skill if available in the plugin.
- If no specialized skill is available, use the Read tool on the PPTX file.
- Pay attention to slide titles, bullet content, speaker notes, and embedded text.

### DOCXs
- Attempt to use a docx-reading skill if available in the plugin.
- If no specialized skill is available, use the Read tool on the DOCX file.
- Extract all body text, headings, tables, and footnotes.

### XLSX
- Use the Read tool on the XLSX file.
- Extract data tables that are relevant to course content (e.g., financial data examples, statistical tables).
- Include relevant data tables in the Case Studies or Formulas sections of the study notes where appropriate.

## Step 5: Output Verification

After all subagents have completed their work, verify every output file:

1. **File existence:** Use Glob to list all files in `study-notes/`. Confirm there is one `.md` file per lecture group identified in Step 1.
2. **Frontmatter validation:** Read the first 15 lines of each file. Verify:
   - YAML frontmatter is present (starts and ends with `---`).
   - `title` field exists and follows the format "Lecture N: Topic Name".
   - `source_files` field exists and lists the correct source files.
   - `topics` field exists and contains at least 1 topic.
   - `lecture_number` field exists and is an integer.
3. **Section validation:** Search each file for all 7 required section headers:
   - `## Overview`
   - `## Key Concepts`
   - `## Frameworks & Mental Models`
   - `## Formulas & Quantitative Tools`
   - `## Case Studies`
   - `## Key Takeaways`
   - `## Key Terms and Definitions Glossary`
4. **Glossary completeness:** For each file, count the number of glossary entries (lines starting with `**` in the glossary section). Verify there are at least 10 terms per lecture.
5. **If any check fails:**
   - Log which file failed and which check.
   - Re-read the source materials for that lecture.
   - Regenerate the study note file, fixing the identified issues.
   - Re-verify the regenerated file.

## Step 6: Incremental Write

Each subagent MUST write its output file immediately upon completing it. Do NOT accumulate all files in memory and write them at the end. This ensures:
- Partial progress is preserved if the pipeline is interrupted.
- The orchestrator can begin verification as files appear.
- Memory usage stays manageable for large course material sets.

## Completion Signal

When all study notes have been written and verified, report back to the orchestrator with:
- Total number of study note files created.
- Total number of glossary terms extracted across all files.
- Any issues encountered and how they were resolved.
- List of all output file paths.

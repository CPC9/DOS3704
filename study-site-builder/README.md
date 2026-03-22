# study-site-builder

> Turn a folder of course materials into a polished study website

## What This Does

Drop your lecture slides, PDFs, notes, and readings into a single folder, run one command, and get a complete multi-page study website. The site includes interactive flashcards, timed practice exams, a visual concept map showing how topics connect, and a condensed last-minute review page — all generated directly from your course materials.

## Prerequisites

- A computer with internet access
- Course materials (PDFs, PowerPoints, Word docs, spreadsheets — any common format)

## Step 1: Install Claude Code

Claude Code is a command-line tool that powers this plugin. Install it by following the official guide:

**https://docs.anthropic.com/en/docs/claude-code/overview**

Once installed, open your terminal and sign in:

```bash
claude
```

Follow the prompts to authenticate with your Anthropic account.

## Step 2: Install This Plugin

In your terminal, run:

```bash
claude plugins install study-site-builder
```

This registers the plugin so its commands are available in every Claude Code session.

## Step 3: Organize Your Course Materials

1. Open your project folder (or create a new one).
2. Create a subfolder called `source-materials/`:

```bash
mkdir source-materials
```

3. Copy ALL your course files into it — lectures, slides, readings, spreadsheets, handouts, anything relevant.
4. Any internal structure is fine. Subfolders, flat files, mixed formats — the plugin auto-classifies everything by content, not by filename or folder structure.

## Step 4: Run the Pipeline

Start Claude Code, then launch the build pipeline:

```bash
claude
# then type:
/study-site start
```

The pipeline runs through seven phases:

1. **Content Ingestion** — Reads every file in `source-materials/`, extracts text, and creates structured study notes organized by topic.
2. **Concept Mapping** — Identifies key concepts across all your materials, finds connections between topics, and builds a set of flashcards.
3. **Content Audit** — Cross-checks generated content against your original materials for accuracy. Flags anything uncertain or ambiguous for your review.
4. **Design** — Presents you with theme choices, exam format options, and page selections. You pick what you want; the plugin handles the rest.
5. **Site Building** — Assembles the full website from your chosen theme and generated content. All pages are created and linked together.
6. **Exam Generation** — Creates practice exams with configurable question counts, answer keys, and optional timers.
7. **Mobile Check** — Verifies that every page renders correctly on phone and tablet screen sizes.

When finished, your complete site is in the `site/` folder, ready to deploy.

## Step 5: Deploy to GitHub Pages

Follow these steps to make your study site available online:

1. Go to **https://github.com/new** and create a new repository. Give it any name you like (e.g., `my-study-site`). Set it to Public.

2. In your terminal, from your project folder, initialize git and push:

```bash
git init
git add site/
git commit -m "Add study site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

3. On GitHub, go to your repository page. Click **Settings** in the top menu.

4. In the left sidebar, click **Pages**.

5. Under "Build and deployment", set:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/site`

6. Click **Save**. GitHub will build your site within a minute or two.

7. Your site is now live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

## Adding More Practice Exams

Generate additional exams at any time:

```bash
/study-site add-exam
```

You will be prompted to:
- Choose focus areas (specific topics) or balanced coverage (all topics weighted equally)
- Set the number of questions
- Select question types (multiple choice, short answer, or mixed)

New exams are added to your existing site without rebuilding everything.

## Using the Tutor

Launch an interactive study session:

```bash
/study-site tutor
```

The tutor knows your entire course and can:
- Quiz you on specific topics
- Explain concepts in different ways
- Walk through practice problems step by step
- Identify gaps in your understanding based on your answers

## Available Themes

Choose a visual theme during the Design phase, or change it later by re-running the pipeline.

| Theme | Description |
|---|---|
| **Midnight Blue** | Dark navy background with crisp white text. Professional and easy on the eyes for long study sessions. |
| **Warm Ivory** | Cream background with warm brown tones. Feels like a well-made textbook. |
| **Forest Green** | Dark earthy greens with soft gold accents. Calm and focused. |
| **Slate Minimal** | Clean white background with gray text. Maximum readability, zero distractions. |
| **Sunset Coral** | Dark plum background with coral highlights. Energetic and modern. |

## Customization

### Adding a New Theme

1. Create a new folder in `templates/themes/` with your theme name (e.g., `templates/themes/my-theme/`).
2. Add two files:
   - `theme.css` — Your custom styles. Use any existing theme as a starting point.
   - `preview.md` — A short description and color palette summary shown during theme selection.

### Modifying Page Templates

Page templates live in `templates/page-templates/`. Each file controls the structure of one page type (flashcards, exam, concept map, review, etc.). Edit these to change layout, add sections, or adjust formatting.

## Troubleshooting

**File format not recognized**
The plugin supports PDF, PPTX, DOCX, XLSX, TXT, MD, and common image formats. If a file is skipped, convert it to PDF or plain text and re-run.

**Exam generation fails or produces poor questions**
This usually means the source material for that topic is too brief. Add more detailed notes or readings on that subject to `source-materials/` and run `/study-site add-exam` again.

**Site looks broken on mobile**
Re-run the pipeline with `/study-site start`. The Mobile Check phase will identify and fix layout issues. If problems persist, try switching to the Slate Minimal theme, which has the simplest layout.

**"No source materials found" error**
Make sure your files are inside the `source-materials/` folder in your current working directory. The plugin only looks in that specific folder.

**Pages are empty or missing content**
Check that your source files are not password-protected or corrupted. Try opening them on your computer first to confirm they are readable.

**GitHub Pages site not updating**
After pushing changes, GitHub Pages can take 2-5 minutes to rebuild. Check the Actions tab on your repository for build status. If the build fails, make sure the `/site` folder is committed and pushed.

## License

MIT — see LICENSE file.

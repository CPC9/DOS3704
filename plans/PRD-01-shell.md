# PRD-01: Study Map Shell

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Create `study-map.html` — a standalone, fully functional Study Map page with all CSS, the Three Central Questions section, an accordion topic/subtopic system, and a JS render engine that reads external data files.

**Architecture:** Single HTML file with embedded CSS and JS. Reads topic data from `data/*.js` files via script tags. When any data file doesn't exist yet, that topic simply doesn't render — no errors.

**Tech Stack:** Vanilla HTML/CSS/JS, no frameworks, no build step, no external CDN.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\study-map.html`
- **Read (for CSS):** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\.superpowers\brainstorm\509-1774181369\revised-mockup.html`
- **Read (for Three Central Questions):** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\CONCEPTUAL_MAP.md`

---

## Steps

- [ ] **Step 1: Read the mockup and CONCEPTUAL_MAP.md**

Read both source files before writing anything.
- From the mockup: copy the entire `<style>` block verbatim
- From CONCEPTUAL_MAP.md: extract the three central questions (section "The Three Questions This Course Teaches You to Answer")

- [ ] **Step 2: Write `study-map.html`**

Write the complete file using the exact structure below.

---

## Exact File Structure

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOS3704 · Study Map</title>
  <style>
    [PASTE FULL CSS FROM MOCKUP HERE — copy the entire <style> block]

    /* Additional styles not in mockup */
    body { padding-top: 0; }
    .standalone-notice {
      text-align: center; font-size: 11px; color: #2a3f5c;
      margin-top: 32px; padding-top: 14px;
      border-top: 1px solid var(--border);
    }
  </style>
</head>
<body>

<!-- Standalone nav (no flashcard tab since this is a standalone page) -->
<nav class="topbar">
  <div class="topbar-brand">DOS<span>3704</span> · Operations Strategy</div>
  <div class="topbar-nav">
    <button class="nav-btn active">Study Map</button>
    <a href="flashcards.html" style="text-decoration:none">
      <button class="nav-btn">Flashcard Decks →</button>
    </a>
  </div>
</nav>

<div class="page active" id="page-study">

  <div class="page-header">
    <h1>Operations Strategy — Full Course Map</h1>
    <p>Click any block to expand · Drill into sub-topics to reveal formulas, intuition, and case details</p>
  </div>

  <!-- Three Central Questions — static HTML, verbatim from CONCEPTUAL_MAP.md -->
  <div class="central-questions">
    <div class="cq-card">
      <div class="cq-number">Question 1</div>
      <div class="cq-question">What should operations be good at?</div>
      <div class="cq-tool">Tool: <strong>Alignment</strong> — connect capabilities to business strategy via SOA &amp; PPM (Class 1)</div>
    </div>
    <div class="cq-card">
      <div class="cq-number">Question 2</div>
      <div class="cq-question">Which operational system best provides those capabilities?</div>
      <div class="cq-tool">Tool: <strong>Trade-off analysis + 8 resource/process decisions</strong> (Classes 2–7)</div>
    </div>
    <div class="cq-card">
      <div class="cq-number">Question 3</div>
      <div class="cq-question">Does this create value?</div>
      <div class="cq-tool">Tool: <strong>NPV</strong> — every decision is ultimately evaluated by whether it maximizes NPV (throughout)</div>
    </div>
  </div>

  <!-- Topics container — populated by JS render engine -->
  <div id="topics-container"></div>

  <p class="standalone-notice">DOS3704 Operations Strategy Study Tool · Study Map Page</p>
</div>

<!-- Data files — each is optional; missing files are silently skipped -->
<script src="data/foundations.js"></script>
<script src="data/resources-a.js"></script>
<script src="data/resources-b.js"></script>
<script src="data/process-demand.js"></script>
<script src="data/process-supply.js"></script>
<script src="data/tech.js"></script>
<script src="data/cases.js"></script>

<script>
// ═══════════════════════════════════════════════════════
// TOPIC CONFIGURATION — order and metadata for topic blocks
// ═══════════════════════════════════════════════════════
const TOPIC_CONFIG = [
  {
    dataVar: 'TOPIC_FOUNDATIONS',
    id: 'foundations',
    icon: '🏛',
    eyebrow: 'Classes 1–2 · Foundation Layer',
    title: 'The Framework, Alignment & Trade-offs',
    desc: 'Strategy hierarchy · 3 views · SOA · PPM · Trade-offs · NPV · Cost decomposition'
  },
  {
    dataVar: 'TOPIC_RESOURCES_A',
    id: 'resources-a',
    icon: '⚙️',
    eyebrow: 'Classes 3–4 · Resource Decisions (Part A)',
    title: 'Capacity: Sizing, Timing & Flexibility',
    desc: 'Optimal capacity size · Timing strategies · Option value · Flexible vs. dedicated · Risk pooling'
  },
  {
    dataVar: 'TOPIC_RESOURCES_B',
    id: 'resources-b',
    icon: '🗺️',
    eyebrow: 'Classes 4–5 · Resource Decisions (Part B)',
    title: 'Capacity: Flexibility Design & Location',
    desc: 'Chaining · Mass customization · Location drivers · Network design · Ferdows\' 6 roles'
  },
  {
    dataVar: 'TOPIC_PROCESS_DEMAND',
    id: 'process-demand',
    icon: '📈',
    eyebrow: 'Class 6 · Process Decisions (Demand)',
    title: 'Revenue Management & Pricing',
    desc: 'Revenue management · Price discrimination · Littlewood\'s Rule · Overbooking · Newsvendor'
  },
  {
    dataVar: 'TOPIC_PROCESS_SUPPLY',
    id: 'process-supply',
    icon: '🔗',
    eyebrow: 'Class 6 · Process Decisions (Supply)',
    title: 'Strategic Sourcing & Contracts',
    desc: 'Sourcing spectrum · TCO · Make-or-buy · Contract types · CCC21'
  },
  {
    dataVar: 'TOPIC_TECH',
    id: 'tech',
    icon: '💡',
    eyebrow: 'Class 7 · Technology & Innovation',
    title: 'Learning, Technology & Innovation',
    desc: 'Learning curves · Continuous vs. radical · Concurrent engineering · Product-process lifecycle'
  },
  {
    dataVar: 'TOPIC_CASES',
    id: 'cases',
    icon: '📋',
    eyebrow: 'All Classes · Case Studies',
    title: 'Case Studies',
    desc: 'Swiss Watch · ACC vs. DJC · Eli Lilly · Moderna'
  }
];

// ═══════════════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════════════

function renderTopics() {
  const container = document.getElementById('topics-container');
  container.innerHTML = '';

  TOPIC_CONFIG.forEach(cfg => {
    // Check if data file has been loaded for this topic
    const data = window[cfg.dataVar];
    if (!data) return; // data file not loaded yet — skip silently

    const subtopics = data.subtopics || [];
    const topicId = 't-' + cfg.id;

    const block = document.createElement('div');
    block.className = 'topic-block';
    block.id = topicId;

    block.innerHTML = `
      <div class="topic-header" onclick="toggleTopic('${topicId}')">
        <div class="topic-icon">${cfg.icon}</div>
        <div class="topic-text">
          <div class="topic-eyebrow">${cfg.eyebrow}</div>
          <div class="topic-title">${cfg.title}</div>
          <div class="topic-desc">${data.desc || cfg.desc}</div>
        </div>
        <div class="topic-right">
          <span class="topic-pill">${subtopics.length} sub-topics</span>
          <span class="chevron">▶</span>
        </div>
      </div>
      <div class="topic-body">
        <div class="subtopic-grid">
          ${subtopics.map(st => renderSubtopic(st)).join('')}
        </div>
      </div>
    `;

    container.appendChild(block);
  });
}

function renderSubtopic(st) {
  const subId = 's-' + st.id;
  const dotClass = st.isCase ? 'dot case' : 'dot';
  return `
    <div class="subtopic" id="${subId}">
      <div class="subtopic-hdr" onclick="toggleSub('${subId}')">
        <div class="${dotClass}"></div>
        <div class="subtopic-title">${st.title}</div>
        <span class="sub-chev">▶</span>
      </div>
      <div class="subtopic-body">
        ${st.body}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════
// ACCORDION CONTROLS
// ═══════════════════════════════════════════════════════

function toggleTopic(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

function toggleSub(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', renderTopics);
</script>

</body>
</html>
```

---

## Verification

After writing the file, open it in a browser and confirm:
- [ ] Page loads with the blue background and top nav bar
- [ ] Three Central Questions appear in a 3-column grid
- [ ] No JS errors in console (even with no data files present)
- [ ] If you manually create a tiny `data/foundations.js` with `const TOPIC_FOUNDATIONS = { subtopics: [] };` and reload, no errors appear

**Important:** The data files don't need to exist for this PRD to be complete. The render engine handles missing data files gracefully.

# PRD-02: Foundations Content

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/foundations.js` — a JS data file containing all 11 Foundation subtopics (Classes 1–2) with comprehensive HTML body content for each.

**Architecture:** Single JS file that defines `const TOPIC_FOUNDATIONS`. The study-map.html render engine reads this variable automatically.

**Prerequisite:** PRD-01 must be complete (study-map.html must exist).

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\foundations.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\01_Class_1_Notes.md`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\02_Class_2_Notes.md`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\CONCEPTUAL_MAP.md`

---

## Steps

- [ ] **Step 1: Read all three source files completely before writing anything**

Read 01_Class_1_Notes.md, 02_Class_2_Notes.md, and CONCEPTUAL_MAP.md in full. Note the exact definitions, formulas, and frameworks for each subtopic below.

- [ ] **Step 2: Write `data/foundations.js`**

Write the complete file. See format and subtopic specifications below.

- [ ] **Step 3: Verify**

Open study-map.html in a browser. The "Foundation Layer" topic block should appear. Expand it — all 11 subtopic cards should be visible. Click each to expand and verify the body content appears correctly.

---

## Output Format

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
      body: `[HTML CONTENT — see below]`
    },
    // ... 10 more subtopics
  ]
};
```

**String format:** Use template literals (backticks) for `body`. If you must include a backtick character inside a body, escape it as `` \` ``.

**HTML classes to use** (see MASTER.md for full reference):
- `<div class="section-label">TITLE</div>` — section header
- `<p class="prose">text</p>` — paragraph
- `<ul class="bullets"><li>...</li></ul>` — bullet list
- `<div class="formula-wrap"><div class="formula">...</div><div class="formula-explain">...</div></div>` — formula
- `<div class="insight-box"><div class="label">KEY INSIGHT</div><p>...</p></div>` — callout
- `<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;"><span class="link-tag">Related (Class X)</span></div>` — cross-refs

---

## Subtopic Specifications

Write ALL 11 subtopics in this exact order. For each, the body must include: prose intro, section labels, bullets/formulas as appropriate, at least one insight box, and cross-reference tags at the bottom.

---

### Subtopic 1: Strategy Hierarchy
**id:** `strategy-hierarchy`
**Source:** Class 1 notes — Strategy Hierarchy section

**Must include:**
- 3 levels: Corporate (which industries?), Business (how to win — Price/Quality/Responsiveness/Variety), Functional/Operations (how to execute)
- The alignment principle: Business strategy defines WHAT, Operations defines HOW
- The 1-to-1 mapping: Price↔Cost, Quality↔Quality, Responsiveness↔Lead-Time, Variety↔Flexibility

**Cross-refs:** `OS Framework`, `SOA`, `PPM`

---

### Subtopic 2: Operations Strategy — Formal Definition & OS vs. OM
**id:** `os-definition`
**Source:** Class 1 notes — OS definition section

**Must include:**
- Verbatim definition: "A long-term plan for developing resources and configuring processes such that the resulting capabilities maximize NPV"
- Break down each phrase: long-term, resources, processes, capabilities, NPV
- OS vs. OM distinction: OM = day-to-day tactics; OS = long-run strategic investments
- Two questions OS answers: What should ops be good at? Which system best provides it?

**Cross-refs:** `NPV`, `Three Views`, `OS Framework`

---

### Subtopic 3: Three Complementary Views
**id:** `three-views`
**Source:** Class 1 notes — Three Views section

**Must include:**
- Process View: transformation process / activity network; 4 process decisions (Supply, Technology, Innovation, Demand)
- Resource View: asset portfolio; 4 resource decisions (Size, Timing, Type, Location)
- Competency/Capability View: 4 capabilities (Cost, Quality, Lead-Time, Flexibility); connects to business strategy
- Why all 3 are needed simultaneously — each reveals different levers
- The course structure maps to these views: Classes 3-5 = Resource View, Classes 6-7 = Process View

**Cross-refs:** `OS Framework`, `Strategy Hierarchy`

---

### Subtopic 4: The OS Framework
**id:** `os-framework`
**Source:** Class 1 notes and CONCEPTUAL_MAP.md — the framework diagram

**Must include:**
- The 8 resource/process decisions mapped to the 4 business strategy dimensions
- The 1-to-1 mapping at the top of the framework (Price↔Cost, etc.)
- The two sides: Resource decisions (Size/Timing/Type/Location) vs. Process decisions (Supply/Technology/Innovation/Demand)
- The alignment principle connecting business strategy → capabilities → operations
- Render the framework as a structured bullet list or ASCII-style table inside the body (NOT an actual image — use text)

**Cross-refs:** `Three Views`, `SOA`, `Strategy Hierarchy`

---

### Subtopic 5: Strategic Operational Audit (SOA)
**id:** `soa`
**Source:** Class 1 notes — SOA section

**Must include:**
- Purpose: diagnostic tool for alignment
- Three gaps:
  1. Strategy Gap: Value Proposition ≠ Deliverable Value
  2. Competency Gap: Current competencies ≠ Needed competencies
  3. Resource & Process Gap: Current R&P ≠ Needed R&P
- How to use SOA on an exam: start from top (VP), work down
- Swiss Watch connection: Hayek used SOA reasoning to identify the misalignment

**Cross-refs:** `OS Framework`, `PPM`, `Swiss Watch (Case)`

---

### Subtopic 6: Product-Process Matrix (PPM)
**id:** `ppm`
**Source:** Class 1 notes — PPM section

**Must include:**
- The 5 process types on the vertical axis: Job Shop, Batch, Repetitive Line, Continuous Flow, Project
- Product variety/standardization on the horizontal axis
- The alignment zone (diagonal): high variety → job shop; standard products → repetitive line
- Two misalignment positions: too flexible for product (wasting flexibility cost), too inflexible for product (can't meet variety demands)
- Example mappings: Swiss Watch luxury = job shop; Swatch = repetitive line
- How PPM connects to trade-offs (each process type sits on a different trade-off curve)

**Cross-refs:** `SOA`, `Operational Trade-offs`, `Three Views`

---

### Subtopic 7: NPV — Net Present Value
**id:** `npv`
**Source:** Class 1 notes — NPV section; CONCEPTUAL_MAP.md — Key Formulas table

**Must include:**
- Formula: `NPV = C₀ + Σ [ Cₜ / (1+r)ᵗ ]` in a formula-wrap box
- Variable definitions: C₀ (initial investment, negative), Cₜ (cash flow at time t), r (discount rate), t (period)
- Intuition: why discount? Because capital has opportunity cost; future cash is worth less than today's
- Decision rule: positive NPV = value-creating; negative NPV = value-destroying
- Strategic implication: the goal of OS is to maximize NPV — every decision in the course feeds back here
- Discount rate nuance: higher r = more penalty on far-future returns = favors fast-payback operations

**Cross-refs:** `OS Definition`, `Capacity Sizing`, `Option Value of Waiting`

---

### Subtopic 8: Operational Trade-offs & Efficient Frontier
**id:** `operational-tradeoffs`
**Source:** Class 2 notes — Trade-offs and Efficient Frontier section

**Must include:**
- Why trade-offs exist: operational systems cannot simultaneously maximize all capabilities; each process type traces its own trade-off curve
- The trade-off curve: x-axis = non-cost capability (e.g., flexibility/variety), y-axis = unit cost; each process type has its own curve
- The Efficient Frontier: the outer envelope of ALL trade-off curves in the industry — the best achievable combinations
- "Sweet spot" for each process type: where that type is on the efficient frontier
- Points inside the frontier: attainable but inefficient; points outside: not currently achievable
- Strategic implication: choose your trade-off position deliberately based on business strategy

**Cross-refs:** `OE vs. Focus`, `Cost Decomposition`, `PPM`

---

### Subtopic 9: Operational Efficiency (OE) vs. Operational Focus
**id:** `oe-vs-focus`
**Source:** Class 2 notes — OE and Focus sections

**Must include:**
- OE definition: cost disadvantage relative to the efficient frontier for the same capability level
- Two ways to improve competitive position:
  1. OE improvement: push the trade-off curve outward (better for same cost, or cheaper for same capability)
  2. Operational Focus: restrict the range of capabilities to a narrow set — "simplicity and repetition breeds competence"
- Focus factory concept: separate a plant (or operation) to serve one product family/customer segment
- "Divide and conquer" approach: 3 steps — partition products by capability needs, separate critical resources, create charters
- The ACC/DJC case: DJC is focused (640 SKUs, 75.4% utilization) vs. ACC (4,500 SKUs, 30.2% utilization)

**Cross-refs:** `Operational Trade-offs`, `Cost Decomposition`, `ACC vs. DJC (Case)`

---

### Subtopic 10: Cost Decomposition — ΔC = Cv + COE + CS
**id:** `cost-decomposition`
**Source:** Class 2 notes — Cost Decomposition / ΔC formula section

**Must include:**
- The formula: `ΔC = Cv + COE + CS` in a formula-wrap box
- Variable definitions:
  - ΔC = total observed cost difference between you and competitor
  - Cv = volume/utilization cost differential (from operating below planned utilization)
  - COE = operational efficiency cost differential (true inefficiency vs. efficient frontier)
  - CS = competitive strategy cost differential (legitimate cost of your strategic choices)
- Rearrangement to solve for COE: `COE = ΔC − Cv − CS`
- Intuition: ΔC is the raw number, but it misleads. Cv disappears if volumes equalize. CS is "legitimate." Only COE signals a real operational problem.
- How to use on exam: compute ΔC, adjust for volume (Cv) and strategy (CS), remainder is COE
- ACC/DJC application: ΔC = 35%, CS ≈ +21.5%, Cv explained some, leaving COE as the threat

**Cross-refs:** `Operational Trade-offs`, `OE vs. Focus`, `ACC vs. DJC (Case)`

---

### Subtopic 11: Three Guidelines for Operations-Based Competition
**id:** `three-guidelines`
**Source:** Class 2 notes — Three Guidelines / Skinner / Competitive Operations section

**Must include:**
- All three guidelines verbatim from the notes (they typically follow from the trade-off and focus analysis)
- Context: these are the strategic principles that follow from understanding trade-offs and focus
- How they connect to the rest of the framework
- Exam relevance: these are often referenced when analyzing whether a company's operations are strategically sound

**Cross-refs:** `OE vs. Focus`, `Operational Trade-offs`, `OS Framework`

---

## Example of One Complete Subtopic Body

Use this as a template for quality and style:

```js
body: `<p class="prose">The strategy hierarchy describes how strategic intent flows from the boardroom to the factory floor through three nested levels. Understanding which level is "talking" in a case is the first step to any OS analysis — because operations strategy can only be evaluated relative to what the business strategy above it demands.</p>

<div class="section-label">THREE LEVELS</div>
<ul class="bullets">
  <li><strong>Corporate Strategy:</strong> Which industries will we compete in? Allocates capital across business units. Highest abstraction — doesn't touch operations directly.</li>
  <li><strong>Business Strategy:</strong> How do we win in our chosen industry? Characterized by four dimensions: <strong>Price, Quality, Responsiveness, Variety</strong>. This is what customers feel and why they choose you.</li>
  <li><strong>Functional Strategy (Operations):</strong> How do we execute the business strategy? OS lives here — it designs and develops the resources and processes that deliver the business strategy's promise.</li>
</ul>

<div class="section-label">THE 1-TO-1 ALIGNMENT MAPPING</div>
<ul class="bullets">
  <li>Business competes on <strong>Price</strong> → Operations must build <strong>Cost</strong> capability</li>
  <li>Business competes on <strong>Quality</strong> → Operations must build <strong>Quality</strong> capability</li>
  <li>Business competes on <strong>Responsiveness</strong> → Operations must build <strong>Lead-Time</strong> capability</li>
  <li>Business competes on <strong>Variety</strong> → Operations must build <strong>Flexibility</strong> capability</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Business strategy defines the <em>what</em>; operations strategy defines the <em>how</em>. A brilliant business strategy fails if operations can't deliver it — and great operations go to waste if they're building the wrong capabilities. The hierarchy is also the diagnostic sequence: start at Business Strategy on any exam question.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">OS Framework (Class 1)</span>
  <span class="link-tag">SOA (Class 1)</span>
  <span class="link-tag">Three Views (Class 1)</span>
</div>`
```

---

## Verification Checklist

- [ ] File is valid JavaScript (no syntax errors — test with: `node -e "const f=require('./data/foundations.js')"` or just open in browser)
- [ ] `TOPIC_FOUNDATIONS.subtopics` has exactly 11 items
- [ ] Every subtopic has a non-empty `body` string with actual HTML content
- [ ] Every subtopic with a formula uses `formula-wrap` + `formula-explain` with Intuition subsection
- [ ] Every subtopic has at least one `insight-box`
- [ ] Every subtopic has cross-reference link-tags at the bottom
- [ ] Template literals are properly closed (no unclosed backticks)
- [ ] Loading study-map.html in browser shows the Foundation topic block with all 11 cards

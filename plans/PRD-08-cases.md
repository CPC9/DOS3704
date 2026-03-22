# PRD-08: Case Studies

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/cases.js` — 4 case study subtopics (Swiss Watch, ACC, Eli Lilly, Moderna) with comprehensive detail. These are the integrative cases that connect all course concepts.

**Architecture:** Single JS file defining `const TOPIC_CASES`. All 4 subtopics have `isCase: true` (renders with amber dot).

**Prerequisite:** PRD-01 must be complete.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\cases.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\01_Class_1_Notes.md` (Swiss Watch)
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\02_Class_2_Notes.md` (ACC vs. DJC)
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\04_Class_4_Notes.md` (Eli Lilly)
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\07_Class_7_Notes.md` (Moderna)
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\CONCEPTUAL_MAP.md` (case summaries section)

---

## Steps

- [ ] **Step 1: Read all 5 source files**

Read all case-relevant sections carefully. These cases must be detailed enough to understand cold.

- [ ] **Step 2: Write `data/cases.js`**

- [ ] **Step 3: Verify in browser** — "Case Studies" topic block should appear with 4 amber-dot subtopic cards.

---

## Output Format

```js
const TOPIC_CASES = {
  id: 'cases',
  eyebrow: 'All Classes · Case Studies',
  title: 'Case Studies',
  icon: '📋',
  desc: 'Swiss Watch · ACC vs. DJC · Eli Lilly · Moderna',
  subtopics: [
    {
      id: 'case-swiss-watch',
      title: 'Swiss Watch Industry',
      isCase: true,  // ← IMPORTANT: amber dot
      body: `[HTML CONTENT]`
    },
    // ... 3 more case subtopics, all with isCase: true
  ]
};
```

---

## Case Subtopic Specifications

Each case must have enough detail that a student who has never read the case can answer exam questions about it.

---

### Case 1: Swiss Watch Industry
**id:** `case-swiss-watch`
**isCase:** `true`
**Source:** Class 1 notes — Swiss Watch case section

**Must include (extract from notes — do not invent):**
- **Background:** Swiss watch industry dominated the global market until the 1970s; known for mechanical precision and craftsmanship
- **The crisis:** Japanese competitors (Seiko, Citizen) introduced affordable quartz watches in the early 1970s — Swiss market share collapsed from ~80% to ~15% in a decade
- **Seiko's strategy:** quartz technology + high-volume production + low price — attacked the Swiss industry from below
- **Why the Swiss were vulnerable:** misalignment — their operations (fine craftsmen in the Jura mountains making high-precision mechanical watches) was perfectly aligned for luxury, but NOT for the mass market that quartz disrupted
- **Hayek/Swatch turnaround:** Nicolas Hayek (later CEO) analyzed the crisis and concluded the Swiss could compete in the mass market by redesigning the watch as a fashion accessory — but only if they redesigned the manufacturing system:
  - Plastic case (instead of metal)
  - Dramatically reduced parts count (51 parts vs. hundreds)
  - Automated assembly in Switzerland (counterintuitively, automation made Swiss production cost-competitive)
  - Positioned as fashion/lifestyle, not timekeeping precision
- **The lessons (extract all key lessons from the notes):**
  1. Alignment: strategy and operations must match
  2. Multiple complementary views: Hayek used all 3 views simultaneously
  3. A new operational system (Swatch's PPM position) can coexist with the old (luxury mechanical)
  4. Design decisions are operations decisions — the reduced parts count was as much an engineering decision as a manufacturing one
  5. Technology disruption requires OS response, not just marketing response
  6. Focus: Swatch was a focused operation targeting the mass-market segment specifically

**Cross-refs:** `SOA (Class 1)`, `PPM (Class 1)`, `Three Views (Class 1)`, `Product-Process Lifecycle (Class 7)`

---

### Case 2: American Connector Co. (ACC) vs. DJC Corporation
**id:** `case-acc`
**isCase:** `true`
**Source:** Class 2 notes — ACC case section

**Must include (extract from notes — do not invent):**
- **Background:** ACC operates a batch-process connector plant in Sunnyvale, CA producing ~4,500 SKUs, competing on design flexibility and customer solutions. DJC is a Japanese competitor operating a highly focused repetitive-line plant in Kawasaki producing ~640 SKUs.
- **Key data points from the case:**
  - ACC: effective utilization ~30.2%, ~26,000 defects per million units
  - DJC: effective utilization ~75.4%, ~defect rate 30-40x lower than ACC
  - DJC's vision: 100% asset utilization, 99% material yield, fewer than 1 defect per million units
- **The competitive analysis:**
  - ΔC decomposition: DJC appeared to be ~35% cheaper than ACC — but HOW much of that was truly a threat?
  - Cv component: ACC's low utilization (30.2%) vs. DJC's (75.4%) explained part of the gap — if ACC reached DJC's utilization, some cost gap would close
  - CS component: ACC's strategy (4,500 SKUs, design flexibility, responsiveness) legitimately costs more than DJC's focus strategy — this is "CS," not a problem
  - COE: the residual — true operational inefficiency
- **Response options for ACC:**
  1. Focus: reduce SKU count, push to higher utilization, cut COE
  2. Differentiate further: lean into the flexibility advantage that DJC cannot match
  3. OE improvement: invest in reducing defect rates and setup times
  4. Match DJC: build a separate focused plant for the high-volume, standard SKU business
- **Key lesson:** The cost decomposition framework (ΔC = Cv + COE + CS) is the right tool for competitive cost analysis — the raw cost gap overstates the threat.

**Cross-refs:** `Cost Decomposition (Class 2)`, `OE vs. Focus (Class 2)`, `Operational Trade-offs (Class 2)`

---

### Case 3: Eli Lilly — Flexible vs. Dedicated Capacity (1993)
**id:** `case-eli-lilly`
**isCase:** `true`
**Source:** Class 4 notes — Eli Lilly case section

**Must include (extract from notes — do not invent):**
- **Background:** Eli Lilly needed new fermentation capacity to produce a new biological drug (mid-1990s). Demand was uncertain — the drug might be a blockbuster or a moderate seller.
- **The three options:**
  1. **Specialized/Dedicated facility:** lower capital cost, lower per-unit production cost — but can ONLY produce this one drug
  2. **Flexible facility:** higher capital cost, higher per-unit production cost — can produce multiple biological drugs
  3. **Hybrid:** some combination
- **Key numbers (extract exact figures from notes):**
  - Dedicated: ~$94M capital, ~$7.27/kg production cost
  - Flexible: ~$115M capital, ~$8.07/kg production cost
  - Break-even analysis: at 1,164 kg per year, the dedicated facility's lower per-unit cost advantage exactly offsets the flexible facility's option value
- **Demand scenario table (extract from notes):** the notes should have a table showing demand scenarios (high/medium/low) with probabilities and NPVs under each option
- **NPV comparison:** at low demand, flexible wins (can redirect capacity). At high demand, dedicated wins (lower per-unit cost). The break-even volume determines which to choose.
- **6 key lessons (extract all from notes):**
  1. Flexibility has value when demand is uncertain
  2. Option value must be quantified, not just intuited
  3. NPV is the right evaluation tool
  4. The break-even analysis identifies the decision-relevant threshold
  5. The cost of flexibility (per-unit cost premium) must be weighed against its option value
  6. Strategic context matters: if the drug succeeds, can you build dedicated capacity fast enough?

**Cross-refs:** `Dedicated vs. Flexible (Class 4)`, `4 Sources of Flexibility Value (Class 4)`, `NPV (Class 1)`, `Option Value of Waiting (Class 3)`

---

### Case 4: Moderna — mRNA Platform & Operations Strategy
**id:** `case-moderna`
**isCase:** `true`
**Source:** Class 7 notes — Moderna case section

**Must include (extract from notes — do not invent):**
- **Background:** Moderna is a biotechnology company that built a platform for mRNA-based medicines — a technology that delivers genetic instructions (mRNA) into cells to produce therapeutic or prophylactic proteins
- **The platform advantage:** mRNA is a manufacturing platform — the production process for ANY mRNA medicine is essentially the same. Only the genetic sequence changes. This means:
  - Learning from one product transfers to all products
  - Scale-up expertise compounds across the entire pipeline
  - Time-to-scale for new products shrinks dramatically with accumulated learning
- **42-day COVID vaccine:** Moderna designed their COVID-19 vaccine sequence in **42 days** after the virus's genome was published — possible because the mRNA platform meant they only needed to design the genetic sequence, not a new manufacturing process
- **The AI Factory concept (extract from notes):** Moderna has invested in digital/AI infrastructure that automates many design and testing steps — their "digital OS" includes:
  - Computational mRNA design tools
  - Automated lab systems for rapid testing
  - Digital manufacturing process optimization
  - Data integration across the entire pipeline
- **Norwood investment:** Moderna invested in a dedicated large-scale manufacturing facility in Norwood, MA — this was a capacity timing/type decision (commitment to scale before full demand certainty)
- **Lonza partnership:** for COVID scale-up, Moderna partnered with Lonza (contract manufacturer) — using external flexible capacity to complement internal dedicated capacity
- **10 strategic lessons (extract all from notes):**
  The notes should list explicit lessons. Include all of them. They typically cover: platform strategy, vertical integration of learning, digital operations, capacity timing, the value of pre-investment in capabilities, etc.

**Cross-refs:** `Learning Curve (Class 7)`, `Learning Types (Class 7)`, `Tech in OS (Class 7)`, `Concurrent Engineering (Class 7)`, `Capacity Timing (Class 3)`, `Single vs. Multi-Sourcing (Class 6)`

---

## Verification Checklist

- [ ] File defines `const TOPIC_CASES` at global scope
- [ ] `subtopics` array has exactly 4 items
- [ ] ALL 4 subtopics have `isCase: true`
- [ ] Eli Lilly case includes the exact capital cost figures ($94M/$115M), per-kg costs, and break-even analysis
- [ ] Swiss Watch case includes Seiko's strategy, the Swatch response, and the lessons
- [ ] ACC case includes the ΔC decomposition with specific numbers (utilization rates)
- [ ] Moderna case includes the 42-day vaccine design, AI factory concept, and Norwood/Lonza details
- [ ] Every case has at least one `insight-box` and cross-reference tags
- [ ] Loading study-map.html shows Case Studies block with 4 amber-dot cards

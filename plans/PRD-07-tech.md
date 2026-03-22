# PRD-07: Technology & Innovation (Class 7)

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/tech.js` — 7 subtopics covering all Technology & Innovation content from Class 7.

**Architecture:** Single JS file defining `const TOPIC_TECH`.

**Prerequisite:** PRD-01 must be complete.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\tech.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\07_Class_7_Notes.md`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\CONCEPTUAL_MAP.md` (Learning curve formula in formulas table)

---

## Steps

- [ ] **Step 1: Read both source files completely**
- [ ] **Step 2: Write `data/tech.js`**
- [ ] **Step 3: Verify in browser** — "Technology & Innovation" block should appear with 7 subtopic cards.

---

## Output Format

```js
const TOPIC_TECH = {
  id: 'tech',
  eyebrow: 'Class 7 · Technology & Innovation',
  title: 'Learning, Technology & Innovation',
  icon: '💡',
  desc: 'Learning curves · Continuous vs. radical · Concurrent engineering · Product-process lifecycle',
  subtopics: [ /* 7 subtopics */ ]
};
```

---

## Subtopic Specifications

### Subtopic 1: Technology in Operations Strategy
**id:** `tech-in-os`
**Source:** Class 7 notes — Technology intro section

**Must include:**
- Two types of technology relevant to OS:
  1. **Product technology:** the technology embedded in what you sell — determines product features, performance, IP
  2. **Process technology:** the technology used to make/deliver what you sell — determines production cost, quality, speed, flexibility
- Why linking them matters: companies that align product and process technology development gain compounding advantages — process innovations enable new product features; product innovations require new process capabilities
- Moderna example preview: mRNA is simultaneously a product technology (the vaccine platform) AND a process technology (the manufacturing approach) — the coupling creates their competitive moat
- The 5 process technology decisions: what technology, when to adopt it, which specific variant, how much to invest, how to implement (internally vs. licensed vs. acquired)

**Cross-refs:** `Process Technology Decisions`, `Product-Process Lifecycle`, `Concurrent Engineering`, `Moderna (Case)`

---

### Subtopic 2: Process Technology Decisions — The 5 Decisions
**id:** `process-tech-decisions`
**Source:** Class 7 notes — Process Technology Decisions section

**Must include:**
- All 5 decisions with explanations:
  1. **What technology?** Select from available process technologies — this is a capability choice, not just a cost choice. What does this technology enable that others don't?
  2. **When to adopt?** First-mover advantages (learn faster, set standards) vs. follower advantages (avoid costs of early versions, learn from pioneer's mistakes). "When" is a timing decision analogous to capacity timing.
  3. **Which specific variant?** Within a technology category, which implementation? (e.g., which CNC system, which ERP platform) — affects vendor lock-in, integration costs, and future upgrade paths
  4. **How much to invest?** Scale of adoption — pilot vs. full rollout. How quickly? Phased vs. big-bang? Ties directly to learning curve dynamics.
  5. **How to implement?** Build internally (develop own capability), license from technology leader, acquire a company that has it, or partner/joint venture. Each option trades cost, speed, control, and learning.
- Connection to innovation types: radical technology changes often require answering all 5 questions simultaneously (high risk); continuous improvement typically involves incremental answers (lower risk)

**Cross-refs:** `Innovation Types`, `Learning Curve`, `Concurrent Engineering`

---

### Subtopic 3: Innovation Types — Continuous vs. Radical
**id:** `innovation-types`
**Source:** Class 7 notes — Innovation Types section

**Must include:**
- **Continuous improvement (incremental innovation):**
  - Kaizen: Japanese philosophy — small, daily improvements by all employees; "change for the better"; bottom-up
  - Lean manufacturing (Toyota Production System): eliminate waste (muda) across 7 categories (overproduction, waiting, transport, over-processing, inventory, motion, defects)
  - Six Sigma: data-driven quality improvement; target < 3.4 defects per million opportunities; DMAIC methodology
  - Best for: mature processes, known problems, stable demand; compounds over time into major advantages
- **Radical innovation (discontinuous change):**
  - Business process reengineering: start from scratch — "if we were designing this process today, what would it look like?" — large-scale redesign
  - Copy best practice: identify the world's best practice for a process and implement it wholesale — "benchmarking + implementation"
  - Best for: processes that are fundamentally broken; when catching up to competitors requires leapfrogging rather than incremental improvement
- The strategic choice: continuous improvement builds operational discipline and culture; radical innovation creates step-change improvement but is higher-risk and disruptive

**Cross-refs:** `Learning Types`, `Learning Curve`, `Tech in OS`

---

### Subtopic 4: Learning Types
**id:** `learning-types`
**Source:** Class 7 notes — Learning Types section

**Must include:**
- Two dimensions of learning:
  - **Conceptual learning (learning WHY):** understanding the theory, principles, root causes behind how a process works — enables generalization and transfer to new contexts
  - **Operational learning (learning HOW):** learning to execute — skill-building through practice; process-specific; builds speed and reliability but may not transfer
- **Before-doing learning:** learning that happens before production begins — R&D, pilots, simulations, training — reduces early errors but delays production start
- **By-doing learning (learning-by-doing):** learning that accumulates through actual production experience — generates the learning curve
- The interplay: before-doing learning (conceptual) makes by-doing learning faster — if you understand WHY a process works, you learn HOW to optimize it more quickly
- Moderna's AI factory: uses conceptual learning (biological platform understanding) to accelerate operational learning in new vaccine development — 42-day COVID vaccine design used accumulated conceptual learning from years of mRNA research

**Cross-refs:** `Learning Curve`, `Innovation Types`, `Concurrent Engineering`, `Moderna (Case)`

---

### Subtopic 5: The Learning Curve
**id:** `learning-curve`
**Source:** Class 7 notes — Learning Curve section; CONCEPTUAL_MAP.md formulas table

**Must include:**
- **Learning curve formula** in a formula-wrap box:
  ```
  C(Q) = C₁ × Q^(−β)
  ```
  Variables: C(Q) = cost of the Q-th unit, C₁ = cost of the very first unit, Q = cumulative production volume, β = learning exponent (positive value)
  **Learning rate:** `LR = 1 − 2^(−β)` — the percentage cost reduction each time cumulative volume doubles. A "90% learning curve" means cost drops to 90% of previous each time volume doubles (β ≈ 0.152). An "80% learning curve" (β ≈ 0.322) is steeper — faster learning.
  **Intuition:** Every time cumulative volume doubles, cost falls by a fixed percentage. This is empirically observed across industries. The bigger β is, the faster costs fall with experience. Cost never reaches zero — just asymptotically approaches the minimum achievable cost.
- **Strategic implications:**
  - First-mover advantage: if you start production earlier, you accumulate more experience and reach lower cost before competitors — "experience curve strategy" (BCG matrix connection)
  - Volume commitment matters: high-volume commitments lower cost faster — there's a self-fulfilling element (commit to volume → lower cost → win more volume)
  - **Scale vs. learning:** economies of scale (bigger facility) and learning effects are BOTH ways to reduce unit cost; they compound. Scale is a one-time shift; learning is ongoing.
- **Worked example:** C₁ = $100, β = 0.322 (80% curve). Q=1: C=$100. Q=2: C=$100×2^(-0.322)=$80. Q=4: C=$100×4^(-0.322)=$64. Each doubling → cost × 0.80.

**Cross-refs:** `Learning Types`, `Innovation Types`, `Economies of Scale (Class 3)`, `Moderna (Case)`

---

### Subtopic 6: Concurrent Engineering & Design for Manufacturability (DFM)
**id:** `concurrent-engineering`
**Source:** Class 7 notes — Concurrent Engineering / DFM section

**Must include:**
- **Sequential (traditional) approach:** product design finishes → manufacturing designs the process → production starts. Problem: late discovery of manufacturing problems, expensive redesigns, long time-to-market.
- **Concurrent engineering:** product design and process design happen simultaneously, with ongoing cross-functional communication — manufacturing engineers are involved from the beginning of product design
- **Design for Manufacturability (DFM):** a set of principles for designing products that are easier and cheaper to manufacture:
  - Minimize part count
  - Use standard components (avoid custom parts)
  - Design for easy assembly (snap fits, self-locating parts)
  - Avoid tolerances tighter than necessary
  - Design with the manufacturing process in mind (e.g., don't design sharp corners for injection molding)
- **Strategic impact:** concurrent engineering + DFM can reduce time-to-market by 30-50% and cut manufacturing cost by 20-40% — it's where product and process strategy genuinely integrate
- Toyota CCC21 connection: collaborative redesign with suppliers IS concurrent engineering applied to the supply chain

**Cross-refs:** `Tech in OS`, `Product Design for Flexibility (Class 4)`, `Toyota CCC21 (Class 6)`

---

### Subtopic 7: Product-Process Lifecycle
**id:** `product-process-lifecycle`
**Source:** Class 7 notes — Product-Process Lifecycle / Technology Evolution section

**Must include:**
- The core insight: as a product matures, the optimal process type changes. New products need flexibility (job shop); mature products need efficiency (repetitive line).
- The lifecycle stages:
  1. **Introduction stage:** product is new, features are still being defined, volumes are low, customers are experimenting — needs a flexible, custom process (job shop). Cost matters less than responsiveness.
  2. **Growth stage:** product design stabilizes, volumes grow, competition emerges — shift toward batch process. Begin investing in dedicated capacity as volumes justify.
  3. **Maturity stage:** product is standardized, competition is fierce, margins compress — shift to repetitive line. Efficiency and cost are the competitive weapons.
  4. **Decline stage:** volumes fall, product is commodity — either exit or move to extreme specialization
- Connection to PPM: the lifecycle traces a path along the PPM diagonal from top-right (job shop + high variety) toward bottom-left (repetitive line + standard product)
- Technology implication: firms should anticipate lifecycle stage and invest in the appropriate process technology BEFORE they need it — lagging the shift is costly

**Cross-refs:** `PPM (Class 1)`, `Process Technology Decisions`, `Dedicated vs. Flexible (Class 4)`

---

## Verification Checklist

- [ ] File defines `const TOPIC_TECH` at global scope
- [ ] `subtopics` array has exactly 7 items
- [ ] Learning Curve subtopic has the C(Q) formula with β, learning rate formula, intuition explanation, AND a worked numerical example
- [ ] Every subtopic has at least one `insight-box` and cross-reference tags
- [ ] Template literals properly closed
- [ ] Loading study-map.html shows Technology & Innovation block with 7 cards

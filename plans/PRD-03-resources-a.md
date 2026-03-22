# PRD-03: Resource Decisions — Part A (Capacity Sizing, Timing & Flexibility)

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/resources-a.js` — a JS data file containing 9 subtopics covering Capacity Strategy Overview, Sizing, Timing, Option Value, and the first half of Flexibility (Types and Sources).

**Architecture:** Single JS file that defines `const TOPIC_RESOURCES_A`. The study-map.html render engine reads this variable automatically.

**Prerequisite:** PRD-01 must be complete.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\resources-a.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\03_Class_3_Notes.md`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\04_Class_4_Notes.md`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\CONCEPTUAL_MAP.md`

---

## Steps

- [ ] **Step 1: Read all source files completely**

Read 03_Class_3_Notes.md, 04_Class_4_Notes.md, and CONCEPTUAL_MAP.md in full.

- [ ] **Step 2: Write `data/resources-a.js`**

- [ ] **Step 3: Verify in browser**

Open study-map.html — the "Capacity: Sizing, Timing & Flexibility" topic block should appear with all 9 subtopic cards.

---

## Output Format

```js
const TOPIC_RESOURCES_A = {
  id: 'resources-a',
  eyebrow: 'Classes 3–4 · Resource Decisions (Part A)',
  title: 'Capacity: Sizing, Timing & Flexibility',
  icon: '⚙️',
  desc: 'Optimal capacity size · Timing strategies · Option value · Flexible vs. dedicated · Risk pooling',
  subtopics: [
    {
      id: 'capacity-strategy-overview',
      title: 'Capacity Strategy Overview',
      isCase: false,
      body: `[HTML CONTENT]`
    },
    // ... 8 more subtopics
  ]
};
```

Use template literals (backticks) for body strings. HTML classes: see MASTER.md.

---

## Subtopic Specifications

Write ALL 9 subtopics in this order:

---

### Subtopic 1: Capacity Strategy Overview
**id:** `capacity-strategy-overview`
**Source:** Class 3 notes — intro/overview section; CONCEPTUAL_MAP.md Layer 2

**Must include:**
- The 4 capacity decisions: Size (how much?), Timing (when?), Type (dedicated vs. flexible?), Location (where?)
- Why they are sequential: size first, then timing, then type, then location — each builds on previous
- The goal: develop a resource portfolio that delivers the capabilities demanded by business strategy at maximum NPV
- The capacity-inventory-waiting triangle: three ways to buffer uncertainty (covered in next subtopic)
- Brief preview of the key tension: more capacity = more cost but more flexibility; less capacity = lower cost but risk of unmet demand

**Cross-refs:** `OS Framework (Class 1)`, `NPV (Class 1)`, `Capacity Sizing`, `Capacity Timing`

---

### Subtopic 2: Capacity Sizing — Critical Ratio & Marginal Analysis
**id:** `capacity-sizing`
**Source:** Class 3 notes — Capacity Sizing / Newsvendor / Critical Ratio section

**Must include:**
- The core question: how much capacity to invest in when demand is uncertain?
- Marginal analysis framework: add capacity as long as marginal value ≥ marginal cost
- **Critical Ratio formula** in a formula-wrap box:
  ```
  P(D ≤ Q*) = Cu / (Cu + Co)
  ```
  Variables: Cu = underage cost (cost of having too little capacity — lost margin), Co = overage cost (cost of having too much — idle capacity cost), Q* = optimal capacity level, P(D ≤ Q*) = probability that demand is at or below Q*
  Intuition: balance the risk of being short vs. the risk of having excess; if underage cost is high relative to overage, set capacity high (high critical ratio = high fill level)
- Economies of scale connection: larger capacity may have lower per-unit cost (see next subtopic)
- The tradeoff: being capacity-short loses revenue; being capacity-long wastes capital

**Cross-refs:** `Economies of Scale`, `Option Value of Waiting`, `Capacity-Inventory-Waiting Triangle`

---

### Subtopic 3: Economies of Scale
**id:** `economies-of-scale`
**Source:** Class 3 notes — Economies of Scale / Power CapEx formula section; CONCEPTUAL_MAP.md formulas table

**Must include:**
- Definition: "bigger is better" — the cost of doubling capacity is less than double the original cost
- **Power CapEx formula** in a formula-wrap box:
  ```
  CapEx(K) = c₀ + (c_K / α) × K^α,   where 0 < α < 1
  ```
  Variables: K = capacity size, c₀ = fixed setup cost, c_K = variable capacity cost coefficient, α = scale exponent (between 0 and 1)
  Intuition: because α < 1, doubling K less than doubles CapEx — there are scale economies. The lower α is, the stronger the economies of scale. This creates pressure to centralize capacity into fewer, larger facilities.
- Strategic implication: economies of scale favor large, centralized capacity — but this sacrifices flexibility and increases distance to customers (connects to location decisions)
- The "six-tenths rule": in many industries α ≈ 0.6, meaning a 10x capacity increase only costs 4x more

**Cross-refs:** `Capacity Sizing`, `6 Location Drivers`, `Ferdows' 6 Roles`

---

### Subtopic 4: Capacity Timing — 5 Strategies
**id:** `capacity-timing`
**Source:** Class 3 notes — Capacity Timing section

**Must include:**
- The core question: when to add capacity relative to demand growth?
- All 5 strategies:
  1. **Lead strategy:** add capacity before demand — builds inventory buffer, avoids shortages, but risks excess if demand doesn't materialize
  2. **Lag strategy:** add capacity after demand — conservative, avoids excess, but risks lost sales and waiting lists
  3. **Chase/Demand-chasing strategy:** continuously adjust capacity to match actual demand — minimal buffer, requires frequent adjustments
  4. **Hybrid strategy:** alternate between lead and lag periods — smooth capacity additions with managed buffers
  5. **Follow-competitor strategy:** mirror competitors' capacity decisions — avoids being the only one with excess or shortage
- When to use each: lead when demand is predictable and growing fast; lag when demand is uncertain; chase when capacity is cheap/flexible; follow when industry dynamics are uncertain
- NPV implications: lead strategy requires earlier capital outlay; lag preserves optionality

**Cross-refs:** `Option Value of Waiting`, `Capacity Sizing`, `Economies of Scale`

---

### Subtopic 5: Option Value of Waiting
**id:** `option-value`
**Source:** Class 3 notes — Option Value / Real Options section; CONCEPTUAL_MAP.md formulas table

**Must include:**
- Intuition: delaying a capacity investment has VALUE because you learn more about demand before committing
- **Option Value formula** in a formula-wrap box:
  ```
  Option Value = NPV(wait and invest later) − NPV(invest now)
  ```
  When positive: waiting is better. When negative: invest now.
  Extended: Option Value is HIGH when: (1) demand uncertainty is high, (2) the investment is large and hard to reverse, (3) information about demand arrives over time, (4) the cost of delay is low
- Real options analogy: just like a financial option (you pay a premium for the right but not obligation to buy), capacity investments have option value
- Strategic implication: the option to wait is more valuable when uncertainty is high — this is why lag strategies have value even though they risk lost sales
- Counter-argument: waiting too long can mean competitors lock up favorable locations, talent, or supplier relationships

**Cross-refs:** `Capacity Timing`, `Capacity Sizing`, `NPV (Class 1)`

---

### Subtopic 6: Capacity-Inventory-Waiting Triangle
**id:** `capacity-inventory-waiting`
**Source:** Class 3 notes — buffer uncertainty section

**Must include:**
- The key idea: there are three ways to buffer against demand uncertainty: (1) excess Capacity, (2) Inventory, (3) making customers Wait (queue)
- The triangle: any increase in one buffer reduces the need for others — but each has a different cost and strategic implication
- Excess capacity: always available, never lost sales, but expensive (idle cost)
- Inventory: works for tangible goods, allows smooth production, but ties up working capital and can become obsolete
- Waiting/queuing: free from a production standpoint, but customers may defect; damages service perception
- Strategic choice: which buffer fits your business strategy? A luxury hotel (high willingness-to-wait) differs from an emergency room (must have capacity) or a commodity manufacturer (inventory works fine)

**Cross-refs:** `Capacity Sizing`, `Capacity Timing`, `Dedicated vs. Flexible`

---

### Subtopic 7: Capacity Type — Dedicated vs. Flexible
**id:** `dedicated-vs-flexible`
**Source:** Class 4 notes — Dedicated vs. Flexible intro section

**Must include:**
- The spectrum: from fully dedicated (one product, low cost, high efficiency) to fully flexible (any product, higher cost, lower efficiency)
- Dedicated capacity: optimal for high-volume, stable, predictable demand; lower variable cost; higher fixed cost to convert
- Flexible capacity: handles multiple products/demand types; pooled across products; more expensive to build and operate
- Why flexibility is costly: flexible equipment requires more complex tooling, setup time, and changeover capability
- The key question: does the value of flexibility (ability to respond to uncertainty) exceed its cost?
- Eli Lilly case preview: they had to choose between dedicated facilities ($94M, $7.27/kg) vs. flexible ($115M, $8.07/kg) — the analysis required comparing NPVs across demand scenarios

**Cross-refs:** `4 Sources of Flexibility Value`, `3 Types of Flexibility`, `Eli Lilly (Case)`

---

### Subtopic 8: 4 Sources of Flexibility Value
**id:** `4-sources-flexibility`
**Source:** Class 4 notes — Sources of Flexibility Value section

**Must include:**
- All 4 sources, each explained with strategic intuition:
  1. **Scale flexibility:** ability to ramp up/down production volume quickly (responds to aggregate demand swings)
  2. **Risk pooling:** combining variable demands across products/markets so they partially cancel out; reduces total variability
  3. **Information updating:** ability to delay production commitment until better demand info is available
  4. **Contingent resource allocation:** ability to dynamically shift capacity toward the highest-value use as conditions change
- **Risk pooling formula** in a formula-wrap box:
  ```
  σ_pool ≤ σ₁ + σ₂
  ```
  And for independent demands: `σ_pool = √(σ₁² + σ₂²)` which is less than σ₁ + σ₂
  Intuition: when demands are not perfectly correlated, combining them in one flexible system reduces total variance — the flexible system needs less capacity buffer than two dedicated systems combined
- The "portfolio effect" analogy from finance: diversification reduces risk; flexible capacity does the same for operations

**Cross-refs:** `Dedicated vs. Flexible`, `3 Types of Flexibility`, `Resource Chaining`

---

### Subtopic 9: 3 Types of Flexibility
**id:** `3-types-flexibility`
**Source:** Class 4 notes — Types of Flexibility section

**Must include:**
- All 3 types:
  1. **Scope flexibility (Mix flexibility):** ability to produce a wide variety of products/services using the same system — how many different things can you make?
  2. **Agility (Volume/Speed flexibility):** ability to ramp up or down production quickly in response to demand changes — how fast can you respond?
  3. **Robustness:** ability to maintain performance across a wide range of operating conditions — how stable is your output quality/cost across scenarios?
- How they relate to the four capability dimensions: Scope → Flexibility; Agility → Lead-Time; Robustness → Quality consistency
- Trade-offs between types: a highly agile system (quick changeover) may sacrifice robustness (consistency); a robust system may lack scope
- Design implication: which type of flexibility matters for your business strategy? Variety-competing firms need scope; responsiveness-competing firms need agility

**Cross-refs:** `4 Sources of Flexibility Value`, `Dedicated vs. Flexible`, `Product Design for Flexibility`

---

## Verification Checklist

- [ ] File defines `const TOPIC_RESOURCES_A` at global scope
- [ ] `subtopics` array has exactly 9 items
- [ ] Every subtopic with a formula uses `formula-wrap` + `formula-explain` with an explicit **Intuition:** paragraph
- [ ] Every subtopic has at least one `insight-box`
- [ ] Every subtopic has cross-reference link-tags at the bottom
- [ ] Template literals are properly closed
- [ ] Loading study-map.html shows the Resources A topic block with all 9 cards

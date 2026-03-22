# PRD-06: Process Decisions — Supply (Strategic Sourcing & Contracts)

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/process-supply.js` — 7 subtopics covering all Strategic Sourcing and Contract content from Class 6 (supply side).

**Architecture:** Single JS file defining `const TOPIC_PROCESS_SUPPLY`.

**Prerequisite:** PRD-01 must be complete.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\process-supply.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\06_Class_6_Notes.md` (supply/sourcing sections — skip revenue management sections)

---

## Steps

- [ ] **Step 1: Read Class 6 notes — focus on all sections covering strategic sourcing, make-or-buy, TCO, sourcing spectrum, single vs. multi-sourcing, contract types, and Toyota CCC21**
- [ ] **Step 2: Write `data/process-supply.js`**
- [ ] **Step 3: Verify in browser** — "Strategic Sourcing & Contracts" block should appear with 7 cards.

---

## Output Format

```js
const TOPIC_PROCESS_SUPPLY = {
  id: 'process-supply',
  eyebrow: 'Class 6 · Process Decisions (Supply)',
  title: 'Strategic Sourcing & Contracts',
  icon: '🔗',
  desc: 'Sourcing spectrum · TCO · Make-or-buy · Contract types · CCC21',
  subtopics: [ /* 7 subtopics */ ]
};
```

---

## Subtopic Specifications

### Subtopic 1: Strategic Sourcing — Definition & Scale of Impact
**id:** `strategic-sourcing`
**Source:** Class 6 notes — Strategic Sourcing intro section

**Must include:**
- Definition: the systematic process of identifying, evaluating, and managing suppliers to optimize the total value of goods and services acquired
- Scale of impact: sourcing/procurement represents approximately **60% of COGS** (cost of goods sold) in many manufacturing industries — this makes it the single largest cost lever in operations
- Why it's "strategic" (not just purchasing): sourcing decisions affect quality, innovation capacity, supply chain resilience, and competitive differentiation — not just purchase price
- The make-or-buy distinction: every component, service, or capability is either made in-house (vertical integration) or bought from the market — this is the fundamental sourcing question
- Connection to OS framework: sourcing is one of the 4 Process decisions — it determines which activities are in your activity network vs. outsourced

**Cross-refs:** `Sourcing Spectrum`, `5-Question Framework`, `TCO`

---

### Subtopic 2: Sourcing Spectrum
**id:** `sourcing-spectrum`
**Source:** Class 6 notes — Sourcing Spectrum / Make-or-Buy spectrum section

**Must include:**
- The spectrum from pure market to full integration:
  1. **Market Buy (Spot Market):** buy from the open market, no ongoing relationship — maximum flexibility, no commitment, but no preferential treatment, no information sharing
  2. **Long-Term Relationship (Partnership):** ongoing relationship with one or a few suppliers — information sharing, joint process improvement, volume commitments in exchange for favorable pricing and priority
  3. **Vertical Integration:** bring the supplier activity in-house — full control, captured margin, but requires capital, management attention, and carries risk if the activity is not a core competency
- Pros and cons of each:
  - Market buy: flexible but exposes you to price volatility and supply disruptions
  - LTR: stability and improvement opportunities but reduces flexibility and creates dependency
  - VI: maximum control but maximum investment; misses out on supplier's scale economies and specialization
- The trend: many firms over-integrated in the 1970s-80s; outsourcing wave in the 1990s; now reconsidering "strategic reshoring" for resilience

**Cross-refs:** `Strategic Sourcing`, `5-Question Framework`, `TCO`

---

### Subtopic 3: 5-Question Decision Framework (Make-or-Buy)
**id:** `make-or-buy-framework`
**Source:** Class 6 notes — Make-or-Buy Decision Framework section

**Must include:**
- The 5 questions to ask when deciding whether to make or buy:
  1. **Is it feasible to outsource?** Do capable suppliers exist? Are there technology barriers? IP risks?
  2. **Is it necessary to make in-house?** Is this activity so core to competitive advantage that it must stay internal?
  3. **Does it align with strategic direction?** Is this activity in our intended scope? Does it distract from core focus?
  4. **What is the total cost?** TCO of making vs. buying (see TCO subtopic) — including hidden costs
  5. **What type of relationship is appropriate?** If buying, should it be spot market, long-term contract, or partnership?
- The key principle: don't outsource activities that are strategically critical, proprietary, or that provide learning opportunities that feed future innovation
- The risk of over-outsourcing: losing capabilities that are hard to rebuild; creating dependency on suppliers who may become competitors

**Cross-refs:** `Strategic Sourcing`, `Sourcing Spectrum`, `TCO`

---

### Subtopic 4: TCO — Total Cost of Ownership
**id:** `tco`
**Source:** Class 6 notes — TCO section

**Must include:**
- Definition: the true cost of a procurement decision, including ALL costs beyond the purchase price
- What TCO includes beyond purchase price:
  - **Transportation & logistics costs:** freight, insurance, handling
  - **Inventory carrying costs:** safety stock required due to longer lead times (offshore suppliers require more safety stock)
  - **Quality costs:** inspection, rework, defect management — a cheap supplier with poor quality may cost more in total
  - **Supply chain disruption risk:** probability × cost of supply interruptions (especially for offshore sourcing)
  - **Transition costs:** cost to switch suppliers if needed
  - **Coordination and management costs:** time managing the supplier relationship
  - **Tariffs and duties:** government-imposed costs on imported goods
- The TCO insight: offshore manufacturing often looks cheaper on unit cost but may have higher TCO once all factors are included — this is why Total Landed Cost analysis is essential for location decisions
- Connection to RM: the "displacement cost" concept has an analog here — the true cost of a sourcing choice includes opportunity costs and downstream effects

**Cross-refs:** `Sourcing Spectrum`, `Strategic Sourcing`, `6 Location Drivers (Class 5)`

---

### Subtopic 5: Single vs. Multi-Sourcing
**id:** `single-vs-multi-sourcing`
**Source:** Class 6 notes — Single vs. Multiple Sourcing section

**Must include:**
- **Single-source:** buy entirely from one supplier
  - Pros: deeper relationship, better information sharing, supplier invests more in your specific needs, volume leverage for better pricing
  - Cons: creates dependency, single point of failure (supply disruption risk), limits competitive pressure on supplier
- **Multi-source:** split volume across two or more suppliers
  - Pros: competitive tension keeps prices lower, supply chain redundancy (resilience), ability to compare quality/service
  - Cons: dilutes volume leverage, harder to build deep relationships with each supplier, more management complexity
- The strategic tension: single-sourcing aligns with "preferred partnership" model (Toyota's approach); multi-sourcing aligns with adversarial/market model
- When to single-source: when supplier is truly superior and relationship is strategic; when product is highly specialized
- When to multi-source: for commodity components; when supply disruption risk is high; to maintain competitive pressure

**Cross-refs:** `Sourcing Spectrum`, `Strategic Sourcing`, `Toyota CCC21 (Case)`

---

### Subtopic 6: Contract Types
**id:** `contract-types`
**Source:** Class 6 notes — Contract Types section

**Must include:**
- All 5 major contract types, each with mechanism and strategic use:
  1. **Quantity Discount Contract:** supplier charges lower per-unit price above a volume threshold — aligns buyer incentive to order in bulk; helps supplier plan production
  2. **Quantity Flexibility Contract:** buyer commits to a base volume; can adjust up or down within a band without penalty — shares demand uncertainty risk between buyer and supplier
  3. **Buyback Contract:** supplier agrees to buy back unsold inventory from retailer at a fixed price — enables retailer to order more aggressively; supplier takes on some demand risk in exchange for higher orders
  4. **Revenue Sharing Contract:** buyer pays a lower wholesale price; shares a percentage of actual revenues with supplier — aligns supplier incentive with buyer's sales performance; used in video rental (Blockbuster/studios)
  5. **Options Contract:** buyer pays an upfront premium to reserve the right (but not obligation) to purchase a specified quantity at a fixed price — buyer gets flexibility to scale up if demand is high; supplier gets guaranteed income
- The key insight: different contract types shift risk between buyer and supplier — each party can manage the risk they're better positioned to bear
- Connection to capacity reservation: the Solectron "capacity option" contract is essentially an options contract applied to manufacturing capacity

**Cross-refs:** `Strategic Sourcing`, `Sourcing Spectrum`, `Capacity Reservation (Class 6 Demand)`

---

### Subtopic 7: Toyota CCC21 Case
**id:** `toyota-ccc21`
**Source:** Class 6 notes — Toyota CCC21 / collaborative redesign section

**Must include:**
- Background: Toyota's "Construction of Cost Competitiveness for the 21st Century" — a massive collaborative supplier cost-reduction program launched in 2000
- Mechanism: Toyota worked WITH suppliers (not against them) to redesign parts, simplify designs, and reduce waste — not just squeeze supplier margins
- Results: saved approximately **$8.68 billion** in procurement costs over several years
- Key lessons:
  1. **Collaborative vs. adversarial sourcing:** Toyota shared engineering expertise and design ideas with suppliers rather than just demanding price cuts
  2. **Design for manufacturability (DFM):** part redesign — simplifying geometries, reducing part count — was the primary cost lever, not labor rate arbitrage
  3. **Long-term relationship enables investment:** suppliers invested in process improvements because they trusted the relationship would continue
  4. **Cost transparency:** Toyota required detailed cost breakdowns from suppliers, enabling joint identification of waste — this requires trust
- This case exemplifies why strategic sourcing is different from commodity purchasing: the relationship IS part of the value creation

**Cross-refs:** `Strategic Sourcing`, `Sourcing Spectrum`, `Single vs. Multi-Sourcing`, `Concurrent Engineering (Class 7)`

---

## Verification Checklist

- [ ] File defines `const TOPIC_PROCESS_SUPPLY` at global scope
- [ ] `subtopics` array has exactly 7 items
- [ ] Toyota CCC21 subtopic includes the $8.68B figure and explains the mechanism
- [ ] Contract Types subtopic clearly lists and explains all 5 contract types
- [ ] TCO subtopic lists all components beyond purchase price
- [ ] Every subtopic has at least one `insight-box` and cross-reference tags
- [ ] Loading study-map.html shows the Strategic Sourcing block with 7 cards

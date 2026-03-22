# PRD-05: Process Decisions — Demand (Revenue Management)

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/process-demand.js` — 8 subtopics covering all aspects of Revenue Management from Class 6 (demand side).

**Architecture:** Single JS file defining `const TOPIC_PROCESS_DEMAND`.

**Prerequisite:** PRD-01 must be complete.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\process-demand.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\06_Class_6_Notes.md` (demand sections only — skip supply/sourcing sections)

---

## Steps

- [ ] **Step 1: Read Class 6 notes — focus on all sections covering Revenue Management, pricing, Littlewood's Rule, overbooking, and the Newsvendor applied to capacity**
- [ ] **Step 2: Write `data/process-demand.js`**
- [ ] **Step 3: Verify in browser** — "Revenue Management & Pricing" topic block should appear with 8 cards.

---

## Output Format

```js
const TOPIC_PROCESS_DEMAND = {
  id: 'process-demand',
  eyebrow: 'Class 6 · Process Decisions (Demand)',
  title: 'Revenue Management & Pricing',
  icon: '📈',
  desc: 'Revenue management · Price discrimination · Littlewood\'s Rule · Overbooking · Newsvendor',
  subtopics: [ /* 8 subtopics */ ]
};
```

---

## Subtopic Specifications

### Subtopic 1: Revenue Management — Definition & Conditions
**id:** `revenue-management`
**Source:** Class 6 notes — Revenue Management intro section

**Must include:**
- Definition: "The collection of demand management practices that aim to maximize the revenue from especially limited and perishable available supply"
- Three conditions under which RM is valuable:
  1. **Capacity is fixed and perishable:** you can't store unsold airline seats or hotel nights — capacity lost is lost revenue forever
  2. **Demand is heterogeneous:** different customers have different willingness to pay — price segmentation creates value
  3. **Demand arrives over time:** early bookers may have different WTP than late bookers; managing the booking window matters
- Two control levers:
  1. **Price controls:** vary the price to sort customers by WTP (price discrimination, dynamic pricing)
  2. **Capacity controls:** vary who gets access to limited capacity (protection levels, overbooking, yield management)
- Examples: airlines, hotels, car rentals, sporting events — all classic RM domains

**Cross-refs:** `Price Customization`, `Capacity Segmentation`, `Littlewood's Rule`, `Overbooking`

---

### Subtopic 2: Price Customization — 1st & 2nd Degree Price Discrimination
**id:** `price-customization`
**Source:** Class 6 notes — Price Discrimination / Customization section

**Must include:**
- Goal: capture consumer surplus by charging each customer closer to their maximum WTP
- **1st Degree (Perfect) Price Discrimination:** charge each customer their exact WTP — captures all consumer surplus; requires perfect information; rarely achievable in practice
- **2nd Degree Price Discrimination:** offer different price-quantity bundles and let customers self-select — e.g., bulk discounts, versioning (economy vs. business class), bundling
- **Fences:** barriers that prevent customers from accessing a cheaper tier they shouldn't qualify for:
  - Physical fences: non-refundable tickets, Saturday-night stay requirements
  - Temporal fences: advance purchase discounts, last-minute pricing
  - Customer-based fences: student/senior discounts, loyalty program tiers
- **Fare classes:** airlines' main RM tool — multiple price classes for the same seat (Y, B, M, Q, etc.) with different restrictions; revenue system manages how many seats to offer in each class

**Cross-refs:** `Dynamic Pricing`, `Capacity Segmentation`, `Revenue Management`

---

### Subtopic 3: Dynamic Pricing
**id:** `dynamic-pricing`
**Source:** Class 6 notes — Dynamic Pricing section

**Must include:**
- Definition: adjusting prices over time in response to demand conditions, remaining capacity, and time to service date
- Three common applications:
  1. **Markdowns:** systematically reduce price as time passes (fashion retail — discount unsold inventory at end of season rather than waste it)
  2. **Promotions:** temporary price reductions to stimulate demand in low periods (off-peak airline pricing, happy hour)
  3. **Peak-load pricing:** higher prices during high-demand periods, lower during off-peak — shifts demand from congested to uncongested times (electricity tariffs, Uber surge pricing)
- Strategic logic: different customers book/buy at different times and have different price sensitivity — dynamic pricing sorts them
- Operational challenge: requires real-time demand monitoring and pricing systems
- Customer fairness concerns: a major obstacle — customers perceive dynamic pricing as unfair ("Why am I paying $400 more than the person next to me?")

**Cross-refs:** `Price Customization`, `Revenue Management Obstacles`, `Capacity Segmentation`

---

### Subtopic 4: Capacity Segmentation — Protection Levels & Booking Limits
**id:** `capacity-segmentation`
**Source:** Class 6 notes — Capacity Controls / Protection Levels section

**Must include:**
- The core problem: if you sell all seats to low-fare customers early (they book first), you have nothing left for high-fare customers who book later
- **Protection level (y₁):** the number of seats held back (protected) from low-fare customers, reserved for high-fare demand — "don't sell this seat to a low-fare customer even if the flight is still half-empty"
- **Booking limit (b₂):** the maximum number of seats you'll sell to low-fare customers — `b₂ = Total capacity − y₁`
- **Displacement cost:** the expected revenue lost by selling to a low-fare customer now instead of waiting for a high-fare customer later — the opportunity cost of filling the seat early
- Displacement cost logic: selling to fare class 2 at price r₂ only makes sense if r₂ ≥ displacement cost = probability that a high-fare customer arrives × r₁

**Cross-refs:** `Littlewood's Rule`, `Revenue Management`, `Price Customization`

---

### Subtopic 5: Littlewood's Rule
**id:** `littlewoods-rule`
**Source:** Class 6 notes — Littlewood's Rule section; CONCEPTUAL_MAP.md formulas table

**Must include:**
- Context: airline has two fare classes (high = class 1, price r₁; low = class 2, price r₂ < r₁). Low-fare customers book first. How many seats should be protected for high-fare customers?
- **Littlewood's Rule formula** in a formula-wrap box:
  ```
  Protect seats for class 1 as long as:  P(D₁ > x) ≥ r₂ / r₁
  ```
  Variables: P(D₁ > x) = probability that high-fare demand exceeds x (the protection level), r₁ = high fare, r₂ = low fare
  Optimal protection level y₁* is the x where this holds with equality: `P(D₁ > y₁*) = r₂ / r₁`
  Intuition: protect the seat only if the probability of selling it at the high fare exceeds the ratio of low to high fare. If r₂/r₁ = 0.4 and P(D₁>x) = 0.6, protect it — expected value of waiting (0.6 × r₁) > certain value now (r₂). If P(D₁>x) drops below 0.4, stop protecting.
- **Worked example (2-class):** r₁ = $400, r₂ = $150 → ratio = 0.375. If demand D₁ ~ Uniform[0,100]: protect seats while P(D₁>x) ≥ 0.375 → (100-x)/100 ≥ 0.375 → x ≤ 62.5 → y₁* = 63 seats protected.
- **3-class extension:** apply Littlewood iteratively from lowest fare upward — at each step, the "displacement cost" of a lower class is the expected revenue from all higher classes above it. Nest the protection levels.

**Cross-refs:** `Capacity Segmentation`, `Overbooking`, `Revenue Management`

---

### Subtopic 6: Overbooking
**id:** `overbooking`
**Source:** Class 6 notes — Overbooking section

**Must include:**
- Why overbook: some customers with confirmed reservations don't show up ("no-shows") — if you don't overbook, you fly with empty seats despite a "full" flight
- The marginal analysis approach:
  - Marginal benefit of one more booking: revenue from that customer (r), weighted by probability they actually show up
  - Marginal cost of one more booking: probability that ALL booked customers show up × cost of denying boarding (bumping cost, Cb)
- **Optimal overbooking formula** in a formula-wrap box:
  ```
  Overbook until:  P(all show up with extra booking) × Cb = r
  Equivalently:    P(no-show occurs) = r / Cb
  ```
  Or: Accept booking #(C+k) when expected revenue ≥ expected bumping cost
  Intuition: overbook as long as the revenue gained from filling what would otherwise be an empty seat exceeds the expected cost of bumping someone. High bumping cost (expensive compensation) = less overbooking. Low show-up rate = more overbooking.
- **Worked example:** Flight capacity = 100, fare = $200, bumping cost = $800. No-show probability per passenger = 10%. Optimal overbook level: accept bookings until P(need to bump) × $800 = $200, i.e., P(need to bump) = 0.25 → accept up to ~111 bookings (derive from no-show distribution).
- Obstacles: customer anger when bumped; regulatory limits on bumping compensation

**Cross-refs:** `Littlewood's Rule`, `Revenue Management`, `Revenue Management Obstacles`

---

### Subtopic 7: Capacity Reservation — Newsvendor Applied to Capacity (Solectron)
**id:** `capacity-reservation`
**Source:** Class 6 notes — Capacity Reservation / Solectron section

**Must include:**
- Context: Solectron (contract electronics manufacturer) must commit to capacity BEFORE knowing exact customer orders — applies the newsvendor framework to capacity reservation decisions
- The parallel to newsvendor: reserving too much capacity = overage cost (idle capacity); reserving too little = underage cost (lost revenue, customer defection)
- **Critical Ratio application:**
  ```
  P(D ≤ Q*) = Cu / (Cu + Co)
  ```
  Applied to capacity: Q* = optimal capacity to reserve, Cu = cost of having too little (lost margin per unit), Co = cost of having too much (reservation fee for unused capacity)
- The Solectron insight: capacity contracts — paying a reservation fee to hold capacity options — are valuable when demand is uncertain. The reservation price is the "option premium."
- Connection to flexibility: this is essentially buying an option on capacity — the option value framework from Class 3 applies here too

**Cross-refs:** `Capacity Sizing (Class 3)`, `Option Value of Waiting (Class 3)`, `Contract Types (Class 6 Supply)`

---

### Subtopic 8: Revenue Management Obstacles
**id:** `rm-obstacles`
**Source:** Class 6 notes — RM Obstacles / Limitations section

**Must include:**
- Three main obstacles to implementing RM:
  1. **Data and system requirements:** RM requires real-time demand tracking, historical forecasting, and automated pricing/booking systems — expensive to build and maintain
  2. **Competitive arms race:** if all competitors adopt RM, the gains are competed away — everyone optimizes simultaneously, narrowing margins industry-wide (e.g., all airlines overbooking)
  3. **Customer fairness concerns:** customers who discover they paid more than the person next to them feel cheated — damages brand trust and loyalty. More acute when the price difference is large and the "fence" is invisible.
- Strategic implication: RM is most valuable when (1) you have better data/systems than competitors, (2) demand heterogeneity is large, and (3) you can make price differences feel "fair" through transparent fences

**Cross-refs:** `Revenue Management`, `Dynamic Pricing`, `Price Customization`

---

## Verification Checklist

- [ ] File defines `const TOPIC_PROCESS_DEMAND` at global scope
- [ ] `subtopics` array has exactly 8 items
- [ ] Littlewood's Rule has a formula-wrap box with the formula, variables, intuition, AND a worked numerical example
- [ ] Overbooking has a formula-wrap box with worked example
- [ ] Every subtopic has at least one `insight-box` and cross-reference tags
- [ ] Loading study-map.html shows the Revenue Management block with 8 cards

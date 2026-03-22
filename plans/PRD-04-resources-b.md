# PRD-04: Resource Decisions — Part B (Flexibility Design & Location)

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan.

**Goal:** Write `data/resources-b.js` — 8 subtopics covering Product Design for Flexibility, Process Configurations, Resource Chaining, Mass Customization, Location Drivers, Network Design, Location Frameworks, and Ferdows' 6 Roles.

**Architecture:** Single JS file that defines `const TOPIC_RESOURCES_B`.

**Prerequisite:** PRD-01 must be complete.

---

## Files

- **Create:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\data\resources-b.js`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\04_Class_4_Notes.md`
- **Read:** `C:\Users\Conno\OneDrive\Desktop\DOS Exam Prep\Study Notes\05_Class_5_Notes.md`

---

## Steps

- [ ] **Step 1: Read both source files completely**
- [ ] **Step 2: Write `data/resources-b.js`**
- [ ] **Step 3: Verify in browser** — Resources B topic block should appear with 8 subtopic cards.

---

## Output Format

```js
const TOPIC_RESOURCES_B = {
  id: 'resources-b',
  eyebrow: 'Classes 4–5 · Resource Decisions (Part B)',
  title: 'Capacity: Flexibility Design & Location',
  icon: '🗺️',
  desc: 'Chaining · Mass customization · Location drivers · Network design · Ferdows\' 6 roles',
  subtopics: [ /* 8 subtopics */ ]
};
```

---

## Subtopic Specifications

### Subtopic 1: Product Design for Flexibility
**id:** `product-design-flexibility`
**Source:** Class 4 notes — Product Design for Flexibility section

**Must include:**
- The core idea: product architecture decisions can dramatically increase or decrease the flexibility of your manufacturing system — this is a *design* lever, not just an operations lever
- Three approaches:
  1. **Component commonality / platform strategy:** design products to share common components across variants — reduces the number of unique parts, enabling one flexible line to serve many SKUs. Example: Toyota platform sharing across models.
  2. **Modular design:** products are composed of independent modules that can be mixed and matched — enables postponement (customize late), reduces dedicated tooling
  3. **Adaptable design:** design products that can be easily modified or upgraded — reduces need for entirely new production lines when product evolves
- Why this matters strategically: product design decisions happen BEFORE production — they lock in or unlock flexibility for years. A poorly-designed product can make flexibility impossible to achieve at any cost.

**Cross-refs:** `Process Design for Flexibility`, `Mass Customization`, `3 Types of Flexibility`

---

### Subtopic 2: Process Design for Flexibility — 5 Configurations
**id:** `process-design-flexibility`
**Source:** Class 4 notes — Process Configurations / 5 Configurations section

**Must include:**
- All 5 process configurations for achieving flexibility, in order from least to most integrated:
  1. **Dedicated lines:** separate dedicated equipment for each product — lowest flexibility, lowest cross-product cost, highest specialization
  2. **Sharing:** one flexible resource shared across multiple products/processes — pooling demand reduces total capacity needed (risk pooling applies)
  3. **Substitution:** one resource can substitute for another if the primary is overloaded or unavailable — partial flexibility, targeted at bottleneck risk
  4. **Transshipment:** ability to move inventory/WIP between facilities or locations to balance load — geographic pooling rather than resource pooling
  5. **Postponement:** delay product differentiation as late as possible in the production process — maximum flexibility is maintained until the last moment
- The flexibility-efficiency trade-off: more flexibility = higher setup and switching costs; less flexibility = lower cost but more vulnerability to demand shifts
- Which configuration fits which strategy: postponement suits high-variety/unpredictable demand; dedicated suits high-volume/stable demand

**Cross-refs:** `Product Design for Flexibility`, `Resource Chaining`, `Mass Customization`

---

### Subtopic 3: Resource Chaining
**id:** `resource-chaining`
**Source:** Class 4 notes — Resource Chaining / "long chain" section

**Must include:**
- The key insight: "a little flexibility goes a long way" — a LONG CHAIN of partially flexible resources captures most of the value of full flexibility, at a fraction of the cost
- Full flexibility: every resource can serve every demand — most flexible, but very expensive (high capital cost, high complexity)
- Long chain: each resource is flexible in TWO directions (can serve its neighbor on each side) — creates a chain that, while not fully flexible, can reroute work around any single failure or overload
- **Design rules** for effective chaining:
  1. Form one long chain rather than multiple short chains — a single long chain covers more scenarios
  2. Balance chain links — don't create bottlenecks in the chain
  3. The "little goes a long way" principle: going from 0% flexible to ~10-20% flexible captures the vast majority of flexibility value; going from 80% to 100% adds little
- Graphical intuition: plot flexibility value (y) vs. flexibility investment (x) — concave curve; steep initial gains, diminishing returns

**Cross-refs:** `4 Sources of Flexibility Value`, `Process Design for Flexibility`, `Dedicated vs. Flexible`

---

### Subtopic 4: Mass Customization
**id:** `mass-customization`
**Source:** Class 4 notes — Mass Customization section

**Must include:**
- Definition: the ability to produce customized products at near-mass-production cost and speed — combining the variety of job shop with the efficiency of a repetitive line
- Three enabling technologies/strategies:
  1. **Modular product architecture:** products assembled from standard modules in many combinations — customization happens at assembly, not manufacturing
  2. **Flexible automation / CNC:** computer-controlled equipment that can be rapidly reprogrammed for different products without physical retooling
  3. **Postponement:** manufacture to a generic/common intermediate stage; differentiate only after receiving the customer order
- Prerequisite conditions: (1) product can be modularized, (2) demand is predictable at the module level even if unpredictable at the final-product level, (3) customers value variety more than extreme customization
- Strategic position: the ideal is to occupy a "zone" on the PPM diagonal that blends batch/line processes with high variety — formerly impossible, now achievable with the right design

**Cross-refs:** `Product Design for Flexibility`, `PPM (Class 1)`, `3 Types of Flexibility`

---

### Subtopic 5: 6 Location Drivers
**id:** `6-location-drivers`
**Source:** Class 5 notes — Location Drivers section

**Must include:**
- All 6 categories with examples and strategic implications:
  1. **Cost factors:** land, labor, construction, utilities, taxes — traditional driver; especially important for labor-intensive products; lower-cost regions attract offshore manufacturing
  2. **Market access / proximity to customers:** reduce transportation cost, lead time, and tariff barriers; critical for perishable goods, heavy goods, or markets requiring local presence
  3. **Resource access / proximity to inputs:** natural resources, raw materials, specialized skills/talent — drives mining, refining, high-tech clusters
  4. **Infrastructure quality:** ports, roads, airports, telecom, power reliability — affects operational feasibility and logistics cost
  5. **Political and regulatory environment:** trade agreements, tariffs, IP protection, ease of doing business, political stability — affects risk and total landed cost
  6. **Competitive factors / agglomeration:** proximity to competitors (Hotelling effect), industry clusters (Silicon Valley, Detroit), access to shared supplier networks
- The Total Landed Cost (TLC) concept: true cost of a location includes all transportation, tariffs, inventory carrying cost, and supply chain risk — not just factory wage rates

**Cross-refs:** `3 Network Design Choices`, `TLC & Location Frameworks`, `Ferdows' 6 Roles`

---

### Subtopic 6: 3 Network Design Choices
**id:** `3-network-design-choices`
**Source:** Class 5 notes — Network Design / Strategic Choices section

**Must include:**
- The three fundamental binary choices in network design:
  1. **Centralized vs. Distributed:** one large hub facility vs. many smaller regional facilities. Centralized: economies of scale, easier coordination, risk pooling. Distributed: proximity to markets, lower transportation cost/lead time, redundancy.
  2. **Separated vs. Integrated (across value chain stages):** separate R&D/design from manufacturing from distribution vs. co-locate them. Separation allows specialization and cost optimization per stage. Integration enables learning, faster product-process iteration (concurrent engineering), and tighter coordination.
  3. **Standardized vs. Localized:** use one global standard process/product vs. adapt to local markets. Standardized: scale economies, brand consistency, simpler management. Localized: fit to local tastes, regulations, and conditions.
- The interaction: these three choices combine to create very different network configurations — e.g., a global firm might centralize R&D (integrated, centralized), distribute final assembly (distributed, localized), and standardize its platform (standardized)

**Cross-refs:** `6 Location Drivers`, `Economies of Scale`, `Ferdows' 6 Roles`

---

### Subtopic 7: 4 Location Analysis Frameworks
**id:** `4-location-frameworks`
**Source:** Class 5 notes — Location Analysis Frameworks / TLC section

**Must include:**
- All 4 frameworks:
  1. **Total Landed Cost (TLC):** comprehensive cost analysis that adds purchase price + transportation + tariffs + inventory carrying cost + supply chain disruption risk. Key insight: a "cheap" factory far away may have higher TLC than a nearby factory with higher wages.
  2. **Network Analysis:** optimize the location and number of facilities simultaneously using demand data, transportation costs, and capacity constraints. Tools: center-of-gravity models, integer programming.
  3. **Competitive Analysis — Hotelling's Model:** when competitors locate near each other, they compete for the same customers rather than differentiating geographically. Hotelling showed that rational competitors converge on the center (median customer) even when dispersal would be socially optimal. Implication: watch where competitors locate — there may be strategic reasons to cluster or to differentiate.
  4. **Facility Role Analysis — Ferdows' Model:** not all facilities serve the same purpose; a plant's role (offshore vs. lead factory) determines what capabilities it should develop. (See next subtopic for detail.)

**Cross-refs:** `6 Location Drivers`, `3 Network Design Choices`, `Ferdows' 6 Roles`

---

### Subtopic 8: Ferdows' 6 Strategic Facility Roles
**id:** `ferdows-6-roles`
**Source:** Class 5 notes — Ferdows section

**Must include:**
- The 2×3 matrix structure: two axes — (1) Strategic Reason for the Site (access to low-cost production, access to skills/knowledge, proximity to market) × (2) Scope of Activities (just production vs. production + development + sourcing decisions)
- All 6 roles:
  1. **Offshore:** low-cost production only, tightly managed from HQ — no local autonomy, no R&D. Typical early stage of offshoring.
  2. **Source:** low-cost production WITH global sourcing and process improvement mandate — more autonomy, manages its own supply chain
  3. **Server:** close to a regional market, serves that market's demand — some local adaptation, limited strategic autonomy
  4. **Contributor:** serves regional market AND has development/engineering capability — can develop products for local market
  5. **Outpost:** near a knowledge cluster (e.g., Silicon Valley, Stuttgart) to gather information and talent — small, focused on intel gathering and R&D
  6. **Lead:** global strategic mandate — develops products, processes, and technologies for the entire company; highest capability and autonomy
- Plant evolution: plants can and should evolve from lower to higher roles as they develop capabilities. "Strategic migration" — moving a plant from Offshore to Source or from Server to Lead — is a key OS decision.
- Why this matters: treating all plants as "Offshore" misses the strategic value that factories with deep local knowledge can provide

**Cross-refs:** `6 Location Drivers`, `3 Network Design Choices`, `4 Location Frameworks`, `Moderna (Case)`

---

## Verification Checklist

- [ ] File defines `const TOPIC_RESOURCES_B` at global scope
- [ ] `subtopics` array has exactly 8 items
- [ ] Ferdows' 6 Roles subtopic clearly names and explains all 6 roles
- [ ] TLC concept is explained in the 4 Location Frameworks subtopic
- [ ] Every formula (σ_pool if referenced) uses `formula-wrap` with Intuition
- [ ] Every subtopic has at least one `insight-box` and cross-reference tags
- [ ] Loading study-map.html shows Resources B block with 8 cards

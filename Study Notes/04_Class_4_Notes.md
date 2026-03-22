# Class 4: Types of Resources, Capacity Flexibility, and the Eli Lilly Case

---

## Learning Objectives

1. Describe the benefits and challenges of different types of capacity and flexibility
2. Describe how flexibility can be achieved through product and process design and mass customization
3. Tailor and optimize the capacity portfolio of a multi-product firm in a spreadsheet (Eli Lilly case study)

---

## 1. Types of Resources and Capacity

### Two Key Dimensions of Resource Classification

#### Dimension 1: Degree of Flexibility (Generalized vs. Specialized/Dedicated)
- **Specialized (Dedicated)**: Designed for a specific product or task
  - Benefit: efficiency and effectiveness (focus improves OE -- Operational Efficiency)
  - Example: Brain surgeon (highly specialized labor), Ford's Model T assembly line (highly specialized capital)
- **Generalized (General-purpose)**: Can handle many different products or tasks
  - Benefit: endless flexibility
  - Example: General Practitioner (GP) doctor

#### Dimension 2: Degree of Automation (Labor vs. Capital)
- **Manual**: labor-intensive processes
- **Full Automated**: capital-intensive processes

### The Flexibility Spectrum
Flexible resources and capacity fall **somewhere in between** the extremes -- it is a spectrum and all about the trade-offs.

| | Manual | Automated |
|---|---|---|
| **Specialized** | Brain surgeon | Ford's Model T assembly line |
| **General** | GP (doctor) | Flexible manufacturing system (FMS) |

---

## 2. When Do We Need Capacity Flexibility?

### Strategic Alignment Reasons
Flexibility is needed when it offers alignment with your competitive positioning:
- **Speed to market** -- getting new products out quickly
- **Innovative products with short life cycles** -- flexibility allows quick adaptation
- **Wide variety, high levels of customization** -- serving diverse customer needs

### Efficiency Frontier Reasons
When flexibility brings you closer to the efficient frontier:
- Same level of variety or innovation at **lower cost**
- Higher level of variety or innovation at **same cost**

### Cost Comparison Reasons
When flexibility is **less expensive than excess capacity**:
- Use excess capacity if capacity is cheap; otherwise use flexibility
- **Important caveat**: You need sufficient capacity to take advantage of flexibility

### Demand Uncertainty Reasons
- When **demand uncertainties are high**
- When the **correlation between various demands is small or negative** (better pooling benefits)
- When **forecasts improve significantly with time** and flexibility allows postponement of production decisions (**information updating**)
- When **margins are different** across products (flexibility allocation allows allocating more capacity to higher-margin products)

---

## 3. How is Capacity Flexibility Valuable? (Four Sources of Value)

### Source 1: Economies of Scale (Aggregating Volumes)
- Even at higher investment costs and higher marginal production costs, a flexible facility can be **less expensive** than separate dedicated facilities (each with their own investment cost) for a set of **low-volume products**
- Flexibility consolidates volume across products, achieving scale economies in shared capacity

### Source 2: Risk Pooling (Aggregating Volatilities)
- Pool standard deviation: sigma_pool <= sigma_1 + sigma_2 (equality only when correlation = +1)
- Benefits:
  - **Reduced safety capacity** (if it was positive to start with)
  - **Increased service levels** (fewer expected shortfalls)
- Most effective when demand correlation is low or negative

### Source 3: Information Updating
- Flexibility allows the **delay of key decisions** and the collection of more information
- Example: The advantage of the "flexible then specialized" solution in the Eli Lilly case -- enables better go/no-go decisions and better sizing decisions for the specialized plant
- Related to the **option value of waiting** from Class 3

### Source 4: Flexibility Allocation (Contingent Decision-Making)
- Goes **beyond** risk pooling
- **Increased revenues** (fewer losses) and **reduced variance** in profits
- Example: If flexible capacity is insufficient to meet all demand, allocate it to the **most profitable products first**
- This is a form of revenue management / capacity allocation optimization

### Overall Conclusion
**Capacity flexibility makes variety and innovation more profitable.**

---

## 4. Benefits of Flexibility (at the Plant Level)

Flexibility is about the **ability to adopt change**. At the plant level, the objectives are:

### Three Types of Flexibility

| Type | Definition | Strategic Alignment |
|---|---|---|
| **Scope Flexibility** | Breadth of activities the plant can perform | Strategies emphasizing **variety and customization** |
| **Agility** | Speed of changeovers; could include scale flexibility | Competing on **speed and timeliness** |
| **Robustness** | Performance is uniform over the range of activities performed | Strategies emphasizing **cost and quality** |

Operations strategy tailors the appropriate type, amount, and configuration of flexibility for alignment.

---

## 5. Challenges of Flexibility

### Flexibility is Expensive and Difficult to Value
- Hard to quantify the financial benefits of flexibility
- Requires sophisticated analytical tools (e.g., option pricing, simulation)

### Flexibility is Not Well Understood
- Often unclear which features of a process must be changed to enhance flexibility
- Example: Computer integration is often **not** correlated with increased scope or agility in supply chains
- Operators can sometimes handle extreme demands without technological flexibility

### Flexibility is Driven More by People and Management Than by Equipment
- Plant flexibility can often be explained by **managerial action** rather than structural differences in processes
- **Scope flexibility typically decreases with scale** (bigger plants are harder to make flexible)
- **Agility is not correlated with scale**

### Flexibility is Not Always Used Appropriately
- FMS (Flexible Manufacturing Systems) promises have gone unfulfilled when not well used (Jaikumar 1986)
- Customer perception may preclude using flexibility:
  - **Jaguar X-type**: perceived as "not a real Jaguar" because it shared Ford's Mondeo platform
  - **Lexus ES300**: shared the Toyota Camry platform (similar perception risk)

---

## 6. Flexibility Through Product Design

### Three Approaches

#### 6.1 Standard or Universal Design (Component Commonality / Platform Sharing)
- One component can be used in 5 different models
- Allows production of variety (5 models) at lower cost, higher conformance quality, faster response time
- Reduces inventory complexity and enables risk pooling

#### 6.2 Modular Design
- Instead of one component, create **five different versions** of a component, but all fit in all 5 original models
- Creates 5 x 5 = **25 varieties** from relatively few modules
- Increases product variety **without large hits** in other competencies (cost, quality, lead time)

#### 6.3 Adaptable Design
- Product can be changed easily by designer/manufacturer, dealer, or customer to fit a variety of demands
- Example: **Software** -- updates and customization can happen post-production
- Allows mass customization at low cost

---

## 7. Flexibility Through Process Design

### Five Process Design Approaches

#### 7.1 Dedicated Facilities and Resources
- Simplest approach -- each product has its own dedicated capacity
- Diagram: D1 --> Dedicated K1, D2 --> Dedicated K2
- No pooling benefits

#### 7.2 Facility and Resource Sharing
- Common flexible capacity serves two (or more) products
- Diagram: D1 --> Flexible K_F <-- D2
- **Advantage (+)**: demand pooling
- **Disadvantage (-)**: cost of flexibility (higher per-unit investment)

#### 7.3 Facility and Resource Substitution
- One flexible asset and one dedicated asset
- Diagram: D1 --> Flexible K_F, D2 --> Dedicated K2 (with K_F also serving D2 if needed)
- **Key insight: "A little flexibility goes a long way"**
- Combines pooling power of flexible capacity with lower investment cost of dedicated capacity

#### 7.4 Transshipment
- Relocating assets/inventory between locations
- Diagram: Two dedicated capacities with transshipment links between them

#### 7.5 Postponement (Delayed Differentiation)
- Combines advantages of:
  - Product designs with **common components** and **differentiator modules**
  - A process where differentiating elements are added **at the end**
- Reduces time between product specification and delivery
- Diagram: Common K1 serves D1 first, then Flexible K_F adds differentiation for D2
- **Advantage (+)**: demand pooling for common component; short lead times for variety

---

## 8. Tailored Process Flexibility and Resource Chaining

### Key Principle
**Flexibility exhibits decreasing returns but increasing costs** -- so an **intermediate amount of flexibility maximizes value**.

### Resource Chaining
Capacity flexibility can be achieved through **resource chaining** (sharing and substitution in process design).

**Definition**: A **chain** is a group of plants and products connected via links.

**Important**: Flexibility is **more effective through long chains** than through short chains or isolated links.

### Three Configurations (10 plants, 10 vehicles example)

| Configuration | Links | Description |
|---|---|---|
| No flexibility | 10 links | Each plant makes exactly one vehicle (diagonal matrix) |
| Full flexibility | 100 links | Every plant can make every vehicle (full matrix) |
| Long chain | 20 links | Each plant can make 2 vehicles, connected in one long chain |

### "A Little Flexibility Goes a Long Way"
- A configuration with **20 links** (long chain) can produce **nearly the results** of total flexibility (100 links)
- Simulation results with CV (coefficient of variation) of at most 0.33:
  - **Long chain / Full flexibility ratio**: 89% for Uniform demand, 96% for Normal demand distribution
- The value of flexibility exhibits **decreasing returns**
- A **long chain** is often preferred to full flexibility because it captures most of the pooling benefit at a fraction of the cost

### Design Rules for Chaining
- Connect plants and products in **one long chain** rather than many short chains
- Avoid disconnected subgroups
- Each plant should be able to produce at least 2 products
- Each product should be producible in at least 2 plants

---

## 9. Mass Customization (MC)

### Definition
Mass customization **tailors a product or service to each customer's wishes within certain limits**, and produces and delivers it with a **flexible flow process with negligible changeovers**.

### Key Insight
"It's not mass production that customers are looking to escape; it's mass products."

### Positioning in the Competency Space
| | Low Variety | High Variety |
|---|---|---|
| **Low Cost** | Mass Production (standard) | **Mass Customized** |
| **High Cost** | -- | Custom |

Mass customization achieves **high variety at low cost** -- the best of both worlds.

---

## 10. Technology Behind Mass Customization

### Product Technology
- Uses **modularity** and **platform sharing** along with **adaptable design**
- The "product" really is a **menu of options**: e.g., 10 components, each having 5 options
- **Rationalized standardization**: smart choice of the options is key -- not unlimited options, but curated options

### Process Technology
- Uses **flexibility through postponement**
- At least the last process step must be **MTO (Make-to-Order)** -- really ATO (Assemble-to-Order)
- Must support a **batch size of 1** (negligible changeovers)
- Key requirements:
  1. **Postpone differentiation fan-out as long as possible** (keep products generic until the last step)
  2. **Have information capability** to support the customized last step
  3. **Customer must be willing to wait** for the last step

### Coordination and Information Technology
- Systems allow customers to **self-design** their product
- Information is transmitted automatically to the process with billing and tracking

### Transportation Technology
- Delivery or self-pickup options

---

## 11. Guidelines for Capacity Flexibility

### How Much Flexibility?
- **Process design**: a little flexibility goes a long way (don't over-invest)

### How to Reduce the Cost of Flexibility
1. **Setup time reduction** -- reduces changeover costs
2. **Adaptable capacity** -- equipment that can be reconfigured
3. **Postponement** -- delayed differentiation
4. **Reactive capacity** -- capacity that can be activated quickly when needed

### Integration with Strategy
- Integrate flexibility strategy with **new product strategy**
- Be clear on the **role of flexibility**:
  - **Highly volatile demands** --> need for fast changeovers
  - **Low volume** --> need for technology transfer skills
  - **Prototyping** --> need for PM (project management) skills

---

## 12. Case Study Brief: Eli Lilly and Co. -- The Flexible Facility Decision (1993)

### Company Background
- **Eli Lilly and Company**: headquartered in Indianapolis, Indiana
- Developed, manufactured, and marketed pharmaceuticals, medical devices, diagnostic products, and animal health products
- **Total sales**: $6.2 billion in 1992; pharmaceutical sales: $4.5 billion (ranked 9th worldwide, 2.5% market share; top 6 in the U.S.)
- **Key products**: Ceclor (antibiotic, $950M sales) and Prozac (anti-depressant, $1.1B sales) -- both among top 15 biggest-selling drugs worldwide
- **Profit margins**: 22% in 1993, expected to fall to 15% by 1996
- **Employees**: 32,200 (1992)
- **23 plants worldwide**: 8 for bulk drug manufacturing, 15 for formulation/filling/finishing

### Industry Context (1993)
- **Total industry sales**: $191 billion worldwide; top 15 companies held >1/3 of sales
- **U.S. market**: $50 billion; top 4 (Merck, Bristol-Myers Squibb, SmithKline Beecham, Eli Lilly) held 25%
- **Drug development**: 8-12 years from discovery to market; of 10,000 compounds synthesized, only 10 enter clinical trials and only 1 reaches market
- **Three phases of clinical trials**:
  - Phase I: safety and pharmacological properties (20+ healthy volunteers)
  - Phase II: effectiveness and side effects (several hundred patients)
  - Phase III: large-scale effect measurement (thousands of patients over several years)
- **Patent life**: 17 years; typically ran out after 10th year of sales; generic substitutes then entered

### "The New Marketplace" -- Changing Industry Dynamics
1. **Growth slowing**: Industry growth rate dropped from 18% (1982-1992) to 8-12% projected
2. **Pricing flexibility diminishing**: Clinton administration proposing price caps; 17 leading companies voluntarily held increases to CPI
3. **Rate of innovation slowing**: R&D spending up from $1.1B (1975) to $12.6B (1992), but novel drug launches rose only slightly
4. **Cost of drug development increasing**: $359M per new drug (1992), up from $120M five years earlier
5. **Manufacturing costs rising**: From 10% of sales (early 1980s) to 20% (1990s); projected to reach 60% by 2000
   - Causes: more stringent FDA quality regulations, EPA environmental regulations, containment for potent compounds, more complex molecules, facility under-utilization
6. **Managed care growth**: HMOs/managed care accounted for 64% of pharmaceutical purchases (1992), expected 75% by 1995; demanded discounts of up to 60%
7. **Generic competition**: Generics filled ~50% of prescriptions (vs. 2% in 1980); priced 30-60% lower; between 1993-1999 patents on $20B of branded products would expire
8. **Shorter exclusivity periods**: Dropped from 5-6 years (late 1970s/early 1980s) to ~2 years (e.g., Prozac)
9. **Second entrants** discounted prices 34% on average; "me-too" drugs reduced prices across entire therapeutic classes

### Corporate Strategic Goals
- **Goal 1**: Reduce time-to-market by **50%** (from 8-12 years to 4-6 years)
- **Goal 2**: Reduce manufacturing costs by **25%**

### Lilly's Existing Operations Strategy

#### Bulk Drug Manufacturing
- Standard unit of capacity: a **"rig"** = set of tanks and equipment to process 2,000-gallon batches from start to finish
- Output per rig varied by product and process technology (from a few hundred kg for complex products to several thousand kg for simple ones)
- 1993 capacity: ~12 rigs; forecast for 2004: 46 rigs
- **Minimum feasible capacity increment**: 1/4 rig (500-gallon batches)
- Bulk drugs concentrated in 1-2 plants (economies of scale; active ingredients don't vary by market)
- Fill-and-finish operations dispersed globally (specifications vary by market; trade barriers)

#### Specialized Facilities Strategy (Status Quo)
- Historically: built a **specialized facility** (or converted existing) for each new product
- Multi-product facilities were specialized for a specific set of products -- capacity could **not** be swapped among products
- Equipment, piping, controls all customized to specific product/process
- Built to accommodate **estimated peak demand** (typically year 5 after launch)
- Result: **underutilized** for first several years, then underutilized again as demand tapers off
- Product stayed in facility for entire 15-year commercial life
- At end of product life, facility could be **retrofitted** for another product:
  - Retrofit took ~1 year (plant idle during changeover)
  - Cost to retrofit approximately equal to building a new facility

#### Previous Attempts at Flexibility
- Lilly had built some "generic" facilities in the past
- Over time, these evolved into specialized plants as modifications were made to improve yields, cycle times, and throughputs for specific products

#### Process Development Phases
- **Phase 1** (earliest): Develop crude process quickly to make first few kg for Phase I clinical trials -- speed is priority, cost/manufacturability are secondary
- **Phase 2**: Determine sequence of chemical reactions; basic chemistry is "locked down"; work transfers from Chemical Process Research (Indianapolis) to Chemical Development (Tippecanoe)
- **Phase 3**: Final development and refinement for commercial viability at scale; begins during Phase III clinical trials

Under the new 50% faster timeline:
- Final process development would need to begin in **Phase II** (not Phase III)
- Facilities concept/design must begin ~3 months **before** final manufacturing processes are designed
- Construction must begin ~100 days **before** final product decisions

### The Central Decision Problem
Steve Mueller (manager of strategic facilities planning) must recommend to the Manufacturing Strategy Committee what type of manufacturing facilities to construct for three new products: **Alfatine**, **Betazine**, and **Clorazine** (expected launch 1996).

**Key Questions**:
1. What type of facilities -- specialized or flexible?
2. Can the higher capital costs of flexible plants be justified financially?
3. How does it fit with goals of 50% faster time-to-market and 25% cost reduction?
4. Are there hybrid alternatives?

---

### Option 1: Build One Specialized Facility

| Product | Capacity (Rigs) | Max Output (kg) at 80% utilization |
|---|---|---|
| Alfatine | 1.0 | 16,000 |
| Betazine | 0.25 | 4,000 |
| Clorazine | 0.25 | 4,000 |
| **Total** | **1.5** | **24,000** |

- **Construction cost**: $37.5 million
- **Annual operating cost**: $6.8 million
- **Depreciation**: 15-year period
- **Productivity**: 16,000 kg/rig at 80% utilization (= 20,000 kg/rig at 100%)
- **Utilization rate**: 80%

**Advantages of Specialized**:
- Plant specifically designed and optimized --> **better yields**
- Operators develop deep experience --> **fewer batch failures**
- **Steeper experience curve** due to dedicated equipment and operators
- No product changeovers --> **smoother operations**
- Lower construction cost per rig ($25M/rig)
- Lower operating costs

**Risks of Specialized**:
- If a product fails in development, part of the facility must be **retrofitted** (cost ~ new facility)
- If process changes dramatically after construction begins, part of facility may need redesign
- Under 50% faster time-to-market goal: facilities design must begin **before** process is finalized
- Construction must begin ~100 days before final product decisions
- If not completed on schedule, product launch delayed --> **millions in lost sales**

### Option 2: Build One Flexible Facility

| Item | Value |
|---|---|
| Capacity | 3 rigs |
| Max Output (at 65% utilization) | 14,625 kg/year |
| Construction cost | $150 million |
| Annual operating cost | $9.48 million |

- **Productivity**: 7,500 kg/rig at 100% utilization (vs. 20,000 kg for specialized)
- **Utilization rate**: 65% (vs. 80% for specialized) -- due to changeover time between products
  - Average of 4 product campaigns/year (each 11 weeks long)
  - 2 weeks downtime between campaigns for cleaning, repairs, maintenance
- **Effective output per rig**: 4,875 kg/year (vs. 16,000 kg for specialized)
- **Cost per rig**: $50 million (vs. $25 million for specialized)

**Why Flexible Costs More**:
1. **More rigs needed**: 3 rigs vs. 1.5 rigs (due to lower productivity/utilization)
2. **Higher cost per rig** ($50M vs. $25M):
   - Tanks made of complex alloys or glass-lined (vs. stainless steel)
   - Wider range of controls (temperature, pressure, etc.)
   - Flexible piping for different process flows
   - Stock of exotic equipment "just in case"
   - Empty floor space for reconfiguration

**Capacity Plan with Flexible**:
- Betazine and Clorazine: produced in flexible plant for entire 15-year life
- Alfatine: launched in flexible plant, but demand exceeds capacity by 2001 --> would need own specialized 1-rig plant
- After Alfatine moves out, flexible plant produces other new products (2-3 years each, then transferred to specialized)
- Flexible plant utilization stays constant at 65% (vs. lifecycle-dependent utilization for specialized)
- Additional flexible plants would be needed over next 10 years

**Advantages of Flexible**:
1. **Process development freedom**: Processes don't need to be finalized early; can work on process longer without worrying about delaying launch
2. **Reduced time-to-market for subsequent products**: Once built, accommodates almost any new product without delay (only 2-week changeover). Subsequent new products get to market **one year earlier**
3. **Lower risk**: If a product fails in development, unused capacity can be allocated to any other Lilly product
4. **Takes facilities construction off the critical path**

**Disadvantages of Flexible**:
1. **Much higher capital cost**: $150M vs. $37.5M (4x)
2. **Higher operating costs**: $9.48M/year vs. $6.8M/year
3. **Lower productivity per rig**: 4,875 kg vs. 16,000 kg effective output
4. **Lower utilization**: 65% vs. 80%
5. **Transfer costs**: ~$1M per product transferred from flexible to specialized (start-up, process validation, FDA registration; registration takes up to 1 year)

### Option 3 (Implicit): Hybrid "Flexible then Specialized" Transfer Strategy
- Use flexible plant as a **launch plant** for first 2-3 years
- Transfer products to specialized plants as demand increases
- Combines flexibility benefits (risk reduction, speed to market, information updating) with efficiency benefits of specialized capacity

---

## 13. Financial Analysis of the Eli Lilly Decision (from Case Analysis)

### Valuation #1: Total Costs in Present Value

Using a **10% discount rate**, over 15 years:

**Specialized (1.5 rigs)**:
- Capital cost (C_0) = $37.5M
- PV of operating costs ($6.8M/year for 15 years at 10%) = $51.72M
- **Total PV cost = $37.5M + $51.72M = $89.22M**

**Flexible (3 rigs)**:
- Capital cost (C_0) = $150M
- PV of operating costs ($9.48M/year for 15 years at 10%) = $72.11M
- **Total PV cost = $150M + $72.11M = $222.11M**

**Note**: This comparison is an **understatement** of the cost difference because the flexible plant has lower maximum output (14,625 kg/yr vs. 24,000 kg/yr). The flexible plant cannot even meet the peak demand of 21,000 kg/yr for all three products combined.

### Valuation #2: Per-Kilogram Costs of Production

**Specialized (1.5 rigs)**:
- Annual depreciation: $37.5M / 15 years = $2.5M/year
- Annual operating: $6.8M/year
- Annual capacity: 24,000 kg
- **Cost per kg at 100% capacity** = ($2.5M + $6.8M) / 24,000 = **$387.50/kg**

**Flexible (3 rigs)**:
- Annual depreciation: $150M / 15 years = $10M/year
- Annual operating: $9.48M/year
- Annual capacity: 14,625 kg
- **Cost per kg at 100% capacity** = ($10M + $9.48M) / 14,625 = **$1,332/kg**

The flexible plant is approximately **3.4x more expensive per kilogram** than the specialized plant.

### Valuation #3: Break-Even Volume Analysis

**Key insight**: Capacity lumpiness matters. The specialized plant has a minimum capacity of 1/4 rig = 4,000 kg. What if demand is much less than 4,000 kg?

**Specialized plant minimum cost structure** (per 1/4 rig):
- Fixed cost per 1/4 rig: $37.5M / 1.5 rigs x 0.25 rig = $6.25M
- Annual depreciation: $6.25M / 15 years = $0.42M/year
- Variable operating per 1/4 rig: $6.8M / 1.5 rigs x 0.25 rig = $1.13M/year
- **Total annual cost per 1/4 rig** = $0.42M + $1.13M = **$1.55M/year**

**For any demand volume X**:
- Specialized cost per kg = $1.55M / X
  - If X = 4,000 kg (full 1/4 rig): $1.55M / 4,000 = **$387.50/kg**
  - If X = 1,000 kg (below 1/4 rig): $1.55M / 1,000 = **$1,550/kg**

- Flexible cost per kg = **$1,332/kg** (constant, since flexible capacity is shared)

**Break-Even Volume**:
```
$1.55M / X = $1,332/kg
X = $1.55M / $1,332 = 1,164 kg
```

**Conclusion**:
- For products with volume **above 1,164 kg/year**: **specialized** is cheaper per kg
- For products with volume **below 1,164 kg/year**: **flexible** is cheaper per kg
- Example: **Clorazine** (only 500-1,000 kg/year in early years) would be **cheaper in the flexible plant**

---

## 14. Key Takeaways and Lessons from the Eli Lilly Case

### Lesson 1: The Decision is Not Binary
- The choice is not simply "specialized vs. flexible" -- a **hybrid transfer strategy** (flexible first, then specialized) can capture benefits of both
- Use flexible capacity as a **launch plant** for new products, then transfer to specialized capacity once demand is proven and processes are mature

### Lesson 2: Flexibility Has Value Beyond Cost Comparisons
The pure cost comparison ($89.22M vs. $222.11M) **understates the value of flexibility** because it ignores:
- **Risk reduction**: avoiding stranded assets if products fail
- **Time-to-market benefits**: subsequent products launch 1 year earlier (worth potentially $175M/year for a large-market drug)
- **Information updating value**: ability to defer decisions until uncertainty is resolved
- **Process development freedom**: not having to lock down processes prematurely

### Lesson 3: Volume is the Key Determinant
- High-volume products (Alfatine) are better suited to specialized capacity
- Low-volume products (Clorazine) are better suited to flexible capacity
- The break-even volume of **1,164 kg/year** is the critical threshold

### Lesson 4: Matching Capacity Type to Product Lifecycle Stage
| Lifecycle Stage | Best Capacity Type | Reasoning |
|---|---|---|
| **Launch / Early** | Flexible | Demand uncertain, volume low, process may change |
| **Growth / Peak** | Specialized | Demand known, volume high, process mature |
| **Decline** | Flexible (if available) | Volume declining, capacity should be redeployed |

### Lesson 5: Alignment with Corporate Goals
- **50% faster time-to-market**: Flexible plant supports this by taking facilities construction off the critical path and allowing process development to continue longer
- **25% cost reduction**: Flexible plant hurts this goal due to higher per-kg costs. But increasing utilization of fewer plants (through flexibility) could contribute to cost reduction. Must also consider the cost of stranded specialized capacity when products fail.

### Lesson 6: Capacity Lumpiness Creates Hidden Costs
- The minimum capacity increment of 1/4 rig (4,000 kg) means small-volume products incur disproportionately high per-kg costs in specialized facilities
- Flexible facilities avoid this problem by sharing capacity across products

---

## 15. Connection to Class Concepts

### From Class 3 (Capacity Strategy: Size and Timing)
- The Eli Lilly decision is fundamentally a **capacity sizing and timing** problem
- The **option value of waiting** applies: the flexible plant preserves the option to decide on specialized capacity later, when demand uncertainty is resolved
- The **capacity-inventory-waiting triangle** applies: flexible capacity is a way to avoid making customers wait (capacity shortfall) without over-investing in specialized safety capacity

### From Class 4 (Types and Flexibility)
- The case directly illustrates the **trade-off between specialized and flexible capacity**
- Demonstrates all four sources of flexibility value:
  1. **Economies of scale**: Not applicable here (flexible is more expensive)
  2. **Risk pooling**: Flexible plant pools demand across products, maintaining steady 65% utilization
  3. **Information updating**: Flexible plant allows deferred decisions on specialized capacity
  4. **Flexibility allocation**: Capacity can be allocated to most valuable products first
- Illustrates **resource chaining** concepts -- the flexible plant creates links between multiple products
- Demonstrates "**a little flexibility goes a long way**" -- even partial use of flexible capacity (as launch plant) captures significant strategic value

### Key Frameworks Applied
- **Efficient Frontier**: Specialized plants operate closer to the efficient frontier for high-volume products; flexible plants push the frontier out for low-volume/high-uncertainty products
- **Operational Focus**: Specialized plants represent focused operations; flexible plants trade focus for adaptability
- **Five Capacity Strategies**: The hybrid "flexible then specialized" approach is a form of the **hybrid timing strategy** -- leading with flexible capacity and then adding specialized capacity as demand materializes (lagging strategy for specialized)

---

## Summary of Key Formulas and Numbers

| Item | Specialized | Flexible |
|---|---|---|
| Rigs needed | 1.5 | 3 |
| Construction cost | $37.5M ($25M/rig) | $150M ($50M/rig) |
| Annual operating cost | $6.8M | $9.48M |
| Max output per rig (100% util.) | 20,000 kg | 7,500 kg |
| Utilization rate | 80% | 65% |
| Effective output per rig | 16,000 kg | 4,875 kg |
| Total effective capacity | 24,000 kg | 14,625 kg |
| Cost per kg | $387.50 | $1,332 |
| Total PV cost (15 yr, 10%) | $89.22M | $222.11M |
| Break-even volume (per product) | -- | 1,164 kg/year |

### Key Demand Data (Exhibit 4)

| Year | Alfatine (kg) | Betazine (kg) | Clorazine (kg) | Total (kg) |
|---|---|---|---|---|
| 1 (1996) | 7,000 | 2,500 | 500 | 10,000 |
| 2 (1997) | 8,000 | 2,700 | 500 | 11,200 |
| 3 (1998) | 9,000 | 3,000 | 750 | 12,750 |
| 4 (1999) | 10,000 | 3,100 | 750 | 13,850 |
| 5-10 (2000-2005) | 16,000 | 4,000 | 1,000 | 21,000 |

- Specialized excess capacity: 14,000 kg (Year 1) declining to 3,000 kg (Years 5-10)
- Flexible capacity is insufficient from Year 5 onward (14,625 < 21,000), assuming no process improvements
- Flexible plant never has "wasted" excess capacity since other products can use it

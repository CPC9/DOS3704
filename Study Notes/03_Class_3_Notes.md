# Class 3: Capacity Strategy -- Size and Timing

---

## Learning Objectives

1. Explain the concept of capacity strategy and discuss its challenges and importance
2. Describe five different capacity strategies
3. Analyze key capacity drivers
4. Value and optimize capacity:
   - **Size**: marginal analysis
   - **Timing**: option value of waiting
5. Tailor capacity strategy -- pick a position in the capacity-inventory-waiting strategy triangle

---

## 1. Capacity Strategy: Definition and Framework

### Definition
A **capacity strategy** is the long-term plan for developing resources that involves decisions on **size, timing, type, and location** of real assets (from the OS Framework, Class 1 Slide 5).

### The Operations Strategy (OS) Framework
The OS Framework connects **Business Strategy** to **Operations Strategy** through **Resources** (Asset Portfolio) and **Processes** (Activity Network). The key strategic questions are:

| Decision Area | Key Question |
|---|---|
| **Size** | How many resources should we invest? |
| **Type** | What type of resources are best? |
| **Timing** | When should we increase or reduce resources? |
| **Location** | Where to locate resources? |
| **Technology** | Which process technology do our processes need? |
| **Innovation** | When and how to innovate and improve? |
| **Supply** | How to match demand with available supply? |
| **Demand** | What activities should we perform internally? |

- **Capabilities** (supply-side): Cost, Quality, Lead Time (LT), Flexibility
- **Value Proposition** (demand-side): Price, Quality, Responsiveness, Variety

### Real-World Example: FedEx
FedEx Corporation spent $1.8 billion to expand FedEx Ground by adding 10 hubs and enlarging 23 others, increasing capacity from 2.5 million to 4.8 million packages/day by fiscal year 2009.

---

## 2. Capacity Strategy: Size and Timing Defined

### Size
- **Size** means deciding the capacity investment level
- All resources are limited by their capacity size, which typically represents the **maximal sustainable output rate** of that resource
- The capacity level at which we choose to operate a resource at any given time decides **resource capacity utilization**, typically a fraction of the resource capacity size:
  - **Utilization = Flow Rate / Capacity**

### Timing
- **Timing** means the timing of capacity size adjustments
- There is some leeway about the timing or dynamics of the investment

### The Key Trade-Offs
When deciding on capacity size, a company incurs various costs in acquiring and operating real assets, and it impacts the whole supply chain. The key trade-offs are:

1. **Size Trade-Off**: Cost of excess capacity vs. cost of capacity shortfall (e.g., opportunity cost)
2. **Timing Trade-Off**: Costs of the capacity adjustment vs. the continuing or expected costs of excess (or shortage)

---

## 3. Real-World Examples of Reversing Capacity Investments

### Example 1: Solyndra (2010)
- Silicon Valley solar-panel maker that won $535 million in federal loan guarantees
- Opened Fab 2 ($733 million factory) but then decided to shutter old Fab 1 and postpone Fab 2 expansion
- Reason: Intense price competition from Chinese manufacturers using more established photovoltaic technologies
- Originally estimated 610 MW capacity by 2013; revised down to 285-300 MW
- Demonstrates the cost and difficulty of reversing capacity investments when market conditions change

### Example 2: Eli Lilly (2007)
- Abandoned a $325 million insulin manufacturing facility in Prince William County, VA
- Originally planned: $425 million, 600,000 sq ft facility with 700 employees (announced May 2002)
- Cut in half in 2005 due to reduced demand; fully cancelled in 2007
- Current demand could be met at existing sites and a facility in Italy
- Over $4 million in local and state incentives had to be returned
- Demonstrates irreversibility challenges and the risks of large capacity investments under demand uncertainty

---

## 4. Five Capacity (Size & Timing) Strategies

### Strategy 1: Demand Chasing
- Capacity closely tracks actual demand
- Adjustments made frequently to match demand level

### Strategy 2: Leading
- Capacity is added **before** demand materializes
- Creates excess capacity in the short run
- Builds **inventory** to fill future demand
- Risk: demand may not materialize as expected

### Strategy 3: Lagging
- Capacity is added **after** demand has increased
- Results in capacity shortages in the short run
- Creates **waiting lists** or lost sales
- Lower risk of excess capacity

### Strategy 4: Hybrid (Demand Chasing with Timing Mix)
- Combines elements of leading and lagging
- Periods of inventory buildup alternate with capacity shortage periods

### Strategy 5: Follow-Your-Competitor
- Match capacity additions to competitors' actions

### Key Decisions
1. **Size** = by how much? (many small sizes vs. one big size -- lumpiness)
2. **Time** = when? (lead or lag)

### Graphical Representation
- Leading strategy: capacity line stays above demand curve (inventory buildup)
- Lagging strategy: capacity line stays below demand curve (capacity shortage fills)
- Hybrid: capacity staircase crosses demand curve

---

## 5. Ways to Expand Capacity

1. **Building a new facility (Greenfield)** -- brand new construction
2. **Expanding a current facility (Brownfield)** -- adding to existing plant
3. **External capacity provision**:
   - Outsourcing
   - Subcontracting
   - Franchising
   - Alliances
4. **Process improvement and restructuring** at current facility
5. **Adding a shift or working days**
6. **Tactical capacity adjustment (Aggregate Planning)**: seasonal demand fluctuations can be buffered by:
   - Working overtime or adding temporary workers
   - Building inventory
   - Keeping a waiting list for back orders

---

## 6. Key Capacity Drivers

### 6.1 Economies of Scale (EOS)
**Bigger is Better**: The cost of doubling the size is less than double the cost of the original size.

**Formal Definition**: C(2K) < 2C(K), where:
- K = size of capacity
- C(K) = associated capacity investment cost

#### Two Capacity Investment Cost Models

**Model 1: Linear CapEx**
```
C(K) = c_0 + c_K * K
```
- c_0 = fixed capacity investment costs (intercept on the cost axis)
- c_K = marginal capacity investment costs (slope of the line)
- Graph: straight line starting at c_0 with constant slope c_K

**Model 2: Power CapEx**
```
C(K) = c_0 + (c_K / alpha) * K^alpha
```
- 0 < alpha < 1, allowing for **decreasing marginal cost**
- c_K = marginal capacity investment costs at K=1
- When alpha = 1, this reduces to the linear model
- When alpha = 0.6 (typical), the curve is concave -- costs increase at a decreasing rate
- Graph: concave curve starting at c_0

### 6.2 Uncertainty
- Uncertainty **degrades** the value of capacity
- Capacity size constraint prevents the company from enjoying upside demand opportunity while it is fully exposed to downside risks
- To counteract uncertainty, must either:
  - Invest in **safety capacity**, OR
  - Make either **customers wait** or **products wait** (the capacity-inventory-waiting triangle)

### 6.3 Capacity Frictions
- **Lead-time**: long lead times make it not possible for a capacity leading strategy
- **Lumpiness**: capacity can only be added in discrete chunks (not continuously)
- **Fixed costs**: substantial fixed costs create economies of scale

### 6.4 Other Drivers
- **Discount factor (r)**: time value of money affects NPV of capacity investments
- **Irreversibility**: once built, capacity is difficult/costly to reverse
- **Competitors**: actions of competitors affect optimal capacity decisions
- **Technology**: process and product technology evolution

---

## 7. The Capacity-Inventory-Waiting Strategy Triangle

This is a fundamental framework showing three ways to handle the mismatch between capacity and demand:

1. **Make resources wait** (safety/excess capacity) -- invest in more capacity than average demand
2. **Make products wait** (inventory) -- build inventory to buffer demand fluctuations
3. **Make customers wait** (backorders/lost sales) -- let customers queue when demand exceeds capacity

The optimal position in this triangle depends on:
- Relative costs of each approach
- The critical ratio (m + c_p - c_K) / (m + c_p)

---

## 8. Value and Optimize Capacity Size (Marginal Analysis)

### The Newsvendor-Style Framework
Under the presence of uncertainty, the key trade-off is:
- **Cost of excess capacity** = marginal capacity investment costs (c_K)
- **Cost of capacity shortfall** includes:
  - Unit operating profit margin: **m**
  - Unit opportunity loss: **c_p** (penalty cost for unmet demand)

### Marginal Analysis

**Marginal capacity cost** = c_K

**Marginal capacity value** = (m + c_p) * Prob(Demand > K)

**Optimality condition**: Set marginal cost equal to marginal value:
```
(m + c_p) * Prob(Demand > K) = c_K
```

Rearranging:
```
Prob(Demand <= K) = (m + c_p - c_K) / (m + c_p) = F(K)
```

Therefore:
```
Optimal K = F^{-1}((m + c_p - c_K) / (m + c_p))
```
where F(K) is the **cumulative demand distribution function**.

### The Critical Ratio
The expression **(m + c_p - c_K) / (m + c_p)** is the **critical ratio** (analogous to the newsvendor critical ratio).

### Solutions for Different Demand Distributions

#### Case 1: Discrete Demand
- Use the cumulative demand distribution table F(D)
- Find the smallest K such that F(K) >= (m + c_p - c_K) / (m + c_p)

#### Case 2: Normal Demand Distribution -- D ~ N(mu, sigma^2)
```
K = mu + z* * sigma
```
where:
```
z* = NORM.S.INV((m + c_p - c_K) / (m + c_p))
```

Or equivalently:
```
K = NORMINV((m + c_p - c_K) / (m + c_p), mu, sigma)
```

### Key Insights (Connecting to the Triangle)

| Condition | Implication | Triangle Position |
|---|---|---|
| Critical ratio > 50% (c_K is small relative to margins) | Optimal K > mean demand; invest in safety capacity | **Make resources wait** |
| Critical ratio < 50% (c_K is large relative to margins) | Optimal K < mean demand; scale down capacity | **Make customers wait** |
| Critical ratio = 50% (c_K equals value-add) | Size capacity at the **median** demand (50th percentile) | Balanced |

- When c_K is very small: build excess capacity (safety capacity = z* * sigma for Normal distribution)
- When c_K is prohibitively expensive: scale down below average demand, effectively making customers wait
- When marginal capacity cost and value-add are equal: size at median demand

---

## 9. Challenges for Capacity Size

### Capacity is a Soft, Malleable Constraint
- It is often a less precise, **soft constraint** -- the point beyond which marginal production costs increase sharply (not a hard cutoff)

### Capacity is Like "Black Art"
- Depends on OM (Operations Management) tactics
- Depends on all operational policies used in the activity network (e.g., aggregate planning)
- Actual capacity utilization depends on everything
- **Utilization = Flow Rate / Capacity**, where Flow Rate is the real production output

### Measuring and Valuing Capacity Shortfall is Not Obvious
- Customer wait
- Substitution
- Lost sale
- Loss of goodwill and future demand

### Capacity Decisions Can Be Political
- A firm typically invests in multiple types of resources with different financial and operational properties
- Capacity decisions affect many stakeholders

### Capacity Investment Involves Long-Run Planning Under Uncertainty
- There is uncertainty over the future rewards from the investment
- **This is arguably the greatest challenge for capacity strategy**

---

## 10. Value and Optimize Capacity Timing

### Strategic Timing
- Deals with the essential question: **Should we adjust the capacity size now or should we wait?**
- Captures key capacity investment drivers (EOS and uncertainty) over longer time frames
- Often suppresses tactics such as inventory carry-over
- **Tool**: Option Value of Waiting = NPV(wait) - NPV(do not wait)

### Tactical Timing
- Captures key capacity adjustment tactics:
  - When labor is reasonably "frictionless" and adjustable, changing workers, hours, shifts, working days is an effective and quick lever
  - Advance inventory build-up or waiting list (back-orders) can accommodate temporary demand surges
- Deciding on tactical capacity adjustments is known as **Aggregate Planning**

---

## 11. Strategic Timing: Acer Stylized Example (Option Value of Waiting)

### Setup
- Acer considers expanding capacity for low-priced PCs in emerging markets
- Demand is highly uncertain with three scenarios:
  - **Blockbuster**: 200,000 units/year (25% probability)
  - **Success**: 100,000 units/year (50% probability)
  - **Dud**: 30,000 units/year (25% probability)

### Cost Structure
- Capacity expansion: **$8 million fixed cost + $50/unit marginal cost**
  - Example: 100,000 units capacity costs $8M + $50 * 100,000 = $13 million
- Profit contribution: **$80/PC**
- Capacity shortfall cost: **$20/PC**
- Discount rate: **25%**
- Technology viable for **4 years**

### Option A: Expand Now (No Wait)
- Build 100K units/yr capacity at cost of $13M
- Operating profits per year by scenario:
  - High demand (200K): can only produce 100K --> 100K * $80 = **$8M/year**
  - Medium demand (100K): 100K * $80 = **$8M/year**
  - Low demand (30K): 30K * $80 = **$2.4M/year**
- **Expected annual profit** = 25% * $8M + 50% * $8M + 25% * $2.4M = **$6.6M/year**
- **NPV(Expand Now)** = -$13M + $6.6M/1.25 + $6.6M/1.25^2 + $6.6M/1.25^3 + $6.6M/1.25^4 = **$2.59M**

### Option B: Wait One Year
After waiting one year, demand is revealed, then build optimal capacity:
- **High demand (25%)**: Expand to 200K units at $18M cost, earn $16M/year for 3 years
- **Medium demand (50%)**: Expand to 100K units at $13M cost, earn $8M/year for 3 years
- **Low demand (25%)**: No expansion, earn $0/year

- **Expected annual operating profit** = 25% * $16M + 50% * $8M + 25% * $0 = **$8M/year**
- **Expected CapEx** = 25% * $18M + 50% * $13M + 25% * $0 = **$11M** (paid in year 1)
- **NPV(Wait)** = -$11M/1.25 + $8M/1.25^2 + $8M/1.25^3 + $8M/1.25^4 = **$3.69M**

### Result
- **NPV(No Wait)** = $2.59M
- **NPV(Wait)** = $3.69M
- **Option Value of Waiting** = NPV(Wait) - NPV(No Wait) = $3.69M - $2.59M = **$1.10M**
- **Recommendation: WAIT** -- the option value of waiting is positive ($1.1M)

### Why Waiting Has Value
- The value lies in **more accurate forecasts** -- during the waiting period, companies can perform tests or observe the market
- Waiting avoids the downside risk (the dud scenario where $13M is invested for only $2.4M/year return)
- When you wait, you can tailor capacity size to actual demand

---

## 12. When is Waiting Valuable vs. Problematic?

### Waiting is Valuable When:
- **Uncertainty can be reduced substantially** during the waiting period
- **Investment opportunity does not disappear** (long enough product life cycle remains)

### Waiting is Problematic When:
- **First-mover advantage** is important (competitors may capture market share)
- **Production learning** (cost reduction through experience) is important -- waiting means less time to move down the learning curve

---

## 13. In-Class Exercises on Optimal Capacity Size

The in-class exercise slide was titled "In-class Exercises on Optimal Capacity Size." Based on the lecture content, these exercises would apply the marginal analysis framework:

### Typical Exercise Format
Given:
- Demand distribution (discrete or Normal)
- Profit margin (m)
- Penalty/opportunity cost (c_p)
- Marginal capacity cost (c_K)

Steps to solve:
1. Calculate the critical ratio: CR = (m + c_p - c_K) / (m + c_p)
2. For discrete demand: find K where F(K) >= CR
3. For Normal demand: K = NORMINV(CR, mu, sigma)

### Example Problem (from lecture framework)
If m = $80, c_p = $20, c_K = $50:
- CR = (80 + 20 - 50) / (80 + 20) = 50/100 = 0.50
- For Normal demand: K = mu (capacity equals mean demand)

If m = $80, c_p = $20, c_K = $10:
- CR = (80 + 20 - 10) / (80 + 20) = 90/100 = 0.90
- For Normal demand: K = mu + 1.28 * sigma (significant safety capacity)

---

## Summary of Key Formulas

| Formula | Description |
|---|---|
| C(K) = c_0 + c_K * K | Linear CapEx model |
| C(K) = c_0 + (c_K/alpha) * K^alpha | Power CapEx model (alpha < 1 for EOS) |
| Optimal K = F^{-1}((m + c_p - c_K)/(m + c_p)) | Optimal capacity size (general) |
| K = mu + z* * sigma | Optimal capacity for Normal demand |
| z* = NORM.S.INV((m + c_p - c_K)/(m + c_p)) | Safety capacity z-score |
| Utilization = Flow Rate / Capacity | Capacity utilization |
| Option Value of Waiting = NPV(Wait) - NPV(No Wait) | Value of delaying capacity decision |

---

## Summary of Learning Objectives (from Slide 20)

1. **Capacity Strategy**: Long-term resource development plan involving size, timing, type, and location decisions
2. **Five Capacity Strategies**: Demand Chasing, Leading, Lagging, Hybrid, Follow-Your-Competitor
3. **Key Capacity Drivers**: Economies of Scale, Uncertainty, Capacity Frictions (lead-time, lumpiness, fixed costs), Discount factor, Irreversibility, Competitors, Technology
4. **Optimal Capacity Size**: Use marginal analysis with the critical ratio framework; connect to the capacity-inventory-waiting triangle
5. **Optimal Capacity Timing**: Use the option value of waiting framework; waiting is valuable when uncertainty is high and can be reduced, and the investment opportunity persists
6. **Capacity is a Soft Constraint**: Utilization depends on OM tactics; measuring shortfall costs is challenging; capacity decisions are political and involve long-run uncertainty

# Class 6: Matching Supply with Demand -- Revenue Management (Demand Side) and Strategic Sourcing (Supply Side)

---

## Overview

Class 6 covers two complementary topics for matching supply with demand strategically:

1. **Demand Management / Revenue Management (RM):** How to maximize the revenue extracted from a fixed or constrained supply by managing the demand side -- pricing, customer segmentation, and capacity allocation.
2. **Strategic Sourcing:** How to manage the supply side -- deciding what to make vs. buy, choosing suppliers, structuring supply relationships, and designing contracts.

Both topics connect to the **Operations Strategy Framework:**
- **Competitive Strategy** drives **Competencies**
- **Resources (Asset Portfolio):** Size, Time, Type
- **Processes (Activity Network):** Technology, Innovation, Supply, Demand
- **Location** connects resources and processes
- Demand management addresses the "Demand" process; Strategic sourcing addresses the "Supply" process.

---

# PART 1: DEMAND MANAGEMENT AND REVENUE MANAGEMENT

---

## 1. Learning Objectives (Demand Side)

Be able to:

1. **Explain** the concept of revenue management (RM) and integrate it with operations strategy
2. **Understand** how to design products to achieve customer segmentation and price discrimination
3. **Understand** the operational counterpart of customer segmentation is **capacity segmentation**
4. **Introduce Littlewood's rule** for capacity allocation
5. **Use marginal analysis** for yield management
6. **Identify** the conditions for and obstacles to effective revenue management

---

## 2. Demand Management: Definition and Scope

**Definition:** Demand management includes **all the activities that influence the demand** for products and services, including marketing and sales activities.

**Operations' contribution to demand management:**
- Operations can contribute by **tailoring processes to demand characteristics** to maximize NPV (Net Present Value).
- When the existing operational system is **inflexible** (i.e., supply cannot easily be changed), operations strategy must **match demand to available supply** in a value-maximizing manner. This is where Revenue Management comes in.

---

## 3. Revenue Management (RM): Definition and Integration

**Definition:** Revenue Management (RM) refers to the collection of demand management practices that aim to **maximize the revenue of available supply**.

**Integration with Operations Strategy:**
RM should be integrated and aligned with overall operations strategy (OS) through a three-step process:

1. **Evaluate company competitive strategy and customer:** What do customers need and value? Do valuations change significantly over customers or over time?
   - If yes, there is an opportunity to serve customers better and improve profits by designing products tailored to each customer group and time period.
2. **Forecast demand** and **price products** based on customer valuations and behavior.
3. **Control capacity** that is allocated to the various products.

---

## 4. Revenue Management: Two Main Categories

RM practices are categorized into processes that aim to improve revenue by controlling **price** or **capacity** or both.

### 4.1 Price Controls

Price controls are techniques that **vary prices to influence demand.**

| Technique | Description |
|---|---|
| **Price Customization** | Segmenting customers by willingness to pay (WTP) and charging different prices. Includes customer segmentation and price differentiation. |
| **Dynamic Pricing** | Changing prices over time in response to demand conditions. Includes: **Markdowns** (reducing price over time to clear inventory), **Promotions** (temporary price reductions to stimulate demand), **Peak-Load Pricing** (charging higher prices during peak demand periods). |

### 4.2 Capacity Controls

Capacity controls are techniques that **restrict the available supply to influence demand.**

| Technique | Description |
|---|---|
| **Yield Management** | Allocating limited capacity to different customer segments/fare classes to maximize total revenue. Includes **reservation systems** (booking limits, protection levels) and **overbooking** (accepting more reservations than physical capacity to account for no-shows). |
| **Service Customization** | Differentiating the service level to match customer willingness to pay. Includes **priority service** (e.g., Make-to-Order for premium customers) and **mass customization** (tailoring products/services within a standardized production system). |

---

## 5. Price Customization: Deep Dive

### 5.1 The Ideal and the Reality

- **Ideal (1st Degree Price Discrimination):** Perfectly discriminate (sort) customers based on their WTP (Willingness to Pay) or reservation price, and charge each customer exactly their WTP. This extracts the maximum possible revenue.
- **Problem:** A customer's WTP is usually **unobservable** -- you cannot directly see how much each customer would pay.

### 5.2 Solution: 2nd Degree Price Discrimination

**Approach:** Design differentiated "products" according to a set of **features and fences**, and let customers **self-select** (choose), thereby partially revealing their WTP.

**Key principle:** Match product features to customer preferences and WTP. This is called **customer segmentation**.

**Important note:** Finding a good differentiation method is often **more art than science**.

### 5.3 Examples of Features and Fences for Segmentation

| Dimension | Examples |
|---|---|
| **Time of purchase or usage** | Advance purchase, spot purchase, day-of-week pricing, time-of-day pricing |
| **Purchase restrictions** | Cancellation options (refundable vs. non-refundable), Saturday-night-stay requirement |
| **Duration of usage** | Single-day rate, weekly rate, monthly rate |
| **Purchase volume** | Individual vs. group pricing |
| **Customer affiliation** | Corporate rates, loyalty program rates |

**Terminology:** A "product" in this context is also called a **"fare class"** (e.g., Class Q, E, G in the airline industry). Each fare class represents a different combination of price and restrictions.

### 5.4 Effective Product Design

Effective product designs use features and fences that **strongly correlate with customer preferences and reservation prices**. The fences should sort customers into groups where WTP is relatively homogeneous within each group and significantly different across groups.

### 5.5 Three Conditions for Price Customization

You should consider price customization (customer segmentation with differentiated pricing) when:

1. **The valuation of an identical asset unit varies considerably over customers.** If all customers value the product the same, there is nothing to gain from price discrimination.
2. **Customers can be efficiently and effectively segmented into groups with similar WTP.** There must be observable characteristics or self-selection mechanisms that sort customers.
3. **Customer valuation of each segment can be forecasted with reasonable accuracy.** You need to predict how much each segment will buy at each price.

---

## 6. Capacity Segmentation and Allocation

### 6.1 Core Concept

The **operational counterpart** of customer segmentation is **capacity segmentation.**

- **Capacity segmentation:** Segment the same physical capacity (e.g., economy cabin on an airplane) into different **buckets** (fare classes).
- **Capacity allocation:** Allocate capacity from the different buckets to different "products" and demands that come in over time. Since different customer segments (booking at different times, with different restrictions) consume the same physical capacity, the firm must decide how much capacity to reserve for each segment.

### 6.2 Capacity Allocation Mechanisms

| Mechanism | Description |
|---|---|
| **Ad-hoc negotiation** | Case-by-case decisions on whether to accept a booking request |
| **Posting remaining availability** | Reservation system booking limits that control how many seats remain available at each fare class |
| **Open/closed status indicators** | Simply showing whether a fare class is available or not |
| **Bid prices** | A "minimum acceptable fare" -- any booking request at or above this price is accepted |

### 6.3 The Fundamental Decision Rule

Every capacity allocation decision ultimately boils down to an **accept/deny decision** for each demand request.

**Rule: Accept a request if Revenue > Displacement Cost (opportunity cost).**

The displacement cost is the expected revenue that could be earned by selling that unit of capacity to a future, higher-paying customer. This is the core logic of yield management.

---

## 7. Littlewood's Rule and Capacity Protection Levels

### 7.1 The Two-Fare-Class Problem

**Setup (Example from slides):**
- Consider the 5pm flight from Singapore to Brussels, 6 months from now.
- Economy seat capacity: K = 300 seats.
- Two fare classes with posted prices: p1 = $2,400 (high fare) and p2 = $600 (low fare).
- Demand for each fare class:
  - D1 (demand for p1) is Normal with mean = 50 and standard deviation = 20
  - D2 (demand for p2) has ample demand (exceeds capacity of 300 seats, so low-fare demand is not the constraint)
- Demand for the low fare is realized **before** high fare demand (advance booking for leisure travelers, last-minute booking for business travelers).

**Decision Question:** How many seats, Q, should we **protect** (reserve) from advance sales at $600, saving them for potential later sales at $2,400?

### 7.2 Littlewood's Rule

**Logic:** We deny an advance booking at $600 if we expect to sell that seat later at $2,400. Specifically:

> Deny advance booking at p2 if: **p1 x Prob(D1 > Q) > p2**

Rearranged: Deny if **Prob(D1 > Q) > p2 / p1**

Equivalently: Set protection level Q such that **Prob(D1 <= Q) = 1 - (p2 / p1) = (p1 - p2) / p1**

### 7.3 Calculation for Two-Class Example

- Prob(D1 > Q) > 600/2400 = 0.25
- So we protect up to Q where Prob(D1 <= Q) = 1 - 0.25 = 0.75
- **Q = NORMINV(0.75, 50, 20) = approximately 63 seats**
- This means: protect 63 seats for the high-fare class; allow the low-fare class to book at most 300 - 63 = 237 seats.

### 7.4 The Three-Fare-Class Problem

**Setup:**
- Total capacity: 300 seats
- Three fare classes:

| Class | Price | Demand Mean | SD |
|---|---|---|---|
| A | $2,400 | 25 | 5.3 |
| B | $800 | 50 | 8.5 |
| C | $600 | Ample demand | -- |

**Step 1: At the start of stage C (earliest booking stage), compute protection levels against class C.**

**Protection level for class A against class C:**
- Deny advance booking to class C if: $600 < $2,400 x Prob(sell at class A)
- Deny if: Prob(sell at class A) > 600/2400 = 25%
- So protect for A: Q_A = NORMINV(1 - 0.25, 25, 5.3) = NORMINV(0.75, 25, 5.3) = approximately **29 seats**

**Protection level for class B against class C:**
- Deny advance booking to class C if: $600 < $800 x Prob(sell at class B)
- Deny if: Prob(sell at class B) > 600/800 = 75%
- So protect for B: Q_B = NORMINV(1 - 0.75, 50, 8.5) = NORMINV(0.25, 50, 8.5) = approximately **44 seats**

**Total protection level for A and B against C = 29 + 44 = 73 seats**

**Booking limit for class C = 300 - 73 = 227 seats** (maximum seats available for the lowest fare class)

**Step 2: At the start of stage B (after class C booking is closed), recompute protection level for class A against class B.**

Assume 80 seats remain:
- Deny booking to class B if: $800 < $2,400 x Prob(sell at class A)
- Deny if: Prob(sell at class A) > 800/2400 = 33.33%
- Protect for A: Q_A = NORMINV(1 - 0.3333, 25, 5.3) = NORMINV(0.6667, 25, 5.3) = approximately **27 seats**
- **Booking limit for class B = 80 - 27 = 53 seats**

### 7.5 Key Formulas Summary

**Littlewood's Rule (General Form):**
- For two classes with prices p_high > p_low, and demand D_high for the higher fare:
- **Protection level Q = NORMINV((p_high - p_low) / p_high, mean_D_high, sd_D_high)**
- Or equivalently: Q = NORMINV(1 - p_low/p_high, mean, sd)

**Booking Limit** = Total Capacity - Protection Level

**For multiple classes:** Compute protection levels for each higher class against the lowest class being considered, then sum them. Protection levels can be recomputed at each stage as information updates.

---

## 8. Example: Capacity Reservation (Solectron)

**Context:** Solectron, a leading provider of manufacturing services to electronics OEMs worldwide, can produce up to 27,000 circuit boards per month at its Penang, Malaysia fabrication plant.

**Decision:** How much "floating" (unreserved) capacity should Solectron reserve each month to maximize expected profits?

**Two options for each unit of capacity:**
1. **Accept a proposed contract** (e.g., from Intel, before demand is known) generating profit of **$60 per circuit board** (certain revenue).
2. **Reserve capacity as "floating"** (uncontracted) -- this capacity could be worth **$100 per circuit board** if customers need short-term capacity after demand is known, but it might go unused.

**Demand for floating capacity:** Normal distribution with mean = 7,000 and standard deviation = 1,000, i.e., D ~ N(7000, 1000^2).

**This is a newsvendor-type problem applied to capacity reservation:**
- The "overage cost" (Co) of reserving too much floating capacity = $60 (the profit foregone from a contract that was rejected).
- The "underage cost" (Cu) of reserving too little floating capacity = $100 - $60 = $40 (the extra profit that could have been earned from floating demand).
- Critical ratio = Cu / (Cu + Co) = 40 / (40 + 60) = 0.40
- Optimal floating capacity = NORMINV(0.40, 7000, 1000) = approximately **6,747 circuit boards**
- Contract capacity = 27,000 - 6,747 = approximately **20,253 circuit boards**

---

## 9. Example: Overbooking (Art Studio)

**Context:** An art studio allows overbooking for class registration. Key parameters:
- Classroom capacity: 50 seats
- Profit per seat sold: $100
- Cost of compensating an overbooked customer whose reservation cannot be honored: $200

**No-show distribution (discrete):**

| No-shows (x) | Probability p(x) | Cumulative F(x) = P(X <= x) |
|---|---|---|
| 1 | 0.30 | 0.30 |
| 2 | 0.34 | 0.64 |
| 3 | 0.08 | 0.72 |
| 4 | 0.07 | 0.79 |
| 5 | 0.06 | 0.85 |
| 6 | 0.05 | 0.90 |
| 7 | 0.04 | 0.94 |
| 8 | 0.03 | 0.97 |
| 9 | 0.02 | 0.99 |
| 10 | 0.01 | 1.00 |

**Decision: What is the optimal number of overbookings?**

**Marginal analysis for overbooking:**
- **Benefit of overbooking by one additional slot (if customer does not show up):** $100 (the revenue from filling a seat that would otherwise be empty).
- **Cost of overbooking by one additional slot (if all customers show up):** $200 (the compensation cost).
- **Critical ratio:** P(no-show >= x) > Cost / (Cost + Benefit) = 200 / (200 + 100) = 2/3 = 0.6667

We overbook by x units as long as the probability of having at least x no-shows exceeds 0.6667.

- P(no-show >= 1) = 1.00 > 0.6667 --> Overbook 1st slot (YES)
- P(no-show >= 2) = 1 - F(1) = 1 - 0.30 = 0.70 > 0.6667 --> Overbook 2nd slot (YES)
- P(no-show >= 3) = 1 - F(2) = 1 - 0.64 = 0.36 < 0.6667 --> Do NOT overbook 3rd slot (STOP)

**Optimal overbookings = 2** (accept 52 reservations for 50 seats).

---

## 10. When to Consider Revenue Management?

RM is most applicable and valuable when three conditions hold:

### 10.1 Constrained, Perishable Supply

- **Perishable "product":** The capacity or product cannot be stored for later use. An empty airline seat on a departed flight, an unused hotel room for last night -- the revenue opportunity is lost forever.
- **Constrained supply:** The available product is limited and demand may exceed supply.
- **Sales season is limited:** There is a finite window in which the product/service can be sold.

### 10.2 Demand is Dynamic and Volatile

- Pricing and product allocation decisions must be made **before uncertainty in demand is resolved.** You set prices and allocate capacity before you know exactly how many customers of each type will show up.

### 10.3 Customer Segmentation is Possible

- Valuation varies considerably over the customer base, creating an **opportunity to segment** customers and charge different prices.
- You have **sorting variables** (fences) to segment customers.
- You can **forecast the valuation** of each segment reasonably well.

**Example:** The same unit of capacity (e.g., the same economy airline seat) can be used to deliver services to different customer segments (e.g., business and leisure customers) at different prices, and the marginal unit cost is roughly unaffected.

---

## 11. Revenue Management Obstacles

Even when RM is applicable, several obstacles can limit its effectiveness:

1. **Data mining, forecasting, and optimization:** RM requires sophisticated data systems, accurate demand forecasting, and complex optimization algorithms. Building and maintaining these capabilities is costly.
2. **Competition and automated revenue management:** Competitors may also use RM systems, leading to a "RM arms race" where the competitive advantage is eroded. Automated systems from different airlines may interact in unpredictable ways.
3. **Treat your (best) customers well:** Aggressive RM can alienate loyal customers who feel they are being exploited or treated unfairly. Customer relationships matter beyond any single transaction.
4. **Social concerns and fairness (non-market factors):** Customers may perceive aggressive price discrimination as unfair (e.g., surge pricing during emergencies). Public backlash and regulatory responses can constrain RM practices.

---

# PART 2: STRATEGIC SOURCING (SUPPLY SIDE)

---

## 12. Learning Objectives (Supply Side)

Be able to:

1. **Explain** the concept of strategic sourcing and integrate it with operations strategy
2. **Use a framework** to choose a supply relationship and guide outsourcing decisions
3. **Articulate:**
   - Total Cost of Ownership (TCO)
   - Multi-sourcing
   - Tailored sourcing
   - Structured contracts
4. **Illustrate** how technological change affects sourcing and value chain (dis)integration

---

## 13. Strategic Sourcing: Definition

**Definition:** Deciding on appropriate supply relationships for **each and every activity** in the value chain.

### 13.1 What Strategic Sourcing Typically Involves

1. **Identify** the activity, its requirements, and potential suppliers.
2. **Make-or-buy decision:** Outsourcing, contracting, vertical integration or disintegration.
3. **Define, establish, and manage the bilateral relationship** (CRM -- Customer/Supplier Relationship Management, often but not always involving contracts).

### 13.2 Two Types of Buyers

| Type | Description |
|---|---|
| **Strategic buyers** | Cross-functional teams (e.g., CPO -- Chief Procurement Officer, global commodity managers) that develop **long-term sourcing strategy globally**. They think about which suppliers to use, how to structure relationships, and how sourcing supports competitive strategy. |
| **Transactional buyers** | Execute purchase orders and handle clerical purchasing. They focus on day-to-day order placement and processing. |

---

## 14. Why Strategic Sourcing is Important

### 14.1 Scale of Impact

- Sourcing is the **biggest single cost** for most firms -- it accounts for approximately **60% of the average company's total COGS**.
- This creates **great potential for bottom-line improvement.**

### 14.2 Quantitative Example of Leverage

- Assume purchasing is 85% of COGS.
- If COGS = $80, then purchasing costs = 0.85 x $80 = $68.
- If purchasing costs improve by just 10% (i.e., savings of $6.80), then **margin improves by $6.80** -- which could be a very large percentage improvement in profit margin.

### 14.3 Sourcing Must Be Strategic

- **Cost containment** is fundamental (maximize NPV) -- control costs and prevent wasteful spending.
- But if well practiced, sourcing can also **drive innovation, quality, flexibility, and responsiveness** -- not just cost reduction.
- Requires **talent and mindset beyond transactional purchasing.**
- Must be **integrated with overall operations strategy.**

---

## 15. Example: Toyota's CCC21

**CCC21 = Construction of Cost Competitiveness for the 21st Century**

**Background:**
- In the late 1990s, a rival executive claimed Toyota was paying too much for parts compared to peers.
- Toyota's CEO Mr. Watanabee launched an internal study comparing Toyota component-by-component, car-by-car against competitors.
- The result was humbling: Toyota was the cost winner in just over half of components/systems.

**Action taken:**
- Mr. Watanabee pushed Toyota and its suppliers to redesign 173 components and systems to make them simpler and less expensive without affecting quality.
- Example: Toyota worked with suppliers to consolidate specifications for wire harnesses, producing tens of millions of dollars in savings.

**Result:**
- One trillion yen ($8.68 billion) saved, equivalent to a **30% cut in procurement costs** during 2000-2004.

**Key lesson:** Strategic sourcing is not just about negotiating lower prices -- it involves collaborative redesign of components and systems with suppliers to reduce structural costs.

---

## 16. Integrating Sourcing with Operations Strategy

The process for integrating sourcing with OS:

1. **Start with competitive strategy:** What is the value proposition to customers and shareholders?
2. **Derive competency priorities:** The value proposition indicates the priority ranking of competences that sourcing should consider. What is the relative importance of **cost, quality, flexibility, and responsiveness**?
3. **Weight sourcing decisions accordingly:** This ranking guides how the various elements affecting assets and activities should be weighted in making sourcing decisions. A cost-focused strategy weights cost savings most heavily; a quality-focused strategy prioritizes supplier quality capabilities.

---

## 17. Spectrum of Sourcing Options

There is a spectrum of sourcing relationships, from pure market transactions to full vertical integration:

### 17.1 Market Buy (External Sourcing, Transactional)

**Benefits:**
- **Focus:** The firm can focus on its core activities.
- **Cost:** Access to suppliers who may have lower costs due to specialization and scale.
- **Risk:** Some risks are transferred to the supplier.
- **Flexibility:** Easier to switch suppliers or scale up/down.
- **Access to latest innovation and technology:** Suppliers who serve many customers often invest more in innovation.

### 17.2 Vertical Integration

**Benefits:**
- **Control:** Full control over quality, timing, and processes.
- **Operational and transactional efficiency:** No need for complex contracts or negotiations for routine activities.
- **Aligned incentives:** Because both stages are owned by the same firm, there is no misalignment of incentives. This promotes **optimal investment** in specialized assets.
- **Learning by doing:** Internal production builds capabilities over time.
- **Protection of proprietary assets:** Technology and other IP (Intellectual Property) stays inside the firm.

### 17.3 Long-Term Relationships (Middle of the Spectrum)

Long-term relationships vary along several parameters:
- **Degree of integration:** How tightly coupled are the buyer and supplier?
- **Responsibility:** How much responsibility is delegated to the supplier?
- **Comprehensiveness:** How broad is the scope of the relationship (single component vs. entire system)?

---

## 18. Strategic Sourcing Framework: Five-Question Decision Process

This is a structured framework for making outsourcing decisions. It consists of five sequential questions:

### Question 1: Is outsourcing feasible?

- Is a **stable supply base** with necessary capabilities available?
- Is outsourcing **politically viable** (internal politics, union agreements, government regulations)?
- **If No:** Do not outsource. You must produce internally.
- **If Yes:** Proceed to Question 2.

### Question 2: Is outsourcing necessary?

- Are **internal financial and operational capabilities insufficient** to perform the activity?
- **If Yes:** You must outsource because you lack the internal capability. Proceed to define the relationship.
- **If No:** You have the internal capability. Proceed to Question 3 to determine if outsourcing is strategically desirable.

### Question 3: Is outsourcing in line with strategic priorities and risks?

This is about **alignment** with strategy:
- Is this activity **"non-core"**? Core activities are those that provide competitive advantage and should generally be kept in-house.
- Is the **risk of outsourcing** it tolerable? Risks include loss of control, IP leakage, supply disruption, quality problems.
- **If No:** Keep the activity in-house. The strategic risks outweigh the potential benefits.
- **If Yes:** Proceed to Question 4.

### Question 4: Is outsourcing desirable given our value proposition?

- Can **external suppliers do it better**? Evaluate using TCO (Total Cost of Ownership) and NPV analysis.
- **If No:** Keep the activity in-house. External suppliers do not offer a meaningful advantage.
- **If Yes:** Proceed to Question 5.

### Question 5: Do we have the ability to manage suppliers and ongoing risk?

This determines the **type** of sourcing relationship (the "tailor" decision):
- Can we **contract on detailed requirements**?
- Can we **coordinate incentives and operational flows**?

| Ability to Manage | Recommended Relationship |
|---|---|
| **Easy** | Market Buy (transactional, short-term contracts) |
| **Difficult** | Long-Term Relationships (partnerships, alliances, strategic supplier agreements) |
| **Impossible** | Vertical Integration (bring it back in-house; if you cannot effectively manage an external supplier, you should not outsource) |

---

## 19. Total Cost of Ownership (TCO)

### 19.1 Definition

TCO evaluates the **total cost of sourcing or of using any activity provided by a given supplier.** It goes beyond the purchase price to include all costs associated with the supplier relationship.

### 19.2 Three Steps to Calculate TCO

1. **Determine all activities impacted by the particular sourcing decision.** What processes are affected when you source from this supplier?
2. **Identify and quantify cost drivers using activity-based costing (ABC).** For each activity, what drives cost (e.g., number of orders, defect rates, lead times, inventory holding)?
3. **Calculate the TCO of each potential supplier.** Sum all costs across all affected activities.

### 19.3 Four Uses of TCO

1. **Support make-or-buy decisions and supplier selection:** Compare TCO across suppliers and against internal production costs.
2. **Communicate TCO to manage suppliers over time:** Use TCO as a benchmark to track supplier performance and drive improvement.
3. **Communicate TCO to customers:** Use TCO to sell to customers (showing total value) or to coordinate supply chain decisions.
4. **Improve coordination and performance across the supply chain:** TCO analysis reveals hidden costs and improvement opportunities.

---

## 20. Multi-Sourcing: Single vs. Multiple Suppliers

### 20.1 Arguments in Favor of Single Sourcing

| Argument | Explanation |
|---|---|
| Only available source | The supplier may have a monopoly or unique capability. |
| Quantity too small to split | Splitting a small order across suppliers is impractical. |
| Discounts or lower freight | A single large order may qualify for volume discounts or cheaper shipping. |
| Outstanding quality, service, value | One supplier may be clearly superior. |
| More important customer | Concentrating purchases makes you a more important customer, earning more attention and priority. |
| Focus | Managing one supplier is simpler than managing many. |
| Prerequisite to partnering | Deep partnerships require commitment to a single supplier. |
| Patent protection | Exclusive distributorship or patented technology may restrict supply to one source. |
| Easier to schedule deliveries | JIT (Just-in-Time) and stockless buying arrangements work better with a single supplier. |

### 20.2 Arguments in Favor of Multiple Sourcing

| Argument | Explanation |
|---|---|
| Supply market volatility | Multiple sources reduce exposure to supply disruptions. |
| Limited supplier capacity | No single supplier can meet your full demand. |
| Assurance of supply | Multiple sources provide backup if one fails. |
| Avoid supplier dependence | Reduces bargaining power of any single supplier and prevents lock-in. |
| Volume flexibility | Multiple suppliers provide greater ability to scale up or down. |
| Test new suppliers | Multiple sourcing allows you to evaluate potential new suppliers without full commitment. |
| Strategic considerations | E.g., military preparedness requires diverse supply bases. |
| Government regulations | Some governments require multiple sourcing or local content. |
| Keep suppliers competitive | Competition among suppliers keeps them "on their toes." |

---

## 21. Tailored Sourcing

**Definition:** Using different sourcing strategies for different portions of demand or different product types, rather than applying one uniform sourcing approach.

### 21.1 Dimensions for Tailoring

Sourcing can be tailored along four dimensions:

1. **Volume and responsiveness-based:**
   - Use a **cost-efficient but less flexible supplier** (Supplier 1) for **base demand** (the predictable, steady portion of demand).
   - Use a **responsive supplier** (Supplier 2) with key competency focused on responsiveness for **volatile demand** (the unpredictable, fluctuating portion).
   - This is illustrated by a diagram with time on the x-axis and volume on the y-axis, showing base demand (steady) served by Supplier 1 and volatile demand (spikes above the base) served by Supplier 2.

2. **Product or customization-based:**
   - Different suppliers for standard vs. customized products.

3. **Quality-based:**
   - Different suppliers for components requiring different quality levels.

4. **Innovation and technology-based:**
   - Different suppliers depending on the technology sophistication or innovation pace required.

---

## 22. Structured Contracts

### 22.1 Quantity Discount Contracts

Three types:
- **All-unit quantity discount:** The discount applies to ALL units if the order quantity exceeds a threshold. (e.g., if you order 100+, you get 10% off on all 100 units.)
- **Incremental quantity discount:** The discount applies only to units ABOVE the threshold. (e.g., if you order 100+, only units 101+ get the discount.)
- **Cumulative/volume discount:** The discount is based on total purchases over a period (e.g., a quarter or year), not a single order.

### 22.2 Quantity Flexibility Contracts

- The buyer commits to a certain **percentage of forecasted quantity before demand is known.**
- In return, the supplier invests in **extra capacity** to anticipate possible higher demand.
- This shares the demand risk between buyer and supplier: the buyer takes some downside risk (committed quantity), while the supplier provides upside flexibility.

### 22.3 Buy-Back Contracts

- The supplier agrees to **buy back unsold units** from the buyer at a pre-agreed price.
- This reduces the buyer's risk of overstocking and incentivizes the buyer to order more aggressively, which can benefit the supplier through higher expected sales.

### 22.4 Revenue Sharing Contracts

- Instead of a fixed purchase price, the buyer pays a **lower wholesale price** but shares a **percentage of revenue** with the supplier.
- This aligns the incentives of buyer and supplier: both benefit when products sell well.
- Example: Video rental stores (Blockbuster model) used revenue sharing with movie studios.

### 22.5 Options Contracts

- The buyer purchases **options** (the right but not the obligation) to buy units at a pre-agreed price in the future.
- The buyer pays an upfront premium for each option.
- If demand materializes, the buyer exercises the options and pays the strike price. If demand is low, the options are not exercised and the buyer loses only the premium.
- This gives the buyer flexibility while compensating the supplier for reserving capacity.

---

## 23. Technology Affects Sourcing and Value Chain (Dis)integration

### 23.1 General Principle

Technological change has affected sourcing decisions and value chain structure across many industries:
- **Electronics industry:** Highly modular technologies have enabled extensive outsourcing (e.g., contract manufacturing by companies like Foxconn).
- **Automobile industry:** Increasing modularity has enabled more outsourcing of complete subsystems to tier-1 suppliers.
- **Service industry:** IT and communication technologies have enabled outsourcing of back-office services, call centers, and IT functions.

### 23.2 When Outsourcing Is More Attractive

Outsourcing is more attractive when:

1. **Product technology is modular** with simple interfaces and modules can be standardized across the industry. Modular technology means components can be designed and produced independently with well-defined interfaces.

2. **Process technology can be separated from product technology** and is either:
   - Highly specialized (the supplier has deep expertise), or
   - Benefits from strong **economies of scale, scope, or risk pooling** (the supplier can achieve lower costs by serving multiple customers).

3. **Transportation and information technology:** Transportation of goods and transmission of information is relatively **inexpensive compared to the product or service value.** When shipping and communication are cheap, distance from the supplier matters less.

---

# PART 3: HOW DEMAND AND SUPPLY TOPICS CONNECT

---

## 24. The Demand-Supply Connection

The two topics in Class 6 are deeply connected:

1. **Both are about matching supply with demand strategically.** Revenue Management works on the demand side (managing which demand to accept and at what price), while Strategic Sourcing works on the supply side (managing where supply comes from and at what cost).

2. **Both require integration with competitive strategy.** RM decisions about pricing and capacity allocation should reflect the firm's competitive positioning. Sourcing decisions about make-vs-buy and supplier relationships should reflect the firm's value proposition and competency priorities.

3. **Both involve managing uncertainty:**
   - RM manages **demand uncertainty** (forecasting customer segments, protecting capacity for high-value demand that arrives later).
   - Sourcing manages **supply uncertainty** (multi-sourcing for supply assurance, tailored sourcing for demand volatility, structured contracts to share risk).

4. **Both involve trade-offs between cost and flexibility:**
   - RM trades off between accepting certain low-fare revenue now vs. uncertain high-fare revenue later.
   - Sourcing trades off between low-cost single-sourcing vs. more expensive but more flexible multi-sourcing.

5. **The capacity reservation example (Solectron) bridges both topics:** It involves both a supply decision (how much capacity to contract vs. reserve as floating) and a demand management decision (which customer demand to accept at which price).

6. **Tailored sourcing mirrors capacity segmentation:** Just as RM segments capacity into different fare classes for different customer segments, tailored sourcing segments the supply base into different suppliers for different demand characteristics (base vs. volatile demand, standard vs. customized products).

7. **Structured contracts are the supply-side counterpart of RM pricing mechanisms:** Quantity flexibility contracts, buy-back contracts, revenue sharing contracts, and options contracts all serve to better align supply with uncertain demand -- just as RM's price controls and capacity controls serve to better align demand with constrained supply.

---

## 25. Key Terms and Definitions Summary

| Term | Definition |
|---|---|
| **Revenue Management (RM)** | Collection of demand management practices that maximize revenue from available supply. |
| **Demand Management** | All activities that influence demand, including marketing, sales, and operations-driven practices. |
| **Price Controls** | RM techniques that vary prices to influence demand (price customization, dynamic pricing). |
| **Capacity Controls** | RM techniques that restrict available supply to influence demand (yield management, overbooking, service customization). |
| **WTP (Willingness to Pay)** | The maximum price a customer is willing to pay for a product or service. Also called "reservation price." |
| **1st Degree Price Discrimination** | Charging each customer exactly their WTP. Ideal but usually unachievable because WTP is unobservable. |
| **2nd Degree Price Discrimination** | Designing differentiated products with features and fences that cause customers to self-select and partially reveal their WTP. |
| **Fare Class** | A "product" defined by a combination of price and restrictions (e.g., Class Q, E, G in airlines). |
| **Customer Segmentation** | Dividing customers into groups with similar WTP to charge different prices. |
| **Capacity Segmentation** | Dividing the same physical capacity into different buckets (fare classes) for different customer segments. |
| **Protection Level** | The number of capacity units reserved (protected) for a higher-fare class against demand from a lower-fare class. |
| **Booking Limit** | The maximum number of units available for sale to a particular fare class. Booking limit = Total capacity - Protection level. |
| **Displacement Cost** | The opportunity cost of accepting a low-fare request -- the expected revenue from a future high-fare customer. |
| **Littlewood's Rule** | The optimal protection level Q satisfies: Prob(D_high <= Q) = (p_high - p_low) / p_high. |
| **Overbooking** | Accepting more reservations than physical capacity to account for expected no-shows. |
| **Perishable Product** | A product or capacity unit whose revenue opportunity is lost if not used within a specific time window. |
| **Dynamic Pricing** | Changing prices over time (markdowns, promotions, peak-load pricing). |
| **Yield Management** | Allocating limited capacity to customer segments to maximize total revenue. |
| **Strategic Sourcing** | Deciding on appropriate supply relationships for each activity in the value chain. |
| **TCO (Total Cost of Ownership)** | Total cost of sourcing from a supplier, including purchase price and all indirect costs. |
| **Make-or-Buy Decision** | The decision whether to produce an activity internally or outsource it. |
| **Vertical Integration** | Owning and controlling successive stages of the value chain internally. |
| **Market Buy** | External sourcing through transactional market exchanges. |
| **Long-Term Relationship** | A sourcing arrangement between market buy and vertical integration, involving ongoing partnerships. |
| **Single Sourcing** | Using one supplier for a given input. |
| **Multi-Sourcing** | Using multiple suppliers for a given input. |
| **Tailored Sourcing** | Using different sourcing strategies for different portions of demand or product types. |
| **Quantity Discount Contract** | A contract offering lower per-unit prices for higher order quantities (all-unit, incremental, or cumulative). |
| **Quantity Flexibility Contract** | A contract where the buyer commits to a percentage of forecast and the supplier provides upside flexibility. |
| **Buy-Back Contract** | A contract where the supplier buys back unsold units from the buyer. |
| **Revenue Sharing Contract** | A contract where the buyer pays a lower wholesale price and shares revenue with the supplier. |
| **Options Contract** | A contract where the buyer pays a premium for the right (but not obligation) to purchase units later. |
| **Modular Technology** | Product architecture with standardized interfaces that allows independent design and production of components. |
| **CCC21** | Toyota's "Construction of Cost Competitiveness for the 21st Century" program that saved $8.68 billion through strategic supplier collaboration. |
| **NPV** | Net Present Value -- the fundamental financial metric for evaluating operations strategy decisions. |
| **COGS** | Cost of Goods Sold -- the direct costs of producing goods sold by a company. |

---

## 26. Key Formulas and Calculations

### Littlewood's Rule (Two-Class)
```
Protection Level Q = NORMINV((p_high - p_low) / p_high, mean_demand_high, sd_demand_high)
Booking Limit for low class = Total Capacity - Q
```

### Littlewood's Rule (Multi-Class)
```
For each higher class i against lowest class:
  Q_i = NORMINV(1 - p_low/p_i, mean_i, sd_i)
Total Protection Level = Sum of all Q_i
Booking Limit for lowest class = Total Capacity - Total Protection Level
```

### Overbooking (Marginal Analysis)
```
Overbook by one more unit as long as:
  P(no-shows >= current overbooking level) > Cost_overbook / (Cost_overbook + Revenue_per_seat)
```

### Capacity Reservation (Newsvendor Applied to Capacity)
```
Critical Ratio = (Profit_floating - Profit_contract) / (Profit_floating - Profit_contract + Profit_contract)
             = Cu / (Cu + Co)
Optimal floating capacity = NORMINV(Critical Ratio, mean_demand, sd_demand)
```

### TCO Calculation
```
1. List all activities impacted by sourcing decision
2. Quantify cost drivers using activity-based costing
3. Sum all costs for each potential supplier
4. Compare TCO across suppliers and against internal production
```

### Purchasing Cost Leverage
```
If Purchasing = X% of COGS:
  Savings from Y% improvement = Y% * X% * COGS
  This directly increases margin.
```

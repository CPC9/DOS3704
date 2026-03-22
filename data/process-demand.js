const TOPIC_PROCESS_DEMAND = {
  id: 'process-demand',
  eyebrow: 'Class 6 · Process Decisions (Demand)',
  title: 'Revenue Management & Pricing',
  icon: '📈',
  desc: 'Revenue management · Price discrimination · Littlewood\'s Rule · Overbooking · Newsvendor',
  subtopics: [
    {
      id: 'revenue-management',
      title: 'Revenue Management — Definition & Conditions',
      body: `
        <p class="prose">Revenue Management (RM) refers to the collection of demand management practices that aim to maximize the revenue from especially limited and perishable available supply. When supply is inflexible and cannot easily be changed, operations strategy must match demand to available supply in a value-maximizing way — and RM is the primary toolkit for doing so.</p>

        <div class="section-label">THREE CONDITIONS FOR RM</div>
        <ul class="bullets">
          <li><strong>Capacity is fixed and perishable:</strong> An empty airline seat on a departed flight, an unused hotel room for last night — the revenue opportunity is lost forever. Supply cannot be stored or shifted.</li>
          <li><strong>Demand is heterogeneous:</strong> Customer valuations (willingness to pay) vary considerably across the customer base, creating an opportunity to segment and charge differentiated prices.</li>
          <li><strong>Demand arrives over time:</strong> Booking and purchase decisions happen across an extended sales window, meaning the firm must make allocation decisions before all demand is resolved.</li>
        </ul>

        <div class="section-label">TWO CONTROL LEVERS</div>
        <ul class="bullets">
          <li><strong>Price controls:</strong> Price discrimination (charging different customers different prices) and dynamic pricing (changing prices over time).</li>
          <li><strong>Capacity controls:</strong> Protection levels and booking limits (yield management) and overbooking to account for no-shows.</li>
        </ul>

        <div class="section-label">CLASSIC EXAMPLES</div>
        <ul class="bullets">
          <li>Airlines: first/business/economy fare classes with different restrictions</li>
          <li>Hotels: weekend vs. weekday rates, advance purchase discounts</li>
          <li>Car rentals: seasonal pricing, last-minute deals</li>
          <li>Sporting events and concerts: tiered ticket pricing by seat location and purchase timing</li>
        </ul>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>RM is most valuable when three things align: supply is truly constrained and perishable, demand is heterogeneous enough to segment, and you have better forecasting data than competitors. If competitors match you with equal data, the RM advantage is competed away.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Price Customization</span>
          <span class="link-tag">Related: Capacity Segmentation</span>
          <span class="link-tag">Related: Littlewood's Rule</span>
          <span class="link-tag">Related: Overbooking</span>
        </div>
      `
    },
    {
      id: 'price-customization',
      title: 'Price Customization — 1st & 2nd Degree Price Discrimination',
      body: `
        <p class="prose">Price customization is the practice of segmenting customers by their willingness to pay (WTP) and charging prices that capture more of the consumer surplus. The goal is to move from a single posted price — which inevitably leaves money on the table — toward charging each segment closer to its true reservation price.</p>

        <div class="section-label">1ST DEGREE (PERFECT) PRICE DISCRIMINATION</div>
        <p class="prose">Charge each customer exactly their WTP, capturing all consumer surplus as producer surplus. In theory this maximizes revenue completely, but it requires perfect information about each individual's valuation — which is almost never observable. True 1st degree discrimination is extremely rare in practice.</p>

        <div class="section-label">2ND DEGREE PRICE DISCRIMINATION</div>
        <p class="prose">Design differentiated "products" with different price-quantity bundles and let customers self-select, thereby partially revealing their WTP. This is the practical alternative. Examples include bulk discounts (quantity-based) and product versioning (economy vs. business class).</p>

        <div class="section-label">FENCES — BARRIERS ENFORCING SEGMENTATION</div>
        <p class="prose">Fences are restrictions that prevent customers from accessing cheaper tiers they do not "belong" to. Without effective fences, high-WTP customers will simply buy the cheap option and arbitrage away price differences.</p>
        <ul class="bullets">
          <li><strong>Physical fences:</strong> Non-refundable tickets (business travelers need flexibility; leisure travelers accept restrictions), Saturday-night-stay requirements (deters business travelers from using leisure fares)</li>
          <li><strong>Temporal fences:</strong> Advance purchase discounts (leisure books early; business books late), last-minute pricing (different price sensitivity at different times)</li>
          <li><strong>Customer-based fences:</strong> Student and senior discounts, corporate rates, loyalty program tiers</li>
        </ul>

        <div class="section-label">FARE CLASSES</div>
        <p class="prose">In the airline industry, a single physical seat can belong to multiple "fare classes" (e.g., Class Q, E, G) — each with a distinct price and set of restrictions. The restrictions serve as the fence. Designing effective fare classes is more art than science: fences must correlate strongly with WTP differences to produce clean segmentation.</p>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>The three conditions for price customization to be worthwhile: (1) customer valuations vary considerably, (2) customers can be efficiently sorted into segments, and (3) segment valuations can be forecast with reasonable accuracy. If any condition fails, the segmentation costs exceed the revenue gains.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Dynamic Pricing</span>
          <span class="link-tag">Related: Capacity Segmentation</span>
          <span class="link-tag">Related: Revenue Management</span>
        </div>
      `
    },
    {
      id: 'dynamic-pricing',
      title: 'Dynamic Pricing',
      body: `
        <p class="prose">Dynamic pricing means adjusting prices over time in response to demand conditions, remaining capacity, and time until service delivery. Unlike static price discrimination (which segments by customer type), dynamic pricing responds to the evolving state of demand as the sales window progresses.</p>

        <div class="section-label">THREE APPLICATIONS</div>
        <ul class="bullets">
          <li><strong>Markdowns:</strong> Prices decrease over time to clear perishable inventory (fashion retail — full price at launch, discounts as season ends). The logic is that high-WTP customers buy early at full price; low-WTP customers wait for markdowns.</li>
          <li><strong>Promotions:</strong> Temporary price reductions to stimulate demand during off-peak periods (hotel weekend deals, airline flash sales). Fills capacity that would otherwise go empty without cannibalizing peak revenue.</li>
          <li><strong>Peak-load pricing:</strong> Higher prices during peak demand periods to ration constrained capacity and shift demand to off-peak periods (electricity pricing by time-of-day, Uber surge pricing during events or bad weather).</li>
        </ul>

        <div class="section-label">STRATEGIC LOGIC</div>
        <p class="prose">Different customers book at different times, and time-of-booking correlates with price sensitivity. Business travelers book close to departure (less flexible, less price-sensitive); leisure travelers book far in advance (more flexible, more price-sensitive). Dynamic pricing exploits this temporal correlation.</p>

        <div class="section-label">CUSTOMER FAIRNESS CONCERNS</div>
        <p class="prose">The biggest practical obstacle to dynamic pricing is customer perception of fairness. When customers discover they paid more than someone else for an identical product — especially when the price difference is visible (e.g., Amazon showing price history) — it damages brand trust and can trigger regulatory scrutiny. Surge pricing during emergencies (Uber during hurricanes) has generated significant public backlash.</p>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>Dynamic pricing works best when the price change feels "earned" or logical to customers — markdown prices feel like a deal, peak-load pricing feels like paying for convenience. When the price increase feels arbitrary or exploitative, the revenue gain may be offset by long-term customer relationship damage.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Price Customization</span>
          <span class="link-tag">Related: Revenue Management Obstacles</span>
          <span class="link-tag">Related: Capacity Segmentation</span>
        </div>
      `
    },
    {
      id: 'capacity-segmentation',
      title: 'Capacity Segmentation — Protection Levels & Booking Limits',
      body: `
        <p class="prose">Capacity segmentation is the operational counterpart of customer segmentation. The same physical capacity (e.g., an economy cabin with 300 seats) is divided into buckets corresponding to different fare classes. The core challenge is deciding how much capacity to reserve for high-fare late-bookers versus how much to sell to low-fare early-bookers.</p>

        <div class="section-label">THE CORE PROBLEM</div>
        <p class="prose">If you sell all seats to low-fare advance bookers, nothing remains for high-fare late bookers — you have "spoiled" capacity from a revenue perspective. If you reserve too many seats for high-fare customers who never arrive, seats fly empty. The protection level is the critical decision variable.</p>

        <div class="section-label">KEY DEFINITIONS</div>
        <ul class="bullets">
          <li><strong>Protection level (y₁):</strong> The number of seats held back from low-fare customers, reserved for potential high-fare demand. These seats cannot be sold to low-fare customers even if demand exists.</li>
          <li><strong>Booking limit (b₂):</strong> The maximum number of seats available for sale to low-fare customers. b₂ = Total Capacity − y₁. Once b₂ low-fare bookings are made, the low-fare class is "closed."</li>
          <li><strong>Displacement cost:</strong> The expected revenue lost by selling a seat to a low-fare customer now instead of waiting for a potential high-fare booking. This is the opportunity cost of accepting the low-fare booking.</li>
        </ul>

        <div class="section-label">ACCEPT/DENY DECISION LOGIC</div>
        <p class="prose">Every capacity allocation decision is an accept/deny decision on an incoming booking request. The rule is: <strong>accept the low-fare booking only if the revenue received (r₂) exceeds or equals the displacement cost.</strong></p>
        <ul class="bullets">
          <li>Displacement cost = P(high-fare demand arrives for that seat) × r₁</li>
          <li>Accept low-fare booking at r₂ if: r₂ ≥ P(D₁ &gt; x) × r₁</li>
          <li>Rearranged: accept if P(D₁ &gt; x) ≤ r₂ / r₁</li>
          <li>This is exactly what Littlewood's Rule formalizes</li>
        </ul>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>The protection level is not about rejecting customers — it is about making the correct expected-value trade-off between a certain low revenue now versus an uncertain but higher revenue later. Getting this trade-off right requires accurate forecasting of high-fare demand.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Littlewood's Rule</span>
          <span class="link-tag">Related: Revenue Management</span>
          <span class="link-tag">Related: Price Customization</span>
        </div>
      `
    },
    {
      id: 'littlewoods-rule',
      title: "Littlewood's Rule",
      body: `
        <p class="prose">Littlewood's Rule provides the optimal protection level for a two-fare-class problem. It formalizes the accept/deny decision for low-fare bookings by comparing the marginal revenue of a low-fare booking today with the expected marginal revenue of reserving that seat for a high-fare booking tomorrow.</p>

        <div class="section-label">SETUP</div>
        <ul class="bullets">
          <li>Two fare classes: Class 1 (high fare, r₁) and Class 2 (low fare, r₂), where r₂ &lt; r₁</li>
          <li>Low-fare customers book first (advance leisure travelers); high-fare customers book later (last-minute business travelers)</li>
          <li>D₁ = uncertain demand for high-fare class (realized after low-fare booking window closes)</li>
          <li>Decision: how many seats y₁ to protect from low-fare sales?</li>
        </ul>

        <div class="section-label">THE RULE</div>
        <div class="formula-wrap">
          <div class="formula">Protect seats for Class 1 as long as: P(D₁ &gt; x) ≥ r₂ / r₁</div>
          <div class="formula-explain">
            <strong>P(D₁ &gt; x)</strong> = probability that high-fare demand exceeds x (i.e., probability the reserved seat actually sells at the high fare)<br>
            <strong>r₁</strong> = high fare price<br>
            <strong>r₂</strong> = low fare price<br>
            <strong>r₂ / r₁</strong> = the "critical ratio" — fraction of high fare that the low fare represents<br><br>
            <strong>Optimal protection level y₁*</strong> is where equality holds:<br>
            P(D₁ &gt; y₁*) = r₂ / r₁<br><br>
            Equivalently: P(D₁ ≤ y₁*) = 1 − r₂/r₁ = (r₁ − r₂)/r₁<br><br>
            <strong>Intuition:</strong> Keep protecting the seat as long as the probability of selling it at the high fare exceeds the ratio of low-to-high fare. When that probability drops below the ratio, accept the low-fare booking.
          </div>
        </div>

        <div class="section-label">WORKED EXAMPLE — CLASS NOTES EXAMPLE</div>
        <div class="formula-wrap">
          <div class="formula">r₁ = $2,400 · r₂ = $600 · D₁ ~ N(50, 20²) · Capacity = 300</div>
          <div class="formula-explain">
            <strong>Step 1:</strong> Compute critical ratio = r₂/r₁ = 600/2400 = 0.25<br>
            <strong>Step 2:</strong> Set P(D₁ ≤ y₁*) = 1 − 0.25 = 0.75<br>
            <strong>Step 3:</strong> y₁* = NORMINV(0.75, 50, 20) ≈ <strong>63 seats</strong><br>
            <strong>Step 4:</strong> Booking limit for low fare = 300 − 63 = <strong>237 seats</strong><br><br>
            <strong>Interpretation:</strong> Reserve 63 seats for high-fare customers. Accept low-fare bookings only up to 237. Once 237 low-fare bookings are made, close the low-fare class regardless of remaining capacity.
          </div>
        </div>

        <div class="section-label">GENERAL FORMULA (ANY DISTRIBUTION)</div>
        <div class="formula-wrap">
          <div class="formula">y₁* = F⁻¹((r₁ − r₂) / r₁, mean_D₁, sd_D₁)</div>
          <div class="formula-explain">
            F⁻¹ is the inverse CDF of the high-fare demand distribution. For Normal distribution, use NORMINV in Excel. The protection level is the (1 − r₂/r₁) quantile of high-fare demand.
          </div>
        </div>

        <div class="section-label">THREE-CLASS EXTENSION</div>
        <p class="prose">With three fare classes (A = highest, B = middle, C = lowest), apply Littlewood's Rule iteratively from the lowest fare upward:</p>
        <ul class="bullets">
          <li><strong>Stage C (earliest):</strong> Compute protection level for A against C (ratio = r_C/r_A) and protection level for B against C (ratio = r_C/r_B). Total protection against C = sum of both.</li>
          <li><strong>Stage B (middle):</strong> After C closes, recompute protection level for A against B using remaining capacity and updated demand forecast.</li>
          <li>Protection levels are nested: always protect from the bottom up, with higher fare classes accumulating protection levels from all lower classes.</li>
          <li><strong>Class notes example:</strong> r_A=$2,400, r_B=$800, r_C=$600. Protection for A vs C = NORMINV(0.75, 25, 5.3) ≈ 29; for B vs C = NORMINV(0.25, 50, 8.5) ≈ 44; total = 73 seats protected; booking limit for C = 300 − 73 = 227.</li>
        </ul>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>Littlewood's Rule is the newsvendor logic applied to capacity: the critical ratio r₂/r₁ plays the role of Co/(Cu+Co). Protecting too many seats (over-protecting) means empty seats; protecting too few means selling high-fare capacity to low-fare customers. The optimal point balances these two errors.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Capacity Segmentation</span>
          <span class="link-tag">Related: Overbooking</span>
          <span class="link-tag">Related: Revenue Management</span>
        </div>
      `
    },
    {
      id: 'overbooking',
      title: 'Overbooking',
      body: `
        <p class="prose">Overbooking is the practice of accepting more reservations than physical capacity to account for expected no-shows. Even a "fully booked" flight departs with empty seats when passengers cancel or fail to appear. Overbooking recovers that lost revenue — at the risk of having to compensate passengers when more customers show up than expected.</p>

        <div class="section-label">THE MARGINAL ANALYSIS LOGIC</div>
        <p class="prose">The decision to overbook by one additional slot (the (K+1)th booking above capacity K) is a newsvendor-style marginal analysis:</p>
        <ul class="bullets">
          <li><strong>Marginal benefit of one extra booking:</strong> If that customer is a no-show, the seat fills without any bumping cost — revenue = r.</li>
          <li><strong>Marginal cost of one extra booking:</strong> If all customers show up, one must be bumped at cost C_b (compensation, regulatory penalties, reputational damage).</li>
          <li>Overbook as long as: Expected benefit &gt; Expected cost, i.e., r × P(no-show) &gt; C_b × P(bump needed)</li>
        </ul>

        <div class="section-label">OVERBOOKING FORMULA</div>
        <div class="formula-wrap">
          <div class="formula">Overbook until: P(no-show occurs with x-th extra booking) = r / C_b</div>
          <div class="formula-explain">
            <strong>r</strong> = revenue per seat (benefit of filling an otherwise empty seat)<br>
            <strong>C_b</strong> = bumping cost (full cost of compensating a bumped customer)<br>
            <strong>r / C_b</strong> = critical ratio — the probability of needing to bump at which overbooking is no longer worth it<br><br>
            <strong>Decision rule:</strong> Accept the x-th extra booking as long as P(at least x no-shows) &gt; r / C_b.<br>
            Stop when P(at least x no-shows) ≤ r / C_b.
          </div>
        </div>

        <div class="section-label">WORKED EXAMPLE — ART STUDIO (CLASS NOTES)</div>
        <div class="formula-wrap">
          <div class="formula">Capacity = 50 · r = $100 · C_b = $200</div>
          <div class="formula-explain">
            <strong>Critical ratio</strong> = r / C_b = 100/200 = 0.50<br><br>
            <strong>No-show distribution (discrete):</strong><br>
            P(no-show ≥ 1) = 1.00 &gt; 0.50 → Accept 1st extra booking ✓<br>
            P(no-show ≥ 2) = 1 − F(1) = 1 − 0.30 = 0.70 &gt; 0.50 → Accept 2nd extra booking ✓<br>
            P(no-show ≥ 3) = 1 − F(2) = 1 − 0.64 = 0.36 &lt; 0.50 → STOP ✗<br><br>
            <strong>Optimal overbooking = 2</strong> — accept 52 reservations for 50 seats.<br><br>
            <strong>Note:</strong> The class notes example uses C_b = $200 and r = $100 giving critical ratio 0.50. An alternative parameterization with fare $200 and bumping cost $800 gives ratio 0.25 — use whichever matches your exam scenario.
          </div>
        </div>

        <div class="section-label">PRACTICAL OBSTACLES</div>
        <ul class="bullets">
          <li><strong>Customer anger:</strong> Bumped passengers experience significant inconvenience and often share negative experiences publicly, damaging brand reputation beyond the immediate bumping cost.</li>
          <li><strong>Regulatory limits:</strong> Many jurisdictions impose mandatory compensation requirements and caps on overbooking, making C_b a regulatory floor rather than a purely operational choice.</li>
          <li><strong>Forecasting accuracy:</strong> The analysis depends on accurate no-show probability estimates. Poor forecasts lead to systematic over- or under-booking.</li>
        </ul>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>Overbooking is economically rational precisely because no-shows create deadweight loss — capacity perishes with no revenue. The optimal overbook level equates the marginal revenue of filling an empty seat with the marginal expected bumping cost. The key parameter is the no-show rate relative to the revenue-to-bumping-cost ratio.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Littlewood's Rule</span>
          <span class="link-tag">Related: Revenue Management</span>
          <span class="link-tag">Related: Revenue Management Obstacles</span>
        </div>
      `
    },
    {
      id: 'capacity-reservation',
      title: 'Capacity Reservation — Newsvendor Applied to Capacity',
      body: `
        <p class="prose">Capacity reservation problems arise when a firm must commit to a capacity level before demand is known. This is the supply-side mirror image of the demand-side inventory problem: instead of stocking a product, you are "stocking" production capacity. The Solectron example from Class 6 shows how the newsvendor framework applies directly.</p>

        <div class="section-label">THE SOLECTRON CONTEXT</div>
        <p class="prose">Solectron, a contract electronics manufacturer, can produce up to 27,000 circuit boards per month at its Penang plant. Before demand is known, it must decide how much capacity to commit to long-term contracts (at a certain but lower price) versus how much to hold as "floating" uncontracted capacity (at a higher but uncertain spot price).</p>
        <ul class="bullets">
          <li><strong>Contract capacity:</strong> Sold in advance at $60/board profit — certain revenue, no flexibility premium</li>
          <li><strong>Floating capacity:</strong> Held for spot customers who need short-lead-time capacity at $100/board — but demand is uncertain (D ~ N(7,000, 1,000²))</li>
        </ul>

        <div class="section-label">NEWSVENDOR COST STRUCTURE</div>
        <ul class="bullets">
          <li><strong>Overage cost (C_o):</strong> Cost of reserving too much floating capacity = $60/board (profit foregone from a contract that was rejected to hold floating capacity that goes unused)</li>
          <li><strong>Underage cost (C_u):</strong> Cost of reserving too little floating capacity = $100 − $60 = $40/board (the extra profit missed by not having floating capacity when spot demand arrives)</li>
        </ul>

        <div class="section-label">NEWSVENDOR FORMULA APPLIED TO CAPACITY</div>
        <div class="formula-wrap">
          <div class="formula">P(D ≤ Q*) = C_u / (C_u + C_o)</div>
          <div class="formula-explain">
            <strong>Q*</strong> = optimal floating capacity to reserve<br>
            <strong>C_u</strong> = underage cost per unit = $40<br>
            <strong>C_o</strong> = overage cost per unit = $60<br><br>
            <strong>Critical ratio</strong> = 40 / (40 + 60) = 0.40<br>
            <strong>Q* = NORMINV(0.40, 7000, 1000) ≈ 6,747 boards</strong><br>
            Contract capacity = 27,000 − 6,747 ≈ <strong>20,253 boards</strong><br><br>
            <strong>Interpretation:</strong> Reserve 6,747 boards of floating capacity. Commit the remaining 20,253 to contracts. The critical ratio below 0.5 means we reserve less than the mean because the overage cost ($60) exceeds the underage cost ($40) — it is more expensive to have idle floating capacity than to miss a spot sale.
          </div>
        </div>

        <div class="section-label">CAPACITY CONTRACTS AS OPTIONS</div>
        <p class="prose">An alternative framing views capacity reservation fees as purchasing an option on capacity. A firm pays a reservation fee to hold capacity rights; it then exercises (or not) based on realized demand. This connects directly to the option value framework from Class 3 — waiting to commit has value when demand uncertainty is high.</p>
        <ul class="bullets">
          <li>Reservation fee = option premium</li>
          <li>Strike price = exercise cost of using reserved capacity</li>
          <li>Demand uncertainty = volatility driving option value</li>
        </ul>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>The capacity reservation problem is the newsvendor problem with capacity as the "inventory." The overage cost is the opportunity cost of holding idle capacity (foregone contract revenue); the underage cost is the foregone spot premium. When C_o &gt; C_u, the optimal Q* is below the mean demand — build in conservatism on the flexible side.</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Capacity Sizing (Class 3)</span>
          <span class="link-tag">Related: Option Value of Waiting (Class 3)</span>
          <span class="link-tag">Related: Contract Types (Class 6 Supply)</span>
        </div>
      `
    },
    {
      id: 'rm-obstacles',
      title: 'Revenue Management Obstacles',
      body: `
        <p class="prose">Even when the three conditions for effective RM are met — constrained perishable supply, heterogeneous demand, and demand arriving over time — several practical obstacles can erode or eliminate the benefits. Understanding these obstacles is essential for assessing whether RM investment is worthwhile and how to implement it sustainably.</p>

        <div class="section-label">OBSTACLE 1: DATA AND SYSTEM REQUIREMENTS</div>
        <p class="prose">RM requires sophisticated real-time infrastructure that most firms cannot build cheaply or quickly:</p>
        <ul class="bullets">
          <li>Real-time demand tracking across all fare classes and booking channels</li>
          <li>Accurate historical demand forecasting disaggregated by segment, time-to-departure, and competitive context</li>
          <li>Automated optimization systems that update protection levels and booking limits continuously</li>
          <li>Integration across reservation systems, pricing engines, and distribution channels</li>
        </ul>

        <div class="section-label">OBSTACLE 2: COMPETITIVE ARMS RACE</div>
        <p class="prose">When all competitors in an industry adopt RM systems, the competitive advantage from RM tends to be competed away:</p>
        <ul class="bullets">
          <li>If every airline uses yield management with similar data and algorithms, no single airline gains a systematic edge</li>
          <li>Automated RM systems from competing airlines can interact in unstable ways — one system raising prices triggers competitors to raise prices, which feeds back as false demand signals</li>
          <li>The arms race dynamic means RM investment may be a cost of staying competitive rather than a source of above-normal returns</li>
          <li>First-mover advantage matters: airlines that adopted RM early (American Airlines in the 1980s) captured significant value before competitors caught up</li>
        </ul>

        <div class="section-label">OBSTACLE 3: CUSTOMER FAIRNESS CONCERNS</div>
        <p class="prose">Price discrimination is economically rational but can feel deeply unfair to customers:</p>
        <ul class="bullets">
          <li>Customers who discover they paid more than a neighbor for the same seat experience significant dissatisfaction, even if the price difference reflects genuine cost or restriction differences</li>
          <li>Surge pricing during emergencies (Uber during hurricanes, hotel rates during disasters) has generated major public backlash and calls for price gouging regulation</li>
          <li>Social media amplifies price fairness incidents — a single viral story about discriminatory pricing can cause brand damage worth far more than any RM revenue gain</li>
          <li>Loyalty customers are particularly sensitive: they expect preferential treatment, and discovering they paid more than a new customer destroys trust</li>
        </ul>

        <div class="section-label">STRATEGIC IMPLICATION</div>
        <p class="prose">RM is most defensibly valuable when: (1) you have better data than competitors, creating an informational edge that is durable; (2) demand heterogeneity is large enough to justify segmentation complexity; and (3) fences are designed to feel "fair" — customers accept price differences when the restrictions clearly map to service differences they understand.</p>

        <div class="insight-box">
          <div class="label">KEY INSIGHT</div>
          <p>The fairness obstacle is not just a PR problem — it is a structural constraint on how aggressively RM can be deployed. The best RM systems pair economic optimization with customer relationship management: you cannot optimize revenue in period t while destroying the customer lifetime value that generates revenue in periods t+1, t+2, ...</p>
        </div>

        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
          <span class="link-tag">Related: Revenue Management</span>
          <span class="link-tag">Related: Dynamic Pricing</span>
          <span class="link-tag">Related: Price Customization</span>
        </div>
      `
    }
  ]
};

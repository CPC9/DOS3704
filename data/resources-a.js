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
      body: `
<p class="prose">A <strong>capacity strategy</strong> is a firm's long-term plan for developing the resources — real assets like plants, equipment, and labor — that enable it to meet future demand. Capacity decisions are among the most consequential in operations strategy because they are capital-intensive, largely irreversible, and take years to materialize. Getting them wrong (too much, too little, too early, or too late) can destroy hundreds of millions in shareholder value.</p>

<div class="section-label">THE FOUR CAPACITY DECISIONS</div>
<ul class="bullets">
  <li><strong>Size:</strong> How much capacity should we invest in? (the "how many" question)</li>
  <li><strong>Timing:</strong> When should we adjust capacity levels? (the "when" question)</li>
  <li><strong>Type:</strong> What kind of capacity — dedicated to one product, or flexible across many? (the "what kind" question)</li>
  <li><strong>Location:</strong> Where should capacity be located? (the "where" question — covered in Class 5)</li>
</ul>

<div class="section-label">WHY SEQUENTIAL ORDERING MATTERS</div>
<p class="prose">These four decisions are made in sequence because each upstream decision constrains the downstream ones. You must decide <em>how much</em> before deciding <em>when</em>, because the scale of investment shapes the urgency and timing. You decide <em>how much and when</em> before deciding <em>what type</em>, because the volume expectations determine whether dedicated or flexible capacity is justified. Location follows last because it depends on the finalized capacity size and type. This logical ordering mirrors the OS Framework's structure: Resources (asset portfolio) → Processes (activity network) → Capabilities.</p>

<div class="section-label">THE STRATEGIC GOAL: NPV MAXIMIZATION</div>
<p class="prose">The objective of capacity strategy is to build and maintain a <strong>resource portfolio that maximizes NPV</strong>. Every capacity decision — how much to build, when to build it, what type — is ultimately evaluated against whether it creates more value than it costs. This connects directly to the OS Framework: Business Strategy → Capabilities → Operations Strategy (Resources + Processes) → NPV.</p>

<div class="section-label">THE CAPACITY-INVENTORY-WAITING TRIANGLE</div>
<p class="prose">When demand is uncertain, firms must choose how to buffer that uncertainty. There are exactly three ways to do so, forming a triangle of strategic alternatives:</p>
<ul class="bullets">
  <li><strong>Excess Capacity (make resources wait):</strong> Invest in more capacity than average demand — fast response, high fixed cost</li>
  <li><strong>Inventory (make products wait):</strong> Build product ahead of demand — medium response, working capital cost, only works for tangible goods</li>
  <li><strong>Waiting Queue (make customers wait):</strong> Let customers queue or go on backorder — low capacity cost, but risks lost sales and goodwill</li>
</ul>
<p class="prose">The optimal triangle position depends on the relative costs of each buffer and the firm's competitive positioning. A restaurant competing on speed cannot rely on waitlists; a seasonal manufacturer can accumulate inventory; a capital-light service firm may prefer waitlists over idle capacity.</p>

<div class="section-label">THE FUNDAMENTAL TENSION</div>
<p class="prose">More capacity reduces the risk of unmet demand — but idle capacity is expensive. The entire analytical apparatus of Class 3 (marginal analysis, critical ratio, option value of waiting) exists to resolve this tension optimally under uncertainty.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Capacity strategy is not just about avoiding shortfalls — it is about finding the NPV-maximizing portfolio position given uncertainty, capital costs, and competitive dynamics. The four decisions (size, timing, type, location) must be made in order because each constrains the next.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">OS Framework (Class 1)</span>
  <span class="link-tag">NPV (Class 1)</span>
  <span class="link-tag">Capacity Sizing</span>
  <span class="link-tag">Capacity Timing</span>
  <span class="link-tag">Capacity-Inventory-Waiting Triangle</span>
</div>
`
    },
    {
      id: 'capacity-sizing',
      title: 'Capacity Sizing — Critical Ratio & Marginal Analysis',
      body: `
<p class="prose">The central question in capacity sizing is: <strong>how much capacity should we invest in when demand is uncertain?</strong> Too little capacity means lost sales and unmet demand; too much means expensive idle assets. The answer comes from <strong>marginal analysis</strong> — a framework that finds the optimal capacity level by balancing the marginal value of adding one more unit of capacity against its marginal cost.</p>

<div class="section-label">THE MARGINAL ANALYSIS FRAMEWORK</div>
<p class="prose">The logic is simple: keep adding capacity as long as each additional unit of capacity creates more value than it costs. Stop when marginal value equals marginal cost. The key inputs are:</p>
<ul class="bullets">
  <li><strong>Cu (underage cost / cost of too little capacity):</strong> The profit margin lost when demand exceeds capacity — includes unit operating profit margin <em>m</em> plus any penalty cost for unmet demand <em>c_p</em>. This is Cu = m + c_p.</li>
  <li><strong>Co (overage cost / cost of too much capacity):</strong> The cost of having one unit of idle capacity — equal to the marginal capacity investment cost <em>c_K</em>.</li>
  <li><strong>Q* (optimal capacity level):</strong> The level at which the probability of demand falling at or below Q* equals the critical ratio.</li>
</ul>

<div class="section-label">THE CRITICAL RATIO FORMULA</div>
<div class="formula-wrap">
  <div class="formula">P(D ≤ Q*) = Cu / (Cu + Co) = (m + c_p − c_K) / (m + c_p)</div>
  <div class="formula-explain">
    <strong>Variables:</strong><br>
    Cu = underage cost = m + c_p (profit margin + penalty for unmet demand)<br>
    Co = overage cost = c_K (marginal capacity investment cost)<br>
    Q* = optimal capacity level (what we are solving for)<br>
    P(D ≤ Q*) = probability that demand falls at or below Q*, i.e. the CDF F(Q*)<br><br>
    <strong>Intuition:</strong> Balance the risk of being short (incurring Cu on every unit of unmet demand) against the risk of excess (incurring Co on every unit of idle capacity). If Cu is large relative to Co, the critical ratio is high — meaning you should build safety capacity above the mean to avoid costly shortfalls. If Co is large relative to Cu, the ratio is low — invest below the mean and let some customers wait.
  </div>
</div>

<div class="section-label">SOLVING FOR OPTIMAL CAPACITY</div>
<ul class="bullets">
  <li><strong>General form:</strong> Q* = F<sup>−1</sup>(CR), where F is the cumulative demand distribution and CR is the critical ratio</li>
  <li><strong>Discrete demand:</strong> Find the smallest Q* such that F(Q*) ≥ CR using the demand table</li>
  <li><strong>Normal demand D ~ N(μ, σ²):</strong> Q* = μ + z* × σ, where z* = NORM.S.INV(CR)</li>
</ul>

<div class="section-label">CONNECTING BACK TO THE TRIANGLE</div>
<ul class="bullets">
  <li>CR > 50% (c_K small relative to margins): Q* > mean demand → invest in safety capacity → "make resources wait" position</li>
  <li>CR < 50% (c_K large relative to margins): Q* < mean demand → scale down → "make customers wait" position</li>
  <li>CR = 50%: size at the median demand — balanced position</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The critical ratio is the newsvendor formula applied to capacity. A high critical ratio (say 0.9) means you should build well above average demand — the cost of being short is so much greater than the cost of idle capacity that significant safety capacity is justified. When c_K is very small, build abundantly; when margins are thin and capacity is expensive, stay lean.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Economies of Scale</span>
  <span class="link-tag">Option Value of Waiting</span>
  <span class="link-tag">Capacity-Inventory-Waiting Triangle</span>
  <span class="link-tag">Capacity Strategy Overview</span>
</div>
`
    },
    {
      id: 'economies-of-scale',
      title: 'Economies of Scale',
      body: `
<p class="prose"><strong>Economies of scale</strong> (EOS) describe the phenomenon where the cost of capacity does not increase proportionally with its size — doubling capacity costs less than double. This is one of the most powerful drivers of capacity sizing decisions, and it is why large, centralized facilities are often preferred over many small, distributed ones. Understanding EOS is essential for evaluating the true cost of capacity investments.</p>

<div class="section-label">THE FORMAL DEFINITION</div>
<p class="prose">EOS holds whenever C(2K) < 2·C(K) — that is, the cost of twice as much capacity is less than twice the cost of the original size. This creates a concave relationship between capacity size and total investment cost.</p>

<div class="section-label">TWO CAPEX MODELS</div>
<ul class="bullets">
  <li><strong>Linear CapEx (no EOS):</strong> C(K) = c₀ + c_K × K — fixed cost plus a constant marginal cost per unit of capacity. No scale economies; doubling K doubles variable CapEx.</li>
  <li><strong>Power CapEx (with EOS):</strong> See formula below — the scale exponent α < 1 creates concavity.</li>
</ul>

<div class="section-label">THE POWER CAPEX FORMULA</div>
<div class="formula-wrap">
  <div class="formula">CapEx(K) = c₀ + (c_K / α) × K^α,  where 0 &lt; α &lt; 1</div>
  <div class="formula-explain">
    <strong>Variables:</strong><br>
    K = capacity size (e.g., output rate in units per year)<br>
    c₀ = fixed capacity investment cost (the intercept — a floor cost regardless of scale)<br>
    c_K = marginal capacity investment cost at K = 1 (slope parameter)<br>
    α = scale exponent, strictly between 0 and 1<br><br>
    <strong>Intuition:</strong> Because α < 1, the function K^α grows <em>slower than linearly</em>. Doubling K multiplies the variable cost by 2^α < 2 — so doubling capacity costs less than double. The smaller α is, the stronger the economies of scale: α = 0.6 (the "six-tenths rule") means doubling capacity only increases the variable portion of CapEx by 2^0.6 ≈ 1.52× instead of 2×. When α = 1, the model collapses to the linear form with no scale economies.
  </div>
</div>

<div class="section-label">THE SIX-TENTHS RULE</div>
<p class="prose">In many process industries (chemicals, refining, pharmaceuticals), empirical data shows that α ≈ 0.6. This means doubling capacity typically increases CapEx by only ~52% rather than 100%. This rule of thumb is widely used in early-stage capacity planning when detailed engineering cost data is unavailable.</p>

<div class="section-label">STRATEGIC IMPLICATIONS</div>
<ul class="bullets">
  <li><strong>Favor large, centralized capacity:</strong> EOS means one big plant is cheaper than two small plants producing the same total output</li>
  <li><strong>Lumpy capacity additions:</strong> When EOS is strong, adding capacity in large increments is optimal — but creates periods of excess capacity before demand catches up</li>
  <li><strong>Tension with flexibility:</strong> Large centralized dedicated facilities exploit EOS but sacrifice flexibility; smaller distributed flexible facilities sacrifice EOS but gain adaptability</li>
  <li><strong>First-mover advantage:</strong> A firm that builds large early can achieve lower per-unit costs, deterring competitor entry</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Economies of scale are why "bigger is better" — but only when demand is sufficiently certain and stable to fill large capacity. When demand is uncertain or variable, the lower average cost of large scale must be weighed against the risk of stranded (idle) assets. EOS and uncertainty pull in opposite directions: EOS favors large and early; uncertainty favors small and late.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Capacity Sizing</span>
  <span class="link-tag">6 Location Drivers (Class 5)</span>
  <span class="link-tag">Ferdows' 6 Roles (Class 5)</span>
  <span class="link-tag">Dedicated vs. Flexible</span>
</div>
`
    },
    {
      id: 'capacity-timing',
      title: 'Capacity Timing — 5 Strategies',
      body: `
<p class="prose">Once you know <em>how much</em> capacity to build, the next question is <em>when</em> to build it. <strong>Capacity timing</strong> deals with the dynamics of capacity investment relative to demand growth over time. The choice of timing strategy has major implications for capital allocation, competitive positioning, and the capacity-inventory-waiting position. There are five recognized strategies, each with distinct trade-offs.</p>

<div class="section-label">STRATEGY 1: LEADING</div>
<ul class="bullets">
  <li><strong>Mechanism:</strong> Build capacity <em>before</em> demand materializes — capacity line stays above the demand curve</li>
  <li><strong>Pros:</strong> Ensures no capacity shortfall; allows inventory pre-building; signals commitment to market; may deter competitor entry</li>
  <li><strong>Cons:</strong> Requires earlier capital outlay (higher NPV cost); risk of large stranded investment if demand disappoints; reduces option value</li>
  <li><strong>When to use:</strong> When first-mover advantage is critical; when lead times are long; when production learning is important (earlier start moves you further down the learning curve)</li>
</ul>

<div class="section-label">STRATEGY 2: LAGGING</div>
<ul class="bullets">
  <li><strong>Mechanism:</strong> Add capacity <em>after</em> demand has increased — capacity line stays below the demand curve temporarily</li>
  <li><strong>Pros:</strong> Preserves optionality (NPV cost deferred); lower risk of stranded assets; allows demand uncertainty to resolve before committing</li>
  <li><strong>Cons:</strong> Creates capacity shortages in the short run — customers must wait or sales are lost; competitors may capture demand during the gap</li>
  <li><strong>When to use:</strong> When demand is uncertain; when capacity is expensive and hard to redeploy; when option value of waiting is positive</li>
</ul>

<div class="section-label">STRATEGY 3: DEMAND CHASING</div>
<ul class="bullets">
  <li><strong>Mechanism:</strong> Capacity closely tracks actual demand — frequent small adjustments keep capacity tightly matched to demand</li>
  <li><strong>Pros:</strong> Minimizes both excess capacity and shortfalls; efficient use of capital</li>
  <li><strong>Cons:</strong> Requires capacity to be easily adjustable (not feasible with lumpy or irreversible investments); high transaction costs if adjustments are frequent</li>
  <li><strong>When to use:</strong> When capacity is relatively frictionless (e.g., labor, cloud computing); when demand signals are clear and frequent</li>
</ul>

<div class="section-label">STRATEGY 4: HYBRID</div>
<ul class="bullets">
  <li><strong>Mechanism:</strong> Combines leading and lagging — periods of inventory buildup alternate with periods of capacity shortage; the capacity staircase crosses the demand curve</li>
  <li><strong>Pros:</strong> Balances costs of excess and shortage; more realistic than pure lead or pure lag</li>
  <li><strong>Cons:</strong> Requires careful planning to manage the alternating surpluses and shortfalls</li>
  <li><strong>When to use:</strong> When neither pure leading nor pure lagging is optimal; common in practice</li>
</ul>

<div class="section-label">STRATEGY 5: FOLLOW-YOUR-COMPETITOR</div>
<ul class="bullets">
  <li><strong>Mechanism:</strong> Match capacity additions to competitor actions — build when they build</li>
  <li><strong>Pros:</strong> Avoids being competitively disadvantaged; signals competitive intent; avoids over-building if industry-wide demand is uncertain</li>
  <li><strong>Cons:</strong> Can lead to industry-wide over-capacity if all players follow each other; reactive rather than proactive</li>
  <li><strong>When to use:</strong> When competitive dynamics dominate (e.g., oligopolistic industries); when market share is the primary objective</li>
</ul>

<div class="section-label">NPV IMPLICATIONS OF TIMING</div>
<ul class="bullets">
  <li><strong>Leading strategy:</strong> Requires earlier capital outlay — higher NPV cost due to time value of money; justified when the revenue benefit (e.g., first-mover advantage, learning) exceeds the cost of early commitment</li>
  <li><strong>Lagging strategy:</strong> Defers capital — lower NPV cost; the delay is essentially an option on future demand. Justified when uncertainty is high and option value is large</li>
  <li><strong>Key formula:</strong> Option Value of Waiting = NPV(wait) − NPV(invest now) — when positive, lag; when negative, lead</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The choice between leading and lagging is fundamentally a bet on uncertainty vs. first-mover advantage. Leading bets that demand will materialize and that being first matters. Lagging bets that waiting to see demand is worth more than the risk of being late. The option value of waiting framework (next subtopic) gives a rigorous way to evaluate this trade-off.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Option Value of Waiting</span>
  <span class="link-tag">Capacity Sizing</span>
  <span class="link-tag">Economies of Scale</span>
  <span class="link-tag">Capacity Strategy Overview</span>
</div>
`
    },
    {
      id: 'option-value',
      title: 'Option Value of Waiting',
      body: `
<p class="prose">One of the most powerful and counterintuitive insights in capacity strategy is that <strong>delaying a capacity investment can have positive value</strong>. This is the <em>option value of waiting</em> — the financial benefit you capture by deferring commitment until you have better information about whether to invest and how much. It is the analytical foundation for the lagging timing strategy.</p>

<div class="section-label">THE INTUITION</div>
<p class="prose">Think of a capacity investment like a financial option. When you invest now, you eliminate flexibility — you are fully committed to a specific capacity level regardless of how demand turns out. When you wait, you preserve the option to tailor your investment to the actual demand you observe. The value of that flexibility is the option value. This is directly analogous to financial real options theory: the right but not the obligation to invest in a project at a future date.</p>

<div class="section-label">THE FORMULA</div>
<div class="formula-wrap">
  <div class="formula">Option Value = NPV(wait and invest later) − NPV(invest now)</div>
  <div class="formula-explain">
    <strong>Variables:</strong><br>
    NPV(wait and invest later) = expected NPV of waiting one period, observing demand, then investing optimally given what you learn<br>
    NPV(invest now) = NPV of committing to a capacity level today before uncertainty is resolved<br><br>
    <strong>Decision rule:</strong><br>
    Option Value > 0 → WAIT (delay has value; the benefit of learning exceeds the cost of deferral)<br>
    Option Value < 0 → INVEST NOW (early commitment is better; don't wait)<br>
    Option Value = 0 → Indifferent between waiting and investing now<br><br>
    <strong>Intuition:</strong> The option value captures the <em>asymmetric payoff</em> of waiting. If you wait and demand is high, you invest aggressively and capture full upside. If demand is low, you invest little or not at all and avoid the downside. Committing now forces you to live with the investment regardless of demand outcome — you cannot avoid the downside.
  </div>
</div>

<div class="section-label">ACER STYLIZED EXAMPLE</div>
<p class="prose">Consider a capacity decision with three demand scenarios: Blockbuster (200K units/yr, 25% probability), Success (100K units/yr, 50%), and Dud (30K units/yr, 25%). Capacity costs $8M fixed + $50/unit; profit is $80/PC.</p>
<ul class="bullets">
  <li><strong>NPV(Invest Now at 100K capacity):</strong> −$13M + PV of $6.6M/yr for 4 years at 25% discount = <strong>$2.59M</strong></li>
  <li><strong>NPV(Wait one year, then invest optimally):</strong> Wait to learn demand; invest at 200K if Blockbuster, 100K if Success, $0 if Dud = <strong>$3.69M</strong></li>
  <li><strong>Option Value of Waiting = $3.69M − $2.59M = $1.10M → WAIT</strong></li>
</ul>
<p class="prose">The value of waiting comes entirely from avoiding the Dud scenario — if demand is low, you do not invest $13M only to earn $2.4M/year. Commitment today forces you to absorb that downside; waiting lets you sidestep it.</p>

<div class="section-label">WHEN IS OPTION VALUE HIGH?</div>
<ul class="bullets">
  <li><strong>Demand uncertainty is high:</strong> More variance in outcomes → larger asymmetric benefit from observing demand before committing</li>
  <li><strong>Investment is large and irreversible:</strong> Bigger downside of the wrong commitment → more value in deferring it</li>
  <li><strong>Information arrives over time:</strong> The waiting period must actually reveal useful signal; if demand will not be clearer next year, waiting has less value</li>
  <li><strong>Delay cost is low:</strong> If waiting is cheap (low lost sales, no competitor risk), option value is easily justified</li>
</ul>

<div class="section-label">COUNTER-ARGUMENTS: WHEN NOT TO WAIT</div>
<ul class="bullets">
  <li><strong>First-mover advantage:</strong> Waiting may let competitors lock up market share, favorable locations, key customers, or learning curve benefits — these costs erode the option value</li>
  <li><strong>Production learning:</strong> If experience reduces cost, earlier investment means more time on the learning curve; waiting sacrifices those cost reductions</li>
  <li><strong>Long construction lead times:</strong> If capacity takes 3 years to build, waiting to see demand is often not feasible — must lead even under uncertainty</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Option value is not just a financial concept — it is a <em>strategic posture</em>. Firms that preserve flexibility by avoiding premature commitments can adapt better to uncertain futures. But every option has a price: the cost is the competitive risk of being late. The decision rule is simple — if NPV(wait) > NPV(now), wait. The hard part is estimating both NPVs correctly under realistic scenario probabilities.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Capacity Timing</span>
  <span class="link-tag">Capacity Sizing</span>
  <span class="link-tag">NPV (Class 1)</span>
  <span class="link-tag">4 Sources of Flexibility Value</span>
</div>
`
    },
    {
      id: 'capacity-inventory-waiting',
      title: 'Capacity-Inventory-Waiting Triangle',
      body: `
<p class="prose">Demand is uncertain. Supply cannot always exactly match demand. Every firm must choose how to buffer this mismatch — and there are exactly three fundamental ways to do so. The <strong>Capacity-Inventory-Waiting Triangle</strong> maps out these three options and the strategic logic for choosing among them.</p>

<div class="section-label">THE THREE BUFFERS</div>
<ul class="bullets">
  <li><strong>Excess Capacity (make resources wait):</strong> Invest in more capacity than average expected demand. Resources sit idle during slow periods, ready to absorb demand spikes immediately. Cost: high fixed capital expenditure (c_K × safety capacity). Speed: instant. Strategic fit: markets demanding immediate responsiveness (e.g., emergency services, cloud computing).</li>
  <li><strong>Inventory (make products wait):</strong> Build product ahead of demand and hold it in stock. When demand spikes, draw down inventory rather than ramping capacity. Cost: working capital tied up + storage + obsolescence risk. Speed: fast (limited by replenishment lead time). Strategic fit: tangible goods with predictable demand patterns and low obsolescence risk (e.g., consumer packaged goods).</li>
  <li><strong>Waiting Queue (make customers wait):</strong> Allow demand to queue when it exceeds current supply capacity. Customers wait (backorders, waitlists, delayed delivery). Cost: low capacity cost; high customer experience cost (risk of lost sales, goodwill damage, substitution). Speed: variable. Strategic fit: services or products where customers accept delays (e.g., custom manufacturing, elective surgery).</li>
</ul>

<div class="section-label">THE TRIANGLE RELATIONSHIP</div>
<p class="prose">The three buffers are substitutes. Invest more in one and you reduce the need for the others. This is the triangle's core insight:</p>
<ul class="bullets">
  <li>High excess capacity → little inventory needed (rapid production response) and few customer waits</li>
  <li>High inventory → capacity can run at steady state without spikes; no customers wait</li>
  <li>High waiting tolerance → no need for safety capacity or pre-built inventory</li>
  <li>Optimal position: the combination that minimizes total system cost (capital + working capital + lost revenue) given your competitive positioning</li>
</ul>

<div class="section-label">CONNECTING TO THE CRITICAL RATIO</div>
<p class="prose">The critical ratio formula (from Capacity Sizing) tells you directly where to sit in the triangle:</p>
<ul class="bullets">
  <li>CR > 0.5: Q* > mean demand → excess capacity → "make resources wait" position</li>
  <li>CR < 0.5: Q* < mean demand → capacity shortfall → customers wait or inventory absorbs variance</li>
  <li>CR = 0.5: size at median demand → balanced triangle position</li>
</ul>

<div class="section-label">STRATEGIC CHOICE: WHICH BUFFER FITS YOUR BUSINESS?</div>
<ul class="bullets">
  <li><strong>Compete on responsiveness/speed:</strong> Favor excess capacity (and potentially inventory) — do not make customers wait</li>
  <li><strong>Compete on price/cost:</strong> Minimize capital; favor waitlists or inventory where possible; avoid idle capacity</li>
  <li><strong>Tangible vs. intangible products:</strong> Inventory is only available for tangible products; pure services must buffer with capacity or queues</li>
  <li><strong>Perishable demand:</strong> If unserved demand is permanently lost (e.g., empty airline seat), favor capacity over waiting queue</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The triangle forces an explicit strategic choice. Many firms inadvertently land in a suboptimal position — too much idle capacity when customers would actually wait, or too many waitlists when the cost of idle capacity is trivial. Making the choice explicit, and pricing all three buffers correctly, is what separates a well-designed capacity strategy from an accidental one.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Capacity Sizing</span>
  <span class="link-tag">Capacity Timing</span>
  <span class="link-tag">Dedicated vs. Flexible</span>
  <span class="link-tag">Capacity Strategy Overview</span>
</div>
`
    },
    {
      id: 'dedicated-vs-flexible',
      title: 'Capacity Type — Dedicated vs. Flexible',
      body: `
<p class="prose">After deciding how much capacity to build and when to build it, the third capacity decision is: <strong>what type of capacity?</strong> The central dimension of this decision is the degree of flexibility — the ability to serve multiple products or adapt to changing demands. Dedicated capacity is optimized for a single product; flexible capacity can serve many. Both have legitimate strategic roles, and the choice between them is one of the most consequential in operations strategy.</p>

<div class="section-label">THE FLEXIBILITY SPECTRUM</div>
<p class="prose">Capacity type is not binary — it is a spectrum from fully dedicated to fully flexible, with many hybrid configurations in between. The two extremes are:</p>
<ul class="bullets">
  <li><strong>Fully Dedicated (Specialized):</strong> Each unit of capacity is optimized for one product. Equipment, piping, controls, and operator expertise are all tailored to that product. No changeover possible without major retrofit (cost ≈ building new facility).</li>
  <li><strong>Fully Flexible (General-Purpose):</strong> Capacity can produce any product. Equipment handles a wide range of chemistries, temperatures, and flows. Changeovers are possible with minimal downtime.</li>
</ul>

<div class="section-label">WHY DEDICATED CAPACITY IS PREFERRED FOR HIGH-VOLUME STABLE DEMAND</div>
<ul class="bullets">
  <li><strong>Lower per-unit investment cost:</strong> Optimized design → simpler, cheaper equipment; no "just in case" components</li>
  <li><strong>Lower variable operating cost:</strong> Focused operators develop deep expertise → fewer batch failures, steeper learning curve, better yields</li>
  <li><strong>Higher utilization:</strong> No changeover downtime; runs continuously on one product</li>
  <li><strong>Optimal when:</strong> Demand is high volume, long-lived, and highly predictable; product and process are mature and stable</li>
</ul>

<div class="section-label">WHY FLEXIBLE CAPACITY IS PREFERRED FOR UNCERTAIN OR VARIED DEMAND</div>
<ul class="bullets">
  <li><strong>Handles multiple products:</strong> Can shift between products as demand mix evolves — avoids stranded assets if one product fails</li>
  <li><strong>Pooled capacity:</strong> Demand variability across products partially cancels out (risk pooling), so less total buffer capacity is needed</li>
  <li><strong>Better information updating:</strong> Can wait until demand is clearer before deciding which product to scale up on specialized capacity</li>
  <li><strong>Optimal when:</strong> Demand is uncertain, low-volume, or short-lived; early lifecycle stage; multiple products with variable or negatively correlated demand</li>
</ul>

<div class="section-label">WHY FLEXIBILITY IS COSTLY</div>
<ul class="bullets">
  <li><strong>Complex equipment:</strong> Tanks must handle multiple materials (glass-lined or exotic alloys instead of standard stainless); wider range of instrumentation and controls</li>
  <li><strong>Setup and changeover time:</strong> Cleaning, re-validation, and reconfiguration between product campaigns reduces effective utilization (65% vs. 80% for dedicated)</li>
  <li><strong>Reconfiguration capability:</strong> Empty floor space, flexible piping, stock of ancillary equipment — all add cost without adding output</li>
</ul>

<div class="section-label">ELI LILLY PREVIEW: THE NUMBERS</div>
<ul class="bullets">
  <li><strong>Dedicated facility (1.5 rigs):</strong> $37.5M construction + $6.8M/yr operating → total PV cost $89.22M → <strong>$387.50/kg</strong></li>
  <li><strong>Flexible facility (3 rigs):</strong> $150M construction + $9.48M/yr operating → total PV cost $222.11M → <strong>$1,332/kg</strong></li>
  <li><strong>Break-even volume:</strong> Below ~1,164 kg/year, flexible is cheaper (scale economies of sharing); above that, dedicated wins on cost</li>
  <li><strong>Strategic value of flexible (not captured in cost):</strong> Risk reduction, time-to-market benefit, information updating, process development freedom</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Pure cost comparison always favors dedicated capacity — flexible capacity is inherently more expensive per unit of output. The case for flexibility rests on strategic value that cost models miss: risk reduction, option value, and pooling. The decision is not "which is cheaper" but "which creates more NPV when all strategic benefits are counted."</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">4 Sources of Flexibility Value</span>
  <span class="link-tag">3 Types of Flexibility</span>
  <span class="link-tag">Eli Lilly (Case)</span>
  <span class="link-tag">Capacity-Inventory-Waiting Triangle</span>
</div>
`
    },
    {
      id: '4-sources-flexibility',
      title: '4 Sources of Flexibility Value',
      body: `
<p class="prose">Flexible capacity is more expensive than dedicated capacity on a per-unit basis. So why invest in it? The answer is that flexibility creates value through four distinct mechanisms — and in many cases, the combined value of these mechanisms exceeds the cost premium. Understanding all four sources is essential both for justifying flexibility investments and for designing flexible systems that actually capture their potential value.</p>

<div class="section-label">SOURCE 1: SCALE FLEXIBILITY (ECONOMIES OF SCALE AGGREGATION)</div>
<p class="prose">Even when a flexible facility costs more per rig than a dedicated one, it may still be cheaper than building separate dedicated facilities for multiple low-volume products. By consolidating volume across products, the flexible facility achieves scale economies on shared fixed costs.</p>
<ul class="bullets">
  <li><strong>Logic:</strong> Many low-volume products each require a dedicated facility with its own fixed cost — the aggregate fixed cost is large. One flexible facility pays a single fixed cost and spreads it across all products.</li>
  <li><strong>When it matters:</strong> Most valuable when individual product volumes are below the break-even threshold for dedicated capacity (e.g., below 1,164 kg/year in Eli Lilly)</li>
  <li><strong>Strategic intuition:</strong> "Flexibility makes variety affordable at scale" — it's how firms economically serve a broad product portfolio</li>
</ul>

<div class="section-label">SOURCE 2: RISK POOLING (AGGREGATING VOLATILITIES)</div>
<p class="prose">When a flexible facility serves multiple products, the demand variability of those products partially cancels out. The flexible system needs less total buffer capacity than the sum of what each dedicated system would need separately.</p>

<div class="formula-wrap">
  <div class="formula">σ_pool ≤ σ₁ + σ₂</div>
  <div class="formula-explain">
    <strong>Variables:</strong><br>
    σ_pool = standard deviation of total pooled demand (what the flexible facility faces)<br>
    σ₁, σ₂ = standard deviations of individual product demands<br><br>
    <strong>For independent demands:</strong> σ_pool = √(σ₁² + σ₂²) — which is strictly less than σ₁ + σ₂ when both are positive<br><br>
    <strong>Intuition:</strong> When product demands are not perfectly positively correlated (ρ < 1), the peaks of one product's demand do not always coincide with the peaks of another's. The flexible facility can absorb the spikes for whichever product is surging, while the other is quiet. Non-correlated or negatively correlated demands provide the greatest pooling benefit. This is exactly the portfolio diversification effect from finance — combining assets with less-than-perfect correlation reduces total portfolio variance.
  </div>
</div>
<ul class="bullets">
  <li><strong>Effect 1: Reduced safety capacity needed</strong> — the pooled σ is smaller, so less buffer is required to achieve the same service level</li>
  <li><strong>Effect 2: Increased service levels</strong> — at the same capacity level, the flexible system has fewer shortfalls because variance is lower</li>
  <li><strong>Most effective when:</strong> Correlation between product demands is low or negative; demands have high individual variance</li>
</ul>

<div class="section-label">SOURCE 3: INFORMATION UPDATING</div>
<p class="prose">Flexible capacity allows the firm to delay committing to a specific capacity size or product mix until better information is available. This is the <strong>option value of waiting</strong> applied at the product-mix level.</p>
<ul class="bullets">
  <li><strong>Logic:</strong> A dedicated facility must commit to a specific product and scale before demand uncertainty is resolved. A flexible facility can serve any product, so the decision of which product to scale up on dedicated capacity can be deferred.</li>
  <li><strong>Eli Lilly connection:</strong> The "flexible then specialized" transfer strategy uses flexible capacity as a launch platform. Once demand for a product is proven and the process is mature, transfer to dedicated capacity. The flexible plant preserves the option to not transfer (or to transfer to a different scale) based on what is learned.</li>
  <li><strong>When it matters:</strong> Early product lifecycle, when demand and process uncertainty are both high; connects directly to the option value of waiting framework</li>
</ul>

<div class="section-label">SOURCE 4: CONTINGENT RESOURCE ALLOCATION (FLEXIBILITY ALLOCATION)</div>
<p class="prose">Beyond risk pooling, flexible capacity allows the firm to actively allocate capacity to its highest-value use at any given time — a form of revenue management applied to production.</p>
<ul class="bullets">
  <li><strong>Logic:</strong> When flexible capacity is insufficient to serve all demand simultaneously, allocate it first to the most profitable product. This increases total revenue and reduces profit variance — the firm never produces low-margin product when high-margin demand is unmet.</li>
  <li><strong>Effect:</strong> Increased revenues <em>and</em> reduced variance in profits — both desirable outcomes</li>
  <li><strong>Distinction from risk pooling:</strong> Risk pooling is a statistical effect (automatic from combining demands). Contingent allocation is an active management decision (requires choosing which product gets capacity when constrained).</li>
  <li><strong>When it matters:</strong> When products have significantly different profit margins; when capacity is often constrained; when demand mix is variable</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The four sources of flexibility value can operate simultaneously, and their combined effect often justifies the flexibility premium. Risk pooling is the most intuitive and quantifiable source. The portfolio analogy is exact: just as combining stocks with low correlation reduces portfolio risk without reducing expected return, combining products in a flexible facility reduces total demand variance — allowing the same service level with less total capacity.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Dedicated vs. Flexible</span>
  <span class="link-tag">3 Types of Flexibility</span>
  <span class="link-tag">Resource Chaining (Class 4)</span>
  <span class="link-tag">Option Value of Waiting</span>
</div>
`
    },
    {
      id: '3-types-flexibility',
      title: '3 Types of Flexibility',
      body: `
<p class="prose">Saying a facility is "flexible" is not specific enough for design purposes. There are three distinct <em>types</em> of flexibility, each serving a different competitive function. A facility optimized for one type may score poorly on another. Choosing which type of flexibility to invest in is a strategic decision that must align with the firm's value proposition and the competitive environment it faces.</p>

<div class="section-label">TYPE 1: SCOPE FLEXIBILITY (MIX FLEXIBILITY)</div>
<ul class="bullets">
  <li><strong>Definition:</strong> The breadth of activities — products, processes, chemistries — the facility can perform. Can it make many different things?</li>
  <li><strong>What it delivers:</strong> Variety and customization; ability to serve a wide product portfolio from a single facility</li>
  <li><strong>Strategic alignment:</strong> Firms competing on variety, customization, or new product introduction speed — where the value proposition emphasizes Variety (from the OS Framework)</li>
  <li><strong>Examples:</strong> A contract pharmaceutical manufacturer that can handle many different APIs; an FMS (Flexible Manufacturing System) that can machine many different part geometries</li>
  <li><strong>Trade-offs:</strong> Scope flexibility typically <em>decreases with scale</em> — bigger plants are harder to make flexible because of the complexity of reconfiguring large-scale equipment. Dedicated plants tend to lose scope flexibility over time as they are optimized for their specific product.</li>
</ul>

<div class="section-label">TYPE 2: AGILITY (VOLUME/SPEED FLEXIBILITY)</div>
<ul class="bullets">
  <li><strong>Definition:</strong> The speed at which the facility can change its output level — ramp up to meet a demand surge or ramp down when demand falls</li>
  <li><strong>What it delivers:</strong> Responsiveness and timeliness; ability to meet spikes and recover from drops without large inventory buffers</li>
  <li><strong>Strategic alignment:</strong> Firms competing on Responsiveness (fast delivery, high service levels) — where Lead Time is the key capability dimension</li>
  <li><strong>Examples:</strong> A semiconductor fab that can scale output quickly; a staffing firm that can deploy workers rapidly; cloud computing infrastructure (near-infinite agility)</li>
  <li><strong>Trade-offs:</strong> Agility is <em>not correlated with scale</em> — large facilities can be agile if designed for it (e.g., multiple independent production lines). Agility often requires maintaining reserve capacity or flexible labor contracts.</li>
</ul>

<div class="section-label">TYPE 3: ROBUSTNESS</div>
<ul class="bullets">
  <li><strong>Definition:</strong> The ability to maintain uniform performance across the full range of activities the facility performs — quality, cost, and lead time do not degrade when producing a non-standard product or operating under non-standard conditions</li>
  <li><strong>What it delivers:</strong> Consistent quality and cost across the product portfolio; reliability under variability</li>
  <li><strong>Strategic alignment:</strong> Firms competing on Cost and Quality who also need variety — robustness lets them offer broad scope without sacrificing efficiency or conformance</li>
  <li><strong>Examples:</strong> A pharmaceutical plant that maintains FDA-compliant quality regardless of which product it is making; a logistics network that delivers on-time regardless of volume fluctuations</li>
  <li><strong>Trade-offs:</strong> Robustness is expensive to achieve — it requires process standardization, quality systems, and investment in training that often conflicts with the efficiency of dedicated operations</li>
</ul>

<div class="section-label">HOW THE THREE TYPES RELATE TO THE 4 CAPABILITY DIMENSIONS</div>
<ul class="bullets">
  <li><strong>Scope flexibility → Variety capability:</strong> Directly supports the firm's ability to offer a wide range of products/services</li>
  <li><strong>Agility → Lead-Time capability:</strong> Fast ramp-up/down directly supports responsive, timely delivery</li>
  <li><strong>Robustness → Cost + Quality capability:</strong> Uniform performance across activities ensures neither cost nor quality is sacrificed for variety</li>
</ul>

<div class="section-label">TRADE-OFFS BETWEEN TYPES</div>
<ul class="bullets">
  <li>Maximizing scope flexibility may require simpler, more general-purpose equipment that lacks the precision for robustness</li>
  <li>Maximizing agility may require maintaining reserve capacity (cost) or flexible labor (lower efficiency)</li>
  <li>Maximizing robustness may require standardized processes that reduce scope</li>
  <li><strong>"A little flexibility goes a long way":</strong> Resource chaining shows you don't need full scope flexibility to capture most pooling benefits — targeted flexibility (e.g., each plant produces 2 products in a long chain) achieves 89-96% of full flexibility's benefit at a fraction of the cost</li>
</ul>

<div class="section-label">DESIGN IMPLICATIONS</div>
<p class="prose">Before investing in flexibility, managers must answer: <em>Which type of flexibility matters most for our strategy?</em> A pharmaceutical contract manufacturer needs scope flexibility (many APIs, many processes). An e-commerce fulfillment center needs agility (scale with demand spikes). A luxury automaker needs robustness (quality cannot vary even when producing many variants). Investing in the wrong type is expensive and does not deliver competitive advantage.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Flexibility is not one-dimensional. A facility designed for broad scope may be slow to ramp up (low agility) and variable in quality (low robustness). The three types align with the three operational capabilities the OS Framework identifies: Variety (scope), Lead Time (agility), Cost+Quality (robustness). Design for the type that your competitive positioning demands — and do not over-invest in types that do not create customer value.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">4 Sources of Flexibility Value</span>
  <span class="link-tag">Dedicated vs. Flexible</span>
  <span class="link-tag">Product Design for Flexibility (Class 4)</span>
  <span class="link-tag">Resource Chaining (Class 4)</span>
</div>
`
    }
  ]
};

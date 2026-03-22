const TOPIC_RESOURCES_B = {
  id: 'resources-b',
  eyebrow: 'Classes 4–5 · Resource Decisions (Part B)',
  title: 'Capacity: Flexibility Design & Location',
  icon: '🗺️',
  desc: 'Chaining · Mass customization · Location drivers · Network design · Ferdows\' 6 roles',
  subtopics: [
    {
      id: 'product-design-flexibility',
      title: 'Product Design for Flexibility',
      body: `
<p class="prose">Before a single machine is purchased or a process flow is drawn, the architecture of the product itself determines how flexible manufacturing can realistically be. Product design is a <em>strategic lever</em> that either locks in or unlocks flexibility for the entire life of the product line. Getting it right at the design stage is far cheaper than trying to engineer flexibility into an existing process after the fact.</p>

<div class="section-label">THREE APPROACHES TO FLEXIBLE PRODUCT DESIGN</div>

<p class="prose"><strong>Approach 1: Component Commonality / Platform Strategy</strong></p>
<ul class="bullets">
  <li>A single component (or platform) is shared across multiple product variants — for example, one engine platform used in five different car models.</li>
  <li>Produces variety at lower cost, higher conformance quality, and faster response time because the shared component benefits from scale and learning.</li>
  <li>Reduces inventory complexity: instead of holding safety stock for five separate components, you hold one pooled stock.</li>
  <li>Risk pooling applies — aggregate demand for the common component is more predictable than individual product demands.</li>
  <li><strong>Trade-off:</strong> If customers perceive that two products share a platform, it can dilute brand differentiation (e.g., the Jaguar X-type perceived as "not a real Jaguar" due to shared Ford Mondeo platform).</li>
</ul>

<p class="prose"><strong>Approach 2: Modular Design</strong></p>
<ul class="bullets">
  <li>Instead of one common component, create several versions of a component — but design all versions to be interchangeable across all product models.</li>
  <li>Example: 5 base models × 5 module variants = 25 distinct product configurations from a relatively small set of parts.</li>
  <li>Increases product variety without large penalties in cost, quality, or lead time — each module is produced at sufficient scale.</li>
  <li>Enables postponement: modules can be assembled to order at the last stage, with the common base built to stock.</li>
  <li>Foundational technology for mass customization.</li>
</ul>

<p class="prose"><strong>Approach 3: Adaptable Design</strong></p>
<ul class="bullets">
  <li>Products are designed to be modified easily — by the manufacturer, dealer, or even the end customer — after initial production.</li>
  <li>Classic example: <strong>software</strong>, where updates, patches, and customization options can be delivered post-production at near-zero marginal cost.</li>
  <li>Physical products can also be adaptable: configurable hardware, field-upgradeable components, or products with adjustable parameters.</li>
  <li>Allows mass customization at low cost because differentiation happens late in the value chain.</li>
</ul>

<div class="section-label">STRATEGIC IMPORTANCE</div>
<p class="prose">Product design decisions are among the longest-lasting commitments a firm makes. Once a product architecture is chosen, it constrains or enables every downstream manufacturing and supply chain decision for years. This is why operations strategy must be integrated with product development — not consulted after the fact.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Product architecture is the upstream determinant of manufacturing flexibility. A firm that invests in component commonality, modularity, and adaptable design creates a platform for scope flexibility, mass customization, and postponement — at a fraction of the cost of retrofitting processes later.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Process Design for Flexibility</span>
  <span class="link-tag">Related: Mass Customization</span>
  <span class="link-tag">Related: 3 Types of Flexibility (Class 4)</span>
</div>
`
    },
    {
      id: 'process-design-flexibility',
      title: 'Process Design for Flexibility — 5 Configurations',
      body: `
<p class="prose">Once a product's architecture is set, the <em>process</em> through which it is made determines how effectively that design-level flexibility is realized. Process design offers five distinct configurations, ranging from completely dedicated to fully flexible. The key insight from Class 4 is that flexibility is not free — there is a fundamental trade-off between flexibility and efficiency — so the right configuration must be matched to competitive strategy and demand characteristics.</p>

<div class="section-label">THE 5 PROCESS CONFIGURATIONS (LEAST TO MOST FLEXIBLE)</div>

<p class="prose"><strong>Configuration 1: Dedicated Lines</strong></p>
<ul class="bullets">
  <li>Each product has its own separate, purpose-built equipment and capacity.</li>
  <li>Diagram logic: D1 → Dedicated K1, D2 → Dedicated K2 (no cross-links).</li>
  <li><strong>Advantage:</strong> Maximum efficiency — equipment is optimized for one product, operators develop deep expertise, no changeover losses.</li>
  <li><strong>Disadvantage:</strong> Zero pooling benefit. If D1 demand falls and D2 demand rises, K1 sits idle while K2 is overloaded. Stranded assets are a real risk.</li>
  <li>Best suited to: high-volume, stable-demand, mature products where process standardization is more valuable than adaptability.</li>
</ul>

<p class="prose"><strong>Configuration 2: Sharing (Flexible Resource)</strong></p>
<ul class="bullets">
  <li>One flexible resource serves two or more products. Diagram: D1 → Flexible K_F ← D2.</li>
  <li><strong>Advantage (+):</strong> Full demand pooling — if D1 is low and D2 is high, K_F absorbs both without stranded capacity.</li>
  <li><strong>Disadvantage (−):</strong> Higher per-unit investment cost for flexibility; potential scheduling complexity; utilization may be lower due to changeover time.</li>
  <li>Best when demand correlation between products is low or negative, maximizing pooling benefit.</li>
</ul>

<p class="prose"><strong>Configuration 3: Substitution</strong></p>
<ul class="bullets">
  <li>One flexible asset and one dedicated asset. The flexible resource substitutes for the dedicated one when it is overloaded.</li>
  <li>Diagram: D1 → Flexible K_F, D2 → Dedicated K2, with K_F available to serve D2 if K2 is at capacity.</li>
  <li><strong>Key principle: "A little flexibility goes a long way."</strong> This configuration captures much of the pooling benefit of full flexibility at a fraction of the cost, because you only need one flexible link, not full redundancy.</li>
  <li>Combines the pooling power of flexible capacity with the efficiency and lower investment cost of dedicated capacity.</li>
</ul>

<p class="prose"><strong>Configuration 4: Transshipment</strong></p>
<ul class="bullets">
  <li>Inventory, WIP (work-in-progress), or finished goods are physically moved (transshipped) between two or more facilities to balance load.</li>
  <li>Diagram: Two dedicated capacities with transshipment links between them.</li>
  <li>Useful when geographically dispersed facilities face asymmetric regional demand — instead of building excess local capacity, you ship from the surplus location to the deficit location.</li>
  <li>Requires compatible processes and sufficient transportation infrastructure; introduces lead-time and cost trade-offs.</li>
</ul>

<p class="prose"><strong>Configuration 5: Postponement (Delayed Differentiation)</strong></p>
<ul class="bullets">
  <li>Product differentiation is deliberately delayed as late in the production process as possible. A common base (generic product) is built to a semi-finished state, then customized at the last step when customer demand is known.</li>
  <li>Combines modular product design (common components + differentiator modules) with a process where differentiating steps happen last.</li>
  <li>Reduces the time between product specification and delivery — the customization step is short, even though the common base has a long production lead time.</li>
  <li><strong>Advantage (+):</strong> Demand pooling on the common component; short effective lead times for variety; enables ATO (Assemble-to-Order) or MTO strategies.</li>
  <li>Classic example: Dell's build-to-order model; HP inkjet printer localization in European distribution centers.</li>
</ul>

<div class="section-label">FLEXIBILITY-EFFICIENCY TRADE-OFF</div>
<p class="prose">Flexibility exhibits decreasing returns but increasing costs. The optimal process design therefore involves an <em>intermediate amount</em> of flexibility — not zero (pure dedicated) and not maximum (fully flexible across all products). The goal is to identify the configuration that maximizes value net of flexibility costs, given the specific demand uncertainty, correlation structure, and margin profile of the product portfolio.</p>

<div class="formula-wrap">
  <div class="formula">Value of Flexibility = f(Uncertainty, Correlation, Margin Differences)</div>
  <div class="formula-explain">Flexibility is most valuable when demand is uncertain, correlation between product demands is low (pooling benefit is high), and margins differ across products (allocation benefit is high).</div>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Product Design for Flexibility</span>
  <span class="link-tag">Related: Resource Chaining</span>
  <span class="link-tag">Related: Mass Customization</span>
  <span class="link-tag">Related: 4 Sources of Flexibility Value (Class 4)</span>
</div>
`
    },
    {
      id: 'resource-chaining',
      title: 'Resource Chaining',
      body: `
<p class="prose">Resource chaining is the insight that connects process-level flexibility decisions to system-level performance. Rather than choosing between two extremes — fully dedicated resources or fully flexible resources — chaining shows that linking resources in a particular pattern can capture most of the value of full flexibility at a small fraction of the cost. This is one of the most actionable findings in operations strategy for multi-product, multi-facility firms.</p>

<div class="section-label">THE CORE PRINCIPLE: "A LITTLE FLEXIBILITY GOES A LONG WAY"</div>

<p class="prose">Consider a system with 10 plants and 10 products. Three configurations illustrate the spectrum:</p>

<ul class="bullets">
  <li><strong>No flexibility (10 links):</strong> Each plant makes exactly one product — a diagonal assignment matrix. Zero pooling. Any demand shock leaves one plant starved and another overwhelmed.</li>
  <li><strong>Full flexibility (100 links):</strong> Every plant can make every product — a full matrix. Maximum pooling. But requires 100 flexible links, each costly to establish and maintain.</li>
  <li><strong>Long chain (20 links):</strong> Each plant can make 2 products, and the assignments form one continuous chain: Plant 1 makes Products 1 and 2; Plant 2 makes Products 2 and 3; … Plant 10 makes Products 10 and 1.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The long chain configuration (20 links) achieves approximately 89–96% of the expected sales performance of full flexibility (100 links), depending on the demand distribution. You get nearly all of the benefit at 20% of the cost. This is the core of the "a little flexibility goes a long way" principle — the value of flexibility is concave in the number of flexible links.</p>
</div>

<div class="section-label">QUANTITATIVE EVIDENCE</div>

<div class="formula-wrap">
  <div class="formula">Long Chain / Full Flexibility Ratio ≈ 89% (Uniform demand, CV ≤ 0.33) to 96% (Normal demand)</div>
  <div class="formula-explain">Simulation results from Jordan & Graves (1995). The long chain with only 2 links per plant captures the vast majority of the pooling value that requires 10 links per plant under full flexibility.</div>
</div>

<div class="section-label">WHY THE LONG CHAIN OUTPERFORMS SHORT CHAINS</div>

<ul class="bullets">
  <li><strong>Connectivity matters:</strong> A single long chain propagates demand shocks through the entire system. When Plant 1 is overloaded, it can draw on Plant 10's slack via the chain. Short chains create isolated sub-pools that cannot help each other.</li>
  <li><strong>Multiple short chains are inferior:</strong> Two chains of 5 each perform worse than one chain of 10 because they fragment the pooling benefit. Always prefer one long chain over multiple short ones.</li>
  <li><strong>Diminishing returns curve:</strong> The value of adding the first few flexible links is very high (steep initial gains). Each additional link beyond the long chain adds progressively less value. The concave shape of this curve is the mathematical reason why intermediate flexibility dominates both extremes.</li>
</ul>

<div class="section-label">DESIGN RULES FOR CHAINING</div>

<ul class="bullets">
  <li>Connect plants and products in <strong>one long chain</strong> rather than many short chains — avoid disconnected subgroups.</li>
  <li>Each plant should be able to produce at least <strong>2 products</strong>.</li>
  <li>Each product should be producible in at least <strong>2 plants</strong>.</li>
  <li><strong>Balance the chain links:</strong> If one link in the chain is a bottleneck (very expensive to make flexible), it weakens the pooling benefit for the entire chain.</li>
  <li>The chain design should reflect the demand correlation structure — link products whose demands are negatively correlated to maximize pooling benefit per link.</li>
</ul>

<div class="section-label">GRAPHICAL INTUITION</div>
<p class="prose">Plot the expected value of flexibility on the Y-axis against the number of flexible links (0 to N²) on the X-axis. The curve rises steeply from 0 to roughly 2N links (the long chain), then flattens dramatically as additional links are added toward full flexibility. The knee of the curve — where marginal value equals marginal cost — is almost always in the long-chain region, not the full-flexibility region.</p>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: 4 Sources of Flexibility Value (Class 4)</span>
  <span class="link-tag">Related: Process Design for Flexibility</span>
  <span class="link-tag">Related: Dedicated vs. Flexible Capacity (Class 4)</span>
</div>
`
    },
    {
      id: 'mass-customization',
      title: 'Mass Customization',
      body: `
<p class="prose">Mass customization (MC) is the strategic capability to deliver products or services tailored to individual customers' preferences while maintaining costs and speeds close to those of mass production. It represents a direct challenge to the traditional trade-off between variety (customization) and cost (efficiency) — the premise of mass customization is that this trade-off can be collapsed, not just managed.</p>

<div class="section-label">DEFINITION</div>
<p class="prose">Mass customization <strong>tailors a product or service to each customer's wishes within certain limits</strong>, and produces and delivers it with a <strong>flexible flow process with negligible changeovers</strong>. The key phrase is "within certain limits" — MC is not unlimited bespoke production. It is a <em>curated</em> set of options that creates the <em>perception</em> of full customization while retaining process efficiency.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>"It's not mass production that customers are looking to escape; it's mass products." Mass customization is about eliminating the feeling of sameness, not about eliminating all standardization from the production process.</p>
</div>

<div class="section-label">STRATEGIC POSITIONING ON THE PRODUCT-PROCESS MATRIX</div>

<ul class="bullets">
  <li><strong>Mass Production:</strong> Low cost, low variety — efficient but undifferentiated.</li>
  <li><strong>Custom Production:</strong> High variety, high cost — differentiated but expensive.</li>
  <li><strong>Mass Customization:</strong> High variety <em>at low cost</em> — occupies the previously "impossible" position on the PPM diagonal. It pushes the efficient frontier outward.</li>
</ul>

<div class="section-label">THREE ENABLING STRATEGIES</div>

<p class="prose"><strong>Strategy 1: Modular Product Architecture</strong></p>
<ul class="bullets">
  <li>The "product" is really a <strong>menu of options</strong>: for example, 10 component categories, each with 5 choices, yields 5^10 theoretical configurations.</li>
  <li><strong>Rationalized standardization</strong> is key: not unlimited options, but a smart, curated set where each module is produced at sufficient volume to maintain cost efficiency.</li>
  <li>Modularity is the product-design foundation that makes MC economically viable.</li>
</ul>

<p class="prose"><strong>Strategy 2: Flexible Automation / CNC</strong></p>
<ul class="bullets">
  <li>Computer Numerically Controlled (CNC) equipment and flexible manufacturing systems (FMS) can switch between product variants with negligible changeover time and cost.</li>
  <li>Enables a <strong>batch size of one</strong> — the defining process requirement of true mass customization.</li>
  <li>Coordination and information technology: systems allow customers to self-configure their product, with the configuration transmitted automatically to the process with billing and tracking.</li>
</ul>

<p class="prose"><strong>Strategy 3: Postponement</strong></p>
<ul class="bullets">
  <li>At least the last process step must be <strong>MTO (Make-to-Order)</strong> — more precisely, <strong>ATO (Assemble-to-Order)</strong>.</li>
  <li>Differentiation fan-out is postponed as long as possible, keeping products in a generic state until customer demand is known.</li>
  <li>Requires information capability to support the customized last step and customers willing to wait for that final step (lead time must be acceptable).</li>
</ul>

<div class="section-label">PREREQUISITE CONDITIONS FOR MASS CUSTOMIZATION</div>

<ul class="bullets">
  <li>Modular product architecture that enables mix-and-match at low cost.</li>
  <li>Flexible automation capable of negligible changeovers (batch size of 1).</li>
  <li>Information systems connecting customer choices directly to production scheduling.</li>
  <li>A logistics/delivery system that can handle individualized orders efficiently.</li>
  <li>Customer segments that value customization enough to justify the operational investment (not all markets do).</li>
</ul>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Product Design for Flexibility</span>
  <span class="link-tag">Related: PPM Diagonal (Class 1)</span>
  <span class="link-tag">Related: 3 Types of Flexibility (Class 4)</span>
  <span class="link-tag">Related: Process Design for Flexibility</span>
</div>
`
    },
    {
      id: '6-location-drivers',
      title: '6 Location Drivers',
      body: `
<p class="prose">Location decisions are among the most capital-intensive and long-lasting commitments a firm makes in operations strategy. A facility built in the wrong location can be a strategic liability for decades. Class 5 identifies six major categories of drivers that determine where a firm should locate its capacity. Any rigorous location decision must evaluate all six — ignoring one category can lead to decisions that look optimal on paper but fail in execution.</p>

<div class="section-label">DRIVER 1: COST FACTORS</div>
<ul class="bullets">
  <li><strong>Land:</strong> Purchase or lease cost varies dramatically by region, country, and proximity to urban centers.</li>
  <li><strong>Labor:</strong> Wage rates, labor productivity, and skill availability — a location with cheap labor but low productivity may have higher effective labor cost per unit than a higher-wage location.</li>
  <li><strong>Construction:</strong> Local building material costs, contractor availability, and regulatory complexity affect build cost.</li>
  <li><strong>Utilities:</strong> Energy costs (electricity, gas, water) can be a dominant factor for energy-intensive industries (smelting, data centers, pharmaceuticals).</li>
  <li><strong>Taxes:</strong> Corporate tax rates, property taxes, and government incentives (tax holidays, subsidies, grants) can make specific locations financially attractive — or prohibitive.</li>
  <li><strong>Strategic implication:</strong> Cost-leader strategies gravitate toward low-cost locations, but cost alone is insufficient — Total Landed Cost (TLC) must be computed to capture all downstream costs.</li>
</ul>

<div class="section-label">DRIVER 2: MARKET ACCESS / PROXIMITY TO CUSTOMERS</div>
<ul class="bullets">
  <li><strong>Lead time:</strong> Proximity to customers reduces transportation time and enables faster delivery — a competitive advantage when responsiveness is a key competitive dimension.</li>
  <li><strong>Transportation costs:</strong> For products where transport cost is high relative to product value (cement, fresh food, fiberglass insulation), distributed production near customers is strongly favored.</li>
  <li><strong>Customer proximity premium:</strong> Some customers pay more for a locally-sourced product — for freshness, trust, faster service, or patriotic preference. This premium can justify the cost of a distributed network.</li>
  <li><strong>Tariffs and trade barriers:</strong> Some markets require local production to avoid import duties, enabling market access that would otherwise be uneconomical.</li>
  <li><strong>Distinctiveness of local product markets:</strong> Regions may differ in tastes, regulations, or standards (e.g., safety regulations, voltage specifications) requiring local adaptation.</li>
</ul>

<div class="section-label">DRIVER 3: RESOURCE ACCESS / PROXIMITY TO INPUTS</div>
<ul class="bullets">
  <li><strong>Natural resources:</strong> Mining, agriculture, and extractive industries must locate near their primary inputs — you cannot move the ore deposit.</li>
  <li><strong>Talent and knowledge clusters:</strong> High-tech industries, pharmaceuticals, and finance benefit from co-locating with universities, research institutions, and pools of specialized human capital.</li>
  <li><strong>Supplier ecosystem:</strong> Proximity to key suppliers reduces lead times, transportation costs, and supply disruption risk. Industry clusters (Silicon Valley, Detroit auto cluster) self-reinforce as suppliers and producers co-locate.</li>
</ul>

<div class="section-label">DRIVER 4: INFRASTRUCTURE QUALITY</div>
<ul class="bullets">
  <li><strong>Ports and logistics hubs:</strong> Access to deep-water ports, major rail lines, and highway networks determines the cost and reliability of inbound and outbound logistics.</li>
  <li><strong>Airports:</strong> Critical for time-sensitive products and components, and for management travel between facilities.</li>
  <li><strong>Telecommunications and digital infrastructure:</strong> Increasingly important as operations rely on real-time data exchange with suppliers and customers.</li>
  <li><strong>Power reliability:</strong> Unreliable power grids add cost through backup generators and spoilage — a real constraint in some emerging markets.</li>
</ul>

<div class="section-label">DRIVER 5: POLITICAL AND REGULATORY ENVIRONMENT</div>
<ul class="bullets">
  <li><strong>Trade agreements:</strong> NAFTA/USMCA, EU single market, bilateral FTAs — being inside vs. outside a trade bloc can determine market access and tariff exposure.</li>
  <li><strong>IP protection:</strong> Weak intellectual property enforcement increases the risk of technology leakage when locating in certain countries — a critical concern for high-IP industries (pharmaceuticals, software, aerospace).</li>
  <li><strong>Political stability:</strong> Unstable political environments add risk to long-lived facility investments. Expropriation risk, contract enforceability, and currency controls matter.</li>
  <li><strong>Environmental and labor regulations:</strong> Stringent regulations increase compliance cost; lax regulations may create short-term cost savings but reputational and legal risks.</li>
  <li><strong>Exchange rates and volatility:</strong> Currency fluctuations affect the relative cost of production in different countries. A highly volatile exchange rate increases the value of a flexible, multi-location production network.</li>
</ul>

<div class="section-label">DRIVER 6: COMPETITIVE FACTORS / AGGLOMERATION</div>
<ul class="bullets">
  <li><strong>Hotelling effect (competitive clustering):</strong> Rational competitors in many industries converge on the same location — car dealerships on the same street, fast food at highway interchanges. Game theory (Hotelling's model, 1929) predicts this: locating at the median of the customer distribution maximizes market share against a competitor doing the same.</li>
  <li><strong>Industry clusters / agglomeration economies:</strong> Clustering creates positive externalities — shared labor markets, knowledge spillovers, specialized suppliers, and infrastructure investment. Silicon Valley, Wall Street, and the German Mittelstand industrial clusters are examples.</li>
  <li><strong>Strategic differentiation alternative:</strong> Some firms deliberately locate away from competitors to serve underserved geographic segments — the differentiated response to Hotelling dynamics.</li>
</ul>

<div class="section-label">TOTAL LANDED COST (TLC) — THE INTEGRATING CONCEPT</div>
<div class="formula-wrap">
  <div class="formula">TLC = Purchase/Production Cost + Transportation + Tariffs + Inventory Carrying Costs + Disruption Risk Cost</div>
  <div class="formula-explain">TLC is the total end-to-end cost to transform inputs at the sourcing location to outputs at customer locations. The "cheap" offshore factory is often not cheap once all transportation, tariffs, inventory in transit, and supply disruption risk are accounted for. TLC analysis is described as "painful but rewarding" — rigorous TLC work can save approximately 5% on COGS.</div>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: 3 Network Design Choices</span>
  <span class="link-tag">Related: 4 Location Analysis Frameworks</span>
  <span class="link-tag">Related: Ferdows' 6 Roles</span>
</div>
`
    },
    {
      id: '3-network-design-choices',
      title: '3 Network Design Choices',
      body: `
<p class="prose">Once location drivers are understood, the firm must make three fundamental binary decisions about how its facility network is structured. These choices shape the cost structure, responsiveness, risk profile, and strategic flexibility of the entire operations footprint. Critically, these are not independent choices — they interact, and real networks are typically characterized by a combination of positions on all three dimensions.</p>

<div class="section-label">CHOICE 1: CENTRALIZED vs. DISTRIBUTED</div>

<p class="prose"><strong>Centralized (fewer, larger facilities):</strong></p>
<ul class="bullets">
  <li>Exploits <strong>economies of scale</strong> — larger facilities have lower per-unit production costs due to fixed cost spreading and learning curve effects.</li>
  <li>Benefits from <strong>risk pooling</strong> — aggregating demand across regions at one facility reduces total safety capacity and inventory needed (pooled standard deviation is less than the sum of individual standard deviations when correlation &lt; 1).</li>
  <li>Easier to guarantee <strong>consistent, uniform quality</strong> — one facility to control rather than many.</li>
  <li><strong>Disadvantage:</strong> Higher transportation costs and longer lead times to distant customers; loss of local responsiveness; single point of failure risk.</li>
</ul>

<p class="prose"><strong>Distributed (many, smaller facilities near customers):</strong></p>
<ul class="bullets">
  <li>Provides <strong>customer proximity</strong> — faster delivery, lower transportation costs for high transport-cost products, better local service.</li>
  <li>Necessary when products require local customization, when tariffs mandate local content, or when the customer proximity premium is high.</li>
  <li><strong>Disadvantage:</strong> Loses scale economies and risk pooling; harder to maintain quality consistency; more complex to manage.</li>
</ul>

<div class="formula-wrap">
  <div class="formula">Optimal Network Size = MIN [ Production/Inventory Costs(↓ with size) + Transportation/Responsiveness Costs(↑ with size) ]</div>
  <div class="formula-explain">The optimal number of facilities balances two opposing cost sets: costs that decrease with facility size (economies of scale, risk pooling) vs. costs that increase as the served area grows (transportation, lead times, loss of local fit). The cost trade-off curve has a U-shape in total cost — the minimum identifies the optimal network configuration.</div>
</div>

<div class="section-label">CHOICE 2: SEPARATED vs. INTEGRATED (ACROSS VALUE CHAIN)</div>

<p class="prose"><strong>Separated (specialized, market-focused plants):</strong></p>
<ul class="bullets">
  <li>Each plant has a narrow, clear mandate — serve one market, produce one set of products. This is the "focused factory" principle.</li>
  <li>Operational efficiency gains: operators and managers develop deep expertise; processes are optimized for specific outputs.</li>
  <li>Easy to manage — clear accountability, simple performance metrics.</li>
  <li><strong>Disadvantage:</strong> No ability to shift production across plants when demand patterns shift; vulnerable to demand shocks in the served market.</li>
</ul>

<p class="prose"><strong>Integrated (facilities can cross-serve markets or products):</strong></p>
<ul class="bullets">
  <li>Capacity pooling across markets — less total safety capacity needed because demand variability is aggregated.</li>
  <li>Flexibility to react to <strong>demand shifts and exchange rate changes</strong> — production can shift to the most favorable location as conditions change. This "operational hedging" is a key source of value in global networks.</li>
  <li>Integration becomes more valuable when demands and exchange rates are more <strong>volatile</strong> — the option to reallocate is worth more in uncertain environments.</li>
  <li>Different levels of integration are possible: flexible multi-product capacity, contingent allocation, transshipments between facilities.</li>
  <li><strong>Disadvantage:</strong> More complex to manage; requires compatible processes and systems across facilities; can blur plant mandate and accountability.</li>
</ul>

<div class="section-label">CHOICE 3: STANDARDIZED vs. LOCALIZED</div>

<p class="prose"><strong>Standardized (uniform processes and equipment across facilities):</strong></p>
<ul class="bullets">
  <li><strong>Purchasing power:</strong> Buying the same equipment, materials, and components across many facilities creates negotiating leverage with suppliers.</li>
  <li><strong>Consistent quality:</strong> Uniform processes reduce variation between sites — critical for global brands where customers expect the same experience everywhere.</li>
  <li><strong>Facilitates integration:</strong> Standardized processes make it easier to shift production between facilities (a prerequisite for the integration benefits above).</li>
  <li><strong>Accelerates improvement diffusion:</strong> When one plant discovers a better process, it can be adopted across all standardized plants easily.</li>
  <li><strong>Risk:</strong> Can slow down experimentation and local innovation; may not fit local input availability or customer preferences.</li>
</ul>

<p class="prose"><strong>Localized (adapted to local conditions):</strong></p>
<ul class="bullets">
  <li>May be <strong>required by regulation</strong> (e.g., local content laws, safety standards, ingredient regulations).</li>
  <li>Useful to adapt to <strong>available local inputs</strong>: Mittal Steel's mini-mills adapted to local scrap metal availability; MBA Polymers' recycling plants adapted to local waste streams.</li>
  <li>Enables <strong>differentiation strategy</strong> exploiting local customer preferences: Pirelli producing 30-inch tires for the US market where large vehicles are common.</li>
  <li><strong>Risk:</strong> Sacrifices purchasing power; makes integration harder; can create quality inconsistency.</li>
</ul>

<div class="section-label">HOW THE THREE CHOICES COMBINE</div>
<p class="prose">A global cost leader might choose: Centralized + Integrated + Standardized — maximizing scale, pooling, and purchasing power. A local service differentiator might choose: Distributed + Separated + Localized — maximizing local responsiveness. Most real networks lie somewhere in between, with deliberate trade-offs. The choices must be <em>internally consistent</em> and <em>aligned with competitive strategy</em>.</p>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: 6 Location Drivers</span>
  <span class="link-tag">Related: Economies of Scale (Class 3)</span>
  <span class="link-tag">Related: Ferdows' 6 Roles</span>
</div>
`
    },
    {
      id: '4-location-frameworks',
      title: '4 Location Analysis Frameworks',
      body: `
<p class="prose">Location decisions are too important and too costly to make on intuition alone. Class 5 presents four analytical frameworks, each addressing a different dimension of the location problem. A rigorous location decision typically uses all four in sequence — TLC to identify cost-efficient sites, network analysis to optimize the multi-facility system, competitive analysis to account for rival behavior, and facility role analysis to assign strategic mandates. Together they form a complete location decision toolkit.</p>

<div class="section-label">FRAMEWORK 1: TOTAL LANDED COST (TLC)</div>

<p class="prose"><strong>Definition:</strong> The total end-to-end cost to transform inputs at the sourcing location to outputs at customer locations, across all combinations of products and customers.</p>

<div class="formula-wrap">
  <div class="formula">TLC = Production/Procurement Cost + Inbound Transportation + Export/Import Tariffs + Outbound Transportation + Inventory Carrying Cost (in transit + at destination) + Supply Disruption Risk Premium</div>
  <div class="formula-explain">Each cost component must be estimated for every candidate source-destination pair. The "cheapest" factory on a per-unit production cost basis is frequently NOT the cheapest on a TLC basis once all transportation legs, tariffs, transit inventory, and disruption risk are included. A factory 10,000 km away may have 30% lower wages but 40% higher TLC than a regional facility.</div>
</div>

<ul class="bullets">
  <li><strong>Cost focus:</strong> TLC is fundamentally about minimizing total delivered cost. It is some of the most quantitative work in operations strategy.</li>
  <li><strong>Fix differentiation first:</strong> Before comparing TLC across locations, standardize the service level — fix the delivery time, quality standard, and variety level. Then estimate what it costs to deliver that same level of service from each candidate location. This ensures you are comparing equivalent offerings, not apples to oranges.</li>
  <li><strong>Hidden costs matter:</strong> The challenge is to carefully track direct and indirect (often hidden) costs through the entire value chain. Data is not always easy to find — but the effort is rewarding. A good TLC analysis can save approximately <strong>5% on COGS</strong>.</li>
  <li><strong>When TLC is most relevant:</strong> Industries where transportation cost is a high fraction of total cost — cement, fiberglass insulation, fresh and frozen food. Geographic density maps of customer demand help identify optimal facility locations to minimize total transportation cost.</li>
</ul>

<div class="section-label">FRAMEWORK 2: NETWORK ANALYSIS</div>

<p class="prose"><strong>Definition:</strong> Considers the entirety of a company's facility locations and their interconnections. Optimizes the location and number of facilities using demand data and transportation cost structures across the whole network.</p>

<ul class="bullets">
  <li><strong>Captures interdependency with size and timing:</strong> The optimal location for your first plant depends on where you plan to put the second and third plants. Myopic, one-at-a-time decisions can yield suboptimal networks.</li>
  <li><strong>Sequential decision example:</strong> Building one plant at Location A may be optimal in isolation. But if you anticipate a second facility, starting at Location B and later adding Location C may be cheaper in total — TLC(B+C) &lt; TLC(A). The first decision constrains all future decisions.</li>
  <li><strong>Forward-looking planning:</strong> Network analysis forces long-run thinking. A short-term optimal decision today can create lock-in that is costly to reverse.</li>
  <li>Can be combined with spatial/TLC analysis — use TLC to evaluate candidate site costs, then use network optimization to find the best combination across multiple facilities.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Network analysis reveals that location decisions are path-dependent. The best site for facility #1 is not the site that minimizes cost in isolation — it is the site that minimizes the total cost of the eventual full network. Firms that plan ahead can substantially outperform firms making one-at-a-time location decisions.</p>
</div>

<div class="section-label">FRAMEWORK 3: COMPETITIVE ANALYSIS — HOTELLING'S MODEL</div>

<p class="prose"><strong>Definition:</strong> Takes the location of competitors — and their possible reactions — into account when making location decisions. Based on the <strong>Hotelling Model (Harold Hotelling, 1929)</strong>.</p>

<ul class="bullets">
  <li><strong>Hotelling's prediction:</strong> When customer choice is based on proximity, and two rational competitors are free to choose location, both will converge on the <strong>median of the customer distribution</strong>. This is a Nash equilibrium — neither firm can improve its market share by moving, given the other firm's location.</li>
  <li><strong>Real-world example:</strong> Car dealerships clustering on the same commercial strip; gas stations at the same intersection; fast food restaurants at highway exits. Customers comparison-shop, so being centrally located relative to rivals maximizes captured share.</li>
  <li><strong>When competitive clustering is rational:</strong> When customers travel to the supplier (retail, services) and choose based on convenience, being at the same location as competitors is optimal. Differentiation on product rather than location becomes the competitive strategy.</li>
  <li><strong>When differentiation is better:</strong> When customers are served by the supplier (delivery-based), or when geographic segments are distinct, it may be better to locate away from competitors to serve underserved areas with less competition.</li>
  <li><strong>Agglomeration economies:</strong> Clustering also creates positive externalities (shared labor markets, knowledge spillovers, specialized suppliers) that can outweigh competitive proximity costs.</li>
</ul>

<div class="section-label">FRAMEWORK 4: FACILITY ROLE ANALYSIS — FERDOWS' MODEL</div>

<p class="prose"><strong>Definition:</strong> The process of specifying the strategic role, activities, responsibilities, and competences of each specific site in the network. Based on Ferdows' (1997) strategic role matrix (see dedicated subtopic for full detail).</p>

<ul class="bullets">
  <li>Not all facilities in a network serve the same strategic purpose. Some are purely low-cost production sites; others are knowledge hubs; still others are market-access points.</li>
  <li>The framework distinguishes facilities by two dimensions: (1) primary strategic reason for location; (2) scope of activities and competences.</li>
  <li>The six roles — Offshore, Source, Server, Contributor, Outpost, Lead — each imply different investment levels, autonomy levels, and performance mandates.</li>
  <li>Role analysis ensures that authority, investment, and mandate are <em>aligned</em> with the strategic purpose of each facility. A plant given an "Offshore" mandate but located in a knowledge cluster is a wasted strategic asset.</li>
  <li>Plants can evolve from lower to higher roles as they develop capabilities ("strategic migration") — role analysis makes this trajectory explicit and manageable.</li>
</ul>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: 6 Location Drivers</span>
  <span class="link-tag">Related: 3 Network Design Choices</span>
  <span class="link-tag">Related: Ferdows' 6 Roles</span>
</div>
`
    },
    {
      id: 'ferdows-6-roles',
      title: "Ferdows' 6 Strategic Facility Roles",
      body: `
<p class="prose">Kasra Ferdows' 1997 framework is one of the most influential tools in global operations strategy. Its core insight is deceptively simple but frequently violated in practice: not all plants in a multinational network serve the same strategic purpose, and managing them as if they do destroys value. The framework provides a structured way to define each facility's mandate, investment level, and authority — aligning operational decisions with strategic intent.</p>

<div class="section-label">THE 2×3 MATRIX STRUCTURE</div>

<p class="prose">The framework asks two diagnostic questions about each facility:</p>

<ul class="bullets">
  <li><strong>Question 1 — Primary Strategic Reason for Location (3 columns):</strong>
    <ul>
      <li>Access to <strong>low-cost production</strong> (labor, land, energy)</li>
      <li>Access to <strong>skills and knowledge</strong> (talent clusters, R&D ecosystems, universities)</li>
      <li>Access to <strong>market</strong> (proximity to customers, overcoming trade barriers)</li>
    </ul>
  </li>
  <li><strong>Question 2 — Scope of Current Activities and Competences (2 rows):</strong>
    <ul>
      <li><strong>Narrow and Low:</strong> Production-focused, limited authority, follows HQ directives closely</li>
      <li><strong>Broad and High:</strong> Production + development + sourcing mandate, significant local autonomy</li>
    </ul>
  </li>
</ul>

<p class="prose">This 2×3 matrix yields six distinct strategic facility roles.</p>

<div class="section-label">THE 6 FACILITY ROLES — NARROW SCOPE (BOTTOM ROW)</div>

<p class="prose"><strong>Role 1: Offshore Plant</strong> [Low Cost × Narrow Scope]</p>
<ul class="bullets">
  <li>Produces specific items at low cost and exports them for further work or for sale.</li>
  <li><strong>Authority: minimal.</strong> Tightly managed from HQ. Follows detailed instructions on what to produce, how much, and when. No autonomy over procurement, process, or product decisions.</li>
  <li>Investment beyond basic production equipment is minimal.</li>
  <li>Performance metric: unit production cost and output volume.</li>
  <li><strong>Risk:</strong> If managed purely as an Offshore plant, a facility near a knowledge cluster (e.g., in South Korea or Taiwan) may never develop the capabilities that its location could enable — a wasted strategic asset.</li>
</ul>

<p class="prose"><strong>Role 2: Outpost Plant</strong> [Skills/Knowledge × Narrow Scope]</p>
<ul class="bullets">
  <li>Primary role: <strong>collect information</strong> — from advanced suppliers, competitors, research labs, and lead customers in the local market. It is a "listening post" or intelligence-gathering facility.</li>
  <li>Located in a technology or knowledge cluster specifically because of what can be learned there, not primarily to produce cheaply or serve a local market.</li>
  <li>Secondary production role (may also function as an Offshore or Server plant) but that is not the primary strategic justification.</li>
  <li>Authority: narrow scope, but the mandate is intelligence rather than volume output.</li>
  <li><strong>Example:</strong> A U.S. semiconductor firm maintaining a small R&D facility in Japan in the 1980s–90s to monitor Japanese process innovations.</li>
</ul>

<p class="prose"><strong>Role 3: Server Plant</strong> [Market × Narrow Scope]</p>
<ul class="bullets">
  <li>Serves a <strong>specific regional market</strong> — its location is driven by customer proximity, tariff avoidance, or the need to overcome logistical and regulatory barriers to market access.</li>
  <li><strong>Authority: limited.</strong> Can make minor modifications to fit local conditions (labeling, packaging, minor product adaptation) but does not have development or sourcing mandate.</li>
  <li>Performance metrics: delivery reliability, local service levels, and cost of serving the regional market.</li>
  <li><strong>Example:</strong> A European consumer goods plant established by a U.S. company to serve EU markets and avoid EU import tariffs.</li>
</ul>

<div class="section-label">THE 6 FACILITY ROLES — BROAD SCOPE (TOP ROW)</div>

<p class="prose"><strong>Role 4: Source Plant</strong> [Low Cost × Broad Scope]</p>
<ul class="bullets">
  <li>Like the Offshore plant, it is located for cost reasons — but unlike Offshore, it has <strong>the same capabilities as the best plant in the global network</strong>.</li>
  <li><strong>Authority: substantial.</strong> Has authority over procurement (supplier selection and development), production planning, logistics optimization, and process/product customization for its product lines.</li>
  <li>Can initiate process improvements and may serve as a center of excellence for specific manufacturing processes.</li>
  <li>Essentially a world-class plant that happens to be in a low-cost location — not a low-cost plant that is just trying to meet minimum standards.</li>
  <li><strong>Example:</strong> Toyota's engine plant in West Virginia — located partly for cost and tariff reasons but operating at Toyota's global production standards with full process authority.</li>
</ul>

<p class="prose"><strong>Role 5: Lead Plant</strong> [Skills/Knowledge × Broad Scope]</p>
<ul class="bullets">
  <li><strong>The most strategically important role.</strong> The Lead plant is a global hub for product and process knowledge and innovation.</li>
  <li><strong>Authority: full.</strong> Has complete authority over all activities in its scope — product development, process development, technology selection, supplier development, production planning, and logistics.</li>
  <li>Taps into local skills and knowledge to <strong>initiate company-wide innovation</strong> — innovations developed here propagate to the entire global network.</li>
  <li>Located near the world's best talent, universities, or industry clusters in its domain.</li>
  <li><strong>Example:</strong> Intel's R&D facility in Israel (Haifa) — located there for access to top engineering talent; responsible for developing several of Intel's most important microprocessor architectures.</li>
</ul>

<p class="prose"><strong>Role 6: Contributor Plant</strong> [Market × Broad Scope]</p>
<ul class="bullets">
  <li>Serves a specific regional market (like the Server plant) <strong>but also actively competes with other plants in the network</strong> for new processes, products, and mandates.</li>
  <li><strong>Authority: broad.</strong> Has authority over product and process development relevant to its market, as well as supplier selection and development.</li>
  <li>Innovation at the Contributor plant is driven by local market requirements — customer insights from the regional market feed back into product development for the whole network.</li>
  <li><strong>Example:</strong> A Japanese car manufacturer's European design and engineering center — serves European market preferences and simultaneously develops styling and engineering innovations that influence global platform design.</li>
</ul>

<div class="section-label">PLANT EVOLUTION: STRATEGIC MIGRATION</div>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Plants can — and should — evolve from lower to higher roles as they develop capabilities. An Offshore plant can become a Source plant as it develops procurement and process expertise. A Server plant can become a Contributor as it builds development capabilities. This "strategic migration" is not automatic; it requires deliberate investment in local capabilities, expanded mandate, and increased authority. Failing to manage this evolution means leaving strategic value on the table.</p>
</div>

<ul class="bullets">
  <li>The evolution path typically moves from Narrow/Low scope (bottom row) to Broad/High scope (top row).</li>
  <li>Triggers for evolution: local talent quality improves, local management builds track record, local market becomes more strategically important, or technology at the location matures.</li>
  <li>The firm must actively decide to grant expanded authority and mandate — it will not happen by default.</li>
</ul>

<div class="section-label">WHY THIS MATTERS STRATEGICALLY</div>

<ul class="bullets">
  <li><strong>Avoids strategic waste:</strong> Treating all plants as "Offshore" — even plants located near knowledge clusters or sophisticated markets — misses the strategic value those locations could provide.</li>
  <li><strong>Aligns investment with mandate:</strong> A Lead plant needs heavy investment in R&D infrastructure and talent development; an Offshore plant does not. The framework prevents over-investing in low-mandate plants or under-investing in high-mandate plants.</li>
  <li><strong>Network portfolio design:</strong> A well-designed global network has an appropriate mix of roles — not all Offshore plants (leaves innovation capability on the table) and not all Lead plants (prohibitively expensive).</li>
  <li><strong>Connection to Moderna case:</strong> Moderna's decision about where to locate manufacturing for mRNA vaccines illustrates facility role choices — some facilities serve regional markets (Server/Contributor role), while the core innovation and process development mandate stays in the Lead facility.</li>
</ul>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: 6 Location Drivers</span>
  <span class="link-tag">Related: 3 Network Design Choices</span>
  <span class="link-tag">Related: 4 Location Analysis Frameworks</span>
  <span class="link-tag">Related: Moderna Case</span>
</div>
`
    }
  ]
};

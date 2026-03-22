const TOPIC_FOUNDATIONS = {
  id: 'foundations',
  eyebrow: 'Classes 1–2 · Foundation Layer',
  title: 'The Framework, Alignment & Trade-offs',
  icon: '🏛',
  desc: 'Strategy hierarchy · 3 views · SOA · PPM · Trade-offs · NPV · Cost decomposition',
  subtopics: [
    {
      id: 'strategy-hierarchy',
      title: 'Strategy Hierarchy',
      isCase: false,
      body: `<p class="prose">Large organizations define strategy in a hierarchical manner across three levels. Understanding this hierarchy is the first step to understanding operations strategy — because operations strategy only makes sense in the context of what the business is trying to achieve. The three levels are nested: corporate sets the arena, business sets the competitive position within that arena, and functional strategies (including operations) execute that position.</p>

<div class="section-label">THE THREE LEVELS</div>
<ul class="bullets">
  <li><strong>Corporate Strategy</strong> — The highest level. Defines the industries in which the organization will be active. Allocates capital and resources across business units (each a self-contained part of the organization competing in one industry).</li>
  <li><strong>Business Strategy</strong> — Formulated by each business unit to seek a favorable competitive position within its industry. Competes on four dimensions that describe the value proposition to customers: <strong>Price, Quality, Responsiveness, and Variety</strong>.</li>
  <li><strong>Functional Strategies</strong> — Defined to execute the business strategy. Includes financial strategy, marketing strategy, and <strong>operations strategy</strong> — the plan for developing resources and configuring processes to create and deliver products/services.</li>
</ul>

<div class="section-label">THE ALIGNMENT PRINCIPLE: BUSINESS DEFINES WHAT, OPERATIONS DEFINES HOW</div>
<p class="prose">Business strategy defines <em>what</em> the firm competes on. Operations strategy answers <em>how</em> the firm will actually deliver it. The connection between the two levels is not optional — it is the central challenge of operations strategy. A firm that competes on price but builds an operation optimized for variety will fail. Alignment is the guiding principle of the entire course.</p>

<div class="section-label">THE 1-TO-1 MAPPING</div>
<p class="prose">There is a direct, one-to-one correspondence between each business strategy dimension and the operational capability required to deliver it:</p>
<ul class="bullets">
  <li><strong>Price ↔ Cost</strong> — Competing on low price requires operations that minimize total cost of production and delivery.</li>
  <li><strong>Quality ↔ Quality</strong> — Competing on quality requires operations capable of delivering reliable, high-performance outputs.</li>
  <li><strong>Responsiveness ↔ Lead-Time</strong> — Competing on fast delivery requires operations with short, reliable lead times.</li>
  <li><strong>Variety ↔ Flexibility</strong> — Competing on product variety or customization requires operations with the flexibility to handle a wide range of products without prohibitive cost penalties.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>This mapping IS the alignment principle. The right column is what operations must deliver; the left column is how customers perceive it. Every misalignment between business strategy and operations capability can be traced back to a break in one of these four connections. The Swiss Watch industry's crisis in the 1970s is a perfect example: Swiss manufacturers were aligned for Quality and Variety (luxury watches), but the market shifted toward Price — and their operational systems were completely mismatched for that capability.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: OS Framework</span>
  <span class="link-tag">Related: SOA (Class 1)</span>
  <span class="link-tag">Related: PPM (Class 1)</span>
  <span class="link-tag">Case: Swiss Watch (Class 1)</span>
</div>`
    },
    {
      id: 'os-definition',
      title: 'Operations Strategy — Formal Definition & OS vs. OM',
      isCase: false,
      body: `<p class="prose">Operations strategy has a precise, formal definition that encodes the entire logic of the course. Every word in the definition is deliberate and worth unpacking carefully — it tells you exactly what operations strategy is, what it acts on, what it produces, and what it is ultimately trying to accomplish.</p>

<div class="section-label">THE VERBATIM DEFINITION</div>
<div class="formula-wrap">
  <div class="formula">"A long-term plan for developing resources and configuring processes such that the resulting capabilities maximize Net Present Value (NPV)"</div>
  <div class="formula-explain">— Professor Jan A. Van Mieghem, Operations Strategy</div>
</div>

<div class="section-label">PHRASE-BY-PHRASE BREAKDOWN</div>
<ul class="bullets">
  <li><strong>"A long-term plan"</strong> — Operations strategy is strategic, not tactical. It sets direction over years or decades, not days or weeks. This distinguishes it from operations management.</li>
  <li><strong>"for developing resources"</strong> — Operations strategy actively builds and shapes the asset portfolio (capacity, equipment, people, facilities). Resources are the hardware of the operation.</li>
  <li><strong>"and configuring processes"</strong> — Operations strategy also designs and arranges the activity network — the software of the operation. How work flows, how supply chains are structured, how technology is deployed.</li>
  <li><strong>"such that the resulting capabilities"</strong> — Resources and processes together produce capabilities: Cost, Quality, Lead-Time, Flexibility. The capabilities are the output of operational design choices.</li>
  <li><strong>"maximize Net Present Value (NPV)"</strong> — The ultimate criterion. Not market share, not revenue, not quality awards. NPV is the definitive financial measure of whether strategy creates value for the firm.</li>
</ul>

<div class="section-label">OS VS. OM: THE CRITICAL DISTINCTION</div>
<ul class="bullets">
  <li><strong>Operations Management (OM)</strong> — Day-to-day management and improvement of activities in the transformation process. Tactical. Asks: "How do we run today's operations better?" (Covered in the prerequisite course, DAO2703.)</li>
  <li><strong>Operations Strategy (OS)</strong> — Long-run strategic decisions about what resources to develop and how to configure processes. Asks: "What kind of operation should we build, and what should it be capable of?"</li>
  <li>OM optimizes within a given system. OS designs which system to have. Both matter, but they operate on different time horizons and different levers.</li>
</ul>

<div class="section-label">THE TWO MASTER QUESTIONS OF OPERATIONS STRATEGY</div>
<ul class="bullets">
  <li><strong>Question 1:</strong> What should operations be good at? — Which capabilities should the organization nurture? (Answered by alignment: connect to business strategy.)</li>
  <li><strong>Question 2:</strong> Which operational system of resources and processes best provides these capabilities? — Which specific combination of resource and process decisions yields the highest NPV?</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The definition is a miniature map of the entire course. "Developing resources" = Classes 3–5 (size, timing, type, location). "Configuring processes" = Classes 6–7 (supply, technology, innovation, demand). "Capabilities" = the alignment layer from Class 1. "Maximize NPV" = the financial evaluation thread running throughout. Every topic in the course is answering part of this one definition.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: NPV (Class 1)</span>
  <span class="link-tag">Related: Three Views (Class 1)</span>
  <span class="link-tag">Related: OS Framework (Class 1)</span>
</div>`
    },
    {
      id: 'three-views',
      title: 'Three Complementary Views',
      isCase: false,
      body: `<p class="prose">To fully understand any operation, you need three different lenses — the Process View, the Resource View, and the Competency/Capability View. Each view reveals something different. No single view is sufficient on its own. The genius of the framework is that all three must be used simultaneously: you cannot make good resource decisions without understanding what capabilities you need, and you cannot define required capabilities without understanding your business strategy.</p>

<div class="section-label">VIEW 1: THE PROCESS VIEW</div>
<p class="prose">The Process View looks at the <em>transformation process</em> — the activity network used to create and deliver products and services. It asks: <strong>How is work done?</strong> Operations Strategy makes long-run decisions in four areas:</p>
<ul class="bullets">
  <li><strong>Supply</strong> — Which activities should we perform internally vs. outsource? This is the make-or-buy decision. Includes vertical integration, single-sourcing vs. multi-sourcing, and supply chain structure decisions.</li>
  <li><strong>Technology</strong> — Which process technology do our processes need? Examples: CNC machines, automation, AI, flexible manufacturing systems (FMS). Process technology decisions must link to product technology and product design.</li>
  <li><strong>Innovation</strong> — When and how to improve and innovate? Includes continuous improvement (Kaizen, Lean, Six Sigma) and radical change (reengineering, copy best practice). Organizational learning — both conceptual (why) and operational (how) — is central here.</li>
  <li><strong>Demand</strong> — How to match demand with available supply? This is outputs management. When supply cannot quickly adapt, tools include price control and capacity control. Revenue Management (RM) is the collection of demand management practices that maximize revenue from limited, perishable supply.</li>
</ul>

<div class="section-label">VIEW 2: THE RESOURCE VIEW</div>
<p class="prose">The Resource View looks at the <em>assets used</em> in the transformation process. It asks: <strong>Who or what does the work?</strong> Operations Strategy makes long-run decisions in four areas:</p>
<ul class="bullets">
  <li><strong>Size</strong> — How many resources should we invest? Examples: number of plants, capacity size of each plant. Key trade-off: cost of excess capacity vs. cost of a capacity shortfall (opportunity cost). Tool: marginal analysis.</li>
  <li><strong>Timing</strong> — When should we increase or reduce resources? Key trade-off: cost of capacity adjustment vs. cost of excess or shortfall. Example: Eli Lilly abandoned a $325M insulin plant in 2007 after demand forecasts changed.</li>
  <li><strong>Type</strong> — What kinds of resources are best? Examples: job shop vs. repetitive line, degree of automation, level of flexibility. This decision determines the fundamental character of the operation.</li>
  <li><strong>Location</strong> — Where should resources be located? Examples: 7-Eleven store placement, Zara manufacturing locations. Globalization increases the importance and complexity of this decision.</li>
</ul>

<div class="section-label">VIEW 3: THE COMPETENCY/CAPABILITY VIEW</div>
<p class="prose">The Capability View looks at <em>what operations can and cannot do</em>. It asks: <strong>Which capabilities should the operation have?</strong> This view must connect directly to business strategy via the 1-to-1 mapping:</p>
<ul class="bullets">
  <li><strong>Cost</strong> — The total cost of operating, including fixed and variable costs. Critical in low-margin industries competing on price.</li>
  <li><strong>Quality</strong> — The ability to deliver quality outputs, including design-related quality (performance, features) and performance-related quality (reliability, durability).</li>
  <li><strong>Lead-Time (Responsiveness)</strong> — The total responsiveness or lead-time from order to delivery. Key success factor in service industries and rapidly changing environments.</li>
  <li><strong>Flexibility</strong> — Operations' flexibility to change. Includes scope (range of products), agility (speed of changeover), and robustness (ability to handle disruptions). Key when competing on customized products or services.</li>
</ul>

<div class="section-label">WHY ALL THREE VIEWS ARE NEEDED SIMULTANEOUSLY</div>
<p class="prose">Each view sees something the others miss. The Process View reveals how work flows but says nothing about the assets required. The Resource View shows what assets exist but says nothing about what they produce. The Capability View shows what the operation can deliver but says nothing about how — or why — it can deliver that. Alignment is the act of making all three views coherent with each other and with business strategy.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The three views correspond to the three analytical questions you face on any exam question about operations: What does this firm do? (Process View) What does it have? (Resource View) What can it actually achieve? (Capability View). Using all three to analyze a case like Swiss Watch or ACC is what separates a complete answer from a partial one.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: OS Framework (Class 1)</span>
  <span class="link-tag">Related: Strategy Hierarchy (Class 1)</span>
  <span class="link-tag">Case: Swiss Watch (Class 1)</span>
</div>`
    },
    {
      id: 'os-framework',
      title: 'The OS Framework',
      isCase: false,
      body: `<p class="prose">The Operations Strategy Framework is the spine of the entire course. Every topic, case, and calculation connects back to it. Learn this structure cold — it is the answer template for any question that asks you to analyze, design, or critique an operations strategy. The framework shows exactly how business strategy flows down to operational decisions through capabilities.</p>

<div class="section-label">THE FULL FRAMEWORK (TOP TO BOTTOM)</div>
<ul class="bullets">
  <li><strong>BUSINESS STRATEGY (the WHAT)</strong>
    <ul>
      <li>Price — compete on lowest cost to customer</li>
      <li>Quality — compete on reliability, performance, and durability</li>
      <li>Responsiveness — compete on speed of delivery</li>
      <li>Variety — compete on breadth of offerings and customization</li>
    </ul>
  </li>
  <li><strong>↕ ALIGNMENT (the bridge)</strong> — 1-to-1 mapping: Price↔Cost, Quality↔Quality, Responsiveness↔Lead-Time, Variety↔Flexibility</li>
  <li><strong>CAPABILITIES (the WHAT MUST OPS DELIVER)</strong>
    <ul>
      <li>Cost — total unit cost of production and delivery</li>
      <li>Quality — ability to produce defect-free, high-performance outputs</li>
      <li>Lead-Time — total time from order to delivery</li>
      <li>Flexibility — ability to handle variety without prohibitive cost penalties</li>
    </ul>
  </li>
  <li><strong>↕ DELIVERED BY</strong></li>
  <li><strong>OPERATIONS STRATEGY — two sides:</strong></li>
</ul>

<div class="section-label">LEFT SIDE: RESOURCE DECISIONS (the hardware)</div>
<ul class="bullets">
  <li><strong>Size</strong> — How many resources? (Capacity level) [Class 3]</li>
  <li><strong>Timing</strong> — When to invest or divest? [Class 3]</li>
  <li><strong>Type</strong> — What kind of resources? (Dedicated vs. flexible) [Class 4]</li>
  <li><strong>Location</strong> — Where to locate? [Class 5]</li>
</ul>

<div class="section-label">RIGHT SIDE: PROCESS DECISIONS (the software)</div>
<ul class="bullets">
  <li><strong>Supply</strong> — What to make internally vs. outsource? [Class 6]</li>
  <li><strong>Technology</strong> — Which process and product technologies? [Class 7]</li>
  <li><strong>Innovation</strong> — When and how to improve? [Class 7]</li>
  <li><strong>Demand</strong> — How to match supply with demand? [Class 6]</li>
</ul>

<div class="section-label">THE ALIGNMENT PRINCIPLE IN FULL</div>
<p class="prose">Operations strategy should develop resources and configure processes such that the resulting capabilities are connected — or aligned — with the competitive position that a firm seeks over time. There are two perspectives on alignment:</p>
<ul class="bullets">
  <li><strong>Market Perspective (Top-Down):</strong> Start from business strategy → identify required capabilities → determine what operations must do particularly well → make resource and process decisions accordingly.</li>
  <li><strong>Resource Perspective (Bottom-Up):</strong> Assess current resources and processes → determine what capabilities they can actually generate → determine what value proposition is actually deliverable → close any gaps.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Every exam question about operations is really a question about this framework. "Describe DJC's operations strategy" = fill in the 8 boxes for DJC. "Why is ACC struggling?" = identify which boxes are misaligned. "What should Swatch do?" = recommend changes to the 8 boxes that produce capabilities aligned with the intended business strategy. Master the framework and every question becomes answerable.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Three Views (Class 1)</span>
  <span class="link-tag">Related: SOA (Class 1)</span>
  <span class="link-tag">Related: Strategy Hierarchy (Class 1)</span>
  <span class="link-tag">Case: Swiss Watch (Class 1)</span>
  <span class="link-tag">Case: ACC vs. DJC (Class 2)</span>
</div>`
    },
    {
      id: 'soa',
      title: 'Strategic Operational Audit (SOA)',
      isCase: false,
      body: `<p class="prose">The Strategic Operational Audit (SOA) is the primary diagnostic tool for identifying alignment gaps between what a firm promises its customers and what it can actually deliver. The SOA does not tell you what the right strategy is — it tells you where the breaks in the chain are, so you know where to focus your strategic redesign effort.</p>

<div class="section-label">PURPOSE</div>
<p class="prose">The SOA is used to assess whether a firm's resources, processes, and competencies are aligned with its stated value proposition. It identifies misalignments at three distinct levels, each progressively more operational. A firm can be misaligned at any level — or at all three simultaneously.</p>

<div class="section-label">THE THREE GAPS</div>
<ul class="bullets">
  <li><strong>Gap 1 — Strategy Gap</strong>: Is there a gap between the firm's <em>Value Proposition</em> (what it promises to customers in the market) and the <em>Deliverable Value</em> (what it actually can deliver)? This is the top-level market-facing gap. Example: A firm claims to offer fast delivery but consistently misses lead-time commitments.</li>
  <li><strong>Gap 2 — Competency Gap</strong>: Is there a gap between the firm's <em>current competencies/capabilities</em> and the <em>competencies needed</em> to deliver its value proposition? Even if the firm knows what it promises, does it actually have the operational capabilities (Cost, Quality, Lead-Time, Flexibility) to back it up?</li>
  <li><strong>Gap 3 — Resource & Process Gap</strong>: Is there a gap between the firm's <em>current resources and processes</em> and the <em>resources and processes needed</em> to generate the required competencies? This is the most operational level: the 8 resource/process decisions of the OS Framework.</li>
</ul>

<div class="section-label">HOW TO USE THE SOA ON THE EXAM</div>
<ul class="bullets">
  <li><strong>Step 1:</strong> Identify the firm's stated value proposition — what does it claim to offer customers? (Price leadership? Custom solutions? Speed?)</li>
  <li><strong>Step 2:</strong> Identify the deliverable value — what can it actually deliver given its operational constraints?</li>
  <li><strong>Step 3:</strong> Check for a Strategy Gap. If what is promised and what is deliverable diverge, name the gap explicitly.</li>
  <li><strong>Step 4:</strong> Identify the required competencies for the value proposition. Then assess current competency levels. Name the Competency Gap.</li>
  <li><strong>Step 5:</strong> Identify the required resources and processes for the required competencies. Then assess current resources and processes. Name the Resource & Process Gap.</li>
  <li><strong>Step 6:</strong> Recommend corrective actions at the appropriate level(s). Gaps at all three levels require multi-level fixes.</li>
</ul>

<div class="section-label">THE SWISS WATCH CONNECTION</div>
<p class="prose">The Swiss Watch case is a textbook SOA application. The traditional Swiss industry's value proposition was luxury quality and exclusivity (high-end market). As the market shifted toward the low-end and mid-market, a Strategy Gap emerged: their capabilities (artisanal craftsmanship, job-shop production) could not deliver the low-cost, high-volume production needed for the mass market. A Competency Gap (Cost efficiency) led to a Resource & Process Gap (no automated assembly, no standardized components). Hayek's Swatch solution closed all three gaps simultaneously by redesigning the product (51 parts), revolutionizing manufacturing, and cutting labor to less than 10% of cost.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The SOA is a top-down diagnostic: start at the market (what are you promising?) and work down to operations (can you actually deliver it?). But the fix is often bottom-up: you change resources and processes first, which enables new competencies, which enables a revised or expanded value proposition. The SOA tells you where you are; the OS Framework tells you what to change.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: OS Framework (Class 1)</span>
  <span class="link-tag">Related: PPM (Class 1)</span>
  <span class="link-tag">Case: Swiss Watch (Class 1)</span>
</div>`
    },
    {
      id: 'ppm',
      title: 'Product-Process Matrix (PPM)',
      isCase: false,
      body: `<p class="prose">The Product-Process Matrix (PPM) — also called the Operations Management Matrix (OMM) — is an alignment tool that maps the type of production process against the type of product being produced. It reveals whether a firm's process technology is appropriately matched to its product variety strategy. Misalignment on the PPM is one of the most common and costly operations errors.</p>

<div class="section-label">THE FIVE PROCESS TYPES</div>
<ul class="bullets">
  <li><strong>Project</strong> — One-off, unique outputs. Maximum flexibility, highest per-unit cost. Example: constructing a custom building, developing a bespoke software platform.</li>
  <li><strong>Job Shop</strong> — Each job follows a different path through the facility; all share the same equipment pool. High flexibility, high per-unit cost. Example: a machine shop handling custom orders, a hospital emergency department.</li>
  <li><strong>Batch</strong> — Products are made in groups (batches) of a set quantity. Medium flexibility, medium cost. Example: ACC Sunnyvale plant producing connectors in batch runs across 5 functional areas.</li>
  <li><strong>Repetitive Line (Assembly Line)</strong> — Continuous or near-continuous flow of identical products. Low flexibility, low per-unit cost. Example: DJC Kawasaki plant with 4 cellular product-family lines, Toyota automotive assembly.</li>
  <li><strong>Continuous Flow</strong> — Uninterrupted process flow. Lowest flexibility, lowest unit cost. Example: petroleum refining, chemical manufacturing, power generation.</li>
</ul>

<div class="section-label">THE MATRIX STRUCTURE</div>
<ul class="bullets">
  <li><strong>Horizontal axis (X-axis):</strong> Product Variety — from low/standardized (left) to high/customized (right).</li>
  <li><strong>Vertical axis (Y-axis):</strong> Process Flexibility — from low/repetitive (bottom) to high/flexible (top).</li>
  <li><strong>Alignment Zone (Diagonal):</strong> Runs from bottom-left (standardized products + repetitive line) to top-right (customized products + job shop). Firms positioned on the diagonal are aligned.</li>
</ul>

<div class="section-label">THE TWO MISALIGNMENT POSITIONS</div>
<ul class="bullets">
  <li><strong>Position ABOVE the diagonal (too much flexibility for the product):</strong> The firm is over-investing in process flexibility for products that don't need it. Example: a repetitive-line-capable firm using expensive job-shop setups to make commodity products. High cost without the differentiation benefit. This is a waste of resources.</li>
  <li><strong>Position BELOW the diagonal (too little flexibility for the product):</strong> The firm cannot deliver the variety customers need with its current process. Example: using an inflexible assembly line to try to produce customized products. High changeover costs, poor quality, inability to fulfill orders. This is a capability gap.</li>
</ul>

<div class="section-label">ACC VS. DJC ON THE PPM</div>
<ul class="bullets">
  <li><strong>DJC (Kawasaki):</strong> 640 standardized SKUs → Repetitive Line (4 cellular product-family lines) → Bottom-left diagonal → ALIGNED.</li>
  <li><strong>ACC (Sunnyvale):</strong> 4,500 SKUs (85% standard, 15% custom) → Batch process (5 disconnected functional areas) → MISALIGNED for its standard segment. ACC is using batch-level flexibility for products that only need repetitive-line efficiency. This is a major source of its cost disadvantage.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The PPM is often the quickest way to spot operational misalignment. If a firm has a wide product variety but uses a rigid, inflexible process (bottom-right of the matrix), it will struggle with quality, lead times, and costs. If it has a standardized product but uses an overly flexible process (top-left), it is wasting resources on flexibility it does not need. The diagonal is the zone of alignment — and the zone of maximum competitiveness.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: SOA (Class 1)</span>
  <span class="link-tag">Related: Operational Trade-offs (Class 2)</span>
  <span class="link-tag">Related: Three Views (Class 1)</span>
  <span class="link-tag">Case: ACC vs. DJC (Class 2)</span>
</div>`
    },
    {
      id: 'npv',
      title: 'NPV — Net Present Value',
      isCase: false,
      body: `<p class="prose">Net Present Value (NPV) is the ultimate financial criterion for evaluating any operations strategy decision. The formal definition of operations strategy explicitly states that the goal is to "maximize NPV" — so NPV is not just one tool among many; it is the destination. Every resource decision, every process configuration, every trade-off analysis ultimately feeds into whether the chosen operational system creates or destroys value.</p>

<div class="section-label">THE NPV FORMULA</div>
<div class="formula-wrap">
  <div class="formula">NPV = C₀ + Σ [ Cₜ / (1+r)ᵗ ]</div>
  <div class="formula-explain">
    <strong>Intuition:</strong> A dollar received in the future is worth less than a dollar received today, because today's dollar can be invested to earn a return. The discount rate r captures this opportunity cost. The formula sums all future cash flows, each shrunk by the factor (1+r)ᵗ to reflect how far in the future they arrive, then adds the initial investment C₀ (which is typically negative, representing a cash outflow today).
  </div>
</div>

<div class="section-label">VARIABLE DEFINITIONS</div>
<ul class="bullets">
  <li><strong>C₀</strong> — Initial investment cost at time 0. Typically negative (cash outflow). Example: cost of building a new factory, purchasing equipment.</li>
  <li><strong>Cₜ</strong> — Net cash flow (return) in future time period t. Can be positive (revenue) or negative (operating costs). This is what the operational system earns period by period.</li>
  <li><strong>r</strong> — The discount rate (rate of return). Reflects the opportunity cost of capital and the risk of the investment. A higher r means future cash flows are discounted more steeply.</li>
  <li><strong>t</strong> — The time period index (t = 1, 2, 3, … T). Each period's cash flow is divided by (1+r)ᵗ, so cash flows further in the future are worth less today.</li>
  <li><strong>T</strong> — Total number of time periods in the analysis horizon.</li>
  <li><strong>Σ</strong> — Summation from t=1 to T. The present value (PV) of all future cash flows.</li>
</ul>

<div class="section-label">INTUITION: WHY DO WE DISCOUNT?</div>
<ul class="bullets">
  <li>A dollar today is worth more than a dollar in the future because it can be invested now to generate returns.</li>
  <li>Future cash flows are uncertain — the discount rate also compensates for risk.</li>
  <li>The further in the future a cash flow occurs, the less certain it is and the less valuable it is today.</li>
  <li>Discounting converts all cash flows to a common "today" basis so they can be compared and summed meaningfully.</li>
</ul>

<div class="section-label">DECISION RULE</div>
<ul class="bullets">
  <li><strong>NPV &gt; 0:</strong> The investment creates value — the operational system earns more than the cost of capital. Choose it.</li>
  <li><strong>NPV &lt; 0:</strong> The investment destroys value — the operational system earns less than the cost of capital. Reject it.</li>
  <li><strong>NPV = 0:</strong> The investment exactly earns the cost of capital — indifferent.</li>
  <li><strong>When comparing alternatives:</strong> Choose the operational strategy with the highest NPV.</li>
</ul>

<div class="section-label">STRATEGIC IMPLICATION</div>
<p class="prose">The formal definition of operations strategy states the goal is to maximize NPV. This means every operational decision — capacity size, timing of investment, type of process, location of facilities — must ultimately be evaluated by its NPV impact. Trade-off curves show what's possible. The efficient frontier shows what's best-in-class. But NPV determines which point on the frontier actually creates the most value for this particular firm given its business strategy and cost of capital.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>NPV is the thread that runs through every class. In Class 3, you calculate NPV of capacity alternatives (invest now vs. wait). In Class 4, you calculate NPV of flexible vs. dedicated capacity. In Class 6, you maximize NPV through demand management. The formula never changes — but the cash flows you plug in depend entirely on which operational decisions you are evaluating. Know the formula cold and know what drives the Cₜ values in each context.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: OS Definition (Class 1)</span>
  <span class="link-tag">Related: Capacity Sizing (Class 3)</span>
  <span class="link-tag">Related: Option Value of Waiting (Class 3)</span>
</div>`
    },
    {
      id: 'operational-tradeoffs',
      title: 'Operational Trade-offs & Efficient Frontier',
      isCase: false,
      body: `<p class="prose">Operational trade-offs are a fundamental reality of operations strategy: an operational system cannot simultaneously excel at all capabilities. The choice of resources and processes defines not just what you can do, but what you must give up. Understanding trade-offs — and the efficient frontier they collectively define — is the analytical foundation for evaluating any competitive situation.</p>

<div class="section-label">WHY TRADE-OFFS EXIST</div>
<p class="prose">An organization cannot have it all. Its capabilities exhibit trade-offs because of the finite nature of any operational system. A batch process designed for variety inherently produces higher per-unit costs than a repetitive line designed for standardization. A job shop built for flexibility cannot match the throughput efficiency of an assembly line. These are not failures of management — they are structural properties of the operational systems themselves. Operations strategy can reshape these trade-offs by choosing different operational systems, but within any given system, the trade-offs are real and must be managed.</p>

<div class="section-label">THREE CRITICAL IMPLICATIONS OF TRADE-OFFS</div>
<ul class="bullets">
  <li><strong>An organization cannot have it all</strong> — its capabilities exhibit trade-offs due to the finite abilities of its operational system.</li>
  <li><strong>Operations strategy can shape and change trade-offs</strong> — by choosing the right operational systems (e.g., investing in setup time reduction shifts the trade-off curve outward).</li>
  <li><strong>Trade-offs require choices</strong> — management must decide where on the trade-off curve to operate. You cannot sit everywhere at once.</li>
</ul>

<div class="section-label">THE TRADE-OFF CURVE</div>
<p class="prose">A trade-off curve is the graphical representation of the capabilities achievable by a given operational system. Plotted with Unit Cost on the Y-axis (higher = lower cost = better) and Product Variety/Flexibility on the X-axis, each process type traces its own curve:</p>
<ul class="bullets">
  <li><strong>Job Shop curve:</strong> Covers the high-variety, high-cost region. Moving along this curve, you can reduce variety to reduce cost somewhat, but never reach the cost efficiency of a repetitive line.</li>
  <li><strong>Batch curve:</strong> Covers the medium-variety, medium-cost region. A compromise between flexibility and efficiency.</li>
  <li><strong>Repetitive Line curve:</strong> Covers the low-variety, low-cost region. Highest efficiency for standardized products; completely unsuitable for high-variety production.</li>
  <li>Moving <em>along</em> a curve = trading off within the same operational system. Moving <em>between</em> curves = choosing a fundamentally different operational system.</li>
</ul>

<div class="section-label">THE EFFICIENT FRONTIER</div>
<p class="prose">The efficient frontier is the outer envelope formed by connecting the "sweet spots" of all operational system trade-off curves in the industry. It represents the industry's lowest cost achievable for each level of non-cost capability (variety, quality, lead-time, flexibility).</p>
<ul class="bullets">
  <li><strong>Sweet spot:</strong> Each operational system has a region on its trade-off curve where it is competitive — on the frontier. Outside this sweet spot, a different operational system would produce the same capability at lower cost.</li>
  <li><strong>Points ON the frontier:</strong> Operationally efficient — no competitor currently produces the same capability bundle at lower cost.</li>
  <li><strong>Points INSIDE the frontier:</strong> Operationally inefficient — some competitor can produce the same capabilities at lower cost. This gap is measured by COE (the operational efficiency cost differential).</li>
  <li><strong>Points OUTSIDE the frontier:</strong> Not currently attainable by any existing operational system in the industry. This region can only be reached by fundamental innovation (new operational systems that shift the frontier outward).</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The efficient frontier is the strategic landscape of an industry. Where you sit on — or inside — that frontier determines your competitive position. Being inside the frontier (high COE) is a strategic emergency: a competitor can offer the same value to customers at lower cost and still be profitable. The cost decomposition formula (ΔC = Cv + COE + CS) is the tool for diagnosing exactly why you are where you are.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: OE vs. Focus (Class 2)</span>
  <span class="link-tag">Related: Cost Decomposition (Class 2)</span>
  <span class="link-tag">Related: PPM (Class 1)</span>
  <span class="link-tag">Case: ACC vs. DJC (Class 2)</span>
</div>`
    },
    {
      id: 'oe-vs-focus',
      title: 'Operational Efficiency (OE) vs. Operational Focus',
      isCase: false,
      body: `<p class="prose">Once you understand that firms can sit inside the efficient frontier (operationally inefficient), the next question is: how do you get to the frontier? There are two distinct paths: Operational Efficiency (OE) improvement, which pushes the trade-off curve outward, and Operational Focus, which narrows the range of capabilities the operation must deliver so it can excel at a tighter set. These two paths are not mutually exclusive — the best strategies often pursue both.</p>

<div class="section-label">OPERATIONAL EFFICIENCY (OE)</div>
<p class="prose">A firm's operational efficiency (OE) for a non-cost capability is measured by its <em>cost disadvantage relative to the efficient frontier</em> for that same capability. The measure is called COE — the operational efficiency cost differential.</p>
<ul class="bullets">
  <li><strong>COE = 0 or negative:</strong> Operationally efficient. No competitor can deliver the same capabilities at lower cost with their operational systems.</li>
  <li><strong>COE &gt; 0:</strong> Operationally inefficient at the rate of COE. A competitor using a more efficient operational system to deliver the same value proposition would have a cost advantage of COE per unit.</li>
  <li><strong>OE Improvement:</strong> Actions that push the trade-off curve outward — enabling the firm to either produce the same variety at lower cost, or produce more variety at the same cost. Examples: reducing setup times, improving quality to reduce rework, increasing utilization through better scheduling.</li>
</ul>

<div class="section-label">OPERATIONAL FOCUS</div>
<p class="prose">A focused operation is one whose required capabilities are restricted to a narrow set in the capability space. Focus improves efficiency because "simplicity and repetition breeds competence" — doing fewer things allows deeper expertise, eliminates compromises in operational system design, and concentrates management attention.</p>
<ul class="bullets">
  <li><strong>Focused operation:</strong> Has a consistent, tight cluster of operating points on its trade-off curve. Optimized for a specific capability bundle.</li>
  <li><strong>Unfocused operation:</strong> Has operating points scattered over a wide range of its trade-off curve. Forced to compromise on multiple dimensions simultaneously.</li>
  <li><strong>The "Divide and Conquer" approach to focus:</strong>
    <ol>
      <li>Partition products/services into groups with homogeneous capability needs.</li>
      <li>Separate the resources and processes that critically support each group's key value proposition while sharing those where sharing does not compromise focus.</li>
      <li>Create a charter for each operation to retain focus over time — preventing mission creep.</li>
    </ol>
  </li>
</ul>

<div class="section-label">THE FOCUS FACTORY CONCEPT</div>
<p class="prose">A focus factory is a dedicated operational unit — within a larger plant or as a separate facility — designed around a specific product family or customer segment. It has a clear, narrow mandate: deliver a specific set of capabilities exceptionally well. The focus factory avoids the compromises forced on unfocused operations that try to serve multiple segments with a single system.</p>

<div class="section-label">ACC VS. DJC: THE DEFINITIVE FOCUS EXAMPLE</div>
<ul class="bullets">
  <li><strong>DJC (Kawasaki):</strong> 640 SKUs. Standardized packaging (tape and reel only). 4 product-family cells, each with 2–6 parallel repetitive lines. Effective utilization: 75.4%. Output per employee: 7.45M units/year. DJC is highly focused — its operational system is optimized for a narrow, standardized capability bundle.</li>
  <li><strong>ACC (Sunnyvale):</strong> 4,500 SKUs (85% standard, 15% custom). 5 disconnected functional areas serving all product types. Multiple packaging formats. Effective utilization: 30.2%. Output per employee: 1.06M units/year. ACC is deeply unfocused — it attempts to serve custom and standard segments with a single batch system designed for neither.</li>
  <li><strong>The result:</strong> ACC's cost disadvantage is not primarily explained by location or strategy — a significant COE component reflects pure operational inefficiency driven by lack of focus. Separation of the standard and custom segments into dedicated operational systems — a focus strategy — would allow ACC to bring its standard segment to the efficient frontier while protecting its differentiated custom segment.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>OE improvement and Operational Focus are two different answers to the same problem (being inside the efficient frontier). OE improvement pushes the entire trade-off curve outward. Focus narrows the range of the curve you need to be on — making it easier to reach the frontier with fewer resources. The ACC/DJC case shows that COE can be massive (DJC had a $4.16/thousand unit labor advantage from pure OE alone, after controlling for volume and strategy) when a firm is both operationally inefficient AND unfocused.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Operational Trade-offs (Class 2)</span>
  <span class="link-tag">Related: Cost Decomposition (Class 2)</span>
  <span class="link-tag">Case: ACC vs. DJC (Class 2)</span>
</div>`
    },
    {
      id: 'cost-decomposition',
      title: 'Cost Decomposition — ΔC = Cv + COE + CS',
      isCase: false,
      body: `<p class="prose">The cost decomposition formula is the primary analytical tool for assessing the seriousness of a competitive threat. When two firms have different unit costs, the raw difference is almost always misleading — it conflates legitimate strategic choices, temporary volume shortfalls, and genuine operational inefficiency. The formula separates these three drivers so you can identify the true nature and magnitude of the competitive threat.</p>

<div class="section-label">THE COST DECOMPOSITION FORMULA</div>
<div class="formula-wrap">
  <div class="formula">ΔC = Cv + COE + CS</div>
  <div class="formula-explain">
    <strong>Intuition:</strong> The total observed cost difference between two firms (ΔC) can be broken into three components: Cv (the portion explained by operating at different utilization levels from plan), COE (the portion explained by genuine operational inefficiency — being inside the efficient frontier), and CS (the portion explained by deliberate strategic choices about the value proposition). Only COE signals a real operational problem that needs to be fixed. Cv may correct itself as volumes recover. CS is a legitimate cost of your differentiation strategy.
  </div>
</div>

<div class="section-label">THE REARRANGEMENT: SOLVING FOR COE</div>
<div class="formula-wrap">
  <div class="formula">COE = ΔC − Cv − CS</div>
  <div class="formula-explain">
    <strong>Intuition:</strong> Start with the raw cost difference (ΔC), subtract the portion due to volume effects (Cv — which adjusts for the fact that both firms may be operating at different utilization rates relative to their plans), and subtract the portion due to strategic choice (CS — the cost of competing differently). What remains is the true operational efficiency gap: the advantage a rival's better operational systems give them, even if both firms were operating at the same utilization and making the same strategic choices.
  </div>
</div>

<div class="section-label">VARIABLE DEFINITIONS</div>
<ul class="bullets">
  <li><strong>ΔC</strong> — Total observed cost difference between our firm and the rival (our cost minus rival's cost). The raw, unadjusted number. Not the number to use for threat assessment.</li>
  <li><strong>Cv (Volume/Utilization Cost Differential)</strong> — The extra cost incurred by operating at a lower utilization than planned. Calculated as: actual per-unit cost minus what per-unit cost would be at the planned utilization rate (holding total cost fixed). Must be calculated separately for both firms: <em>Cv = Cv,us − Cv,rival</em>.</li>
  <li><strong>COE (Operational Efficiency Cost Differential)</strong> — The cost advantage a more efficient rival would have over us, even if both firms operated at their planned utilizations and delivered the same value proposition. A positive COE means we are operationally inefficient. This is the key threat indicator.</li>
  <li><strong>CS (Strategic Choice Cost Differential)</strong> — The cost of our differentiation strategy relative to the rival's. A firm competing on customization and responsiveness legitimately costs more than a firm competing purely on cost. This is a deliberate, justified cost difference — not inefficiency.</li>
</ul>

<div class="section-label">ACC/DJC NUMERICAL APPLICATION</div>
<ul class="bullets">
  <li><strong>Raw cost difference (ΔC):</strong> In 1991, ACC's total manufacturing cost was $33.79/thousand units vs. DJC's $26.10 — a raw difference of $7.69. However, raw materials are significantly cheaper in the U.S. (index 0.60), so after adjusting for location, the location-adjusted gap rises to approximately $13.54.</li>
  <li><strong>Strategy cost (CS):</strong> ACC serves 4,500 SKUs with multiple packaging formats, custom design collaboration, and high variety. DJC serves 640 standardized SKUs. The incremental cost of ACC's greater variety and customization strategy is estimated at approximately CS ≈ +21.5% of cost — a legitimate and expected strategic cost premium.</li>
  <li><strong>Volume cost (Cv):</strong> ACC's effective utilization is 30.2% vs. DJC's 75.4%. Much of ACC's cost disadvantage is also explained by spreading fixed costs over far fewer units than planned. The Cv component for labor alone: ACC's Cv = $1.87/thousand, DJC's Cv = $0.52/thousand.</li>
  <li><strong>COE for labor alone:</strong> COE = $6.15 (labor ΔC) + $0.52 (Cv,DJC) − $1.87 (Cv,ACC) − $0.64 (CS,DJC) = <strong>$4.16/thousand units</strong>. This is a significant genuine operational efficiency gap in labor alone — a serious threat.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The most important insight of the cost decomposition is this: <strong>only COE signals a real operational problem</strong>. Cv is often temporary (volume can recover). CS is intentional (it is the cost of your differentiation). But COE reveals that a rival's operational systems are fundamentally more efficient than yours — and that gap will persist and grow regardless of volume recovery or strategic adjustments. A large COE means you need OE improvement, focus, or a fundamental redesign of your operational systems. For ACC, the COE confirms that DJC's threat is real and structural, not a temporary artifact of exchange rates or economic conditions.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Operational Trade-offs (Class 2)</span>
  <span class="link-tag">Related: OE vs. Focus (Class 2)</span>
  <span class="link-tag">Case: ACC vs. DJC (Class 2)</span>
</div>`
    },
    {
      id: 'three-guidelines',
      title: 'Three Guidelines for Operations-Based Competition',
      isCase: false,
      body: `<p class="prose">Class 2 concludes with three practical strategic guidelines for how firms should compete when operations is a primary source of competitive advantage. These guidelines synthesize the trade-off, efficient frontier, and cost decomposition concepts into actionable strategic principles. They are not sequential steps — they are ongoing strategic disciplines that must be practiced simultaneously.</p>

<div class="section-label">GUIDELINE 1: STUDY YOUR OWN AND YOUR RIVALS' TRADE-OFF CURVES</div>
<ul class="bullets">
  <li>Conduct a threat analysis by estimating COE for your most threatening competitors.</li>
  <li>Map where both you and your rivals sit on the cost–variety (or cost–quality, cost–lead-time) trade-off space.</li>
  <li>Identify which operational systems your rivals are using and whether those systems are more efficient than yours for the same capability bundle.</li>
  <li><strong>Critical warning:</strong> Always adjust for location, volume/utilization differences, and strategic positioning before concluding about COE. Raw cost comparisons are misleading. An apparent cost disadvantage may be mostly CS (legitimate strategy cost) or Cv (temporary volume shortfall) rather than true operational inefficiency.</li>
  <li>Example: ACC's analysis of DJC should begin with the cost decomposition, not with the raw $7.69 cost difference. Only after controlling for location (raw materials 40% cheaper in U.S.), volume (30.2% vs. 75.4% utilization), and strategy (4,500 vs. 640 SKUs) can the true COE be identified.</li>
</ul>

<div class="section-label">GUIDELINE 2: STRENGTHEN YOUR COMPETITIVE POSITION</div>
<ul class="bullets">
  <li><strong>Focus operations appropriately</strong> — partition products and customers by homogeneous capability needs; create dedicated operational systems where the focus benefit exceeds the cost of separation.</li>
  <li><strong>Manage supplier and buyer relations</strong> — deep supplier relationships (like DJC's) enable quality-by-prevention, JIT delivery, and cost reduction through shared improvement. Strong buyer relationships enable lock-in through customization and trust.</li>
  <li><strong>Manage labor and capital markets</strong> — invest in training, multi-functional workers, proprietary process technology (DJC built its own equipment so rivals could not buy the same technology).</li>
  <li><strong>Develop proprietary practices</strong> in support of a differentiated and attractive value proposition — practices that are hard to observe, hard to copy, and hard to replicate quickly.</li>
  <li>These actions increase CS (the legitimate cost of your differentiation) and reduce COE (by moving to the efficient frontier). Together they strengthen the firm's competitive position without sacrificing the value proposition.</li>
</ul>

<div class="section-label">GUIDELINE 3: ANTICIPATE CUSTOMER DYNAMICS</div>
<ul class="bullets">
  <li>A longer-term operations strategy must include market research to estimate how customer preferences and willingness to pay will evolve over time.</li>
  <li>Customer utility functions change — what customers value today may not be what they value in five years. The Swiss Watch crisis is the canonical example: the market shifted from quality/exclusivity to price/accessibility, and the traditional Swiss producers were caught completely unprepared.</li>
  <li>Anticipating customer dynamics helps manage Cv (volume risk) by ensuring capacity decisions are made with realistic demand forecasts — not just extrapolations of current trends.</li>
  <li>It also enables proactive repositioning: if customer preferences are shifting toward a capability you currently lack, you have time to invest in that capability before the shift becomes a crisis.</li>
</ul>

<div class="section-label">THE FOUR DESIGN PRINCIPLES (SUPPORTING CONTEXT)</div>
<ul class="bullets">
  <li>Use focus <em>judiciously</em> — not always fully separate systems, but the right tailored degree of focus that balances the benefits of focus against economies of scale from sharing.</li>
  <li>Adopt best practices from competitors — benchmark rigorously (with proper COE adjustment) and selectively implement what closes your operational efficiency gap.</li>
  <li>Develop proprietary practices — operational advantage is most durable when rivals cannot easily observe or replicate it.</li>
  <li>Remember: operational efficiency is necessary but not sufficient for NPV maximization. You must also be sufficiently differentiated, hard to copy, and attractive to a large enough customer segment.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>These three guidelines are really three disciplines of competitive intelligence, operational design, and market foresight. Guideline 1 (study trade-off curves) tells you where you and your rivals stand today. Guideline 2 (strengthen position) tells you how to improve your operational systems. Guideline 3 (anticipate customer dynamics) tells you whether your improvements are pointed at the right target. A firm that does only Guideline 2 — improving operations without studying rivals or anticipating market shifts — risks building a world-class operation for a market that no longer exists. The Swiss watch industry got guideline 2 right (artisanal excellence) but ignored guidelines 1 and 3.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: OE vs. Focus (Class 2)</span>
  <span class="link-tag">Related: Operational Trade-offs (Class 2)</span>
  <span class="link-tag">Related: OS Framework (Class 1)</span>
  <span class="link-tag">Case: ACC vs. DJC (Class 2)</span>
  <span class="link-tag">Case: Swiss Watch (Class 1)</span>
</div>`
    }
  ]
};

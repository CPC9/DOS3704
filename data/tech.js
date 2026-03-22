const TOPIC_TECH = {
  id: 'tech',
  eyebrow: 'Class 7 · Technology & Innovation',
  title: 'Learning, Technology & Innovation',
  icon: '💡',
  desc: 'Learning curves · Continuous vs. radical · Concurrent engineering · Product-process lifecycle',
  subtopics: [
    {
      id: 'tech-in-os',
      title: 'Technology in Operations Strategy',
      body: `
<p class="prose">Technology is not just a product feature — it is a core lever of operations strategy. Class 7 positions technology decisions alongside innovation and learning as the key process-side decisions that, together with resource decisions (size, timing, type, location), determine what an organisation can do and how efficiently it can do it.</p>

<div class="section-label">TWO TYPES OF TECHNOLOGY</div>
<ul class="bullets">
  <li><strong>Product technology</strong> — scientific and technical knowledge embedded in what you sell. Examples: transistors enabling consumer electronics; mRNA molecules in Moderna's vaccines; flash memory in USB drives using quantum tunnelling.</li>
  <li><strong>Process technology</strong> — the equipment, methods, and coordination systems used to make and deliver products. Three sub-categories: manufacturing technology (CNC, robots, FMS), transportation technology (logistics systems), and coordination technology (GPS, ERP, AI scheduling).</li>
</ul>

<div class="section-label">WHY LINKING THEM MATTERS</div>
<p class="prose">Aligning product technology and process technology creates compounding advantages: when your process is purpose-built for your product, you get faster time-to-market, higher yield, better conformance quality, and the ability to scale. Misalignment — launching a product without a process capable of manufacturing it efficiently — bleeds time and cost.</p>

<div class="section-label">MODERNA PREVIEW: PRODUCT AND PROCESS AS ONE</div>
<p class="prose">Moderna's mRNA platform is the clearest course example of this alignment. The mRNA molecule is simultaneously the product technology (the therapeutic agent) and the process technology (a standardised "software" layer that any new vaccine can be written on top of). This is why Moderna could design the COVID-19 vaccine candidate in 48 hours and ship a clinical batch in 42 days — the same platform that defines the product also defines the manufacturing process.</p>

<div class="section-label">THE 5 PROCESS TECHNOLOGY DECISIONS</div>
<ul class="bullets">
  <li><strong>What technology?</strong> — Which process capability to adopt and what it enables that alternatives do not.</li>
  <li><strong>When to adopt?</strong> — First-mover advantages (learning head-start, standards influence, brand) vs. follower advantages (let others absorb early risk, adopt proven versions). Timing logic is analogous to capacity timing decisions in Class 3.</li>
  <li><strong>Which specific variant?</strong> — Vendor selection, integration costs, upgrade paths, and risk of lock-in.</li>
  <li><strong>How much to invest?</strong> — Pilot vs. full rollout; phased vs. big-bang adoption; how deeply to embed the technology across operations.</li>
  <li><strong>How to implement?</strong> — Build internally, license, acquire a firm, or establish a JV/partnership. Each trades off cost, speed, control, and learning.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Technology decisions are not one-time events — they are a sequence of five interlocking choices. Getting one wrong (e.g., correct technology, wrong timing) can eliminate the strategic benefit of getting the others right. The Moderna case illustrates all five: mRNA (what), vertical integration ahead of COVID (when), proprietary LNP delivery system (which variant), $125M Norwood facility (how much), build internally (how to implement).</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Process Technology Decisions</span>
  <span class="link-tag">Related: Product-Process Lifecycle</span>
  <span class="link-tag">Related: Concurrent Engineering</span>
  <span class="link-tag">Related: Moderna (Case)</span>
  <span class="link-tag">Related: OS Framework (Class 1)</span>
</div>
`
    },
    {
      id: 'process-tech-decisions',
      title: 'Process Technology Decisions — The 5 Decisions',
      body: `
<p class="prose">Every time an organisation considers adopting a new process technology — a new manufacturing system, coordination platform, or automation tool — it faces five distinct decisions. These decisions are sequential in logic but often made simultaneously under pressure, which is exactly when a clear framework helps.</p>

<div class="section-label">DECISION 1: WHAT TECHNOLOGY?</div>
<p class="prose">The fundamental capability question: what does this technology enable that current alternatives cannot? Focus on the operational capability gap it closes (cost, speed, quality, flexibility) rather than the technology itself. A technology that closes no capability gap relevant to your strategy is a distraction regardless of how impressive it is.</p>

<div class="section-label">DECISION 2: WHEN TO ADOPT?</div>
<ul class="bullets">
  <li><strong>First-mover advantages:</strong> head start on the learning curve; ability to influence industry standards; early brand association with new capability; time to resolve teething problems before competitors arrive.</li>
  <li><strong>Follower advantages:</strong> let early adopters absorb development costs and risks; adopt a more mature, proven version; avoid sunk costs if the technology turns out to be inferior; hire talent trained elsewhere.</li>
  <li>The timing logic mirrors Class 3 capacity timing: lead vs. lag strategies. Committing early builds experience but accepts risk; waiting preserves flexibility but cedes the learning head-start.</li>
</ul>

<div class="section-label">DECISION 3: WHICH SPECIFIC VARIANT?</div>
<p class="prose">Within a technology class, multiple vendors and variants exist. Key considerations: vendor lock-in risk (switching costs if you need to change), integration costs with existing systems, upgrade roadmap, support quality, and ecosystem size. Choosing a dominant-standard variant typically lowers lock-in risk but may sacrifice differentiation.</p>

<div class="section-label">DECISION 4: HOW MUCH TO INVEST?</div>
<ul class="bullets">
  <li><strong>Scale of adoption:</strong> pilot in one facility vs. full rollout across all operations.</li>
  <li><strong>Phased vs. big-bang:</strong> phased adoption generates learning and reduces risk but delays the full benefit; big-bang captures benefits faster but concentrates risk.</li>
  <li><strong>Learning curve dynamics:</strong> deeper investment accelerates accumulation of experience, which moves you further down the learning curve sooner — a self-reinforcing advantage.</li>
</ul>

<div class="section-label">DECISION 5: HOW TO IMPLEMENT?</div>
<ul class="bullets">
  <li><strong>Build internally:</strong> maximum control and proprietary learning; highest cost and time.</li>
  <li><strong>License:</strong> faster access, lower upfront cost; limited differentiation since competitors can license too.</li>
  <li><strong>Acquire a firm:</strong> buys capabilities and talent quickly; integration risk and premium acquisition cost.</li>
  <li><strong>Joint venture / partnership:</strong> shares cost and risk; requires governance and may limit learning capture.</li>
</ul>

<div class="section-label">CONNECTION TO INNOVATION TYPES</div>
<p class="prose">These five decisions interact with the innovation type chosen. A radical innovation decision (reengineering or leapfrog technology adoption) typically involves higher investment (Decision 4) and a build-or-acquire route (Decision 5), and carries more timing risk (Decision 2). Continuous improvement decisions involve smaller increments across all five dimensions.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The "how to implement" decision is the most underrated of the five. Two firms can choose the same technology at the same time and invest the same amount — and end up with completely different results because one built proprietary internal capability while the other licensed a commodity solution. The learning that comes from building is itself a source of advantage.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Technology in OS</span>
  <span class="link-tag">Related: Innovation Types</span>
  <span class="link-tag">Related: Learning Curve</span>
  <span class="link-tag">Related: Concurrent Engineering</span>
  <span class="link-tag">Related: Capacity Timing (Class 3)</span>
</div>
`
    },
    {
      id: 'innovation-types',
      title: 'Innovation Types — Continuous vs. Radical',
      body: `
<p class="prose">Operations strategy must decide not just what capabilities to build, but how to build them: through steady, incremental improvement or through bold, discontinuous change. The choice between continuous and radical improvement is strategic — it depends on the gap to close, the risk tolerance, and whether the current process is worth improving at all.</p>

<div class="section-label">CONTINUOUS IMPROVEMENT (INCREMENTAL)</div>
<p class="prose">Continuous improvement is the systematic, ongoing effort to make small, frequent enhancements to existing processes. It is best applied when the current process is fundamentally sound but can be made more efficient, more consistent, or less wasteful.</p>

<ul class="bullets">
  <li><strong>Kaizen:</strong> Japanese for "change for good." Small daily improvements by all employees, bottom-up. The key principle: every worker is both operator and improver. Managers are coaches, not commanders. Compatible with learning-by-doing — improvement accumulates through repeated cycles.</li>
  <li><strong>Lean (Toyota Production System):</strong> Systematically eliminates the 7 types of waste (muda):
    <ol style="margin-top:6px;padding-left:20px;">
      <li>Overproduction — making more than needed now</li>
      <li>Waiting — idle time between process steps</li>
      <li>Transport — unnecessary movement of materials</li>
      <li>Over-processing — more work than required by the customer</li>
      <li>Inventory — excess stock masking underlying problems</li>
      <li>Motion — unnecessary movement by workers</li>
      <li>Defects — rework, scrap, correction</li>
    </ol>
  </li>
  <li><strong>Six Sigma:</strong> Targets fewer than 3.4 defects per million opportunities. Uses the DMAIC methodology: Define, Measure, Analyse, Improve, Control. Reduces process variability through statistical tools and disciplined problem-solving.</li>
  <li><strong>Best for:</strong> mature processes with known problems, stable demand, and where variance reduction or waste elimination will unlock meaningful cost or quality gains.</li>
</ul>

<div class="section-label">RADICAL IMPROVEMENT (DISCONTINUOUS)</div>
<p class="prose">Radical improvement makes large, step-change leaps rather than incremental progress. It is high-risk but can reposition the firm dramatically on the efficient frontier. Two main approaches:</p>

<ul class="bullets">
  <li><strong>Business process reengineering (BPR):</strong> Design from a blank slate. The question is: "If we were starting today, with current technology and what we know now, what would this process look like?" Deliberately ignores the constraints of the existing system. High risk because the new process is unproven — requires stage-gate process (feasibility study → prototype → pilot → full scale) to manage risk.</li>
  <li><strong>Copy best practice:</strong> Identify the world's best implementation of this process and copy it as completely as possible. Key discipline: do not adapt or improve until you have reached the baseline performance of the template. Neither people nor documents can fully explain why a complex system works — copy the whole system, not your interpretation of it.</li>
  <li><strong>Best for:</strong> fundamentally broken processes where incremental improvement is too slow; catching up requires leapfrogging competitors; or when a technology discontinuity has made the existing process obsolete.</li>
</ul>

<div class="section-label">STRATEGIC CHOICE</div>
<p class="prose">The efficient frontier framing from Class 2 clarifies this: continuous improvement = steady outward movement along the frontier through many small steps; radical improvement = a large jump that repositions the firm dramatically. The risk profiles differ completely. Continuous improvement is low-risk with predictable returns. Radical improvement carries execution risk but can deliver step-change advantage.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>Lean and Six Sigma assume the current process is worth improving. Reengineering assumes it is not. The diagnostic question is: "Is this process fundamentally sound but imperfect, or fundamentally wrong?" Applying continuous improvement to a broken process produces local optima. Applying radical redesign to a sound process destroys existing embedded knowledge. Diagnosis before prescription.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Learning Types</span>
  <span class="link-tag">Related: Learning Curve</span>
  <span class="link-tag">Related: Technology in OS</span>
  <span class="link-tag">Related: Trade-offs & Efficient Frontier (Class 2)</span>
</div>
`
    },
    {
      id: 'learning-types',
      title: 'Learning Types',
      body: `
<p class="prose">Not all learning is the same. Operations strategy distinguishes two dimensions of learning — conceptual vs. operational, and before-doing vs. by-doing — because each has different organisational requirements, different strategic implications, and different relationships to the learning curve.</p>

<div class="section-label">CONCEPTUAL LEARNING (WHY)</div>
<p class="prose">Conceptual learning is understanding the underlying principles and root causes of how a process or system works. It enables generalisation: once you understand why something works, you can transfer that understanding to new contexts, troubleshoot novel failures, and design better systems from the ground up. This is the learning that powers innovation — you cannot reengineer a process you do not understand at the principle level.</p>

<div class="section-label">OPERATIONAL LEARNING (HOW)</div>
<p class="prose">Operational learning is skill-building through practice — developing the speed, reliability, and dexterity to execute a specific process. It is process-specific: an expert assembler at one plant may not transfer their expertise to a different assembly process. This is the learning that powers the learning curve — as workers and teams accumulate production volume, their operational knowledge deepens and unit costs fall.</p>

<div class="section-label">BEFORE-DOING LEARNING</div>
<ul class="bullets">
  <li>Includes R&D, pilot studies, simulations, training programmes, and lab experiments conducted before full-scale production begins.</li>
  <li>Reduces early-stage errors and failures — you arrive at production with more knowledge.</li>
  <li>Delays the start of production (transfer time from lab to full scale) — there is a cost to investing too heavily here if speed matters.</li>
  <li>The three factors governing the optimal transfer point: depth of process knowledge, fidelity of lab experiments (how well they simulate production conditions), and the relative cost of lab vs. production trials.</li>
</ul>

<div class="section-label">BY-DOING LEARNING (LEARNING-BY-DOING)</div>
<ul class="bullets">
  <li>Accumulates through actual production — workers learn each time they process a unit, teams develop routines, and the organisation discovers and eliminates failure modes over time.</li>
  <li>This is the mechanism that generates the learning curve: cumulative volume is the accumulator of by-doing learning.</li>
  <li>Cannot be fully substituted by before-doing learning — some knowledge only emerges from the production environment itself.</li>
</ul>

<div class="section-label">THE INTERPLAY</div>
<p class="prose">Before-doing learning makes by-doing learning faster. A team that enters production with deeper conceptual knowledge (why processes fail, what variables matter) can identify and resolve problems more rapidly, compressing the learning curve. The two modes are complements, not substitutes.</p>

<div class="section-label">MODERNA: AI FACTORY AS LEARNING MACHINE</div>
<p class="prose">Moderna is the definitive course example of learning-type integration. The mRNA platform represents deep conceptual learning — understanding the principles of messenger RNA, lipid nanoparticles, and immune response well enough to generalise across any new antigen. This conceptual foundation accelerated operational learning: when the SARS-CoV-2 genome was posted on January 11, 2020, Moderna's team finalised the vaccine design in 48 hours and shipped a clinical batch in 42 days. The before-doing learning embedded in the platform collapsed the by-doing learning curve for each new application.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The distinction between conceptual and operational learning explains why technology platforms create compounding advantages. A platform encodes conceptual learning once (the "why" of how mRNA works), then every new product on the platform benefits — the operational learning for each new drug starts from a much higher baseline. This is Moderna's deepest competitive moat.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Learning Curve</span>
  <span class="link-tag">Related: Innovation Types</span>
  <span class="link-tag">Related: Concurrent Engineering</span>
  <span class="link-tag">Related: Moderna (Case)</span>
</div>
`
    },
    {
      id: 'learning-curve',
      title: 'The Learning Curve',
      body: `
<p class="prose">The learning curve is the most analytically powerful tool in Class 7. It translates the intuition that "practice makes perfect" into a quantitative relationship between cumulative production volume and unit cost — a relationship that has proven remarkably consistent across industries from semiconductors to aircraft to pharmaceuticals.</p>

<div class="section-label">THE FORMULA</div>
<div class="formula-wrap">
  <div class="formula">C(Q) = C₁ × Q<sup>−β</sup></div>
  <div class="formula-explain">
    <strong>C(Q)</strong> = cost of the Q-th unit produced<br>
    <strong>C₁</strong> = cost of the very first unit<br>
    <strong>Q</strong> = cumulative production volume<br>
    <strong>β</strong> = learning exponent (positive; larger β = faster learning)<br><br>
    <strong>Learning rate formula:</strong> LR = 1 − 2<sup>−β</sup><br>
    This is the percentage cost reduction each time cumulative volume doubles.<br><br>
    <strong>Intuition:</strong> Every time cumulative volume doubles, cost falls by a fixed percentage. A 90% learning curve (LR = 10%) means each doubling reduces cost to 90% of what it was — β ≈ 0.152. An 80% learning curve (LR = 20%) — β ≈ 0.322 — represents faster learning. Cost asymptotically approaches a minimum floor but never reaches zero.<br><br>
    <strong>Log-linear form:</strong> log C(Q) = log C₁ − β × log Q — this is why the learning curve appears as a straight line on a log-log plot.
  </div>
</div>

<div class="section-label">WORKED EXAMPLE</div>
<p class="prose">Assume C₁ = $100 and β = 0.322 (an 80% learning curve, LR = 20%):</p>
<ul class="bullets">
  <li><strong>Q = 1:</strong> C(1) = $100 × 1<sup>−0.322</sup> = <strong>$100.00</strong></li>
  <li><strong>Q = 2:</strong> C(2) = $100 × 2<sup>−0.322</sup> = $100 × 0.80 = <strong>$80.00</strong></li>
  <li><strong>Q = 4:</strong> C(4) = $100 × 4<sup>−0.322</sup> = $100 × 0.64 = <strong>$64.00</strong></li>
  <li><strong>Q = 8:</strong> C(8) = $100 × 8<sup>−0.322</sup> = $100 × 0.512 = <strong>$51.20</strong></li>
  <li>Each doubling of cumulative volume → cost × 0.80. After three doublings (1→8 units), cost has fallen from $100 to $51.20 — a 49% reduction purely from learning.</li>
</ul>

<div class="section-label">EMPIRICAL BASIS: MOORE'S LAW</div>
<p class="prose">Moore's Law is an empirical learning curve, not a law of physics. Between 1960 and 1977, transistor usage doubled 11 times in 17 years, producing a 28% cost reduction per doubling (β ≈ 3/7 ≈ 0.429). The log-log plot of semiconductor cost per bit vs. cumulative bits produced is one of the most striking empirical confirmations of the learning curve model.</p>

<div class="section-label">STRATEGIC IMPLICATIONS</div>
<ul class="bullets">
  <li><strong>First-mover cost advantage:</strong> An earlier market entrant accumulates more experience before competitors arrive. If the learning curve is steep, a 2× volume advantage can translate to a 20–30% cost advantage — which can be passed on as lower prices (capturing share) or retained as margin.</li>
  <li><strong>Volume commitment creates self-fulfilling cycles:</strong> Committing to high volume drives costs down the learning curve → lower costs enable lower prices → lower prices win more volume → more volume drives further learning. This is the strategic logic behind aggressive early pricing in technology markets.</li>
  <li><strong>Scale vs. learning — they compound:</strong> Economies of scale (larger facility → lower unit fixed cost) and learning (more experience → lower unit variable cost) both reduce unit cost, and they reinforce each other. A firm with both advantages has a structurally lower cost position than one with only scale or only learning.</li>
  <li><strong>Learning is not automatic:</strong> The curve predicts what is possible if the organisation actively works to improve. It requires deliberate effort, problem-solving culture, and investment in root cause analysis. Volume alone is not sufficient.</li>
</ul>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The learning curve is ultimately an argument for commitment. Half-measures — low-volume pilots that never scale, cautious rollouts that cede volume to competitors — are strategically costly because they delay accumulation of experience. If you believe the learning curve is steep in your industry, the optimal strategy is to commit to volume early and aggressively, accepting short-term margin sacrifice for long-term cost leadership. This is why Intel priced semiconductors aggressively and why Moderna invested $125M in the Norwood facility before it had a single approved product.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Learning Types</span>
  <span class="link-tag">Related: Innovation Types</span>
  <span class="link-tag">Related: Economies of Scale (Class 3)</span>
  <span class="link-tag">Related: Moderna (Case)</span>
</div>
`
    },
    {
      id: 'concurrent-engineering',
      title: 'Concurrent Engineering & Design for Manufacturability (DFM)',
      body: `
<p class="prose">Concurrent engineering addresses one of the most expensive problems in product development: the late discovery of manufacturing problems. When product design and process design are developed sequentially, the organisation repeatedly discovers — only after committing to a design — that the product is difficult or expensive to make. Concurrent engineering attacks this at the source.</p>

<div class="section-label">SEQUENTIAL ENGINEERING (THE PROBLEM)</div>
<ul class="bullets">
  <li><strong>Stage 1 — Product design:</strong> R&D and design engineers develop the product specification with minimal input from manufacturing.</li>
  <li><strong>Stage 2 — Manufacturing design:</strong> Process engineers receive the product specification and design the production process around it.</li>
  <li><strong>Stage 3 — Production:</strong> Manufacturing begins.</li>
  <li><strong>The problem:</strong> Design changes discovered late in the cycle are exponentially more expensive to fix than those discovered early. A change in Stage 3 costs 100–1000× more than the same change made in Stage 1. This is the "cost of change" curve — it rises steeply with time. Sequential engineering maximises late discovery.</li>
</ul>

<div class="section-label">CONCURRENT ENGINEERING (THE SOLUTION)</div>
<p class="prose">Concurrent (simultaneous) engineering runs product design and process design in parallel, with continuous cross-functional communication between the two teams throughout development. Problems are surfaced and resolved while changes are still cheap. Manufacturing engineering informs what is feasible to produce; product design informs what processes need to support.</p>

<div class="section-label">DESIGN FOR MANUFACTURABILITY (DFM) PRINCIPLES</div>
<ul class="bullets">
  <li><strong>Minimise part count:</strong> Fewer parts mean fewer assembly steps, fewer failure points, and lower inventory. The best part is the one you eliminate.</li>
  <li><strong>Use standard components:</strong> Standard parts (off-the-shelf fasteners, common connectors) reduce procurement costs, simplify inventory, and leverage existing supplier relationships.</li>
  <li><strong>Design for easy assembly:</strong> Snap fits, self-locating features, and parts that can only be assembled one way reduce assembly time and eliminate errors without requiring high-skill labour.</li>
  <li><strong>Avoid unnecessarily tight tolerances:</strong> Tighter tolerances exponentially increase manufacturing cost. Specify the tolerance the function actually requires, not a tighter one "to be safe."</li>
  <li><strong>Design with the manufacturing process in mind:</strong> If the intended process is injection moulding, design for uniform wall thickness and appropriate draft angles. If it is CNC machining, minimise fixturing changes. Process constraints should be inputs to design, not constraints discovered after the fact.</li>
</ul>

<div class="section-label">STRATEGIC IMPACT</div>
<ul class="bullets">
  <li>Concurrent engineering + DFM can reduce time-to-market by 30–50% and cut manufacturing cost by 20–40%.</li>
  <li>These are compounding advantages: faster time-to-market means earlier revenue and more time to accumulate learning-by-doing before competitors arrive; lower manufacturing cost means more competitive pricing or better margin.</li>
</ul>

<div class="section-label">TOYOTA CCC21 CONNECTION</div>
<p class="prose">Toyota's CCC21 programme (Construction of Cost Competitiveness for the 21st Century) is concurrent engineering applied to the supply chain. Toyota worked directly with suppliers to redesign 170 parts simultaneously — integrating supplier process knowledge into Toyota's product design and vice versa. This is the same principle as concurrent engineering (product and process teams working together) but extended across organisational boundaries to include supply chain partners. The result was a 30% reduction in parts costs.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>DFM is not just a manufacturing efficiency tool — it is a strategic decision about where to embed knowledge. When manufacturing engineers are involved in design, process constraints become design inputs rather than post-hoc problems. The firm that systematically applies DFM accumulates a library of design-for-production knowledge that competitors cannot easily replicate, because the knowledge is embedded in practices, not in documents.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: Technology in OS</span>
  <span class="link-tag">Related: Product Design for Flexibility (Class 4)</span>
  <span class="link-tag">Related: Toyota CCC21 (Class 6)</span>
  <span class="link-tag">Related: Learning Types</span>
</div>
`
    },
    {
      id: 'product-process-lifecycle',
      title: 'Product-Process Lifecycle',
      body: `
<p class="prose">The product-process lifecycle is one of the course's core integrating frameworks. It establishes that the "right" process type is not fixed — it depends on where the product is in its lifecycle. A process that is optimal for a new, evolving product is poorly suited to a mature, standardised one, and vice versa.</p>

<div class="section-label">CORE INSIGHT</div>
<p class="prose">As a product matures, the optimal process type shifts from flexible and job-shop-like to efficient and repetitive. Failing to make this shift as the product matures means competing on efficiency with a flexibility-oriented process — a structural cost disadvantage. Making the shift too early means competing on flexibility with a rigidity-oriented process — a responsiveness disadvantage.</p>

<div class="section-label">LIFECYCLE STAGES</div>
<ul class="bullets">
  <li><strong>Stage 1 — Introduction:</strong> Product is new, volumes are low, features and specifications are still evolving. Process needed: flexible job shop capable of handling variety and rapid design changes. Cost matters less than responsiveness and the ability to accommodate design iterations without expensive retooling. Manufacturing engineers must be closely involved with design (concurrent engineering is essential here).</li>
  <li><strong>Stage 2 — Growth:</strong> Product design begins to stabilise. Volumes grow. Competition emerges as imitators enter. Optimal process: shift toward batch processing. Begin investing in dedicated capacity for the core product features that have stabilised, while retaining flexibility for features still evolving. Volume accumulation begins generating meaningful learning curve effects.</li>
  <li><strong>Stage 3 — Maturity:</strong> Product is standardised. Competition is intense. Margin compression is the norm. Optimal process: repetitive assembly line or continuous flow. Efficiency and cost are the primary competitive weapons. Investment in automation and process optimisation is highest here. The learning curve, if leveraged aggressively, is a major source of cost advantage.</li>
  <li><strong>Stage 4 — Decline:</strong> Volumes fall. Product may be approaching commodity status. Options: exit the market, find a niche where the product still commands premium pricing, or extreme specialisation for residual customers. New investment in process technology is generally not justified.</li>
</ul>

<div class="section-label">CONNECTION TO THE PRODUCT-PROCESS MATRIX (PPM)</div>
<p class="prose">The PPM from Class 1 maps process types against product variety and volume. The product lifecycle traces a path along the PPM diagonal: at Introduction, the product sits in the top-right region (high variety, low volume → job shop); as it matures through Growth and Maturity, it moves toward the bottom-left (low variety, high volume → repetitive line). A firm that fails to move its process along this diagonal as the product matures falls off the diagonal — which Class 1 identified as a structural alignment failure.</p>

<div class="section-label">TECHNOLOGY INVESTMENT TIMING IMPLICATION</div>
<p class="prose">The lifecycle model has a critical timing implication: invest in the appropriate process technology before you need it, not after you need it. Technology investments take time to implement, debug, and learn. A firm that waits until it is in Stage 3 competition (mature, high-volume, margin-compressed) to begin investing in repetitive-line automation is already late — competitors who anticipated the shift and invested in Stage 2 have months or years of learning-curve advantage.</p>

<div class="section-label">DEDICATED VS. FLEXIBLE CAPACITY LINK</div>
<p class="prose">The lifecycle model connects directly to the Class 4 dedicated vs. flexible capacity decision. In early stages, flexible capacity is appropriate because demand uncertainty is high and specifications are evolving. As the product matures and stabilises, dedicated capacity becomes more attractive because the efficiency gains outweigh the loss of flexibility. The Class 4 framework (four sources of flexibility value) provides the analytical tools to determine exactly when this crossover point occurs.</p>

<div class="insight-box">
  <div class="label">KEY INSIGHT</div>
  <p>The most dangerous position in the product-process lifecycle is being in Stage 3 (mature product, intense competition) with a Stage 1 or Stage 2 process. This is the "misalignment trap": your competitor has already moved to repetitive-line efficiency while you are still running batch processes designed for flexibility you no longer need. The lifecycle framework exists to help managers anticipate and stay ahead of this trap — not diagnose it after the fact.</p>
</div>

<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;">
  <span class="link-tag">Related: PPM (Class 1)</span>
  <span class="link-tag">Related: Process Technology Decisions</span>
  <span class="link-tag">Related: Dedicated vs. Flexible Capacity (Class 4)</span>
  <span class="link-tag">Related: Learning Curve</span>
</div>
`
    }
  ]
};

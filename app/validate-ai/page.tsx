const workflow = [
  ["01", "Frame the idea", "Capture the problem, audience, assumptions, and the decision the founder needs to make."],
  ["02", "Add evidence", "Ask for the information the AI needs instead of pretending it already has enough context."],
  ["03", "Run analysis", "Show progress across market, competitor, audience, pain point, and feasibility signals."],
  ["04", "Review confidence", "Separate evidence from inference and explain why a result is strong, weak, or incomplete."],
  ["05", "Choose a next step", "Turn the result into specific actions the founder can accept, correct, or investigate further."],
];

const researchFindings = [
  ["Evidence is scattered", "Founders move between search, trend, competitor, and planning tools before they can form one view."],
  ["A score alone is not enough", "People need to understand what influenced a verdict before they can trust it."],
  ["Confidence depends on context", "The quality of an AI recommendation rises or falls with the completeness of the founder's inputs."],
  ["Results must lead somewhere", "A useful validation report should make the next product decision clearer, not simply generate more reading."],
];

const trustPrinciples = [
  ["Show the work", "Name the analysis in progress and reveal the signals behind the result."],
  ["Ask, do not assume", "Make missing information visible and explain why the AI needs it."],
  ["Keep correction close", "Let founders edit inputs, challenge assumptions, and rerun an analysis without losing context."],
  ["Turn insight into action", "Pair confidence with practical next steps, evidence gaps, and decisions to make."],
];

const systemStates = [
  ["Empty", "Start with one idea", "A focused prompt and example reduce blank page anxiety."],
  ["Loading", "Analyzing five signal groups", "Progress labels explain what the AI is doing instead of showing an indefinite spinner."],
  ["Needs input", "Two evidence gaps", "The interface asks for missing audience and competitor context before raising confidence."],
  ["Low confidence", "Result is directional", "A caution state separates weak evidence from a negative verdict."],
  ["Error", "Analysis paused", "The user's draft stays safe and the retry action explains what will happen next."],
  ["Complete", "Ready to decide", "The result ends with an evidence summary and prioritised actions."],
];

export default function ValidateAiCaseStudy() {
  return (
    <main className="validateCase">
      <nav className="nav shell validateNav" aria-label="Validate AI case study navigation">
        <a className="monogram" href="/" aria-label="Return to Deborah's portfolio">Deborah.</a>
        <div className="navLinks caseNavLinks">
          <a href="#problem">Problem</a>
          <a href="#trust">Trust</a>
          <a href="#system">System</a>
          <a href="#outcome">Outcome</a>
        </div>
        <div className="navActions">
          <input className="themeToggle" type="checkbox" id="validateThemeToggle" aria-label="Use dark theme" />
          <label className="themeSwitch" htmlFor="validateThemeToggle" title="Switch black and white theme">
            <span className="sun">☼</span><span className="switchKnob" /><span className="moon">◐</span>
          </label>
          <a className="button small" href="/">All work</a>
        </div>
      </nav>

      <header className="validateHero shell" id="top">
        <p className="caseKicker">Validate AI · B2B AI product design</p>
        <h1>Helping founders make decisions with AI they can <em>question.</em></h1>
        <div className="validateHeroIntro">
          <p>Validate AI brings market research, competitor analysis, audience thinking, and idea validation into one workspace. My focus was not only generating a verdict. It was making the path to that verdict visible, correctable, and useful.</p>
          <dl className="validateFacts">
            <div><dt>Role</dt><dd>Product Designer</dd></div>
            <div><dt>Ownership</dt><dd>Research, UX, UI, system design</dd></div>
            <div><dt>Audience</dt><dd>Early stage founders and product teams</dd></div>
          </dl>
        </div>
        <div className="validateHeroBoard">
          <img src="/deploy-assets/validate-ai-hero.webp" alt="Validate AI product mockup and case study introduction" />
          <span>Original project artwork from Behance</span>
        </div>
      </header>

      <section className="validateSection shell" id="problem">
        <div className="validateSectionIndex">01 / Original problem</div>
        <div className="validateLead">
          <h2>Founders were making expensive decisions with incomplete evidence.</h2>
          <p>The existing project statement identified a common early stage problem: assumptions are often treated as proof. Research is spread across multiple tools, competitor checks are inconsistent, and a confident looking AI answer can hide how little context supports it.</p>
        </div>
        <div className="validateProblemGrid">
          <article><span>Problem</span><h3>Fragmented validation</h3><p>Research, audience thinking, competitor evidence, and planning lived in separate workflows.</p></article>
          <article><span>Design challenge</span><h3>Confidence without false certainty</h3><p>The product needed to communicate uncertainty without making the AI feel vague or unhelpful.</p></article>
          <article><span>My ownership</span><h3>From evidence to interface</h3><p>I connected the research model, product flow, information hierarchy, screen system, and interaction states.</p></article>
        </div>
      </section>

      <section className="validateSection validateDark">
        <div className="shell">
          <div className="validateSectionIndex">02 / Complete workflow</div>
          <div className="validateLead">
            <h2>One continuous path from assumption to action.</h2>
            <p>The workflow gives every AI step a visible purpose. Founders can see what is happening, what information is missing, and what decision the output is meant to support.</p>
          </div>
          <div className="validateWorkflow">
            {workflow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="validateSection shell">
        <div className="validateSectionIndex">03 / Research evidence</div>
        <div className="validateLead">
          <h2>Research changed the product from a verdict generator into a decision workspace.</h2>
          <p>The original case study documents qualitative founder interviews, interview questions, competitor review, personas, an empathy map, and a task flow. I translated the recurring needs into four design requirements.</p>
        </div>
        <div className="validateResearchGrid">
          {researchFindings.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <aside className="validateEvidenceNote"><b>Evidence boundary</b><p>The source material supports the research themes and final screens shown here. No launch metric or usability percentage is claimed without recorded data.</p></aside>
      </section>

      <section className="validateSection validateExplore">
        <div className="shell">
          <div className="validateSectionIndex">04 / Early explorations</div>
          <div className="validateLead">
            <h2>The options I moved away from were the ones that removed user control.</h2>
            <p>Recording rejected directions makes the reasoning visible. Each decision reduced ambiguity while preserving the founder's ability to inspect and correct the system.</p>
          </div>
          <div className="validateOptions">
            <article className="rejected"><span>Rejected</span><h3>One shot AI verdict</h3><p>A single pass felt fast but concealed missing evidence and made the result look more certain than it was.</p><b>Why it failed</b><small>No reasoning, no correction path, no visible evidence quality.</small></article>
            <article className="rejected"><span>Rejected</span><h3>Fully automated next step</h3><p>Automatically choosing a direction reduced effort but removed the founder from an important business decision.</p><b>Why it failed</b><small>Low agency and no room to challenge assumptions.</small></article>
            <article className="selected"><span>Selected</span><h3>Progressive analysis</h3><p>Break the verdict into visible stages, surface evidence gaps, and end with actions the founder can review.</p><b>Why it worked</b><small>Clear status, correction, confidence, and decision support.</small></article>
          </div>
        </div>
      </section>

      <section className="validateSection shell validateTrust" id="trust">
        <div className="validateSectionIndex">05 / Designing trust between users and AI</div>
        <div className="validateLead">
          <h2>Trust is not a friendly robot icon. It is a sequence of understandable choices.</h2>
          <p>The interface communicates what the AI is doing, what it needs, when the founder can correct it, and how the result becomes an actionable decision.</p>
        </div>
        <div className="trustModel">
          <div className="trustPrompt"><span>AI analysis</span><strong>Validating the evidence behind your idea</strong><div className="trustProgress"><i /><i /><i /><i /></div><small>Market signals complete · competitor context in progress</small></div>
          <div className="trustConnector">→</div>
          <div className="trustPrompt needs"><span>Needs your input</span><strong>Who is the first customer you can reach?</strong><p>This answer improves the audience confidence score.</p><button type="button">Add context</button></div>
          <div className="trustConnector">→</div>
          <div className="trustPrompt result"><span>Result</span><strong>Directional opportunity</strong><b>82</b><small>Confidence is limited by two evidence gaps.</small><button type="button">Review next actions</button></div>
        </div>
        <div className="trustPrinciples">
          {trustPrinciples.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="validateSection validateStates" id="system">
        <div className="shell">
          <div className="validateSectionIndex">06 / Edge cases and system states</div>
          <div className="validateLead">
            <h2>The experience also works when the AI has no answer yet.</h2>
            <p>Empty, loading, incomplete, low confidence, error, and complete states use the same structure so the interface remains predictable under uncertainty.</p>
          </div>
          <div className="stateGrid">
            {systemStates.map(([state, title, copy]) => <article key={state}><span className={`stateDot state${state.replace(" ", "")}`} /> <small>{state}</small><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="validateSection shell validateSystem">
        <div className="validateSectionIndex">07 / Variables, tokens and reusable components</div>
        <div className="validateLead">
          <h2>A system for consistent confidence, not just consistent colour.</h2>
          <p>Tokens connect visual language to product meaning. Component variants cover default, hover, loading, caution, error, success, and disabled behaviour for handoff.</p>
        </div>
        <div className="systemBoard">
          <article className="tokenPanel"><span>Foundation tokens</span><h3>Colour and spacing</h3><div className="tokenSwatches"><i className="blue" /><i className="ink" /><i className="green" /><i className="amber" /><i className="red" /><i className="mist" /></div><dl><div><dt>space.2</dt><dd>8 px</dd></div><div><dt>space.4</dt><dd>16 px</dd></div><div><dt>space.6</dt><dd>24 px</dd></div><div><dt>radius.card</dt><dd>16 px</dd></div></dl></article>
          <article className="componentPanel"><span>Component</span><h3>Confidence card</h3><div className="confidenceVariants"><div><small>Directional</small><b>48</b><i /></div><div className="caution"><small>Needs evidence</small><b>62</b><i /></div><div className="positive"><small>Evidence aligned</small><b>82</b><i /></div></div></article>
          <article className="interactionPanel"><span>Interaction variants</span><h3>Action states</h3><button type="button">Run analysis</button><button type="button" className="secondary">Review evidence</button><button type="button" disabled>Analyzing…</button><div className="miniSkeleton"><i /><i /><i /></div></article>
        </div>
      </section>

      <section className="validateSection shell validateHandoff">
        <div className="validateSectionIndex">08 / Engineering collaboration</div>
        <div className="validateLead">
          <h2>Handoff describes behaviour, not only dimensions.</h2>
          <p>The design system gives engineering a shared language for data states, component variants, breakpoints, and AI responses. The handoff model keeps implementation questions tied to the user's decision.</p>
        </div>
        <div className="handoffSteps"><article><span>01</span><h3>Align</h3><p>Review feasibility, data availability, and the confidence model before high fidelity work.</p></article><article><span>02</span><h3>Specify</h3><p>Document component anatomy, responsive rules, content limits, and every system state.</p></article><article><span>03</span><h3>Review</h3><p>Compare builds against behaviour and accessibility criteria, then resolve exceptions in the system.</p></article></div>
      </section>

      <section className="validateSection validateFinalDesign">
        <div className="shell">
          <div className="validateSectionIndex">09 / Final interface design</div>
          <div className="validateLead">
            <h2>The real product design, shown in context.</h2>
            <p>The final workspace uses a focused blue accent, generous white space, and a clear dashboard hierarchy. Each view helps founders move from an idea to evidence, analysis, pain points, and a report they can act on.</p>
          </div>
          <div className="validateDesignGallery">
            <figure className="validateDesignWide"><img src="/deploy-assets/validate-ai-screen-home.webp" alt="Original Validate AI Figma home page with product explanation, features, pricing and founder story" /><figcaption><span>01</span><p>Original Figma home page design</p></figcaption></figure>
            <figure className="validateDesignWide"><img src="/deploy-assets/validate-ai-screen-dashboard.webp" alt="Validate AI dashboard with live analysis progress, opportunity signals and idea scores" /><figcaption><span>02</span><p>Dashboard overview and live analysis engine</p></figcaption></figure>
            <figure className="validateDesignWide"><img src="/deploy-assets/validate-ai-screen-my-ideas.webp" alt="Validate AI My Ideas screen with validation scores and an idea report panel" /><figcaption><span>03</span><p>My Ideas and detailed validation report</p></figcaption></figure>
            <figure className="validateDesignWide"><img src="/deploy-assets/validate-ai-screen-analysis.webp" alt="Validate AI analysis screen showing runs, progress, scores and result states" /><figcaption><span>04</span><p>Analysis runs, progress, and result states</p></figcaption></figure>
            <figure className="validateDesignWide"><img src="/deploy-assets/validate-ai-screen-pain-point.webp" alt="Validate AI pain point screen showing complaint evidence and frequency" /><figcaption><span>05</span><p>Pain point evidence and complaint patterns</p></figcaption></figure>
            <figure className="validateDesignWide"><img src="/deploy-assets/validate-ai-screen-reports.webp" alt="Validate AI reports screen with validation scores and downloadable summaries" /><figcaption><span>06</span><p>Reports, scores, downloads, and summaries</p></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="validateSection validateOutcome" id="outcome">
        <div className="shell">
          <div className="validateSectionIndex">10 / Result and validation</div>
          <div className="validateLead">
            <h2>The result is a decision workspace with an honest testing plan.</h2>
            <p>The designed experience unifies the founder journey across ideas, analysis, trends, competitors, pain points, reports, and settings. Because launch metrics were not supplied, the outcome is stated without invented conversion numbers.</p>
          </div>
          <div className="validationTasks"><article><span>Task 01</span><h3>Explain the verdict</h3><p>Can a founder describe why the AI reached this confidence level?</p></article><article><span>Task 02</span><h3>Correct the AI</h3><p>Can a founder find and update an assumption that changed the result?</p></article><article><span>Task 03</span><h3>Act on the result</h3><p>Can a founder choose the next evidence gathering action without guidance?</p></article><article><span>Measure</span><h3>Trust and task clarity</h3><p>Track comprehension, correction success, time to next action, and confidence before and after explanation.</p></article></div>
          <a className="validateFullBoard" href="https://www.behance.net/gallery/253270189/Validate-AI" target="_blank" rel="noreferrer"><span>View the complete project on Behance</span><b>↗</b><img src="/deploy-assets/validate-ai-case-study.webp" alt="Full Validate AI Behance project board" /></a>
        </div>
      </section>

      <section className="validateReflection shell">
        <span>Reflection</span>
        <blockquote>The hardest AI design problem was not producing an answer. It was helping someone understand, correct, and act on that answer.</blockquote>
        <p>Validate AI shows how I approach AI product design as a trust system: transparent status, evidence aware confidence, meaningful correction, reusable states, and a clear path from insight to action.</p>
        <a className="button" href="/">Back to selected work</a>
      </section>

      <footer className="caseFooter"><div className="shell"><span>Validate AI · Product design case study</span><a href="https://www.behance.net/gallery/253270189/Validate-AI" target="_blank" rel="noreferrer">View on Behance ↗</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

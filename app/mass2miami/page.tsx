const auditClusters = [
  { title: "Content", notes: ["Long opening paragraphs", "Key messages buried", "Hard to scan quickly"] },
  { title: "Services", notes: ["Programs need clearer groups", "Differences require reading", "No quick overview"] },
  { title: "Trust", notes: ["Experience is underplayed", "Impact proof is scattered", "Founder story appears late"] },
  { title: "Action", notes: ["Register lacks emphasis", "Contact path is not obvious", "No clear journey forward"] },
];

const audienceProfiles = [
  {
    role: "School administrator",
    goal: "Find relevant training and confirm it suits their staff.",
    need: "Clear programs, outcomes, and an easy next step.",
  },
  {
    role: "Nonprofit leader",
    goal: "Understand Mass2Miami's experience before discussing a partnership.",
    need: "Visible credibility, community impact, and tailored services.",
  },
  {
    role: "Entrepreneur",
    goal: "Find practical business coaching without decoding the whole website.",
    need: "Scannable service choices and simple registration information.",
  },
];

const journey = [
  ["Discover", "What is Mass2Miami?", "Unclear opening", "Lead with one value proposition"],
  ["Understand", "Is this relevant to me?", "Dense copy", "Use audience focused summaries"],
  ["Explore", "Which program fits?", "Services blend together", "Group programs into four paths"],
  ["Evaluate", "Can I trust them?", "Proof appears late", "Surface experience and leadership"],
  ["Act", "How do I begin?", "Actions compete", "Prioritise Register and Contact"],
];

const decisionMap = [
  ["Too much homepage copy", "Simplify the introduction", "Clear hero and supporting line"],
  ["Services are difficult to scan", "Group related offers", "Four distinct service rows"],
  ["Experience is buried", "Bring credibility forward", "Founder and 35-year story"],
  ["Next steps are unclear", "Create a simple progression", "Register → Learn → Grow"],
];

export default function Mass2MiamiCaseStudy() {
  return (
    <main className="caseStudy">
      <nav className="nav shell caseNav" aria-label="Case study navigation">
        <a className="monogram" href="/" aria-label="Return to Deborah's portfolio">Deborah.</a>
        <div className="navLinks caseNavLinks">
          <a href="#overview">Overview</a>
          <a href="#research">Research</a>
          <a href="#design">Design</a>
          <a href="#reflection">Reflection</a>
        </div>
        <div className="navActions">
          <input className="themeToggle" type="checkbox" id="caseThemeToggle" aria-label="Use dark theme" />
          <label className="themeSwitch" htmlFor="caseThemeToggle" title="Switch black and white theme">
            <span className="sun">☼</span><span className="switchKnob" /><span className="moon">◐</span>
          </label>
          <a className="button small" href="/">All work</a>
        </div>
      </nav>

      <header className="caseHero shell" id="top">
        <p className="caseKicker">Mass2Miami · Website redesign</p>
        <h1>Building stronger communities through <em>clearer communication.</em></h1>
        <div className="caseHeroIntro">
          <p>I redesigned Mass2Miami's website to make its leadership programs easier to understand, its experience easier to trust, and registration easier to find.</p>
          <div className="caseFacts">
            <span><b>Role</b>Product Designer</span>
            <span><b>Scope</b>Research · UX · UI</span>
            <span><b>Tools</b>Figma · Website audit</span>
            <span><b>Type</b>Independent redesign</span>
          </div>
        </div>
        <div className="browserFrame heroFrame">
          <div className="browserBar"><i /><i /><i /><span>mass2miami.com</span></div>
          <img src="/deploy-assets/mass2miami-design-home.webp" alt="Final Mass2Miami homepage design" />
        </div>
      </header>

      <section className="caseSection caseOverview shell" id="overview">
        <div className="caseSectionLabel">01 / Overview</div>
        <div className="caseLead">
          <h2>The organisation had a strong story. The website was not telling it clearly.</h2>
          <p>Mass2Miami supports schools, nonprofits, businesses, professionals, and communities through leadership development, education, entrepreneurship, and workforce training. The redesign focused on helping visitors understand that value before asking them to read more.</p>
        </div>
        <div className="overviewGrid">
          <article><span>Problem</span><h3>Strong services, weak communication.</h3><p>Important information was spread across long paragraphs, while services, credibility, and next steps lacked a clear hierarchy.</p></article>
          <article><span>Goal</span><h3>Make the value visible quickly.</h3><p>Create a simpler path from understanding the organisation to choosing a program, trusting its experience, and taking action.</p></article>
          <article><span>Approach</span><h3>Audit first. Design second.</h3><p>I reviewed the live website, its content, navigation, service structure, visual hierarchy, and likely visitor journeys before defining the new experience.</p></article>
        </div>
      </section>

      <section className="caseSection darkCase" id="research">
        <div className="shell">
          <div className="caseSectionLabel">02 / Research</div>
          <div className="caseLead splitLead">
            <h2>Was this only a visual problem or was the website difficult to understand?</h2>
            <p>The available evidence came from the existing website and its published content. I did not invent survey participants or interview results. Findings shown here are audit observations and design hypotheses that should be validated with real users.</p>
          </div>
          <div className="methodRow" aria-label="Research methods">
            <span>Website audit</span><span>Content review</span><span>Competitive review</span><span>Journey mapping</span>
          </div>
          <div className="browserFrame oldFrame">
            <div className="browserBar"><i /><i /><i /><span>Original Mass2Miami website</span></div>
            <img src="/deploy-assets/mass2miami-old-home.webp" alt="Original Mass2Miami homepage" />
            <div className="auditCallout calloutOne">Outdated first impression</div>
            <div className="auditCallout calloutTwo">No clear value proposition</div>
            <div className="auditCallout calloutThree">Primary actions are easy to miss</div>
          </div>
        </div>
      </section>

      <section className="caseSection shell synthesis">
        <div className="caseSectionLabel">03 / Audit synthesis</div>
        <div className="caseLead">
          <h2>Mass2Miami did not need more content. It needed better communication.</h2>
          <p>I grouped recurring observations into four themes. This helped separate surface level visual issues from the problems most likely to affect understanding and action.</p>
        </div>
        <div className="affinityBoard">
          {auditClusters.map((cluster, index) => (
            <article className={`cluster cluster${index + 1}`} key={cluster.title}>
              <h3>{cluster.title}</h3>
              {cluster.notes.map((note) => <span key={note}>{note}</span>)}
            </article>
          ))}
        </div>
        <div className="insightStatement"><span>Biggest insight</span><p>Visitors needed a faster way to answer three questions: What do they offer? Why should I trust them? What do I do next?</p></div>
      </section>

      <section className="caseSection audienceSection">
        <div className="shell">
          <div className="caseSectionLabel">04 / Understanding the audience</div>
          <div className="caseLead splitLead">
            <h2>Three audiences. One shared need for clarity.</h2>
            <p>These are proto personas based on Mass2Miami's stated audiences and services, not representations of interviewed participants. The hand drawn portraits make the audience visible while the content stays grounded in the audit.</p>
          </div>
          <figure className="audienceSketch"><img src="/deploy-assets/mass2miami-audience-sketches.webp" alt="Hand drawn portraits representing a school administrator, nonprofit leader, and entrepreneur" /><figcaption>Proto personas · require validation</figcaption></figure>
          <div className="audienceCards">
            {audienceProfiles.map((profile, index) => (
              <article key={profile.role}><span>0{index + 1}</span><h3>{profile.role}</h3><b>Trying to</b><p>{profile.goal}</p><b>Needs</b><p>{profile.need}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="caseSection shell journeySection">
        <div className="caseSectionLabel">05 / Journey hypothesis</div>
        <div className="caseLead"><h2>Where the original journey loses momentum.</h2><p>The journey map turns audit observations into testable assumptions about what an organisation decision maker may need at each stage.</p></div>
        <div className="journeyMap">
          <div className="journeyHeader"><span>Stage</span><span>Question</span><span>Friction</span><span>Opportunity</span></div>
          {journey.map(([stage, question, friction, opportunity], index) => (
            <div className="journeyRow" key={stage}><b><i>0{index + 1}</i>{stage}</b><span>{question}</span><span>{friction}</span><span>{opportunity}</span></div>
          ))}
        </div>
        <div className="emotionLine" aria-label="Estimated journey confidence falls during exploration and rises when taking action">
          <span>Confidence</span><div className="lineGraph"><i className="point p1" /><i className="point p2" /><i className="point p3" /><i className="point p4" /><i className="point p5" /><svg viewBox="0 0 1000 170" role="img" aria-label="Journey confidence line"><polyline points="20,55 260,82 500,132 740,110 980,48" fill="none" stroke="currentColor" strokeWidth="3" /></svg></div>
        </div>
      </section>

      <section className="caseSection darkCase priorities">
        <div className="shell">
          <div className="caseSectionLabel">06 / Prioritisation</div>
          <div className="caseLead splitLead"><h2>Focus on what helps people understand and act.</h2><p>Because there was no interview frequency data, I prioritised issues using two honest dimensions: likely user impact and business importance.</p></div>
          <div className="priorityMatrix">
            <span className="axisY">Business importance ↑</span><span className="axisX">User impact →</span>
            <div className="quadrant"><small>Improve</small><b>Founder visibility</b><b>Visual consistency</b></div>
            <div className="quadrant priority"><small>Prioritise</small><b>Clear value proposition</b><b>Service discovery</b><b>Register and contact</b></div>
            <div className="quadrant"><small>Later</small><b>Micro interactions</b><b>Decorative details</b></div>
            <div className="quadrant"><small>Support</small><b>Impact storytelling</b><b>Testimonials</b></div>
          </div>
          <div className="hmwGrid">
            <article><span>HMW 01 · Clarity</span><h3>How might we explain Mass2Miami without several paragraphs?</h3></article>
            <article><span>HMW 02 · Discovery</span><h3>How might we make different programs easier to scan?</h3></article>
            <article><span>HMW 03 · Trust</span><h3>How might we make existing experience more visible?</h3></article>
            <article><span>HMW 04 · Action</span><h3>How might we make Register and Contact natural next steps?</h3></article>
          </div>
        </div>
      </section>

      <section className="caseSection shell decisionSection" id="design">
        <div className="caseSectionLabel">07 / From research to design</div>
        <div className="caseLead"><h2>Every major interface decision answers an audit finding.</h2></div>
        <div className="decisionMap">
          <div className="decisionHead"><span>Finding</span><span>Decision</span><span>Result</span></div>
          {decisionMap.map(([finding, decision, result]) => <div className="decisionRow" key={finding}><span>{finding}</span><i>→</i><span>{decision}</span><i>→</i><b>{result}</b></div>)}
        </div>
      </section>

      <section className="caseSection comparisonSection">
        <div className="shell">
          <div className="caseSectionLabel">08 / Before and after</div>
          <div className="caseLead splitLead"><h2>From a dated introduction to a focused first impression.</h2><p>I replaced the image led opening and buried welcome copy with a clear value proposition, supporting message, and two visible actions.</p></div>
          <div className="comparisonGrid">
            <figure><figcaption><b>Before</b><span>Old homepage</span></figcaption><img src="/deploy-assets/mass2miami-old-home.webp" alt="Original Mass2Miami homepage" /></figure>
            <div className="comparisonArrow">→</div>
            <figure><figcaption><b>After</b><span>Final homepage design</span></figcaption><img src="/deploy-assets/mass2miami-design-home.webp" alt="Final Mass2Miami homepage design" /></figure>
          </div>
        </div>
      </section>

      <section className="caseSection shell designShowcase">
        <div className="caseSectionLabel">09 / Final experience</div>
        <div className="caseLead splitLead"><h2>Scan first. Explore second.</h2><p>Instead of explaining every program at once, the redesign creates clear entry points and a simple progression from discovery to registration.</p></div>
        <figure className="showcaseLarge"><img src="/deploy-assets/mass2miami-design-home.webp" alt="Full Mass2Miami homepage design" /><figcaption><span>01</span><b>Homepage</b><p>A clear value proposition, scannable services, simple next steps, and visible community leadership.</p></figcaption></figure>
        <div className="showcasePair">
          <figure><img src="/deploy-assets/mass2miami-design-about.webp" alt="Full Mass2Miami About page design" /><figcaption><span>02</span><b>About</b><p>The story, founder, approach, and guiding principles make the organisation feel human and credible.</p></figcaption></figure>
          <figure><img src="/deploy-assets/mass2miami-design-service.webp" alt="Full Mass2Miami Service page design" /><figcaption><span>03</span><b>Services</b><p>Programs are grouped around audience needs, with an Academy schedule that supports registration.</p></figcaption></figure>
        </div>
        <figure className="showcaseLarge showcaseSpaced"><img src="/deploy-assets/mass2miami-design-accomplishment.webp" alt="Full Mass2Miami Accomplishment page design" /><figcaption><span>04</span><b>Accomplishments</b><p>Impact metrics, achievements, and testimonials bring proof of experience into one focused story.</p></figcaption></figure>
        <figure className="showcaseLarge showcaseSpaced"><img src="/deploy-assets/mass2miami-design-contact.webp" alt="Full Mass2Miami Contact page design" /><figcaption><span>05</span><b>Contact</b><p>A direct contact experience makes collaboration feel like the natural final step.</p></figcaption></figure>
      </section>

      <section className="caseSection visualDirection">
        <div className="shell">
          <div className="caseSectionLabel">10 / Visual direction</div>
          <div className="typeSample"><span>Aa</span><div><p>Editorial confidence</p><h2>Building communities through leadership.</h2></div></div>
          <div className="visualGrid"><article><span className="swatch warm" /><b>Warm off white</b><p>A calm, approachable foundation.</p></article><article><span className="swatch black" /><b>Near black</b><p>Strong contrast and confident actions.</p></article><article><img src="/deploy-assets/mass2miami-hero.webp" alt="Community gathering used in the redesign" /><b>Human photography</b><p>People and participation carry the story.</p></article></div>
        </div>
      </section>

      <section className="caseSection reflectionSection shell" id="reflection">
        <div className="caseSectionLabel">11 / Reflection</div>
        <blockquote>I started this project thinking Mass2Miami needed a more modern website. The audit showed that the bigger problem was communication.</blockquote>
        <p>The organisation already had the services, experience, and purpose. My role was to make those strengths easier to see. A useful next step would be testing the prototype with school administrators, nonprofit leaders, entrepreneurs, and program participants before measuring changes in registration and consultation enquiries.</p>
        <a className="button" href="/">Back to selected work</a>
      </section>

      <footer className="caseFooter">
        <div className="shell"><span>Mass2Miami · UX/UI case study</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

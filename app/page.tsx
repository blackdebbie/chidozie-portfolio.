const experience = [
  {
    date: "Oct 2023 to Mar 2026",
    role: "B2B SaaS AI Product Designer",
    company: "Hypertek | NFE Web3 Marketplace (Remote)",
    copy: "Led UX research for the NFE marketplace, mapping user journeys for creators and collectors. Designed the end-to-end marketplace flow for buying, selling, and minting digital experiences. Built a scalable design system that improved development speed and visual consistency. Designed creator dashboards, admin tools, fee management panels, and analytics pages. Conducted usability tests and translated insights into clear design improvements.",
  },
  {
    date: "Oct 2025",
    role: "B2B SaaS AI Product Designer",
    company: "Privacy VPN | Marketing Website & Landing Page",
    copy: "Designed a modern, trust-driven landing page for a secure VPN service. Translated complex VPN and security concepts into simple, user-friendly content sections. Created a clean dark theme with green accents to visually communicate security and trust. Designed responsive layouts and interactive prototypes for usability validation across devices.",
  },
  {
    date: "Nov 2025",
    role: "Product Designer",
    company: "VOTEK | Solar Energy Platform",
    copy: "Led end-to-end design for a digital platform helping homeowners and businesses explore solar energy. Designed interactive savings calculators, real installation stories, and a guided step-by-step flow. Delivered core features including Instant Savings Calculator, Certified Installer Network, and Flexible Payment Plans. Built responsive, accessible interfaces with high-fidelity prototypes optimised for desktop and mobile.",
  },
];

const testimonials = [
  {
    name: "Don Bennett",
    quote: "Deb is one of those diamonds that you manage to find all too rarely, so count your blessings if she is available to work on your project. I cannot recommend Deb highly enough. Five plus stars! Deb did an amazing job, so good we had to hire her again!",
    detail: "Repeat product design client",
  },
  {
    name: "Emma",
    quote: "Reliable, creative, and highly skilled. She communicated clearly throughout the project and delivered exceptional results on time.",
    detail: "Design client",
  },
  {
    name: "Vivian",
    quote: "Working with Debbie was seamless. She understood my vision instantly and delivered a design that went beyond what I imagined.",
    detail: "Product design client",
  },
];

const socialLinks = [
  { icon: "https://cdn.simpleicons.org/behance/1769FF", label: "Behance", href: "https://www.behance.net/adachidozie" },
  { icon: "https://cdn.simpleicons.org/linkedin/0A66C2", label: "LinkedIn", href: "https://linkedin.com/in/deborah-chidozie-product-designer-a8039b189" },
  { icon: "https://cdn.simpleicons.org/upwork/14A800", label: "Upwork", href: "https://www.upwork.com/freelancers/~01ea83173bd60bd566?mp_source=share" },
  { icon: "https://cdn.simpleicons.org/tiktok/000000", label: "TikTok", href: "https://www.tiktok.com/@ui_debbie" },
  { icon: "https://cdn.simpleicons.org/instagram/E4405F", label: "Instagram", href: "https://www.instagram.com/ui_debbie/" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Deborah home">Deborah.</a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#clients">Clients</a>
        </div>
        <div className="navActions">
          <input className="themeToggle" type="checkbox" id="themeToggle" aria-label="Use dark theme" />
          <label className="themeSwitch" htmlFor="themeToggle" title="Switch black and white theme">
            <span className="sun">☼</span><span className="switchKnob" /><span className="moon">◐</span>
          </label>
          <a className="button small" href="mailto:adachidozie1@gmail.com">Book a call</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="portraitWrap">
          <img
            className="portrait"
            src="/portrait.jpeg"
            alt="Chidozie Deborah"
          />
        </div>
        <p className="eyebrow">B2B SaaS AI Product Designer</p>
        <h1>Designing experiences<br />that <em>matter.</em></h1>
        <p className="heroCopy">
          I design B2B SaaS and AI products, turning complex workflows into clear, scalable experiences that help users succeed and businesses grow.
        </p>
        <div className="heroActions">
          <a className="button" href="mailto:adachidozie1@gmail.com">Start a conversation</a>
          <a className="textLink" href="mailto:adachidozie1@gmail.com">Get in touch ↗</a>
        </div>
        <div className="heroSocials" aria-label="Social profiles">
          {socialLinks.map((social) => (
            <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}>
              <span className="socialIcon" aria-hidden="true">
                {social.label === "LinkedIn" ? <span className="linkedInMark">in</span> : <img src={social.icon} alt="" />}
              </span>
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="sectionNumber">01 / About</div>
        <div className="aboutBody">
          <h2>Turning ideas into visual stories.</h2>
          <div className="aboutCopy">
            <p>I&apos;m Chidozie Deborah, a B2B SaaS AI Product Designer with a passion for crafting digital experiences that are both beautiful and functional. I believe great design is invisible it just works.</p>
            <p>From leading UX research for Web3 marketplaces to designing trust-driven landing pages and solar energy platforms, I bring strategic thinking and pixel-perfect execution to every project.</p>
            <div className="skillRow">
              {['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Wireframing', 'Design Systems', 'Design Thinking', 'Usability Testing', 'Responsive Design', 'HTML', 'CSS'].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="sectionNumber">02 / Experience</div>
        <div className="experienceBody">
          <h2>Work history.</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="experienceItem" key={item.company}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials shell" id="clients">
        <div className="sectionHeader clientHeader">
          <div className="sectionNumber">03 / Client feedback</div>
          <h2>What clients say.</h2>
          <p>5.0 Upwork rating · 100% Job Success · Top Rated</p>
        </div>
        <div className="testimonialGrid">
          {testimonials.map((testimonial) => (
            <article className="testimonialCard" key={testimonial.detail}>
              <div className="quoteMark">“</div>
              <p>{testimonial.quote}</p>
              <footer><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></footer>
            </article>
          ))}
        </div>
        <div className="testimonialCtas">
          <a className="button" href="https://www.upwork.com/freelancers/~01ea83173bd60bd566?mp_source=share" target="_blank" rel="noreferrer">View my Upwork profile ↗</a>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow">Available for new projects</p>
        <h2>Let&apos;s build something<br />great together.</h2>
        <p>Have a project in mind? I&apos;d love to hear about it. Whether you need a full product design, a landing page, or just a conversation about UX, reach out and let&apos;s talk.</p>
        <div className="contactLinks">
          <a className="button light" href="mailto:adachidozie1@gmail.com">adachidozie1@gmail.com</a>
          {socialLinks.map((social) => (
            <a className="contactSocial" href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}>
              <span className="socialIcon" aria-hidden="true">
                {social.label === "LinkedIn" ? <span className="linkedInMark">in</span> : <img src={social.icon} alt="" />}
              </span>
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2025 Chidozie Deborah. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

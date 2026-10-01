import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Handshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Integrated Resort Strategy",
    text: "Aligning gaming mix, property-wide objectives, and capital allocation to support sustainable operating performance.",
  },
  {
    icon: BarChart3,
    title: "Gaming Performance Optimization",
    text: "Hands-on analysis and optimization across Table Games, Slots, and Sportsbooks—built around the realities of the casino floor.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & Compliance",
    text: "Executive navigation of complex gaming environments with disciplined attention to MICS, Title 31, AML, and jurisdictional requirements.",
  },
  {
    icon: Users,
    title: "Labor & Workforce Strategy",
    text: "Dynamic scheduling, talent pipelines, workforce optimization, and stakeholder coordination designed around operational needs.",
  },
  {
    icon: Handshake,
    title: "Union & Stakeholder Relations",
    text: "Practical executive experience working through union, employee, sovereign, and organizational relationships.",
  },
  {
    icon: Target,
    title: "Game & Asset Protection",
    text: "Floor training, shift handovers, game protection, performance metrics, and operating disciplines that strengthen the property.",
  },
];

const markets = [
  "Tribal Gaming",
  "Commercial Casinos",
  "International Gaming",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Vanguard Sovereign Gaming Advisors home">
          <span className="brand-mark">VS</span>
          <span>
            <strong>VANGUARD SOVEREIGN</strong>
            <small>GAMING ADVISORS LLC</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Start a Conversation</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow">CASINO MANAGEMENT • STRATEGY • PERFORMANCE</p>
          <h1>
            Executive expertise for
            <span> complex gaming operations.</span>
          </h1>
          <p className="hero-copy">
            Vanguard Sovereign Gaming Advisors provides hands-on executive
            advisory services to tribal, commercial, and international gaming
            properties—bringing real casino operating experience directly to
            the property floor.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contact">
              Discuss Your Property <ArrowRight size={17} />
            </a>
            <a className="button button-outline" href="#services">
              Explore Services
            </a>
          </div>
          <div className="hero-proof">
            <div><strong>15+</strong><span>Years of executive<br />gaming leadership</span></div>
            <div><strong>3</strong><span>Core gaming<br />disciplines</span></div>
            <div><strong>Multi</strong><span>Jurisdictional<br />experience</span></div>
          </div>
        </div>
        <div className="hero-aside">
          <div className="aside-card">
            <span className="card-kicker">THE VANGUARD APPROACH</span>
            <h3>Operational experience, not theoretical advice.</h3>
            <p>
              We work from the realities of gaming operations: people, assets,
              regulations, revenue, capital, and the daily decisions that
              determine performance.
            </p>
            <div className="gold-line" />
          </div>
        </div>
        <a className="scroll-cue" href="#services"><ChevronDown size={20} /></a>
      </section>

      <section className="section intro-section">
        <div className="section-label">01 / MANDATE</div>
        <div>
          <p className="lead">
            <span>Vanguard Sovereign</span> was founded to bring seasoned
            casino executive leadership to properties navigating growth,
            optimization, transition, or operational complexity.
          </p>
          <p className="body-copy">
            Our methodology is built on a career-long record of directing
            large-scale, high-volume integrated resort casino operations,
            orchestrating multi-million-dollar asset launches, structuring
            corporate strategies, and systematically optimizing gaming
            operations.
          </p>
        </div>
      </section>

      <section className="section dark-section" id="services">
        <div className="section-heading">
          <div>
            <div className="section-label light">02 / SERVICES</div>
            <h2>Built for the realities<br /><em>of the casino floor.</em></h2>
          </div>
          <p>
            Executive-level support tailored to complex regulatory, financial,
            labor, and operational environments.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <Icon size={25} strokeWidth={1.4} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="card-arrow"><ArrowRight size={17} /></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-label">03 / EXECUTIVE EXPERTISE</div>
        <div className="expertise-layout">
          <div>
            <h2>A toolkit shaped<br /><em>by experience.</em></h2>
            <p className="body-copy">
              When you engage Vanguard Sovereign, you gain direct access to an
              executive perspective shaped by multi-jurisdictional casino
              leadership—not a generic consulting playbook.
            </p>
          </div>
          <div className="expertise-list">
            <div>
              <CheckCircle2 />
              <span><strong>Integrated Resort Strategy & CapEx Planning</strong><br />Align gaming mix with branding, property strategy, and high-yield capital allocation.</span>
            </div>
            <div>
              <CheckCircle2 />
              <span><strong>Sovereign Board Relations & Compliance</strong><br />Navigate complex regulatory environments while maintaining disciplined operating standards.</span>
            </div>
            <div>
              <CheckCircle2 />
              <span><strong>Labor Compression & Workforce Planning</strong><br />Build scheduling matrices, talent pipelines, and operating structures around performance.</span>
            </div>
            <div>
              <CheckCircle2 />
              <span><strong>Advanced Staff & Asset Protection</strong><br />Strengthen floor training, game protection, shift handovers, and performance measurement.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="market-band">
        <div className="section-label light">04 / MARKETS SERVED</div>
        <div className="market-grid">
          {markets.map((market, index) => (
            <div className="market" key={market}>
              <span>0{index + 1}</span>
              <Globe2 size={22} />
              <h3>{market}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="portrait-placeholder">
          <img
            className="founder-photo"
            src="/Smiling%20Founder%20Portrait%20with%20Colorful%20Mandala%20Backdrop.png"
            alt="Joe Costello, Founder and Managing Director"
          />
        </div>
        <div className="about-copy">
          <div className="section-label">05 / LEADERSHIP</div>
          <h2>Meet Joe Costello</h2>
          <p className="title">Founder & Managing Director</p>
          <p className="lead">
            A proven, performance-driven casino executive and General Manager
            with more than 15 years of progressive, multi-jurisdictional
            leadership.
          </p>
          <p className="body-copy">
            Joe Costello has directed large-scale, high-volume integrated
            resort casino operations across the globe, bringing real-world
            executive experience to the challenges facing modern gaming
            properties. His background spans gaming operations, corporate
            strategy, asset launches, capital planning, regulatory
            environments, workforce strategy, and stakeholder relations.
          </p>
          <p className="body-copy">
            The result is a practical advisory model designed to identify
            opportunities, establish operating discipline, and translate
            executive strategy into measurable action on the floor.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/company/vanguard-sovereign-gaming-advisors-llc/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-glow" />
        <div className="section-label light">06 / LET'S TALK</div>
        <h2>Bring executive casino<br /><em>experience to your property.</em></h2>
        <p>
          Whether you are evaluating an operation, preparing for a launch,
          optimizing an existing property, or navigating a complex transition,
          start with a conversation.
        </p>
        <div className="contact-actions">
          <a className="button button-gold" href="mailto:VSGALLC@outlook.com">
            Email Joe <ArrowRight size={17} />
          </a>
          <a className="button button-outline-light" href="tel:+14802660904">
            480.266.0904
          </a>
        </div>
        <div className="contact-details">
          <span>VSGALLC@outlook.com</span>
          <span>•</span>
          <span>480.266.0904</span>
        </div>
      </section>

      <footer className="footer">
        <div className="brand footer-brand">
          <span className="brand-mark">VS</span>
          <span>
            <strong>VANGUARD SOVEREIGN</strong>
            <small>GAMING ADVISORS LLC</small>
          </span>
        </div>
        <p>Executive Casino Management Advisory</p>
        <a href="https://www.linkedin.com/company/vanguard-sovereign-gaming-advisors-llc/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>© {new Date().getFullYear()} Vanguard Sovereign Gaming Advisors LLC</span>
      </footer>
    </main>
  );
}
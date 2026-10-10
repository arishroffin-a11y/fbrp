import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  Gamepad2,
  Ghost,
  Instagram,
  MapPin,
  Menu,
  Radio,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
  X,
  Youtube,
} from 'lucide-react';
import { useState } from 'react';

const discordUrl = 'https://discord.gg/fbrptop';
const eventImage = 'https://cdn.discordapp.com/attachments/1555160892654493816/1557525956443250788/image-10.jpg?backend=b2&ex=6acac195&is=6ac97015&hm=e73ea93a1232155b2a4bdb2d4ce3a92a3a7576405eb201d47425c5465b94fb72';
const sceneImage = 'https://cdn.discordapp.com/attachments/1555160892654493816/1557525825408991242/image-13.jpg?backend=b2&ex=6acac176&is=6ac96ff6&hm=120f469254f85f0a86a0fa3e05e553c7e27e55a573f59d05a7e6e65f3efa30a3';

type Feature = {
  icon: typeof Users;
  eyebrow: string;
  title: string;
  copy: string;
};

const features: Feature[] = [
  { icon: ShieldCheck, eyebrow: 'Built different', title: 'Experienced staff', copy: 'A trained, active team keeps every scene fair, welcoming, and moving.' },
  { icon: Radio, eyebrow: 'Always something on', title: 'Daily sessions', copy: 'Jump in whenever you are ready. There is always another story waiting.' },
  { icon: BadgeCheck, eyebrow: 'The details matter', title: 'Authentic departments', copy: 'Recognisable liveries, uniforms, vehicles, and a world that feels alive.' },
  { icon: Gamepad2, eyebrow: 'Your story, your way', title: 'Immersive roleplays', copy: 'Build a character, find your people, and make every call count.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="FBRP home" onClick={closeMenu}>
          <img src="/fbrp_logo.webp" alt="Fun Border Roleplay" />
          <span>FBRP</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>Why FBRP</a>
          <a href="#event" onClick={closeMenu}>Halloween event</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a className="nav-cta" href={discordUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Join Discord <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="event-kicker"><span className="pulse-dot" /> Halloween event is live</div>
            <h1>Make your next<br /><em>shift</em> unforgettable.</h1>
            <p className="hero-lead">A serious roleplay experience for players who want more from ERLC. Step into a growing community built around immersive scenes, active staff, and stories worth showing up for.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={discordUrl} target="_blank" rel="noreferrer">Enter the community <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#event">Explore the event <ChevronRight size={17} /></a>
            </div>
            <div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>F</span><span>R</span><span>P</span><span>+</span></div><p><strong>9,000+</strong> people already in the server</p></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame"><img src={eventImage} alt="FBRP Halloween roleplay scene" /><div className="image-shade" /></div>
            <div className="floating-card event-card"><div className="card-icon"><Ghost size={19} /></div><div><span>Now running</span><strong>FBRP: After Dark</strong></div><span className="live-tag">LIVE</span></div>
            <div className="floating-card location-card"><MapPin size={16} /><span>Liberty County, FL</span></div>
            <span className="scribble scribble-one">A new story<br />starts here</span>
          </div>
        </section>

        <section className="ticker" aria-label="Community highlights"><div className="ticker-track"><span>FUN BORDER ROLEPLAY</span><i>✦</i><span>EST. 2024</span><i>✦</i><span>ERLC PRIVATE SERVER</span><i>✦</i><span>FUN BORDER ROLEPLAY</span><i>✦</i><span>EST. 2024</span><i>✦</i><span>ERLC PRIVATE SERVER</span></div></section>

        <section className="intro section-wrap" id="about">
          <div className="section-label"><span>01</span><span className="label-line" /><span>More than a server</span></div>
          <div className="intro-grid"><h2>Good roleplay is<br /><em>all in the details.</em></h2><div><p className="large-copy">FBRP is a new establishment with an old-school community feel. We bring structure to every session without taking the fun out of playing.</p><p className="muted-copy">Whether you are answering calls, running a business, or just finding your place in Liberty County, there is room for your story here.</p><a className="inline-link" href={discordUrl} target="_blank" rel="noreferrer">Meet the community <ArrowUpRight size={15} /></a></div></div>
          <div className="feature-grid">{features.map(({ icon: Icon, eyebrow, title, copy }) => <article className="feature" key={title}><div className="feature-icon"><Icon size={19} /></div><div><span>{eyebrow}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </section>

        <section className="event-section section-wrap" id="event">
          <div className="event-panel"><img src={sceneImage} alt="FBRP night roleplay scene" /><div className="event-overlay" /><div className="event-content"><div className="section-label light"><span>02</span><span className="label-line" /><span>Seasonal special</span></div><div className="event-heading"><div><p className="orange-eyebrow"><Sparkles size={15} /> Limited-time community event</p><h2>Welcome to<br /><em>FBRP: After Dark.</em></h2></div><div className="event-date"><CalendarDays size={22} /><span>October<br /><strong>31</strong></span></div></div><p className="event-description">The county looks a little different after sunset. Join us for a night of costumes, calls, and chaotic Halloween roleplay. Bring your best fit and make a scene.</p><a className="button button-orange" href={discordUrl} target="_blank" rel="noreferrer">Get event access <Ticket size={17} /></a></div></div>
        </section>

        <section className="community-section section-wrap" id="community">
          <div className="community-heading"><div className="section-label"><span>03</span><span className="label-line" /><span>Find your place</span></div><h2>Your next chapter<br /><em>starts in Discord.</em></h2><p>Come for the roleplay. Stay for the people. Applications are open for players and staff who want to help build what comes next.</p><a className="button button-dark" href={discordUrl} target="_blank" rel="noreferrer">Join 9,000+ members <Users size={17} /></a></div>
          <div className="community-details"><div className="detail-row"><div className="detail-number">01</div><div><h3>Staff applications open</h3><p>Think you would be a great fit? We are always looking for calm, capable people to join the team.</p></div><ArrowUpRight size={19} /></div><div className="detail-row"><div className="detail-number">02</div><div><h3>Built for the long run</h3><p>Join a new server with the momentum, standards, and ambition to grow with you.</p></div><ArrowUpRight size={19} /></div><div className="detail-row"><div className="detail-number">03</div><div><h3>Pull up a seat</h3><p>Daily sessions, friendly faces, and a story waiting for your character.</p></div><ArrowUpRight size={19} /></div></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a href="#top" className="footer-brand"><img src="/fbrp_logo.webp" alt="" /><span><strong>Fun Border Roleplay</strong><small>Liberty County, FL</small></span></a><p>Made for the moments between the sirens.</p><div className="footer-links"><a href={discordUrl} target="_blank" rel="noreferrer">Discord <ArrowUpRight size={14} /></a><a href="#top" aria-label="Instagram"><Instagram size={16} /></a><a href="#top" aria-label="Youtube"><Youtube size={17} /></a></div></footer>
    </div>
  );
}

export default App;

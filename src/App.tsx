import { ArrowUpRight, ChevronDown, Ghost, Menu, ShieldCheck, Users, X } from 'lucide-react';
import { useState } from 'react';

const discordUrl = 'https://discord.gg/fbrptop';
const eventImage =
  'https://cdn.discordapp.com/attachments/1555160892654493816/1557525956443250788/image-10.jpg?backend=b2&ex=6acac195&is=6ac97015&hm=e73ea93a1232155b2a4bdb2d4ce3a92a3a7576405eb201d47425c5465b94fb72';
const sceneImage =
  'https://cdn.discordapp.com/attachments/1555160892654493816/1557525825408991242/image-13.jpg?backend=b2&ex=6acac176&is=6ac96ff6&hm=120f469254f85f0a86a0fa3e05e553c7e27e55a573f59d05a7e6e65f3efa30a3';

type Pillar = { icon: typeof Users; title: string; body: string };
const pillars: Pillar[] = [
  { icon: ShieldCheck, title: 'Experienced staff', body: 'A trained moderation team keeps every session fair, focused, and fun for every rank.' },
  { icon: Ghost, title: 'Halloween event live', body: 'FBRP: After Dark is running now. Costumes, chaos, and calls under the October moon.' },
  { icon: Users, title: '9,000+ members', body: 'A fast-growing Discord full of players and departments ready to welcome the next recruit.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="shell">

      {/* ── Nav ── */}
      <header className="nav">
        <a href="#top" className="nav-logo" onClick={close}>
          <img src="/fbrp_logo.webp" alt="Fun Border Roleplay" />
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main">
          <a href="#about" onClick={close}>About</a>
          <a href="#event" onClick={close}>Halloween</a>
          <a href="#community" onClick={close}>Community</a>
          <a href="#join" onClick={close}>How to Join</a>
          <a className="nav-discord" href={discordUrl} target="_blank" rel="noreferrer" onClick={close}>
            Discord <ArrowUpRight size={14} />
          </a>
        </nav>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ── Hero ── */}
      <section className="hero" id="top">
        <img className="hero-bg" src={eventImage} alt="" />
        <div className="hero-scrim" />
        <div className="hero-body">
          <div className="hero-kicker"><span className="dot" />Halloween event is live</div>
          <img src="/fbrp_logo.webp" alt="Fun Border Roleplay" className="hero-logo" />
          <h1>Fun Border<br />Roleplay</h1>
          <p className="hero-sub">An immersive ERLC private server experience built for players who take roleplay seriously.</p>
          <div className="hero-btns">
            <a className="btn btn-white" href={discordUrl} target="_blank" rel="noreferrer">Join our Discord</a>
            <a className="btn btn-ghost" href="#about">Learn more</a>
          </div>
        </div>
        <a href="#about" className="scroll-hint" aria-label="Scroll down"><ChevronDown size={22} /></a>
      </section>

      {/* ── About ── */}
      <section className="split" id="about">
        <div className="split-img">
          <img src={sceneImage} alt="FBRP night patrol scene" />
        </div>
        <div className="split-copy">
          <span className="eyebrow">About FBRP</span>
          <h2>A new establishment.<br />A real community.</h2>
          <p>Fun Border Roleplay is a Liberty County ERLC private server built from the ground up for structured, immersive roleplay. From new recruits to veteran officers, everyone has a place here.</p>
          <p>We offer active departments, authentic liveries and uniforms, daily sessions, and a staff team that keeps every scene running smoothly.</p>
          <a className="inline-link" href={discordUrl} target="_blank" rel="noreferrer">Join the community <ArrowUpRight size={15} /></a>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="pillars" id="highlights">
        <div className="pillars-inner">
          <span className="eyebrow center">What we offer</span>
          <h2 className="center">Built for the experience.</h2>
          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, body }) => (
              <article className="pillar" key={title}>
                <div className="pillar-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Halloween Event ── */}
      <section className="fullbleed" id="event">
        <img className="fullbleed-bg" src={eventImage} alt="Halloween event scene" />
        <div className="fullbleed-scrim" />
        <div className="fullbleed-body">
          <span className="eyebrow light">Seasonal special · October 2026</span>
          <h2>FBRP: After Dark</h2>
          <p>The county looks different after sunset. Join us for Halloween costumes, spooky calls, and the most chaotic session of the year. The gate is open — come find trouble.</p>
          <a className="btn btn-orange" href={discordUrl} target="_blank" rel="noreferrer">Get event access <ArrowUpRight size={16} /></a>
        </div>
      </section>

      {/* ── Community ── */}
      <section className="split split-rev" id="community">
        <div className="split-copy">
          <span className="eyebrow">Our community</span>
          <h2>9,000+ members<br />and growing.</h2>
          <p>Step into one of the fastest-growing ERLC communities on Roblox. With daily sessions, open department applications, and a friendly player base, there is always something happening in Liberty County.</p>
          <ul className="check-list">
            <li>Active staff applications always open</li>
            <li>Dedicated liveries and uniforms per department</li>
            <li>Civilian, law enforcement, and fire/EMS roleplay</li>
            <li>Daily hosted sessions and special events</li>
          </ul>
          <a className="btn btn-dark" href={discordUrl} target="_blank" rel="noreferrer">Join Discord <ArrowUpRight size={16} /></a>
        </div>
        <div className="split-img">
          <img src={sceneImage} alt="FBRP community patrol" />
        </div>
      </section>

      {/* ── How to Join ── */}
      <section className="steps" id="join">
        <span className="eyebrow center">Get started</span>
        <h2 className="center">How to join FBRP</h2>
        <ol className="step-list">
          {[
            ['Join the Discord', 'Head to our Discord server via the link below and accept the rules to gain access.'],
            ['Read the regulations', 'Browse the server regulations and department guides in our resources channels.'],
            ['Pick your path', 'Apply for a department role, or jump straight into civilian roleplay — no application needed.'],
            ['Attend a session', 'Check the announcements channel for the next hosted session time and server code.'],
            ['Make your mark', 'Show up, communicate, and contribute to scenes that everyone will remember.'],
          ].map(([title, body], i) => (
            <li key={i} className="step">
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="steps-cta">
          <a className="btn btn-dark" href={discordUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={16} /></a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#top" className="footer-brand">
            <img src="/fbrp_logo.webp" alt="" />
            <div>
              <strong>Fun Border Roleplay</strong>
              <small>Liberty County, FL · ERLC Private Server</small>
            </div>
          </a>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#event">Halloween</a>
            <a href="#community">Community</a>
            <a href={discordUrl} target="_blank" rel="noreferrer">Discord</a>
          </nav>
        </div>
        <p className="footer-legal">Fun Border Roleplay is an independent ERLC private server community. Not affiliated with Roblox or Police Roleplay Community.</p>
      </footer>
    </div>
  );
}

export default App;

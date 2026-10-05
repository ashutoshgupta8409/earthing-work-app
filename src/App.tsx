const phone = '+917903230128'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BoltMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 40" fill="none">
      <path d="M20.5 1 5 22h10l-1.5 17L31 16H20l.5-15Z" fill="currentColor" />
    </svg>
  )
}

function GroundingIllustration() {
  return (
    <div className="illustration" aria-label="Illustration of a protected building connected to an earthing system" role="img">
      <div className="illustration-topline"><span className="live-dot" /> SITE PROTECTION SYSTEM <span>01 / 03</span></div>
      <svg className="grounding-svg" viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="building" x1="155" y1="125" x2="365" y2="304" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#dcebee"/></linearGradient>
          <linearGradient id="earth" x1="260" y1="286" x2="260" y2="350" gradientUnits="userSpaceOnUse"><stop stopColor="#d7a74b" stopOpacity=".38"/><stop offset="1" stopColor="#d7a74b" stopOpacity=".04"/></linearGradient>
        </defs>
        <path d="M47 318h430" stroke="#B4CDD0" strokeWidth="1.5" strokeDasharray="5 7" />
        <path d="M112 290c34-10 42-26 75-27 32-1 49 15 80 14 36-2 47-22 80-22 31 0 53 11 89 7" stroke="#7CA2A6" strokeWidth="1.3" strokeDasharray="3 7" />
        <path d="M144 154 258 95l119 59v130H144V154Z" fill="url(#building)" stroke="#64858A" strokeWidth="2" />
        <path d="m131 154 127-68 132 66-14 11-118-59-113 60-14-10Z" fill="#0E7480" />
        <path d="m144 194 114 52 119-54M144 238l114 52 119-54" stroke="#9CB7BA" strokeWidth="1.3" />
        <path d="M258 89v201M200 127v136M316 127v137" stroke="#AEC3C5" strokeWidth="1.2" />
        <rect x="167" y="168" width="19" height="17" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="209" y="168" width="19" height="17" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="288" y="168" width="19" height="17" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="331" y="168" width="19" height="17" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="167" y="211" width="19" height="18" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="209" y="211" width="19" height="18" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="288" y="211" width="19" height="18" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="331" y="211" width="19" height="18" rx="2" fill="#D9E9E9" stroke="#88A7AA" />
        <rect x="240" y="248" width="35" height="41" rx="2" fill="#BCD2D3" stroke="#64858A" />
        <path d="M258 86V47" stroke="#D6A83F" strokeWidth="3" strokeLinecap="round" />
        <path d="M249 53h18M252 46h12" stroke="#D6A83F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M258 47 240 67M258 47l19 20" stroke="#E4B642" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="258" cy="47" r="5" fill="#F0BB46" stroke="#fff" strokeWidth="2" />
        <path d="M258 90v221c0 12 10 18 24 18h69" stroke="#0E7480" strokeWidth="3" strokeLinecap="round" />
        <path d="M351 322v17m-12-1h24m-20 7h16m-11 7h6" stroke="#0E7480" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M279 328h76v36h-76z" fill="url(#earth)" />
        <circle cx="352" cy="329" r="5" fill="#F0BB46" stroke="#fff" strokeWidth="2" />
        <path d="M360 325h74" stroke="#94B0B3" strokeWidth="1.2" />
        <text x="438" y="328" fill="#395C62" fontSize="10" fontFamily="sans-serif">EARTH ELECTRODE</text>
        <path d="M262 46h99" stroke="#94B0B3" strokeWidth="1.2" />
        <text x="367" y="49" fill="#395C62" fontSize="10" fontFamily="sans-serif">LIGHTNING AIR TERMINAL</text>
        <path d="M258 205h-85" stroke="#94B0B3" strokeWidth="1.2" />
        <text x="67" y="202" fill="#395C62" fontSize="10" fontFamily="sans-serif">DOWN CONDUCTOR</text>
        <circle cx="258" cy="311" r="12" fill="#E9F2EF" />
        <circle cx="258" cy="311" r="5" fill="#0E7480" />
      </svg>
      <div className="illustration-caption"><span className="caption-icon"><CheckIcon /></span><span><strong>Protection, from roof to ground</strong><small>A complete path for safe current dissipation</small></span></div>
    </div>
  )
}

const benefits = [
  'Low earth resistance for dependable performance',
  'Corrosion-resistant components built to last',
  'Designed around your site and safety needs',
]

const services = [
  { number: '01', title: 'Chemical earthing', text: 'Reliable, low-resistance grounding systems for homes, businesses and industry.', icon: '⌁' },
  { number: '02', title: 'Lightning protection', text: 'Thoughtful protection systems that guide lightning energy safely to earth.', icon: '↯' },
  { number: '03', title: 'Inspection & upkeep', text: 'Practical checks and maintenance to help keep your earthing system dependable.', icon: '◎' },
]

function App() {
  return (
    <>
      <div className="announcement"><span>Grounded in safety. Built on trust.</span><a href={`tel:${phone}`}>Talk to our team <span aria-hidden="true">↗</span></a></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shieo Shakti home">
          <span className="brand-mark"><BoltMark /></span>
          <span className="brand-copy"><strong>SHIEO SHAKTI</strong><small>CHEMICAL EARTHING</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-phone" href={`tel:${phone}`}><span className="phone-icon">↗</span><span><small>CALL FOR A CONSULTATION</small><strong>+91 79032 30128</strong></span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> SAFER POWER STARTS BELOW THE SURFACE</div>
            <h1>Protection you can trust.<br /><em>Grounded in safety.</em></h1>
            <p>Dependable chemical earthing and lightning protection solutions for the places where life and work happen.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Get a site consultation <ArrowIcon /></a><a className="text-link" href="#services">Explore our services <ArrowIcon /></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>SS</span><span>ES</span><span>✓</span></div><p><strong>Safety at the foundation.</strong><br />Solutions for homes, businesses & industry.</p></div>
          </div>
          <div className="hero-visual"><GroundingIllustration /><div className="floating-note"><span className="note-check"><CheckIcon /></span><span><strong>One dependable system</strong><small>From installation to inspection</small></span></div></div>
          <div className="hero-index"><span>01</span><span className="index-line" /><span>03</span></div>
        </section>

        <section className="trust-strip" aria-label="Our approach"><div><span className="strip-icon"><CheckIcon /></span><span><strong>Safety-led solutions</strong><small>Protection comes first</small></span></div><div><span className="strip-icon"><BoltMark /></span><span><strong>Built for reliability</strong><small>Quality materials & care</small></span></div><div><span className="strip-icon"><ArrowIcon /></span><span><strong>Local team in Patna</strong><small>Here when you need us</small></span></div></section>

        <section className="about-section section-wrap" id="about">
          <div className="section-kicker">WHY EARTHING MATTERS <span>01 — 03</span></div>
          <div className="about-grid"><div><h2>A quiet layer of protection.<br /><em>A critical one.</em></h2></div><div className="about-copy"><p>Earthing gives fault and lightning currents a safe path to the ground. A well-planned system helps protect people, equipment and property—and gives your electrical installation a stable reference.</p><ul>{benefits.map((benefit) => <li key={benefit}><span><CheckIcon /></span>{benefit}</li>)}</ul><a className="inline-link" href="#services">How we can help <ArrowIcon /></a></div></div>
        </section>

        <section className="services-section" id="services"><div className="section-wrap"><div className="section-kicker">WHAT WE DO <span>02 — 03</span></div><div className="services-heading"><h2>Safety solutions,<br /><em>from the ground up.</em></h2><p>Practical, dependable earthing work tailored to your property, project and protection requirements.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number} / 03</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Ask about ${service.title}`}><ArrowIcon /></a></article>)}</div></div></section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-card"><div className="contact-copy"><div className="section-kicker">LET'S TALK SAFETY <span>03 — 03</span></div><h2>Start with a conversation.<br /><em>We'll take it from there.</em></h2><p>Tell us what you need protecting. Our team in Patna is ready to discuss your earthing work and next steps.</p><div className="contact-actions"><a className="button button-light" href={`tel:${phone}`}>Call +91 79032 30128 <ArrowIcon /></a><span>Available for enquiries</span></div></div><div className="contact-details"><span className="detail-label">VISIT / WRITE TO US</span><strong>Shieo Shakti Chemical Earthing</strong><p>Chitkohra, Punjabi Colony<br />Anisabad, Patna — 800002</p><a href={`tel:${phone}`}>+91 79032 30128</a><span className="detail-rule" /><small>Serving Patna and surrounding areas</small></div></div></section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><BoltMark /></span><span className="brand-copy"><strong>SHIEO SHAKTI</strong><small>CHEMICAL EARTHING</small></span></a><span>Reliable earthing. Safer spaces.</span><span>© {new Date().getFullYear()} Shieo Shakti Chemical Earthing</span></footer>
    </>
  )
}

export default App

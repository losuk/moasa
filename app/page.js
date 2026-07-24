'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TEASERS = [
  {
    title: 'General Construction',
    img: '/about_hero.png',
    link: '/services',
  },
  {
    title: 'Road Construction',
    img: '/services_hero.png',
    link: '/services',
  },
  {
    title: 'Pre Construction',
    img: '/contact_hero.png',
    link: '/services',
  },
  {
    title: 'Design + Build',
    img: '/hero_architecture.png',
    link: '/services',
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const showcaseRef = useRef(null);


  // Scroll reveal animation observer
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sticky Scroll Showcase — drive clip-path reveal + content transitions
  useEffect(() => {
    const handleScroll = () => {
      if (!showcaseRef.current) return;
      const rect = showcaseRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = containerHeight - viewportHeight;

      // progress: 0 = top of section, 1 = bottom of section
      let progress = 0;
      if (totalScrollable > 0) {
        progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      }

      const stickyEl = showcaseRef.current.querySelector('.scroll-showcase-sticky');
      if (!stickyEl) return;

      // Image 2 reveal: inset(100% -> 0%) as progress goes from 0.1 to 0.7
      const img2Progress = Math.max(0, Math.min(1, (progress - 0.1) / 0.6));
      const reveal = `${(1 - img2Progress) * 100}%`;
      stickyEl.style.setProperty('--reveal', reveal);

      // Content 1 (Expertise): opacity 1 -> 0 as progress goes from 0 to 0.4
      const c1Progress = Math.max(0, Math.min(1, progress / 0.4));
      const c1Opacity = 1 - c1Progress;
      const c1Y = -(c1Progress * 40);
      stickyEl.style.setProperty('--content1-opacity', c1Opacity);
      stickyEl.style.setProperty('--content1-y', `${c1Y}px`);
      stickyEl.style.setProperty('--content1-pointer', c1Opacity > 0.5 ? 'auto' : 'none');

      // Content 2 (Our Mission): opacity 0 -> 1 as progress goes from 0.4 to 0.85
      const c2Progress = Math.max(0, Math.min(1, (progress - 0.4) / 0.45));
      const c2Opacity = c2Progress;
      const c2Y = (1 - c2Progress) * 40;
      stickyEl.style.setProperty('--content2-opacity', c2Opacity);
      stickyEl.style.setProperty('--content2-y', `${c2Y}px`);
      stickyEl.style.setProperty('--content2-pointer', c2Opacity > 0.5 ? 'auto' : 'none');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Immersive Full-Bleed Hero (Skanska Style) */}
      <section ref={heroRef} id="hero" className="hero-visual-impact">
        <div className="hero-visual-impact-bg">
          <Image
            src="/hero_architecture.png"
            alt="Moasa Housing Construction Landmark"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="container hero-visual-impact-content">
          <div className="hero-visual-impact-grid">
            <div className="scroll-reveal">
              <h1 className="hero-visual-impact-title">
                Building places that move and inspire
              </h1>
            </div>
            <div className="scroll-reveal">
              <p className="hero-visual-impact-intro">
                We construct projects of all types across East Africa with a clear-cut focus: build for a better society.
              </p>
              <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
                <Link href="/request-quote" className="btn btn-primary">Request A Quote</Link>
                <Link href="/services" className="btn btn-secondary" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }}>Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Teaser Grid (Skanska Style) */}
      <section id="homepage-teaser" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ padding: '80px 0' }}>
          <h2 className="scroll-reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '40px', color: 'var(--text-primary)' }}>
            Our core offerings
          </h2>
          
          <div className="teaser-grid">
            {TEASERS.map((teaser, idx) => (
              <Link key={idx} href={teaser.link} className="teaser-card scroll-reveal">
                <div className="teaser-img-container">
                  <div className="teaser-img-wrapper">
                    <Image
                      src={teaser.img}
                      alt={teaser.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="teaser-info">
                  <h3 className="teaser-title">{teaser.title}</h3>
                  <div className="teaser-arrow-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" stroke="currentColor" fill="none" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>WHAT WE OFFER</div>
            <h2 className="section-title" style={{ fontSize: '36px', color: 'var(--text-primary)', textTransform: 'none' }}>
              Turn-Key Engineering &amp; Building Capabilities
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '680px', marginTop: '16px', lineHeight: '1.6' }}>
              From initial geotechnical analysis to full structural delivery, Moasa Housing provides comprehensive construction services tailored to your project scope.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div className="service-card scroll-reveal">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#006674" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="6" x2="9" y2="6.01" />
                  <line x1="15" y1="6" x2="15" y2="6.01" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                </svg>
              </div>
              <h3 className="service-card-title">General Construction</h3>
              <p className="service-card-desc">High-density apartments, commercial office towers, hotels, and industrial logistics facilities built with structural longevity.</p>
            </div>

            <div className="service-card scroll-reveal">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#006674" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19L8 5" />
                  <path d="M16 5l4 14" />
                  <line x1="12" y1="6" x2="12" y2="8" />
                  <line x1="12" y1="16" x2="12" y2="19" />
                </svg>
              </div>
              <h3 className="service-card-title">Road Construction</h3>
              <p className="service-card-desc">Highways, estate access routes, sub-grade compaction, asphalt concrete paving, and reinforced drainage culverts.</p>
            </div>

            <div className="service-card scroll-reveal">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#006674" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                </svg>
              </div>
              <h3 className="service-card-title">Pre Construction</h3>
              <p className="service-card-desc">Site feasibility, geotechnical soil testing, quantity surveying, cost modeling, and regulatory permit compliance.</p>
            </div>

            <div className="service-card scroll-reveal">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#006674" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <h3 className="service-card-title">Design + Build</h3>
              <p className="service-card-desc">Single point of contract combining architecture, MEP engineering, interior fit-outs, and fast-track execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Showcase Panel (Skanska Framed Card Style) */}
      <section ref={showcaseRef} className="scroll-showcase-container">
        <div className="scroll-showcase-sticky">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className="scroll-showcase-card">
              
              {/* Image wipe layers */}
              <div className="scroll-showcase-bg-layer">
                <Image
                  src="/contact_hero.png"
                  alt="Kampala Commercial Headquarters Facade"
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="scroll-showcase-bg-layer">
                <Image
                  src="/about_hero.png"
                  alt="Structural drafting plans and crane framework"
                  fill
                  sizes="100vw"
                />
              </div>

              {/* Dark overlay for contrast */}
              <div className="scroll-showcase-overlay"></div>

              {/* Content Layer 1 (Expertise) */}
              <div className="scroll-showcase-content-layer content-layer-1">
                <div className="scroll-showcase-card-top">
                  <div className="scroll-showcase-tag">02 / EXPERTISE</div>
                  <h2 className="scroll-showcase-title">Engineering &amp; Construction Excellence</h2>
                </div>
                <div className="scroll-showcase-card-bottom">
                  <p className="scroll-showcase-desc">
                    From high-density residential developments and corporate headquarters to highways and civil infrastructure — Moasa delivers turnkey planning, structural engineering, and precision execution.
                  </p>
                  <Link href="/services" className="circle-bubble-btn">
                    <span>Explore Our Services</span>
                    <div className="teaser-arrow-btn">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" stroke="currentColor" fill="none" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Content Layer 2 (Our Mission) */}
              <div className="scroll-showcase-content-layer content-layer-2">
                <div className="scroll-showcase-card-top">
                  <div className="scroll-showcase-tag">03 / OUR MISSION</div>
                  <h2 className="scroll-showcase-title">Building for a Better Society</h2>
                </div>
                <div className="scroll-showcase-card-bottom">
                  <p className="scroll-showcase-desc">
                    We build durable, sustainable infrastructure that enhances community safety, supports economic growth, and elevates living standards across Uganda, South Sudan, and Kenya — on time, on budget, and with ultimate quality.
                  </p>
                  <Link href="/request-quote" className="circle-bubble-btn">
                    <span>Discuss Your Project</span>
                    <div className="teaser-arrow-btn">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" stroke="currentColor" fill="none" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Stats & Scale Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '60px' }}>
            <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>03 / COMPANY NUMBERS</div>
            <h2 className="section-title" style={{ fontSize: '32px', color: 'var(--text-primary)', textTransform: 'none' }}>Operational Scale & Metrics</h2>
          </div>

          <div className="scroll-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'var(--border)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginTop: '40px' }}>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '40px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '56px', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>20+</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '12px', textTransform: 'uppercase' }}>Years Experience</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '40px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '56px', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>150+</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '12px', textTransform: 'uppercase' }}>Projects Completed</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '40px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '56px', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>3</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '12px', textTransform: 'uppercase' }}>Countries Operating</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '40px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '56px', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>100%</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '12px', textTransform: 'uppercase' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kampala Head Office Info Bar */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-2-cols" style={{ gap: '60px' }}>
            <div className="scroll-reveal">
              <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>04 / HEADQUARTERS</div>
              <h2 className="section-title" style={{ fontSize: '32px', color: 'var(--text-primary)', textTransform: 'none' }}>Let&apos;s Build Together</h2>
              <p style={{ marginTop: '20px', color: 'var(--text-secondary)', fontWeight: 300, fontSize: '15px', lineHeight: '1.7' }}>
                Ready to start your next project? Get in touch with our Kampala headquarters to schedule a design-build consulting session.
              </p>
            </div>

            <div className="scroll-reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Office Address</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
                  8th Floor, Communications House<br />Kampala, Uganda
                </p>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Email</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
                  <a href="mailto:info@moasa.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>info@moasa.com</a>
                </p>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Hours</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
                  Mon-Fri: 8am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

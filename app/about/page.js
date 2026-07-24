'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FOUNDATION_PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#C59B27">
        <path d="M21 3C10.5 3.5 4 10 3.5 20.5C5.5 20.5 10.5 19 14.5 15C18.5 11 20.5 6 21 3Z" />
        <path d="M9 15L15 9" stroke="#FDF8EC" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Field Offices & Sustainability',
    desc: 'We have a set of sustainability standards for our offices and jobsites, including site-specific Indoor Air Quality, Construction Waste Management, and Pollution Prevention plans.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#C59B27">
        <path d="M6 18h12v2H6v-2zm9-6V7a3 3 0 0 0-6 0v5a4 4 0 0 0 2 3.46V17h2v-1.54A4 4 0 0 0 15 12zM9 7a2 2 0 1 1 4 0v1H9V7z"/>
      </svg>
    ),
    title: 'Research & Innovation',
    desc: 'We conduct research, pilot projects, and case studies to support the development and implementation of new technology and best practices in construction.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#C59B27">
        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V5l-8-3z"/>
      </svg>
    ),
    title: 'Culture of Safety',
    desc: 'We recognize the right of our employees to a safe and healthy workplace. Our culture embraces the principle of Living Injury Free Everyday (L.I.F.E.) for all projects.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#C59B27">
        <path d="M12 2l2.4 1.8 3-.2 1 2.8 2.8 1-.2 3 1.8 2.4-1.8 2.4.2 3-2.8 1-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8-2.8-1 .2-3L1.2 12l1.8-2.4-.2-3 2.8-1 1-2.8 3 .2L12 2z"/>
      </svg>
    ),
    title: 'Certified Integrity',
    desc: 'We get involved early in the visioning stage to give valuable input on costs, constructability, lead times, and life cycle issues, ensuring major cost savings and project success.',
  },
];

const JOURNEY_STEPS = [
  {
    year: '2009',
    title: 'Moasa Housing Founded',
    desc: 'Established in Kampala, Uganda, with a vision to transform the construction industry.',
    side: 'right',
  },
  {
    year: '2012',
    title: 'First Major Project',
    desc: 'Completed our first large-scale residential development, setting the standard for quality.',
    side: 'left',
  },
  {
    year: '2015',
    title: 'Expansion Into Commercial',
    desc: 'Expanded our services to include commercial construction, delivering our first office complex.',
    side: 'right',
  },
  {
    year: '2018',
    title: 'Sustainability Focus',
    desc: 'Launched our sustainable building initiative, incorporating eco-friendly materials and practices.',
    side: 'left',
  },
  {
    year: '2024',
    title: '370+ Projects Milestone',
    desc: 'Celebrated completing over 370 projects with a growing portfolio of satisfied clients.',
    side: 'right',
  },
];

export default function AboutPage() {
  // Scroll reveal observer
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

  return (
    <>
      {/* Subpage Banner (Skanska Visual Impact Style) */}
      <section className="subpage-hero about-page-hero">
        <div className="container">
          <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>ABOUT MOASA HOUSING</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', textTransform: 'none' }}>
            About us
          </h1>
          <p style={{ maxWidth: '640px', fontSize: '18px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)', marginTop: '20px', fontWeight: 300 }}>
            Moasa Housing, Renovations &amp; Constructions uses knowledge and foresight to shape how people live, work, and connect. Built on over 20 years of excellence across East Africa.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumbs-nav" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumbs-list">
            <li><Link href="/">Home</Link></li>
            <li className="breadcrumbs-separator">/</li>
            <li style={{ color: 'var(--text-primary)' }}>About Us</li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1: WHO WE ARE */}
      <section id="who-we-are" className="jumbotron-block">
        <div className="container">
          <div className="jumbotron-grid">
            <div className="scroll-reveal">
              <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>01 / WHO WE ARE</div>
              <h2 className="jumbotron-heading">A Premier East African Building &amp; Engineering Partner</h2>
              <p className="jumbotron-intro">
                Moasa Housing, Renovations and Constructions is a dynamic, brisk company whose expertise lies in managing the construction process for renovating or building new facilities — from Healthcare to Commercial and Industrial markets. We commence by comprehending your project goals and budget constraints in their entirety. We then develop ingenious solutions to exceed your expectations.
              </p>
              <p className="jumbotron-intro" style={{ marginTop: '16px' }}>
                Our creative approach in consonance with our ability to bring a team of project-specific experts to your assignment whilst keeping costs in check forms the core of our Unique Selling Proposition.
              </p>
              <Link href="/contact" className="circle-bubble-btn">
                <span>Contact Our Kampala Headquarters</span>
                <div className="teaser-arrow-btn">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" stroke="currentColor" fill="none" strokeWidth="2.5" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="scroll-reveal">
              <div className="jumbotron-image-container">
                <Image
                  src="/hero_architecture.png"
                  alt="Moasa Construction Headquarters & Engineering Team"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR FOUNDATION */}
      <section id="our-foundation" className="section-padding" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-tag" style={{ color: '#C59B27', letterSpacing: '0.15em', fontWeight: 800 }}>OUR FOUNDATION</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#111111', textTransform: 'none', marginTop: '8px' }}>
              Built on <span style={{ color: '#C59B27' }}>Excellence</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#555555', fontWeight: 300, maxWidth: '680px', margin: '16px auto 0', lineHeight: '1.6' }}>
              Our commitment to sustainability, innovation, safety, and integrity defines who we are.
            </p>
          </div>

          <div className="foundation-grid">
            {FOUNDATION_PILLARS.map((pillar, i) => (
              <div key={i} className="foundation-card scroll-reveal">
                <div className="foundation-icon-circle">{pillar.icon}</div>
                <h3 className="foundation-title">{pillar.title}</h3>
                <p className="foundation-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR JOURNEY */}
      <section id="our-journey" className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ color: '#C59B27', letterSpacing: '0.15em', fontWeight: 800 }}>OUR JOURNEY</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#111111', textTransform: 'none', marginTop: '8px' }}>
              Milestones of Growth
            </h2>
            <p style={{ fontSize: '17px', color: '#555555', fontWeight: 300, maxWidth: '640px', margin: '16px auto 0', lineHeight: '1.6' }}>
              From our founding in Kampala to completing over 370 projects across East Africa.
            </p>
          </div>

          <div className="journey-vertical-timeline scroll-reveal">
            <div className="journey-line"></div>
            {JOURNEY_STEPS.map((step, i) => (
              <div key={i} className={`journey-item ${step.side}`}>
                <div className="journey-node"></div>
                <div className="journey-card">
                  <div className="journey-year">{step.year}</div>
                  <h3 className="journey-title">{step.title}</h3>
                  <p className="journey-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

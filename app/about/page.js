'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FOUNDATION_PILLARS = [
  {
    num: '01 / SAFETY',
    title: 'Uncompromising Safety',
    desc: 'Enforcing a zero-harm site culture across every project. We protect our workers, clients, and local communities with stringent risk assessment protocols.',
  },
  {
    num: '02 / QUALITY',
    title: 'Structural Precision',
    desc: 'Using premium materials, rigorous structural testing, and zero-defect craftsmanship to build enduring landmarks across residential and commercial sectors.',
  },
  {
    num: '03 / SUSTAINABILITY',
    title: 'Environmental Care',
    desc: 'Integrating energy-efficient design, eco-conscious materials, and passive ventilation systems that minimize environmental impact and reduce lifecycle costs.',
  },
  {
    num: '04 / INTEGRITY',
    title: 'Cost & Time Certainty',
    desc: 'Delivering transparent estimation, data-driven preconstruction planning, and strict milestone tracking — on budget, on time, every time.',
  },
];

const JOURNEY_STEPS = [
  {
    year: '2004',
    title: 'Founding in Kampala',
    desc: 'Moasa Housing was established in Kampala, Uganda, focusing on residential construction and high-grade structural renovations.',
  },
  {
    year: '2010',
    title: 'Commercial Expansion',
    desc: 'Expanded operational capacity into corporate headquarters, mixed-use commercial developments, and structural steel framing.',
  },
  {
    year: '2016',
    title: 'Regional Footprint',
    desc: 'Extended operations into South Sudan and Kenya, undertaking major highway civil infrastructure, stormwater networks, and multi-family complexes.',
  },
  {
    year: 'Today',
    title: 'Industry Leadership',
    desc: 'Operating from Communications House in Kampala with 150+ completed developments, driving turn-key innovation across East Africa.',
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
                Moasa Housing, Renovations &amp; Constructions is a leading construction and project development company with active operations across Uganda, South Sudan, and Kenya. Headquartered on the 8th Floor of Communications House in Kampala, we deliver exceptional residential, commercial, and industrial developments from initial planning to turn-key delivery.
              </p>
              <p className="jumbotron-intro" style={{ marginTop: '-16px' }}>
                We combine regional knowledge with international construction standards — ensuring that every residential flat, commercial complex, or civil highway network is built on time, on budget, and to the highest quality.
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
      <section id="our-foundation" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>02 / OUR FOUNDATION</div>
            <h2 className="section-title" style={{ fontSize: '36px', color: 'var(--text-primary)', textTransform: 'none' }}>
              Built on core engineering principles
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '640px', marginTop: '16px', lineHeight: '1.6' }}>
              Our foundation rests on four unshakeable pillars. We believe that building for a better society means creating infrastructure that protects people and endures across generations.
            </p>
          </div>

          <div className="foundation-grid">
            {FOUNDATION_PILLARS.map((pillar, i) => (
              <div key={i} className="foundation-card scroll-reveal">
                <div className="foundation-num">{pillar.num}</div>
                <h3 className="foundation-title">{pillar.title}</h3>
                <p className="foundation-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR JOURNEY */}
      <section id="our-journey" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag" style={{ color: 'var(--accent-orange)' }}>03 / OUR JOURNEY</div>
            <h2 className="section-title" style={{ fontSize: '36px', color: 'var(--text-primary)', textTransform: 'none' }}>
              Two decades of growth &amp; milestone developments
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '640px', marginTop: '16px', lineHeight: '1.6' }}>
              From our origins as a local residential builder in Kampala to managing complex multi-regional infrastructure projects across 3 East African countries.
            </p>
          </div>

          <div className="journey-timeline scroll-reveal">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={i} className="journey-step">
                <div className="journey-year">{step.year}</div>
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'all',
    label: 'All Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'preconstruction',
    label: 'Pre Construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'design-build',
    label: 'Design + Build',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'general-construction',
    label: 'General Construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: 'road-construction',
    label: 'Road Construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19L8 5" />
        <path d="M16 5l4 14" />
        <line x1="12" y1="6" x2="12" y2="8" />
        <line x1="12" y1="11" x2="12" y2="13" />
        <line x1="12" y1="16" x2="12" y2="19" />
      </svg>
    ),
  },
  {
    id: 'project-management',
    label: 'Project & Construction Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const SERVICE_CARDS = [
  {
    category: 'preconstruction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Site Feasibility & Soil Analysis',
    description: 'Comprehensive geotechnical surveys, land surveying, environmental assessments, and zoning analysis to establish project viability before any construction begins.',
  },
  {
    category: 'preconstruction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Budget Planning & Cost Engineering',
    description: 'Detailed quantity surveying, BIM 3D cost modeling, value engineering, and guaranteed maximum price estimates for full financial transparency.',
  },
  {
    category: 'preconstruction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Permit Acquisition & Compliance',
    description: 'KCCA building permit processing, NEMA environmental certificates, structural integrity approvals, and full regulatory coordination across Uganda.',
  },
  {
    category: 'design-build',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Architectural Design & Engineering',
    description: 'Complete architectural blueprinting, structural engineering, MEP systems design, and 3D visualization under a single integrated design team.',
  },
  {
    category: 'design-build',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Turnkey Project Delivery',
    description: 'End-to-end single-source project execution from concept design through construction to final handover, eliminating coordination delays.',
  },
  {
    category: 'design-build',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Interior Fit-Out & Finishing',
    description: 'Premium interior design execution, custom joinery, MEP finishing, flooring installations, and luxury material sourcing for turnkey spaces.',
  },
  {
    category: 'general-construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
    title: 'Commercial & Residential Construction',
    description: 'High-end apartments, hotel complexes, office towers, and mixed-use developments built with structural longevity and architectural elegance.',
  },
  {
    category: 'general-construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Hotel & Hospital Construction',
    description: 'Clean clinical facilities, outpatient blocks, specialized medical equipment installations, and luxury hospitality venues meeting international standards.',
  },
  {
    category: 'general-construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="13" y2="11" />
      </svg>
    ),
    title: 'Educational & Industrial Construction',
    description: 'School campuses, training centers, agricultural leadership facilities, and industrial plants designed for functional efficiency and community impact.',
  },
  {
    category: 'road-construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19L8 5" />
        <path d="M16 5l4 14" />
        <line x1="12" y1="6" x2="12" y2="8" />
        <line x1="12" y1="11" x2="12" y2="13" />
        <line x1="12" y1="16" x2="12" y2="19" />
      </svg>
    ),
    title: 'Highway & Access Road Construction',
    description: 'Heavy earthmoving, sub-grade compaction, asphalt concrete paving, and reinforced rigid road surfaces for highways and estate access routes.',
  },
  {
    category: 'road-construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Estate & Industrial Park Road Networks',
    description: 'Complete internal road networks for residential estates, industrial parks, and commercial developments including parking, kerbing, and signage.',
  },
  {
    category: 'road-construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Drainage & Culvert Systems',
    description: 'Stormwater management channels, reinforced culverts, retaining walls, and erosion control systems engineered for tropical weather conditions.',
  },
  {
    category: 'project-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Site Supervision & Safety Management',
    description: 'Full-time on-site supervision, OSHA and Uganda building code compliance enforcement, safety audits, and incident prevention protocols.',
  },
  {
    category: 'project-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Supply Chain & Material Logistics',
    description: 'Direct procurement of cement, steel, aggregate, and finishing materials with quarry-level relationships to secure pricing and guard against delays.',
  },
  {
    category: 'project-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Quality Assurance & Commissioning',
    description: 'Monthly milestone audits, structural integrity testing, budget tracking, punch-list management, and turnkey handoff coordination.',
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

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

  // Re-trigger scroll reveals when category changes
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredCards = activeCategory === 'all'
    ? SERVICE_CARDS
    : SERVICE_CARDS.filter(card => card.category === activeCategory);

  return (
    <>
      {/* Subpage Banner */}
      <section className="subpage-hero services-page-hero">
        <div className="container">
          <div className="section-tag" style={{ color: '#C59B27' }}>03 / CORE CAPABILITIES</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', textTransform: 'none' }}>
            Our Services
          </h1>
          <p style={{ maxWidth: '640px', fontSize: '18px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)', marginTop: '20px', fontWeight: 300 }}>
            Comprehensive design, construction, and management services delivered with high precision, safety, and budget certainty across East Africa.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumbs-nav" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumbs-list">
            <li><Link href="/">Home</Link></li>
            <li className="breadcrumbs-separator">/</li>
            <li style={{ color: 'var(--text-primary)' }}>Services</li>
          </ol>
        </div>
      </nav>

      {/* Services Split Layout: Left Tabs + Right Cards */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="services-split-layout">

            {/* Left Sidebar — Category Tabs */}
            <aside className="services-sidebar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`services-tab${activeCategory === cat.id ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="services-tab-icon">{cat.icon}</span>
                  <span className="services-tab-label">{cat.label}</span>
                </button>
              ))}
            </aside>

            {/* Right Content — Service Cards Grid */}
            <div className="services-content">
              <div className="services-cards-grid">
                {filteredCards.map((card, idx) => (
                  <div key={`${card.category}-${idx}`} className="service-card scroll-reveal">
                    <div className="service-card-icon">
                      {card.icon}
                    </div>
                    <h3 className="service-card-title">{card.title}</h3>
                    <p className="service-card-desc">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Action Banner */}
      <section id="build-with-us" className="build-with-us-banner">
        <div className="container">
          <div className="build-with-us-card scroll-reveal">
            <div className="build-with-us-content">
              <div className="build-with-us-tag">DISCUSS PARTNERSHIP</div>
              <h2 className="build-with-us-heading">Have a Scale Project in Mind?</h2>
              <p className="build-with-us-intro">
                Submit your detailed requirements to our underwriting estimators for design-build pricing and structural consultation.
              </p>
            </div>
            <div className="build-with-us-actions">
              <Link href="/request-quote" className="btn btn-primary">
                Request A Quote
              </Link>
              <Link href="/contact" className="circle-bubble-btn">
                <span>Contact Headquarters</span>
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
      </section>
    </>
  );
}

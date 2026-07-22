'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'all',
    label: 'All',
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
    notable: 'Nakasero Hill Commercial Complex, Entebbe Lakeside Residences',
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
    notable: 'Kololo Heights Apartments, Jinja Industrial Park',
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
    notable: 'Kampala Business District Tower, Mukono Commercial Centre',
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
    notable: 'Bugolobi Premium Villas, Ntinda Mixed-Use Complex',
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
    notable: 'Muyenga Hilltop Residences, Lubowa Estate Development',
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
    notable: 'Serena Conference Centre Fit-Out, Kololo Executive Suites',
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
    notable: 'Emin Pasha Hotel, Shaba Village Kenya',
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
    notable: 'Moyo General Hospital, Emin Pasha Hotel',
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
    notable: 'KOICA Farmers\' Center, Ogoko & Apo Schools',
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
    notable: 'Juba-Nimule Highway Sections, Kampala Northern Bypass Access',
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
    notable: 'Lubowa Estate Roads, Namanve Industrial Park Access',
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
    notable: 'Mukono District Drainage, Entebbe Municipal Culverts',
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
    notable: 'All Active Moasa Project Sites',
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
    notable: 'Tororo Cement Partnership, Mukono Quarry Supply Lines',
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
    notable: 'Moyo Hospital Commissioning, KOICA Center Handover',
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
          <div className="section-tag">03 / CORE CAPABILITIES</div>
          <h1 className="section-title">
            OUR COMPREHENSIVE<br /><span className="text-accent">BUILD SERVICES</span>
          </h1>
        </div>
      </section>

      {/* Services Split Layout: Left Tabs + Right Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
                    <div className="service-card-notable">
                      <strong>Notable:</strong> {card.notable}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Action Banner */}
      <section className="section-padding cta-section">
        <div className="container">
          <div className="cta-container scroll-reveal">
            <div className="section-tag">DISCUSS PARTNERSHIP</div>
            <h2>HAVE A SCALE PROJECT IN MIND?</h2>
            <p>
              Submit your detailed requirements to our underwriting estimators for design-build pricing.
            </p>
            <Link href="/request-quote" className="btn btn-primary btn-large">
              START ESTIMATION PROCESS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

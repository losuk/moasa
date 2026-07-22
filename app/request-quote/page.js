'use client';

import { useState } from 'react';

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.target.reset();
    }, 1500);
  };

  return (
    <>
      {/* Subpage Banner */}
      <section className="subpage-hero quote-page-hero">
        <div className="container">
          <div className="section-tag">06 / PROJECT ESTIMATION</div>
          <h1 className="section-title">
            REQUEST A<br /><span className="text-accent">PROJECT QUOTE</span>
          </h1>
        </div>
      </section>

      {/* RFP Intake Form */}
      <section className="rfp-section section-padding">
        <div className="container container-narrow">
          <div className="section-header text-center">
            <div className="section-tag">PROJECT UNDERWRITING</div>
            <h2 className="section-title">DESIGN-BUILD INTAKE</h2>
            <p className="section-intro">
              Provide project parameters, sizing, and details to initiate a cost model review with our estimation team.
            </p>
          </div>

          <form className="rfp-form-element" onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="rfp-name">FULL NAME *</label>
                <input type="text" id="rfp-name" required placeholder="E.g., Marcus Vance" />
              </div>

              <div className="form-group">
                <label htmlFor="rfp-company">ORGANIZATION *</label>
                <input type="text" id="rfp-company" required placeholder="E.g., Vanguard Developments" />
              </div>

              <div className="form-group">
                <label htmlFor="rfp-email">BUSINESS EMAIL *</label>
                <input type="email" id="rfp-email" required placeholder="E.g., m.vance@vanguard.com" />
              </div>

              <div className="form-group">
                <label htmlFor="rfp-phone">PHONE NUMBER</label>
                <input type="tel" id="rfp-phone" placeholder="E.g., +1 (555) 019-2834" />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="rfp-segment">PROJECT SEGMENT *</label>
                <select id="rfp-segment" required defaultValue="">
                  <option value="" disabled>Select Segment Type</option>
                  <option value="industrial">Industrial & Logistics</option>
                  <option value="commercial">Commercial Headquarters</option>
                  <option value="residential">High-Density Residential</option>
                  <option value="mixed">Mixed-Use Urban Plaza</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="rfp-scale">ESTIMATED SCALE (SQ. FT.) *</label>
                <select id="rfp-scale" required defaultValue="">
                  <option value="" disabled>Select Area Scale</option>
                  <option value="under50k">Under 50,000 sq. ft.</option>
                  <option value="50k-150k">50,000 – 150,000 sq. ft.</option>
                  <option value="150k-500k">150,000 – 500,000 sq. ft.</option>
                  <option value="over500k">Over 500,000 sq. ft. (Mega scale)</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="rfp-details">PROJECT SCOPE SUMMARY</label>
                <textarea id="rfp-details" rows="5" placeholder="Outline specific clear heights, loading dock configs, key timelines or design briefs..." />
              </div>

            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary btn-large btn-full" disabled={loading}>
                {loading ? 'UNDERWRITING ANALYSIS IN PROGRESS...' : 'SUBMIT REQUEST FOR QUOTE'}
              </button>
            </div>

            {submitted && (
              <div className="success-message visible">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                <span>QUOTE INTAKE SUBMITTED SUCCESSFULLY. A ESTIMATOR WILL RESPOND IN 24 HOURS.</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

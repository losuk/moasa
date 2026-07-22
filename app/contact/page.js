'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.target.reset();
    }, 1200);
  };

  return (
    <>
      {/* Subpage Banner */}
      <section className="subpage-hero contact-page-hero">
        <div className="container">
          <div className="section-tag">05 / GET IN TOUCH</div>
          <h1 className="section-title">
            CONTACT OUR<br /><span className="text-accent">REGIONAL OFFICES</span>
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2-cols">
            
            {/* Offices & Contacts */}
            <div>
              <div className="section-tag">REGIONAL OFFICE HUBS</div>
              <h2 style={{ fontSize: '36px', marginBottom: '40px', color: 'var(--text-primary)' }}>
                COMMUNICATION CHANNELS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>OFFICE ADDRESS</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    8th Floor, Communications House<br />
                    Kampala, Uganda
                  </p>
                </div>

                <div style={{ borderLeft: '3px solid var(--text-primary)', paddingLeft: '20px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>WORKING HOURS</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    Mon-Fri: 8am - 6pm
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '30px', marginTop: '10px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>EMAIL</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    General Inquiries: <strong>info@moasa.com</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <div className="section-tag">SEND A DIRECT MESSAGE</div>
              <form className="rfp-form-element" style={{ marginTop: '30px' }} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  <div className="form-group">
                    <label htmlFor="contact-name">YOUR NAME *</label>
                    <input type="text" id="contact-name" required placeholder="Marcus Vance" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                    <input type="email" id="contact-email" required placeholder="m.vance@vanguard.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">YOUR INQUIRY *</label>
                    <textarea id="contact-message" rows="5" required placeholder="Write your message here..." />
                  </div>

                  <button type="submit" className="btn btn-primary btn-large btn-full" disabled={loading}>
                    {loading ? 'SENDING...' : 'SEND INQUIRY'}
                  </button>
                  
                  {submitted && (
                    <div className="success-message visible" style={{ marginTop: '10px' }}>
                      <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                      <span>MESSAGE SENT. WE WILL RESPOND SHORTLY.</span>
                    </div>
                  )}

                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

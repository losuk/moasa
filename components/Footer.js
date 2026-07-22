'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)', padding: '80px 0 40px' }}>
      <div className="footer-grid container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr', gap: '50px', marginBottom: '60px' }}>

        <div className="footer-brand-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="MOASA HOUSING" width={204} height={56} className="logo-image" style={{ filter: 'grayscale(1) brightness(0.2)' }} />
          </Link>
          <p className="footer-tagline" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', fontWeight: 300 }}>
            World-class projects driving essential services, sustainable growth, and structural excellence with innovative solutions across diverse sectors.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '24px', textTransform: 'uppercase' }}>DIRECTORIES</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'var(--transition-fast)' }}>Home</Link></li>
            <li><Link href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'var(--transition-fast)' }}>About Us</Link></li>
            <li><Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'var(--transition-fast)' }}>Services</Link></li>
            <li><Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'var(--transition-fast)' }}>Contact</Link></li>
            <li><Link href="/request-quote" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'var(--transition-fast)' }}>Request Quote</Link></li>
          </ul>
        </div>

        <div className="footer-offices-col">
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '24px', textTransform: 'uppercase' }}>OFFICE</h4>
          <div className="office-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="office-item">
              <h5 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.05em' }}>KAMPALA HQ</h5>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5', fontWeight: 300 }}>8th Floor, Communications House<br />Kampala, Uganda</p>
            </div>
            <div className="office-item">
              <h5 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.05em' }}>WORKING HOURS</h5>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5', fontWeight: 300 }}>Mon-Fri: 8am - 6pm</p>
            </div>
          </div>
        </div>

        <div className="footer-contact-col">
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '24px', textTransform: 'uppercase' }}>COMMUNICATIONS</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', fontWeight: 300, marginBottom: '20px' }}>
            <strong>Email:</strong> <a href="mailto:info@moasa.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>info@moasa.com</a>
          </p>
          <div className="footer-socials" style={{ display: 'flex', gap: '15px' }}>
            <a href="#" aria-label="LinkedIn" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}>LN</a>
            <a href="#" aria-label="Instagram" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}>IG</a>
            <a href="#" aria-label="X" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}>X</a>
          </div>
        </div>

      </div>

      <div className="footer-copyright container" style={{ borderTop: '1px solid var(--border)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: 500 }}>&copy; 2026 MOASA HOUSING. ALL RIGHTS RESERVED.</p>
        <a
          href="#"
          className="scroll-to-top"
          style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

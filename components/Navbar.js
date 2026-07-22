'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [transparent, setTransparent] = useState(isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setTransparent(false);
      return;
    }

    const handleScroll = () => {
      setTransparent(window.scrollY <= 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const headerClass = `site-header${transparent ? ' nav-transparent' : ''}`;
  const menuClass = `nav-menu${menuOpen ? ' active' : ''}`;
  const toggleClass = `menu-toggle${menuOpen ? ' active' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-container">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="MOASA HOUSING" width={204} height={56} className="logo-image" priority />
        </Link>

        <nav className={menuClass}>
          <Link href="/" className="nav-link" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>HOME</Link>
          <Link href="/about" className="nav-link" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>ABOUT US</Link>
          <Link href="/services" className="nav-link" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>SERVICES</Link>
          <Link href="/contact" className="nav-link" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>CONTACT</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            aria-label="Search" 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              padding: '6px', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-fast)'
            }}
            onClick={() => alert('Search functionality coming soon!')}
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
              <path d="M12.5 21C7.813 21 4 17.186 4 12.5 4 7.813 7.813 4 12.5 4c4.686 0 8.5 3.813 8.5 8.5 0 4.686-3.814 8.5-8.5 8.5Zm0-15A6.508 6.508 0 0 0 6 12.5c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5S16.084 6 12.5 6Zm8.207 13.293-1.414 1.414 7 7 1.414-1.414-7-7Z"></path>
            </svg>
          </button>
          <Link href="/request-quote" className="btn btn-outline nav-cta">REQUEST QUOTE</Link>
        </div>

        <button
          className={toggleClass}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

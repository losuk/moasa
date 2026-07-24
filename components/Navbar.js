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

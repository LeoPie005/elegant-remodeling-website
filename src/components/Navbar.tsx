'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <Link href="/" className="nav-brand">
          <img src="/photos/website-icon/icon2.jpg" alt="Elegant Remodeling Logo" />
          <div className="nav-brand-text">
            <span className="nav-brand-name">Elegant</span>
            <span className="nav-brand-tagline">Remodeling &amp; Construction</span>
          </div>
        </Link>

        <div className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>

        <div
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}

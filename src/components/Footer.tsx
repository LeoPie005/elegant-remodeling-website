import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-brand">
              <img src="/photos/website-icon/icon2.jpg" alt="Elegant Remodeling Logo" />
              <div className="nav-brand-text">
                <span className="nav-brand-name" style={{ color: 'var(--white)' }}>Elegant</span>
                <span className="nav-brand-tagline">Remodeling &amp; Construction</span>
              </div>
            </Link>
            <p>Houston&apos;s trusted remodeling and construction experts. Delivering exceptional craftsmanship and quality for over 25 years.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services">Kitchen Remodeling</Link>
            <Link href="/services">Bathroom Renovation</Link>
            <Link href="/services">Room Additions</Link>
            <Link href="/services">Interior Remodeling</Link>
            <Link href="/services">Exterior &amp; Roofing</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:8329334190">(832) 933-4190</a>
            <Link href="/contact">Get a Free Quote</Link>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Elegant Remodeling &amp; Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

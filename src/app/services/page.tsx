import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our full range of remodeling and construction services — kitchens, bathrooms, additions, commercial builds, fire damage restoration, and more.',
};

const servicesList = [
  'Demolition', 'Framing & Siding', 'Roofing', 'Fences', 'Sheetrock', 'Cabinets',
  'Tape & Float', 'Texture', 'Painting', 'Electrical', 'Plumbing', 'Doors',
  'Trim', 'Floors', 'Air Conditioning', 'Concrete',
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>Services</span></div>
          <h1>Our <span className="accent">Services</span></h1>
          <p>From total turn-key jobs to specialized renovations, we handle every phase of commercial and residential construction.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2>Comprehensive Remodeling &amp; Construction</h2>
              <p>Narrow down your design and remodeling choices for kitchen and bath renovations, exterior renovations, additions, and more.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-grid" style={{ marginBottom: 56 }}>
              <div className="about-text">
                <span className="section-label">Specialty</span>
                <h3>Kitchen Remodeling</h3>
                <p>The kitchen is the family&apos;s hub of activity as well as the core entertaining space. A successful kitchen renovation will take into account your family&apos;s needs and lifestyle to create a functional and enjoyable space.</p>
                <p>An Elegant Remodeling designer reviews design and remodeling choices with you and helps you develop the best plan for your new kitchen.</p>
                <Link href="/portfolio" className="btn btn-green" style={{ marginTop: 20 }}>View Kitchen Portfolio</Link>
              </div>
              <div className="about-image-wrap">
                <img src="/photos/kitchen-photos/87516190.jpg" alt="Kitchen Remodeling" style={{ height: 340 }} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-grid" style={{ marginBottom: 56 }}>
              <div className="about-image-wrap" style={{ order: 0 }}>
                <img src="/photos/bathrooms/89650377.jpg" alt="Bathroom Renovation" style={{ height: 340 }} />
              </div>
              <div className="about-text" style={{ order: 1 }}>
                <span className="section-label">Specialty</span>
                <h3>Bathroom Renovation</h3>
                <p>Today&apos;s homeowners expect more from their bathrooms. Whether you want to add a new master bath, renovate a powder room, or install a kids&apos; bathroom, our designers guide you through the process of acquiring the bathroom of your dreams.</p>
                <Link href="/portfolio" className="btn btn-green" style={{ marginTop: 20 }}>View Bathroom Portfolio</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-grid" style={{ marginBottom: 56 }}>
              <div className="about-text">
                <span className="section-label">Specialty</span>
                <h3>Room Additions</h3>
                <p>Whether you&apos;re considering a first-floor master suite, a two-story addition, an in-law suite, a sunroom, or a family room addition, Elegant Remodeling &amp; Construction helps you plan and execute the project.</p>
                <p>All designers are industry certified and have experience working on projects like yours. Let them review your renovation options and explain how to maximize your living space.</p>
                <Link href="/portfolio" className="btn btn-green" style={{ marginTop: 20 }}>View Portfolio</Link>
              </div>
              <div className="about-image-wrap">
                <img src="/photos/exteriors/87632253.jpg" alt="Room Additions" style={{ height: 340 }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-header center">
              <span className="section-label">Complete Services</span>
              <h2>Everything Under One Roof</h2>
              <p>Besides total turn-key jobs, we offer a comprehensive range of construction and renovation services.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="fire-banner">
              <div className="fire-banner-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22c-4.97 0-9-2.24-9-5v-3.5c0-2.5 2-4.5 4-6 .5-.4 1.2.1 1 .8-.3 1.2.5 2.2 1.5 2.2.7 0 1.2-.5 1.5-1 1-2 3-5 3-8 0 0 4 3 4 8.5S17 18 12 22z" /></svg>
              </div>
              <div>
                <h3>Complete Restoration of Fire Damaged Property</h3>
                <p>Full-service fire damage restoration, from structural repair to complete interior and exterior reconstruction.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="services-list-grid">
              {servicesList.map((s) => (
                <div key={s} className="service-list-item">
                  <div className="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-green cta-section">
        <div className="container"><ScrollReveal><h2>Let&apos;s Discuss Your Project</h2><p>Contact Al Soto for a free consultation and let us bring your vision to life.</p><div className="cta-buttons"><Link href="/contact" className="btn btn-red">Schedule Consultation</Link><a href="tel:8329334190" className="btn btn-outline-white">Call (832) 933-4190</a></div></ScrollReveal></div>
      </section>
    </>
  );
}

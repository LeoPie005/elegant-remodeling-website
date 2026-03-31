import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ImageGallery from '@/components/ImageGallery';
import AnimatedCounter from '@/components/AnimatedCounter';

const aboutGalleryImages = [
  '/photos/interiors/87452291.jpg',
  '/photos/interiors/86526312.jpg',
  '/photos/interiors/86525931.jpg',
  '/photos/interiors/87452950.jpg',
  '/photos/interiors/88014266.jpg',
  '/photos/interiors/dv619080.jpg',
];

const starSvg = <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const stars = <div className="testimonial-stars">{[...Array(5)].map((_, i) => <span key={i}>{starSvg}</span>)}</div>;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <ScrollReveal className="hero-text">
              <span className="section-label">Elegant Remodeling &amp; Construction</span>
              <h1>Transforming Spaces with <span className="accent">Precision</span> &amp; Care</h1>
              <p className="hero-description">From complete home renovations to commercial construction, we deliver exceptional craftsmanship that exceeds expectations. Quality you can see. Results you can trust.</p>
              <div className="hero-buttons">
                <Link href="/portfolio" className="btn btn-red">View Our Work</Link>
                <Link href="/contact" className="btn btn-outline">Get a Free Quote</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="hero-images">
              <div className="hero-img"><img src="/photos/kitchen-photos/87516190.jpg" alt="Kitchen Remodel" /></div>
              <div className="hero-img"><img src="/photos/bathrooms/89650377.jpg" alt="Bathroom Remodel" /></div>
              <div className="hero-img"><img src="/photos/exteriors/83802508.jpg" alt="Exterior Project" /></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Floating Card */}
      <div className="stats-card-wrap">
        <div className="stats-card">
          <div className="stat-item">
            <AnimatedCounter end={25} suffix="+" duration={2000} />
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={500} suffix="+" duration={2200} />
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={100} suffix="%" duration={1800} />
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={1} suffix=" yr" duration={800} />
            <div className="stat-label">Labor Warranty</div>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <section className="section" id="about-preview">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal className="about-text">
              <div className="section-header">
                <span className="section-label">About Us</span>
                <h2>Craftsmanship That Speaks for Itself</h2>
              </div>
              <p>With so many home renovation options, it is helpful to see the choices that other homeowners have made. At Elegant Remodeling &amp; Construction, we bring decades of experience to every project — from total turn-key jobs to specialized renovations.</p>
              <p>Our industry-certified designers guide you through every step, ensuring your vision becomes reality with precision, quality, and care.</p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                  <div><h4>Licensed &amp; Insured</h4><p>Fully certified professionals</p></div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="white" strokeWidth="2" /></svg></div>
                  <div><h4>Quality Guaranteed</h4><p>1-year warranty on all labor</p></div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" fill="none" stroke="white" strokeWidth="2" /></svg></div>
                  <div><h4>On-Time Delivery</h4><p>Committed to your schedule</p></div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg></div>
                  <div><h4>Expert Team</h4><p>Skilled craftsmen on every project</p></div>
                </div>
              </div>
              <Link href="/about" className="btn btn-outline" style={{ marginTop: 28 }}>Learn More About Us</Link>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                <ImageGallery images={aboutGalleryImages} alts={aboutGalleryImages.map((_, i) => `Interior project ${i + 1}`)} />
                <div className="about-badge">
                  <div className="stat-number">25+</div>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-header center">
              <span className="section-label">What We Do</span>
              <h2>Complete Remodeling &amp; Construction</h2>
              <p>Besides total turn-key jobs, we specialize in every phase of commercial &amp; residential construction.</p>
            </div>
          </ScrollReveal>
          <div className="services-grid">
            {[
              { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>, title: 'Kitchen Remodeling', desc: 'Transform your kitchen into a functional, beautiful hub of activity that reflects your family\'s lifestyle.' },
              { icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></>, title: 'Bathroom Renovation', desc: 'From master baths to powder rooms, we create the bathroom of your dreams with premium fixtures and finishes.' },
              { icon: <><rect x="2" y="7" width="20" height="15" rx="2" /><polyline points="17 2 12 7 7 2" /></>, title: 'Room Additions', desc: 'Expand your living space with master suites, family rooms, sunrooms, and in-law suites designed for your needs.' },
              { icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />, title: 'Commercial Construction', desc: 'Professional commercial builds, tenant improvements, and retail renovations completed on time, on budget.' },
              { icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />, title: 'Interior Remodeling', desc: 'Complete interior transformations including framing, sheetrock, flooring, painting, and finish carpentry.' },
              { icon: <><path d="M3 9l9-7 9 7" /><path d="M21 9v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9" /></>, title: 'Exterior & Roofing', desc: 'Siding, roofing, fences, concrete, and complete exterior renovation to boost your property\'s curb appeal.' },
            ].map((s) => (
              <ScrollReveal key={s.title}>
                <div className="service-card">
                  <div className="service-icon"><svg viewBox="0 0 24 24">{s.icon}</svg></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/services" className="btn btn-green">View All Services</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header center">
              <span className="section-label">Testimonials</span>
              <h2>What Our Clients Say</h2>
              <p>Hear from the homeowners and businesses who trust Elegant Remodeling.</p>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {[
              { text: 'I would like to take this opportunity to thank you for the fine job that was done at our new store location in Pasadena. Work was completed on time and you fulfilled our contract to the very last detail. In many cases, your crew went overboard and did the little extras to ensure a quality job.', name: 'Joe Reimer', org: 'Sherman Williams', initials: 'JR' },
              { text: 'Mr. Soto has on many occasions, done various jobs for our company. This involves professional floor tile work and ceiling tile, electrical and plumbing. I value and respect the work and the way Mr. Soto backs up his contracts. I think highly of Mr. Soto and recommend his company and services.', name: 'Hank Leal', org: "Church's Fried Chicken, Inc.", initials: 'HL' },
              { text: 'The work was done on time and to my complete satisfaction. The first thing that impressed me was the attention to maintaining the cleanliness of my home. When the work was done, all the areas were cleaned and all debris was taken away. Thank you for the beautiful bathroom!', name: 'Helen Stout', org: 'Homeowner', initials: 'HS' },
            ].map((t) => (
              <ScrollReveal key={t.name}>
                <div className="testimonial-card">
                  {stars}
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div><h4>{t.name}</h4><p>{t.org}</p></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-green cta-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Ready to Start?</span>
            <h2>Let&apos;s Build Something Beautiful Together</h2>
            <p>Contact Al Soto today for a free consultation and let us bring your vision to life.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-red">Schedule Consultation</Link>
              <a href="tel:8329334190" className="btn btn-outline-white">Call (832) 933-4190</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

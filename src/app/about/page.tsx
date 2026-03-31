import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ImageGallery from '@/components/ImageGallery';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Elegant Remodeling & Construction — Houston\'s trusted experts with over 25 years of experience in residential and commercial construction.',
};

const storyGallery = [
  '/photos/interiors/86526312.jpg',
  '/photos/kitchen-photos/87587075.jpg',
  '/photos/bathrooms/92573218.jpg',
  '/photos/exteriors/86501211.jpg',
  '/photos/interiors/86526453.jpg',
  '/photos/kitchen-photos/87640933.jpg',
];

const starSvg = <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const stars = <div className="testimonial-stars">{[...Array(5)].map((_, i) => <span key={i}>{starSvg}</span>)}</div>;

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</span></div>
          <h1>About <span className="accent">Elegant</span></h1>
          <p>Over 25 years of dedicated craftsmanship, transforming homes and commercial spaces across Houston and beyond.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal className="about-text">
              <div className="section-header">
                <span className="section-label">Our Story</span>
                <h2>Building Dreams, Exceeding Expectations</h2>
              </div>
              <p>Elegant Remodeling &amp; Construction has been Houston&apos;s trusted partner for home and commercial renovations for over two decades. Founded by Al Soto, our company is built on the principles of quality workmanship, honest communication, and unwavering commitment to client satisfaction.</p>
              <p>We understand that remodeling your home or business is a significant investment. That&apos;s why we take the time to understand your vision, work within your budget, and deliver results that exceed your expectations — on time and to the very last detail.</p>
              <p>From complete residential renovations to commercial tenant improvements, our team of skilled craftsmen and certified designers bring expertise and attention to detail that sets us apart. Every project is backed by our industry-leading 1-year warranty on all labor.</p>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                <ImageGallery images={storyGallery} alts={['Interior', 'Kitchen', 'Bathroom', 'Exterior', 'Living Room', 'Kitchen']} interval={5000} />
                <div className="about-badge">
                  <div className="stat-number">25+</div>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Our Process</span>
              <h2>What to Expect During Your Remodeling Project</h2>
              <p>Each project follows specific steps designed to ensure you understand all of your renovation choices and can make informed decisions.</p>
            </div>
          </ScrollReveal>
          <div className="process-timeline">
            {[
              { n: '1', title: 'Initial Consultation', text: 'During this first step, you meet with the designer for a free consultation. At the project site, you will discuss the project\'s goals and priorities and will brainstorm design and remodeling choices. The consultant will describe the design and construction process and will discuss a preliminary budget with you.' },
              { n: '2', title: 'Preliminary Design', text: 'The designer measures and photographs the existing space and investigates the mechanical and structural systems. Zoning restrictions and other regulations are investigated. Your designer draws up plans for the existing space and explores various renovation options, creating preliminary layouts and plans, and outlining potential budgets.' },
              { n: '3', title: 'Detailed Planning', text: 'The designer will refine the design, selecting locations for windows and doors and deciding on the size and layouts of rooms. All professionals involved will conduct an on-site review. The designer will develop 1/4" floor plans and elevations. Elegant Remodeling draws up a comprehensive contract with start/completion dates, a schedule of payments, and a fixed price amount.' },
              { n: '4', title: 'Construction', text: 'Elegant Remodeling & Construction obtains the necessary permits. As construction begins, clients have weekly meetings with the project manager. The project manager will control dust and mess, order materials, supervise the crew, and coordinate subcontractors and inspections. When complete, a final walk-through is conducted. All projects are covered by a 1-year warranty on all labor.' },
            ].map((step) => (
              <ScrollReveal key={step.n} className="process-step">
                <div className="process-step-marker">
                  <div className="process-step-number">{step.n}</div>
                  <div className="process-step-line" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal><div className="section-header center"><span className="section-label">Testimonials</span><h2>Words From Our Clients</h2></div></ScrollReveal>
          <div className="testimonials-grid">
            <ScrollReveal><div className="testimonial-card">{stars}<p className="testimonial-text">I would like to take this opportunity to thank you for the fine job that was done at our new store location in Pasadena. Work was completed on time and you fulfilled our contract to the very last detail. In many cases, your crew went overboard and did the little extras to ensure a quality job. Thanks again, and I look forward to having you and your crew take care of our remodeling needs in the future.</p><div className="testimonial-author"><div className="testimonial-avatar">JR</div><div><h4>Joe Reimer</h4><p>Sherman Williams</p></div></div></div></ScrollReveal>
            <ScrollReveal><div className="testimonial-card">{stars}<p className="testimonial-text">Mr. Soto has on many occasions, done various jobs for our company. This involves professional floor tile work and ceiling tile, electrical and plumbing. I value and respect the work and the way Mr. Soto backs up his contracts. I think highly of Mr. Soto and recommend his company and services.</p><div className="testimonial-author"><div className="testimonial-avatar">HL</div><div><h4>Hank Leal</h4><p>Church&apos;s Fried Chicken, Inc.</p></div></div></div></ScrollReveal>
          </div>
          <ScrollReveal><div className="testimonial-card" style={{ maxWidth: 860, margin: '24px auto 0' }}>{stars}<p className="testimonial-text">I wish to thank you for a job well done in the remodel of my bathroom. The first thing that impressed me was the attention to maintaining the cleanliness of my home. Before even beginning work, you and two of your workers completely covered my tile dining room floor with a heavy paper so that it could be kept clean. Then a plastic walkway was made from that area to the garage.</p><p className="testimonial-text" style={{ marginTop: -4 }}>The next thing that impressed me was the attention to the work by the two workers. They came each day with an agenda and did not stop until that work was done. They communicated when there were problems and wanted my approval before proceeding. The work was done on time and to my complete satisfaction. Thank you for the beautiful bathroom that I had dreamed about for years!</p><div className="testimonial-author"><div className="testimonial-avatar">HS</div><div><h4>Helen Stout</h4><p>Homeowner</p></div></div></div></ScrollReveal>
        </div>
      </section>

      <section className="section-green cta-section">
        <div className="container"><ScrollReveal><h2>Ready to Start Your Project?</h2><p>Contact Al Soto for a free consultation and let us bring your vision to life.</p><div className="cta-buttons"><Link href="/contact" className="btn btn-red">Schedule Consultation</Link><a href="tel:8329334190" className="btn btn-outline-white">Call (832) 933-4190</a></div></ScrollReveal></div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Lightbox from '@/components/Lightbox';

const categories = [
  {
    id: 'kitchens', title: 'Kitchens', count: '7 photos',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    images: ['/photos/kitchen-photos/80448033.jpg', '/photos/kitchen-photos/87452955.jpg', '/photos/kitchen-photos/87516190.jpg', '/photos/kitchen-photos/87587075.jpg', '/photos/kitchen-photos/87640933.jpg', '/photos/kitchen-photos/87756972.jpg', '/photos/kitchen-photos/89689822.jpg'],
  },
  {
    id: 'bathrooms', title: 'Bathrooms', count: '6 photos',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></>,
    images: ['/photos/bathrooms/200512883-001.jpg', '/photos/bathrooms/78293179.jpg', '/photos/bathrooms/86491483.jpg', '/photos/bathrooms/89650375.jpg', '/photos/bathrooms/89650377.jpg', '/photos/bathrooms/92573218.jpg'],
  },
  {
    id: 'interiors', title: 'Interiors', count: '7 photos',
    icon: <><rect x="2" y="7" width="20" height="15" rx="2" /><polyline points="17 2 12 7 7 2" /></>,
    images: ['/photos/interiors/86525931.jpg', '/photos/interiors/86526312.jpg', '/photos/interiors/86526453.jpg', '/photos/interiors/87452291.jpg', '/photos/interiors/87452950.jpg', '/photos/interiors/88014266.jpg', '/photos/interiors/dv619080.jpg'],
  },
  {
    id: 'exteriors', title: 'Exteriors', count: '7 photos',
    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />,
    images: ['/photos/exteriors/80508845.jpg', '/photos/exteriors/83802508.jpg', '/photos/exteriors/86488266.jpg', '/photos/exteriors/86501211.jpg', '/photos/exteriors/87451827.jpg', '/photos/exteriors/87632253.jpg', '/photos/exteriors/89211415.jpg'],
  },
  {
    id: 'additions', title: 'Additions', count: 'Coming soon',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></>,
    images: [],
  },
];

const searchIcon = <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const toggle = (id: string) => setActiveCategory((prev) => (prev === id ? null : id));

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>Portfolio</span></div>
          <h1>Our <span className="accent">Portfolio</span></h1>
          <p>Previewing completed projects can help you decide which remodeling options are best for you.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Our Work</span>
              <h2>Explore Completed Projects</h2>
              <p>Click any category to expand the gallery. Click any photo for a closer look.</p>
            </div>
          </ScrollReveal>

          <div className="portfolio-categories">
            {categories.map((cat) => (
              <ScrollReveal key={cat.id}>
                <div className={`portfolio-category${activeCategory === cat.id ? ' active' : ''}`}>
                  <div className="portfolio-category-header" onClick={() => toggle(cat.id)}>
                    <div className="portfolio-category-header-left">
                      <div className="portfolio-category-icon"><svg viewBox="0 0 24 24">{cat.icon}</svg></div>
                      <div><h3>{cat.title}</h3><span className="meta">{cat.count}</span></div>
                    </div>
                    <div className="portfolio-toggle"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
                  </div>
                  <div className="portfolio-gallery">
                    <div className="portfolio-gallery-inner">
                      {cat.images.length > 0 ? cat.images.map((img, i) => (
                        <div key={img} className="gallery-item" onClick={() => setLightbox({ images: cat.images, index: i })}>
                          <img src={img} alt={`${cat.title} ${i + 1}`} loading="lazy" />
                          <div className="overlay">{searchIcon}</div>
                        </div>
                      )) : (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '36px 0', color: 'var(--medium-gray)' }}>
                          <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>Addition photos coming soon!</p>
                          <p style={{ fontSize: '0.85rem', marginTop: 4 }}>Contact us to learn about our addition projects.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-green cta-section">
        <div className="container"><ScrollReveal><h2>Like What You See?</h2><p>Contact us today for a free consultation and let&apos;s bring your renovation vision to life.</p><div className="cta-buttons"><Link href="/contact" className="btn btn-red">Get a Free Quote</Link><a href="tel:8329334190" className="btn btn-outline-white">Call (832) 933-4190</a></div></ScrollReveal></div>
      </section>

      {lightbox && <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
    </>
  );
}

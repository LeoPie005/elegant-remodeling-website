'use client';

import { useState, useEffect, useCallback } from 'react';

interface ImageGalleryProps {
  images: string[];
  alts?: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageGallery({ images, alts, autoPlay = true, interval = 4000 }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return (
    <div className="image-gallery">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alts?.[i] || `Gallery image ${i + 1}`}
          className={i === current ? 'active' : ''}
        />
      ))}

      <button className="gallery-nav-btn prev" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="gallery-nav-btn next" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
      </button>

      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

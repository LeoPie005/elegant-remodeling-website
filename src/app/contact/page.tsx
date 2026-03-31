'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</span></div>
          <h1>Get In <span className="accent">Touch</span></h1>
          <p>Ready to start your project? Contact Al Soto for a free consultation.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Reach out and we&apos;ll respond as soon as we can.</p>
                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                    <div className="contact-detail-text"><h4>Phone</h4><a href="tel:8329334190">(832) 933-4190</a></div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                    <div className="contact-detail-text"><h4>Service Area</h4><p>Houston, TX &amp; Surrounding Areas</p></div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                    <div className="contact-detail-text"><h4>Business Hours</h4><p>Mon – Fri: 7:00 AM – 6:00 PM<br />Sat: 8:00 AM – 2:00 PM</p></div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                    <div className="contact-detail-text"><h4>Owner</h4><p>Al Soto</p></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="contact-form">
                {!submitted ? (
                  <>
                    <h3>Send Us a Message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group"><label htmlFor="firstName">First Name</label><input type="text" id="firstName" placeholder="John" required /></div>
                        <div className="form-group"><label htmlFor="lastName">Last Name</label><input type="text" id="lastName" placeholder="Doe" required /></div>
                      </div>
                      <div className="form-row">
                        <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" placeholder="john@example.com" required /></div>
                        <div className="form-group"><label htmlFor="phone">Phone</label><input type="tel" id="phone" placeholder="(555) 123-4567" /></div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Service Interested In</label>
                        <select id="service">
                          <option value="">Select a service...</option>
                          <option value="kitchen">Kitchen Remodeling</option>
                          <option value="bathroom">Bathroom Renovation</option>
                          <option value="addition">Room Addition</option>
                          <option value="interior">Interior Remodeling</option>
                          <option value="exterior">Exterior Renovation</option>
                          <option value="commercial">Commercial Construction</option>
                          <option value="fire">Fire Damage Restoration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group"><label htmlFor="message">Tell Us About Your Project</label><textarea id="message" placeholder="Describe your project, goals, timeline..." rows={5} required /></div>
                      <button type="submit" className="btn btn-red">Send Message</button>
                    </form>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" style={{ marginBottom: 14 }}><circle cx="12" cy="12" r="10" /><polyline points="8 12 11 15 16 9" /></svg>
                    <h3 style={{ marginBottom: 6 }}>Message Sent!</h3>
                    <p style={{ color: 'var(--medium-gray)' }}>Thank you for reaching out. Al Soto will get back to you as soon as possible.</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

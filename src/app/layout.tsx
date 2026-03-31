import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Elegant Remodeling & Construction | Houston Remodeling Contractor',
    template: '%s | Elegant Remodeling & Construction',
  },
  description: 'Houston\'s trusted remodeling and construction experts. Kitchens, bathrooms, additions, and complete residential & commercial construction for over 25 years.',
  keywords: ['remodeling', 'construction', 'Houston', 'kitchen remodel', 'bathroom renovation', 'room additions', 'commercial construction', 'Al Soto'],
  openGraph: {
    title: 'Elegant Remodeling & Construction',
    description: 'Houston\'s trusted remodeling and construction experts. Over 25 years of exceptional craftsmanship.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

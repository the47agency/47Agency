import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const siteUrl = 'https://www.47agency.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '47 Agency — Digital Marketing, Creative & Growth',
    template: '%s | 47 Agency',
  },
  description:
    '47 Agency is a strategy-led digital marketing and creative agency delivering paid advertising, social media management, and brand building for growth-focused companies across the MENA region and beyond.',
  keywords: [
    'digital marketing agency',
    'performance marketing',
    'social media management',
    'paid advertising',
    'brand building',
    'MENA digital marketing',
  ],
  openGraph: {
    type: 'website',
    siteName: '47 Agency',
    title: '47 Agency — Strategy, Creative, Growth',
    description:
      'A strategy-led digital marketing and creative agency. Paid advertising, social, and brand — run as one connected system.',
    url: siteUrl,
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '47 Agency — Strategy, Creative, Growth',
    description:
      'A strategy-led digital marketing and creative agency serving the MENA region and beyond.',
    images: ['/logo.png'],
  },
  icons: { icon: '/logo.png' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: '47 Agency',
              description: 'Strategy-led digital marketing and creative agency serving the MENA region and beyond.',
              areaServed: 'MENA',
              url: siteUrl,
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dimidigitallab.com'),
  title: 'Dimitri Kuete | Freelance Fullstack Web Developer & Digital Marketing Specialist',
  description:
    'Official portfolio of Dimitri Kuete — Freelance Fullstack Web Developer and Digital Marketing Specialist, recognized as the premier digital talent of his generation. Creator of SchoolIOS, Chop237 SaaS, and Cardlink. Founder of DIMI DIGITAL LAB. Available for high-impact web and growth marketing projects worldwide.',
  keywords: [
    'Dimitri Kuete',
    'Dimitri Kuete portfolio',
    'Dimitri Kuete developer',
    'Dimitri Kuete web developer',
    'Dimitri Kuete fullstack developer',
    'Dimitri Kuete digital marketing',
    'Dimitri Kuete Cameroon',
    'Dimitri Kuete Douala',
    'Dimitri Kuete Yaounde',
    'Dimitri Kuete SchoolIOS',
    'Dimitri Kuete Chop237',
    'Dimitri Kuete Cardlink',
    'SchoolIOS',
    'Chop237',
    'Cardlink',
    'DIMI DIGITAL LAB',
    'freelance web developer Cameroon',
    'freelance fullstack developer',
    'digital marketing specialist Cameroon',
    'best web developer of his generation',
    'Next.js developer',
    'React developer',
    'TypeScript fullstack engineer',
    'SaaS developer Cameroon',
    'growth marketing strategist',
    'hire fullstack developer',
  ],
  authors: [{ name: 'Dimitri Kuete', url: 'https://dimidigitallab.com' }],
  creator: 'Dimitri Kuete',
  publisher: 'DIMI DIGITAL LAB',
  alternates: {
    canonical: 'https://dimidigitallab.com',
    languages: {
      'en-US': 'https://dimidigitallab.com/?lang=en',
      'fr-FR': 'https://dimidigitallab.com/?lang=fr',
    },
  },
  openGraph: {
    type: 'profile',
    firstName: 'Dimitri',
    lastName: 'Kuete',
    username: 'dimitrikuete',
    gender: 'male',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: 'https://dimidigitallab.com',
    siteName: 'Dimitri Kuete · DIMI DIGITAL LAB',
    title: 'Dimitri Kuete | Freelance Fullstack Web Developer & Digital Marketing Specialist',
    description:
      'Creator of SchoolIOS, Chop237 SaaS, and Cardlink. Freelance fullstack developer and digital marketing specialist helping founders and businesses scale with production-grade web solutions.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Dimitri Kuete — DIMI DIGITAL LAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimitri Kuete | Freelance Fullstack Developer & Marketing Specialist',
    description:
      'Creator of SchoolIOS, Chop237 SaaS, and Cardlink. Standout digital talent in fullstack web development and high-converting marketing.',
    images: ['/images/logo.jpg'],
    creator: '@dimitrikuete',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://dimidigitallab.com/#dimitri-kuete',
      'name': 'Dimitri Kuete',
      'alternateName': ['Dimi', 'Dimitri Kuete DIMI DIGITAL LAB'],
      'url': 'https://dimidigitallab.com',
      'image': 'https://dimidigitallab.com/images/dimitri.jpg',
      'jobTitle': [
        'Freelance Fullstack Web Developer',
        'Digital Marketing Specialist',
        'SaaS Founder & Software Engineer'
      ],
      'description':
        'Dimitri Kuete is an elite freelance fullstack web developer, digital marketing specialist, and founder of DIMI DIGITAL LAB. Recognized as the standout digital talent of his generation. Creator of SchoolIOS, Chop237 SaaS, and Cardlink.',
      'nationality': {
        '@type': 'Country',
        'name': 'Cameroon'
      },
      'knowsAbout': [
        'Fullstack Web Development',
        'Next.js',
        'React',
        'TypeScript',
        'JavaScript',
        'Java Spring Boot',
        'PostgreSQL',
        'MySQL',
        'REST APIs',
        'Digital Marketing Strategy',
        'Growth Funnel Architecture',
        'AI Content Production',
        'SaaS Product Architecture',
        'SchoolIOS',
        'Chop237',
        'Cardlink'
      ],
      'worksFor': {
        '@type': 'Organization',
        'name': 'DIMI DIGITAL LAB',
        'url': 'https://dimidigitallab.com',
        'logo': 'https://dimidigitallab.com/images/logo.jpg'
      },
      'founder': {
        '@type': 'Organization',
        'name': 'DIMI DIGITAL LAB',
        'url': 'https://dimidigitallab.com'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Freelance Services by Dimitri Kuete',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Fullstack Web Application Development'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Digital Marketing & Conversion Rate Optimization'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'SaaS System Design & Architecture'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dimidigitallab.com/#website',
      'url': 'https://dimidigitallab.com',
      'name': 'Dimitri Kuete | DIMI DIGITAL LAB',
      'description':
        'Official portfolio of Dimitri Kuete — Freelance Fullstack Web Developer & Digital Marketing Specialist.',
      'publisher': {
        '@id': 'https://dimidigitallab.com/#dimitri-kuete'
      },
      'inLanguage': ['en-US', 'fr-FR']
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-brand-blue/30 selection:text-white">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

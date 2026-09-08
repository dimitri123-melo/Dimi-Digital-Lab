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
  title: 'Dimitri Kuete | Digital Marketing, AI Creative & Web Development — DIMI DIGITAL LAB',
  description:
    'DIMI DIGITAL LAB is the professional studio of Dimitri Kuete — specializing in digital marketing strategy, AI-powered creative production, and modern web & software development. Based in Cameroon · Working Worldwide. Create. Innovate. Elevate.',
  keywords: [
    'digital marketing',
    'AI content creation',
    'web development',
    'software development',
    'Dimitri Kuete',
    'DIMI DIGITAL LAB',
    'Cameroon',
    'full-stack developer',
    'portfolio',
  ],
  authors: [{ name: 'Dimitri Kuete' }],
  creator: 'Dimitri Kuete',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dimidigitallab.com',
    siteName: 'DIMI DIGITAL LAB',
    title: 'Dimitri Kuete | Digital Marketing, AI Creative & Web Development',
    description:
      'Digital strategy, AI-powered creative production, and modern web & software development. Based in Cameroon · Working Worldwide. Create. Innovate. Elevate.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'DIMI DIGITAL LAB — Create. Innovate. Elevate.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimitri Kuete | DIMI DIGITAL LAB',
    description: 'Digital Marketing · AI Creative · Web & Software Development · Based in Cameroon · Working Worldwide',
    images: ['/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
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

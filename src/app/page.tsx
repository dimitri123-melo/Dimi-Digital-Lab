'use client';

import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import ContentCreation from '@/components/sections/ContentCreation';
import Training from '@/components/sections/Training';
import Trust from '@/components/sections/Trust';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContentCreation />
        <Training />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

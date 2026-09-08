'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Process from '@/components/sections/Process';
import Trust from '@/components/sections/Trust';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { ImageViewerModal } from '@/components/ui/ImageViewerModal';
import { visualProofs } from '@/data/proofs';

export default function Home() {
  const [selectedProofId, setSelectedProofId] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleInspectProof = (proofId: string) => {
    setSelectedProofId(proofId);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  const currentIndex = visualProofs.findIndex((p) => p.id === selectedProofId);
  const currentProof = currentIndex !== -1 ? visualProofs[currentIndex] : null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProofId(visualProofs[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < visualProofs.length - 1) {
      setSelectedProofId(visualProofs[currentIndex + 1].id);
    }
  };

  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Services onInspectProof={handleInspectProof} />
        <Portfolio onInspectProof={handleInspectProof} />
        <About />
        <Skills />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />

      {/* Global Visual Proof Inspector Modal */}
      <ImageViewerModal
        proof={currentProof}
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < visualProofs.length - 1 && currentIndex !== -1}
      />
    </>
  );
}


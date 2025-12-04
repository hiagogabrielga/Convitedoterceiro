import { useState } from 'react';
import { Hero } from './components/Hero';
import { ChemistrySection } from './components/ChemistrySection';
import { InvitationButton } from './components/InvitationButton';
import { InvitationModal } from './components/InvitationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Hero />
      <ChemistrySection />
      <InvitationButton onClick={() => setIsModalOpen(true)} />
      <InvitationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

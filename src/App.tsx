import * as React from "react";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { AutomationShowcase } from "./components/sections/AutomationShowcase";
import { ProjectsBento } from "./components/sections/ProjectsBento";
import { DesignPortfolio } from "./components/sections/DesignPortfolio";
import { ExperienceTimeline } from "./components/sections/ExperienceTimeline";
import { InteractiveCV } from "./components/sections/InteractiveCV";
import { EngineeringShowcase } from "./components/sections/EngineeringShowcase";
import { SocialProfilesSection } from "./components/sections/SocialProfilesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";
import { CVModal } from "./components/modals/CVModal";

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = React.useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main selection:bg-brand-violet/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-grow">
        <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        <AutomationShowcase />
        <ProjectsBento />
        <DesignPortfolio />
        <ExperienceTimeline />
        <InteractiveCV onOpenCVModal={() => setIsCVModalOpen(true)} />
        <EngineeringShowcase />
        <SocialProfilesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full CV Digital Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

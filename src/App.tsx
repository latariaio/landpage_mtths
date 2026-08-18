import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ImpactQuote } from '@/components/ImpactQuote';
import { WhatIDo } from '@/components/WhatIDo';
import { Projects } from '@/components/Projects';
import { Lab } from '@/components/Lab';
import { Skills } from '@/components/Skills';
import { Engineering } from '@/components/Engineering';
import { About } from '@/components/About';
import { Ventures } from '@/components/Ventures';
import { Opportunities } from '@/components/Opportunities';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ImpactQuote />
        <WhatIDo />
        <Projects />
        <Lab />
        <Skills />
        <Engineering />
        <About />
        <Ventures />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

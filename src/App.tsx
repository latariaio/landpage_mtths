import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Positioning } from '@/components/Positioning';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Skills } from '@/components/Skills';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { CTA } from '@/components/CTA';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Projects />
        <Process />
        <Skills />
        <About />
        <Services />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

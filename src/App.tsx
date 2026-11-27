import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Stack } from '@/components/Stack';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <FeaturedProjects />
        <Stack />
        <Experience />
      </main>
      <Contact />
    </>
  );
}

export default App;

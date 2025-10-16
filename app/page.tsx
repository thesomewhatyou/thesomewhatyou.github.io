import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Presence from '@/components/Presence';
import Content from '@/components/Content';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex w-full flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Presence />
        <Content />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

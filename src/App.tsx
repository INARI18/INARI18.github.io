import { Stars } from 'components/Stars/Stars';
import { Nav } from 'components/Nav/Nav';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Experience } from 'components/Experience/Experience';
import { Projects } from 'components/Projects/Projects';
import { Contact } from 'components/Contact/Contact';
import { Footer } from 'components/Footer/Footer';

export default function App() {
  return (
    <>
      <Stars />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

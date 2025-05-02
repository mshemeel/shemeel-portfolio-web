import Hero from '@/components/sections/hero/Hero';
import About from '@/components/sections/about/About';
import Experience from '@/components/sections/experience/Experience';
import Skills from '@/components/sections/skills/Skills';
import Education from '@/components/sections/education/Education';
import Projects from '@/components/sections/projects/Projects';
import Testimonials from '@/components/sections/testimonials/Testimonials';
import Contact from '@/components/sections/contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      {/* Projects section will be added later */}
    </>
  );
}

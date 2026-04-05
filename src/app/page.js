'use client';

import ScrollProvider from './components/ScrollProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <ScrollProvider>
      <div className="min-h-screen bg-slate-50 relative selection:bg-blue-200 selection:text-blue-900 font-sans">
        <Navbar />

        <main>
          <div id="home">
            <Hero />
          </div>

          <Stats />

          <div id="about">
            <About />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="certifications">
            <Certifications />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </ScrollProvider>
  );
}

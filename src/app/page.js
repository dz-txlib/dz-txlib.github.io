import dynamic from 'next/dynamic';
import ScrollProvider from './components/ScrollProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-fold sections — split into separate JS chunks so the
// browser only parses/executes them after the hero is interactive.
const About          = dynamic(() => import('./components/About'));
const Services       = dynamic(() => import('./components/Services'));
const Skills         = dynamic(() => import('./components/Skills'));
const Experience     = dynamic(() => import('./components/Experience'));
const Projects       = dynamic(() => import('./components/Projects'));
const Education      = dynamic(() => import('./components/Education'));
const Certifications = dynamic(() => import('./components/Certifications'));
const Contact        = dynamic(() => import('./components/Contact'));
const Footer         = dynamic(() => import('./components/Footer'));

export default function Portfolio() {
  return (
    <ScrollProvider>
      <div className="min-h-screen bg-[#09090b] relative selection:bg-blue-900/60 selection:text-blue-200 font-sans">
        <Navbar />

        {/* Each section component declares its own id (home, about, …) */}
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </ScrollProvider>
  );
}

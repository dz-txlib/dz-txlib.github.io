import dynamic from 'next/dynamic';
import ScrollProvider from './components/ScrollProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/ui/Intro';
import { Grain } from './components/ui/Atmosphere';

// Below-fold sections — split into separate JS chunks so the
// browser only parses/executes them after the hero is interactive.
const About          = dynamic(() => import('./components/About'));
const Services       = dynamic(() => import('./components/Services'));
const Skills         = dynamic(() => import('./components/Skills'));
const Experience     = dynamic(() => import('./components/Experience'));
const Projects       = dynamic(() => import('./components/Projects'));
// Education + certifications share one band — see Credentials.jsx.
// Both original anchors (#education, #certifications) live inside it.
const Credentials    = dynamic(() => import('./components/Credentials'));
const Contact        = dynamic(() => import('./components/Contact'));
const Footer         = dynamic(() => import('./components/Footer'));

// Page chrome — never needed for first paint or for crawlers.
const Cursor         = dynamic(() => import('./components/ui/Cursor'));
const ScrollProgress = dynamic(() => import('./components/ui/Chrome').then((m) => m.ScrollProgress));
const SectionRail    = dynamic(() => import('./components/ui/Chrome').then((m) => m.SectionRail));
const BackToTop      = dynamic(() => import('./components/ui/Chrome').then((m) => m.BackToTop));

export default function Portfolio() {
    return (
        <ScrollProvider>
            {/* CSS-only curtain; lifts on its own even without JS */}
            <Intro />

            <Grain />
            <ScrollProgress />
            <Cursor />
            <SectionRail />
            <BackToTop />

            <a
                href="#about"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-sky-600 focus:text-white focus:font-semibold"
            >
                Skip to content
            </a>

            <div className="relative selection:bg-sky-900/60 selection:text-sky-100 font-sans">
                <Navbar />

                {/* Each section component declares its own id (home, about, …) */}
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Credentials />
                    <Contact />
                </main>

                <Footer />
            </div>
        </ScrollProvider>
    );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import CertificationGrid from './components/CertificationGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { Award } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const [isLoading, setIsLoading] = useState(true);

  // Refs for sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { name: 'Home', ref: heroRef, id: 'home' },
    { name: 'About', ref: aboutRef, id: 'about' },
    { name: 'Services', ref: servicesRef, id: 'services' },
    { name: 'Skills', ref: skillsRef, id: 'skills' },
    { name: 'Experience', ref: experienceRef, id: 'experience' },
    { name: 'Projects', ref: projectsRef, id: 'projects' },
    { name: 'Contact', ref: contactRef, id: 'contact' },
  ];

  // Initialize loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle Scroll to toggle header style and active section
  useEffect(() => {
    const handleScroll = () => {


      // Determine active section
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'services', ref: servicesRef },
        { id: 'skills', ref: skillsRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          // Adding a little offset (150px) to trigger earlier
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-200 selection:text-blue-900 font-sans">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />

      <main>
        <div ref={heroRef} id="home">
          <Hero scrollToSection={scrollToSection} projectsRef={projectsRef} contactRef={contactRef} />
        </div>

        <Stats />

        <div ref={aboutRef} id="about">
          <About scrollToSection={scrollToSection} contactRef={contactRef} />
        </div>

        <div ref={servicesRef} id="services">
          <Services scrollToSection={scrollToSection} contactRef={contactRef} />
        </div>

        <div ref={skillsRef} id="skills">
          <Skills />
        </div>

        <div ref={experienceRef} id="experience">
          <Experience />
        </div>

        <div ref={projectsRef} id="projects">
          <Projects />
        </div>

        <div ref={educationRef} id="education">
          <Education />
        </div>

        {/* Certifications Section */}
        <section ref={certificationsRef} id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                    <Award className="text-white" size={28} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Certifications
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Verified credentials and continuous professional development
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
            </div>

            <CertificationGrid />
          </div>
        </section>

        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </main>

      <Footer scrollToSection={scrollToSection} navItems={navItems} />
    </div>
  );
}
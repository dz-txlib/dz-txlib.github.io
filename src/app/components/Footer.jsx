'use client';

import { Code, ChevronRight, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer({ scrollToSection, navItems }) {
    // const scrollToTop = () => {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Left: Brand & Description */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Code className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">MTU</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Backend Engineer crafting scalable solutions with Java, Spring Boot, and modern cloud technologies.
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-green-400 font-semibold">Available for work</span>
                            </div>
                        </div>

                        {/* Center: Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <ChevronRight size={20} className="text-blue-400" />
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {navItems.slice(0, 6).map((item, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={() => scrollToSection(item.ref)}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                                        >
                                            <ChevronRight size={14} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Contact & Social */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Mail size={20} className="text-blue-400" />
                                Get in Touch
                            </h4>
                            <div className="space-y-3">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm group"
                                >
                                    <Mail size={16} className="group-hover:scale-110 transition-transform duration-200" />
                                    <span className="break-all">{personalInfo.email}</span>
                                </a>
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm group"
                                >
                                    <Phone size={16} className="group-hover:scale-110 transition-transform duration-200" />
                                    {personalInfo.phone}
                                </a>
                                <div className="flex items-center gap-2 text-gray-300 text-sm">
                                    <MapPin size={16} />
                                    {personalInfo.location}
                                </div>

                                {/* Social Icons */}
                                <div className="flex gap-3 pt-4">
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
                                    </a>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
                                    </a>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="w-10 h-10 bg-white/10 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        aria-label="Email"
                                    >
                                        <Mail size={20} className="group-hover:scale-110 transition-transform duration-200" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 mb-6"></div>

                    {/* Bottom Bar - commented out in original file but keeping consistent */}
                    {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Designed & Developed with 💙 using Next.js & Tailwind CSS
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <span>Back to Top</span>
                  <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-200" />
                </button>
              </div>
            </div> */}
                </div>
            </div>
        </footer>
    );
}

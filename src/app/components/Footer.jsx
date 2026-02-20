'use client';

import { Code, ChevronRight, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer({ scrollToSection, navItems }) {
    return (
        <footer className="relative bg-slate-950 text-slate-300 overflow-hidden border-t border-slate-900">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-8 mb-12">
                        {/* Left: Brand & Description */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-sm">
                                    <Code className="text-white" size={20} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white tracking-tight">MTU</h3>
                            </div>
                            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
                                Backend Engineer crafting scalable solutions with Java, Spring Boot, and modern cloud technologies.
                            </p>
                            <div className="flex items-center gap-2 text-sm bg-slate-900/50 inline-flex px-3 py-1.5 rounded-full border border-slate-800">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                <span className="text-slate-300 font-medium">Available for work</span>
                            </div>
                        </div>

                        {/* Center: Quick Links */}
                        <div className="md:px-8">
                            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {navItems.slice(0, 6).map((item, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={() => scrollToSection(item.ref)}
                                            className="text-slate-400 hover:text-white transition-colors duration-300 text-[15px] flex items-center gap-2 group"
                                        >
                                            <ChevronRight size={14} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Contact & Social */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Get in Touch</h4>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-[15px] group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                                        <Mail size={14} className="group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <span className="break-all">{personalInfo.email}</span>
                                </a>
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-[15px] group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                                        <Phone size={14} className="group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    {personalInfo.phone}
                                </a>
                                <div className="flex items-center gap-3 text-slate-400 text-[15px]">
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                                        <MapPin size={14} className="text-slate-500" />
                                    </div>
                                    {personalInfo.location}
                                </div>

                                {/* Social Icons */}
                                <div className="flex gap-3 pt-6">
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                                    </a>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-white/20 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                        aria-label="GitHub"
                                    >
                                        <Github size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                        aria-label="Email"
                                    >
                                        <Mail size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-800/60 mb-8 w-full"></div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                        </p>
                        <p className="text-slate-500 text-sm">
                            Designed & Developed with <span className="text-blue-500">💙</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

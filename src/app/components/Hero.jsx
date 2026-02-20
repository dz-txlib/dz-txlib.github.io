'use client';

import { ChevronRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ scrollToSection, projectsRef, contactRef }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/50">
            {/* Minimal Premium Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-50/40 via-transparent to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 mt-10 lg:mt-0 px-4 sm:px-0 order-2 lg:order-1">

                        {/* Status/Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Available for work</span>
                        </div>

                        {/* High-Impact Headline */}
                        <div className="space-y-4 max-w-2xl">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                {personalInfo.name}
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 leading-tight">
                                {personalInfo.headline}
                            </h2>
                        </div>

                        {/* Tagline */}
                        <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
                            {personalInfo.tagline}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
                            <button
                                onClick={() => scrollToSection(projectsRef)}
                                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                            >
                                <span>View My Work</span>
                                <ChevronRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </button>

                            <a
                                href={personalInfo.cv}
                                download
                                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                            >
                                <Download size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                <span>Download Resume</span>
                            </a>
                        </div>

                        {/* Social Links grouped elegantly */}
                        <div className="flex items-center gap-4 pt-8 w-full justify-center lg:justify-start">
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Github size={20} />
                            </a>
                            <button
                                onClick={() => scrollToSection(contactRef)}
                                className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Mail size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Premium Profile Image Container */}
                    <div className="flex justify-center lg:justify-end items-center w-full px-4 sm:px-8 lg:px-0 order-1 lg:order-2">
                        <div className="relative lg:-translate-y-16 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
                            {/* Glassmorphic border rings */}
                            <div className="absolute inset-0 border border-slate-200 rounded-full scale-[1.05] pointer-events-none hidden sm:block"></div>
                            <div className="absolute inset-0 border border-slate-100 rounded-full scale-[1.10] pointer-events-none hidden lg:block"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                                <Image
                                    src={personalInfo.image}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover object-[center_8%] scale-105 hover:scale-100 transition-transform duration-700 ease-out" priority
                                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 480px"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Scroll down</span>
                <div className="animate-bounce">
                    <ChevronRight size={20} className="text-slate-400 rotate-90" />
                </div>
            </div>
        </section>
    );
}

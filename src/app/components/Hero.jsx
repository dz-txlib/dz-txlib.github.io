'use client';

import { ChevronRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ scrollToSection, projectsRef, contactRef }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/30">
            {/* Extremely Subtle Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[0%] right-[0%] w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-[0%] left-[0%] w-[400px] h-[400px] bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left: Text Content (Takes up 7 out of 12 columns) */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 order-2 lg:order-1 mt-8 lg:mt-0">

                        {/* Status/Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Available for work</span>
                        </div>

                        {/* High-Impact Headline */}
                        <div className="space-y-3 max-w-2xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                {personalInfo.name}
                            </h1>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 leading-snug">
                                {personalInfo.headline}
                            </h2>
                        </div>

                        {/* Tagline */}
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                            {personalInfo.tagline}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
                            <button
                                onClick={() => scrollToSection(projectsRef)}
                                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <span>View My Work</span>
                                <ChevronRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </button>

                            <a
                                href={personalInfo.cv}
                                download
                                className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <Download size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                <span>Download Resume</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4 w-full justify-center lg:justify-start">
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Github size={18} />
                            </a>
                            <button
                                onClick={() => scrollToSection(contactRef)}
                                className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Premium Profile Image Container (Takes up 5 out of 12 columns) */}
                    <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-center w-full px-4 sm:px-0 order-1 lg:order-2">
                        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-square">
                            {/* Decorative Background Elements */}
                            <div className="absolute inset-4 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-full blur-2xl opacity-50 pointer-events-none"></div>

                            {/* Glassmorphic border rings */}
                            <div className="absolute inset-0 border-[1.5px] border-slate-200 rounded-full scale-[1.03] pointer-events-none hidden sm:block"></div>
                            <div className="absolute inset-0 border-[1.5px] border-slate-100 rounded-full scale-[1.07] pointer-events-none hidden lg:block"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-slate-50">
                                <Image
                                    src={personalInfo.image}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover object-[center_8%] scale-[1.02] hover:scale-100 transition-transform duration-700 ease-out flex-shrink-0"
                                    priority
                                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 450px"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Scroll down</span>
                <div className="animate-bounce mt-1">
                    <ChevronRight size={18} className="text-slate-400 rotate-90" />
                </div>
            </div>
        </section>
    );
}

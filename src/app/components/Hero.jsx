'use client';

import { ChevronRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ scrollToSection, projectsRef, contactRef }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 opacity-50"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-5 text-center md:text-left">
                    {/* Name */}
                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {personalInfo.name}
                        </h1>

                        {/* Static Headline - No typing animation */}
                        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 leading-tight">
                            {personalInfo.headline}
                        </h2>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        {personalInfo.tagline}
                    </p>

                    {/* CTA Buttons - 3 buttons in same line on desktop */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                        <button
                            onClick={() => scrollToSection(projectsRef)}
                            className="group w-full sm:w-auto px-5 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
                        >
                            <span className="flex items-center justify-center gap-2">
                                View My Work
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>

                        <a
                            href={personalInfo.cv}
                            download
                            className="group w-full sm:w-auto px-5 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                            <Download size={18} className="group-hover:animate-bounce" />
                            <span>Download Resume</span>
                        </a>

                        <button
                            onClick={() => scrollToSection(contactRef)}
                            className="group w-full sm:w-auto px-5 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Let&apos;s Connect
                                <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                            </span>

                        </button>
                    </div>


                    {/* Social Links - Bottom left */}
                    <div className="flex gap-4 justify-center md:justify-start pt-2">
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="text-blue-600" size={24} />
                        </a>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                            aria-label="GitHub Profile"
                        >
                            <Github className="text-gray-900" size={24} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                            aria-label="Email Contact"
                        >
                            <Mail className="text-blue-600" size={24} />
                        </a>
                    </div>
                </div>

                {/* Profile Image - Smaller and more compact */}
                <div className="relative flex justify-center items-center order-first md:order-last">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
                        {/* Outer animated gradient ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-30"></div>

                        {/* Middle rotating gradient ring */}
                        <div className="absolute inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-spin-slow opacity-20"></div>

                        {/* Image container */}
                        <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 shadow-2xl">
                            <Image
                                src={personalInfo.image}
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                                style={{
                                    objectPosition: '100% 9%'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <ChevronRight size={32} className="text-blue-600 rotate-90" />
            </div>
        </section>
    );
}

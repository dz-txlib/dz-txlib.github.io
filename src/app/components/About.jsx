'use client';

import { Sparkles, Zap, ChevronRight, Mail, MapPin, Clock } from 'lucide-react';
import { professionalSummary, personalInfo } from '../data/personalInfo';

export default function About({ scrollToSection, contactRef }) {
    return (
        <section className="py-24 bg-slate-50/50 relative" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100/80">
                        <Sparkles className="text-blue-600" size={16} />
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Am</span>
                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Get to know my journey, expertise, and what drives me to build great software.
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 overflow-hidden">

                    {/* Subtle Background Accent */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-50/60 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="relative z-10 space-y-12">
                        {/* Introduction */}
                        <div className="bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-100">
                            <p className="text-slate-700 leading-relaxed text-lg font-medium">
                                {professionalSummary.intro}
                            </p>
                        </div>

                        {/* Content Sections Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* My Journey */}
                            <div className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">My Journey</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {professionalSummary.story}
                                </p>
                            </div>

                            {/* What I Do Best */}
                            <div className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">What I Do Best</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {professionalSummary.expertise}
                                </p>
                            </div>

                            {/* How I Work */}
                            <div className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">How I Work</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {professionalSummary.approach}
                                </p>
                            </div>

                            {/* Beyond Code */}
                            <div className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">🌟</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">Beyond Code</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {professionalSummary.beyond}
                                </p>
                            </div>
                        </div>

                        {/* Real Impact - Full Width */}
                        <div className="group bg-slate-50/80 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">📈</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">Real Impact</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {professionalSummary.impact}
                            </p>
                        </div>

                        {/* CTA / Contact Info Section */}
                        <div className="pt-10 border-t border-slate-100">
                            <div className="grid lg:grid-cols-2 gap-10">

                                {/* Let's Work Together */}
                                <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Zap className="text-yellow-400 shrink-0" size={28} />
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Let's Work Together!</h3>
                                        </div>
                                        <p className="text-blue-100/90 leading-relaxed mb-8">
                                            {professionalSummary.cta}
                                        </p>
                                    </div>
                                    <div className="relative z-10 w-full sm:w-auto">
                                        <button
                                            onClick={() => scrollToSection(contactRef)}
                                            className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold shadow-sm hover:shadow-md hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
                                        >
                                            <span>Get in Touch</span>
                                            <ChevronRight size={18} className="text-blue-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Contact Grid */}
                                <div className="grid sm:grid-cols-1 gap-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                                            <Mail className="text-blue-600" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                                            <a href={`mailto:${personalInfo.email}`} className="text-slate-700 hover:text-blue-600 font-semibold text-[15px] transition-colors break-all">
                                                {personalInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                                            <MapPin className="text-blue-600" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                                            <p className="text-slate-700 font-semibold text-[15px]">{personalInfo.location}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{personalInfo.timezone}</p>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                                            <Clock className="text-blue-600" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Availability</p>
                                            <p className="text-slate-700 font-semibold text-[15px]">{personalInfo.availability}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{personalInfo.responseTime}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

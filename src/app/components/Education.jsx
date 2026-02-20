'use client';

import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
    return (
        <section className="py-24 bg-white relative" id="education">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100/50">
                        <GraduationCap className="text-blue-600" size={16} />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">Education</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Journey</span>
                    </h2>
                </div>

                {/* Timelines */}
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="group bg-slate-50 rounded-[2rem] p-6 md:p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0 group-hover:border-blue-200 transition-colors">
                                            <GraduationCap size={14} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                                        </div>
                                        {edu.institution}
                                        <ExternalLink size={14} className="opacity-50 ml-1" />
                                    </a>
                                </div>
                                <div className="flex flex-row md:flex-col items-center md:items-end flex-wrap gap-3">
                                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-blue-700 border border-blue-100 shadow-sm rounded-full text-sm font-bold tracking-wide">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 px-2">
                                        <MapPin size={14} />
                                        {edu.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

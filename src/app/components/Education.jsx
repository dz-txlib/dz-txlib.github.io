'use client';

import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { education } from '../data/education';
import SectionHeader from './SectionHeader';

export default function Education() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    icon={GraduationCap}
                    badge="Education"
                    title="Academic"
                    highlight="Background"
                />

                <div className="space-y-6">
                    {education.map((edu) => (
                        <div key={edu.institution} className="group bg-slate-50 rounded-[2rem] p-5 sm:p-6 md:p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
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

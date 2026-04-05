'use client';

import { CheckCircle2, Briefcase, Calendar, Award } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function CertificationGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {certifications.map((cert) => (
                <div
                    key={cert.name}
                    className="group flex flex-col h-full bg-slate-50 rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>

                    <div className="relative z-10 flex flex-col h-full">

                        {/* Header */}
                        <div className="flex items-start justify-between mb-6 sm:mb-8">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                                <Award size={24} className="text-blue-600" />
                            </div>

                            {cert.verifyUrl ? (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm hover:bg-emerald-100 transition-colors"
                                >
                                    <CheckCircle2 size={14} className="text-emerald-600" />
                                    <span className="text-xs font-bold text-emerald-700 tracking-wide">Verified</span>
                                </a>
                            ) : (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full shadow-sm">
                                    <Award size={14} className="text-slate-500" />
                                    <span className="text-xs font-bold text-slate-500 tracking-wide">Certified</span>
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors duration-300 leading-snug flex-grow">
                            {cert.name}
                        </h3>

                        {/* Details */}
                        <div className="space-y-3 mb-6 sm:mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                                    <Briefcase size={14} className="text-slate-500" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{cert.issuer}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                                    <Calendar size={14} className="text-slate-500" />
                                </div>
                                <span className="text-sm font-bold text-blue-600">{cert.year}</span>
                            </div>
                        </div>

                        {/* Skill Bar */}
                        <div className="mt-auto pt-6 border-t border-slate-200/60">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Proficiency</span>
                                <span className="text-xs font-bold text-slate-700">{cert.level || 'Advanced'}</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75"></div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

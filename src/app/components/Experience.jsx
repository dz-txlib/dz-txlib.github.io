'use client';

import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                                <Briefcase className="text-white" size={28} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Experience
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        My professional journey and career highlights
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Timeline */}
                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200 transform md:-translate-x-1/2"></div>

                    {experience.map((job, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                            </div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                <div className={`group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    {/* Glowing Outline */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>

                                    {/* Date Badge */}
                                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md transform rotate-2 group-hover:rotate-0 transition-all duration-300 flex items-center gap-2">
                                        <Calendar size={14} />
                                        {job.period}
                                    </div>

                                    {/* Mobile Date Badge (Visible only on small screens) */}
                                    <div className="md:hidden inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                        <Calendar size={12} />
                                        {job.period}
                                    </div>

                                    {/* Header Info */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                                            {job.role}
                                            {job.current && (
                                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full border border-green-200 animate-pulse">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-600">
                                            <span className="font-semibold text-blue-600 flex items-center gap-1">
                                                <Briefcase size={14} />
                                                {job.company}
                                            </span>
                                            {job.type && <span className="bg-gray-100 px-2 py-0.5 rounded-md">{job.type}</span>}
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} className="text-gray-400" />
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-3 mb-6">
                                        {job.highlights.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed group/item">
                                                <div className="mt-1.5 min-w-[6px] w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/item:bg-cyan-500 transition-colors duration-300"></div>
                                                <span className="group-hover/item:text-gray-900 transition-colors duration-300">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-slate-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow Decoration */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 transform rotate-45 ${index % 2 === 0 ? '-right-2.5 border-l-0 border-b-0 hidden md:block' : '-left-2.5 border-r-0 border-t-0 hidden md:block shadow-[-2px_2px_4px_-2px_rgba(0,0,0,0.1)]'}`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

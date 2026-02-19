'use client';

import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-white"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <GraduationCap className="text-blue-600" size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
                    </div>
                </div>

                {/* Timelines */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Mobile Line */}
                            <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-blue-100"></div>

                            <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <a
                                            href={edu.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium text-gray-700 mt-1 flex items-center gap-2 hover:text-blue-500 transition-colors"
                                        >
                                            {edu.institution}
                                            <ExternalLink size={14} className="opacity-50" />
                                        </a>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-1">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                                            <Calendar size={14} />
                                            {edu.period}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-sm text-gray-500">
                                            <MapPin size={14} />
                                            {edu.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

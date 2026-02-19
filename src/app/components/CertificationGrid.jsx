'use client';

import { CheckCircle2, Briefcase, Calendar } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function CertificationGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
                const gradients = [
                    'from-blue-500 to-cyan-500',
                    'from-purple-500 to-pink-500',
                    'from-green-500 to-emerald-500',
                    'from-orange-500 to-red-500',
                    'from-indigo-500 to-purple-500',
                    'from-cyan-500 to-blue-500'
                ];

                const icons = ['🏆', '🎖️', '🥇', '🎓', '⭐', '🔥'];

                return (
                    <div
                        key={index}
                        className="group relative"
                        style={{
                            animationDelay: `${index * 100}ms`,
                        }}
                    >
                        {/* Glowing Background */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                        {/* Certificate Card */}
                        <div className="relative h-full bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100">
                            {/* Animated Top Border */}
                            <div className={`h-2 bg-gradient-to-r ${gradients[index]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                            <div className="p-6">
                                {/* Icon & Badge */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="relative">
                                        {/* Icon Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}></div>

                                        {/* Icon Container */}
                                        <div className={`relative w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <span className="text-3xl">{icons[index]}</span>
                                        </div>
                                    </div>

                                    {/* Verified Badge */}
                                    <div className="px-3 py-1 bg-green-100 border border-green-300 rounded-full flex items-center gap-1">
                                        <CheckCircle2 size={14} className="text-green-600" />
                                        <span className="text-xs font-bold text-green-700">Verified</span>
                                    </div>
                                </div>

                                {/* Certificate Details */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                        {cert.name}
                                    </h3>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                                                <Briefcase size={16} className="text-gray-600" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{cert.issuer}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                                                <Calendar size={16} className="text-gray-600" />
                                            </div>
                                            <span className="text-sm font-semibold text-blue-600">{cert.year}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress/Skill Level */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-gray-600">Skill Level</span>
                                        <span className="text-xs font-bold text-blue-600">Expert</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full bg-gradient-to-r ${gradients[index]} rounded-full shadow-md transform origin-left scale-x-100 transition-transform duration-1000`}></div>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`h-1 bg-gradient-to-r ${gradients[index]} rounded-full mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100`}></div>
                            </div>

                            {/* Corner Decoration */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
                                <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} rounded-bl-full`}></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

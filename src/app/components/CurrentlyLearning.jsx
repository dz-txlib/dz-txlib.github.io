'use client';

import Image from 'next/image';
import { Target, Sparkles } from 'lucide-react';
import { currentlyLearning } from '../data/currentlyLearning';

export default function CurrentlyLearning() {
    return (
        <div className="relative mt-12 mb-12">
            <div className="relative bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10 overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60"></div>

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shrink-0 shadow-sm">
                                <Sparkles className="text-blue-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Currently Learning</h3>
                                <p className="text-slate-500 font-medium mt-1">Expanding my technical horizons</p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-semibold border border-slate-100/80 shadow-sm">
                            <Target size={16} className="text-blue-500" />
                            Continuous Growth
                        </div>
                    </div>

                    {/* Tech Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {currentlyLearning.map((tech, idx) => (
                            <div key={idx} className="group/tech bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1 cursor-default flex flex-col items-center gap-4 relative overflow-hidden">

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon */}
                                <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm group-hover/tech:scale-110 group-hover/tech:-rotate-3 transition-transform duration-300">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Name */}
                                <span className="relative z-10 font-semibold text-sm text-center text-slate-700 group-hover/tech:text-blue-600 transition-colors duration-300">
                                    {tech.name}
                                </span>

                                {/* Decorative line */}
                                <div className="w-8 h-1 bg-slate-200 rounded-full group-hover/tech:bg-blue-300 group-hover/tech:w-12 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

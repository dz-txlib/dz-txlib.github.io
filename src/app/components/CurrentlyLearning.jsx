'use client';

import Image from 'next/image';
import { Sparkles, Target } from 'lucide-react';
import { currentlyLearning } from '../data/currentlyLearning';

export default function CurrentlyLearning() {
    return (
        <div className="relative mt-12 mb-12">
            <div className="relative bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 sm:p-8 md:p-10 overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60" aria-hidden="true"></div>

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                        <div className="flex items-center gap-4 sm:gap-5">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shrink-0 shadow-sm">
                                <Sparkles className="text-blue-500" size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Currently Learning</h3>
                                <p className="text-slate-500 font-medium mt-1 text-sm sm:text-base">Expanding my technical horizons</p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-semibold border border-slate-100/80 shadow-sm self-start sm:self-auto">
                            <Target size={16} className="text-blue-500" />
                            Continuous Growth
                        </div>
                    </div>

                    {/* Tech Grid — fixed breakpoints for 5 items */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                        {currentlyLearning.map((tech) => (
                            <div key={tech.name} className="group/tech bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1 cursor-default flex flex-col items-center gap-3 sm:gap-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>

                                <div className="relative z-10 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm group-hover/tech:scale-110 group-hover/tech:-rotate-3 transition-transform duration-300">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={32}
                                        height={32}
                                        className="w-7 sm:w-8 h-7 sm:h-8 object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                <span className="relative z-10 font-semibold text-xs sm:text-sm text-center text-slate-700 group-hover/tech:text-blue-600 transition-colors duration-300">
                                    {tech.name}
                                </span>

                                <div className="w-8 h-1 bg-slate-200 rounded-full group-hover/tech:bg-blue-300 group-hover/tech:w-12 transition-all duration-300" aria-hidden="true"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

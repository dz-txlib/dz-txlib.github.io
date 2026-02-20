'use client';

import { Code, Zap } from 'lucide-react';
import Image from 'next/image';
import { skills } from '../data/skills';
import CurrentlyLearning from './CurrentlyLearning';

export default function Skills() {
    return (
        <section className="py-24 bg-slate-50/50 relative" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100/80">
                        <Code className="text-blue-600" size={16} />
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Technical Arsenal</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Expertise</span>
                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Cutting-edge technologies I use to build robust, scalable, and production-ready systems.
                    </p>
                </div>

                {/* Core Expertise Banner */}
                <div className="relative mb-20 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="relative bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm transform group-hover:scale-[1.01] group-hover:shadow-md transition-all duration-500">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                                    <Zap className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">Primary Stack</h3>
                                    <p className="text-sm font-medium text-slate-500">Technologies I work with daily</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-end gap-3">
                                {['Java', 'Spring Boot', 'Microservices', 'MySQL', 'AWS'].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
                    {Object.entries(skills).map(([category, data], index) => (
                        <div key={index} className="group flex flex-col h-full">
                            <div className="relative flex flex-col h-full bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 transform group-hover:-translate-y-1 border border-slate-100 overflow-hidden">

                                {/* Header Section */}
                                <div className="p-6 md:p-8 flex-none border-b border-slate-50 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-5`}></div>
                                    <div className="relative flex items-center justify-between">
                                        <div className={`px-4 py-1.5 bg-gradient-to-r ${data.color} text-white rounded-lg font-bold text-sm shadow-sm tracking-wide`}>
                                            {category}
                                        </div>
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-slate-600 border border-slate-100 shadow-sm">
                                            {data.items.length}
                                        </div>
                                    </div>
                                </div>

                                {/* Skills Grid */}
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {data.items.map((skill, idx) => (
                                            <div key={idx} className="group/item bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center gap-3">
                                                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group-hover/item:scale-110 group-hover/item:-rotate-3 transition-transform duration-300">
                                                    <Image
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        width={28}
                                                        height={28}
                                                        className="w-7 h-7 object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <span className="text-slate-700 font-semibold text-xs text-center group-hover/item:text-blue-600 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Count Badge / Bottom Footer */}
                                <div className="p-6 md:p-8 pt-0 mt-auto flex-none">
                                    <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${data.color}`}></div>
                                        <span className="text-sm font-semibold text-slate-500">
                                            {data.items.length} {data.items.length === 1 ? "Technology" : "Technologies"} Mastered
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <CurrentlyLearning />

            </div>
        </section>
    );
}

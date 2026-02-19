'use client';

import { Code, Zap } from 'lucide-react';
import Image from 'next/image';
import { skills } from '../data/skills';
import CurrentlyLearning from './CurrentlyLearning';

export default function Skills() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                                <Code className="text-white" size={28} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Technical Arsenal
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        Cutting-edge technologies I use to build production-ready systems
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Core Expertise Banner */}
                <div className="relative mb-16 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 md:p-10 rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Zap className="text-yellow-300 animate-bounce" size={32} />
                            <h3 className="text-2xl md:text-3xl font-bold">Core Expertise</h3>
                            <Zap className="text-yellow-300 animate-bounce" size={32} />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl font-semibold">
                            {['Java', 'Spring Boot', 'Microservices', 'MySQL', 'AWS', 'RESTful APIs'].map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default shadow-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {Object.entries(skills).map(([category, data], index) => (
                        <div key={index} className="group relative">
                            {/* Glowing Background */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${data.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                            {/* Card */}
                            <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 overflow-hidden border border-gray-100">
                                {/* Animated Top Border */}
                                <div className={`h-2 bg-gradient-to-r ${data.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                                <div className="p-6">
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`px-5 py-2.5 bg-gradient-to-r ${data.color} text-white rounded-xl font-bold text-base shadow-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}>
                                            {category}
                                        </div>
                                        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                                            <span className="text-xl font-bold text-gray-600">
                                                {data.items.length}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {data.items.map((skill, idx) => (
                                            <div key={idx} className="group/item relative">
                                                {/* Glow Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-2xl opacity-0 group-hover/item:opacity-100 blur-md transition-opacity duration-300"></div>

                                                {/* Skill Item */}
                                                <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-4 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-rotate-2 cursor-pointer">
                                                    <div className="flex flex-col items-center gap-3">
                                                        {/* Icon Container */}
                                                        <div className="relative w-12 h-12 flex items-center justify-center">
                                                            {/* Rotating Ring */}
                                                            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin-slow opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                                            <Image
                                                                src={skill.icon}
                                                                alt={skill.name}
                                                                width={44}
                                                                height={44}
                                                                className="w-11 h-11 object-contain relative z-10 transform group-hover/item:scale-125 transition-transform duration-500 filter drop-shadow-md"
                                                                loading="lazy"
                                                            />

                                                        </div>

                                                        {/* Skill Name */}
                                                        <span className="text-gray-800 font-semibold text-xs text-center leading-tight group-hover/item:text-blue-600 transition-colors duration-300">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Count Badge */}
                                    <div className="mt-6 pt-6 border-t-2 border-gray-200">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                                            <span className="text-sm font-bold text-gray-600">
                                                {data.items.length} {data.items.length === 1 ? "Technology" : "Technologies"} Mastered
                                            </span>

                                        </div>
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

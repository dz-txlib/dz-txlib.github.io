'use client';

import { Layers, Github, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-fadeInUp">
                    <div className="inline-block relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-50 blur-lg animate-pulse"></div>
                        <div className="relative flex items-center justify-center gap-3 bg-white px-8 py-3 rounded-full shadow-md border border-gray-100">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                                <Layers className="text-white" size={20} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Featured Projects
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                        Showcasing real-world solutions that solve complex business problems
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Project Image / Visual Placeholder */}
                            <div
                                className="w-full lg:w-1/2 perspective-1000"
                                style={{
                                    animationDelay: `${index * 200}ms`
                                }}
                            >
                                <div className="relative transform transition-all duration-700 hover:rotate-y-6 hover:scale-105">
                                    {/* Glowing Background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

                                    {/* Main Card */}
                                    <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10 group-hover:border-blue-400/50 transition-colors duration-500">
                                        {/* Decorative Elements */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[80px] opacity-20"></div>

                                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                                            <div>
                                                {/* Interactive Badge */}
                                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                    <span className="text-sm font-medium text-blue-100">{project.category}</span>
                                                </div>

                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-blue-200 text-lg font-medium">
                                                    {project.tagline}
                                                </p>
                                            </div>

                                            {/* Tech Pills */}
                                            <div className="flex flex-wrap gap-2 mt-8">
                                                {project.tech.slice(0, 4).map((t, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-xs text-blue-100 font-mono border border-white/10">
                                                        {t}
                                                    </span>
                                                ))}
                                                {project.tech.length > 4 && (
                                                    <span className="px-3 py-1 bg-white/10 rounded-lg text-xs text-blue-100 font-mono border border-white/10">
                                                        +{project.tech.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Code Pattern overlay */}
                                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                {/* Problem & Solution */}
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <h4 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-2">The Challenge</h4>
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            {project.problem}
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                                        <h4 className="text-sm uppercase tracking-wider text-blue-500 font-bold mb-2">My Solution</h4>
                                        <p className="text-gray-800 leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.impact.map((metric, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <CheckCircle2 size={14} className="text-green-600" />
                                            </div>
                                            <span className="text-sm text-gray-700 font-medium">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {project.live && (
                                        Array.isArray(project.live) ? (
                                            project.live.map((link, linkIdx) => (
                                                <a
                                                    key={linkIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                                >
                                                    <span>{link.name}</span>
                                                    <ExternalLink size={18} />
                                                </a>
                                            ))
                                        ) : (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={18} />
                                            </a>
                                        )
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-xl font-bold border-2 border-gray-200 hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                                        >
                                            <Github size={20} />
                                            <span>Source Code</span>
                                        </a>
                                    )}

                                    {!project.github && (
                                        <span className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-xl font-semibold border border-gray-200 cursor-not-allowed" title="Source code is private">
                                            <Github size={20} />
                                            <span>Private Repo</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Github CTA */}
                <div className="mt-20 text-center">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm font-medium group"
                    >
                        <span>View more projects on GitHub</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
}

'use client';

import { Layers, Github, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section className="py-24 bg-white relative" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100/50">
                        <Layers className="text-blue-600" size={16} />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">Featured Work</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Showcasing real-world solutions that solve complex business problems through scalable architecture and clean code.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Project Visual/Cover Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-[2.5rem] p-8 md:p-12 bg-slate-50 border border-slate-100 overflow-hidden shadow-sm group-hover:shadow-xl group-hover:shadow-blue-900/5 transition-all duration-500">

                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Project Content Box */}
                                    <div className="relative z-10 flex flex-col h-full justify-between min-h-[320px]">
                                        <div>
                                            {/* Category Badge */}
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200/60 shadow-sm mb-8 transition-transform duration-300">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">{project.category}</span>
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                                                {project.tagline}
                                            </p>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-2 mt-10">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-3.5 py-1.5 bg-white text-slate-600 font-semibold text-xs rounded-xl border border-slate-200/60 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details Side */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-8">

                                {/* Problem & Solution Cards */}
                                <div className="space-y-6">
                                    <div className="relative p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm group-hover:border-slate-200 transition-colors">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">The Challenge</h4>
                                        <p className="text-slate-600 leading-relaxed text-[15px]">
                                            {project.problem}
                                        </p>
                                    </div>

                                    <div className="relative p-6 md:p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">The Solution</h4>
                                        <p className="text-slate-700 leading-relaxed text-[15px]">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Key Metrics List */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.impact.map((metric, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-50 hover:bg-slate-50 hover:border-slate-100 transition-all">
                                            <div className="mt-0.5 shrink-0 bg-emerald-50 text-emerald-500 p-1 rounded-full">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-slate-700 font-semibold leading-snug">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                                    {project.live && (
                                        Array.isArray(project.live) ? (
                                            project.live.map((link, linkIdx) => (
                                                <a
                                                    key={linkIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-sm hover:shadow-md hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                                                >
                                                    <span>{link.name}</span>
                                                    <ExternalLink size={16} />
                                                </a>
                                            ))
                                        ) : (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-sm hover:shadow-md hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={16} />
                                            </a>
                                        )
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                                        >
                                            <Github size={18} />
                                            <span>Source Code</span>
                                        </a>
                                    )}

                                    {!project.github && (
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-400 rounded-xl font-semibold border border-slate-100 cursor-not-allowed" title="Source code is private">
                                            <Github size={18} />
                                            <span>Private Repo</span>
                                        </span>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Github CTA */}
                <div className="mt-32 text-center">
                    <a
                        href="https://github.com/dz-txlib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-full font-semibold hover:border-blue-200 hover:text-blue-600 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                        <span>View more projects on GitHub</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>

            </div>
        </section>
    );
}

'use client';

import { useRef } from 'react';
import { Github, ExternalLink, CheckCircle2, Layers, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';

const CAT_COLOR = {
    'Ed-Tech':    { accent: '#0ea5e9', glow: 'rgba(14,165,233,0.22)' },
    'HR Tech':    { accent: '#8b5cf6', glow: 'rgba(139,92,246,0.22)' },
    'E-Commerce': { accent: '#f97316', glow: 'rgba(249,115,22,0.22)'  },
    'Operations': { accent: '#10b981', glow: 'rgba(16,185,129,0.22)' },
};

function ProjectCard({ project, index }) {
    const ref    = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const meta   = CAT_COLOR[project.category] ?? CAT_COLOR['Ed-Tech'];

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden"
        >
            {/* Gradient border */}
            <div className="relative rounded-2xl p-[1.5px] overflow-hidden">
                <div
                    className="absolute inset-[-50%] animate-border-spin pointer-events-none"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 0deg, ${meta.accent} 70deg, transparent 140deg)`,
                        opacity: 0.35,
                    }}
                    aria-hidden="true"
                />

                <div
                    className="relative rounded-[calc(1rem-1.5px)] p-5 sm:p-9 overflow-hidden"
                    style={{ background: 'rgba(9,9,11,0.96)' }}
                >
                    {/* Interior glow */}
                    <div
                        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${meta.glow} 0%, transparent 70%)` }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start">

                        {/* Left — info */}
                        <div className="flex-1 min-w-0">
                            {/* Category + index */}
                            <div className="flex items-center gap-3 mb-5">
                                <span
                                    className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-lg"
                                    style={{
                                        color: meta.accent,
                                        background: `${meta.accent}18`,
                                        border: `1px solid ${meta.accent}30`,
                                    }}
                                >
                                    {project.category}
                                </span>
                                <span
                                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                                    style={{ color: 'rgba(255,255,255,0.2)' }}
                                >
                                    0{index + 1}
                                </span>
                            </div>

                            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">
                                {project.title}
                            </h3>
                            <p className="text-base mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                                {project.tagline}
                            </p>

                            {/* Tech chips */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 font-mono text-xs font-medium rounded-lg cursor-default"
                                        style={{
                                            color: 'rgba(125,211,252,0.7)',
                                            background: 'rgba(14,165,233,0.09)',
                                            border: '1px solid rgba(14,165,233,0.18)',
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Action links */}
                            <div className="flex flex-wrap gap-3 pt-6 border-t"
                                style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                                {project.live && (
                                    Array.isArray(project.live)
                                        ? project.live.map((link) => (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 text-white"
                                                style={{
                                                    background: `${meta.accent}22`,
                                                    border: `1px solid ${meta.accent}35`,
                                                }}
                                            >
                                                {link.name}
                                                <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </a>
                                        ))
                                        : (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 text-white"
                                                style={{
                                                    background: `${meta.accent}22`,
                                                    border: `1px solid ${meta.accent}35`,
                                                }}
                                            >
                                                Live Demo
                                                <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )
                                )}
                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                                        style={{
                                            color: 'rgba(255,255,255,0.6)',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                        }}
                                    >
                                        <Github size={15} /> Source Code
                                    </a>
                                ) : (
                                    <span
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium cursor-not-allowed"
                                        style={{
                                            color: 'rgba(255,255,255,0.25)',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                        }}
                                        title="Source code is private"
                                    >
                                        <Github size={15} /> Private Repo
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Right — challenge / solution / impact */}
                        <div className="w-full lg:w-[280px] xl:w-[300px] shrink-0 flex flex-col gap-3">
                            {/* Challenge */}
                            <div
                                className="rounded-xl p-4"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                }}
                            >
                                <div
                                    className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2"
                                    style={{ color: 'rgba(255,255,255,0.28)' }}
                                >
                                    // Challenge
                                </div>
                                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>
                                    {project.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div
                                className="rounded-xl p-4"
                                style={{
                                    background: `${meta.accent}0c`,
                                    border: `1px solid ${meta.accent}20`,
                                }}
                            >
                                <div
                                    className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2"
                                    style={{ color: meta.accent, opacity: 0.7 }}
                                >
                                    // Solution
                                </div>
                                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    {project.solution}
                                </p>
                            </div>

                            {/* Impact metrics */}
                            <div className="flex flex-col gap-2">
                                {project.impact.map((m, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl"
                                        style={{
                                            background: 'rgba(16,185,129,0.07)',
                                            border: '1px solid rgba(16,185,129,0.15)',
                                        }}
                                    >
                                        <CheckCircle2
                                            size={13}
                                            className="mt-0.5 shrink-0"
                                            style={{ color: 'rgba(52,211,153,0.8)' }}
                                        />
                                        <span className="text-[12px] font-medium leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                            {m}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0d0d12 0%, #111115 100%)' }}
        >
            <div
                className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <SectionHeader
                    icon={Layers}
                    badge="Featured Work"
                    title="Flagship"
                    highlight="Projects"
                    subtitle="Real-world solutions that solve complex business problems through scalable architecture."
                    dark
                />

                <div className="space-y-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/dz-txlib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                            color: 'rgba(125,211,252,0.65)',
                            background: 'rgba(14,165,233,0.1)',
                            border: '1px solid rgba(14,165,233,0.2)',
                        }}
                    >
                        View more on GitHub
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

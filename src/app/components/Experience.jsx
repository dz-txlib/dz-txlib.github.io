'use client';

import { useRef } from 'react';
import { Calendar, MapPin, ArrowRight, ExternalLink, Briefcase } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/experience';
import SectionHeader from './SectionHeader';

function ExperienceCard({ job, index }) {
    const ref     = useRef(null);
    const inView  = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col md:flex-row gap-6 md:gap-14 py-10 sm:py-12 border-b last:border-0"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
            {/* Left — company */}
            <div className="w-full md:w-[260px] shrink-0 flex flex-col gap-3">
                <div className="md:sticky md:top-28">
                    {/* Period */}
                    <div
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] mb-4"
                        style={{ color: 'rgba(56,189,248,0.65)' }}
                    >
                        <Calendar size={12} />
                        {job.period}
                    </div>

                    {/* Company name */}
                    {job.url ? (
                        <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/co flex items-center gap-3 mb-3"
                        >
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold text-white shrink-0 transition-all duration-300 group-hover/co:scale-105"
                                style={{
                                    background: 'rgba(14,165,233,0.15)',
                                    border: '1px solid rgba(14,165,233,0.25)',
                                }}
                            >
                                {job.company.charAt(0)}
                            </div>
                            <div>
                                <h3
                                    className="font-display text-xl font-bold text-white tracking-tight group-hover/co:text-sky-300 transition-colors flex items-center gap-1.5"
                                >
                                    {job.company}
                                    <ExternalLink
                                        size={13}
                                        className="opacity-0 group-hover/co:opacity-60 transition-opacity"
                                        style={{ color: 'rgba(56,189,248,0.7)' }}
                                    />
                                </h3>
                            </div>
                        </a>
                    ) : (
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold text-white shrink-0"
                                style={{
                                    background: 'rgba(14,165,233,0.15)',
                                    border: '1px solid rgba(14,165,233,0.25)',
                                }}
                            >
                                {job.company.charAt(0)}
                            </div>
                            <h3 className="font-display text-xl font-bold text-white tracking-tight">
                                {job.company}
                            </h3>
                        </div>
                    )}

                    <div className="flex flex-col gap-1.5 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.52)' }}>
                        <span className="flex items-center gap-2">
                            <MapPin size={13} /> {job.location}
                        </span>
                        {job.type && (
                            <span
                                className="inline-flex w-fit items-center px-2.5 py-0.5 rounded-lg font-mono text-xs"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.65)',
                                }}
                            >
                                {job.type}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Right — details */}
            <div className="flex-1 min-w-0">
                {/* Role + badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {job.role}
                    </h4>
                    {job.current && (
                        <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{
                                background: 'rgba(16,185,129,0.12)',
                                border: '1px solid rgba(16,185,129,0.25)',
                                color: 'rgba(52,211,153,0.9)',
                            }}
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            Present
                        </span>
                    )}
                </div>

                {/* Highlights */}
                <ul className="mb-7 space-y-3">
                    {job.highlights.map((point, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-3 text-sm leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.68)' }}
                        >
                            <span
                                className="mt-1.5 shrink-0 p-1 rounded-full"
                                style={{
                                    background: 'rgba(14,165,233,0.12)',
                                    color: 'rgba(56,189,248,0.9)',
                                }}
                                aria-hidden="true"
                            >
                                <ArrowRight size={10} strokeWidth={3} />
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Tech tags */}
                <div className="pt-5 border-t flex flex-wrap gap-2"
                    style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                    {job.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 font-mono text-xs font-medium rounded-lg cursor-default transition-all duration-200 hover:-translate-y-px"
                            style={{
                                color: 'rgba(125,211,252,0.65)',
                                background: 'rgba(14,165,233,0.09)',
                                border: '1px solid rgba(14,165,233,0.18)',
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #111115 0%, #0d0d12 100%)' }}
        >
            {/* Atmosphere */}
            <div
                className="absolute -right-[10%] top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                <SectionHeader
                    icon={Briefcase}
                    badge="Career Path"
                    title="Professional"
                    highlight="Experience"
                    subtitle="Key roles, achievements, and the technologies I've worked with."
                    align="left"
                    dark
                />

                <div className="flex flex-col">
                    {experience.map((job, i) => (
                        <ExperienceCard key={job.company} job={job} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

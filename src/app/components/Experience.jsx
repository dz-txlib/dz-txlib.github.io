'use client';

import { useRef } from 'react';
import { MapPin, ExternalLink, Briefcase, Check } from 'lucide-react';
import { motion, useScroll as useFramerScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { experience } from '../data/experience';
import SectionHeader from './SectionHeader';
import { Reveal, EASE } from './ui/Motion';
import { GridPlane, SectionGlow } from './ui/Atmosphere';
import { SpotlightCard, Chip } from './ui/Surfaces';

export default function Experience() {
    const timelineRef = useRef(null);
    const reduced = useReducedMotion();

    /* The rail fills as the timeline scrolls past — the section's
       signature: progress through a career, made literal. */
    const { scrollYProgress } = useFramerScroll({
        target: timelineRef,
        offset: ['start 65%', 'end 65%'],
    });
    const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="experience"
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--surface-0) 0%, var(--surface-2) 100%)' }}
        >
            <GridPlane
                variant="grid"
                mask="radial-gradient(ellipse 55% 60% at 90% 25%, black 0%, transparent 72%)"
                opacity={0.5}
            />
            <SectionGlow x="92%" y="30%" size={520} color="rgba(14,165,233,0.09)" />

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
                <SectionHeader
                    icon={Briefcase}
                    index="05"
                    badge="Career path"
                    title="Where I've"
                    highlight="shipped"
                    subtitle={`${experience.length} roles, one throughline: backend systems that had to work for real users.`}
                    align="left"
                    accent="#38bdf8"
                />

                <div ref={timelineRef} className="relative">
                    {/* Rail */}
                    <div
                        className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-px"
                        style={{ background: 'var(--line-strong)' }}
                        aria-hidden="true"
                    />
                    <motion.div
                        className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-px origin-top"
                        style={{
                            scaleY: reduced ? 1 : fill,
                            background: 'linear-gradient(to bottom, #38bdf8, #2dd4bf)',
                            boxShadow: '0 0 12px rgba(56,189,248,0.6)',
                        }}
                        aria-hidden="true"
                    />

                    <div className="space-y-4">
                        {experience.map((job, i) => (
                            <TimelineEntry key={job.company} job={job} index={i} />
                        ))}
                    </div>

                    {/* Terminus */}
                    <div className="relative pl-10 sm:pl-16 pt-8">
                        <span
                            className="absolute left-0 sm:left-1 top-8 w-[15px] h-[15px] rounded-full flex items-center justify-center"
                            style={{ background: 'var(--surface-2)', border: '1px solid var(--line-strong)' }}
                            aria-hidden="true"
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: 'var(--text-xlo)' }}
                            />
                        </span>
                        <p className="mono-label">
                            Started here · {experience[experience.length - 1]?.period.match(/\d{4}/)?.[0] ?? ''}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineEntry({ job, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-15% 0px -10% 0px' });
    const reduced = useReducedMotion();

    return (
        <div ref={ref} className="relative pl-10 sm:pl-16">
            {/* Node */}
            <motion.span
                initial={reduced ? false : { scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                className={`absolute left-0 sm:left-1 top-8 w-[15px] h-[15px] rounded-full flex items-center justify-center ${
                    job.current ? 'animate-node-pulse' : ''
                }`}
                style={{
                    background: 'var(--surface-2)',
                    border: `1px solid ${job.current ? 'rgba(56,189,248,0.6)' : 'var(--line-strong)'}`,
                }}
                aria-hidden="true"
            >
                <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                        background: job.current ? '#38bdf8' : 'rgba(255,255,255,0.4)',
                        boxShadow: job.current ? '0 0 8px #38bdf8' : 'none',
                    }}
                />
            </motion.span>

            <motion.div
                initial={reduced ? false : { opacity: 0, y: 34 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
            >
                <SpotlightCard
                    className="group rounded-2xl p-6 sm:p-8 transition-colors duration-500"
                    style={{
                        background: job.current
                            ? 'linear-gradient(150deg, rgba(14,165,233,0.07), rgba(255,255,255,0.02) 55%)'
                            : 'rgba(255,255,255,0.022)',
                        border: '1px solid var(--line)',
                    }}
                >
                    <div className="relative z-10">
                        {/* Period + status */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span
                                className="font-mono text-[11px] uppercase tracking-[0.16em]"
                                style={{ color: 'rgba(56,189,248,0.8)' }}
                            >
                                {job.period}
                            </span>
                            {job.current && (
                                <span
                                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em]"
                                    style={{
                                        background: 'rgba(16,185,129,0.12)',
                                        border: '1px solid rgba(16,185,129,0.26)',
                                        color: '#34d399',
                                    }}
                                >
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                                    </span>
                                    Current
                                </span>
                            )}
                        </div>

                        {/* Role */}
                        <h3
                            className="font-display font-bold tracking-[-0.03em] text-white leading-tight mb-3"
                            style={{ fontSize: 'var(--step-2)' }}
                        >
                            {job.role}
                        </h3>

                        {/* Company line */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7">
                            {job.url ? (
                                <a
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor="link"
                                    className="group/co inline-flex items-center gap-2.5"
                                >
                                    <span
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 transition-transform duration-500 group-hover/co:scale-110"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(14,165,233,0.35), rgba(13,148,136,0.25))',
                                            border: '1px solid rgba(56,189,248,0.28)',
                                        }}
                                    >
                                        {job.company.charAt(0)}
                                    </span>
                                    <span className="font-semibold text-[15px] link-underline">
                                        {job.company}
                                    </span>
                                    <ExternalLink
                                        size={12}
                                        className="opacity-0 group-hover/co:opacity-70 transition-opacity duration-400"
                                        style={{ color: '#38bdf8' }}
                                    />
                                </a>
                            ) : (
                                <span className="font-semibold text-[15px]" style={{ color: 'var(--text-mid)' }}>
                                    {job.company}
                                </span>
                            )}

                            <span
                                className="inline-flex items-center gap-1.5 text-[13px]"
                                style={{ color: 'var(--text-xlo)' }}
                            >
                                <MapPin size={12} />
                                {job.location}
                            </span>

                            {job.type && (
                                <span className="font-mono text-[11px]" style={{ color: 'var(--text-xlo)' }}>
                                    {job.type}
                                </span>
                            )}
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-3 mb-7">
                            {job.highlights.map((point, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={reduced ? false : { opacity: 0, x: -12 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.55, delay: 0.25 + idx * 0.06, ease: EASE }}
                                    className="flex items-start gap-3 text-[13.5px] leading-relaxed"
                                    style={{ color: 'var(--text-lo)' }}
                                >
                                    <span
                                        className="mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                                        style={{
                                            background: 'rgba(56,189,248,0.12)',
                                            border: '1px solid rgba(56,189,248,0.22)',
                                        }}
                                        aria-hidden="true"
                                    >
                                        <Check size={9} strokeWidth={3} style={{ color: '#38bdf8' }} />
                                    </span>
                                    {point}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Stack */}
                        <div
                            className="pt-5 flex flex-wrap gap-1.5"
                            style={{ borderTop: '1px solid var(--line)' }}
                        >
                            {job.technologies.map((tech) => (
                                <Chip key={tech}>{tech}</Chip>
                            ))}
                        </div>
                    </div>
                </SpotlightCard>
            </motion.div>
        </div>
    );
}

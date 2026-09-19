'use client';

import { GraduationCap, Calendar, MapPin, ExternalLink, Award, CheckCircle2, ScrollText } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import SectionHeader from './SectionHeader';
import { Reveal, EASE } from './ui/Motion';
import { GridPlane, SectionGlow } from './ui/Atmosphere';
import { SpotlightCard, GradientBorder } from './ui/Surfaces';

const LEVEL = {
    Advanced: { width: '88%', color: '#34d399' },
    Intermediate: { width: '64%', color: '#38bdf8' },
    Beginner: { width: '42%', color: '#a78bfa' },
};

/**
 * Education and certifications share one band.
 *
 * As two separate full sections they were the thinnest, flattest
 * part of the page — one card each, stacked. Paired side by side
 * they read as a single "credentials" chapter. Both original
 * anchors are kept so existing links still land correctly.
 */
export default function Credentials() {
    return (
        <section
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--surface-0) 0%, var(--surface-2) 55%, var(--surface-1) 100%)' }}
        >
            <GridPlane
                variant="grid"
                mask="radial-gradient(ellipse 60% 55% at 20% 20%, black 0%, transparent 72%)"
                opacity={0.45}
            />
            <SectionGlow x="18%" y="22%" size={520} color="rgba(20,184,166,0.08)" />

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeader
                    icon={ScrollText}
                    index="07"
                    badge="Credentials"
                    title="Education &"
                    highlight="certifications"
                    subtitle="Formal grounding, plus the courses I've taken to fill the gaps it left."
                    align="left"
                    accent="#2dd4bf"
                />

                <div className="grid lg:grid-cols-12 gap-5 items-start">

                    {/* ══ Education ═══════════════════════════════════ */}
                    <div id="education" className="lg:col-span-5 min-w-0 scroll-mt-28">
                        <Reveal variant="left" duration={0.9}>
                            <GradientBorder
                                radius="1.25rem"
                                from="#2dd4bf"
                                via="#0ea5e9"
                                to="#0f766e"
                                opacity={0.42}
                                inner="var(--surface-2)"
                                innerClassName="overflow-hidden"
                            >
                                {education.map((edu) => (
                                    <div key={edu.institution} className="relative p-7 sm:p-8 h-full flex flex-col">
                                        <div
                                            className="absolute -top-20 -right-16 w-56 h-56 rounded-full pointer-events-none"
                                            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.14), transparent 70%)' }}
                                            aria-hidden="true"
                                        />

                                        <div className="relative z-10 flex flex-col h-full">
                                            <span
                                                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                                                style={{
                                                    background: 'rgba(45,212,191,0.12)',
                                                    border: '1px solid rgba(45,212,191,0.26)',
                                                }}
                                            >
                                                <GraduationCap size={19} style={{ color: '#2dd4bf' }} />
                                            </span>

                                            <p className="mono-label mb-3">Degree</p>
                                            <h3
                                                className="font-display font-bold tracking-[-0.025em] text-white leading-snug mb-5"
                                                style={{ fontSize: 'var(--step-1)' }}
                                            >
                                                {edu.degree}
                                            </h3>

                                            <a
                                                href={edu.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-cursor="link"
                                                className="group inline-flex items-center gap-2 text-sm font-semibold mb-7 w-fit"
                                                style={{ color: 'var(--text-mid)' }}
                                            >
                                                <span className="link-underline">{edu.institution}</span>
                                                <ExternalLink
                                                    size={12}
                                                    className="opacity-50 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </a>

                                            {/* Study span */}
                                            <StudyTimeline period={edu.period} />

                                            <div
                                                className="mt-auto pt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
                                                style={{ borderTop: '1px solid var(--line)' }}
                                            >
                                                <span
                                                    className="inline-flex items-center gap-1.5 text-[13px] font-medium"
                                                    style={{ color: 'var(--text-lo)' }}
                                                >
                                                    <Calendar size={12} style={{ color: '#2dd4bf' }} />
                                                    {edu.period}
                                                </span>
                                                <span
                                                    className="inline-flex items-center gap-1.5 text-[13px]"
                                                    style={{ color: 'var(--text-xlo)' }}
                                                >
                                                    <MapPin size={12} />
                                                    {edu.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </GradientBorder>
                        </Reveal>
                    </div>

                    {/* ══ Certifications ══════════════════════════════ */}
                    <div id="certifications" className="lg:col-span-7 min-w-0 scroll-mt-28 flex flex-col gap-3">
                        {certifications.map((cert, i) => (
                            <Reveal key={cert.name} variant="right" delay={i * 0.08} duration={0.85}>
                                <CertRow cert={cert} index={i} />
                            </Reveal>
                        ))}

                        <Reveal variant="up-sm" delay={0.3}>
                            <p
                                className="text-[12.5px] leading-relaxed px-5 py-4 rounded-xl"
                                style={{
                                    color: 'var(--text-xlo)',
                                    background: 'rgba(255,255,255,0.015)',
                                    border: '1px dashed var(--line-strong)',
                                }}
                            >
                                Certificates are a checkpoint, not the point — the production work above is where
                                these actually got tested.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* A compact 4-year span with the graduation point marked. */
function StudyTimeline({ period }) {
    const reduced = useReducedMotion();
    const [start, end] = period.split('-').map((s) => s.trim());

    return (
        <div className="mb-2" aria-hidden="true">
            <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px]" style={{ color: 'var(--text-xlo)' }}>
                    {start?.split(' ').pop()}
                </span>
                <span className="font-mono text-[10px]" style={{ color: '#2dd4bf' }}>
                    {end?.split(' ').pop()}
                </span>
            </div>
            <div
                className="relative h-1 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.07)' }}
            >
                <motion.span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #0ea5e9, #2dd4bf)' }}
                    initial={reduced ? false : { width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
                />
            </div>
            <p className="mt-2 font-mono text-[10px]" style={{ color: 'var(--text-xlo)' }}>
                B.Tech · Computer Science
            </p>
        </div>
    );
}

function CertRow({ cert, index }) {
    const reduced = useReducedMotion();
    const level = LEVEL[cert.level] ?? LEVEL.Advanced;

    return (
        <SpotlightCard
            className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden transition-transform duration-500 hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid var(--line)' }}
        >
            <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                        background: `${level.color}14`,
                        border: `1px solid ${level.color}30`,
                    }}
                >
                    <Award size={17} style={{ color: level.color }} />
                </span>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-3">
                        <h3 className="font-display text-[15px] font-bold leading-snug text-white transition-colors duration-400 group-hover:text-sky-200">
                            {cert.name}
                        </h3>

                        {cert.verifyUrl ? (
                            <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="link"
                                className="verify-chip inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0"
                                style={{ border: '1px solid rgba(16,185,129,0.24)', color: '#34d399' }}
                            >
                                <CheckCircle2 size={11} />
                                Verify
                            </a>
                        ) : (
                            <span
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0"
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid var(--line-strong)',
                                    color: 'var(--text-xlo)',
                                }}
                            >
                                <Award size={11} /> Certified
                            </span>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4">
                        <span className="text-[12.5px] font-medium" style={{ color: 'var(--text-lo)' }}>
                            {cert.issuer}
                        </span>
                        <span className="font-mono text-[11px]" style={{ color: 'var(--text-xlo)' }}>
                            {cert.year}
                        </span>
                    </div>

                    {/* Level meter */}
                    <div className="flex items-center gap-3">
                        <span
                            className="relative flex-1 h-[3px] rounded-full overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.07)' }}
                            aria-hidden="true"
                        >
                            <motion.span
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{ background: `linear-gradient(90deg, ${level.color}66, ${level.color})` }}
                                initial={reduced ? false : { width: 0 }}
                                whileInView={{ width: level.width }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 1.2, delay: 0.25 + index * 0.1, ease: EASE }}
                            />
                        </span>
                        <span
                            className="font-mono text-[10px] uppercase tracking-[0.14em] shrink-0"
                            style={{ color: level.color }}
                        >
                            {cert.level}
                        </span>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
}

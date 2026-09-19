'use client';

import { useRef } from 'react';
import {
    Code2, Users, Zap, Package, MapPin, Mail, Clock,
    ArrowUpRight, Sparkles, Quote,
} from 'lucide-react';
import { motion, useScroll as useFramerScroll, useTransform, useReducedMotion } from 'framer-motion';
import { professionalSummary, personalInfo } from '../data/personalInfo';
import { useScroll } from './ScrollProvider';
import { Reveal, TextReveal, AnimatedNumber, Magnetic, EASE } from './ui/Motion';
import { GridPlane, SectionGlow } from './ui/Atmosphere';
import { SpotlightCard } from './ui/Surfaces';

const STATS = [
    { value: 50,   suffix: '+', label: 'APIs integrated',  icon: Code2,   color: '#38bdf8' },
    { value: 1000, suffix: '+', label: 'Users served',     icon: Users,   color: '#34d399' },
    { value: 40,   suffix: '%', label: 'Faster queries',   icon: Zap,     color: '#fbbf24' },
    { value: 4,    suffix: '+', label: 'Products shipped', icon: Package, color: '#a78bfa' },
];

/* The narrative, broken into beats so it reads as a story with
   rhythm instead of four equal paragraphs of grey text. */
const CHAPTERS = [
    { k: '01', title: 'Where it started', body: professionalSummary.story },
    { k: '02', title: 'What I do best',   body: professionalSummary.expertise },
    { k: '03', title: 'The impact',        body: professionalSummary.impact },
];

const MARQUEE_WORDS = [
    'Backend Engineering', 'Distributed Systems', 'API Design',
    'Microservices', 'Performance', 'Clean Architecture',
];

export default function About() {
    const { scrollToSection } = useScroll();
    const railRef = useRef(null);
    const reduced = useReducedMotion();

    /* The rail fills as you read — a literal progress bar for the story */
    const { scrollYProgress } = useFramerScroll({
        target: railRef,
        offset: ['start 70%', 'end 60%'],
    });
    const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="about" className="relative">

            {/* ══ Transition band — giant outlined ticker ═══════════ */}
            <div
                className="relative overflow-hidden border-y py-6 marquee-track"
                style={{ borderColor: 'var(--line)', background: 'var(--surface-0)' }}
                aria-hidden="true"
            >
                <div className="flex w-max animate-marquee">
                    {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
                        <span key={`${w}-${i}`} className="flex items-center gap-10 px-8">
                            <span
                                className="font-display font-bold tracking-tight whitespace-nowrap text-outline"
                                style={{ fontSize: 'clamp(1.75rem, 4.2vw, 3.25rem)' }}
                            >
                                {w}
                            </span>
                            <Sparkles size={18} style={{ color: 'rgba(56,189,248,0.45)' }} className="shrink-0" />
                        </span>
                    ))}
                </div>
            </div>

            {/* ══ Narrative ════════════════════════════════════════ */}
            <div
                className="relative overflow-hidden py-24 sm:py-32"
                style={{ background: 'linear-gradient(180deg, var(--surface-0) 0%, var(--surface-2) 45%, var(--surface-1) 100%)' }}
            >
                <GridPlane
                    variant="dots"
                    mask="radial-gradient(ellipse 55% 60% at 85% 12%, black 0%, transparent 70%)"
                    opacity={0.6}
                />
                <SectionGlow x="12%" y="70%" size={620} color="rgba(20,184,166,0.09)" />

                <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* ── Sticky identity column ───────────────── */}
                        <div className="lg:col-span-4 min-w-0">
                            <div className="lg:sticky lg:top-28 space-y-7">
                                <Reveal variant="up-sm">
                                    <span
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                                        style={{
                                            background: 'rgba(56,189,248,0.1)',
                                            border: '1px solid rgba(56,189,248,0.24)',
                                        }}
                                    >
                                        <span className="font-mono text-[10px] font-semibold" style={{ color: '#38bdf8' }}>
                                            02
                                        </span>
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                            style={{ color: '#7dd3fc' }}
                                        >
                                            About
                                        </span>
                                    </span>
                                </Reveal>

                                <h2
                                    className="font-display font-bold tracking-[-0.035em] leading-[0.95] text-white"
                                    style={{ fontSize: 'var(--step-4)' }}
                                >
                                    <TextReveal text="Engineer" className="block" />
                                    <TextReveal text="behind the" className="block" delay={0.08} />
                                    <TextReveal text="systems" className="block" gradient delay={0.16} />
                                </h2>

                                <Reveal variant="up-sm" delay={0.2}>
                                    <p className="leading-relaxed" style={{ color: 'var(--text-lo)' }}>
                                        {professionalSummary.intro}
                                    </p>
                                </Reveal>

                                {/* Quick facts */}
                                <Reveal variant="up-sm" delay={0.26}>
                                    <dl className="space-y-px rounded-2xl overflow-hidden" style={{ border: '1px solid var(--line)' }}>
                                        {[
                                            { icon: MapPin, label: 'Based in', value: personalInfo.location, sub: personalInfo.timezone },
                                            { icon: Clock, label: 'Status', value: personalInfo.availability, sub: personalInfo.responseTime },
                                            { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                        ].map(({ icon: Icon, label, value, sub, href }) => {
                                            const Row = href ? 'a' : 'div';
                                            return (
                                                <Row
                                                    key={label}
                                                    {...(href ? { href, 'data-cursor': 'link' } : {})}
                                                    className="group flex items-start gap-3.5 p-4 transition-colors duration-400"
                                                    style={{ background: 'rgba(255,255,255,0.02)' }}
                                                >
                                                    <Icon
                                                        size={15}
                                                        className="mt-0.5 shrink-0 transition-colors duration-400 group-hover:text-sky-300"
                                                        style={{ color: 'var(--text-xlo)' }}
                                                    />
                                                    <div className="min-w-0">
                                                        <dt className="mono-label mb-1">{label}</dt>
                                                        <dd
                                                            className="text-[13px] font-medium break-words leading-snug"
                                                            style={{ color: 'var(--text-mid)' }}
                                                        >
                                                            {value}
                                                        </dd>
                                                        {sub && (
                                                            <dd className="text-[11px] mt-0.5" style={{ color: 'var(--text-xlo)' }}>
                                                                {sub}
                                                            </dd>
                                                        )}
                                                    </div>
                                                </Row>
                                            );
                                        })}
                                    </dl>
                                </Reveal>
                            </div>
                        </div>

                        {/* ── Story column with a reading rail ─────── */}
                        <div className="lg:col-span-8 min-w-0">

                            {/* Pull quote */}
                            <Reveal variant="blur" className="mb-14">
                                <figure className="relative pl-6 sm:pl-10">
                                    <Quote
                                        size={34}
                                        className="absolute -top-2 left-0 sm:left-1"
                                        style={{ color: 'rgba(56,189,248,0.22)' }}
                                        aria-hidden="true"
                                    />
                                    <blockquote
                                        className="font-display font-medium tracking-[-0.02em] leading-[1.28]"
                                        style={{ fontSize: 'var(--step-2)', color: 'rgba(255,255,255,0.88)' }}
                                    >
                                        <TextReveal
                                            text="I build backends that stay calm under load — clear boundaries, boring failure modes, and numbers that hold up in production."
                                            stagger={0.028}
                                        />
                                    </blockquote>
                                    <figcaption
                                        className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em]"
                                        style={{ color: 'var(--text-xlo)' }}
                                    >
                                        {personalInfo.name} · {personalInfo.role}
                                    </figcaption>
                                </figure>
                            </Reveal>

                            {/* Chapters */}
                            <div ref={railRef} className="relative pl-8 sm:pl-12">
                                {/* Rail track */}
                                <div
                                    className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px"
                                    style={{ background: 'var(--line)' }}
                                    aria-hidden="true"
                                />
                                {/* Rail fill, scrubbed by scroll */}
                                <motion.div
                                    className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px origin-top"
                                    style={{
                                        scaleY: reduced ? 1 : railScale,
                                        background: 'linear-gradient(to bottom, #38bdf8, #2dd4bf)',
                                        boxShadow: '0 0 10px rgba(56,189,248,0.55)',
                                    }}
                                    aria-hidden="true"
                                />

                                <div className="space-y-12">
                                    {CHAPTERS.map((c, i) => (
                                        <Reveal key={c.k} variant="up" delay={i * 0.05} className="relative">
                                            {/* Node */}
                                            <span
                                                className="absolute -left-8 sm:-left-12 top-1.5 w-[7px] h-[7px] rounded-full sm:translate-x-[4px]"
                                                style={{
                                                    background: '#38bdf8',
                                                    boxShadow: '0 0 0 4px rgba(56,189,248,0.12)',
                                                }}
                                                aria-hidden="true"
                                            />
                                            <div className="flex items-baseline gap-3 mb-3">
                                                <span
                                                    className="font-mono text-[11px] tabular-nums"
                                                    style={{ color: 'rgba(56,189,248,0.6)' }}
                                                >
                                                    {c.k}
                                                </span>
                                                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                                                    {c.title}
                                                </h3>
                                            </div>
                                            <p
                                                className="leading-[1.75] max-w-2xl"
                                                style={{ color: 'var(--text-lo)', fontSize: 'var(--step-0)' }}
                                            >
                                                {c.body}
                                            </p>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <Reveal variant="scale" delay={0.1} className="mt-14">
                                <SpotlightCard
                                    className="relative overflow-hidden rounded-2xl p-7 sm:p-9"
                                    style={{
                                        background: 'linear-gradient(140deg, rgba(14,165,233,0.12), rgba(13,148,136,0.06) 55%, transparent)',
                                        border: '1px solid rgba(56,189,248,0.2)',
                                    }}
                                >
                                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                                        <div className="max-w-md">
                                            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5">
                                                Let&apos;s build something
                                            </h3>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-lo)' }}>
                                                {professionalSummary.cta}
                                            </p>
                                        </div>
                                        <Magnetic strength={0.3} className="shrink-0">
                                            <button
                                                onClick={() => scrollToSection('contact')}
                                                data-cursor="link"
                                                className="btn-primary group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    Get in touch
                                                    <ArrowUpRight
                                                        size={15}
                                                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    />
                                                </span>
                                            </button>
                                        </Magnetic>
                                    </div>
                                </SpotlightCard>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ Stats band ═══════════════════════════════════════ */}
            <div
                className="relative overflow-hidden border-t py-16 sm:py-20"
                style={{ borderColor: 'var(--line)', background: 'var(--surface-0)' }}
            >
                <GridPlane
                    variant="grid"
                    mask="linear-gradient(to bottom, black, transparent 85%)"
                    opacity={0.5}
                />
                <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {STATS.map((stat, i) => (
                            <Reveal key={stat.label} variant="up" delay={i * 0.08}>
                                <StatBlock stat={stat} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatBlock({ stat }) {
    const Icon = stat.icon;
    return (
        <div className="group relative">
            {/* Ghost numeral behind — gives the block weight */}
            <span
                className="absolute -top-5 -left-1 font-display font-bold pointer-events-none select-none text-outline opacity-40 transition-opacity duration-700 group-hover:opacity-70"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1 }}
                aria-hidden="true"
            >
                {stat.value}
            </span>

            <div className="relative">
                <Icon
                    size={16}
                    className="mb-4 transition-transform duration-500 group-hover:-translate-y-0.5"
                    style={{ color: stat.color }}
                />
                <div
                    className="font-display font-bold tracking-[-0.04em] tabular-nums leading-none text-white"
                    style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
                >
                    <AnimatedNumber value={stat.value} duration={2} />
                    <span style={{ color: stat.color }}>{stat.suffix}</span>
                </div>
                <div
                    className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: 'var(--text-lo)' }}
                >
                    {stat.label}
                </div>
                <div
                    className="mt-4 h-px w-full origin-left transition-transform duration-700 group-hover:scale-x-100 scale-x-[0.3]"
                    style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
}

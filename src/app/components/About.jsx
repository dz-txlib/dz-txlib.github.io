'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Code2, Users, Zap, Package,
    MapPin, Mail, Clock, ArrowRight, Sparkles,
} from 'lucide-react';
import { professionalSummary, personalInfo } from '../data/personalInfo';
import { useScroll } from './ScrollProvider';

/* ── rAF counter ──────────────────────────────────────────────────── */
function useAnimatedCounter(target, isInView, duration = 1500) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isInView) return;
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(ease * target));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [isInView, target, duration]);
    return count;
}

const STATS = [
    { value: 50,   suffix: '+', label: 'APIs Delivered',   icon: Code2,   color: '#0ea5e9', glow: 'rgba(14,165,233,0.25)' },
    { value: 1000, suffix: '+', label: 'Users Served',     icon: Users,   color: '#10b981', glow: 'rgba(16,185,129,0.22)' },
    { value: 40,   suffix: '%', label: 'Query Speedup',    icon: Zap,     color: '#f59e0b', glow: 'rgba(245,158,11,0.22)'  },
    { value: 4,    suffix: '+', label: 'Products Shipped', icon: Package, color: '#8b5cf6', glow: 'rgba(139,92,246,0.22)' },
];

function GiantStat({ stat, isInView, delay }) {
    const n = useAnimatedCounter(stat.value, isInView, 1600);
    const Icon = stat.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start gap-3 group"
        >
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}28` }}
            >
                <Icon size={18} style={{ color: stat.color }} />
            </div>
            <div>
                <div
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter tabular-nums leading-none animate-stat-glow"
                    style={{ color: '#fff' }}
                >
                    {n}{stat.suffix}
                </div>
                <div className="text-sm font-medium mt-2 uppercase tracking-[0.12em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {stat.label}
                </div>
            </div>
        </motion.div>
    );
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function WordReveal({ text, className = '', delay = 0, isInView }) {
    const words = text.split(' ');
    return (
        <span className={className} aria-label={text}>
            {words.map((word, i) => (
                <span key={i} style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.3em' }}>
                    <motion.span
                        initial={{ y: '110%', opacity: 0 }}
                        animate={isInView ? { y: '0%', opacity: 1 } : {}}
                        transition={{ delay: delay + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'inline-block' }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

export default function About() {
    const { scrollToSection } = useScroll();
    const statsRef    = useRef(null);
    const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
    const quoteRef    = useRef(null);
    const quoteInView = useInView(quoteRef, { once: true, margin: '-80px' });

    return (
        <section id="about" className="relative overflow-hidden">

            {/* ── Stats band ───────────────────────────────────────── */}
            <div
                className="relative py-24 overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #111115 0%, #0d0d14 50%, #111115 100%)' }}
            >
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.10) 0%, transparent 65%)' }}
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.10) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 100%)',
                    }}
                    aria-hidden="true"
                />

                <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                            style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)' }}
                        >
                            <Sparkles size={13} className="text-sky-400" />
                            <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'rgba(125,211,252,0.85)' }}>
                                About Me
                            </span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                            By the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                                Numbers
                            </span>
                        </h2>
                    </motion.div>

                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {STATS.map((stat, i) => (
                            <GiantStat key={stat.label} stat={stat} isInView={statsInView} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Story + CTA ──────────────────────────────────────── */}
            <div
                className="relative py-24 overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #111115 0%, #09090b 100%)' }}
            >
                {/* Atmosphere */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)' }}
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.07) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse 60% 70% at 80% 20%, black 20%, transparent 100%)',
                    }}
                    aria-hidden="true"
                />

                <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

                    {/* Pull quote */}
                    <motion.div {...fadeUp(0)} ref={quoteRef} className="mb-8">
                        <div className="relative rounded-3xl p-[1.5px] overflow-hidden">
                            <div
                                className="absolute inset-[-40%] animate-border-spin pointer-events-none"
                                style={{
                                    background: 'conic-gradient(from 0deg, transparent 0deg, #0ea5e9 80deg, #14b8a6 160deg, #0284c7 240deg, transparent 320deg)',
                                    opacity: 0.6,
                                }}
                                aria-hidden="true"
                            />
                            <div
                                className="relative rounded-[calc(1.5rem-1.5px)] p-8 sm:p-10 md:p-12 overflow-hidden"
                                style={{ background: 'linear-gradient(145deg, #0a0a12 0%, #0f0f1c 50%, #080810 100%)' }}
                            >
                                <div
                                    className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
                                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.6) 0%, transparent 70%)' }}
                                    aria-hidden="true"
                                />
                                <div
                                    className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-15"
                                    style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 70%)' }}
                                    aria-hidden="true"
                                />
                                <div className="relative z-10">
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5" style={{ color: 'rgba(56,189,248,0.5)' }}>
                                        // professional summary
                                    </div>
                                    <blockquote>
                                        <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-[1.3] tracking-tight">
                                            <WordReveal
                                                text="Backend engineer with 2+ years shipping production systems in Java and Python for ed-tech, recruitment, and e-commerce platforms."
                                                className="text-white/85"
                                                delay={0.1}
                                                isInView={quoteInView}
                                            />
                                        </p>
                                    </blockquote>
                                    <div className="mt-6 font-mono text-xs" style={{ color: 'rgba(125,211,252,0.45)' }}>
                                        — {personalInfo.name} · {personalInfo.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story cards */}
                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                        {[
                            { icon: Zap,   title: 'My Journey',    body: professionalSummary.story,    delay: 0.08 },
                            { icon: Code2, title: 'What I Do Best', body: professionalSummary.expertise, delay: 0.14 },
                        ].map(({ icon: Icon, title, body, delay }) => (
                            <motion.div
                                key={title}
                                {...fadeUp(delay)}
                                className="group rounded-2xl p-7 transition-all duration-300"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(14,165,233,0.07)';
                                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-8 h-8 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.2)' }}
                                    >
                                        <Icon size={14} style={{ color: '#38bdf8' }} />
                                    </div>
                                    <h3 className="font-display text-base font-semibold text-white tracking-tight">
                                        {title}
                                    </h3>
                                </div>
                                <p className="leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                    {body}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA + contact */}
                    <motion.div {...fadeUp(0.18)} className="grid lg:grid-cols-5 gap-5">

                        {/* CTA card */}
                        <div className="lg:col-span-2 relative rounded-2xl p-[1.5px] overflow-hidden">
                            <div
                                className="absolute inset-[-50%] animate-border-spin pointer-events-none"
                                style={{
                                    background: 'conic-gradient(from 90deg, transparent 0deg, #0ea5e9 60deg, transparent 120deg)',
                                    opacity: 0.5,
                                }}
                                aria-hidden="true"
                            />
                            <div
                                className="relative rounded-[calc(1rem-1.5px)] p-7 sm:p-8 flex flex-col justify-between gap-7 h-full overflow-hidden"
                                style={{ background: 'linear-gradient(145deg, #0a0a12 0%, #111120 100%)' }}
                            >
                                <div
                                    className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
                                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.6) 0%, transparent 70%)' }}
                                    aria-hidden="true"
                                />
                                <div className="relative z-10">
                                    <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
                                        Let's Build Something
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(125,211,252,0.55)' }}>
                                        {professionalSummary.cta}
                                    </p>
                                </div>
                                <div className="relative z-10">
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 text-white overflow-hidden relative"
                                        style={{
                                            background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                                            boxShadow: '0 0 20px rgba(14,165,233,0.3)',
                                        }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get in Touch
                                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                        <span
                                            className="absolute inset-0 pointer-events-none animate-shimmer-pass"
                                            style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)' }}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="lg:col-span-3 flex flex-col gap-3">
                            {[
                                { icon: Mail,   label: 'Email',       value: personalInfo.email,        sub: null,                         href: `mailto:${personalInfo.email}` },
                                { icon: MapPin, label: 'Location',     value: personalInfo.location,     sub: personalInfo.timezone,        href: null },
                                { icon: Clock,  label: 'Availability', value: personalInfo.availability, sub: personalInfo.responseTime,    href: null },
                            ].map(({ icon: Icon, label, value, sub, href }) => {
                                const El = href ? 'a' : 'div';
                                return (
                                    <El
                                        key={label}
                                        {...(href ? { href } : {})}
                                        className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(14,165,233,0.07)';
                                            e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                        }}
                                    >
                                        <div
                                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                                            style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.2)' }}
                                        >
                                            <Icon size={16} style={{ color: '#38bdf8' }} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="font-mono text-[10px] uppercase tracking-[0.14em] mb-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                                                {label}
                                            </div>
                                            <div className="font-medium text-sm break-words" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                                {value}
                                            </div>
                                            {sub && (
                                                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{sub}</div>
                                            )}
                                        </div>
                                    </El>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import {
    Mail, Phone, MapPin, Linkedin, Github, Copy, Check,
    ArrowUpRight, MessageSquare, Clock,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { Reveal, TextReveal, Magnetic, EASE } from './ui/Motion';
import { Aurora, NetworkField, GridPlane } from './ui/Atmosphere';
import { SpotlightCard } from './ui/Surfaces';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const [clock, setClock] = useState('');
    const timerRef = useRef(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        const tick = () =>
            setClock(
                new Intl.DateTimeFormat('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'Asia/Kolkata',
                }).format(new Date())
            );
        tick();
        const t = setInterval(tick, 1000);
        return () => clearInterval(t);
    }, []);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopied(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked by permissions or a non-secure
            // context; the mailto link beside it still works.
        }
    };

    const channels = [
        { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}` },
        { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    ];

    const socials = [
        { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
        { href: personalInfo.github, icon: Github, label: 'GitHub' },
    ];

    return (
        <section
            id="contact"
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--surface-1) 0%, var(--surface-0) 100%)' }}
        >
            {/* Bookends the hero: same atmosphere, closing the loop */}
            <Aurora intensity={0.45} />
            <GridPlane
                variant="grid"
                mask="radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 72%)"
                opacity={0.6}
            />
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <NetworkField maxNodes={48} linkDistance={120} density={0.00006} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

                {/* ── Statement ────────────────────────────────────── */}
                <div className="text-center mb-14 sm:mb-16">
                    <Reveal variant="up-sm">
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-7"
                            style={{
                                background: 'rgba(56,189,248,0.1)',
                                border: '1px solid rgba(56,189,248,0.24)',
                            }}
                        >
                            <MessageSquare size={12} style={{ color: '#38bdf8' }} />
                            <span
                                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                style={{ color: '#7dd3fc' }}
                            >
                                Get in touch
                            </span>
                        </span>
                    </Reveal>

                    <h2
                        className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-white mb-6"
                        style={{ fontSize: 'var(--step-4)' }}
                    >
                        <TextReveal text="Let's build" className="block" duration={0.95} />
                        <TextReveal text="something that scales" className="block" gradient delay={0.1} duration={0.95} />
                    </h2>

                    <Reveal variant="up-sm" delay={0.2}>
                        <p
                            className="max-w-xl mx-auto leading-relaxed"
                            style={{ color: 'var(--text-lo)', fontSize: 'var(--step-0)' }}
                        >
                            Open to backend roles, freelance work and anything with a genuinely hard
                            architecture problem behind it. My inbox is always open.
                        </p>
                    </Reveal>
                </div>

                {/* ── Primary action: the email itself ─────────────── */}
                <Reveal variant="scale" delay={0.1} className="mb-5">
                    <SpotlightCard
                        className="relative rounded-3xl px-6 py-10 sm:px-12 sm:py-14 text-center overflow-hidden"
                        style={{
                            background: 'linear-gradient(150deg, rgba(14,165,233,0.1), rgba(13,148,136,0.05) 50%, rgba(255,255,255,0.015))',
                            border: '1px solid rgba(56,189,248,0.2)',
                        }}
                    >
                        <div className="relative z-10">
                            <p className="mono-label mb-5">Drop me a line</p>

                            <Magnetic strength={0.16} radius={200} className="inline-block mb-8">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    data-cursor="view"
                                    data-cursor-text="Email"
                                    className="group inline-block font-display font-bold tracking-[-0.035em] break-all leading-tight transition-colors duration-500"
                                    style={{ fontSize: 'clamp(1.25rem, 4.4vw, 2.75rem)', color: '#fff' }}
                                >
                                    <span className="relative">
                                        {personalInfo.email}
                                        <span
                                            className="absolute left-0 -bottom-1 h-[2px] w-full origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-[650ms]"
                                            style={{
                                                background: 'linear-gradient(90deg, #38bdf8, #2dd4bf)',
                                                transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                                            }}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </a>
                            </Magnetic>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Magnetic strength={0.3}>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        data-cursor="link"
                                        className="btn-primary group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Send a message
                                            <ArrowUpRight
                                                size={15}
                                                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </span>
                                    </a>
                                </Magnetic>

                                <button
                                    onClick={copyEmail}
                                    data-cursor="link"
                                    aria-live="polite"
                                    className="btn-ghost relative flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold min-w-[150px] justify-center"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {copied ? (
                                            <motion.span
                                                key="done"
                                                initial={reduced ? false : { opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={reduced ? {} : { opacity: 0, y: -8 }}
                                                transition={{ duration: 0.22 }}
                                                className="flex items-center gap-2"
                                                style={{ color: '#34d399' }}
                                            >
                                                <Check size={15} /> Copied
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="idle"
                                                initial={reduced ? false : { opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={reduced ? {} : { opacity: 0, y: -8 }}
                                                transition={{ duration: 0.22 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Copy size={15} /> Copy address
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>

                            <p className="mono-label mt-7">{personalInfo.responseTime}</p>
                        </div>
                    </SpotlightCard>
                </Reveal>

                {/* ── Channels + availability ──────────────────────── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {channels.map(({ icon: Icon, label, value, href }, i) => {
                        const El = href ? 'a' : 'div';
                        return (
                            <Reveal key={label} variant="up" delay={i * 0.07}>
                                <El
                                    {...(href ? { href, 'data-cursor': 'link' } : {})}
                                    className="group surface h-full flex items-center gap-4 px-5 py-4 rounded-2xl"
                                >
                                    <span
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            background: 'rgba(56,189,248,0.1)',
                                            border: '1px solid rgba(56,189,248,0.22)',
                                        }}
                                    >
                                        <Icon size={16} style={{ color: '#7dd3fc' }} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="mono-label block mb-1">{label}</span>
                                        <span
                                            className="block text-[13px] font-semibold break-words transition-colors duration-400 group-hover:text-white"
                                            style={{ color: 'var(--text-mid)' }}
                                        >
                                            {value}
                                        </span>
                                    </span>
                                </El>
                            </Reveal>
                        );
                    })}
                </div>

                {/* ── Status strip ─────────────────────────────────── */}
                <Reveal variant="up" delay={0.2} className="mt-3">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-2xl"
                        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)' }}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            <span className="flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                                </span>
                                <span
                                    className="text-[12.5px] font-semibold"
                                    style={{ color: '#34d399' }}
                                >
                                    Available for new work
                                </span>
                            </span>

                            <span
                                className="flex items-center gap-2 font-mono text-[12px] tabular-nums"
                                style={{ color: 'var(--text-lo)' }}
                            >
                                <Clock size={12} style={{ color: 'var(--text-xlo)' }} />
                                {clock || '--:--:--'}
                                <span style={{ color: 'var(--text-xlo)' }}>{personalInfo.timezone}</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <Magnetic key={label} strength={0.4} radius={60}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        data-cursor="link"
                                        className="w-10 h-10 flex items-center justify-center rounded-full surface"
                                        style={{ color: 'var(--text-mid)' }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

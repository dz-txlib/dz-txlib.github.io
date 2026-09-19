'use client';

import { Mail, MapPin, Linkedin, Github, ArrowUp, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { useScroll } from './ScrollProvider';
import { Reveal } from './ui/Motion';

export default function Footer() {
    const { scrollToSection, scrollToTop, navItems } = useScroll();
    const reduced = useReducedMotion();
    const year = new Date().getFullYear();

    return (
        <footer
            className="relative overflow-hidden"
            style={{ background: 'var(--surface-0)', borderTop: '1px solid var(--line)' }}
        >
            {/* Shimmer hairline */}
            <div
                className="absolute top-0 left-0 right-0 h-px animate-shimmer"
                style={{
                    background: 'linear-gradient(90deg, transparent, #0ea5e9, #2dd4bf, #0369a1, transparent)',
                    backgroundSize: '200% 100%',
                }}
                aria-hidden="true"
            />
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[320px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.1), transparent 70%)' }}
                aria-hidden="true"
            />

            {/* ══ Oversized name ticker ═══════════════════════════ */}
            <div className="relative overflow-hidden py-8 sm:py-10 marquee-track" aria-hidden="true">
                <div className="flex w-max animate-marquee-slow">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i} className="flex items-center gap-8 px-6">
                            <span
                                className="font-display font-bold tracking-[-0.03em] whitespace-nowrap text-outline-accent"
                                style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
                            >
                                Mohammad Talib Uddin
                            </span>
                            <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ background: 'rgba(45,212,191,0.5)' }}
                            />
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-10">
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-12"
                    style={{ borderTop: '1px solid var(--line)' }}
                >
                    {/* Brand */}
                    <div className="lg:col-span-5 space-y-5">
                        <button
                            onClick={scrollToTop}
                            data-cursor="link"
                            className="group flex items-center gap-2.5"
                            aria-label="Back to top"
                        >
                            <span
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                style={{
                                    background: 'linear-gradient(135deg, #0ea5e9, #0f766e)',
                                    boxShadow: '0 0 0 1px rgba(56,189,248,0.25)',
                                }}
                            >
                                <span className="font-display text-sm font-bold text-white">T</span>
                            </span>
                            <span className="font-display text-xl font-bold tracking-tight text-white">
                                Talib<span style={{ color: 'var(--accent-bright)' }}>.</span>
                            </span>
                        </button>

                        <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-lo)' }}>
                            Backend engineer building scalable systems with Java, Spring Boot, Python and
                            cloud infrastructure — from first schema to production traffic.
                        </p>

                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                            style={{
                                background: 'rgba(16,185,129,0.07)',
                                border: '1px solid rgba(16,185,129,0.2)',
                            }}
                        >
                            <motion.span
                                animate={reduced ? {} : { scale: [1, 1.35, 1] }}
                                transition={{ repeat: Infinity, duration: 2.2 }}
                                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                                aria-hidden="true"
                            />
                            <span className="text-[11px] font-semibold" style={{ color: '#34d399' }}>
                                Available for work
                            </span>
                        </span>
                    </div>

                    {/* Navigate */}
                    <div className="lg:col-span-3">
                        <h2 className="mono-label mb-5">Navigate</h2>
                        <nav aria-label="Footer navigation">
                            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-2.5 gap-x-4">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            data-cursor="link"
                                            className="group flex items-center gap-2 text-sm link-quiet"
                                        >
                                            <span
                                                className="font-mono text-[9px] tabular-nums opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{ color: 'var(--accent-bright)' }}
                                                aria-hidden="true"
                                            >
                                                {item.index}
                                            </span>
                                            <span className="transition-transform duration-400 group-hover:translate-x-0.5">
                                                {item.name}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h2 className="mono-label mb-5">Elsewhere</h2>
                        <div className="space-y-3 mb-6">
                            {[
                                { icon: Mail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                { icon: MapPin, value: personalInfo.location, href: null },
                            ].map(({ icon: Icon, value, href }) => {
                                const El = href ? 'a' : 'div';
                                return (
                                    <El
                                        key={value}
                                        {...(href ? { href, 'data-cursor': 'link' } : {})}
                                        className={`group flex items-center gap-3 text-sm ${href ? 'link-quiet' : ''}`}
                                        style={href ? undefined : { color: 'var(--text-lo)' }}
                                    >
                                        <span
                                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                            style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid var(--line)',
                                            }}
                                        >
                                            <Icon size={12} />
                                        </span>
                                        <span className="break-all">{value}</span>
                                    </El>
                                );
                            })}
                        </div>

                        <div className="flex gap-2">
                            {[
                                { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                { href: personalInfo.github, icon: Github, label: 'GitHub' },
                                { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
                            ].map(({ href, icon: Icon, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    data-cursor="link"
                                    whileHover={reduced ? undefined : { y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl surface"
                                    style={{ color: 'var(--text-mid)' }}
                                >
                                    <Icon size={14} />
                                </motion.a>
                            ))}
                        </div>

                        <a
                            href={personalInfo.cv}
                            download
                            data-cursor="link"
                            className="group inline-flex items-center gap-1.5 mt-6 text-sm font-semibold link-underline"
                        >
                            Download resume
                            <ArrowUpRight
                                size={13}
                                className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>

                {/* ══ Bottom bar ═══════════════════════════════════ */}
                <Reveal
                    variant="fade"
                    className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ borderTop: '1px solid var(--line)' }}
                >
                    <p className="font-mono text-[11px]" style={{ color: 'var(--text-xlo)' }}>
                        © {year} {personalInfo.name}. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <p className="font-mono text-[11px]" style={{ color: 'var(--text-xlo)' }}>
                            Designed &amp; built in Bhopal
                        </p>
                        <button
                            onClick={scrollToTop}
                            data-cursor="link"
                            aria-label="Back to top"
                            className="group flex items-center gap-1.5 font-mono text-[11px] transition-colors duration-300"
                            style={{ color: 'var(--text-lo)' }}
                        >
                            Top
                            <span
                                className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-400 group-hover:-translate-y-0.5"
                                style={{
                                    background: 'rgba(56,189,248,0.1)',
                                    border: '1px solid rgba(56,189,248,0.24)',
                                    color: '#7dd3fc',
                                }}
                            >
                                <ArrowUp size={11} />
                            </span>
                        </button>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}

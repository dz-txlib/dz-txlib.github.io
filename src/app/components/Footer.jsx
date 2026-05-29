'use client';

import { Mail, MapPin, Linkedin, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { useScroll } from './ScrollProvider';

export default function Footer() {
    const { scrollToSection, navItems } = useScroll();

    return (
        <footer
            className="relative overflow-hidden"
            style={{ background: '#020810', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
            {/* Animated gradient line at very top */}
            <div
                className="absolute top-0 left-0 right-0 h-px animate-shimmer"
                style={{
                    background:
                        'linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #7c3aed, transparent)',
                    backgroundSize: '200% 100%',
                }}
                aria-hidden="true"
            />

            {/* Ambient glow */}
            <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-5">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                        >
                            <span className="font-display text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors">
                                Talib<span className="text-blue-500">.</span>
                            </span>
                        </button>
                        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            Backend Engineer building scalable systems with Java, Spring Boot, Python, and cloud technologies.
                        </p>
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                            style={{
                                background: 'rgba(16,185,129,0.08)',
                                border: '1px solid rgba(16,185,129,0.18)',
                            }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                                aria-hidden="true"
                            />
                            <span className="text-xs font-semibold" style={{ color: 'rgba(52,211,153,0.8)' }}>
                                Available for work
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-8">
                        <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-[0.12em]">
                            Quick Links
                        </h4>
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-2.5">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className="group flex items-center gap-2 text-sm transition-colors duration-200"
                                            style={{ color: 'rgba(255,255,255,0.38)' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}
                                        >
                                            <ArrowRight
                                                size={12}
                                                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                                                style={{ color: '#3b82f6' }}
                                            />
                                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                                {item.name}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-[0.12em]">
                            Contact
                        </h4>
                        <div className="space-y-3">
                            {[
                                { icon: Mail,   value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                                { icon: MapPin, value: personalInfo.location, href: null },
                            ].map(({ icon: Icon, value, href }) => {
                                const El = href ? 'a' : 'div';
                                return (
                                    <El
                                        key={value}
                                        {...(href ? { href } : {})}
                                        className="group flex items-center gap-3 text-sm transition-colors duration-200"
                                        style={{ color: 'rgba(255,255,255,0.38)' }}
                                        onMouseEnter={(e) => { if (href) e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                                        onMouseLeave={(e) => { if (href) e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}
                                    >
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                            }}
                                        >
                                            <Icon size={13} />
                                        </div>
                                        <span className="break-all text-sm">{value}</span>
                                    </El>
                                );
                            })}

                            <div className="flex gap-2.5 pt-2">
                                {[
                                    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                    { href: personalInfo.github,   icon: Github,   label: 'GitHub'   },
                                    { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
                                ].map(({ href, icon: Icon, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        transition={{ duration: 0.15 }}
                                        className="w-8 h-8 flex items-center justify-center rounded-xl transition-colors"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: 'rgba(255,255,255,0.4)',
                                        }}
                                    >
                                        <Icon size={14} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                    <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
                        Designed &amp; Built by {personalInfo.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useScroll } from './ScrollProvider';
import { personalInfo } from '../data/personalInfo';
import { Magnetic, EASE } from './ui/Motion';

export default function Navbar() {
    const { activeSection, isScrolled, scrollDir, scrollToSection, navItems } = useScroll();
    const [menuOpen, setMenuOpen] = useState(false);
    const reduced = useReducedMotion();

    /* Lock the page while the overlay menu is open */
    useEffect(() => {
        if (!menuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    const go = (id) => {
        setMenuOpen(false);
        // Let the overlay begin closing before the scroll starts,
        // otherwise the body-scroll unlock fights the smooth scroll.
        setTimeout(() => scrollToSection(id), menuOpen ? 260 : 0);
    };

    /* Hide the bar when scrolling down mid-page, reveal on scroll up */
    const hidden = isScrolled && scrollDir === 'down' && !menuOpen;

    return (
        <>
            <motion.header
                initial={false}
                animate={{ y: hidden ? -104 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.nav
                        role="navigation"
                        aria-label="Main navigation"
                        initial={false}
                        animate={{
                            marginTop: isScrolled ? 12 : 20,
                            paddingLeft: isScrolled ? 10 : 6,
                            paddingRight: isScrolled ? 10 : 6,
                        }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="pointer-events-auto flex items-center justify-between gap-4 h-14 rounded-full"
                        style={{
                            background: isScrolled ? 'rgba(8,8,11,0.72)' : 'transparent',
                            border: `1px solid ${isScrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
                            backdropFilter: isScrolled ? 'blur(18px) saturate(180%)' : 'none',
                            WebkitBackdropFilter: isScrolled ? 'blur(18px) saturate(180%)' : 'none',
                            boxShadow: isScrolled ? '0 10px 40px -18px rgba(0,0,0,0.9)' : 'none',
                            transition: 'background 0.55s, border-color 0.55s, box-shadow 0.55s',
                        }}
                    >
                        {/* Brand */}
                        <button
                            onClick={() => go('home')}
                            className="group flex items-center gap-2.5 pl-2 pr-3 shrink-0 rounded-full"
                            aria-label="Go to top"
                            data-cursor="link"
                        >
                            <span
                                className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
                                style={{
                                    background: 'linear-gradient(135deg, #0ea5e9, #0f766e)',
                                    boxShadow: '0 0 0 1px rgba(56,189,248,0.25)',
                                }}
                            >
                                <span className="font-display text-sm font-bold text-white">T</span>
                                <span
                                    className="absolute inset-0 animate-shimmer-pass"
                                    style={{
                                        background:
                                            'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)',
                                    }}
                                    aria-hidden="true"
                                />
                            </span>
                            <span className="font-display text-lg font-bold tracking-tight text-white">
                                Talib
                                <span
                                    className="inline-block transition-transform duration-500 group-hover:translate-y-[-2px]"
                                    style={{ color: 'var(--accent-bright)' }}
                                >
                                    .
                                </span>
                            </span>
                        </button>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-0.5">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => go(item.id)}
                                        aria-current={isActive ? 'true' : undefined}
                                        data-cursor="link"
                                        className="relative px-2.5 lg:px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors duration-300 group"
                                        style={{ color: isActive ? '#fff' : 'var(--text-lo)' }}
                                    >
                                        {isActive && !reduced && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 rounded-full"
                                                style={{
                                                    background: 'rgba(255,255,255,0.08)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                }}
                                                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-1.5">
                                            <span
                                                className="font-mono text-[9px] tabular-nums transition-opacity duration-300"
                                                style={{
                                                    color: 'var(--accent-bright)',
                                                    opacity: isActive ? 0.9 : 0,
                                                }}
                                                aria-hidden="true"
                                            >
                                                {item.index}
                                            </span>
                                            {item.name}
                                        </span>
                                        <span
                                            className="absolute left-2.5 right-2.5 lg:left-3.5 lg:right-3.5 bottom-1 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                            style={{ background: 'rgba(56,189,248,0.5)', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                                            aria-hidden="true"
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right side */}
                        <div className="flex items-center gap-2 shrink-0">
                            <Magnetic strength={0.3} className="hidden lg:block">
                                <button
                                    onClick={() => go('contact')}
                                    data-cursor="link"
                                    className="group flex items-center gap-1.5 pl-4 pr-3 py-2 rounded-full text-[13px] font-semibold transition-all duration-400"
                                    style={{
                                        color: '#7dd3fc',
                                        background: 'rgba(14,165,233,0.1)',
                                        border: '1px solid rgba(56,189,248,0.24)',
                                    }}
                                >
                                    Let&apos;s talk
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </button>
                            </Magnetic>

                            {/* Mobile trigger */}
                            <button
                                onClick={() => setMenuOpen((v) => !v)}
                                className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[5px] icon-btn"
                                aria-expanded={menuOpen}
                                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            >
                                <motion.span
                                    animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.35, ease: EASE }}
                                    className="block w-[18px] h-[1.5px] rounded-full bg-current"
                                />
                                <motion.span
                                    animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.35, ease: EASE }}
                                    className="block w-[18px] h-[1.5px] rounded-full bg-current"
                                />
                            </button>
                        </div>
                    </motion.nav>
                </div>
            </motion.header>

            {/* ── Mobile overlay ──────────────────────────────────── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 md:hidden flex flex-col"
                        style={{ background: 'var(--surface-0)' }}
                    >
                        <div
                            className="absolute inset-0 pointer-events-none grid-plane opacity-50"
                            style={{
                                maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 10%, transparent 75%)',
                            }}
                            aria-hidden="true"
                        />
                        <div
                            className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.16), transparent 70%)' }}
                            aria-hidden="true"
                        />

                        <nav
                            aria-label="Mobile navigation"
                            className="relative flex-1 flex flex-col justify-center px-7 gap-1"
                        >
                            {navItems.map((item, i) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, y: 26 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
                                        transition={{ delay: 0.16 + i * 0.055, duration: 0.6, ease: EASE }}
                                        onClick={() => go(item.id)}
                                        className="group flex items-baseline gap-4 py-2.5 text-left"
                                    >
                                        <span
                                            className="font-mono text-[11px] tabular-nums shrink-0"
                                            style={{ color: isActive ? 'var(--accent-bright)' : 'var(--text-xlo)' }}
                                        >
                                            {item.index}
                                        </span>
                                        <span
                                            className="font-display text-[2.1rem] font-bold tracking-tight leading-tight transition-colors duration-300"
                                            style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.45)' }}
                                        >
                                            {item.name}
                                        </span>
                                        {isActive && (
                                            <motion.span
                                                layoutId="mobile-dot"
                                                className="w-1.5 h-1.5 rounded-full self-center"
                                                style={{
                                                    background: 'var(--accent-bright)',
                                                    boxShadow: '0 0 10px rgba(56,189,248,0.8)',
                                                }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="relative px-7 pb-10 pt-6 flex items-center justify-between gap-4 border-t"
                            style={{ borderColor: 'var(--line)' }}
                        >
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-sm font-medium link-underline break-all"
                            >
                                {personalInfo.email}
                            </a>
                            <div className="flex gap-2 shrink-0">
                                {[
                                    { href: personalInfo.github, icon: Github, label: 'GitHub' },
                                    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                ].map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-full flex items-center justify-center surface"
                                        style={{ color: 'var(--text-mid)' }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

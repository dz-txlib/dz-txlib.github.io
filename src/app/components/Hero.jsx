'use client';

import { useRef, useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github, ArrowRight, Code2, Database, Cpu } from 'lucide-react';
import Image from 'next/image';
import {
    motion,
    useInView,
    useScroll,
    useTransform,
    AnimatePresence,
} from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { useScroll as useAppScroll } from './ScrollProvider';

const ROLES = [
    'Backend Engineer',
    'Java Developer',
    'API Architect',
    'System Builder',
    'Microservices Dev',
];

/* ── Character-by-character 3-D flip reveal ───────────────────────── */
function CharReveal({ text, delay = 0, className = '' }) {
    return (
        <span
            className={className}
            style={{ display: 'block', perspective: '900px', wordBreak: 'break-word' }}
            aria-hidden="true"
        >
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, rotateX: -70, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                    transition={{
                        delay: delay + i * 0.042,
                        duration: 0.52,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
                >
                    {char === ' ' ? ' ' : char}
                </motion.span>
            ))}
        </span>
    );
}

export default function Hero() {
    const { scrollToSection } = useAppScroll();
    const sectionRef = useRef(null);
    const isInView   = useInView(sectionRef, { once: true, margin: '-5%' });
    const [roleIdx, setRoleIdx] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const t = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2800);
        return () => clearInterval(t);
    }, [isInView]);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
    const bgY         = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
    const contentY    = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
    const scrollAlpha = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const socialLinks = [
        { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
        { href: personalInfo.github,   icon: Github,   label: 'GitHub'   },
    ];

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ backgroundColor: '#09090b' }}
        >
            {/* ── Atmosphere ─────────────────────────────────────────── */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute -top-[20%] -right-[8%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-glow-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-[15%] -left-[6%] w-[400px] sm:w-[580px] h-[400px] sm:h-[580px] rounded-full animate-glow-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 65%)', animationDelay: '2.2s' }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.14) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                    }}
                />
                <div className="absolute left-0 right-0 top-[30%] h-px opacity-20"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)' }} />
            </motion.div>

            {/* ── Content ────────────────────────────────────────────── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-24 sm:pt-28 pb-16 sm:pb-24">
                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center gap-0">

                    {/* ── Photo column — mobile: top, desktop: right ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 0, filter: 'blur(10px)' }}
                        animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-10 sm:mb-12 lg:mb-0"
                    >
                        <div className="relative w-[200px] sm:w-[270px] lg:w-[340px] mt-6 sm:mt-0">

                            {/* Spinning gradient border */}
                            <div
                                className="relative rounded-2xl p-[2px] overflow-hidden shadow-2xl"
                                style={{ boxShadow: '0 0 60px rgba(14,165,233,0.22), 0 0 120px rgba(14,165,233,0.08)' }}
                            >
                                <div
                                    className="absolute inset-[-55%] animate-border-spin pointer-events-none"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent 0deg, #0ea5e9 70deg, #14b8a6 140deg, #0369a1 200deg, transparent 270deg)',
                                    }}
                                    aria-hidden="true"
                                />
                                <div className="relative rounded-[14px] overflow-hidden aspect-[3/4]" style={{ background: '#09090b' }}>
                                    <Image
                                        src={personalInfo.image}
                                        alt={`${personalInfo.name} — Backend Engineer`}
                                        fill
                                        className="object-cover object-[center_8%] transition-transform duration-700 ease-out hover:scale-[1.04]"
                                        priority
                                        fetchPriority="high"
                                        decoding="sync"
                                        sizes="(max-width: 640px) 200px, (max-width: 1024px) 270px, 340px"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                                        style={{ background: 'linear-gradient(to top, #09090b 0%, transparent 100%)' }}
                                        aria-hidden="true"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] mb-0.5" style={{ color: 'rgba(56,189,248,0.5)' }}>
                                            Backend Engineer
                                        </div>
                                        <div className="font-display text-sm font-semibold text-white">
                                            @ Affy Cloud Solutions
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating card — Experience */}
                            <motion.div
                                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ delay: 0.75, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="hidden sm:block absolute -top-4 -right-6 lg:-right-8 px-3 lg:px-4 py-2 lg:py-3 rounded-xl shadow-2xl animate-float"
                                style={{
                                    background: 'rgba(9,9,11,0.88)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(56,189,248,0.18)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.08)',
                                }}
                            >
                                <div className="font-mono text-[9px] uppercase tracking-[0.18em] mb-0.5" style={{ color: 'rgba(255,255,255,0.48)' }}>
                                    Experience
                                </div>
                                <div className="font-display text-sm lg:text-base font-bold text-white">2+ Years</div>
                                <div className="text-xs font-medium" style={{ color: 'rgba(52,211,153,0.8)' }}>
                                    Production Systems
                                </div>
                            </motion.div>

                            {/* Floating card — Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ delay: 0.95, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="hidden sm:block absolute -bottom-4 -left-6 lg:-left-8 px-3 lg:px-4 py-2 lg:py-3 rounded-xl shadow-2xl animate-float-delayed"
                                style={{
                                    background: 'rgba(9,9,11,0.88)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(20,184,166,0.18)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(20,184,166,0.08)',
                                }}
                            >
                                <div className="font-mono text-[9px] uppercase tracking-[0.18em] mb-0.5" style={{ color: 'rgba(255,255,255,0.48)' }}>
                                    Primary Stack
                                </div>
                                <div className="font-display text-sm lg:text-base font-bold text-white">Java · Python</div>
                                <div className="text-xs font-medium" style={{ color: 'rgba(125,211,252,0.75)' }}>
                                    Spring Boot · Django
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── Text column ─────────────────────────────────── */}
                    <motion.div
                        style={{ y: contentY }}
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 order-2 lg:order-1 w-full min-w-0"
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div
                                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full"
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                }}
                            >
                                <span className="relative flex h-2 w-2 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                                    Available for work
                                </span>
                            </div>
                        </motion.div>

                        {/* Code label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="font-mono text-xs uppercase tracking-[0.22em]"
                            style={{ color: 'rgba(56,189,248,0.5)' }}
                        >
                            {'<'} {personalInfo.role.toLowerCase().replace(' ', '_')} {' />'}
                        </motion.div>

                        {/* Name — character reveal. Rendered unconditionally so the
                            name (and the page's only h1) exists in the static HTML. */}
                        <h1 className="w-full overflow-hidden leading-none space-y-0.5">
                            <span className="sr-only">Mohammad Talib Uddin — Backend Engineer</span>
                            <CharReveal
                                text="Mohammad"
                                delay={0.18}
                                className="font-display text-[clamp(2rem,8vw,4.5rem)] lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-white/80"
                            />
                            <CharReveal
                                text="Talib Uddin"
                                delay={0.38}
                                className="font-display text-[clamp(2.4rem,9.5vw,5.5rem)] lg:text-7xl xl:text-8xl font-bold tracking-[-0.03em] text-white"
                            />
                        </h1>

                        {/* Cycling role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className="flex items-center gap-2 h-8 overflow-hidden"
                            aria-live="polite"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIdx}
                                    initial={{ y: 18, opacity: 0, filter: 'blur(4px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -18, opacity: 0, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-display text-base sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-teal-400 whitespace-nowrap"
                                >
                                    {ROLES[roleIdx]}
                                </motion.span>
                            </AnimatePresence>
                            <span
                                className="w-0.5 h-6 rounded-sm animate-cursor-blink shrink-0"
                                style={{ background: 'linear-gradient(to bottom, #38bdf8, #2dd4bf)', opacity: 0.8 }}
                                aria-hidden="true"
                            />
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            className="text-sm sm:text-base lg:text-[17px] leading-relaxed w-full max-w-[500px] font-medium"
                            style={{ color: 'rgba(255,255,255,0.58)' }}
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Tech chips */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-wrap gap-2 justify-center lg:justify-start w-full"
                        >
                            {['Java', 'Spring Boot', 'Python', 'Django', 'Microservices', 'AWS'].map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 1.5 + i * 0.06, duration: 0.4 }}
                                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                                    className="px-2.5 sm:px-3 py-1 text-xs font-mono font-medium rounded-lg cursor-default"
                                    style={{
                                        color: 'rgba(125,211,252,0.75)',
                                        background: 'rgba(14,165,233,0.10)',
                                        border: '1px solid rgba(14,165,233,0.20)',
                                    }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
                        >
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group relative px-6 py-3.5 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
                                style={{
                                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                                    boxShadow: '0 0 28px rgba(14,165,233,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-2.5">
                                    View My Work
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <span
                                    className="absolute inset-0 pointer-events-none animate-shimmer-pass"
                                    style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }}
                                    aria-hidden="true"
                                />
                            </button>

                            <a
                                href={personalInfo.cv}
                                download
                                aria-label="Download resume PDF"
                                className="group px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0"
                                style={{
                                    color: 'rgba(255,255,255,0.68)',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                }}
                            >
                                <Download size={16} style={{ color: 'rgba(255,255,255,0.55)' }} />
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Social + quick stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-3 justify-center lg:justify-start w-full"
                        >
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.08 }}
                                    transition={{ duration: 0.15 }}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl"
                                    style={{
                                        color: 'rgba(255,255,255,0.65)',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.09)',
                                    }}
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}

                            <motion.button
                                onClick={() => scrollToSection('contact')}
                                aria-label="Contact"
                                whileHover={{ y: -3, scale: 1.08 }}
                                transition={{ duration: 0.15 }}
                                className="w-9 h-9 flex items-center justify-center rounded-xl"
                                style={{
                                    color: 'rgba(255,255,255,0.65)',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.09)',
                                }}
                            >
                                <Mail size={16} />
                            </motion.button>

                            <div className="h-4 w-px mx-1" style={{ background: 'rgba(255,255,255,0.12)' }} aria-hidden="true" />

                            <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                <span className="flex items-center gap-1.5">
                                    <Code2 size={12} />
                                    <strong style={{ color: 'rgba(255,255,255,0.7)' }}>50+</strong>
                                    <span>APIs</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Database size={12} />
                                    <strong style={{ color: 'rgba(255,255,255,0.7)' }}>1k+</strong>
                                    <span>Users</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Cpu size={12} />
                                    <strong style={{ color: 'rgba(255,255,255,0.7)' }}>4+</strong>
                                    <span>Products</span>
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity: scrollAlpha }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20 pointer-events-none"
                aria-hidden="true"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="w-px h-10"
                    style={{ background: 'linear-gradient(to bottom, rgba(56,189,248,0.5), transparent)' }}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    scroll
                </span>
            </motion.div>
        </section>
    );
}

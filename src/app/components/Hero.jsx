'use client';

import { useRef, useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github, ArrowDownRight, Activity } from 'lucide-react';
import {
    motion,
    useScroll as useFramerScroll,
    useTransform,
    useSpring,
    AnimatePresence,
    useReducedMotion,
} from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { useScroll as useAppScroll } from './ScrollProvider';
import { CharReveal, Magnetic, EASE } from './ui/Motion';
import { Aurora, NetworkField, GridPlane } from './ui/Atmosphere';

const ROLES = [
    'Backend Engineer',
    'Java · Spring Boot',
    'Python · Django',
    'Microservices Architect',
    'API Designer',
];

const STACK_STRIP = [
    'Java', 'Spring Boot', 'Python', 'Django REST', 'PostgreSQL', 'Redis',
    'Docker', 'AWS', 'Kafka', 'MySQL', 'FastAPI', 'Nginx', 'MongoDB', 'Microservices',
];

/* Hero choreography starts as the intro curtain parts. */
const T = 0.85;

export default function Hero() {
    const { scrollToSection } = useAppScroll();
    const sectionRef = useRef(null);
    const reduced = useReducedMotion();
    const [roleIdx, setRoleIdx] = useState(0);
    const [clock, setClock] = useState('');

    /* Role rotator */
    useEffect(() => {
        if (reduced) return;
        const t = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2600);
        return () => clearInterval(t);
    }, [reduced]);

    /* Live local time — small signal that the page is alive, and
       genuinely useful to anyone working out when to reach out. */
    useEffect(() => {
        const tick = () => {
            setClock(
                new Intl.DateTimeFormat('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Kolkata',
                }).format(new Date())
            );
        };
        tick();
        const t = setInterval(tick, 1000 * 20);
        return () => clearInterval(t);
    }, []);

    /* Scroll-linked exit */
    const { scrollYProgress } = useFramerScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const visualY = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-10%']), {
        stiffness: 120,
        damping: 30,
    });

    const socials = [
        { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
        { href: personalInfo.github, icon: Github, label: 'GitHub' },
        { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
    ];

    const fade = (delay, y = 20) =>
        reduced
            ? {}
            : {
                  initial: { opacity: 0, y },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.9, delay, ease: EASE },
              };

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
            style={{ background: 'var(--surface-1)' }}
        >
            {/* ══ Background stack ═══════════════════════════════════ */}
            <motion.div
                style={reduced ? undefined : { y: bgY }}
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                <Aurora intensity={0.5} />
                <GridPlane
                    variant="grid"
                    mask="radial-gradient(ellipse 78% 68% at 50% 45%, black 5%, transparent 72%)"
                    opacity={0.8}
                />
                {/* Horizon — a single bright line anchors the composition */}
                <div
                    className="absolute left-0 right-0 top-[62%] h-px"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent, rgba(56,189,248,0.35) 35%, rgba(45,212,191,0.28) 65%, transparent)',
                    }}
                />
                <div
                    className="absolute inset-x-0 bottom-0 h-56"
                    style={{ background: 'linear-gradient(to top, var(--surface-1), transparent)' }}
                />
            </motion.div>

            {/* Interactive node field sits above the static layers */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <NetworkField maxNodes={72} linkDistance={132} />
            </div>

            {/* ══ Content ════════════════════════════════════════════ */}
            <motion.div
                style={reduced ? undefined : { y: contentY, opacity: contentOpacity, scale: contentScale }}
                className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16 sm:pt-32 sm:pb-24"
            >
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                    {/* ── Visual column (first on mobile) ──────────── */}
                    <motion.div
                        style={reduced ? undefined : { y: visualY }}
                        {...fade(T + 0.15, 28)}
                        className="lg:col-span-5 lg:col-start-8 lg:row-start-1 flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <PortraitFigure clock={clock} />
                    </motion.div>

                    {/* ── Type column ──────────────────────────────── */}
                    <div className="lg:col-span-7 lg:row-start-1 order-2 lg:order-1 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Status */}
                        <motion.div {...fade(T)} className="mb-7">
                            <span
                                className="inline-flex items-center gap-2.5 pl-2.5 pr-3.5 py-1.5 rounded-full backdrop-blur-md"
                                style={{
                                    background: 'rgba(16,185,129,0.08)',
                                    border: '1px solid rgba(16,185,129,0.22)',
                                }}
                            >
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                                </span>
                                <span
                                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                    style={{ color: 'rgba(52,211,153,0.92)' }}
                                >
                                    Available for work
                                </span>
                            </span>
                        </motion.div>

                        {/* Name */}
                        <h1 className="w-full leading-[0.86] mb-6">
                            <span className="sr-only">
                                Mohammad Talib Uddin — Backend Engineer
                            </span>
                            <span
                                className="block"
                                style={{ fontSize: 'clamp(2.3rem, 8.4vw, 5rem)' }}
                            >
                                <CharReveal
                                    text="Mohammad"
                                    delay={T + 0.05}
                                    stagger={0.032}
                                    className="font-display font-bold tracking-[-0.045em] text-white/75"
                                    play
                                />
                            </span>
                            <span
                                className="block"
                                style={{ fontSize: 'clamp(2.75rem, 10.2vw, 6.2rem)' }}
                            >
                                <CharReveal
                                    text="Talib Uddin"
                                    delay={T + 0.22}
                                    stagger={0.032}
                                    className="font-display font-bold tracking-[-0.05em]"
                                    gradient
                                    play
                                />
                            </span>
                        </h1>

                        {/* Role rotator */}
                        <motion.div
                            {...fade(T + 0.4)}
                            className="flex items-center gap-2.5 mb-7 h-7"
                            aria-live="polite"
                        >
                            <span className="font-mono text-sm" style={{ color: 'rgba(56,189,248,0.45)' }}>
                                {'>'}
                            </span>
                            <span className="relative overflow-hidden h-7 flex items-center">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={roleIdx}
                                        initial={reduced ? false : { y: 22, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={reduced ? {} : { y: -22, opacity: 0 }}
                                        transition={{ duration: 0.42, ease: EASE }}
                                        className="font-mono text-sm sm:text-base font-medium whitespace-nowrap"
                                        style={{ color: 'rgba(255,255,255,0.82)' }}
                                    >
                                        {ROLES[roleIdx]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <span
                                className="w-[7px] h-[15px] animate-cursor-blink shrink-0"
                                style={{ background: 'var(--accent-bright)' }}
                                aria-hidden="true"
                            />
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            {...fade(T + 0.5)}
                            className="max-w-[46ch] leading-relaxed mb-9"
                            style={{ color: 'var(--text-lo)', fontSize: 'var(--step-0)' }}
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            {...fade(T + 0.6)}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10"
                        >
                            <Magnetic strength={0.28}>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    data-cursor="link"
                                    className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2.5 group"
                                >
                                    <span className="relative z-10 flex items-center gap-2.5">
                                        View selected work
                                        <ArrowDownRight
                                            size={16}
                                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                        />
                                    </span>
                                </button>
                            </Magnetic>

                            <Magnetic strength={0.24}>
                                <a
                                    href={personalInfo.cv}
                                    download
                                    data-cursor="link"
                                    aria-label="Download resume PDF"
                                    className="btn-ghost w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2.5"
                                >
                                    <Download size={15} />
                                    Resume
                                </a>
                            </Magnetic>
                        </motion.div>

                        {/* Socials + metrics */}
                        <motion.div
                            {...fade(T + 0.7)}
                            className="flex flex-wrap items-center gap-x-5 gap-y-4 justify-center lg:justify-start"
                        >
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

                            <span className="h-5 w-px" style={{ background: 'var(--line-strong)' }} aria-hidden="true" />

                            <dl className="flex items-center gap-5 font-mono text-xs" style={{ color: 'var(--text-xlo)' }}>
                                {[
                                    ['50+', 'APIs'],
                                    ['1k+', 'Users'],
                                    ['2+', 'Years'],
                                ].map(([n, l]) => (
                                    <div key={l} className="flex items-baseline gap-1.5">
                                        <dt className="sr-only">{l}</dt>
                                        <dd className="contents">
                                            <span className="font-display text-base font-bold text-white/85">{n}</span>
                                            <span className="uppercase tracking-[0.14em]">{l}</span>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* ══ Stack ticker — full-bleed, anchors the fold ═══════ */}
            <motion.div
                {...fade(T + 0.85)}
                className="relative z-10 w-full border-y overflow-hidden marquee-track"
                style={{
                    borderColor: 'var(--line)',
                    background: 'rgba(255,255,255,0.015)',
                    backdropFilter: 'blur(6px)',
                }}
            >
                <div className="flex w-max animate-marquee-slow py-3">
                    {[...STACK_STRIP, ...STACK_STRIP].map((tech, i) => (
                        <span
                            key={`${tech}-${i}`}
                            className="flex items-center gap-8 px-6 font-mono text-[11px] uppercase tracking-[0.24em] whitespace-nowrap"
                            style={{ color: 'rgba(255,255,255,0.32)' }}
                        >
                            {tech}
                            <span
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{ background: 'rgba(56,189,248,0.45)' }}
                                aria-hidden="true"
                            />
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Scroll cue */}
            <motion.button
                onClick={() => scrollToSection('about')}
                style={reduced ? undefined : { opacity: cueOpacity }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2.5 z-20 group"
                aria-label="Scroll to about section"
                data-cursor="link"
            >
                <span
                    className="font-mono text-[9px] uppercase tracking-[0.3em]"
                    style={{ color: 'var(--text-xlo)' }}
                >
                    Scroll
                </span>
                <span
                    className="relative w-px h-11 overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                    aria-hidden="true"
                >
                    <motion.span
                        className="absolute inset-x-0 h-4"
                        style={{ background: 'linear-gradient(to bottom, transparent, var(--accent-bright))' }}
                        animate={reduced ? {} : { y: ['-100%', '400%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    />
                </span>
            </motion.button>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════════════
   PortraitFigure — a cut-out figure, not a photo in a box.

   The source render is hard-cropped at the forearms, so the lower
   fifth is masked away: the figure dissolves into the section
   instead of ending on a visible slice. The node field renders
   behind it, and the concentric rings give the silhouette
   something to sit against.
   ═══════════════════════════════════════════════════════════════ */
function PortraitFigure({ clock }) {
    const reduced = useReducedMotion();

    return (
        <div className="relative w-[clamp(260px,66vw,470px)]">
            {/* Bloom bed */}
            <div
                className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[125%] aspect-square rounded-full pointer-events-none animate-glow-pulse"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, rgba(20,184,166,0.08) 40%, transparent 68%)' }}
                aria-hidden="true"
            />

            {/* Concentric rings — echoes the orbit motif used in the
                project glyphs, and anchors a figure with no frame. */}
            <svg
                className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[132%] aspect-square pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="62" stroke="rgba(56,189,248,0.16)" strokeWidth="0.4" />
                <circle cx="100" cy="100" r="78" stroke="rgba(56,189,248,0.11)" strokeWidth="0.4" />
                <circle
                    cx="100" cy="100" r="92"
                    stroke="rgba(45,212,191,0.14)" strokeWidth="0.4"
                    strokeDasharray="2 5"
                    className={reduced ? '' : 'animate-border-spin'}
                    style={{ transformOrigin: '100px 100px', animationDuration: '46s' }}
                />
            </svg>

            {/* Contact pool — without it the masked base reads as a
                figure hovering in mid-air rather than standing. */}
            <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[2%] w-[78%] h-14 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.16) 0%, rgba(20,184,166,0.07) 45%, transparent 72%)',
                    filter: 'blur(6px)',
                }}
                aria-hidden="true"
            />

            {/* Figure */}
            <img
                src="/portrait-780.webp"
                srcSet="/portrait-520.webp 520w, /portrait-780.webp 780w, /portrait-1048.webp 1048w"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 470px"
                width={1048}
                height={1351}
                alt={`${personalInfo.name} — Backend Engineer`}
                fetchPriority="high"
                decoding="async"
                className="figure-cutout relative w-full h-auto select-none"
                draggable="false"
            />

            {/* Identity chip, floating where the card HUD used to sit */}
            <div
                className="absolute left-0 bottom-[12%] sm:bottom-[14%] -translate-x-2 sm:-translate-x-6 rounded-xl px-3 py-2.5 backdrop-blur-xl"
                style={{
                    background: 'rgba(8,8,11,0.78)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 16px 44px -16px rgba(0,0,0,0.95)',
                }}
            >
                <div className="flex items-center justify-between gap-3 mb-0.5">
                    <span
                        className="font-mono text-[8px] uppercase tracking-[0.2em]"
                        style={{ color: 'rgba(56,189,248,0.75)' }}
                    >
                        Backend Engineer
                    </span>
                    <span
                        className="flex items-center gap-1 font-mono text-[8px] tabular-nums"
                        style={{ color: 'rgba(52,211,153,0.9)' }}
                    >
                        <Activity size={8} />
                        {clock || '--:--'}
                    </span>
                </div>
                <div className="font-display text-[13px] font-semibold text-white whitespace-nowrap">
                    @ Affy Cloud Solutions
                </div>
            </div>

            {/* Floating spec chips */}
            <motion.div
                initial={reduced ? false : { opacity: 0, x: 18, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: T + 0.75, duration: 0.7, ease: EASE }}
                className="hidden sm:block absolute top-[8%] -right-4 lg:-right-8 animate-float"
            >
                <SpecChip label="Uptime" value="99.9%" tone="#34d399" />
            </motion.div>

            <motion.div
                initial={reduced ? false : { opacity: 0, x: -18, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: T + 0.9, duration: 0.7, ease: EASE }}
                className="hidden sm:block absolute top-[36%] -left-8 lg:-left-14 animate-float-delayed"
            >
                <SpecChip label="Latency" value="-40%" tone="#38bdf8" sub="after caching" />
            </motion.div>
        </div>
    );
}

function SpecChip({ label, value, tone, sub }) {
    return (
        <div
            className="px-3.5 py-2.5 rounded-xl backdrop-blur-xl"
            style={{
                background: 'rgba(8,8,11,0.82)',
                border: `1px solid ${tone}33`,
                boxShadow: `0 12px 40px -12px rgba(0,0,0,0.9), 0 0 0 1px ${tone}12`,
            }}
        >
            <div className="font-mono text-[8px] uppercase tracking-[0.22em]" style={{ color: 'var(--text-xlo)' }}>
                {label}
            </div>
            <div className="font-display text-base font-bold leading-tight" style={{ color: tone }}>
                {value}
            </div>
            {sub && (
                <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-xlo)' }}>
                    {sub}
                </div>
            )}
        </div>
    );
}

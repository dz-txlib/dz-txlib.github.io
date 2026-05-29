'use client';

import { useState, useMemo } from 'react';
import { Code } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills';
import CurrentlyLearning from './CurrentlyLearning';

const CAT_META = {
    'Backend Development':     { color: '#0ea5e9', glow: 'rgba(14,165,233,0.25)',  bg: 'rgba(14,165,233,0.08)',  border: 'rgba(14,165,233,0.22)', short: 'Backend'  },
    'Databases':               { color: '#10b981', glow: 'rgba(16,185,129,0.22)', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.20)', short: 'DB'       },
    'Cloud & DevOps':          { color: '#f97316', glow: 'rgba(249,115,22,0.22)', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.20)', short: 'DevOps'   },
    'Tools & Version Control': { color: '#8b5cf6', glow: 'rgba(139,92,246,0.22)', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.20)', short: 'Tools'    },
    'Architecture & Concepts': { color: '#14b8a6', glow: 'rgba(20,184,166,0.22)', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.20)', short: 'Arch'     },
};
const ALL = 'All';

const allFlat = Object.values(skills).flatMap((c) => c.items);

function MarqueeRow({ items, reverse = false }) {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden">
            <div className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {doubled.map((skill, i) => (
                    <div
                        key={`${skill.name}-${i}`}
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl flex-shrink-0 select-none"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={18}
                            height={18}
                            className="w-[18px] h-[18px] object-contain"
                            loading="lazy"
                            unoptimized
                        />
                        <span className="text-[13px] font-medium whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SkillCard({ skill, accentColor, glowColor, delay }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.88, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.84, y: 8 }}
            transition={{ duration: 0.38, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                y: -4,
                boxShadow: `0 8px 24px ${glowColor}, 0 0 0 1px ${accentColor}30`,
                transition: { duration: 0.18 },
            }}
            className="group flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl cursor-default transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', willChange: 'transform' }}
        >
            <div
                className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                    unoptimized
                />
            </div>
            <span className="text-xs font-semibold text-center leading-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {skill.name}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    const categories   = useMemo(() => [ALL, ...Object.keys(skills)], []);
    const [active, setActive] = useState(ALL);

    const visibleSkills = useMemo(() => {
        if (active === ALL) return allFlat;
        return skills[active]?.items ?? [];
    }, [active]);

    const meta        = active === ALL ? null : CAT_META[active];
    const accentColor = meta?.color ?? '#0ea5e9';
    const glowColor   = meta?.glow  ?? 'rgba(14,165,233,0.2)';

    const row2 = useMemo(() => {
        const keys = Object.keys(skills);
        return keys.slice(2).flatMap((k) => skills[k].items);
    }, []);

    return (
        <section
            id="skills"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #09090b 0%, #111115 100%)' }}
        >
            {/* Atmosphere */}
            <div
                className="absolute bottom-0 left-[-4%] w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.08) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 20% 80%, black 20%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-14"
                >
                    <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                        style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)' }}
                    >
                        <Code size={13} style={{ color: 'rgba(56,189,248,0.9)' }} />
                        <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(125,211,252,0.85)' }}>
                            Technical Arsenal
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            Core{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                                Expertise
                            </span>
                        </h2>
                        <p className="sm:text-right max-w-[260px] text-[15px] leading-snug" style={{ color: 'rgba(255,255,255,0.38)' }}>
                            Technologies I use to build robust, scalable, production-ready systems.
                        </p>
                    </div>
                </motion.div>

                {/* Dual marquee showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-12 space-y-3 marquee-track"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                            Full Stack
                        </span>
                        <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                            style={{ background: 'linear-gradient(to right, #09090b, transparent)' }} aria-hidden="true" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                            style={{ background: 'linear-gradient(to left, #09090b, transparent)' }} aria-hidden="true" />
                        <MarqueeRow items={allFlat} />
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                            style={{ background: 'linear-gradient(to right, #09090b, transparent)' }} aria-hidden="true" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                            style={{ background: 'linear-gradient(to left, #09090b, transparent)' }} aria-hidden="true" />
                        <MarqueeRow items={row2.length > 4 ? row2 : allFlat} reverse />
                    </div>
                </motion.div>

                {/* Primary stack banner */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8 rounded-2xl px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                    <div className="flex items-center gap-2.5">
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                            className="w-2 h-2 rounded-full bg-sky-500"
                            aria-hidden="true"
                        />
                        <div>
                            <div className="font-display text-sm font-semibold text-white">Primary Stack</div>
                            <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Technologies I work with daily</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Java', 'Spring Boot', 'Microservices', 'MySQL', 'AWS'].map((tech) => (
                            <motion.span
                                key={tech}
                                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(14,165,233,0.2)' }}
                                transition={{ duration: 0.15 }}
                                className="px-3 py-1.5 font-mono text-xs font-medium rounded-xl cursor-default transition-all duration-200"
                                style={{
                                    color: 'rgba(125,211,252,0.7)',
                                    background: 'rgba(14,165,233,0.09)',
                                    border: '1px solid rgba(14,165,233,0.18)',
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="flex flex-wrap gap-2 mb-8"
                    role="tablist"
                    aria-label="Skill categories"
                >
                    {categories.map((cat) => {
                        const isActive  = active === cat;
                        const catMeta   = cat === ALL ? null : CAT_META[cat];
                        const accent    = catMeta?.color ?? '#0ea5e9';
                        const count     = cat === ALL ? allFlat.length : (skills[cat]?.items.length ?? 0);
                        const shortName = catMeta?.short ?? cat;

                        return (
                            <button
                                key={cat}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActive(cat)}
                                className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                style={
                                    isActive
                                        ? {
                                              background: `${accent}14`,
                                              color: accent,
                                              border: `1px solid ${accent}28`,
                                              boxShadow: `0 0 16px ${accent}20`,
                                          }
                                        : {
                                              background: 'rgba(255,255,255,0.04)',
                                              color: 'rgba(255,255,255,0.45)',
                                              border: '1px solid rgba(255,255,255,0.09)',
                                          }
                                }
                            >
                                {shortName}
                                <span
                                    className="text-[11px] font-bold px-1.5 py-0.5 rounded-lg tabular-nums"
                                    style={
                                        isActive
                                            ? { background: `${accent}20`, color: accent }
                                            : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)' }
                                    }
                                >
                                    {count}
                                </span>

                                {isActive && (
                                    <motion.span
                                        layoutId="tab-glow"
                                        className="absolute -bottom-[1px] left-3 right-3 h-[2px] rounded-full"
                                        style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Skill grid */}
                <div className="min-h-[220px]" role="tabpanel" aria-label={`Skills: ${active}`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                                {visibleSkills.map((skill, i) => (
                                    <SkillCard
                                        key={`${active}-${skill.name}`}
                                        skill={skill}
                                        accentColor={accentColor}
                                        glowColor={glowColor}
                                        delay={i * 0.035}
                                    />
                                ))}
                            </div>

                            {active !== ALL && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-4 flex items-center gap-2"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.4, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: accentColor }}
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                        {visibleSkills.length} technologies in{' '}
                                        <span style={{ color: accentColor }}>{active}</span>
                                    </span>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <CurrentlyLearning />
            </div>
        </section>
    );
}

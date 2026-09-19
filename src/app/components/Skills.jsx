'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Layers3 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { skills } from '../data/skills';
import CurrentlyLearning from './CurrentlyLearning';
import SectionHeader from './SectionHeader';
import { Reveal, EASE } from './ui/Motion';
import { GridPlane, SectionGlow } from './ui/Atmosphere';

const CAT_META = {
    'Backend Development': {
        color: '#38bdf8', short: 'Backend',
        note: 'Where most of my day goes — services, domain logic and the APIs other teams build on.',
    },
    'Databases': {
        color: '#34d399', short: 'Data',
        note: 'Schema design, indexing and caching. Most latency wins start here, not in the app code.',
    },
    'Cloud & DevOps': {
        color: '#fb923c', short: 'DevOps',
        note: 'Shipping and running what I build: containers, pipelines, reverse proxies and VPS/AWS setup.',
    },
    'Tools & Version Control': {
        color: '#a78bfa', short: 'Tooling',
        note: 'The everyday loop — version control, API testing and documentation that stays current.',
    },
    'Architecture & Concepts': {
        color: '#2dd4bf', short: 'Architecture',
        note: 'The thinking layer: service boundaries, auth models and the patterns that keep code honest.',
    },
};

const ALL = 'All';
const ALL_NOTE = 'The full toolkit — everything I reach for across backend, data, infrastructure and design.';

const allFlat = Object.values(skills).flatMap((c) => c.items);

/* Three marquee rows, each a different slice of the stack so the
   plane never shows the same icon twice side by side. */
const ROWS = [
    allFlat.slice(0, Math.ceil(allFlat.length / 3)),
    allFlat.slice(Math.ceil(allFlat.length / 3), Math.ceil((allFlat.length * 2) / 3)),
    allFlat.slice(Math.ceil((allFlat.length * 2) / 3)),
];

function SkillIcon({ skill, size = 20 }) {
    if (skill.lucide) {
        const Lucide = skill.lucide;
        return <Lucide size={size} style={{ color: 'rgba(125,211,252,0.9)' }} aria-hidden="true" />;
    }
    return (
        <Image
            src={skill.icon}
            alt=""
            width={size}
            height={size}
            className="object-contain"
            style={{ width: size, height: size }}
            loading="lazy"
            unoptimized
            aria-hidden="true"
        />
    );
}

export default function Skills() {
    const categories = useMemo(() => [ALL, ...Object.keys(skills)], []);
    const [active, setActive] = useState(ALL);
    const reduced = useReducedMotion();

    const visible = useMemo(
        () => (active === ALL ? allFlat : skills[active]?.items ?? []),
        [active]
    );

    const meta = active === ALL ? null : CAT_META[active];
    const accent = meta?.color ?? '#38bdf8';
    const note = meta?.note ?? ALL_NOTE;

    const onTabKey = (e, idx) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const next = (idx + dir + categories.length) % categories.length;
        setActive(categories[next]);
        e.currentTarget.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]')[next]?.focus();
    };

    return (
        <section
            id="skills"
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--surface-1) 0%, var(--surface-0) 100%)' }}
        >
            <GridPlane
                variant="dots"
                mask="radial-gradient(ellipse 60% 50% at 15% 85%, black 0%, transparent 70%)"
                opacity={0.7}
            />
            <SectionGlow x="8%" y="88%" size={560} color="rgba(14,165,233,0.09)" />

            {/* ══ Tilted marquee plane ═════════════════════════════ */}
            <Reveal variant="fade" duration={1.2} className="relative mb-12 sm:mb-16">
                <div
                    className="persp marquee-track select-none"
                    style={{
                        maskImage:
                            'linear-gradient(to bottom, transparent, black 22%, black 78%, transparent), linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent, black 22%, black 78%, transparent), linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'source-in',
                    }}
                    aria-hidden="true"
                >
                    <div
                        className="flex flex-col gap-3 py-8"
                        style={
                            reduced
                                ? undefined
                                : { transform: 'rotateX(24deg) rotateZ(-3deg) scale(1.12)' }
                        }
                    >
                        {ROWS.map((row, i) => (
                            <div key={i} className="overflow-hidden">
                                <div
                                    className={`flex gap-3 w-max ${
                                        i % 2 ? 'animate-marquee-reverse' : 'animate-marquee'
                                    }`}
                                    style={{ animationDuration: `${32 + i * 9}s` }}
                                >
                                    {[...row, ...row, ...row].map((skill, j) => (
                                        <span
                                            key={`${skill.name}-${j}`}
                                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl shrink-0 backdrop-blur-sm"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                            }}
                                        >
                                            <SkillIcon skill={skill} size={18} />
                                            <span
                                                className="text-[13px] font-medium whitespace-nowrap"
                                                style={{ color: 'var(--text-mid)' }}
                                            >
                                                {skill.name}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeader
                    icon={Layers3}
                    index="04"
                    badge="Technical arsenal"
                    title="The stack"
                    highlight="I build with"
                    subtitle="Filter by discipline — these are the tools I reach for on production work, not a wishlist."
                    align="left"
                    accent="#38bdf8"
                />

                {/* ── Explorer ─────────────────────────────────────── */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                    {/* Category rail */}
                    <div className="lg:col-span-4 min-w-0">
                        <div
                            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0"
                            role="tablist"
                            aria-label="Skill categories"
                        >
                            {categories.map((cat, idx) => {
                                const isActive = active === cat;
                                const c = cat === ALL ? null : CAT_META[cat];
                                const col = c?.color ?? '#38bdf8';
                                const count = cat === ALL ? allFlat.length : skills[cat]?.items.length ?? 0;

                                return (
                                    <button
                                        key={cat}
                                        role="tab"
                                        aria-selected={isActive}
                                        tabIndex={isActive ? 0 : -1}
                                        onClick={() => setActive(cat)}
                                        onKeyDown={(e) => onTabKey(e, idx)}
                                        data-cursor="link"
                                        className="group relative shrink-0 lg:w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-400"
                                        style={{
                                            background: isActive ? `${col}12` : 'rgba(255,255,255,0.02)',
                                            border: `1px solid ${isActive ? `${col}38` : 'var(--line)'}`,
                                        }}
                                    >
                                        <span className="flex items-center gap-2.5 min-w-0">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-400"
                                                style={{
                                                    background: isActive ? col : 'rgba(255,255,255,0.22)',
                                                    boxShadow: isActive ? `0 0 8px ${col}` : 'none',
                                                }}
                                            />
                                            <span
                                                className="text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-colors duration-400"
                                                style={{ color: isActive ? col : 'var(--text-mid)' }}
                                            >
                                                {c?.short ?? cat}
                                            </span>
                                        </span>
                                        <span
                                            className="font-mono text-[10px] tabular-nums px-1.5 py-0.5 rounded shrink-0"
                                            style={{
                                                background: isActive ? `${col}1f` : 'rgba(255,255,255,0.05)',
                                                color: isActive ? col : 'var(--text-xlo)',
                                            }}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Context note for the active filter */}
                        <div className="hidden lg:block mt-5 pl-1 min-h-[76px]">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={active}
                                    initial={reduced ? false : { opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={reduced ? {} : { opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3, ease: EASE }}
                                    className="text-[13px] leading-relaxed"
                                    style={{ color: 'var(--text-lo)' }}
                                >
                                    {note}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Skill grid */}
                    <div className="lg:col-span-8 min-w-0">
                        <motion.div
                            layout={!reduced}
                            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3"
                            role="tabpanel"
                            aria-label={`Skills: ${active}`}
                        >
                            <AnimatePresence mode="popLayout">
                                {visible.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        layout={!reduced}
                                        initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={reduced ? {} : { opacity: 0, scale: 0.85 }}
                                        transition={{
                                            duration: 0.32,
                                            delay: reduced ? 0 : Math.min(i * 0.022, 0.3),
                                            ease: EASE,
                                        }}
                                        className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl cursor-default overflow-hidden"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--line)',
                                        }}
                                        whileHover={
                                            reduced
                                                ? undefined
                                                : { y: -4, borderColor: `${accent}55`, transition: { duration: 0.22 } }
                                        }
                                    >
                                        {/* Hover bloom in the active category's hue */}
                                        <span
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at 50% 0%, ${accent}22, transparent 70%)`,
                                            }}
                                            aria-hidden="true"
                                        />
                                        <span className="relative transition-transform duration-500 group-hover:scale-110">
                                            <SkillIcon skill={skill} size={30} />
                                        </span>
                                        <span
                                            className="relative text-[11px] font-semibold text-center leading-tight"
                                            style={{ color: 'var(--text-mid)' }}
                                        >
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Mobile note */}
                        <p
                            className="lg:hidden mt-5 text-[13px] leading-relaxed"
                            style={{ color: 'var(--text-lo)' }}
                        >
                            {note}
                        </p>
                    </div>
                </div>

                <CurrentlyLearning />
            </div>
        </section>
    );
}

'use client';

import { useState, useId } from 'react';
import { Github, ExternalLink, Layers, ArrowUpRight, Plus, TrendingUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';
import { Reveal, EASE } from './ui/Motion';
import { GridPlane, SectionGlow, Aurora } from './ui/Atmosphere';
import { Chip } from './ui/Surfaces';

const CAT = {
    'Ed-Tech':    { accent: '#38bdf8', glyph: 'orbit' },
    'HR Tech':    { accent: '#a78bfa', glyph: 'graph' },
    'E-Commerce': { accent: '#fb923c', glyph: 'grid' },
    'Operations': { accent: '#34d399', glyph: 'flow' },
};

export default function Projects() {
    /* First case study opens by default so the section never reads
       as a wall of closed rows. */
    const [open, setOpen] = useState(0);

    return (
        <section
            id="projects"
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--surface-2) 0%, var(--surface-0) 100%)' }}
        >
            <Aurora intensity={0.3} variant="teal" />
            <GridPlane
                variant="dots"
                mask="radial-gradient(ellipse 70% 45% at 50% 8%, black 0%, transparent 70%)"
                opacity={0.55}
            />
            <SectionGlow x="6%" y="45%" size={560} color="rgba(14,165,233,0.08)" />

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
                <SectionHeader
                    icon={Layers}
                    index="06"
                    badge="Featured work"
                    title="Systems I've"
                    highlight="put into production"
                    subtitle={`${projects.length} case studies — the problem, the architecture, and the numbers that came out the other side.`}
                    align="left"
                    accent="#2dd4bf"
                />

                {/* ── Case-study index ─────────────────────────────── */}
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{ border: '1px solid var(--line)', background: 'rgba(255,255,255,0.015)' }}
                >
                    {projects.map((project, i) => (
                        <ProjectRow
                            key={project.title}
                            project={project}
                            index={i}
                            isOpen={open === i}
                            onToggle={() => setOpen(open === i ? -1 : i)}
                            isLast={i === projects.length - 1}
                        />
                    ))}
                </div>

                {/* ── GitHub CTA ───────────────────────────────────── */}
                <Reveal variant="up-sm" delay={0.1} className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/dz-txlib"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="link"
                        className="btn-ghost group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold"
                    >
                        <Github size={15} />
                        More on GitHub
                        <ArrowUpRight
                            size={14}
                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

function ProjectRow({ project, index, isOpen, onToggle, isLast }) {
    const meta = CAT[project.category] ?? CAT['Ed-Tech'];
    const accent = meta.accent;
    const reduced = useReducedMotion();
    const panelId = useId();

    const liveLinks = Array.isArray(project.live)
        ? project.live
        : project.live
            ? [{ name: 'Live site', url: project.live }]
            : [];

    return (
        <Reveal
            variant="up-sm"
            delay={index * 0.05}
            className="relative"
            style={!isLast ? { borderBottom: '1px solid var(--line)' } : undefined}
        >
            {/* ── Header row ──────────────────────────────────────── */}
            <h3>
                <button
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    data-cursor="link"
                    className="group relative w-full flex items-center gap-4 sm:gap-6 px-5 sm:px-8 py-6 sm:py-7 text-left overflow-hidden"
                >
                    {/* Accent wash sweeping in from the left on hover */}
                    <span
                        className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] pointer-events-none"
                        style={{
                            background: `linear-gradient(90deg, ${accent}14, transparent 70%)`,
                            transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                        }}
                        aria-hidden="true"
                    />

                    {/* Index */}
                    <span
                        className="relative font-mono text-[11px] tabular-nums shrink-0 transition-colors duration-400 w-6"
                        style={{ color: isOpen ? accent : 'var(--text-xlo)' }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Title block */}
                    <span className="relative flex-1 min-w-0">
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1.5">
                            <span
                                className="font-display font-bold tracking-[-0.025em] leading-tight transition-all duration-500 group-hover:translate-x-1"
                                style={{
                                    fontSize: 'var(--step-1)',
                                    color: isOpen ? '#fff' : 'rgba(255,255,255,0.82)',
                                }}
                            >
                                {project.title}
                            </span>
                            <span
                                className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded shrink-0"
                                style={{
                                    color: accent,
                                    background: `${accent}18`,
                                    border: `1px solid ${accent}2e`,
                                }}
                            >
                                {project.category}
                            </span>
                        </span>
                        <span
                            className="block text-[13px] leading-snug transition-colors duration-400"
                            style={{ color: 'var(--text-xlo)' }}
                        >
                            {project.tagline}
                        </span>
                    </span>

                    {/* Toggle */}
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-400"
                        style={{
                            background: isOpen ? `${accent}1f` : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${isOpen ? `${accent}45` : 'var(--line-strong)'}`,
                            color: isOpen ? accent : 'var(--text-lo)',
                        }}
                        aria-hidden="true"
                    >
                        <Plus size={16} />
                    </motion.span>
                </button>
            </h3>

            {/* ── Case study ───────────────────────────────────────
                Kept mounted and collapsed to zero height rather than
                unmounted: the detail copy is the substance of this
                section, and unmounting it would strip three of four
                case studies out of the static HTML entirely. `inert`
                keeps the collapsed copy out of the tab order. */}
            <motion.div
                id={panelId}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={
                    reduced
                        ? { duration: 0 }
                        : {
                              height: { duration: 0.55, ease: EASE },
                              opacity: { duration: 0.35, ease: 'linear' },
                          }
                }
                className="overflow-hidden"
                inert={!isOpen}
                aria-hidden={!isOpen}
            >
                        <div
                            className="px-5 sm:px-8 pb-8 pt-1"
                            style={{ background: `linear-gradient(180deg, ${accent}08, transparent 60%)` }}
                        >
                            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

                                {/* Narrative */}
                                <div className="lg:col-span-7 space-y-5">
                                    <Block label="Challenge" body={project.problem} />
                                    <Block label="Solution" body={project.solution} accent={accent} />

                                    {/* Stack */}
                                    <div>
                                        <p className="mono-label mb-2.5">Stack</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t) => (
                                                <Chip key={t}>{t}</Chip>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="flex items-center gap-2.5 pt-1">
                                        <span className="mono-label">Role</span>
                                        <span
                                            className="text-[13px] font-semibold"
                                            style={{ color: 'var(--text-mid)' }}
                                        >
                                            {project.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Outcomes + glyph + links */}
                                <div className="lg:col-span-5 space-y-4">
                                    <ProjectGlyph kind={meta.glyph} accent={accent} reduced={reduced} />

                                    <div>
                                        <p className="mono-label mb-2.5 flex items-center gap-1.5">
                                            <TrendingUp size={11} style={{ color: accent }} />
                                            Outcomes
                                        </p>
                                        <ul className="space-y-2">
                                            {project.impact.map((m, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={reduced ? false : { opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: EASE }}
                                                    className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl"
                                                    style={{
                                                        background: 'rgba(16,185,129,0.06)',
                                                        border: '1px solid rgba(16,185,129,0.16)',
                                                    }}
                                                >
                                                    <span
                                                        className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
                                                        style={{ background: '#34d399' }}
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        className="text-[12.5px] font-medium leading-snug"
                                                        style={{ color: 'var(--text-mid)' }}
                                                    >
                                                        {m}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {liveLinks.map((link) => (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-cursor="view"
                                                data-cursor-text="Visit"
                                                className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12.5px] font-semibold transition-all duration-400 hover:-translate-y-0.5"
                                                style={{
                                                    color: '#fff',
                                                    background: `${accent}22`,
                                                    border: `1px solid ${accent}3d`,
                                                }}
                                            >
                                                {link.name}
                                                <ExternalLink
                                                    size={12}
                                                    className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </a>
                                        ))}

                                        {project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-cursor="link"
                                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12.5px] font-semibold btn-ghost"
                                            >
                                                <Github size={13} /> Source
                                            </a>
                                        ) : (
                                            <span
                                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12.5px] font-medium cursor-not-allowed"
                                                style={{
                                                    color: 'var(--text-xlo)',
                                                    background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid var(--line)',
                                                }}
                                                title="Source code is private — client work"
                                            >
                                                <Github size={13} /> Private repo
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
            </motion.div>
        </Reveal>
    );
}

function Block({ label, body, accent }) {
    return (
        <div
            className="rounded-xl p-4"
            style={{
                background: accent ? `${accent}0d` : 'rgba(255,255,255,0.025)',
                border: `1px solid ${accent ? `${accent}24` : 'var(--line)'}`,
            }}
        >
            <p className="mono-label mb-2" style={accent ? { color: accent, opacity: 0.85 } : undefined}>
                {label}
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-lo)' }}>
                {body}
            </p>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   ProjectGlyph — an abstract motif per case study.

   These stand in for screenshots deliberately: the work is backend,
   and inventing UI mockups would misrepresent what was built. Each
   shape reads as the system's shape instead.
   ═══════════════════════════════════════════════════════════════ */
function ProjectGlyph({ kind, accent, reduced }) {
    const common = {
        className: 'w-full h-28 rounded-xl',
        style: { background: 'rgba(5,5,7,0.45)', border: '1px solid var(--line)' },
    };

    const pulse = reduced
        ? {}
        : { animate: { opacity: [0.35, 1, 0.35] }, transition: { duration: 3, repeat: Infinity } };

    return (
        <div {...common} aria-hidden="true">
            <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={accent} stopOpacity="0.15" />
                    </linearGradient>
                </defs>

                {kind === 'orbit' && (
                    <g fill="none" stroke={accent}>
                        <circle cx="100" cy="50" r="10" fill={`url(#g-${kind})`} stroke="none" />
                        {[22, 34, 46].map((r, i) => (
                            <motion.circle
                                key={r}
                                cx="100" cy="50" r={r}
                                strokeOpacity={0.3 - i * 0.07}
                                strokeWidth="1"
                                {...(reduced ? {} : {
                                    animate: { opacity: [0.4, 0.9, 0.4] },
                                    transition: { duration: 3.2, repeat: Infinity, delay: i * 0.4 },
                                })}
                            />
                        ))}
                        {[0, 1, 2, 3, 4, 5].map((i) => {
                            const a = (i / 6) * Math.PI * 2;
                            return (
                                <circle
                                    key={i}
                                    cx={100 + Math.cos(a) * 34}
                                    cy={50 + Math.sin(a) * 34}
                                    r="2.6"
                                    fill={accent}
                                    fillOpacity="0.75"
                                    stroke="none"
                                />
                            );
                        })}
                    </g>
                )}

                {kind === 'graph' && (
                    <g>
                        {[
                            [30, 70, 70, 40], [70, 40, 110, 58], [110, 58, 150, 28],
                            [70, 40, 100, 20], [110, 58, 130, 78],
                        ].map(([x1, y1, x2, y2], i) => (
                            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
                        ))}
                        {[[30, 70], [70, 40], [110, 58], [150, 28], [100, 20], [130, 78]].map(([cx, cy], i) => (
                            <motion.circle
                                key={i}
                                cx={cx} cy={cy} r={i === 1 ? 5 : 3.4}
                                fill={accent}
                                fillOpacity={i === 1 ? 0.95 : 0.6}
                                {...(reduced ? {} : {
                                    animate: { r: i === 1 ? [5, 6.5, 5] : [3.4, 4.2, 3.4] },
                                    transition: { duration: 2.6, repeat: Infinity, delay: i * 0.25 },
                                })}
                            />
                        ))}
                    </g>
                )}

                {kind === 'grid' && (
                    <g>
                        {Array.from({ length: 24 }).map((_, i) => {
                            const col = i % 8;
                            const row = Math.floor(i / 8);
                            const on = [2, 5, 9, 12, 17, 20, 22].includes(i);
                            return (
                                <motion.rect
                                    key={i}
                                    x={26 + col * 19}
                                    y={22 + row * 21}
                                    width="14" height="15" rx="3"
                                    fill={on ? accent : 'rgba(255,255,255,0.07)'}
                                    fillOpacity={on ? 0.8 : 1}
                                    {...(reduced || !on ? {} : {
                                        animate: { fillOpacity: [0.35, 0.9, 0.35] },
                                        transition: { duration: 2.8, repeat: Infinity, delay: (i % 5) * 0.32 },
                                    })}
                                />
                            );
                        })}
                    </g>
                )}

                {kind === 'flow' && (
                    <g>
                        <line x1="26" y1="50" x2="174" y2="50" stroke={accent} strokeOpacity="0.22" strokeWidth="1" />
                        {[26, 76, 124, 174].map((cx, i) => (
                            <g key={cx}>
                                <rect
                                    x={cx - 13} y={36} width="26" height="28" rx="6"
                                    fill="rgba(255,255,255,0.05)" stroke={accent} strokeOpacity="0.35"
                                />
                                <motion.circle
                                    cx={cx} cy="50" r="3"
                                    fill={accent}
                                    {...(reduced ? {} : {
                                        animate: { fillOpacity: [0.3, 1, 0.3] },
                                        transition: { duration: 2.4, repeat: Infinity, delay: i * 0.45 },
                                    })}
                                />
                            </g>
                        ))}
                        {!reduced && (
                            <motion.circle
                                cy="50" r="2.4" fill={accent}
                                animate={{ cx: [26, 174], opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        )}
                    </g>
                )}

                {!reduced && (
                    <motion.rect
                        x="0" y="0" width="200" height="100" fill="none"
                        stroke={accent} strokeOpacity="0.1" {...pulse}
                    />
                )}
            </svg>
        </div>
    );
}

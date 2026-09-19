'use client';

import { ArrowUpRight, Terminal } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { services } from '../data/services';
import { useScroll } from './ScrollProvider';
import SectionHeader from './SectionHeader';
import { Reveal, Stagger, StaggerItem, Magnetic, EASE } from './ui/Motion';
import { GridPlane, SectionGlow, Aurora } from './ui/Atmosphere';
import { SpotlightCard, Chip } from './ui/Surfaces';

/* The bento rhythm: the first card is the anchor, the rest fall in
   around it. Fixed spans keep the grid from reflowing per item. */
const SPAN = [
    'md:col-span-2 lg:col-span-2',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-2 lg:col-span-2',
];

export default function Services() {
    const { scrollToSection } = useScroll();

    return (
        <section
            id="services"
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--surface-1) 0%, var(--surface-3) 50%, var(--surface-1) 100%)' }}
        >
            <Aurora intensity={0.35} variant="violet" />
            <GridPlane
                variant="grid"
                mask="radial-gradient(ellipse 80% 55% at 50% 35%, black 0%, transparent 72%)"
                opacity={0.55}
            />
            <SectionGlow x="85%" y="18%" size={520} color="rgba(139,92,246,0.08)" />

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeader
                    icon={Terminal}
                    index="03"
                    badge="What I offer"
                    title="Specialised"
                    highlight="services"
                    subtitle="High-performance backend systems, scalable architecture, and production-grade engineering."
                    align="left"
                    accent="#a78bfa"
                />

                <Stagger
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(0,1fr)]"
                    stagger={0.06}
                >
                    {services.map((service, i) => (
                        <StaggerItem
                            key={service.title}
                            variant="scale"
                            className={SPAN[i] ?? ''}
                        >
                            <ServiceCard service={service} index={i} featured={i === 0} />
                        </StaggerItem>
                    ))}
                </Stagger>

                {/* ── Closing CTA ──────────────────────────────────── */}
                <Reveal variant="up" delay={0.1} className="mt-4 sm:mt-5">
                    <SpotlightCard
                        className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
                        style={{
                            background: 'linear-gradient(120deg, rgba(139,92,246,0.12), rgba(14,165,233,0.09) 50%, transparent)',
                            border: '1px solid rgba(255,255,255,0.09)',
                        }}
                    >
                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                            <div>
                                <h3
                                    className="font-display font-bold tracking-[-0.025em] text-white mb-2"
                                    style={{ fontSize: 'var(--step-2)' }}
                                >
                                    Ready to build something great?
                                </h3>
                                <p className="text-sm max-w-lg" style={{ color: 'var(--text-lo)' }}>
                                    Tell me what you&apos;re building and I&apos;ll tell you how I&apos;d architect it.
                                </p>
                            </div>
                            <Magnetic strength={0.3} className="shrink-0">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    data-cursor="link"
                                    className="btn-primary group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start a conversation
                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </span>
                                </button>
                            </Magnetic>
                        </div>
                    </SpotlightCard>
                </Reveal>
            </div>
        </section>
    );
}

function ServiceCard({ service, index, featured }) {
    const Icon = service.icon;
    const reduced = useReducedMotion();

    return (
        <SpotlightCard
            className="group relative h-full rounded-2xl overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-1"
            style={{
                background: featured
                    ? 'linear-gradient(155deg, rgba(139,92,246,0.1), rgba(14,165,233,0.05) 45%, rgba(255,255,255,0.02))'
                    : 'rgba(255,255,255,0.025)',
                border: '1px solid var(--line)',
            }}
        >
            {/* Index numeral — oversized, clipped by the card */}
            <span
                className="absolute -top-3 right-3 font-display font-bold pointer-events-none select-none text-outline opacity-50 transition-all duration-700 group-hover:opacity-90 group-hover:-translate-y-1"
                style={{ fontSize: featured ? '6.5rem' : '4.25rem', lineHeight: 1 }}
                aria-hidden="true"
            >
                {String(index + 1).padStart(2, '0')}
            </span>

            <div className={`relative z-10 flex flex-col h-full ${featured ? 'p-7 sm:p-9' : 'p-6'}`}>
                {/* Icon */}
                <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                        background: 'rgba(56,189,248,0.1)',
                        border: '1px solid rgba(56,189,248,0.22)',
                    }}
                >
                    <Icon size={19} style={{ color: '#7dd3fc' }} />
                </span>

                <h3
                    className={`font-display font-bold tracking-tight text-white mb-3 transition-colors duration-400 group-hover:text-sky-200 ${
                        featured ? 'text-2xl' : 'text-lg'
                    }`}
                >
                    {service.title}
                </h3>

                <p
                    className="leading-relaxed text-[13.5px] mb-6"
                    style={{ color: 'var(--text-lo)' }}
                >
                    {service.desc}
                </p>

                {/* Featured card gets a small pipeline diagram so the
                    big tile carries visual content, not just space. */}
                {featured && <PipelineDiagram reduced={reduced} />}

                <div
                    className="mt-auto pt-5 flex flex-wrap gap-1.5"
                    style={{ borderTop: '1px solid var(--line)' }}
                >
                    {service.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                    ))}
                </div>
            </div>

            {/* Corner accent that draws in on hover */}
            <span
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{
                    background: 'linear-gradient(90deg, #38bdf8, #a78bfa, transparent)',
                    transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                }}
                aria-hidden="true"
            />
        </SpotlightCard>
    );
}

/* A tiny request-path diagram: client → gateway → service → store.
   Purely decorative, but it says "backend" faster than a paragraph. */
function PipelineDiagram({ reduced }) {
    const stages = ['Client', 'Gateway', 'Service', 'Store'];

    return (
        <div
            className="mb-6 rounded-xl p-4 overflow-hidden"
            style={{ background: 'rgba(5,5,7,0.5)', border: '1px solid var(--line)' }}
            aria-hidden="true"
        >
            <div className="flex items-center justify-between gap-1">
                {stages.map((s, i) => (
                    <div key={s} className="flex items-center gap-1 flex-1 last:flex-none min-w-0">
                        <div className="flex flex-col items-center gap-1.5 shrink-0">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{
                                    background: i === 0 ? '#38bdf8' : i === stages.length - 1 ? '#2dd4bf' : 'rgba(255,255,255,0.35)',
                                    boxShadow: i === 0 ? '0 0 8px rgba(56,189,248,0.8)' : 'none',
                                }}
                            />
                            <span
                                className="font-mono text-[8px] uppercase tracking-[0.12em] whitespace-nowrap"
                                style={{ color: 'var(--text-xlo)' }}
                            >
                                {s}
                            </span>
                        </div>

                        {i < stages.length - 1 && (
                            <div
                                className="relative flex-1 h-px min-w-[14px] self-start mt-1"
                                style={{ background: 'rgba(255,255,255,0.12)' }}
                            >
                                {!reduced && (
                                    <motion.span
                                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                                        style={{ background: '#38bdf8', boxShadow: '0 0 8px rgba(56,189,248,0.9)' }}
                                        animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                                        transition={{
                                            duration: 1.6,
                                            repeat: Infinity,
                                            delay: i * 0.4,
                                            ease: EASE,
                                            repeatDelay: 0.9,
                                        }}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

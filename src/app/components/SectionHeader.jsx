'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal, TextReveal, EASE } from './ui/Motion';

/**
 * Section heading.
 *
 * A kicker rail (index · label · drawn hairline), a masked-reveal
 * headline, and an optional lede. `accent` lets each section carry
 * its own hue so the page reads as chapters rather than one
 * repeating block.
 */
export default function SectionHeader({
    icon: Icon,
    index,
    badge,
    title,
    highlight,
    subtitle,
    align = 'center',
    accent = '#38bdf8',
    className = '',
    // Retained for compatibility with existing call sites.
    dark = true, // eslint-disable-line no-unused-vars
}) {
    const isCenter = align === 'center';
    const reduced = useReducedMotion();

    return (
        <div
            className={`${isCenter ? 'text-center' : 'text-left'} mb-14 sm:mb-16 ${className}`}
        >
            {/* Kicker rail */}
            <Reveal variant="up-sm" duration={0.7}>
                <div
                    className={`flex items-center gap-3 sm:gap-4 mb-6 ${
                        isCenter ? 'justify-center' : 'justify-start'
                    }`}
                >
                    {index && (
                        <span
                            className="font-mono text-[11px] font-semibold tabular-nums"
                            style={{ color: accent, opacity: 0.85 }}
                        >
                            {index}
                        </span>
                    )}

                    <span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                        style={{
                            background: `${accent}14`,
                            border: `1px solid ${accent}2e`,
                        }}
                    >
                        {Icon && <Icon size={12} style={{ color: accent }} />}
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: accent }}
                        >
                            {badge}
                        </span>
                    </span>

                    {/* Hairline draws outward from the badge */}
                    <motion.span
                        className={`h-px ${isCenter ? 'w-10 sm:w-16' : 'flex-1 max-w-[220px]'}`}
                        style={{
                            background: `linear-gradient(90deg, ${accent}66, transparent)`,
                            transformOrigin: 'left',
                        }}
                        initial={reduced ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1, delay: 0.15, ease: EASE }}
                        aria-hidden="true"
                    />
                </div>
            </Reveal>

            {/* Headline */}
            <h2 className="font-display font-bold tracking-[-0.03em] leading-[0.98] text-white"
                style={{ fontSize: 'var(--step-4)' }}>
                <TextReveal text={title} as="span" className="block" duration={0.9} stagger={0.045} />
                {highlight && (
                    <TextReveal
                        text={highlight}
                        as="span"
                        className="block"
                        gradient
                        delay={0.12}
                        duration={0.9}
                        stagger={0.045}
                    />
                )}
            </h2>

            {/* Lede */}
            {subtitle && (
                <Reveal variant="up-sm" delay={0.18} duration={0.8}>
                    <p
                        className={`mt-6 leading-relaxed max-w-xl ${isCenter ? 'mx-auto' : ''}`}
                        style={{ color: 'var(--text-lo)', fontSize: 'var(--step-0)' }}
                    >
                        {subtitle}
                    </p>
                </Reveal>
            )}
        </div>
    );
}

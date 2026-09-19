'use client';

import Image from 'next/image';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { currentlyLearning } from '../data/currentlyLearning';
import { Reveal, EASE } from './ui/Motion';

/**
 * Currently learning.
 *
 * Deliberately styled as "in progress": a dashed frame and an
 * indeterminate shimmer rather than invented percentages, which
 * would claim a precision that doesn't exist.
 */
export default function CurrentlyLearning() {
    const reduced = useReducedMotion();

    return (
        <Reveal variant="up" delay={0.05} className="mt-16 sm:mt-20">
            <div
                className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
                style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px dashed rgba(255,255,255,0.13)',
                }}
            >
                <div
                    className="absolute -top-24 -right-16 w-72 h-72 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.1), transparent 70%)' }}
                    aria-hidden="true"
                />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-3.5">
                            <span
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                    background: 'rgba(45,212,191,0.1)',
                                    border: '1px solid rgba(45,212,191,0.24)',
                                }}
                            >
                                <Sparkles size={17} style={{ color: '#2dd4bf' }} />
                            </span>
                            <div>
                                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                                    Currently learning
                                </h3>
                                <p className="mono-label mt-0.5">Next on the roadmap</p>
                            </div>
                        </div>

                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start sm:self-auto"
                            style={{
                                background: 'rgba(45,212,191,0.08)',
                                border: '1px solid rgba(45,212,191,0.2)',
                            }}
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-70" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-400" />
                            </span>
                            <span
                                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                                style={{ color: '#5eead4' }}
                            >
                                In progress
                            </span>
                        </span>
                    </div>

                    {/* Items */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                        {currentlyLearning.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={reduced ? false : { opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                                whileHover={reduced ? undefined : { y: -4 }}
                                className="group relative flex flex-col gap-3.5 p-4 rounded-xl overflow-hidden transition-colors duration-400"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--line)',
                                }}
                            >
                                <div className="flex items-center gap-2.5">
                                    <span
                                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                        }}
                                    >
                                        <Image
                                            src={tech.icon}
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 object-contain"
                                            loading="lazy"
                                            unoptimized
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span
                                        className="font-mono text-[11px] font-semibold leading-tight"
                                        style={{ color: 'var(--text-mid)' }}
                                    >
                                        {tech.name}
                                    </span>
                                </div>

                                {/* Indeterminate progress */}
                                <span
                                    className="relative block h-[3px] rounded-full overflow-hidden"
                                    style={{ background: 'rgba(255,255,255,0.07)' }}
                                    aria-hidden="true"
                                >
                                    <motion.span
                                        className="absolute inset-y-0 w-1/2 rounded-full"
                                        style={{ background: 'linear-gradient(90deg, transparent, #2dd4bf, transparent)' }}
                                        animate={reduced ? {} : { x: ['-100%', '200%'] }}
                                        transition={{
                                            duration: 2.2,
                                            repeat: Infinity,
                                            delay: i * 0.25,
                                            ease: 'easeInOut',
                                        }}
                                    />
                                </span>

                                <ArrowUpRight
                                    size={13}
                                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-60 transition-opacity duration-400"
                                    style={{ color: '#2dd4bf' }}
                                    aria-hidden="true"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

'use client';

import Image from 'next/image';
import { Sparkles, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { currentlyLearning } from '../data/currentlyLearning';

export default function CurrentlyLearning() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12"
        >
            {/* Gradient border wrapper */}
            <div className="relative rounded-2xl p-[1.5px] overflow-hidden">
                <div
                    className="absolute inset-[-40%] pointer-events-none"
                    style={{
                        background:
                            'conic-gradient(from 0deg, transparent 0deg, #0ea5e9 80deg, #14b8a6 160deg, #0284c7 240deg, transparent 320deg)',
                        opacity: 0.3,
                    }}
                    aria-hidden="true"
                />

                <div
                    className="relative rounded-[calc(1rem-1.5px)] p-6 sm:p-8 overflow-hidden"
                    style={{ background: 'rgba(9,9,11,0.96)' }}
                >
                    {/* Atmosphere */}
                    <div
                        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"
                        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                    style={{
                                        background: 'rgba(14,165,233,0.12)',
                                        border: '1px solid rgba(14,165,233,0.22)',
                                    }}
                                >
                                    <Sparkles size={18} style={{ color: 'rgba(56,189,248,0.9)' }} />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                                        Currently Learning
                                    </h3>
                                    <p className="text-xs mt-0.5 font-mono uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                        Expanding technical horizons
                                    </p>
                                </div>
                            </div>

                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start sm:self-auto"
                                style={{
                                    background: 'rgba(14,165,233,0.1)',
                                    border: '1px solid rgba(14,165,233,0.22)',
                                }}
                            >
                                <Target size={13} style={{ color: '#38bdf8' }} />
                                <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'rgba(125,211,252,0.85)' }}>
                                    Continuous Growth
                                </span>
                            </div>
                        </div>

                        {/* Tech Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                            {currentlyLearning.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(14,165,233,0.18)' }}
                                    className="hover-card flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl cursor-default"
                                >
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-xl"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.09)',
                                        }}
                                    >
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={28}
                                            height={28}
                                            className="w-7 h-7 object-contain"
                                            loading="lazy"
                                            unoptimized
                                        />
                                    </div>

                                    <span
                                        className="font-mono text-xs font-semibold text-center"
                                        style={{ color: 'rgba(255,255,255,0.65)' }}
                                    >
                                        {tech.name}
                                    </span>

                                    <div
                                        className="w-6 h-0.5 rounded-full"
                                        style={{ background: 'linear-gradient(90deg, #0ea5e9, #14b8a6)' }}
                                        aria-hidden="true"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

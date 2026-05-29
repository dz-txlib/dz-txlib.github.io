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
                    className="absolute inset-[-40%] animate-border-spin pointer-events-none"
                    style={{
                        background:
                            'conic-gradient(from 0deg, transparent 0deg, #3b82f6 80deg, #06b6d4 160deg, #7c3aed 240deg, transparent 320deg)',
                        opacity: 0.3,
                    }}
                    aria-hidden="true"
                />

                <div
                    className="relative rounded-[calc(1rem-1.5px)] p-6 sm:p-8 overflow-hidden"
                    style={{ background: 'rgba(5,14,35,0.95)' }}
                >
                    {/* Atmosphere */}
                    <div
                        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"
                        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                    style={{
                                        background: 'rgba(37,99,235,0.12)',
                                        border: '1px solid rgba(37,99,235,0.22)',
                                    }}
                                >
                                    <Sparkles size={18} style={{ color: 'rgba(96,165,250,0.9)' }} />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                                        Currently Learning
                                    </h3>
                                    <p className="text-xs mt-0.5 font-mono uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                                        Expanding technical horizons
                                    </p>
                                </div>
                            </div>

                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start sm:self-auto"
                                style={{
                                    background: 'rgba(59,130,246,0.1)',
                                    border: '1px solid rgba(59,130,246,0.22)',
                                }}
                            >
                                <Target size={13} style={{ color: '#60a5fa' }} />
                                <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'rgba(147,197,253,0.85)' }}>
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
                                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(59,130,246,0.2)' }}
                                    className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl cursor-default"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)';
                                        e.currentTarget.style.background = 'rgba(37,99,235,0.07)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    }}
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
                                        style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }}
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

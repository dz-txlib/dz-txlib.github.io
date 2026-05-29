'use client';

import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export default function Stats() {
    return (
        <div
            className="relative z-10 py-5 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #09090b 0%, #111115 100%)' }}
            aria-label="Key statistics"
        >
            {/* Thin gradient line separator */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.25), transparent)' }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px"
                    style={{ background: 'rgba(255,255,255,0.05)' }}>
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300"
                                style={{ background: '#09090b' }}
                            >
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: 'rgba(14,165,233,0.12)',
                                        border: '1px solid rgba(14,165,233,0.2)',
                                    }}
                                >
                                    <Icon size={16} style={{ color: 'rgba(56,189,248,0.9)' }} />
                                </div>
                                <div className="text-center sm:text-left">
                                    <div
                                        className="font-display text-2xl sm:text-3xl font-bold tracking-tight tabular-nums leading-none"
                                        style={{ color: '#fff' }}
                                    >
                                        {stat.number}
                                    </div>
                                    <div
                                        className="font-mono text-[10px] uppercase tracking-[0.16em] mt-1"
                                        style={{ color: 'rgba(255,255,255,0.32)' }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom separator */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.15), transparent)' }}
                aria-hidden="true"
            />
        </div>
    );
}

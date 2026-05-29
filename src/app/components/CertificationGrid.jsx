'use client';

import { CheckCircle2, Briefcase, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

const LEVEL_WIDTH = {
    'Advanced':     '85%',
    'Intermediate': '65%',
    'Beginner':     '45%',
};

export default function CertificationGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {certifications.map((cert, i) => (
                <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(14,165,233,0.07)';
                        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(14,165,233,0.12)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <div className="p-6 sm:p-7 flex flex-col h-full">

                        {/* Header */}
                        <div className="flex items-start justify-between mb-5">
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.22)' }}
                            >
                                <Award size={20} style={{ color: '#38bdf8' }} />
                            </div>

                            {cert.verifyUrl ? (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-colors"
                                    style={{
                                        background: 'rgba(16,185,129,0.1)',
                                        border: '1px solid rgba(16,185,129,0.22)',
                                        color: '#34d399',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(16,185,129,0.18)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(16,185,129,0.1)'; }}
                                >
                                    <CheckCircle2 size={12} />
                                    Verified
                                </a>
                            ) : (
                                <div
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'rgba(255,255,255,0.35)',
                                    }}
                                >
                                    <Award size={12} /> Certified
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-base font-bold mb-5 leading-snug flex-grow transition-colors duration-300 text-white group-hover:text-sky-400">
                            {cert.name}
                        </h3>

                        {/* Meta */}
                        <div className="space-y-2 mb-5">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
                                >
                                    <Briefcase size={12} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                </div>
                                <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>{cert.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
                                >
                                    <Calendar size={12} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                </div>
                                <span className="text-sm font-bold" style={{ color: '#38bdf8' }}>{cert.year}</span>
                            </div>
                        </div>

                        {/* Proficiency bar */}
                        <div className="mt-auto pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                                    Proficiency
                                </span>
                                <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    {cert.level || 'Advanced'}
                                </span>
                            </div>
                            <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ background: 'linear-gradient(90deg, #0ea5e9, #14b8a6)' }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: LEVEL_WIDTH[cert.level] ?? '85%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

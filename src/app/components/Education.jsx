'use client';

import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import SectionHeader from './SectionHeader';

export default function Education() {
    return (
        <section
            id="education"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #111115 0%, #09090b 100%)' }}
        >
            {/* Atmosphere */}
            <div
                className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.07) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 100% 0%, black 20%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
                <SectionHeader
                    icon={GraduationCap}
                    badge="Education"
                    title="Academic"
                    highlight="Background"
                    dark
                />

                <div className="space-y-4">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="group rounded-2xl p-6 sm:p-8 transition-all duration-300"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(14,165,233,0.07)';
                                e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                            }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                                <div className="space-y-3">
                                    <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                                        style={{ color: 'rgba(255,255,255,0.5)' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = '#38bdf8'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                                    >
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center shadow-sm shrink-0"
                                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        >
                                            <GraduationCap size={13} style={{ color: 'rgba(255,255,255,0.5)' }} />
                                        </div>
                                        {edu.institution}
                                        <ExternalLink size={12} style={{ opacity: 0.4 }} />
                                    </a>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:items-end gap-3 flex-wrap">
                                    <span
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
                                        style={{
                                            background: 'rgba(14,165,233,0.12)',
                                            border: '1px solid rgba(14,165,233,0.25)',
                                            color: '#7dd3fc',
                                        }}
                                    >
                                        <Calendar size={13} />
                                        {edu.period}
                                    </span>
                                    <span
                                        className="inline-flex items-center gap-1.5 text-sm font-medium"
                                        style={{ color: 'rgba(255,255,255,0.4)' }}
                                    >
                                        <MapPin size={13} />
                                        {edu.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

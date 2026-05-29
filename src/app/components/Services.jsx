'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useScroll } from './ScrollProvider';
import SectionHeader from './SectionHeader';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function ServiceCard({ service, index }) {
    const Icon = service.icon;
    const isFeatured = index === 0;

    return (
        <motion.div
            {...fadeUp(index * 0.07)}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-400 flex flex-col ${
                isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
            style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
            }}
            whileHover={{
                borderColor: 'rgba(59,130,246,0.3)',
                background: 'rgba(255,255,255,0.06)',
                transition: { duration: 0.2 },
            }}
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                    background:
                        'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.12) 0%, transparent 60%)',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 p-7 flex flex-col h-full">
                {/* Icon */}
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                        background: 'rgba(37,99,235,0.12)',
                        border: '1px solid rgba(37,99,235,0.22)',
                    }}
                >
                    <Icon size={20} style={{ color: 'rgba(96,165,250,0.9)' }} />
                </div>

                <h3
                    className={`font-display font-bold tracking-tight mb-3 text-white group-hover:text-blue-300 transition-colors duration-300 ${
                        isFeatured ? 'text-2xl' : 'text-xl'
                    }`}
                >
                    {service.title}
                </h3>

                <p
                    className="leading-relaxed mb-6 flex-grow text-sm"
                    style={{ color: 'rgba(255,255,255,0.42)' }}
                >
                    {service.desc}
                </p>

                {/* Tags */}
                <div className="mt-auto pt-5 border-t flex flex-wrap gap-2"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    {service.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-lg font-mono text-xs font-medium cursor-default transition-all duration-300 group-hover:border-blue-500/30"
                            style={{
                                color: 'rgba(147,197,253,0.7)',
                                background: 'rgba(37,99,235,0.08)',
                                border: '1px solid rgba(37,99,235,0.15)',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    const { scrollToSection } = useScroll();

    return (
        <section
            id="services"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #060f22 0%, #040a18 50%, #060f22 100%)' }}
        >
            {/* Background atmosphere */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                    maskImage:
                        'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                <SectionHeader
                    icon={() => (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                        </svg>
                    )}
                    badge="What I Offer"
                    title="Specialized"
                    highlight="Services"
                    subtitle="High-performance backend solutions, scalable architecture, and production-grade engineering."
                    dark
                />

                {/* Bento grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>

                {/* CTA strip */}
                <motion.div
                    {...fadeUp(0.3)}
                    className="relative rounded-2xl p-[1.5px] overflow-hidden"
                >
                    <div
                        className="absolute inset-[-40%] animate-border-spin pointer-events-none"
                        style={{
                            background:
                                'conic-gradient(from 0deg, transparent 0deg, #3b82f6 80deg, #06b6d4 160deg, transparent 240deg)',
                            opacity: 0.4,
                        }}
                        aria-hidden="true"
                    />
                    <div
                        className="relative rounded-[calc(1rem-1.5px)] px-5 py-7 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
                        style={{ background: 'rgba(5,14,35,0.95)' }}
                    >
                        <div
                            className="absolute top-1/2 left-1/4 w-64 h-64 -translate-y-1/2 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
                            aria-hidden="true"
                        />
                        <div className="relative z-10 text-center sm:text-left">
                            <h3 className="font-display text-xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                                Ready to Build Something Great?
                            </h3>
                            <p className="text-sm" style={{ color: 'rgba(147,197,253,0.55)' }}>
                                Let's discuss how I can help bring your vision to life with reliable, scalable software.
                            </p>
                        </div>
                        <div className="relative z-10 shrink-0">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 text-white overflow-hidden relative"
                                style={{
                                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                    boxShadow: '0 0 24px rgba(37,99,235,0.3)',
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-2.5">
                                    Let's Talk
                                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span
                                    className="absolute inset-0 pointer-events-none animate-shimmer-pass"
                                    style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

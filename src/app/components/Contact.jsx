'use client';

import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
    const contactItems = [
        { icon: Mail,  label: 'Email',    value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: 'Phone',    value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: MapPin,label: 'Location', value: personalInfo.location, href: null },
    ];

    const socials = [
        { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn', color: '#0ea5e9' },
        { href: personalInfo.github,   icon: Github,   label: 'GitHub',   color: '#fff' },
        { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email', color: '#0ea5e9' },
    ];

    return (
        <section
            id="contact"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #111115 0%, #09090b 50%, #111115 100%)' }}
        >
            {/* Atmosphere */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 65%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.10) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div {...fadeUp(0)} className="text-center mb-14">
                    <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                        style={{
                            background: 'rgba(14,165,233,0.1)',
                            border: '1px solid rgba(14,165,233,0.22)',
                        }}
                    >
                        <MessageSquare size={13} className="text-sky-400" />
                        <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'rgba(125,211,252,0.85)' }}>
                            Get in Touch
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                        Let's Work{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                            Together
                        </span>
                    </h2>
                    <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.58)' }}>
                        I'm open to new opportunities, freelance work, and interesting collaborations.
                        My inbox is always open.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-5">

                    {/* Contact info */}
                    <motion.div {...fadeUp(0.08)} className="lg:col-span-2 flex flex-col gap-4">
                        {contactItems.map(({ icon: Icon, label, value, href }) => {
                            const El = href ? 'a' : 'div';
                            return (
                                <El
                                    key={label}
                                    {...(href ? { href } : {})}
                                    className="group hover-card flex items-center gap-4 px-5 py-4 rounded-2xl"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                                        style={{
                                            background: 'rgba(14,165,233,0.12)',
                                            border: '1px solid rgba(14,165,233,0.2)',
                                        }}
                                    >
                                        <Icon size={16} style={{ color: 'rgba(56,189,248,0.9)' }} />
                                    </div>
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] mb-0.5" style={{ color: 'rgba(255,255,255,0.48)' }}>
                                            {label}
                                        </div>
                                        <div className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors break-words min-w-0">
                                            {value}
                                        </div>
                                    </div>
                                </El>
                            );
                        })}

                        {/* Social links */}
                        <div
                            className="px-5 py-4 rounded-2xl"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.07)',
                            }}
                        >
                            <div className="font-mono text-[10px] uppercase tracking-[0.16em] mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                Connect
                            </div>
                            <div className="flex gap-2.5">
                                {socials.map(({ href, icon: Icon, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        transition={{ duration: 0.15 }}
                                        className="w-9 h-9 flex items-center justify-center rounded-xl"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.09)',
                                            color: 'rgba(255,255,255,0.65)',
                                        }}
                                    >
                                        <Icon size={15} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA card with gradient border */}
                    <motion.div {...fadeUp(0.14)} className="lg:col-span-3">
                        <div className="relative rounded-2xl p-[1.5px] overflow-hidden h-full">
                            <div
                                className="absolute inset-[-40%] pointer-events-none"
                                style={{
                                    background:
                                        'conic-gradient(from 0deg, transparent 0deg, #0ea5e9 80deg, #14b8a6 160deg, #0284c7 240deg, transparent 320deg)',
                                    opacity: 0.45,
                                }}
                                aria-hidden="true"
                            />
                            <div
                                className="relative rounded-[calc(1rem-1.5px)] p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-6 h-full overflow-hidden"
                                style={{ background: 'rgba(9,9,11,0.97)' }}
                            >
                                {/* Interior atmosphere */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
                                    aria-hidden="true"
                                />

                                <div className="relative z-10 space-y-5">
                                    <div
                                        className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                                        style={{
                                            background: 'rgba(14,165,233,0.15)',
                                            border: '1px solid rgba(14,165,233,0.25)',
                                            boxShadow: '0 0 32px rgba(14,165,233,0.2)',
                                        }}
                                    >
                                        <MessageSquare size={26} style={{ color: 'rgba(56,189,248,0.9)' }} />
                                    </div>

                                    <div>
                                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                                            Send a Message
                                        </h3>
                                        <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                            Whether you have a question or a project proposal, I'd love to hear from you.
                                            I'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 text-white overflow-hidden"
                                        style={{
                                            background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                                            boxShadow: '0 0 28px rgba(14,165,233,0.35)',
                                        }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2.5">
                                            Send an Email
                                            <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </span>
                                        <span
                                            className="absolute inset-0 pointer-events-none animate-shimmer-pass"
                                            style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }}
                                            aria-hidden="true"
                                        />
                                    </a>

                                    <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                        {personalInfo.responseTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

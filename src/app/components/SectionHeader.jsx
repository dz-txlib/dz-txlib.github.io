'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({
    icon: Icon,
    badge,
    title,
    highlight,
    subtitle,
    align = 'center',
    dark = false,
}) {
    const isCenter   = align === 'center';
    const textAlign  = isCenter ? 'text-center' : 'text-left';
    const subAlign   = isCenter ? 'mx-auto' : '';
    const itemsAlign = isCenter ? 'justify-center' : 'justify-start';

    return (
        <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={`${textAlign} mb-14`}
        >
            {/* Badge */}
            <div className={`flex ${itemsAlign} mb-5`}>
                <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                    style={
                        dark
                            ? {
                                  background: 'rgba(14,165,233,0.1)',
                                  border: '1px solid rgba(14,165,233,0.22)',
                              }
                            : {
                                  background: '#eff6ff',
                                  border: '1px solid #bfdbfe',
                              }
                    }
                >
                    {Icon && (
                        <Icon
                            size={13}
                            style={{ color: dark ? 'rgba(56,189,248,0.9)' : '#0ea5e9' }}
                        />
                    )}
                    <span
                        className="text-xs font-bold uppercase tracking-[0.15em]"
                        style={{ color: dark ? 'rgba(125,211,252,0.85)' : '#0284c7' }}
                    >
                        {badge}
                    </span>
                </div>
            </div>

            {/* Heading */}
            <h2
                className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5 ${
                    dark ? 'text-white' : 'text-slate-900'
                }`}
            >
                {title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">
                    {highlight}
                </span>
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p
                    className={`text-lg max-w-2xl leading-relaxed ${subAlign} ${
                        dark ? 'text-white/65' : 'text-slate-500'
                    }`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

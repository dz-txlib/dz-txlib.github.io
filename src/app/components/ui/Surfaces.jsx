'use client';

import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   SpotlightCard — writes the pointer's position into CSS custom
   properties so the glow and the border highlight are painted by
   the compositor instead of by React re-renders.
   ═══════════════════════════════════════════════════════════════ */
export function SpotlightCard({
    children,
    className = '',
    as: Tag = 'div',
    border = true,
    style,
    ...rest
}) {
    const ref = useRef(null);

    const onMove = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, []);

    return (
        <Tag
            ref={ref}
            onPointerMove={onMove}
            className={`spotlight ${border ? 'spotlight-border' : ''} ${className}`}
            style={style}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/* ═══════════════════════════════════════════════════════════════
   TiltCard — subtle 3-D tilt toward the pointer with a specular
   sheen. Kept shallow (≤7°) so it reads as depth, not as a gimmick.
   ═══════════════════════════════════════════════════════════════ */
export function TiltCard({
    children,
    className = '',
    max = 7,
    scale = 1.015,
    glare = true,
    style,
    ...rest
}) {
    const ref = useRef(null);
    const reduced = useReducedMotion();

    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const gx = useMotionValue(50);
    const gy = useMotionValue(50);
    const s = useMotionValue(1);

    const srx = useSpring(rx, { stiffness: 260, damping: 26, mass: 0.4 });
    const sry = useSpring(ry, { stiffness: 260, damping: 26, mass: 0.4 });
    const ss = useSpring(s, { stiffness: 260, damping: 26, mass: 0.4 });
    const sgx = useSpring(gx, { stiffness: 180, damping: 24 });
    const sgy = useSpring(gy, { stiffness: 180, damping: 24 });

    const glareBg = useTransform(
        [sgx, sgy],
        ([x, y]) => `radial-gradient(420px circle at ${x}% ${y}%, rgba(255,255,255,0.09), transparent 55%)`
    );

    const onMove = (e) => {
        const el = ref.current;
        if (!el || reduced) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry.set((px - 0.5) * max * 2);
        rx.set(-(py - 0.5) * max * 2);
        gx.set(px * 100);
        gy.set(py * 100);
        s.set(scale);
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    const onLeave = () => {
        rx.set(0);
        ry.set(0);
        s.set(1);
        gx.set(50);
        gy.set(50);
    };

    if (reduced) {
        return (
            <div ref={ref} className={className} style={style} {...rest}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className={className}
            style={{
                ...style,
                rotateX: srx,
                rotateY: sry,
                scale: ss,
                transformStyle: 'preserve-3d',
                transformPerspective: 1100,
                willChange: 'transform',
            }}
            {...rest}
        >
            {children}
            {glare && (
                <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: glareBg }}
                />
            )}
        </motion.div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   GradientBorder — a 1px conic-lit frame.
   `spin` animates it; otherwise it sits still and only the
   pointer-driven spotlight moves, which keeps busy pages calm.
   ═══════════════════════════════════════════════════════════════ */
export function GradientBorder({
    children,
    className = '',
    radius = '1.25rem',
    thickness = 1,
    spin = false,
    from = '#0ea5e9',
    via = '#14b8a6',
    to = '#0369a1',
    opacity = 0.5,
    inner = 'var(--surface-2)',
    innerClassName = '',
    style,
}) {
    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{ borderRadius: radius, padding: thickness, ...style }}
        >
            <div
                className={`absolute inset-[-60%] pointer-events-none ${spin ? 'animate-border-spin' : ''}`}
                style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, ${from} 70deg, ${via} 150deg, ${to} 220deg, transparent 300deg)`,
                    opacity,
                }}
                aria-hidden="true"
            />
            <div
                className={`relative h-full ${innerClassName}`}
                style={{
                    borderRadius: `calc(${radius} - ${thickness}px)`,
                    background: inner,
                }}
            >
                {children}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Chip — the one tech-tag style, used everywhere tags appear.
   ═══════════════════════════════════════════════════════════════ */
export function Chip({ children, tone = 'accent', className = '', style, ...rest }) {
    const tones = {
        accent: {
            color: 'rgba(125,211,252,0.85)',
            background: 'rgba(14,165,233,0.08)',
            borderColor: 'rgba(14,165,233,0.2)',
        },
        neutral: {
            color: 'rgba(255,255,255,0.62)',
            background: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.1)',
        },
        success: {
            color: 'rgba(52,211,153,0.9)',
            background: 'rgba(16,185,129,0.08)',
            borderColor: 'rgba(16,185,129,0.2)',
        },
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-[11px] font-medium border transition-all duration-300 hover:-translate-y-px ${className}`}
            style={{ ...tones[tone], ...style }}
            {...rest}
        >
            {children}
        </span>
    );
}

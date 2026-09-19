'use client';

/**
 * Shared motion primitives.
 *
 * Everything here degrades to a plain, instant render when the user
 * prefers reduced motion — content is never left hidden behind an
 * animation that will not play.
 */

import { useRef, useEffect, useState, Children } from 'react';
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1];
export const EASE_QUINT = [0.22, 1, 0.36, 1];

/* ═══════════════════════════════════════════════════════════════
   Reveal — the single entrance primitive used site-wide.
   `variant` swaps the character of the entrance so sections don't
   all animate identically (the main reason the old build read as
   one repeating block).
   ═══════════════════════════════════════════════════════════════ */
const VARIANTS = {
    up:     { y: 34, opacity: 0 },
    'up-sm':{ y: 16, opacity: 0 },
    down:   { y: -28, opacity: 0 },
    left:   { x: -44, opacity: 0 },
    right:  { x: 44, opacity: 0 },
    fade:   { opacity: 0 },
    blur:   { opacity: 0, y: 24, filter: 'blur(10px)' },
    scale:  { opacity: 0, scale: 0.94, y: 18 },
    skew:   { opacity: 0, y: 40, skewY: 3 },
};

const RESTING = { y: 0, x: 0, opacity: 1, filter: 'blur(0px)', scale: 1, skewY: 0 };

export function Reveal({
    children,
    variant = 'up',
    delay = 0,
    duration = 0.8,
    once = true,
    amount = 0.25,
    margin = '-8% 0px -8% 0px',
    className = '',
    as = 'div',
    style,
    ...rest
}) {
    const reduced = useReducedMotion();
    const Tag = motion[as] ?? motion.div;

    if (reduced) {
        const Plain = as;
        return (
            <Plain className={className} style={style} {...rest}>
                {children}
            </Plain>
        );
    }

    const from = VARIANTS[variant] ?? VARIANTS.up;

    return (
        <Tag
            className={className}
            style={style}
            initial={from}
            whileInView={{ ...RESTING }}
            viewport={{ once, amount, margin }}
            transition={{ duration, delay, ease: EASE }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Stagger — parent/child pair for lists and grids.
   ═══════════════════════════════════════════════════════════════ */
export function Stagger({
    children,
    className = '',
    delay = 0,
    stagger = 0.07,
    once = true,
    amount = 0.15,
    ...rest
}) {
    const reduced = useReducedMotion();
    if (reduced) return <div className={className} {...rest}>{children}</div>;

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount, margin: '-6% 0px' }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: stagger, delayChildren: delay } },
            }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = '',
    variant = 'up',
    duration = 0.7,
    as = 'div',
    ...rest
}) {
    const reduced = useReducedMotion();
    if (reduced) {
        const Plain = as;
        return <Plain className={className} {...rest}>{children}</Plain>;
    }

    const Tag = motion[as] ?? motion.div;
    const from = VARIANTS[variant] ?? VARIANTS.up;

    return (
        <Tag
            className={className}
            variants={{
                hidden: from,
                show: { ...RESTING, transition: { duration, ease: EASE } },
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/* ═══════════════════════════════════════════════════════════════
   TextReveal — word-by-word mask wipe.
   Each word rides up out of an overflow-hidden box, which reads as
   physical type being set rather than a generic opacity fade.
   ═══════════════════════════════════════════════════════════════ */
export function TextReveal({
    text,
    className = '',
    delay = 0,
    stagger = 0.035,
    duration = 0.85,
    once = true,
    gradient = false,
    as: Tag = 'span',
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once, margin: '-10% 0px -10% 0px' });
    const reduced = useReducedMotion();
    const words = String(text).split(' ');

    // The gradient has to sit on the animated leaf, never on this
    // wrapper: background-clip:text is resolved per painted element,
    // so a clipped parent whose children are transformed clips to
    // nothing and the text renders invisible. See .text-gradient-v.
    const leafClass = gradient ? 'text-gradient-v' : '';

    if (reduced) {
        return <Tag className={`${className} ${leafClass}`}>{text}</Tag>;
    }

    return (
        <Tag ref={ref} className={className} aria-label={text}>
            {words.map((word, i) => (
                <span
                    key={`${word}-${i}`}
                    aria-hidden="true"
                    style={{
                        display: 'inline-block',
                        overflow: 'hidden',
                        verticalAlign: 'top',
                        paddingBottom: '0.12em',
                        marginBottom: '-0.12em',
                    }}
                >
                    <motion.span
                        className={leafClass}
                        style={{ display: 'inline-block', willChange: 'transform' }}
                        initial={{ y: '112%' }}
                        animate={inView ? { y: '0%' } : { y: '112%' }}
                        transition={{ delay: delay + i * stagger, duration, ease: EASE }}
                    >
                        {word}
                        {i < words.length - 1 ? ' ' : ''}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}

/* ═══════════════════════════════════════════════════════════════
   CharReveal — per-character 3-D flip, reserved for the hero name.
   ═══════════════════════════════════════════════════════════════ */
export function CharReveal({
    text,
    delay = 0,
    className = '',
    stagger = 0.038,
    play = true,
    gradient = false,
}) {
    const reduced = useReducedMotion();
    const leafClass = gradient ? 'text-gradient-v' : '';

    if (reduced) {
        return (
            <span className={`${className} ${leafClass}`} style={{ display: 'block' }}>
                {text}
            </span>
        );
    }

    return (
        <span
            className={className}
            style={{ display: 'block', perspective: '1000px', wordBreak: 'break-word' }}
            aria-hidden="true"
        >
            {String(text).split('').map((char, i) => (
                <motion.span
                    key={i}
                    className={leafClass}
                    initial={{ opacity: 0, y: '0.5em', rotateX: -78, filter: 'blur(8px)' }}
                    animate={play ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}}
                    transition={{ delay: delay + i * stagger, duration: 0.85, ease: EASE }}
                    style={{
                        display: 'inline-block',
                        transformOrigin: '50% 90%',
                        willChange: 'transform, opacity',
                    }}
                >
                    {char === ' ' ? ' ' : char}
                </motion.span>
            ))}
        </span>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Magnetic — element leans toward the pointer, then springs back.
   Disabled on coarse pointers and for reduced motion.
   ═══════════════════════════════════════════════════════════════ */
export function Magnetic({
    children,
    strength = 0.32,
    radius = 120,
    className = '',
    as = 'div',
    ...rest
}) {
    const ref = useRef(null);
    const reduced = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
    const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

    const Tag = motion[as] ?? motion.div;

    if (reduced) {
        const Plain = as;
        return <Plain className={className} ref={ref} {...rest}>{children}</Plain>;
    }

    const onMove = (e) => {
        const el = ref.current;
        if (!el) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const falloff = Math.max(0, 1 - dist / (radius + Math.max(r.width, r.height) / 2));
        x.set(dx * strength * falloff);
        y.set(dy * strength * falloff);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Tag
            ref={ref}
            className={className}
            style={{ x: sx, y: sy }}
            onMouseMove={onMove}
            onMouseLeave={reset}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/* ═══════════════════════════════════════════════════════════════
   AnimatedNumber — count-up that starts from the real value so
   static HTML, crawlers and no-JS visitors always see the number.
   ═══════════════════════════════════════════════════════════════ */
export function AnimatedNumber({ value, duration = 1.8, className = '', format }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-15% 0px' });
    const reduced = useReducedMotion();
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        if (!inView || reduced) return;
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - t, 4);
            setDisplay(Math.round(eased * value));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        setDisplay(0);
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration, reduced]);

    return (
        <span ref={ref} className={className}>
            {format ? format(display) : display}
        </span>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Parallax — scroll-linked translate for decorative layers.
   ═══════════════════════════════════════════════════════════════ */
export function useParallax(scrollYProgress, distance = 60) {
    return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
}

/* Count children safely for index-based delays */
export const childCount = (children) => Children.count(children);

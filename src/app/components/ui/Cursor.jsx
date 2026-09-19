'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

/**
 * Custom cursor — a precise dot plus a trailing ring.
 *
 * Only mounts for fine pointers with hover, and never under reduced
 * motion. Elements opt into states declaratively:
 *   data-cursor="link"   → ring expands
 *   data-cursor="view"   → ring becomes a filled label chip
 *   data-cursor-text="…" → label copy
 *
 * The native cursor is only hidden once this component is actually
 * live, so a failed mount can never leave the page cursor-less.
 */
export default function Cursor() {
    const [enabled, setEnabled] = useState(false);
    const [variant, setVariant] = useState('default');
    const [label, setLabel] = useState('');
    const [visible, setVisible] = useState(false);
    const [pressed, setPressed] = useState(false);
    const rafRef = useRef(null);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.42 });
    const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.42 });
    const dotX = useSpring(x, { stiffness: 1100, damping: 48, mass: 0.2 });
    const dotY = useSpring(y, { stiffness: 1100, damping: 48, mass: 0.2 });

    useEffect(() => {
        const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!fine.matches || reduced.matches) return;

        setEnabled(true);
        document.documentElement.classList.add('cursor-host');

        const onMove = (e) => {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(() => {
                x.set(e.clientX);
                y.set(e.clientY);
                rafRef.current = null;
            });
            if (!visible) setVisible(true);
        };

        const onOver = (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;
            const host = target.closest('[data-cursor], a, button, [role="tab"], input, textarea, select');
            if (!host) {
                setVariant('default');
                setLabel('');
                return;
            }
            const explicit = host.getAttribute('data-cursor');
            const text = host.getAttribute('data-cursor-text') || '';
            setLabel(text);
            setVariant(explicit || 'link');
        };

        const onDown = () => setPressed(true);
        const onUp = () => setPressed(false);
        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        window.addEventListener('pointermove', onMove, { passive: true });
        window.addEventListener('pointerover', onOver, { passive: true });
        window.addEventListener('pointerdown', onDown, { passive: true });
        window.addEventListener('pointerup', onUp, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseenter', onEnter);

        return () => {
            document.documentElement.classList.remove('cursor-host');
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerover', onOver);
            window.removeEventListener('pointerdown', onDown);
            window.removeEventListener('pointerup', onUp);
            document.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mouseenter', onEnter);
        };
        // `visible` is intentionally excluded: it is only ever flipped on,
        // and re-binding the pointer listeners on that flip would thrash.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [x, y]);

    if (!enabled) return null;

    const isLabel = variant === 'view' && label;
    const ringSize = isLabel ? 76 : variant === 'link' ? 46 : 30;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
            {/* Trailing ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full flex items-center justify-center"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform',
                }}
                animate={{
                    width: ringSize,
                    height: ringSize,
                    opacity: visible ? 1 : 0,
                    scale: pressed ? 0.82 : 1,
                    backgroundColor: isLabel ? 'rgba(14,165,233,0.92)' : 'rgba(56,189,248,0)',
                    borderColor: isLabel ? 'rgba(14,165,233,0)' : 'rgba(56,189,248,0.55)',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            >
                <span
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: 'inherit', borderWidth: isLabel ? 0 : 1 }}
                />
                <AnimatePresence>
                    {isLabel && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.18 }}
                            className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white"
                        >
                            {label}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Precise dot */}
            <motion.div
                className="fixed top-0 left-0 rounded-full"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 5,
                    height: 5,
                    background: '#7dd3fc',
                    willChange: 'transform',
                }}
                animate={{ opacity: visible && !isLabel ? 1 : 0, scale: pressed ? 1.6 : 1 }}
                transition={{ duration: 0.18 }}
            />
        </div>
    );
}

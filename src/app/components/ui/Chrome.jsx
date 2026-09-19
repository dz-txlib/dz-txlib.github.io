'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll as useFramerScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScroll } from '../ScrollProvider';

/* ═══════════════════════════════════════════════════════════════
   ScrollProgress — hairline reading indicator pinned to the top.
   ═══════════════════════════════════════════════════════════════ */
export function ScrollProgress() {
    const { scrollYProgress } = useFramerScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 340, damping: 40, restDelta: 0.001 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left pointer-events-none"
            style={{
                scaleX,
                background: 'linear-gradient(90deg, #0ea5e9, #38bdf8 45%, #2dd4bf)',
                boxShadow: '0 0 12px rgba(56,189,248,0.6)',
            }}
            aria-hidden="true"
        />
    );
}

/* ═══════════════════════════════════════════════════════════════
   SectionRail — vertical section index on the right edge.
   Desktop only; it gives the page a sense of place that a top bar
   alone can't, and doubles as fast navigation.
   ═══════════════════════════════════════════════════════════════ */
export function SectionRail() {
    const { navItems, activeSection, scrollToSection } = useScroll();
    const [hovered, setHovered] = useState(null);

    return (
        <nav
            aria-label="Section navigation"
            className="hidden xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-1"
        >
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hovered === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        className="group flex items-center gap-3 py-1.5 pl-3"
                        aria-label={`Go to ${item.name}`}
                        aria-current={isActive ? 'true' : undefined}
                        data-cursor="link"
                    >
                        <AnimatePresence>
                            {(isHovered || isActive) && (
                                <motion.span
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-mono text-[10px] uppercase tracking-[0.18em] whitespace-nowrap"
                                    style={{ color: isActive ? '#7dd3fc' : 'rgba(255,255,255,0.5)' }}
                                >
                                    {item.name}
                                </motion.span>
                            )}
                        </AnimatePresence>

                        <span className="relative flex items-center justify-center w-6 h-3">
                            <motion.span
                                className="block rounded-full"
                                animate={{
                                    width: isActive ? 22 : isHovered ? 14 : 8,
                                    height: 2,
                                    backgroundColor: isActive
                                        ? '#38bdf8'
                                        : isHovered
                                            ? 'rgba(255,255,255,0.65)'
                                            : 'rgba(255,255,255,0.26)',
                                }}
                                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                                style={{ boxShadow: isActive ? '0 0 10px rgba(56,189,248,0.7)' : 'none' }}
                            />
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}

/* ═══════════════════════════════════════════════════════════════
   BackToTop — appears once the hero is well behind you.
   ═══════════════════════════════════════════════════════════════ */
export function BackToTop() {
    const { scrollToTop } = useScroll();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const past = y > window.innerHeight * 1.5;
            // Stand down once the footer is on screen — it carries its
            // own "Top" control, and two stacked buttons read as a bug.
            const nearBottom =
                y + window.innerHeight > document.body.scrollHeight - 340;
            setShow(past && !nearBottom);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 16 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    data-cursor="link"
                    className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-xl"
                    style={{
                        background: 'rgba(14,165,233,0.14)',
                        border: '1px solid rgba(56,189,248,0.3)',
                        color: '#7dd3fc',
                        boxShadow: '0 8px 28px -8px rgba(14,165,233,0.6)',
                    }}
                >
                    <ArrowUp size={17} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

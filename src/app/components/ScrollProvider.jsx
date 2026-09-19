'use client';

import {
    useState,
    useEffect,
    useRef,
    useCallback,
    createContext,
    useContext,
} from 'react';

const ScrollContext = createContext(null);

export function useScroll() {
    const ctx = useContext(ScrollContext);
    if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
    return ctx;
}

const NAV_ITEMS = [
    { name: 'Home',       id: 'home',       index: '01' },
    { name: 'About',      id: 'about',      index: '02' },
    { name: 'Services',   id: 'services',   index: '03' },
    { name: 'Skills',     id: 'skills',     index: '04' },
    { name: 'Experience', id: 'experience', index: '05' },
    { name: 'Projects',   id: 'projects',   index: '06' },
    { name: 'Contact',    id: 'contact',    index: '07' },
];

export default function ScrollProvider({ children }) {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDir, setScrollDir] = useState('down');
    const lenisRef = useRef(null);

    /* ── Lenis: inertial scrolling ─────────────────────────────────
       Loaded dynamically so it never blocks first paint, and skipped
       entirely for reduced-motion users (native scroll is correct
       for them — momentum scrolling is exactly what they opted out
       of) and for coarse pointers, where native momentum is better. */
    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        if (prefersReduced || isTouch) return;

        let lenis;
        let rafId;
        let cancelled = false;

        import('lenis').then(({ default: Lenis }) => {
            if (cancelled) return;
            lenis = new Lenis({
                duration: 1.05,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 1.6,
                lerp: 0.1,
            });
            lenisRef.current = lenis;

            const raf = (time) => {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            };
            rafId = requestAnimationFrame(raf);
        });

        return () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
            lenis?.destroy();
            lenisRef.current = null;
        };
    }, []);

    /* ── Scrolled state + direction (drives the navbar) ───────────── */
    useEffect(() => {
        let ticking = false;
        let lastY = window.scrollY;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                setIsScrolled(y > 24);
                if (Math.abs(y - lastY) > 6) {
                    setScrollDir(y > lastY ? 'down' : 'up');
                    lastY = y;
                }
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── Active section ───────────────────────────────────────────
       A band across the upper third of the viewport acts as the
       playhead: the last nav section whose top has crossed it wins,
       so id-less sections (education, certifications) keep the
       previous nav item lit rather than blanking the indicator. */
    useEffect(() => {
        let ticking = false;

        const update = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const line = window.innerHeight * 0.32;
                let current = NAV_ITEMS[0].id;
                for (const { id } of NAV_ITEMS) {
                    const el = document.getElementById(id);
                    if (el && el.getBoundingClientRect().top <= line) current = id;
                }
                // Pin the last item once the page bottom is reached, so the
                // final section is reachable in the indicator on tall screens.
                if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
                    current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
                }
                setActiveSection(current);
                ticking = false;
            });
        };

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -8, duration: 1.25 });
        } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const scrollToTop = useCallback(() => {
        if (lenisRef.current) lenisRef.current.scrollTo(0, { duration: 1.3 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <ScrollContext.Provider
            value={{
                activeSection,
                isScrolled,
                scrollDir,
                scrollToSection,
                scrollToTop,
                navItems: NAV_ITEMS,
                lenisRef,
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
}

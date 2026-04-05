'use client';

import { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';

const ScrollContext = createContext(null);

export function useScroll() {
    const ctx = useContext(ScrollContext);
    if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
    return ctx;
}

const SECTION_IDS = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];

const NAV_ITEMS = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
];

export default function ScrollProvider({ children }) {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const sectionRefs = useRef({});

    const registerRef = useCallback((id, ref) => {
        sectionRefs.current[id] = ref;
    }, []);

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);

                    for (const id of SECTION_IDS) {
                        const el = document.getElementById(id);
                        if (el) {
                            const rect = el.getBoundingClientRect();
                            if (rect.top <= 150 && rect.bottom >= 150) {
                                setActiveSection(id);
                                break;
                            }
                        }
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ScrollContext.Provider value={{ activeSection, isScrolled, scrollToSection, registerRef, navItems: NAV_ITEMS }}>
            {children}
        </ScrollContext.Provider>
    );
}

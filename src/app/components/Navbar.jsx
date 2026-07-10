'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from './ScrollProvider';

export default function Navbar() {
    const { activeSection, isScrolled, scrollToSection, navItems } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (id) => {
        setIsMenuOpen(false);
        scrollToSection(id);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled || isMenuOpen
                    ? 'py-2'
                    : 'py-4 bg-transparent'
            }`}
            style={
                isScrolled || isMenuOpen
                    ? {
                          background: 'rgba(9,9,11,0.92)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          borderBottom: '1px solid rgba(255,255,255,0.07)',
                      }
                    : undefined
            }
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">

                    {/* Brand */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
                        aria-label="Go to homepage"
                    >
                        <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors duration-300">
                            Talib<span className="text-sky-500">.</span>
                        </span>
                    </button>

                    {/* Desktop nav */}
                    <div className="hidden md:block">
                        <div
                            className="ml-10 flex items-center space-x-1 p-1.5 rounded-full transition-all duration-500"
                            style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                            isActive ? 'text-white' : 'link-quiet'
                                        }`}
                                        aria-current={isActive ? 'true' : undefined}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-full"
                                                style={{
                                                    background: 'rgba(255,255,255,0.12)',
                                                    border: '1px solid rgba(255,255,255,0.18)',
                                                }}
                                                initial={false}
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="icon-btn inline-flex items-center justify-center p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden absolute w-full"
                        style={{
                            background: 'rgba(9,9,11,0.98)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}
                    >
                        <div className="px-4 pt-4 pb-6 space-y-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavClick(item.id)}
                                        className={`w-full flex items-center px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
                                            isActive ? '' : 'menu-item'
                                        }`}
                                        style={
                                            isActive
                                                ? {
                                                      background: 'rgba(14,165,233,0.15)',
                                                      border: '1px solid rgba(14,165,233,0.25)',
                                                      color: '#7dd3fc',
                                                  }
                                                : undefined
                                        }
                                    >
                                        <span className="flex-1 text-left">{item.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="mobileIndicator"
                                                className="w-1.5 h-1.5 rounded-full bg-sky-400"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

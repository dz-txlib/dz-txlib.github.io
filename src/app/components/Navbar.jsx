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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                        aria-label="Go to homepage"
                    >
                        <span className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                            Talib<span className="text-blue-600">.</span>
                        </span>
                    </button>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-100 backdrop-blur-md">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                                        }`}
                                    aria-current={activeSection === item.id ? 'true' : undefined}
                                >
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-slate-900 rounded-full shadow-sm"
                                            initial={false}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden shadow-xl absolute w-full"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`w-full flex items-center px-4 py-4 rounded-2xl text-base font-bold transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    <span className="flex items-center flex-1">
                                        {item.name}
                                    </span>
                                    {activeSection === item.id && (
                                        <motion.div layoutId="mobileIndicator" className="w-2 h-2 rounded-full bg-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

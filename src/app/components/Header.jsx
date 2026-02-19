'use client';

import { Menu, X, Code } from 'lucide-react';

export default function Header({ activeSection, scrollToSection, navItems }) {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[95vw]">
            <div className="flex items-center p-1.5 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 overflow-x-auto scrollbar-none">
                <ul className="flex items-center gap-1 min-w-max px-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => scrollToSection(item.ref)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden whitespace-nowrap ${activeSection === item.id
                                        ? 'text-white shadow-md'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                            >
                                {activeSection === item.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 z-0"></div>
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hide Scrollbar Style */}
            <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </nav>
    );
}

'use client';

import { Briefcase, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import { useScroll } from './ScrollProvider';
import SectionHeader from './SectionHeader';

export default function Services() {
    const { scrollToSection } = useScroll();

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    icon={Briefcase}
                    badge="What I Offer"
                    title="Specialized"
                    highlight="Services"
                    subtitle="High-performance backend solutions, scalable system architecture, and robust engineering."
                />

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-20">
                    {services.map((service) => {
                        const IconComponent = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group flex flex-col h-full bg-slate-50 rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 sm:mb-8">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                                            <IconComponent className="text-slate-700 group-hover:text-blue-600 transition-colors" size={26} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm sm:text-base">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-200/60">
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3.5 py-1.5 bg-white text-slate-600 font-semibold text-xs rounded-xl border border-slate-200/60 shadow-sm group-hover:border-blue-200 group-hover:text-blue-600 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 shadow-xl max-w-5xl mx-auto">
                    <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" aria-hidden="true"></div>
                    <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" aria-hidden="true"></div>

                    <div className="relative z-10 md:max-w-xl text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to Build Something Great?</h3>
                        <p className="text-blue-100/80 text-base sm:text-lg">
                            Let&apos;s discuss how I can help bring your vision to life with reliable, scalable software.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0 mx-auto md:mx-0">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]"
                        >
                            <span>Let's Talk</span>
                            <ChevronRight size={22} className="text-blue-600" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

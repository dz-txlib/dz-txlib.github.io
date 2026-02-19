'use client';

import { Briefcase, ChevronRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services({ scrollToSection, contactRef }) {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                                <Briefcase className="text-white" size={28} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                What I Offer
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Specialized services in backend development and system architecture
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Services Grid - Fixed Heights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;

                        // Different gradient colors for each service
                        const gradients = [
                            'from-blue-500 to-cyan-500',
                            'from-purple-500 to-pink-500',
                            'from-green-500 to-emerald-500',
                            'from-orange-500 to-red-500',
                            'from-indigo-500 to-purple-500',
                            'from-cyan-500 to-blue-500'
                        ];

                        return (
                            <div
                                key={index}
                                className="group relative h-full"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Glowing Background Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                                {/* Service Card - Fixed Height with Flexbox */}
                                <div className="relative h-full flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100">
                                    {/* Animated Top Border */}
                                    <div className={`h-1.5 bg-gradient-to-r ${gradients[index]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        {/* Icon Container */}
                                        <div className="relative mb-6">
                                            {/* Icon Glow Ring */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}></div>

                                            {/* Icon Box */}
                                            <div className={`relative w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                {/* Rotating Ring */}
                                                <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-spin-slow"></div>
                                                <IconComponent className="text-white relative z-10" size={32} />
                                            </div>

                                            {/* Decorative Corner Badge */}
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-xs font-bold text-blue-600">★</span>
                                            </div>
                                        </div>

                                        {/* Title - Fixed Height */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 min-h-[64px] flex items-start">
                                            {service.title}
                                        </h3>

                                        {/* Description - Fixed Height with Line Clamp */}
                                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                                            {service.desc}
                                        </p>

                                        {/* Tags - Always at Bottom */}
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {service.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="group/tag relative px-3 py-1.5 bg-white rounded-full text-sm font-medium border border-gray-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 cursor-default shadow-sm"
                                                        style={{
                                                            animationDelay: `${(index * 100) + (idx * 50)}ms`,
                                                        }}
                                                    >
                                                        {/* Tag Glow */}
                                                        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-full opacity-0 group-hover/tag:opacity-20 transition-opacity duration-300`}></div>

                                                        {/* Tag Text */}
                                                        <span className="relative z-10 text-gray-700 group-hover/tag:text-blue-600 transition-colors duration-300">
                                                            {tag}
                                                        </span>
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Bottom Accent Line */}
                                            <div className={`h-1 bg-gradient-to-r ${gradients[index]} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100`}></div>
                                        </div>
                                    </div>

                                    {/* Decorative Corner Element */}
                                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
                                        <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} rounded-bl-full`}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 rounded-2xl shadow-xl">
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold mb-2">Ready to Build Something Great?</h3>
                                    <p className="text-blue-100 text-sm">
                                        Let&apos;s discuss how I can help bring your project to life
                                    </p>

                                </div>
                                <button
                                    onClick={() => scrollToSection(contactRef)}
                                    className="group/btn flex-shrink-0 px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                >
                                    <span>Get In Touch</span>
                                    <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Animated Shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </section>
    );
}

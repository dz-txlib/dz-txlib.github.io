'use client';

import { Sparkles, Zap, ChevronRight, Mail, MapPin, Clock } from 'lucide-react';
import { professionalSummary, personalInfo } from '../data/personalInfo';

export default function About({ scrollToSection, contactRef }) {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                                <Sparkles className="text-white" size={28} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                About Me
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Get to know my journey, expertise, and what drives me
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Main Content Card */}
                <div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    {/* Top Gradient Bar */}
                    <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

                    <div className="p-8 md:p-12 space-y-10">
                        {/* Introduction - Highlighted */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl opacity-30"></div>
                            <div className="relative bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-md">
                                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                    {professionalSummary.intro}
                                </p>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* My Journey */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🚀</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">My Journey</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {professionalSummary.story}
                                    </p>
                                </div>
                            </div>

                            {/* What I Do Best */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">⚡</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">What I Do Best</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {professionalSummary.expertise}
                                    </p>
                                </div>
                            </div>

                            {/* How I Work */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">How I Work</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {professionalSummary.approach}
                                    </p>
                                </div>
                            </div>

                            {/* Beyond Code */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🌟</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Beyond Code</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {professionalSummary.beyond}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Real Impact - Full Width */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-2xl">📈</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Real Impact</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {professionalSummary.impact}
                                </p>
                            </div>
                        </div>

                        {/* Call to Action Banner */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-lg transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <Zap className="text-yellow-300" size={32} />
                                    <h3 className="text-2xl font-bold text-white">Let&apos;s Work Together!</h3>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-6">
                                    {professionalSummary.cta}
                                </p>
                                <button
                                    onClick={() => scrollToSection(contactRef)}
                                    className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    <span>Get in Touch</span>
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Contact Info Grid */}
                        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t-2 border-gray-200">
                            {/* Email */}
                            <div className="group flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Email</p>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-blue-600 hover:text-cyan-600 transition-colors break-all font-medium text-sm"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="group flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Location</p>
                                    <p className="text-gray-900 font-medium text-sm">📍 {personalInfo.location}</p>
                                    <p className="text-xs text-gray-600">{personalInfo.timezone}</p>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="group flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Availability</p>
                                    <p className="text-gray-900 font-medium text-sm">{personalInfo.availability}</p>
                                    <p className="text-xs text-gray-600">{personalInfo.responseTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

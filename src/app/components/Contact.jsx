'use client';

import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50 to-white"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-[100px] opacity-60 animate-blob"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-100 rounded-full blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-5">
                        {/* Left Panel: Contact Info */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-600 p-10 text-white relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-tr-full"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Let&apos;s Connect</h3>
                                    <p className="text-blue-100 mb-10 leading-relaxed">
                                        I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                                    </p>

                                    <div className="space-y-6">
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <Mail size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">Email Me</p>
                                                <p className="font-medium text-white break-all">{personalInfo.email}</p>
                                            </div>
                                        </a>

                                        <a
                                            href={`tel:${personalInfo.phone}`}
                                            className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <Phone size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">Call Me</p>
                                                <p className="font-medium text-white">{personalInfo.phone}</p>
                                            </div>
                                        </a>

                                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 cursor-default">
                                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <MapPin size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">Location</p>
                                                <p className="font-medium text-white">{personalInfo.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-12">
                                    <p className="text-sm font-medium text-blue-100 mb-4">Connect on Socials</p>
                                    <div className="flex gap-4">
                                        <a
                                            href={personalInfo.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                        <a
                                            href={personalInfo.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-md"
                                            aria-label="GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Placeholder for Contact Form (or just a message) */}
                        <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center items-center text-center">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                <MessageSquare className="text-blue-600" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Send Highlights
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 max-w-md">
                                Looking forward to hearing from you. Feel free to reach out via email or LinkedIn!
                            </p>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Send size={20} />
                                <span>Send an Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

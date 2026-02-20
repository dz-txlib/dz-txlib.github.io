'use client';

import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-slate-50 rounded-[2.5rem] p-2 shadow-sm border border-slate-100 overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-2">
                        {/* Left Panel: Contact Info */}
                        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Get In Touch</h3>
                                <p className="text-slate-500 leading-relaxed mb-10 text-[15px]">
                                    I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-100 transition-colors shrink-0">
                                            <Mail size={20} className="text-slate-600 group-hover:text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Email Me</p>
                                            <p className="font-semibold text-slate-700 text-sm group-hover:text-blue-600 transition-colors break-all">{personalInfo.email}</p>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${personalInfo.phone}`}
                                        className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-100 transition-colors shrink-0">
                                            <Phone size={20} className="text-slate-600 group-hover:text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Call Me</p>
                                            <p className="font-semibold text-slate-700 text-sm group-hover:text-blue-600 transition-colors">{personalInfo.phone}</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                                            <MapPin size={20} className="text-slate-600" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Location</p>
                                            <p className="font-semibold text-slate-700 text-sm">{personalInfo.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Connect on Socials</p>
                                <div className="flex gap-3">
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                        aria-label="GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: CTA Banner */}
                        <div className="lg:col-span-3 bg-slate-900 rounded-[2rem] p-10 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8">
                                    <MessageSquare className="text-blue-400" size={32} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                                    Send a Message
                                </h3>
                                <p className="text-blue-100/80 text-lg mb-10 max-w-sm">
                                    My inbox is always open. Whether you have a question or a project proposal, I'd love to hear from you.
                                </p>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold shadow-lg shadow-white/5 hover:shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span>Send an Email</span>
                                    <Send size={18} className="text-blue-600" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

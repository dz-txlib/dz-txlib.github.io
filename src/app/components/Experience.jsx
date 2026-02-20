'use client';

import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Building2, Code2, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/experience';

const ExperienceCard = ({ job, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative flex flex-col md:flex-row items-start gap-8 md:gap-12 py-12 border-b border-slate-100 last:border-0"
        >
            {/* Left Side: Company & Meta Info (Sticky Layout for long content) */}
            <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-4">
                <div className="md:sticky md:top-24">
                    {/* Period */}
                    <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-blue-600">
                        <Calendar size={16} />
                        {job.period}
                    </div>

                    {/* Company Branding - Clickable */}
                    {job.url ? (
                        <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/company flex items-center gap-4 mb-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-slate-200/60 flex items-center justify-center text-xl font-bold text-blue-600 transition-all duration-300 group-hover/company:scale-105 group-hover/company:shadow-md group-hover/company:border-blue-200">
                                {job.company.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 tracking-tight transition-colors duration-300 group-hover/company:text-blue-600">
                                    {job.company}
                                    <ExternalLink size={14} className="text-slate-400 opacity-0 -translate-y-1 translate-x-1 group-hover/company:opacity-100 group-hover/company:translate-y-0 group-hover/company:translate-x-0 transition-all duration-300" />
                                </h3>
                            </div>
                        </a>
                    ) : (
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-slate-200/60 flex items-center justify-center text-xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-105">
                                {job.company.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {job.company}
                                </h3>
                            </div>
                        </div>
                    )}

                    {/* Meta Details */}
                    <div className="flex flex-col gap-2 text-sm font-medium text-slate-500 ml-16 md:ml-0 md:mt-2">
                        <span className="flex items-center gap-2">
                            <MapPin size={15} />
                            {job.location}
                        </span>
                        {job.type && (
                            <span className="inline-flex items-center w-fit px-2.5 py-1 mt-1 bg-slate-100/80 rounded-lg text-slate-600">
                                {job.type}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Side: Role, Highlights, Tech Stack */}
            <div className="w-full md:w-2/3">
                <div className="relative bg-white lg:bg-transparent lg:hover:bg-white p-0 lg:p-8 lg:-m-8 rounded-[2rem] lg:border border-transparent lg:hover:border-slate-100 lg:hover:shadow-2xl lg:hover:shadow-blue-900/5 transition-all duration-500">

                    {/* Role Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {job.role}
                        </h4>
                        {job.current && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100/50">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Present
                            </span>
                        )}
                    </div>

                    {/* Highlights */}
                    <ul className="mb-8 space-y-4">
                        {job.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-slate-600 text-base leading-relaxed">
                                <span className="mt-1.5 shrink-0 bg-blue-50 text-blue-500 p-1 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <ArrowRight size={12} strokeWidth={3} />
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="pt-6 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3.5 py-1.5 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium border border-slate-200/50 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    return (
        <section className="py-24 bg-white relative" id="experience">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100/50"
                    >
                        <Briefcase className="text-blue-600" size={16} />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">Career Path</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experience</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-500 max-w-2xl"
                    >
                        A timeline of my professional journey, highlighting key roles, achievements, and the technologies I've mastered along the way.
                    </motion.p>
                </div>

                {/* Experience List */}
                <div className="relative flex flex-col">
                    {experience.map((job, index) => (
                        <ExperienceCard key={index} job={job} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

'use client';

import { stats } from '../data/stats';

export default function Stats() {
    return (
        <section className="py-12 bg-white relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white border border-slate-200 shadow-sm rounded-2xl mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-300">
                                    <IconComponent className="text-slate-600 group-hover:text-blue-600" size={26} />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                                    {stat.number}
                                </h3>
                                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

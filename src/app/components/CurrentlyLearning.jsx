'use client';

import Image from 'next/image';
import { Target, Sparkles } from 'lucide-react';
import { currentlyLearning } from '../data/currentlyLearning';

export default function CurrentlyLearning() {
    return (
        <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-yellow-200">
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <Sparkles className="text-white animate-pulse" size={28} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg">
                            <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">Currently Learning</h3>
                        <p className="text-gray-600 text-sm mt-1">Staying ahead of the curve 🚀</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {currentlyLearning.map((tech, idx) => (
                        <div key={idx} className="group/tech relative">
                            {/* Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover/tech:opacity-30 blur-lg transition-opacity duration-300"></div>

                            {/* Tech Card */}
                            <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 p-5 rounded-2xl border-2 border-yellow-300 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
                                <div className="flex flex-col items-center gap-3">
                                    {/* Icon */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={48}
                                            height={48}
                                            className="relative w-12 h-12 object-contain transform group-hover/tech:rotate-12 group-hover/tech:scale-125 transition-transform duration-500 filter drop-shadow-lg"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Name */}
                                    <span className="font-bold text-sm text-center text-gray-800 group-hover/tech:text-orange-600 transition-colors duration-300">
                                        {tech.name}
                                    </span>

                                    {/* Progress Bar */}
                                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                                        <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform origin-left scale-x-50 group-hover/tech:scale-x-75 transition-transform duration-700 shadow-md"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-gray-600 text-sm mt-6 text-center italic flex items-center justify-center gap-2">
                    <Target size={16} className="text-orange-500" />
                    Continuously expanding my tech stack to stay ahead in the industry
                </p>
            </div>
        </div>
    );
}

'use client';

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">
            <div className="text-center">
                {/* Logo/Name Animation */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2 animate-fadeIn">
                        Mohammad Talib Uddin
                    </h1>
                    <p className="text-lg text-blue-400 font-medium animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                        Software Engineer
                    </p>
                </div>

                {/* Modern Progress Bar */}
                <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-loading"></div>
                </div>
            </div>

            <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-loading {
          animation: loading 2s ease-in-out;
        }
      `}</style>
        </div>
    );
}

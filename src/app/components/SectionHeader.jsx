'use client';

export default function SectionHeader({ icon: Icon, badge, title, highlight, subtitle, align = 'center' }) {
    const alignClass = align === 'left' ? 'text-left' : 'text-center';
    const subtitleAlign = align === 'left' ? '' : 'mx-auto';

    return (
        <div className={`${alignClass} mb-16`}>
            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100/50`}>
                <Icon className="text-blue-600" size={16} />
                <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">{badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    {highlight}
                </span>
            </h2>

            {subtitle && (
                <p className={`text-lg text-slate-500 max-w-2xl ${subtitleAlign}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}

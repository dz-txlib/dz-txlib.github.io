'use client';

import { Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CertificationGrid from './CertificationGrid';

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #030c18 0%, #060f22 100%)' }}
        >
            {/* Atmosphere */}
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.07) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 50% 60% at 100% 100%, black 20%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <SectionHeader
                    icon={Award}
                    badge="Credentials"
                    title="Professional"
                    highlight="Certifications"
                    subtitle="Verified credentials and continuous professional development."
                    dark
                />
                <CertificationGrid />
            </div>
        </section>
    );
}

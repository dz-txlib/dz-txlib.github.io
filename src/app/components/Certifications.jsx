'use client';

import { Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CertificationGrid from './CertificationGrid';

export default function Certifications() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    icon={Award}
                    badge="Credentials"
                    title="Professional"
                    highlight="Certifications"
                    subtitle="Verified credentials and continuous professional development"
                />
                <CertificationGrid />
            </div>
        </section>
    );
}

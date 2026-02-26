'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
    children: ReactNode;
    subtitle?: string;
    className?: string;
}

export default function SectionHeading({
    children,
    subtitle,
    className = '',
}: SectionHeadingProps) {
    return (
        <motion.div
            className={`text-center mb-12 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {/* Decorative top */}
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber/50" />
                <span className="text-amber text-xs">◆</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber/50" />
            </div>

            {/* Heading */}
            <h2 className="
        font-[family-name:var(--font-heading)]
        text-2xl md:text-3xl font-bold uppercase tracking-wider
        text-amber-light text-glow-amber
      ">
                {children}
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p className="text-text-muted text-xs mt-2 tracking-widest uppercase">
                    {subtitle}
                </p>
            )}

            {/* Pixel divider */}
            <div className="pixel-divider max-w-xs mx-auto mt-4" />
        </motion.div>
    );
}

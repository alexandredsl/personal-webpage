'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    children: ReactNode;
    glowColor?: 'amber' | 'teal' | 'purple';
    className?: string;
    badge?: string;
    onClick?: () => void;
}

const glowStyles = {
    amber: {
        border: 'border-amber-dark/60',
        hoverShadow: '0 0 20px rgba(245,158,11,0.25), 0 0 40px rgba(245,158,11,0.08)',
        accent: 'text-amber',
    },
    teal: {
        border: 'border-teal-dark/60',
        hoverShadow: '0 0 20px rgba(20,184,166,0.25), 0 0 40px rgba(20,184,166,0.08)',
        accent: 'text-teal',
    },
    purple: {
        border: 'border-chrono-purple/60',
        hoverShadow: '0 0 20px rgba(139,92,246,0.25), 0 0 40px rgba(139,92,246,0.08)',
        accent: 'text-chrono-purple',
    },
};

export default function Card({
    title,
    children,
    glowColor = 'amber',
    className = '',
    badge,
    onClick,
}: CardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const glow = glowStyles[glowColor];

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            className={`
        relative border-2 ${glow.border}
        bg-gradient-to-b from-void-light to-void
        rounded-sm p-5 cursor-pointer
        transition-all duration-300
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
        ${className}
      `}
            style={{
                boxShadow: isHovered
                    ? glow.hoverShadow
                    : '0 0 0 rgba(0,0,0,0)',
            }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            {/* Decorative corner marks */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber/40" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber/40" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber/40" />

            {/* Badge */}
            {badge && (
                <span className={`
          absolute -top-2.5 right-3
          px-2 py-0.5 text-[10px] uppercase tracking-widest
          ${glow.accent} bg-void border border-current rounded-sm
          font-[family-name:var(--font-heading)]
        `}>
                    {badge}
                </span>
            )}

            {/* Title */}
            <h3 className={`
        font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider
        ${glow.accent} mb-3
      `}>
                {title}
            </h3>

            {/* Content */}
            <div className="text-text-secondary text-xs leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}

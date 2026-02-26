'use client';

import { ReactNode } from 'react';

interface PixelBorderProps {
    children: ReactNode;
    variant?: 'amber' | 'teal' | 'purple';
    className?: string;
    hover?: boolean;
}

const variantClasses = {
    amber: 'pixel-border',
    teal: 'pixel-border-teal',
    purple: 'pixel-border-purple',
};

const hoverGlow = {
    amber: 'hover:glow-amber',
    teal: 'hover:glow-teal',
    purple: 'hover:glow-purple',
};

export default function PixelBorder({
    children,
    variant = 'amber',
    className = '',
    hover = false,
}: PixelBorderProps) {
    return (
        <div
            className={`
        ${variantClasses[variant]}
        ${hover ? hoverGlow[variant] : ''}
        rounded-sm p-4 transition-all duration-300
        ${className}
      `}
        >
            {children}
        </div>
    );
}

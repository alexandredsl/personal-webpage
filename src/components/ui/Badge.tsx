'use client';

interface BadgeProps {
    label: string;
    category?: 'frontend' | 'backend' | 'devops' | 'database' | 'tools' | 'default';
    size?: 'sm' | 'md';
    className?: string;
}

const categoryColors = {
    frontend: 'border-amber/40 text-amber bg-amber/5',
    backend: 'border-teal/40 text-teal bg-teal/5',
    devops: 'border-chrono-purple/40 text-chrono-purple-light bg-chrono-purple/5',
    database: 'border-portal/40 text-portal-light bg-portal/5',
    tools: 'border-gold/40 text-gold-light bg-gold/5',
    default: 'border-text-muted/30 text-text-secondary bg-void-lighter/30',
};

export default function Badge({
    label,
    category = 'default',
    size = 'sm',
    className = '',
}: BadgeProps) {
    const sizeStyles = {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-3 py-1 text-xs',
    };

    return (
        <span
            className={`
        inline-flex items-center
        border rounded-sm
        font-[family-name:var(--font-mono)]
        tracking-wide uppercase
        ${categoryColors[category]}
        ${sizeStyles[size]}
        ${className}
      `}
        >
            {label}
        </span>
    );
}

'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    disabled = false,
}: ButtonProps) {
    const baseStyles = `
    font-[family-name:var(--font-heading)] uppercase tracking-wider
    transition-all duration-200 cursor-pointer select-none
    active:translate-y-[1px]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base',
    };

    const variantStyles = {
        primary: `
      pixel-border
      text-amber hover:text-amber-light
      hover:glow-amber
    `,
        secondary: `
      pixel-border-teal
      text-teal hover:text-teal-light
      hover:glow-teal
    `,
        ghost: `
      border border-text-muted/30
      text-text-secondary hover:text-text-primary
      hover:border-amber/50 hover:bg-void-lighter/50
      bg-transparent
    `,
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
        >
            {children}
        </button>
    );
}

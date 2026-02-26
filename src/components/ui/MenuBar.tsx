'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    id: string;
    label: string;
    icon: string;
}

const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', icon: '⚔' },
    { id: 'timeline', label: 'Eras', icon: '⏳' },
    { id: 'skills', label: 'Skills', icon: '✦' },
    { id: 'projects', label: 'Quests', icon: '📜' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Chat', icon: '💬' },
];

export default function MenuBar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isExpanded, setIsExpanded] = useState(false);

    // Track active section via IntersectionObserver
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(item.id);
                    }
                },
                { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach(obs => obs.disconnect());
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsExpanded(false);
        }
    };

    return (
        <>
            {/* ═══ DESKTOP — Side nav ═══ */}
            <nav className="
        hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50
        flex-col gap-1 p-2
      ">
                <div className="pixel-border !p-2 flex flex-col gap-1">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`
                group relative flex items-center gap-2 px-3 py-2 rounded-sm
                text-xs transition-all duration-200 cursor-pointer
                font-[family-name:var(--font-heading)] uppercase tracking-wider
                ${activeSection === item.id
                                    ? 'text-amber bg-amber/10 glow-amber'
                                    : 'text-text-muted hover:text-text-primary hover:bg-void-lighter'}
              `}
                        >
                            <span className="text-sm">{item.icon}</span>
                            <span className="hidden xl:inline">{item.label}</span>

                            {/* Active indicator */}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}

                            {/* Tooltip for collapsed state */}
                            <span className="
                xl:hidden absolute left-full ml-2 px-2 py-1
                bg-void-light border border-amber/30 rounded-sm
                text-amber text-[10px] whitespace-nowrap
                opacity-0 group-hover:opacity-100 pointer-events-none
                transition-opacity duration-200
              ">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* ═══ MOBILE — Bottom nav ═══ */}
            <nav className="
        lg:hidden fixed bottom-0 left-0 right-0 z-50
        border-t-2 border-amber-dark/60
        bg-void/95 backdrop-blur-md
      ">
                <div className="flex items-center justify-around px-2 py-1">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`
                flex flex-col items-center gap-0.5 px-2 py-1.5
                transition-all duration-200 cursor-pointer
                ${activeSection === item.id
                                    ? 'text-amber'
                                    : 'text-text-muted'}
              `}
                        >
                            <span className="text-base">{item.icon}</span>
                            <span className="text-[9px] font-[family-name:var(--font-heading)] uppercase tracking-wider">
                                {item.label}
                            </span>

                            {/* Active dot */}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeMobileNav"
                                    className="absolute bottom-0 w-6 h-0.5 bg-amber rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
}

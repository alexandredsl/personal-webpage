'use client';

import { motion } from 'framer-motion';
import NpcSprite from '@/components/npc/NpcSprite';
import { portfolioData } from '@/data/portfolio';

export default function HeroSection() {
    const { name, role, tagline } = portfolioData;

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* ═══ Portal Animation ═══ */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer ring */}
                <motion.div
                    className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
                    style={{
                        background: 'conic-gradient(from 0deg, transparent 0%, rgba(6,182,212,0.08) 25%, transparent 50%, rgba(139,92,246,0.08) 75%, transparent 100%)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                {/* Middle ring */}
                <motion.div
                    className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full"
                    style={{
                        background: 'conic-gradient(from 180deg, transparent 0%, rgba(20,184,166,0.1) 30%, transparent 50%, rgba(6,182,212,0.1) 80%, transparent 100%)',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                {/* Inner glow */}
                <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-teal/5 blur-3xl" />
                {/* Center dot */}
                <motion.div
                    className="absolute w-3 h-3 rounded-full bg-teal shadow-[0_0_20px_rgba(20,184,166,0.6)]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* ═══ Content ═══ */}
            <div className="relative z-10 text-center px-6">
                {/* Greeting */}
                <motion.p
                    className="text-text-muted text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-mono)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    ─── Welcome, Traveler ───
                </motion.p>

                {/* Name */}
                <motion.h1
                    className="
            font-[family-name:var(--font-heading)]
            text-4xl md:text-6xl lg:text-7xl font-bold
            text-amber-light text-glow-amber
            mb-4
          "
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                    {name}
                </motion.h1>

                {/* Role */}
                <motion.h2
                    className="
            font-[family-name:var(--font-heading)]
            text-lg md:text-xl text-teal-light tracking-wider uppercase
            mb-6
          "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {role}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    className="
            text-text-secondary text-sm md:text-base
            font-[family-name:var(--font-mono)]
            max-w-md mx-auto leading-relaxed
          "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    {tagline}
                </motion.p>

                {/* Pixel divider */}
                <motion.div
                    className="pixel-divider max-w-xs mx-auto mt-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                />
            </div>

            {/* ═══ NPC Sprite ═══ */}
            <motion.div
                className="absolute bottom-20 right-8 md:bottom-32 md:right-16 z-10"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
            >
                <NpcSprite size="lg" />
                <p className="text-text-muted text-[9px] text-center mt-1 font-[family-name:var(--font-mono)]">
                    ? Talk
                </p>
            </motion.div>

            {/* ═══ Scroll indicator ═══ */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
            >
                <span className="text-text-muted text-[10px] tracking-widest uppercase font-[family-name:var(--font-heading)]">
                    Scroll to Begin
                </span>
                <motion.span
                    className="text-amber text-sm"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    ▼
                </motion.span>
            </motion.div>
        </section>
    );
}

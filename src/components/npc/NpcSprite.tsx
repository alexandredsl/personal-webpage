'use client';

import { motion } from 'framer-motion';

interface NpcSpriteProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

export default function NpcSprite({
    size = 'md',
    className = '',
    onClick,
}: NpcSpriteProps) {
    const sizeMap = {
        sm: 'w-12 h-16',
        md: 'w-16 h-20',
        lg: 'w-24 h-32',
    };

    return (
        <motion.div
            className={`relative ${sizeMap[size]} cursor-pointer ${className}`}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={onClick}
            title="NPC — Phase 2 will bring me to life!"
        >
            {/* Pixel art NPC made with CSS */}
            <div className="relative w-full h-full flex flex-col items-center justify-end">
                {/* Head */}
                <div className="
          w-[60%] aspect-square rounded-sm
          bg-gradient-to-b from-teal to-teal-dark
          border border-teal-light/50
          shadow-[0_0_8px_rgba(20,184,166,0.4)]
          relative
        ">
                    {/* Eyes */}
                    <div className="absolute top-[35%] left-[20%] w-[15%] h-[15%] bg-amber rounded-sm" />
                    <div className="absolute top-[35%] right-[20%] w-[15%] h-[15%] bg-amber rounded-sm" />
                    {/* Mouth */}
                    <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[30%] h-[8%] bg-void/60 rounded-sm" />
                </div>

                {/* Body */}
                <div className="
          w-[70%] h-[40%] mt-[-2px]
          bg-gradient-to-b from-chrono-purple to-chrono-purple/80
          border border-chrono-purple-light/30
          rounded-b-sm
          relative
        ">
                    {/* Belt */}
                    <div className="absolute top-[25%] left-0 right-0 h-[10%] bg-amber/60" />
                </div>

                {/* Shadow */}
                <div className="
          w-[80%] h-[6%] mt-1
          bg-black/30 rounded-full blur-[2px]
        " />
            </div>

            {/* Sparkle effect */}
            <motion.div
                className="absolute -top-1 -right-1 text-amber text-[10px]"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                ✦
            </motion.div>
        </motion.div>
    );
}

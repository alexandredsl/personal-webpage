'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';

export default function AboutSection() {
    const { interests, bio } = portfolioData;

    return (
        <section id="about" className="relative py-24 px-6">
            <SectionHeading subtitle="Beyond the Code">
                About Me
            </SectionHeading>

            <div className="max-w-4xl mx-auto">
                {/* Bio */}
                <motion.div
                    className="pixel-border !p-6 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-text-secondary text-sm leading-relaxed text-center font-[family-name:var(--font-mono)]">
                        {bio}
                    </p>
                </motion.div>

                {/* Interests grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={interest.name}
                            className="
                group relative
                pixel-border !p-5
                hover:glow-amber
                transition-all duration-300
                cursor-default
              "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Emoji icon */}
                            <motion.div
                                className="text-3xl mb-3"
                                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.4 }}
                            >
                                {interest.emoji}
                            </motion.div>

                            {/* Name */}
                            <h3 className="
                font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider
                text-amber mb-2
                group-hover:text-glow-amber transition-all duration-300
              ">
                                {interest.name}
                            </h3>

                            {/* Description */}
                            <p className="text-text-secondary text-xs leading-relaxed">
                                {interest.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { portfolioData } from '@/data/portfolio';

export default function TimelineSection() {
    const { experiences } = portfolioData;

    return (
        <section id="timeline" className="relative py-24 px-6">
            <SectionHeading subtitle="A Journey Through the Ages">
                The Eras
            </SectionHeading>

            <div className="max-w-4xl mx-auto relative">
                {/* Central timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-amber/30 to-transparent" />
                </div>

                {/* Mobile timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px md:hidden">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-amber/30 to-transparent" />
                </div>

                {/* Era entries */}
                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Timeline node (desktop) */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                                <motion.div
                                    className="w-4 h-4 rounded-full border-2 border-amber bg-void"
                                    whileInView={{
                                        boxShadow: [
                                            '0 0 0 rgba(245,158,11,0)',
                                            '0 0 12px rgba(245,158,11,0.5)',
                                            '0 0 4px rgba(245,158,11,0.3)',
                                        ],
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                />
                            </div>

                            {/* Timeline node (mobile) */}
                            <div className="md:hidden absolute left-6 -translate-x-1/2 z-10 mt-1">
                                <div className="w-3 h-3 rounded-full border-2 border-amber bg-void shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                            </div>

                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block flex-1" />

                            {/* Content card */}
                            <div className={`
                flex-1 ml-12 md:ml-0
                pixel-border !p-6
                group hover:glow-amber transition-all duration-300
              `}>
                                {/* Era name */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-amber text-xs">⏳</span>
                                    <span className="
                    font-[family-name:var(--font-heading)] text-amber text-xs
                    uppercase tracking-widest
                  ">
                                        {exp.era}
                                    </span>
                                </div>

                                {/* Period */}
                                <p className="text-text-muted text-[11px] font-[family-name:var(--font-mono)] mb-3">
                                    {exp.period}
                                </p>

                                {/* Title & Company */}
                                <h3 className="
                  font-[family-name:var(--font-heading)] text-base text-text-primary
                  mb-1
                ">
                                    {exp.title}
                                </h3>
                                <p className="text-teal text-xs mb-3">@ {exp.company}</p>

                                {/* Description */}
                                <p className="text-text-secondary text-xs leading-relaxed mb-3">
                                    {exp.description}
                                </p>

                                {/* Highlight */}
                                {exp.highlight && (
                                    <div className="mb-3 px-3 py-2 bg-amber/5 border-l-2 border-amber/40">
                                        <p className="text-amber/80 text-[11px] italic">
                                            ★ {exp.highlight}
                                        </p>
                                    </div>
                                )}

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tech.map(t => (
                                        <Badge key={t} label={t} size="sm" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline end marker */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="
            px-4 py-2 border border-amber/30 rounded-sm
            font-[family-name:var(--font-heading)] text-amber/60 text-xs
            uppercase tracking-widest
          ">
                        The Journey Continues...
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

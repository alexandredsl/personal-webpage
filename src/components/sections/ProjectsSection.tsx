'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { portfolioData, Project } from '@/data/portfolio';

const questTypeStyles = {
    main: { label: 'Main Quest', color: 'text-amber', border: 'border-amber-dark/60' },
    side: { label: 'Side Quest', color: 'text-teal', border: 'border-teal-dark/60' },
    legendary: { label: 'Legendary', color: 'text-chrono-purple-light', border: 'border-chrono-purple/60' },
};

const statusStyles = {
    completed: { label: 'Complete', dot: 'bg-teal' },
    'in-progress': { label: 'In Progress', dot: 'bg-amber animate-pulse' },
    legendary: { label: 'Legendary', dot: 'bg-chrono-purple animate-[glow-pulse_2s_infinite]' },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const quest = questTypeStyles[project.questType];
    const status = statusStyles[project.status];

    return (
        <motion.div
            className={`
        relative border-2 ${quest.border}
        bg-gradient-to-b from-void-light to-void
        rounded-sm cursor-pointer overflow-hidden
        transition-all duration-300
        hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]
      `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ y: -3 }}
        >
            {/* Decorative corner marks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber/30" />

            <div className="p-5">
                {/* Quest type & status */}
                <div className="flex items-center justify-between mb-3">
                    <span className={`
            font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-widest
            ${quest.color}
          `}>
                        {quest.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${status.dot}`} />
                        <span className="text-text-muted text-[10px]">{status.label}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className={`
          font-[family-name:var(--font-heading)] text-base uppercase tracking-wide
          ${quest.color} mb-2
        `}>
                    {project.title}
                </h3>

                {/* Short description */}
                <p className="text-text-secondary text-xs leading-relaxed mb-3">
                    {project.description}
                </p>

                {/* Expanded content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pixel-divider mb-3" />
                            <p className="text-text-secondary text-xs leading-relaxed mb-3">
                                {project.longDescription}
                            </p>

                            {/* Links */}
                            <div className="flex gap-2 mb-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      text-teal text-[10px] uppercase tracking-wider
                      border border-teal/30 px-2 py-1 rounded-sm
                      hover:bg-teal/10 transition-colors
                    "
                                        onClick={e => e.stopPropagation()}
                                    >
                                        📦 Code
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      text-amber text-[10px] uppercase tracking-wider
                      border border-amber/30 px-2 py-1 rounded-sm
                      hover:bg-amber/10 transition-colors
                    "
                                        onClick={e => e.stopPropagation()}
                                    >
                                        🔗 Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                        <Badge key={t} label={t} size="sm" />
                    ))}
                </div>

                {/* Expand hint */}
                <div className="flex justify-center mt-3">
                    <motion.span
                        className="text-text-muted text-xs"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        ▼
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="relative py-24 px-6">
            <SectionHeading subtitle="Adventures & Achievements">
                Quest Log
            </SectionHeading>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

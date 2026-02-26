'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioData, SkillCategory } from '@/data/portfolio';

const categoryConfig: Record<SkillCategory, { color: string; icon: string; glow: string }> = {
    Frontend: { color: 'text-amber', icon: '⚔️', glow: 'bg-amber' },
    Backend: { color: 'text-teal', icon: '🛡️', glow: 'bg-teal' },
    DevOps: { color: 'text-chrono-purple-light', icon: '⚙️', glow: 'bg-chrono-purple' },
    Database: { color: 'text-portal-light', icon: '💎', glow: 'bg-portal' },
    Tools: { color: 'text-gold-light', icon: '🔧', glow: 'bg-gold' },
    'Soft Skills': { color: 'text-parchment', icon: '✨', glow: 'bg-parchment' },
};

function SkillPips({ level, glowColor }: { level: number; glowColor: string }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
                <div
                    key={i}
                    className={`
            w-3 h-3 rounded-sm border
            transition-all duration-300
            ${i < level
                            ? `${glowColor}/80 border-transparent shadow-[0_0_6px_currentColor]`
                            : 'bg-void-lighter border-text-muted/20'}
          `}
                />
            ))}
        </div>
    );
}

export default function SkillsSection() {
    const { skills } = portfolioData;

    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<SkillCategory, typeof skills>);

    return (
        <section id="skills" className="relative py-24 px-6">
            <SectionHeading subtitle="Equipment & Abilities">
                Skill Tree
            </SectionHeading>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(Object.entries(grouped) as [SkillCategory, typeof skills][]).map(
                    ([category, categorySkills], catIndex) => {
                        const config = categoryConfig[category];

                        return (
                            <motion.div
                                key={category}
                                className="pixel-border !p-5 hover:glow-amber transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-lg">{config.icon}</span>
                                    <h3 className={`
                    font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider
                    ${config.color}
                  `}>
                                        {category}
                                    </h3>
                                </div>

                                <div className="pixel-divider mb-4" />

                                {/* Skills list */}
                                <div className="space-y-3">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            className="flex items-center justify-between group"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                        >
                                            <span className="text-text-secondary text-xs font-[family-name:var(--font-mono)] group-hover:text-text-primary transition-colors">
                                                {skill.name}
                                            </span>
                                            <SkillPips level={skill.level} glowColor={config.glow} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    }
                )}
            </div>
        </section>
    );
}

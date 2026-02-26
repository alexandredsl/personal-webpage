'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ChatPanel from '@/components/npc/ChatPanel';
import { portfolioData } from '@/data/portfolio';

export default function ContactSection() {
    const { socials } = portfolioData;

    return (
        <section id="contact" className="relative py-24 px-6 pb-32 lg:pb-24">
            <SectionHeading subtitle="Approach the NPC">
                Contact
            </SectionHeading>

            <div className="max-w-4xl mx-auto">
                {/* Chat panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <ChatPanel />
                </motion.div>

                {/* Social links */}
                <motion.div
                    className="flex justify-center gap-4 flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                pixel-border !px-5 !py-3
                flex items-center gap-2
                text-text-secondary text-xs
                font-[family-name:var(--font-heading)] uppercase tracking-wider
                hover:text-amber hover:glow-amber
                transition-all duration-300
              "
                        >
                            <span>{social.icon}</span>
                            <span>{social.name}</span>
                        </a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="pixel-divider max-w-xs mx-auto mb-4" />
                    <p className="text-text-muted text-[10px] font-[family-name:var(--font-mono)]">
                        Built with Next.js, Tailwind CSS & Framer Motion
                    </p>
                    <p className="text-text-muted text-[10px] font-[family-name:var(--font-mono)] mt-1">
                        Inspired by Chrono Trigger · © {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

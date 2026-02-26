'use client';

import { useState } from 'react';
import DialogBox from '@/components/ui/DialogBox';
import NpcSprite from '@/components/npc/NpcSprite';

interface ChatMessage {
    speaker: string;
    text: string;
}

const defaultGreeting: ChatMessage = {
    speaker: 'NPC Guide',
    text: "Welcome, traveler! I'm still being trained by the ancient sages... In Phase 2, I'll be able to answer your questions about Alexandre's adventures. For now, feel free to explore the timeline!",
};

export default function ChatPanel() {
    const [messages] = useState<ChatMessage[]>([defaultGreeting]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Phase 2: Wire to AI backend
        setInputValue('');
    };

    return (
        <div className="max-w-lg mx-auto">
            {/* Chat header with NPC */}
            <div className="flex items-center gap-3 mb-4">
                <NpcSprite size="sm" />
                <div>
                    <h4 className="font-[family-name:var(--font-heading)] text-amber text-sm uppercase tracking-wider">
                        NPC Guide
                    </h4>
                    <p className="text-text-muted text-[10px]">Phase 2 — AI Powered</p>
                </div>
            </div>

            {/* Messages area */}
            <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto">
                {messages.map((msg, i) => (
                    <DialogBox
                        key={i}
                        text={msg.text}
                        speaker={msg.speaker}
                        speed={25}
                    />
                ))}
            </div>

            {/* Input field */}
            <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1 pixel-border !p-0">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Speak to the NPC... (Phase 2)"
                        disabled
                        className="
              w-full bg-transparent px-4 py-3
              text-text-primary text-sm
              font-[family-name:var(--font-mono)]
              placeholder:text-text-muted/50
              focus:outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
            "
                    />
                </div>
                <button
                    type="submit"
                    disabled
                    className="
            pixel-border !px-4 !py-3
            text-amber text-sm
            font-[family-name:var(--font-heading)] uppercase tracking-wider
            hover:glow-amber transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
          "
                >
                    Send
                </button>
            </form>
        </div>
    );
}

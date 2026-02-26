'use client';

import { useState, useEffect, useCallback } from 'react';

interface DialogBoxProps {
    text: string;
    speaker?: string;
    speed?: number;       // ms per character
    onComplete?: () => void;
    showCursor?: boolean;
    className?: string;
    autoStart?: boolean;
}

export default function DialogBox({
    text,
    speaker,
    speed = 35,
    onComplete,
    showCursor = true,
    className = '',
    autoStart = true,
}: DialogBoxProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const skipToEnd = useCallback(() => {
        setDisplayedText(text);
        setCurrentIndex(text.length);
        setIsComplete(true);
        onComplete?.();
    }, [text, onComplete]);

    useEffect(() => {
        if (!autoStart) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (currentIndex === text.length && !isComplete) {
            setIsComplete(true);
            onComplete?.();
        }
    }, [currentIndex, text, speed, onComplete, isComplete, autoStart]);

    // Reset when text changes
    useEffect(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsComplete(false);
    }, [text]);

    return (
        <div
            className={`pixel-border p-4 ${className}`}
            onClick={!isComplete ? skipToEnd : undefined}
        >
            {/* Speaker name */}
            {speaker && (
                <div className="mb-2">
                    <span className="
            font-[family-name:var(--font-heading)] text-xs uppercase tracking-widest
            text-amber px-2 py-0.5 border border-amber/30 bg-amber/5
          ">
                        {speaker}
                    </span>
                </div>
            )}

            {/* Dialog text */}
            <p className="
        text-text-primary text-sm leading-relaxed
        font-[family-name:var(--font-mono)]
        min-h-[3rem]
      ">
                {displayedText}
                {showCursor && !isComplete && (
                    <span className="inline-block w-2 h-4 ml-0.5 bg-amber animate-[typewriter-cursor_0.8s_step-end_infinite]" />
                )}
            </p>

            {/* Click to skip hint */}
            {!isComplete && (
                <p className="text-text-muted text-[10px] mt-2 text-right italic">
                    click to skip ▸
                </p>
            )}

            {/* Continue indicator */}
            {isComplete && (
                <div className="flex justify-end mt-2">
                    <span className="text-amber text-xs animate-[float_1.5s_ease-in-out_infinite]">
                        ▼
                    </span>
                </div>
            )}
        </div>
    );
}

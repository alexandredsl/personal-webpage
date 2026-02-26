'use client';

import { useEffect, useRef } from 'react';

interface StarFieldProps {
    starCount?: number;
    className?: string;
}

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    twinkleSpeed: number;
    twinkleOffset: number;
}

export default function StarField({
    starCount = 200,
    className = '',
}: StarFieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        // Initialize stars
        starsRef.current = Array.from({ length: starCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.15 + 0.02,
            opacity: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
        }));

        const animate = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach(star => {
                // Twinkle effect
                const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
                const currentOpacity = star.opacity * (0.5 + twinkle * 0.5);

                // Slow drift upward
                star.y -= star.speed;
                if (star.y < -5) {
                    star.y = canvas.height + 5;
                    star.x = Math.random() * canvas.width;
                }

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
                ctx.fill();

                // Add tiny glow to larger stars
                if (star.size > 1.2) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity * 0.15})`;
                    ctx.fill();
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [starCount]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-0 ${className}`}
            style={{ opacity: 0.6 }}
        />
    );
}

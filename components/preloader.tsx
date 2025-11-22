"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const preloaderRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const greetings = ["Hello", "नमस्ते", "Hola", "Hallo"];
        let currentIndex = 0;

        const tl = gsap.timeline({
            onComplete: () => {
                // Fade out preloader
                gsap.to(preloaderRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => setIsVisible(false),
                });
            },
        });

        // Animate each greeting
        greetings.forEach((greeting, index) => {
            tl.to(textRef.current, {
                duration: 0.5,
                opacity: 1,
                scale: 1,
                ease: "power2.out",
                onStart: () => {
                    if (textRef.current) {
                        textRef.current.textContent = greeting;
                    }
                },
            })
                .to(textRef.current, {
                    duration: 0.3,
                    delay: 0.5,
                })
                .to(textRef.current, {
                    duration: 0.4,
                    opacity: 0,
                    scale: 0.8,
                    ease: "power2.in",
                });
        });

        return () => {
            tl.kill();
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0a0a0a]"
        >
            <div
                ref={textRef}
                className="text-5xl md:text-7xl font-bold text-[#08090a] dark:text-slate-200 opacity-0 scale-80"
                style={{ willChange: "transform, opacity" }}
            >
                Hello
            </div>
        </div>
    );
}

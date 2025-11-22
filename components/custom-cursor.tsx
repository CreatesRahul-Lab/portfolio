"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
            setIsHovering(!!isInteractive);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    // Smooth trailing effect
    useEffect(() => {
        const animate = () => {
            setTrailPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15,
            }));
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [position]);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="custom-cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: isVisible ? 1 : 0,
                    transform: isHovering ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%) scale(1)',
                    backgroundColor: isDark ? '#ffffff' : '#000000',
                    boxShadow: isDark ? '0 0 10px rgba(255, 255, 255, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.5)',
                }}
            />

            {/* Trailing circle */}
            <div
                className="custom-cursor-trail"
                style={{
                    left: `${trailPosition.x}px`,
                    top: `${trailPosition.y}px`,
                    opacity: isVisible ? 0.6 : 0,
                    transform: isHovering ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
                    borderColor: isDark ? '#ffffff' : '#000000',
                    boxShadow: isDark ? '0 0 15px rgba(255, 255, 255, 0.3)' : '0 0 15px rgba(0, 0, 0, 0.3)',
                }}
            />
        </>
    );
}

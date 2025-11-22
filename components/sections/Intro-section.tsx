"use client";

import HeadingBadge from "@/components/heading-badge";
import { Hand } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function IntroSection() {
  const typeTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = "A Full Stack Developer passionate about crafting seamless digital experiences";
    const typeTextElement = typeTextRef.current;

    if (!typeTextElement) return;

    // Set initial text to empty
    typeTextElement.textContent = "";

    const tl = gsap.timeline({ repeat: -1 });

    // Type out each character
    text.split("").forEach((char, index) => {
      tl.to(typeTextElement, {
        duration: 0.05,
        onStart: () => {
          typeTextElement.textContent += char;
        },
      });
    });

    // Pause at the end
    tl.to({}, { duration: 2 });

    // Delete characters one by one
    for (let i = text.length; i > 0; i--) {
      tl.to(typeTextElement, {
        duration: 0.03,
        onStart: () => {
          typeTextElement.textContent = text.slice(0, i - 1);
        },
      });
    }

    // Pause before restarting
    tl.to({}, { duration: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="intro"
      className="w-full flex flex-col items-start justify-center"
    >
      <div className="space-y-6 ">
        <HeadingBadge
          title="Introduction"
          icon={<Hand size={14} color="#06B6D4" />}
        />

        <article className="space-y-5 sm:space-y-6">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            <span className="text-[#08090a] dark:text-slate-200">
              Hi, I&apos;m Rahul Arora
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            <span ref={typeTextRef}></span>
            <span className="animate-pulse ml-1">|</span>
          </p>

          <p className="text-sm sm:text-base font-normal text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            My expertise lies in developing modern web applications using{" "}
            <span className="text-[#08090a] dark:text-slate-100 font-semibold">
              React, Next.js, TypeScript, Tailwind CSS, Node.js, and beyond.
            </span>{" "}
            I thrive on solving complex problems and building impactful solutions.
            Have an exciting project in mind? Let&apos;s collaborate and bring it to life!
          </p>
        </article>
      </div>
    </section>
  );
}

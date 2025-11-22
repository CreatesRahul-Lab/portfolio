"use client";

import React, { useState } from "react";
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Calendar, ChevronRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Example Data
const experiences = [
  {
    company: "Infosys Springboard",
    companyLink: "https://infyspringboard.onwingspan.com/",
    link: "https://infyspringboard.onwingspan.com/",
    position: "Project Intern",
    duration: "Dec 2024 - Feb 2025 · 3 mos",
    description: [
      "Currently participating in a project-based internship in the field of Artificial Intelligence.",
      "Gaining hands-on experience and enhancing skills in AI domain.",
      "Working on real-world AI projects and applications."
    ],
    technologies: ["Python", "Artificial Intelligence (AI)", "Machine Learning"],
  },
  {
    company: "FullScore",
    companyLink: "https://www.fullscore.io/",
    link: "https://www.fullscore.io/",
    position: "Project Intern",
    duration: "Apr 2024 - Sep 2024 · 6 mos",
    description: [
      "Supported teams by providing in-depth analysis and insights, ensuring accuracy and efficiency in decision-making processes.",
      "Assisted in research, documentation, and problem-solving while collaborating with cross-functional teams.",
      "Contributed to streamlining workflows and improving project outcomes."
    ],
    technologies: ["Data Analysis", "Research", "Documentation", "Problem Solving"],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="pt-10">
      <div className="space-y-8">
        <div className="flex flex-col items-start justify-start gap-5">
          <HeadingBadge
            title="Experience"
            icon={<Briefcase size={14} color="#F59E42" />}
          />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">
              Professional{" "}
              <span className="text-[#08090a] dark:text-slate-200">
                Experience
              </span>
            </h3>
            <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
              My growth as a developer through hands-on projects, guidance, and practical industry exposure.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <SpotlightCard
              key={index}
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 group rounded-sm border border-gray-200/80 dark:border-gray-500/10 ease-in-out hover:border-gray-900/30 dark:hover:border-gray-500/20",
                "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-500/5",
                expandedIndex === index ? "bg-opacity-10" : ""
              )}
              gradientColor="rgba(100, 116, 139, 0.15)"
              lightGradientColor="rgba(8, 9, 10, 0.15)"
              onClick={() => toggleExpand(index)}
              disableScale={true}
            >
              <div className="space-y-4">
                <div className="flex xs:flex-row flex-col items-start justify-between gap-4">
                  <section className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-[#08090a] dark:text-white">
                        {experience.position}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-[#08090a] dark:text-slate-200 transition-all duration-500",
                          "transform-gpu opacity-0 scale-95 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100",
                          "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          expandedIndex === index ? "rotate-90" : "rotate-0",
                          expandedIndex === index
                            ? "opacity-100 translate-x-0 scale-100"
                            : ""
                        )}
                      />
                    </div>
                    <Link
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center z-50 gap-2 text-[#737373] dark:text-[#A1A1AA]"
                    >
                      <span>{experience.company}</span>
                    </Link>
                  </section>
                  <section className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </section>
                </div>

                {/* Expanded details */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100 translate-y-0"
                      : "grid-rows-[0fr] opacity-0 -translate-y-4"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 space-y-4">
                      <ul className="space-y-2 text-[#737373] dark:text-[#A1A1AA] text-sm">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={cn(
                              "list-disc list-inside transition-all duration-500",
                              "transform-gpu",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              transitionDelay:
                                expandedIndex === index
                                  ? `${i * 100 + 300}ms`
                                  : "0ms",
                            }}
                            className={cn(
                              "px-2 py-1 text-xs rounded-sm font-medium bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-500/10 text-[#737373] dark:text-[#A1A1AA] group-hover:border-gray-900/30 dark:group-hover:border-slate-500/20 transition-all duration-300",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

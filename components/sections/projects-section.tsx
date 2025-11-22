"use client";

import { ProjectCard } from "@/components/project-card";
import HeadingBadge from "@/components/heading-badge";
import { FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  date?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "IK Gujral PTU Mohali - Attendance Management System",
    description:
      "A comprehensive attendance management system built with Next.js, TypeScript, MongoDB, and NextAuth.js. Features real-time attendance tracking, leave management, marks upload, and advanced analytics for students, teachers, and admins.",
    imageUrl: "/projects/ikgptu-student.png",
    videoUrl: "",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "SSE"],
    link: "https://ikgptu-seven.vercel.app/",
    date: "2025",
  },
  {
    id: "2",
    title: "Vision AI",
    description:
      "An AI-powered image analysis tool that provides detailed descriptions of uploaded images using Google's Gemini AI. Built with React, Node.js, and modern UI components.",
    imageUrl: "/projects/vision-ai.png",
    videoUrl: "",
    tags: ["React", "Node.js", "Gemini AI", "Express"],
    link: "https://vision-ai-beta.vercel.app/",
    githubLink: "https://github.com/rahularora/vision-ai",
    date: "2024",
  },
  {
    id: "3",
    title: "Baatein - Real-Time Chat Application",
    description:
      "A full-stack real-time chat application with Socket.io, featuring private messaging, typing indicators, and online status. Built with React, Node.js, and MongoDB.",
    imageUrl: "/projects/baatein-chat.png",
    videoUrl: "",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://baatein-chat.vercel.app/",
    githubLink: "https://github.com/rahularora/baatein-chat",
    date: "2024",
  },
  {
    id: "4",
    title: "Nike Webpage Clone",
    description:
      "A pixel-perfect clone of Nike's landing page featuring responsive design, smooth animations, and modern UI/UX principles. Built with React and Tailwind CSS.",
    imageUrl: "/projects/nike-webpage.png",
    videoUrl: "",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://nike-webpage-clone.vercel.app/",
    githubLink: "https://github.com/rahularora/nike-webpage",
    date: "2024",
  },
  {
    id: "5",
    title: "Mocha Muse - Coffee Shop Landing Page",
    description:
      "An elegant and modern landing page for a coffee shop with smooth animations, interactive menu, and beautiful design. Features product showcase and ordering interface.",
    imageUrl: "/projects/mocha-muse.png",
    videoUrl: "",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://mocha-muse.vercel.app/",
    githubLink: "https://github.com/rahularora/mocha-muse",
    date: "2024",
  },
  {
    id: "6",
    title: "AI Serv - AI Services Platform",
    description:
      "A comprehensive platform showcasing various AI services and tools. Features modern UI, service cards, and interactive demonstrations of AI capabilities.",
    imageUrl: "/projects/ai-serv.png",
    videoUrl: "",
    tags: ["React", "Node.js", "AI Integration"],
    link: "https://ai-serv.vercel.app/",
    githubLink: "https://github.com/rahularora/ai-serv",
    date: "2024",
  },
  {
    id: "7",
    title: "Rekha Sutra - Cultural Heritage Platform",
    description:
      "A digital platform celebrating cultural heritage and traditional art forms. Features beautiful galleries, artist profiles, and educational content.",
    imageUrl: "/projects/rekha-sutra.png",
    videoUrl: "",
    tags: ["React", "Tailwind CSS", "Cultural Heritage"],
    link: "https://rekha-sutra.vercel.app/",
    githubLink: "https://github.com/rahularora/rekha-sutra",
    date: "2024",
  },
  {
    id: "8",
    title: "SkyGuard - Weather Monitoring App",
    description:
      "A real-time weather monitoring application with detailed forecasts, interactive maps, and weather alerts. Built with modern APIs and responsive design.",
    imageUrl: "/projects/skyguard.png",
    videoUrl: "",
    tags: ["React", "Weather API", "Geolocation"],
    link: "https://skyguard-weather.vercel.app/",
    githubLink: "https://github.com/rahularora/skyguard",
    date: "2024",
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsToShow = 3;

  const projectsToShow = showAll
    ? projects
    : projects.slice(0, initialProjectsToShow);
  const canShowMore = projects.length > initialProjectsToShow;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Projects"
          icon={<FolderGit2 size={14} color="#A21CAF" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Featured{" "}
            <span className="text-[#08090a] dark:text-slate-200">Work</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Browse through my portfolio of projects that demonstrate my capabilities
            across different areas of software engineering.
          </p>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full">
          {projects.map((project) => {
            const isVisible = projectsToShow.some((p) => p.id === project.id);
            return (
              <div
                key={project.id}
                className={`transition-all duration-500 ease-in-out transform ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 h-0 -translate-y-4 overflow-hidden pointer-events-none"
                  }`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {canShowMore && (
          <div className="flex justify-start w-full">
            <Button
              variant="ghost"
              onClick={toggleShowAll}
              className="relative overflow-hidden h-10 px-4 py-2 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white/50 dark:bg-[#0a0a0a]/50 text-[#737373] dark:text-[#A1A1AA] hover:text-[#08090a] dark:hover:text-slate-200 hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300 ease-in-out group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : "Show More"}
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
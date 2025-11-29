import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="About Me" icon={<User size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Explore My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Story</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Learn about my background, aspirations, and the passion that fuels my
            work in technology.
          </p>
        </div>
      </div>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-6">
          {/* Who I Am */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Who I Am
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              As a full-stack developer, I specialize in building modern web applications with
              <span className="font-semibold"> Next.js </span> and
              <span className="font-semibold"> TypeScript</span>. Currently pursuing BTech in AI/ML from
              Chandigarh, India, I regularly engage in tech conferences and hackathons
              to refine my abilities and connect with fellow innovators.
            </p>
          </div>

          {/* My Journey */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              My Journey
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              My journey into web development began during <span className="font-medium">high school</span>,
              driven by my ambition to become a <span className="font-medium">software engineer</span>.
              Over time, I&apos;ve developed robust expertise in <span className="font-medium">full-stack technologies</span>
              and gained practical experience through <span className="font-medium">Project Internships</span> at
              <span className="font-medium"> Infosys Springboard and FullScore</span>. Now, I&apos;m deepening my knowledge in
              <span className="font-medium"> AI/ML and React frameworks</span> while actively pursuing
              <span className="font-medium"> internship roles</span> to enhance my practical skills and professional growth.
            </p>
          </div>


          {/* Beyond Coding */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Beyond Coding
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me <span className="font-medium">watching films, exploring emerging tech, and diving into books</span>.
              These hobbies provide both relaxation and a constant source of creative inspiration.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Lifelong learning, building community, and teamwork are core principles that drive my daily motivation and progress.
            </p>

          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}

import { useState } from "react";
import { CodeIcon, TerminalIcon, CpuIcon, EyeIcon } from "./Icons";
import {
  HtmlIcon,
  CssIcon,
  ReactIcon,
  TailwindIcon,
  NextjsIcon,
  JavafxIcon,
  JavascriptIcon,
  TypescriptIcon,
  CppIcon,
  JavaIcon,
  GitIcon,
  NetlifyIcon,
  VercelIcon,
  DeepLearningIcon,
  ComputerVisionIcon,
  PytorchIcon,
} from "./SkillIcons";

const skillsData = [
  // Frontend Development
  {
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend Development",
    icon: HtmlIcon,
    level: "Advanced",
    description: "Semantic elements, Forms & Accessibility, SEO basics",
  },
  {
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Frontend Development",
    icon: CssIcon,
    level: "Advanced",
    description: "Flexbox, CSS Grid, Transitions, Keyframe Animations",
  },
  {
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend Development",
    icon: ReactIcon,
    level: "Proficient",
    description: "Hooks, Router, Context API, Component Lifecycle",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend Development",
    icon: TailwindIcon,
    level: "Proficient",
    description: "Utility classes, Flex/Grid layouts, Responsive design, Custom themes",
  },
  {
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Frontend Development",
    icon: NextjsIcon,
    level: "Comfortable",
    description: "App Router, Server & Client Components, Middleware, Authentication",
  },
  {
    name: "JavaFX",
    category: "frontend",
    categoryLabel: "Frontend Development",
    icon: JavafxIcon,
    level: "Familiar",
    description: "Desktop UI development, Scenes & Layouts, Event handling",
  },

  // Programming Language
  {
    name: "JavaScript",
    category: "programming",
    categoryLabel: "Programming Languages",
    icon: JavascriptIcon,
    level: "Proficient",
    description: "ES6+, Async/Await, DOM manipulation, Array methods",
  },
  {
    name: "TypeScript",
    category: "programming",
    categoryLabel: "Programming Languages",
    icon: TypescriptIcon,
    level: "Comfortable",
    description: "Static typing, Interfaces, Generics, Type-safe React components",
  },
  {
    name: "C++",
    category: "programming",
    categoryLabel: "Programming Languages",
    icon: CppIcon,
    level: "Comfortable",
    description: "OOP, Data structures & algorithms, STL, Problem solving",
  },
  {
    name: "Java",
    category: "programming",
    categoryLabel: "Programming Languages",
    icon: JavaIcon,
    level: "Comfortable",
    description: "OOP principles, Collections, Exception handling, JavaFX apps",
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Tools & Deployment",
    icon: GitIcon,
    level: "Proficient",
    description: "Branching, Pull Requests, Merge conflicts, Versioning",
  },
  {
    name: "Netlify",
    category: "tools",
    categoryLabel: "Tools & Deployment",
    icon: NetlifyIcon,
    level: "Proficient",
    description: "Continuous deployment, Custom domains, Environment variables",
  },
  {
    name: "Vercel",
    category: "tools",
    categoryLabel: "Tools & Deployment",
    icon: VercelIcon,
    level: "Proficient",
    description: "CI/CD auto-deployments, Preview builds, Environment variables",
  },

  // Research
  {
    name: "Deep Learning",
    category: "research",
    categoryLabel: "Research & AI",
    icon: DeepLearningIcon,
    level: "Comfortable",
    description: "Neural networks, CNNs, Model training & evaluation",
  },
  {
    name: "Computer Vision",
    category: "research",
    categoryLabel: "Research & AI",
    icon: ComputerVisionIcon,
    level: "Comfortable",
    description: "Image classification, Object detection, Image preprocessing",
  },
  {
    name: "PyTorch",
    category: "research",
    categoryLabel: "Research & AI",
    icon: PytorchIcon,
    level: "Comfortable",
    description: "Tensors, Custom datasets, Training loops, Model fine-tuning",
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Capabilities", icon: null, count: skillsData.length },
    { id: "frontend", label: "Frontend", icon: CodeIcon, count: skillsData.filter(s => s.category === "frontend").length },
    { id: "programming", label: "Languages", icon: TerminalIcon, count: skillsData.filter(s => s.category === "programming").length },
    { id: "tools", label: "Tools & DevOps", icon: CpuIcon, count: skillsData.filter(s => s.category === "tools").length },
    { id: "research", label: "Research & AI", icon: EyeIcon, count: skillsData.filter(s => s.category === "research").length },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-[#202020] text-[#F3F3F1]";
      case "Proficient":
        return "bg-[#EAEAE7] text-[#202020] border border-[#202020]";
      case "Comfortable":
        return "bg-[#EAEAE7] text-[#202020] border border-[#D8D8D5]";
      default:
        return "bg-[#F3F3F1] text-[#777777] border border-[#D8D8D5]";
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#D8D8D5] bg-[#F3F3F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D8D5] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2">
              [ 02 // COMPETENCIES ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202020]">
              TECHNICAL SKILLS
            </h2>
          </div>
          <p className="text-sm font-mono text-[#777777] max-w-md">
            Categorized capabilities spanning client interfaces, programming foundations, workflows, and machine learning.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#D8D8D5]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border ${
                activeFilter === cat.id
                  ? "bg-[#202020] text-[#F3F3F1] border-[#202020]"
                  : "bg-transparent text-[#777777] border-transparent hover:border-[#D8D8D5] hover:text-[#202020]"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] ${activeFilter === cat.id ? "text-[#D8D8D5]" : "text-[#777777]"}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const indexFormatted = String(index + 1).padStart(2, "0");
            const SkillIconComponent = skill.icon;

            return (
              <div
                key={skill.name}
                className="border border-[#D8D8D5] p-6 bg-[#F3F3F1] hover:bg-[#EAEAE7] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D8D8D5]/60">
                    <span className="font-mono text-xs text-[#777777]">
                      #{indexFormatted} &bull; {skill.categoryLabel}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${getLevelBadgeClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Minimalist Themed Skill Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#EAEAE7] border border-[#D8D8D5] flex items-center justify-center text-[#202020] shrink-0">
                      <SkillIconComponent className="w-4 h-4 text-[#202020]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#202020] tracking-tight">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#777777] mt-3 pt-3 border-t border-[#D8D8D5]/40 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Competency Level Legend */}
        <div className="mt-12 p-4 border border-[#D8D8D5] bg-[#EAEAE7]/50 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <span className="uppercase tracking-wider text-[#202020] font-semibold">
            Proficiency Scale:
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#202020]"></span>
              <span>Advanced (Core mastery)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 border border-[#202020] bg-white"></span>
              <span>Proficient (High autonomy)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#D8D8D5]"></span>
              <span>Comfortable (Strong working knowledge)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 border border-[#D8D8D5]"></span>
              <span>Familiar (Academic / foundational)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import projects from "../data/project";
import { ArrowUpRight, GithubIcon, CloseIcon } from "./Icons";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#D8D8D5] bg-[#F3F3F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D8D5] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2">
              [ 03 // SELECTED WORK ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202020]">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-[#777777] max-w-md">
            Architected for performance, responsive ergonomics, and thoughtful utility.
          </p>
        </div>

        {/* Project List: Minimalistic Static Representation */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const indexStr = String(index + 1).padStart(2, "0");
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="border border-[#D8D8D5] bg-[#EAEAE7]/40 p-6 sm:p-8 lg:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:grid-flow-dense" : ""}`}>
                  {/* Minimalistic Image Column - No Animation */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-6" : ""}`}>
                    <div className="border border-[#D8D8D5] bg-[#EAEAE7]">
                      {/* Subtle Minimalist Index Strip */}
                      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[#D8D8D5] bg-[#EAEAE7] text-[10px] font-mono text-[#777777]">
                        <span className="uppercase tracking-widest">{project.category}</span>
                        <span>FIG. {indexStr}</span>
                      </div>
                      {/* Static Crisp Preview */}
                      <div className="overflow-hidden bg-[#F3F3F1]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto aspect-video object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${isReversed ? "lg:col-start-1" : ""}`}>
                    <div>
                      {/* Sub-label & category */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D8D8D5] text-xs font-mono">
                        <span className="text-[#202020] font-bold">[ {indexStr} ]</span>
                        <span className="text-[#777777] uppercase tracking-wider">{project.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202020] tracking-tight leading-tight mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-[#F3F3F1] border border-[#D8D8D5] text-[#202020] text-[11px] font-mono uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#D8D8D5] flex flex-wrap items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#202020] text-[#F3F3F1] text-xs font-mono uppercase tracking-wider hover:bg-[#383838] transition-colors"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#202020] text-[#202020] text-xs font-mono uppercase tracking-wider hover:bg-[#F3F3F1] transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#777777] hover:text-[#202020] ml-auto cursor-pointer"
                      >
                        <span>Case Study</span>
                        <span className="font-bold">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-[#F3F3F1] border border-[#202020] p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D8D8D5]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                Case Study &bull; {activeModalProject.category}
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1 text-[#202020] hover:bg-[#EAEAE7] transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl font-bold text-[#202020] mb-3">
              {activeModalProject.title}
            </h3>

            <p className="text-sm text-[#777777] leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Key Engineering Challenges */}
            {activeModalProject.challenges && activeModalProject.challenges.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#202020] font-bold mb-3">
                  Key Challenges &amp; Technical Solutions
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#777777]">
                      <span className="text-[#202020] font-mono font-bold mt-0.5">&bull;</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Roadmap */}
            {activeModalProject.future && activeModalProject.future.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#202020] font-bold mb-3">
                  Future Roadmap &amp; Optimizations
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.future.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#777777]">
                      <span className="text-[#202020] font-mono font-bold mt-0.5">&rarr;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-[#D8D8D5] flex items-center justify-between">
              <div className="flex gap-3">
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#202020] text-[#F3F3F1] text-xs font-mono uppercase tracking-wider"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#202020] text-[#202020] text-xs font-mono uppercase tracking-wider"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs font-mono text-[#777777] hover:text-[#202020] underline cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

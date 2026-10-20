import { useEffect } from "react";
import { CloseIcon, DownloadIcon, ArrowUpRight, MapPinIcon, MailIcon, GithubIcon, LinkedinIcon } from "./Icons";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#F3F3F1] border border-[#202020]/20 shadow-2xl flex flex-col overflow-hidden text-[#202020]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D8D5] bg-[#EAEAE7]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#202020]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
              Mahidul_Islam_Resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-[#202020] text-[#F3F3F1] hover:bg-[#333333] transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#202020] hover:bg-[#D8D8D5] transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-[#D8D8D5] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-1">
                  Curriculum Vitae
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202020]">
                  MAHIDUL ISLAM
                </h1>
                <p className="text-sm sm:text-base text-[#777777] mt-1 font-medium">
                  Computer Science Student &bull; Aspiring Full Stack Developer &bull; AI Enthusiast
                </p>
              </div>
              <div className="text-xs font-mono text-[#777777] space-y-1">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#202020]" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-3.5 h-3.5 text-[#202020]" />
                  <a href="mailto:mahidul.badhon28@gmail.com" className="hover:text-[#202020] underline">
                    mahidul.badhon28@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5 text-[#202020]" />
                  <a href="https://github.com/Mahidul-Badhon" target="_blank" rel="noreferrer" className="hover:text-[#202020] underline">
                    github.com/Mahidul-Badhon
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#202020]" />
                  <a href="https://www.linkedin.com/in/md-mahidul-islam-badhon/" target="_blank" rel="noreferrer" className="hover:text-[#202020] underline">
                    linkedin.com/in/md-mahidul-islam-badhon
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
              01 / Summary
            </h2>
            <p className="text-sm sm:text-base text-[#202020] leading-relaxed">
              Curious and driven Computer Science undergraduate at Daffodil International University with strong hands-on foundation in modern web development, scalable client architectures, and algorithmic problem solving. Experienced in building full-stack applications utilizing Next.js (App Router), React, TypeScript, and MongoDB. Actively expanding knowledge into Deep Learning, Convolutional Neural Networks (CNNs), and Computer Vision research.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-3">
              02 / Education
            </h2>
            <div className="border border-[#D8D8D5] p-5 bg-[#EAEAE7]/50">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-[#202020] text-base">
                  Daffodil International University (DIU)
                </h3>
                <span className="text-xs font-mono text-[#777777]">
                  2023 &ndash; Present (Expected 2027)
                </span>
              </div>
              <p className="text-sm text-[#202020] mt-0.5 font-medium">
                Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)
              </p>
              <p className="text-xs text-[#777777] mt-2 leading-relaxed">
                <span className="font-semibold text-[#202020]">Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming (C++, Java), Database Management Systems, Software Engineering, Discrete Mathematics, Computer Networks.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-3">
              03 / Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="border border-[#D8D8D5] p-4 bg-[#EAEAE7]/30">
                <span className="font-mono uppercase text-[#777777] block mb-1">Frontend Engineering</span>
                <p className="text-sm text-[#202020] font-medium">
                  React 19, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, DaisyUI, HTML5, CSS3, JavaFX
                </p>
              </div>
              <div className="border border-[#D8D8D5] p-4 bg-[#EAEAE7]/30">
                <span className="font-mono uppercase text-[#777777] block mb-1">Programming & Core</span>
                <p className="text-sm text-[#202020] font-medium">
                  JavaScript, TypeScript, C++, Java, OOP Principles, Data Structures & Algorithms
                </p>
              </div>
              <div className="border border-[#D8D8D5] p-4 bg-[#EAEAE7]/30">
                <span className="font-mono uppercase text-[#777777] block mb-1">Tools & Platforms</span>
                <p className="text-sm text-[#202020] font-medium">
                  Git, GitHub, Vercel, Netlify, VS Code, Vite, npm, macOS / Linux Shell
                </p>
              </div>
              <div className="border border-[#D8D8D5] p-4 bg-[#EAEAE7]/30">
                <span className="font-mono uppercase text-[#777777] block mb-1">Research & Machine Learning</span>
                <p className="text-sm text-[#202020] font-medium">
                  Deep Learning Concepts, Computer Vision, Convolutional Neural Networks (CNNs), PyTorch (Basics)
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-3">
              04 / Featured Projects
            </h2>
            <div className="space-y-4">
              <div className="border border-[#D8D8D5] p-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#202020] text-sm sm:text-base">
                      বাজার দর (BazarDor) — Commodity Price Tracker
                    </h3>
                    <a
                      href="https://bazar-dor-v9e1.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#777777] hover:text-[#202020]"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="text-xs font-mono text-[#777777]">Full-Stack Next.js</span>
                </div>
                <p className="text-xs sm:text-sm text-[#777777] mt-1.5 leading-relaxed">
                  Real-time market rate monitoring platform for essential commodities across Bangladesh. Features live price marquee, division-wise comparisons, Better Auth multi-provider authentication, and dynamic Bengali numerals.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#EAEAE7] text-[#202020] font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-[#D8D8D5] p-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#202020] text-sm sm:text-base">
                      FitLog — Workout Planner & Tracker
                    </h3>
                    <a
                      href="https://assignment-6-mauve-three.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#777777] hover:text-[#202020]"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="text-xs font-mono text-[#777777]">Web Application</span>
                </div>
                <p className="text-xs sm:text-sm text-[#777777] mt-1.5 leading-relaxed">
                  Interactive training planner with 12 exercise variations, real-time calculation of burned calories, duration, and sets synced via React Context API.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Context API", "React Toastify"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#EAEAE7] text-[#202020] font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-[#D8D8D5] p-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#202020] text-sm sm:text-base">
                      Formalin Unit Converter
                    </h3>
                    <a
                      href="https://mahidul-badhon.github.io/Formalin-Unit-Converter/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#777777] hover:text-[#202020]"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="text-xs font-mono text-[#777777]">Utility Tool</span>
                </div>
                <p className="text-xs sm:text-sm text-[#777777] mt-1.5 leading-relaxed">
                  Lightweight client-side scientific converter calculating chemical formaldehyde concentrations with input validation and instant responsive feedback.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["HTML5", "CSS3", "JavaScript ES6+"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#EAEAE7] text-[#202020] font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="px-6 py-3 border-t border-[#D8D8D5] bg-[#EAEAE7] flex items-center justify-between text-xs font-mono text-[#777777]">
          <span>Mahidul Islam &bull; Portfolio Resume Preview</span>
          <button
            onClick={onClose}
            className="text-[#202020] hover:underline cursor-pointer"
          >
            Close preview [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}

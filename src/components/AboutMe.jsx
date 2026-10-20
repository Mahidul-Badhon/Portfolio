import { CodeIcon, EyeIcon, CpuIcon } from "./Icons";

export default function AboutMe() {
  const pillars = [
    {
      num: "01",
      title: "Full Stack & Web Engineering",
      icon: CodeIcon,
      desc: "Creating responsive, fast, and accessible digital applications with Next.js (App Router), React 19, TypeScript, and modern CSS. Focused on component modularity and smooth UX.",
      techs: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    },
    {
      num: "02",
      title: "Core Computer Science",
      icon: CpuIcon,
      desc: "Grounded in foundational CS principles from Daffodil International University. Strong command over Object-Oriented Programming, Data Structures, Algorithms, and Software Engineering in C++ and Java.",
      techs: ["C++", "Java", "Data Structures", "Algorithms", "OOP"],
    },
    {
      num: "03",
      title: "AI & Computer Vision Research",
      icon: EyeIcon,
      desc: "Passionate about intelligent perceptual systems. Actively studying Deep Learning fundamentals, Convolutional Neural Networks (CNNs), feature extraction, and PyTorch model experimentation.",
      techs: ["Deep Learning", "Computer Vision", "CNNs", "PyTorch", "Image Processing"],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[#D8D8D5] bg-[#F3F3F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D8D5] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2">
              [ 01 // OVERVIEW ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202020]">
              ABOUT ME
            </h2>
          </div>
          <p className="text-sm font-mono text-[#777777] max-w-md">
            Undergraduate student, builder of responsive web applications, and explorer of intelligent systems.
          </p>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#202020] leading-relaxed">
            <p className="text-lg sm:text-xl font-medium text-[#202020] leading-snug">
              &ldquo;I believe in engineering software that marries mathematical clarity with minimalist, intuitive aesthetics.&rdquo;
            </p>
            <p className="text-[#777777]">
              I am currently pursuing my Bachelor of Science in Computer Science and Engineering at <span className="text-[#202020] font-semibold">Daffodil International University</span> (2023 &ndash; Present). From writing my first lines of C++ algorithms to shipping full-stack production-grade applications with Next.js and MongoDB, my journey is driven by relentless curiosity and disciplined execution.
            </p>
            <p className="text-[#777777]">
              Beyond traditional software engineering, I am deeply fascinated by the intersection of machine perception and computer vision. I actively study how neural networks process visual inputs, understand spatial relationships, and extract actionable semantic insights from raw imagery.
            </p>
          </div>

          {/* Quick Fact Sheet / Editorial Table */}
          <div className="lg:col-span-5 border border-[#202020] bg-[#EAEAE7] p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8D8D5] text-xs font-mono">
              <span className="uppercase tracking-widest text-[#777777]">Profile Details</span>
              <span className="text-[#202020] font-bold">INFO // 2026</span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-[#D8D8D5]/60">
                <span className="text-[#777777] uppercase">Name</span>
                <span className="text-[#202020] font-medium">Mahidul Islam</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#D8D8D5]/60">
                <span className="text-[#777777] uppercase">University</span>
                <span className="text-[#202020] font-medium">Daffodil Int. University</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#D8D8D5]/60">
                <span className="text-[#777777] uppercase">Program</span>
                <span className="text-[#202020] font-medium">B.Sc. in CSE (2023&ndash;Pres.)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#D8D8D5]/60">
                <span className="text-[#777777] uppercase">Focus</span>
                <span className="text-[#202020] font-medium">Full Stack &amp; DL / CV</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#D8D8D5]/60">
                <span className="text-[#777777] uppercase">Location</span>
                <span className="text-[#202020] font-medium">Dhaka, Bangladesh</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#777777] uppercase">Status</span>
                <span className="text-[#202020] font-semibold bg-[#202020] text-[#F3F3F1] px-2 py-0.5">
                  Available for Hire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="border border-[#D8D8D5] p-6 sm:p-8 bg-[#F3F3F1] hover:bg-[#EAEAE7] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8D8D5]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#777777]">
                      [ {pillar.num} ]
                    </span>
                    <Icon className="w-5 h-5 text-[#202020] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202020] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8D8D5]/60">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#EAEAE7] group-hover:bg-[#F3F3F1] text-[#202020] text-[10px] font-mono uppercase tracking-wider transition-colors border border-[#D8D8D5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { GraduationCapIcon, MapPinIcon, CalendarIcon } from "./Icons";

export default function Education() {
  const highlights = [
    {
      title: "Data Structures & Algorithms",
      desc: "Algorithmic thinking, complexity analysis (Big-O), trees, graphs, sorting, and dynamic problem solving in C++.",
    },
    {
      title: "Object-Oriented Programming",
      desc: "Robust architectural design using C++ and Java: encapsulation, inheritance, polymorphism, and JavaFX interface design.",
    },
    {
      title: "Database Management Systems",
      desc: "Relational schema design, SQL querying, indexing, and non-relational document stores like MongoDB.",
    },
    {
      title: "Machine Learning & Vision Focus",
      desc: "Self-driven academic curiosity into Deep Learning fundamentals, Convolutional Neural Networks (CNNs), and PyTorch.",
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-28 border-b border-[#D8D8D5] bg-[#F3F3F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D8D5] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2">
              [ 04 // ACADEMIC FOUNDATION ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202020]">
              EDUCATION
            </h2>
          </div>
          <p className="text-sm font-mono text-[#777777] max-w-md">
            Grounded in rigorous computational principles, algorithmic reasoning, and software systems.
          </p>
        </div>

        {/* Hero University Showcase Card */}
        <div className="border border-[#202020] bg-[#EAEAE7] p-8 sm:p-10 lg:p-12 mb-12 relative overflow-hidden">
          {/* Subtle Swiss background index */}
          <div className="absolute right-4 top-2 text-[80px] sm:text-[120px] font-mono font-extrabold text-[#D8D8D5]/30 select-none pointer-events-none leading-none">
            DIU
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 bg-[#202020] text-[#F3F3F1] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <GraduationCapIcon className="w-3.5 h-3.5" />
                  <span>Undergraduate Degree</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#777777]">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#202020]" />
                  <span>2023 &ndash; Present</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#777777]">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#202020]" />
                  <span>Dhaka, Bangladesh</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#202020] tracking-tight">
                Daffodil International University (DIU)
              </h3>

              <p className="text-base sm:text-lg text-[#202020] font-medium">
                Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)
              </p>

              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed max-w-2xl">
                Enrolled since 2023, pursuing a comprehensive 4-year degree focusing on software development paradigms, computational theory, systems programming, and modern machine learning concepts. Maintaining a rigorous focus on practical software engineering and clean architectural patterns.
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#D8D8D5] pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block">
                Degree Specification
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-[#D8D8D5]">
                  <span className="text-[#777777]">Department:</span>
                  <span className="text-[#202020] font-semibold">CSE</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D8D8D5]">
                  <span className="text-[#777777]">Enrolled:</span>
                  <span className="text-[#202020] font-semibold">2023</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D8D8D5]">
                  <span className="text-[#777777]">Current Status:</span>
                  <span className="text-[#202020] font-semibold">Active Student</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D8D8D5]">
                  <span className="text-[#777777]">Specialization:</span>
                  <span className="text-[#202020] font-semibold">Software &amp; AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Highlights & Focus Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="border border-[#D8D8D5] p-6 bg-[#F3F3F1] hover:bg-[#EAEAE7] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D8D5]">
                  <span className="font-mono text-xs text-[#777777]">
                    0{i + 1} // FOCUS
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#202020]"></span>
                </div>
                <h4 className="font-bold text-[#202020] text-sm sm:text-base mb-2">
                  {h.title}
                </h4>
                <p className="text-xs text-[#777777] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

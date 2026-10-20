import profileImg from "../assets/MyUpdatedProfileImage.png";
import { ArrowUpRight, ArrowDown, FileTextIcon, SendIcon } from "./Icons";

export default function Hero({ onOpenResume }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 border-b border-[#D8D8D5] bg-[#F3F3F1] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Editorial Typography & Content) - 7 cols on desktop */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Professional Micro-Labels */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#EAEAE7] text-[#202020] border border-[#D8D8D5]">
                Full Stack Developer
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#EAEAE7] text-[#202020] border border-[#D8D8D5]">
                CS Undergraduate
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#202020] text-[#F3F3F1]">
                DL &amp; CV Research
              </span>
            </div>

            {/* Large Greeting & Editorial Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#777777]">
                Greeting &mdash;
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#202020] leading-[1.08]">
                MAHIDUL <br className="hidden sm:inline" />
                ISLAM<span className="text-[#777777]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#202020] tracking-tight pt-1">
                Designing minimal web systems &amp; researching intelligent computer vision models.
              </p>
            </div>

            {/* Personal Introduction & Details */}
            <p className="text-sm sm:text-base text-[#777777] leading-relaxed max-w-2xl font-normal">
              I am a Computer Science student at Daffodil International University (2023 &ndash; Present) dedicated to crafting high-performance, thoughtful digital products. My core focus lies in modern full-stack web development with React, Next.js, and TypeScript &mdash; complemented by an active curiosity for Deep Learning architectures and Computer Vision.
            </p>

            {/* Action Buttons: Contact Me & Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#202020] text-[#F3F3F1] font-mono text-xs uppercase tracking-wider hover:bg-[#383838] transition-colors cursor-pointer border border-[#202020]"
              >
                <span>Contact Me</span>
                <SendIcon className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent text-[#202020] font-mono text-xs uppercase tracking-wider border border-[#202020] hover:bg-[#EAEAE7] transition-colors cursor-pointer"
              >
                <FileTextIcon className="w-3.5 h-3.5" />
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777]" />
              </button>

              <a
                href="#about"
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-[#777777] hover:text-[#202020] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Read Story</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (Transparent Blended Portrait - No Animation) - 5 cols on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center">
              <div className="relative w-full max-w-[480px] overflow-hidden bg-transparent">
                <img
                  src={profileImg}
                  alt="Mahidul Islam portrait"
                  className="w-full h-auto object-contain object-center grayscale contrast-105 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] mix-blend-multiply opacity-95"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

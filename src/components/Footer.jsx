import { ArrowUpRight, GithubIcon, LinkedinIcon, DiscordIcon, MailIcon } from "./Icons";

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#202020] text-[#F3F3F1] pt-16 sm:pt-20 pb-12 border-t border-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Editorial Headline */}
        <div className="border-b border-[#333333] pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#9E9E9E] mb-2">
                End of Portfolio &bull; Mahidul Islam
              </p>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-[#F3F3F1]">
                MAHIDUL ISLAM<span className="text-[#9E9E9E]">.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#9E9E9E] max-w-sm">
              Computer Science Undergraduate &bull; Full Stack Developer &bull; Deep Learning &amp; Computer Vision Enthusiast
            </p>
          </div>
        </div>

        {/* 3-Column Navigation & Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-[#333333] text-xs font-mono">
          {/* Col 1: Sitemap */}
          <div className="space-y-4">
            <span className="text-[#9E9E9E] uppercase tracking-widest block">
              01 // Sitemap
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#F3F3F1] hover:text-[#9E9E9E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenResume}
                  className="text-[#F3F3F1] hover:text-[#9E9E9E] transition-colors cursor-pointer"
                >
                  Curriculum Vitae (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Social Channels */}
          <div className="space-y-4">
            <span className="text-[#9E9E9E] uppercase tracking-widest block">
              02 // Direct Profiles
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/Mahidul-Badhon"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#F3F3F1] hover:text-[#9E9E9E] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9E9E9E]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-mahidul-islam-badhon/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#F3F3F1] hover:text-[#9E9E9E] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9E9E9E]" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#F3F3F1] hover:text-[#9E9E9E] transition-colors"
                >
                  <DiscordIcon className="w-3.5 h-3.5" />
                  <span>Discord (mahidul_badhon)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9E9E9E]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mahidul.badhon28@gmail.com"
                  className="flex items-center gap-1.5 text-[#F3F3F1] hover:text-[#9E9E9E] transition-colors"
                >
                  <MailIcon className="w-3.5 h-3.5" />
                  <span>Gmail</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9E9E9E]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Institution */}
          <div className="space-y-4">
            <span className="text-[#9E9E9E] uppercase tracking-widest block">
              03 // Institution
            </span>
            <div className="text-[#9E9E9E] space-y-1.5 leading-relaxed">
              <p className="text-[#F3F3F1] font-semibold">
                Daffodil International University
              </p>
              <p>B.Sc. in Computer Science &amp; Engineering</p>
              <p>Ashulia Campus, Dhaka, Bangladesh</p>
              <p className="text-[#F3F3F1]">Session: 2023 &ndash; Present</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#9E9E9E]">
          <div>
            &copy; {new Date().getFullYear()} Mahidul Islam. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Dhaka, Bangladesh</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#F3F3F1] hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-0.5 transition-transform font-bold">
                &uarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}


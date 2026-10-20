import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon, FileTextIcon } from "./Icons";

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", num: "01" },
    { name: "Skills", href: "#skills", num: "02" },
    { name: "Projects", href: "#projects", num: "03" },
    { name: "Education", href: "#education", num: "04" },
    { name: "Contact", href: "#contact", num: "05" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F3F3F1]/90 backdrop-blur-md border-b border-[#D8D8D5] py-3.5"
          : "bg-[#F3F3F1] border-b border-[#D8D8D5]/60 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-[#202020] text-[#F3F3F1] flex items-center justify-center font-bold text-sm tracking-wider font-mono">
              MI
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#202020] group-hover:text-[#777777] transition-colors">
                MAHIDUL ISLAM
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#777777] uppercase">
                Portfolio &bull; 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`group flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase transition-colors py-1 ${
                        isActive
                          ? "text-[#202020] font-bold border-b border-[#202020]"
                          : "text-[#777777] hover:text-[#202020]"
                      }`}
                    >
                      <span className="text-[10px] text-[#777777] group-hover:text-[#202020]">
                        {link.num}
                      </span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Availability status badge */}
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-[#D8D8D5]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#202020] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#202020]"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                Available
              </span>
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#202020] text-[#F3F3F1] text-xs font-mono uppercase tracking-wider hover:bg-[#383838] transition-all cursor-pointer border border-[#202020]"
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#202020] text-[#F3F3F1] text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#202020] hover:bg-[#EAEAE7] transition-colors cursor-pointer border border-[#D8D8D5]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F3F3F1] border-b border-[#D8D8D5] px-6 py-6 animate-fade-in shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#777777] pb-2 border-b border-[#D8D8D5]">
              Navigation Index
            </div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-2 text-sm font-mono uppercase tracking-wider text-[#202020] hover:text-[#777777] border-b border-[#D8D8D5]/40"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#777777]">{link.num} &rarr;</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 bg-[#202020] text-[#F3F3F1] text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileTextIcon className="w-4 h-4" />
                <span>Open Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

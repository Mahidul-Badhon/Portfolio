import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut: Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isResumeOpen) {
        setIsResumeOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResumeOpen]);

  return (
    <div className="min-h-screen bg-[#F3F3F1] text-[#202020] font-sans antialiased selection:bg-[#202020] selection:text-[#F3F3F1]">
      {/* Sticky Editorial Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Inverted Editorial Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Screen Readable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;

import {
  Github,
  Linkedin,
  Mail,
  MousePointer2,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const roles = ["Computer Science Engineer", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentRole.length) {
            setDisplayText(
              currentRole.substring(0, displayText.length + 1),
            );
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(
              currentRole.substring(0, displayText.length - 1),
            );
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex(
              (prev) => (prev + 1) % roles.length,
            );
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a1f] to-black"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#702963]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#702963]/20 border border-[#702963] rounded-full text-[#9d4edd] text-sm font-mono backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-[#702963] via-[#9d4edd] to-[#702963] bg-clip-text text-transparent font-bold">
                Pritam Singh
              </span>
            </h1>

            <div className="h-16 md:h-20 mb-6">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
                <span className="text-[#9d4edd]">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-8 md:h-10 bg-[#702963] ml-1 animate-pulse"></span>
              </p>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about transforming complex data into
              actionable insights and building innovative
              solutions. Currently pursuing B.Tech at LPU with{" "}
              <span className="text-[#9d4edd]">6.89 CGPA</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-gradient-to-r from-[#702963] to-[#9d4edd] text-white rounded-xl hover:shadow-2xl hover:shadow-[#702963]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get in Touch
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-white/5 border-2 border-[#702963] text-white rounded-xl hover:bg-[#702963]/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <MousePointer2 className="w-5 h-5" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Pritam3193"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-white/5 border border-[#702963]/30 flex items-center justify-center hover:bg-[#702963] hover:border-[#702963] transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/pritam-singh31"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-white/5 border border-[#702963]/30 flex items-center justify-center hover:bg-[#702963] hover:border-[#702963] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:pritam3193059@gmail.com"
                className="group w-12 h-12 rounded-xl bg-white/5 border border-[#702963]/30 flex items-center justify-center hover:bg-[#702963] hover:border-[#702963] transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="lg:w-[320px] flex-shrink-0 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#702963] via-[#9d4edd] to-[#702963] rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse"></div>

              <div className="relative w-[280px] h-[350px] lg:w-[320px] lg:h-[400px] mx-auto lg:mx-0">
                {/* Main image container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-[#702963] shadow-2xl shadow-[#702963]/50 transform group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="https://i.postimg.cc/fbCtZrgW/photos.jpg"
                    alt="Pritam Singh"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
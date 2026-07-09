import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[#702963]/20 py-12 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#702963]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent mb-4">
              Pritam Singh
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Computer Science Engineering student passionate about building innovative solutions 
              and turning complex problems into elegant code.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Pritam3193" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-[#702963]/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#702963] hover:to-[#9d4edd] hover:border-transparent transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pritam-singh31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-[#702963]/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#702963] hover:to-[#9d4edd] hover:border-transparent transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:pritam3193059@gmail.com"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-[#702963]/30 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#702963] hover:to-[#9d4edd] hover:border-transparent transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-[#9d4edd] transition-colors hover:translate-x-2 duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-[#9d4edd] transition-colors">
                pritam3193059@gmail.com
              </p>
              <p className="hover:text-[#9d4edd] transition-colors">
                +91-7014610334
              </p>
              <p className="hover:text-[#9d4edd] transition-colors">
                Lovely Professional University
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#702963]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Pritam Singh. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-[#702963] fill-[#702963] animate-pulse" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

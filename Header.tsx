import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#702963]/20">
      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="relative group cursor-pointer">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#702963] via-[#9d4edd] to-[#702963] bg-clip-text text-transparent">
              Pritam
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#702963] to-[#9d4edd] group-hover:w-full transition-all duration-300"></div>
          </div>
          
          <div className="hidden lg:flex items-center gap-1">
            {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="relative px-5 py-2 text-gray-400 hover:text-[#702963] transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-[#702963]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-[#702963] to-[#9d4edd] text-white rounded-lg hover:shadow-lg hover:shadow-[#702963]/50 transition-all duration-300 hover:scale-105">
              Resume
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-[#702963]/10 hover:bg-[#702963]/20 flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#702963]" /> : <Menu className="w-5 h-5 text-[#702963]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="block w-full text-left px-4 py-2 text-gray-400 hover:text-[#702963] hover:bg-[#702963]/10 rounded-lg transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

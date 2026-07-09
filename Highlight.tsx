import { Briefcase, GraduationCap, Target, Lightbulb } from 'lucide-react';

export function Highlight() {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      value: '2025',
      description: 'Data Analyst Intern at Starbucks'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      value: '6.89 CGPA',
      description: 'B.Tech at Lovely Professional University'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      value: '100+ Solved',
      description: 'LeetCode Algorithm Challenges'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      value: '3+ Projects',
      description: 'Full-Stack & Data Analysis'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#702963]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#702963] via-[#9d4edd] to-[#702963] rounded-[3rem] opacity-50 group-hover:opacity-75 blur-2xl transition-all duration-500"></div>
              
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-[#702963] shadow-2xl shadow-[#702963]/50 transform group-hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="figma:asset/dcf9831ea584e8c6aa0bb6f1e507dc29c69ea9e5.png"
                    alt="Pritam Singh - Professional"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#702963] to-[#9d4edd] rounded-3xl p-6 shadow-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 border-4 border-black">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">2025</div>
                    <div className="text-sm text-white/80">Graduating Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-2xl p-6 hover:border-[#702963] transition-all duration-500 hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#702963] to-[#9d4edd] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-[#9d4edd] transition-colors">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500 mb-2">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-400">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Code, Trophy, Brain, Sparkles } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Code, value: '100+', label: 'LeetCode Problems', color: 'from-[#702963] to-[#9d4edd]' },
    { icon: Trophy, value: '6.89', label: 'CGPA at LPU', color: 'from-[#9d4edd] to-[#c77dff]' },
    { icon: Brain, value: '3+', label: 'Major Projects', color: 'from-[#702963] to-[#5a1f4a]' },
    { icon: Sparkles, value: '4+', label: 'Certifications', color: 'from-[#9d4edd] to-[#702963]' }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#702963]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">INTRODUCTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Who </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Am I?
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#702963] to-[#9d4edd] rounded-full"></div>
              <div className="pl-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I am a passionate <span className="text-[#9d4edd] font-semibold">Computer Science Engineer</span> with 
                  a solid foundation in software development and data analysis. My journey in technology has been driven 
                  by curiosity and a desire to create solutions that make a real-world impact.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Currently pursuing my <span className="text-[#9d4edd] font-semibold">B.Tech at Lovely Professional University</span>, 
                  I've cultivated a deep interest in building efficient, scalable systems while exploring the transformative 
                  potential of <span className="text-[#9d4edd] font-semibold">Artificial Intelligence</span> and{' '}
                  <span className="text-[#9d4edd] font-semibold">Cloud Computing</span>.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  With a strong problem-solving mindset—demonstrated by tackling{' '}
                  <span className="text-[#9d4edd] font-semibold">100+ challenges on LeetCode</span>—I thrive on converting 
                  complex technical problems into innovative, user-centric solutions. Whether it's optimizing algorithms, 
                  analyzing data patterns, or architecting cloud-based applications, I approach each challenge with enthusiasm 
                  and dedication.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl p-6 hover:border-[#702963] transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Value */}
                    <div className="text-xl font-bold text-[#702963] mb-2">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm text-gray-400 group-hover:text-[#9d4edd] transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
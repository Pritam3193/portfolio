import { Trophy, Code, TrendingUp } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Code,
      title: 'LeetCode Problem Solver',
      description: 'Successfully solved 100+ algorithmic problems on LeetCode, demonstrating strong proficiency in data structures and algorithms.',
      gradient: 'from-[#702963] to-[#9d4edd]',
      link: null
    },
    {
      icon: Trophy,
      title: 'Code of Duty Winner',
      description: 'Led team to victory in university-level web development hackathon, showcasing exceptional technical skills and leadership.',
      gradient: 'from-[#9d4edd] to-[#c77dff]',
      link: 'https://drive.google.com/file/d/1e0OnVaPQEtHF9Qqva_gRi1rIqWvNzPwy/view?usp=drivesdk'
    },
    {
      icon: TrendingUp,
      title: 'Programming Courses Excellence',
      description: 'Achieved excellent grades in core programming courses including C, C++, Python, and Data Structures while demonstrating strong technical proficiency.',
      gradient: 'from-[#702963] to-[#5a1f4a]',
      link: null
    }
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#702963]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">MILESTONES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Key </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            const Component = achievement.link ? 'a' : 'div';
            return (
              <Component
                key={idx}
                {...(achievement.link ? { href: achievement.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group relative bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl overflow-hidden hover:border-[#702963] transition-all duration-500 hover:scale-105"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9d4edd] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}

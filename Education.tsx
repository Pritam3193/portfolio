import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Lovely Professional University',
      period: 'Pursuing',
      score: '6.89 CGPA',
      status: 'Pursuing',
      icon: GraduationCap,
      gradient: 'from-[#702963] to-[#9d4edd]',
      highlights: ['Data Structures & Algorithms', 'Cloud Computing', 'Machine Learning']
    },
    {
      degree: 'Intermediate (XII)',
      institution: 'Science Stream',
      period: 'Completed',
      score: '83.2%',
      status: 'Completed',
      icon: BookOpen,
      gradient: 'from-[#9d4edd] to-[#c77dff]',
      highlights: ['Physics', 'Chemistry', 'Mathematics']
    },
    {
      degree: 'Matriculation (X)',
      institution: 'General Studies',
      period: 'Completed',
      score: '93.6%',
      status: 'Completed',
      icon: Award,
      gradient: 'from-[#702963] to-[#5a1f4a]',
      highlights: ['Science', 'Mathematics', 'Computer Applications']
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#702963]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Educational </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${edu.gradient} text-white text-xs font-mono rounded-full`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9d4edd] transition-colors">
                    {edu.degree}
                  </h3>
                  
                  {/* Institution */}
                  <p className="text-gray-400 mb-4">{edu.institution}</p>

                  {/* Score */}
                  <div className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${edu.gradient} rounded-2xl mb-6 shadow-lg shadow-[#702963]/30`}>
                    <p className={`text-2xl font-bold text-white`}>
                      {edu.score}
                    </p>
                  </div>

                  {/* Period */}
                  <p className="text-sm text-gray-500 mb-6">{edu.period}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, highlightIdx) => (
                      <div 
                        key={highlightIdx}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.gradient}`}></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
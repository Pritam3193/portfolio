import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'C++: From OOPs to Dynamic Programming',
      provider: 'Code Help | DSA',
      period: '2025',
      type: 'Training Course',
      description: 'Comprehensive training program covering advanced C++ concepts including Object-Oriented Programming, data structures, algorithms, and dynamic programming techniques for competitive coding.',
      skills: ['C++', 'OOP', 'Data Structures', 'Dynamic Programming', 'Algorithm Optimization']
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9d4edd]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">MY JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Training & </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              {/* Timeline connector */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#702963] via-[#9d4edd] to-transparent hidden md:block"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-[#702963] border-4 border-black group-hover:scale-150 group-hover:bg-[#9d4edd] transition-all duration-300 hidden md:block">
                <div className="absolute inset-0 rounded-full bg-[#702963] animate-ping opacity-75"></div>
              </div>

              {/* Content Card */}
              <div className="md:ml-20 bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#702963]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#702963] to-[#9d4edd] text-white text-xs font-mono rounded-full mb-3">
                        {exp.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#9d4edd] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-[#9d4edd] text-lg">{exp.provider}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-3 py-1 bg-white/5 border border-[#702963]/30 rounded-lg text-sm text-gray-400 hover:text-[#9d4edd] hover:border-[#702963] hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
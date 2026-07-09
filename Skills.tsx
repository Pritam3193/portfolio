import { Code2, Database, Wrench, Users } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C++', 'JavaScript', 'Python', 'Java', 'C'],
      gradient: 'from-[#702963] to-[#9d4edd]'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: ['React', 'Node.js', 'NumPy', 'Pandas', 'TensorFlow'],
      gradient: 'from-[#9d4edd] to-[#c77dff]'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'MySQL', 'Power BI', 'VS Code', 'Excel'],
      gradient: 'from-[#702963] to-[#5a1f4a]'
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Analytical Thinking',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Leadership',
    'Communication',
    'Fast Learner'
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#702963]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx} 
                      className="group/skill relative overflow-hidden rounded-2xl bg-white/5 border border-[#702963]/30 px-5 py-3 hover:border-[#702963] hover:bg-[#702963]/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></div>
                      <p className="relative text-sm text-gray-300 group-hover/skill:text-[#9d4edd] transition-colors font-medium">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9d4edd] to-[#702963] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="group/soft relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#702963] to-[#9d4edd] opacity-0 group-hover/soft:opacity-100 transition-opacity duration-300 rounded-2xl blur"></div>
                  <div className="relative px-6 py-3 bg-[#702963]/10 border border-[#702963]/30 rounded-2xl text-gray-300 hover:text-white hover:bg-[#702963]/20 hover:border-[#702963] transition-all duration-300 cursor-default hover:scale-110">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

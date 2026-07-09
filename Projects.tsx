import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Lost and Found Tracker',
      description: 'A comprehensive web platform designed to streamline the process of reporting and reclaiming lost items, featuring real-time updates and smart matching algorithms.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
      gradient: 'from-[#702963] to-[#9d4edd]',
      github: 'https://github.com/Pritam3193/Lost-and-Found-Tracker',
      demo: null
    },
    {
      title: 'Home Cleaning Scheduler',
      description: 'An intelligent task management application that helps users organize and schedule household cleaning activities with automated reminders and progress tracking.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&auto=format&fit=crop',
      gradient: 'from-[#9d4edd] to-[#c77dff]',
      github: 'https://github.com/Pritam3193/Home-cleaning-scheduler',
      demo: null
    },
    {
      title: 'Power BI Credit Card Customer Analysis Dashboard',
      description: 'An advanced analytics dashboard that visualizes credit card customer behavior patterns, spending trends, and risk assessment metrics for data-driven decision making.',
      tags: ['Power BI', 'DAX', 'Data Analysis', 'SQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      gradient: 'from-[#702963] to-[#5a1f4a]',
      github: 'https://github.com/Pritam3193/Credit-Card-Customer-Analysis-Dashboard',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9d4edd]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl overflow-hidden hover:border-[#702963] transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#702963] hover:border-[#702963] transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#702963] hover:border-[#702963] transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#9d4edd] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 bg-[#702963]/20 border border-[#702963]/50 rounded-lg text-sm text-white font-medium hover:border-[#702963] hover:bg-[#702963]/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#9d4edd] hover:text-white transition-colors group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View on GitHub</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
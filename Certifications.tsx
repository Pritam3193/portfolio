import { Cloud, Network, HardDrive, CheckCircle, ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'NPTEL Cloud Computing',
      provider: 'NPTEL (IIIT)',
      year: '2025',
      icon: Cloud,
      skills: ['Cloud Architecture', 'Distributed Systems', 'Virtualization'],
      link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S145870081810739417.pdf'
    },
    {
      title: 'Bits and Bytes of Computer Networking',
      provider: 'Coursera',
      year: '2025',
      icon: Network,
      skills: ['Network Protocols', 'TCP/IP', 'Network Architecture'],
      link: 'https://www.coursera.org/account/accomplishments/verify/GFDK50K7LMO6'
    },
    {
      title: 'Introduction to Hardware and Operating System',
      provider: 'Coursera',
      year: '2025',
      icon: HardDrive,
      skills: ['Hardware Components', 'Operating Systems', 'System Architecture'],
      link: 'https://www.coursera.org/account/accomplishments/verify/FGY9S3A60UUO'
    }
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9d4edd]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">CREDENTIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Professional </span>
            <span className="bg-gradient-to-r from-[#702963] to-[#9d4edd] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#702963]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#702963] to-[#9d4edd] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Verified Badge */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">Verified</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9d4edd] transition-colors">
                    {cert.title}
                  </h3>

                  {/* Provider */}
                  <p className="text-[#9d4edd] mb-1">{cert.provider}</p>
                  <p className="text-sm text-gray-500 mb-6">{cert.year}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-3 py-1 bg-white/5 border border-[#702963]/30 rounded-lg text-sm text-gray-400 hover:text-[#9d4edd] hover:border-[#702963] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Link */}
                  <div className="flex items-center gap-2 text-[#9d4edd] text-sm font-medium">
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

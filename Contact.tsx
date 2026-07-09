import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#702963]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#9d4edd]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#9d4edd] text-sm font-mono tracking-widest">CONNECT WITH ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
            <span className="text-white">Let's Build </span>
            <br />
            <span className="bg-gradient-to-r from-[#702963] via-[#9d4edd] to-[#702963] bg-clip-text text-transparent font-bold">
              Something Together
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Open to opportunities, collaborations, and innovative projects. 
            Drop me a message and let's discuss how we can work together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Quick Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Quick Contact</h3>
            
            {/* Email Card */}
            <a 
              href="mailto:pritam3193059@gmail.com"
              className="group block relative bg-gradient-to-br from-white/5 to-transparent border-2 border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#702963] to-[#9d4edd] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#702963] to-[#9d4edd] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Email Address</p>
                  <p className="text-xl text-white group-hover:text-[#9d4edd] transition-colors mb-2 font-medium">
                    pritam3193059@gmail.com
                  </p>
                  <p className="text-sm text-gray-400">Best for detailed inquiries</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#9d4edd] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+917014610334"
              className="group block relative bg-gradient-to-br from-white/5 to-transparent border-2 border-[#702963]/30 rounded-3xl p-8 hover:border-[#702963] transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd] to-[#c77dff] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9d4edd] to-[#c77dff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Phone Number</p>
                  <p className="text-xl text-white group-hover:text-[#9d4edd] transition-colors mb-2 font-medium">
                    +91-7014610334
                  </p>
                  <p className="text-sm text-gray-400">Available for quick calls</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#9d4edd] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </a>

            {/* Location Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent border-2 border-[#702963]/30 rounded-3xl p-8 overflow-hidden">
              <div className="relative flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#702963] to-[#5a1f4a] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-xl text-white mb-2 font-medium">
                    Lovely Professional University
                  </p>
                  <p className="text-sm text-gray-400">Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Social & CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Follow My Journey</h3>
            
            {/* Social Links Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <a 
                href="https://github.com/Pritam3193" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/5 to-transparent border-2 border-[#702963]/30 rounded-3xl p-6 hover:border-[#702963] transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#702963] to-[#9d4edd] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#702963] to-[#9d4edd] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Github className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white group-hover:text-[#9d4edd] transition-colors">GitHub</p>
                      <p className="text-sm text-gray-400">@Pritam3193</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#9d4edd] group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/pritam-singh31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/5 to-transparent border-2 border-[#702963]/30 rounded-3xl p-6 hover:border-[#702963] transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd] to-[#c77dff] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9d4edd] to-[#c77dff] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white group-hover:text-[#9d4edd] transition-colors">LinkedIn</p>
                      <p className="text-sm text-gray-400">Pritam Singh</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#9d4edd] group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
            </div>

            {/* CTA Box */}
            <div className="relative bg-gradient-to-br from-[#702963] to-[#9d4edd] rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              <div className="relative">
                <MessageCircle className="w-12 h-12 text-white/80 mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">Ready to Start a Project?</h4>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Whether it's a collaboration, job opportunity, or just a friendly chat about tech - I'm all ears!
                </p>
                <a 
                  href="mailto:pritam3193059@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#702963] rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-bold"
                >
                  <span>Send a Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <div className="inline-block relative bg-gradient-to-br from-white/5 to-transparent border border-[#702963]/30 rounded-3xl px-8 py-6 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[#702963] to-[#9d4edd] opacity-0 hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
            <p className="relative text-lg text-gray-300">
              <span className="text-[#9d4edd] font-semibold">Available for opportunities</span> • 
              <span className="mx-2">Graduating in 2027</span> • 
              <span className="text-green-400 font-semibold">Open to Remote Work</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ProfileCard() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#702963] via-[#9d4edd] to-[#702963] rounded-[2.5rem] opacity-75 blur-2xl group-hover:opacity-100 transition-all duration-500"></div>

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-[#1a0a1f] via-[#702963]/20 to-black border-2 border-[#702963] rounded-[2.5rem] p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#702963] to-[#9d4edd] rounded-3xl blur-xl opacity-75"></div>
                  <img
                    src="https://i.postimg.cc/KckrbtB9/Whats-App-Image-2026-03-26-at-6-49-13-AM.jpg"
                    alt="Pritam Singh"
                    className="relative w-full h-full object-cover rounded-3xl border-4 border-[#702963]"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
                  Pritam Singh
                </h2>
                <p className="text-xl text-[#9d4edd] mb-8">
                  B.Tech Computer Science Engineering
                </p>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div>
                    <div className="text-xs text-black uppercase tracking-wider mb-1 font-bold">
                      UNIVERSITY
                    </div>
                    <div className="text-white font-medium">
                      LPU
                    </div>
                  </div>
                  <div className="-ml-8">
                    <div className="text-xs text-black uppercase tracking-wider mb-1 font-bold">
                      EMAIL
                    </div>
                    <div className="text-white font-medium break-all">
                      pritam3193059@gmail.com
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-black uppercase tracking-wider mb-1 font-bold">
                      PHONE
                    </div>
                    <div className="text-white font-medium">
                      +91-7014610334
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
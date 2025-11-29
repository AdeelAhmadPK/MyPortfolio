'use client'

export default function BrandsMarquee() {
  const brands = [
    { code:'UFC', name:'Urban Fashion Co', color:'from-teal-500 to-cyan-500' },
    { code:'PLG', name:'Premier Legal Group', color:'from-blue-500 to-indigo-500' },
    { code:'GFH', name:'Global Finance Hub', color:'from-green-500 to-emerald-500' },
    { code:'EM', name:'Elite MedSpa', color:'from-pink-500 to-rose-500' },
    { code:'SRG', name:'Summit Realty Group', color:'from-purple-500 to-violet-500' },
    { code:'TS', name:'TechFlow Solutions', color:'from-orange-500 to-amber-500' },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/50 dark:border-slate-800/50 shadow-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Enhanced animated background gradient mesh */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-green-300/40 dark:from-blue-700/30 dark:to-green-700/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 dark:from-purple-700/30 dark:to-pink-700/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/30 to-blue-300/30 dark:from-cyan-700/20 dark:to-blue-700/20 rounded-full blur-3xl animate-pulse-aura" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate/10 opacity-20" />
      
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-10" />
      
      <div className="relative pt-20 pb-16">
        <div 
          className="overflow-visible px-4" 
          onMouseEnter={(e) => {
            const marquee = e.currentTarget.querySelector('.animate-scroll') as HTMLElement;
            if (marquee) marquee.style.animationPlayState = 'paused';
          }} 
          onMouseLeave={(e) => {
            const marquee = e.currentTarget.querySelector('.animate-scroll') as HTMLElement;
            if (marquee) marquee.style.animationPlayState = 'running';
          }}
        >
          <div className="flex gap-6 w-max animate-scroll">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i + brand.code}
                className="group relative flex-shrink-0 w-[220px] h-[200px] rounded-2xl border-2 border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-[1.1] hover:-translate-y-4 transition-all duration-500 ease-out flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Gradient glow background on hover */}
                <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-br ${brand.color} blur-2xl -z-10`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-5 p-6">
                  <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 text-xl font-black bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${brand.color} blur-sm`} />
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${brand.color}`} />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500 drop-shadow-sm">{brand.code}</span>
                  </div>
                  <div className="text-base font-bold text-slate-700 dark:text-slate-200 leading-snug text-center px-2 max-w-full">
                    <span className={`group-hover:bg-gradient-to-r group-hover:${brand.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                      {brand.name}
                    </span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />
                
                {/* Floating particles on hover */}
                <div className={`absolute top-3 left-3 w-2 h-2 rounded-full bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity`} />
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-60 group-hover:animate-ping animation-delay-200 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

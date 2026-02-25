import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-white p-6 py-12 shadow-sm sm:p-10 sm:py-16 lg:p-12 lg:py-20">
      {/* Texture Layer */}
      <div className="grid-bg absolute inset-0 opacity-40" />

      {/* Decorative background glows */}
      <div className="glow-bg left-[-10%] top-[-10%] h-[400px] w-[400px] opacity-20" />
      <div className="glow-bg bottom-[-10%] right-[-10%] h-[400px] w-[400px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-8">
            <div className="animate-shimmer inline-flex overflow-hidden rounded-full bg-zinc-900/10 px-5 py-1.5 text-[0.65rem] font-bold tracking-widest text-zinc-900 uppercase">
              Portfolio 2026
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent">
                  Ravi
                </span>{" "}
                <span className="inline-block animate-bounce shadow-sm">👋</span>
              </h1>
              <div className="space-y-4">
                <p className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
                  I build AI-powered solutions and modern web applications. 
                  Shipping clean, delightful products that solve real problems 
                  and scale to millions of users.
                </p>
                <p className="max-w-xl text-base leading-relaxed text-zinc-500">
                  Full‑stack engineer specializing in machine learning, 
                  cloud architecture, and developer experience.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/resume.pdf"
                className="glass relative flex items-center justify-center rounded-xl border border-emerald-200/50 bg-emerald-50/50 px-6 py-3 text-sm font-bold text-emerald-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-100 hover:shadow-md active:scale-95"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="glass relative flex items-center justify-center rounded-xl border border-indigo-200/50 bg-indigo-50/50 px-6 py-3 text-sm font-bold text-indigo-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-100 hover:shadow-md active:scale-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="glass relative flex items-center justify-center rounded-xl border border-rose-200/50 bg-rose-50/50 px-6 py-3 text-sm font-bold text-rose-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-rose-100 hover:shadow-md active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="animate-float relative mt-4 lg:mt-0">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-rose-500/10 blur-2xl" />
              
              <div className="glass relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/profile.jpeg"
                  alt="Ravi Yadav"
                  fill
                  sizes="(max-width: 768px) 224px, 320px"
                  className="object-cover"
                  priority
                />
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

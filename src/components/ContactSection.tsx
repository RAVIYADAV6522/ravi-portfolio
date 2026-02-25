export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-[3rem] bg-white p-10 py-16 text-center shadow-sm sm:p-16 sm:py-24 lg:p-20"
    >
      {/* Decorative Texture Layer */}
      <div className="grid-bg absolute inset-0 opacity-20" />
      
      {/* Subtle Glow Effects */}
      <div className="glow-bg absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl space-y-8">
        <div className="animate-shimmer inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-zinc-900/5 px-4 py-1.5 text-xs font-bold tracking-widest text-zinc-900 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for Hire
        </div>
        
        <div className="space-y-6">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Let&apos;s build something <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent">
              incredible together
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl">
            Whether you have a specific project in mind, need technical advice, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-bold">
          <a
            href="mailto:you@example.com"
            className="glass group flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200/50 bg-white px-6 py-3.5 text-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 transition-colors group-hover:text-zinc-900">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Send Email
          </a>
          <a
            href="#"
            className="glass group flex items-center justify-center gap-2.5 rounded-2xl border border-blue-200/50 bg-blue-50/30 px-6 py-3.5 text-blue-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 transition-colors group-hover:text-blue-700">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="#"
            className="glass group flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200/50 bg-zinc-50/30 px-6 py-3.5 text-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-zinc-100 hover:shadow-md active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-zinc-600 transition-colors group-hover:text-zinc-900">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

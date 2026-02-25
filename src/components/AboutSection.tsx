export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm sm:p-14 lg:p-16">
      {/* Subtle Texture Layer */}
      <div className="grid-bg absolute inset-0 opacity-10" />
      
      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
          About
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
          <p>
            I love using technology to build things that make a real impact on
            people&apos;s lives. My focus is on AI, clean UI, and high‑quality
            engineering practices.
          </p>
          <p>
            I enjoy working across the stack—from designing pixel‑perfect
            interfaces to training and deploying machine learning models and
            backend systems.
          </p>
        </div>
      </div>
    </section>
  );
}

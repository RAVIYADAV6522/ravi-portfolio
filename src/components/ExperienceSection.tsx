export function ExperienceSection() {
  return (
    <section id="experience" className="rounded-3xl surface p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          Work Experience
        </h2>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Timeline
        </p>
      </div>
      <div className="mt-8 relative">
        <div
          className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200"
          aria-hidden="true"
        />
        <div className="space-y-8">
          <article className="relative pl-10">
            <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-800">
              Jan 2025 · 1 mo
              <span className="h-1 w-1 rounded-full bg-indigo-400" />
              Remote · Internship
            </div>
            <h3 className="mt-3 text-sm font-semibold text-zinc-900 sm:text-base">
              Software Engineer Intern · Algocept
            </h3>
            <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
              Jan 2025 · Remote
            </p>

            <ul className="mt-2 list-disc pl-5 text-xs leading-relaxed text-zinc-600 sm:text-sm">
              <li>
                Developed and optimized an e‑commerce platform by fixing
                critical bugs on the Admin Dashboard using React.js and Tailwind
                CSS, improving UI responsiveness and user experience.
              </li>
              <li>
                Designed and implemented RESTful APIs for footer pages using
                NestJS, TypeScript, and MongoDB, ensuring a scalable backend
                architecture.
              </li>
              <li>
                Collaborated with cross‑functional teams to integrate frontend
                and backend services, reducing API response time by optimizing
                database queries and improving overall system performance.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

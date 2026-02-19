import Image from "next/image";

export function HeroSection() {
  return (
    <header className="rounded-3xl surface p-8 backdrop-blur-sm sm:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Portfolio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Hi, I&apos;m Ravi <span className="inline-block">👋</span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            I build AI-powered solutions and modern web applications. I love
            shipping clean, delightful products that solve real problems and
            scale to millions of users.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            I&apos;m a software engineer passionate about full‑stack
            development, machine learning, and developer experience.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/resume.pdf"
              className="rounded-full bg-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-300"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="rounded-full bg-indigo-200 px-5 py-2.5 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full bg-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-900 transition hover:bg-rose-300"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex justify-center md:block">
          <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-tr from-indigo-100 via-emerald-100 to-rose-100 sm:h-32 sm:w-32">
            <Image
              src="/profile.jpeg"
              alt="Ravi Yadav"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}

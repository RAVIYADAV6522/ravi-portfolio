"use client";

export function FloatingDock() {
  const scrollToId = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4 sm:bottom-8">
      <nav className="glass pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-6 py-3 text-sm font-semibold shadow-2xl backdrop-blur-xl">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100/50 hover:text-zinc-900"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => scrollToId("about")}
          className="hidden rounded-full px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100/50 hover:text-zinc-900 sm:inline-block"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => scrollToId("projects")}
          className="rounded-full px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100/50 hover:text-zinc-900"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="hidden rounded-full px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100/50 hover:text-zinc-900 sm:inline-block"
        >
          Contact
        </button>

        <span className="mx-2 h-5 w-px bg-zinc-300/50" aria-hidden="true" />

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="rounded-full px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100/50 hover:text-zinc-900"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-handle"
          target="_blank"
          rel="noreferrer"
          className="rounded-full px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100/50 hover:text-zinc-900"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
}

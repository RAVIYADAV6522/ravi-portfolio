"use client";

export function FloatingDock() {
  const scrollToId = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:bottom-6">
      <nav className="pointer-events-auto inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs surface">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full px-2 py-1 font-medium hover:opacity-90"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => scrollToId("about")}
          className="hidden rounded-full px-2 py-1 font-medium hover:opacity-90 sm:inline-block"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => scrollToId("projects")}
          className="rounded-full px-2 py-1 font-medium hover:opacity-90"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="hidden rounded-full px-2 py-1 font-medium hover:opacity-90 sm:inline-block"
        >
          Contact
        </button>

        <span className="mx-1 h-4 w-px bg-zinc-200" aria-hidden="true" />

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full px-2 py-1 font-medium hover:opacity-90 sm:inline-block"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-handle"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full px-2 py-1 font-medium hover:opacity-90 sm:inline-block"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
}

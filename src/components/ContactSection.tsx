export function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl surface p-6 text-center sm:p-8"
    >
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
        Get in Touch
      </h2>
      <p className="mt-3 text-sm text-zinc-600 sm:text-base">
        Want to collaborate, discuss an idea, or just say hi? Feel free to reach
        out.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
        <a
          href="mailto:you@example.com"
          className="rounded-full bg-zinc-50 px-4 py-2 text-zinc-800 transition hover:bg-zinc-100"
        >
          Email
        </a>
        <a
          href="#"
          className="rounded-full bg-zinc-50 px-4 py-2 text-zinc-800 transition hover:bg-zinc-100"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="rounded-full bg-zinc-50 px-4 py-2 text-zinc-800 transition hover:bg-zinc-100"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

import React from "react";
// Image import not required here

export function ResearchSection() {
  return (
    <section id="research" className="rounded-3xl surface p-6 sm:p-8">
      <div className="flex justify-center mb-6">
        <span className="rounded-full bg-zinc-900 text-white px-5 py-2 text-sm">
          Research Publications
        </span>
      </div>

      <div className="space-y-12">
        <article>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
            Watt-IF: Electricity Data Mining and Grid Resilience Research
          </h3>
          <a href="#" className="mt-2 inline-block text-blue-500">
            Research Project (Work in Progress) - 2025
          </a>
          <div className="mt-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-zinc-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </article>

        <article>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
            Optiforge: Neural Options Pricing with LSTM and GARCH Volatility
          </h3>
          <a href="#" className="mt-2 inline-block text-blue-500">
            Research Project (Work in Progress) - 2025
          </a>
          <div className="mt-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-zinc-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

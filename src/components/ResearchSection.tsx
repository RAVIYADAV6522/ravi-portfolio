import React from "react";
// Image import not required here

export function ResearchSection() {
  return (
    <section id="research" className="mx-auto max-w-4xl py-16 sm:py-24">
      <div className="flex justify-center mb-16">
        <span className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold tracking-wide text-white shadow-xl shadow-zinc-900/10">
          Research Publications
        </span>
      </div>

      <div className="space-y-16 sm:space-y-20">
        <article className="group relative flex flex-col items-start px-4 sm:px-0">
          <div className="absolute -inset-x-6 -inset-y-8 z-0 hidden rounded-3xl bg-zinc-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
          
          <div className="relative z-10 w-full space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 sm:text-3xl md:text-4xl lg:leading-tight">
              Watt-IF: Electricity Data Mining and Grid Resilience Research
            </h3>
            
            <p className="font-medium text-blue-500/90 sm:text-lg">
              Research Project (Work in Progress) &middot; 2025
            </p>
            
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100/80 px-4 py-2 text-sm font-bold text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-900 active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
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
          </div>
        </article>

        {/* Divider */}
        <div className="mx-auto h-px w-full max-w-sm bg-gradient-to-r from-transparent via-zinc-200 to-transparent sm:max-w-md" />

        <article className="group relative flex flex-col items-start px-4 sm:px-0">
          <div className="absolute -inset-x-6 -inset-y-8 z-0 hidden rounded-3xl bg-zinc-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
          
          <div className="relative z-10 w-full space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 sm:text-3xl md:text-4xl lg:leading-tight">
              Optiforge: Neural Options Pricing with LSTM and GARCH Volatility
            </h3>
            
            <p className="font-medium text-blue-500/90 sm:text-lg">
              Research Project (Work in Progress) &middot; 2025
            </p>
            
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100/80 px-4 py-2 text-sm font-bold text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-900 active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
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
          </div>
        </article>
      </div>
    </section>
  );
}

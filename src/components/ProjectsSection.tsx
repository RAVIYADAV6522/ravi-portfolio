export function ProjectsSection() {
  return (
    <section id="projects" className="rounded-3xl surface p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          Projects
        </h2>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Selected Work
        </p>
      </div>
      <p className="mt-3 text-sm text-zinc-600 sm:text-base">
        A few projects I&apos;m proud of. You can replace these with your own
        apps, research, or client work.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="relative rounded-2xl surface p-6">
          <div className="absolute right-6 top-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3 py-2 rounded-full"
            >
              <svg
                width="16"
                height="16"
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
          <h3 className="text-lg font-semibold text-zinc-900">
            Watt-IF – Electricity Data Mining and Grid Resilience Research
          </h3>
          <a href="#" className="mt-2 inline-block text-sm text-zinc-600">
            Research Project (2025)
          </a>
          <p className="mt-3 text-sm text-zinc-600">
            Conducted large-scale electricity consumption and generation mining
            using XGBoost, TFT and deep learning models. Modeled the U.S. power
            grid as a weighted directed graph and applied max-flow/min-cut
            analysis to identify critical transmission bottlenecks and simulate
            cascading failure scenarios.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Python
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              XGBoost
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Deep Learning
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Graph Theory
            </span>
          </div>
        </article>

        <article className="relative rounded-2xl surface p-6">
          <div className="absolute right-6 top-6 flex items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3 py-2 rounded-full"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3 py-2 rounded-full"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                <path d="M17 3v8H7V3" />
              </svg>
              Report
            </a>
          </div>

          <h3 className="text-lg font-semibold text-zinc-900">
            Floor Detection using SVM
          </h3>
          <a href="#" className="mt-2 inline-block text-sm text-zinc-600">
            Implemented floor vs. non-floor pixel/region classification on
            indoor images using the CMM dataset and Support Vector Machines.
          </a>
          <p className="mt-3 text-sm text-zinc-600">
            Compared three feature-engineering approaches: RGB-only pixels, RGB
            + spatial coordinates, and KMeans-based region-level features.
            Method 3 (KMeans regions) achieved ~92.5% test accuracy with the
            fastest training time.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Python
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              SVM
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              scikit-learn
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              KMeans
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Computer Vision
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              COCO Annotations
            </span>
          </div>
        </article>

        <article className="relative rounded-2xl surface p-6">
          <div className="absolute right-6 top-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3 py-2 rounded-full"
            >
              <svg
                width="16"
                height="16"
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

          <h3 className="text-lg font-semibold text-zinc-900">
            Distributed Log Analyzer using Parallel Computing
          </h3>
          <a href="#" className="mt-2 inline-block text-sm text-zinc-600">
            Implemented a distributed system using MPI in C++ to parallelize log
            file parsing and anomaly detection across multiple nodes.
          </a>
          <p className="mt-3 text-sm text-zinc-600">
            Reduced analysis time by ~70% for large-scale server logs and
            integrated parallel reduction techniques for aggregate metrics and
            real-time monitoring in cloud environments.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              MPI
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              C++
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Parallel Computing
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Distributed Systems
            </span>
          </div>
        </article>

        <article className="relative rounded-2xl surface p-6">
          <div className="absolute right-6 top-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3 py-2 rounded-full"
            >
              <svg
                width="16"
                height="16"
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

          <h3 className="text-lg font-semibold text-zinc-900">
            Monte Carlo Simulation for Stock Portfolio
          </h3>
          <a href="#" className="mt-2 inline-block text-sm text-zinc-600">
            Developed a Monte Carlo simulation to estimate portfolio returns and
            risk using Cholesky decomposition for correlated asset returns.
          </a>
          <p className="mt-3 text-sm text-zinc-600">
            Simulated 100 portfolio projections over 100 days to assess risk and
            future performance. Implemented visualization and sensitivity
            analysis for portfolio allocation decisions.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Monte Carlo
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Python
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Cholesky
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900">
              Simulation
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

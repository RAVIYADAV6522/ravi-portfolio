export function ProjectsSection() {
  return (
    <section id="projects" className="grid-bg rounded-3xl p-8 sm:p-12">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white">
          Projects
        </div>
        <h2 className="mt-8 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
          Check out my latest work
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex iOS applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Floor Detection Project */}
        <article className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold text-zinc-900">
              Floor Detection using SVM
            </h3>
            <div className="flex gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
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
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
          </div>
          <p className="mt-6 flex-grow text-lg leading-relaxed text-zinc-600">
            Implemented floor vs. non-floor pixel/region classification on
            indoor images using the CMM dataset and Support Vector Machines.
            Compared three feature-engineering approaches: RGB-only pixels, RGB
            + spatial coordinates, and KMeans-based region-level features.
            Method 3 (KMeans regions) achieved ~92.5% test accuracy with the
            fastest training time.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Python",
              "SVM",
              "scikit-learn",
              "KMeans",
              "Computer Vision",
              "COCO Annotations",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Electricity Data Mining Project */}
        <article className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-zinc-900">
              Watt-IF – Electricity Data Mining and Grid Resilience Research
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
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
          <p className="mt-6 flex-grow text-lg leading-relaxed text-zinc-600">
            Conducted large-scale electricity consumption and generation mining
            using XGBoost, TFT, and deep learning models, achieving improved
            demand forecasting through advanced feature engineering. Modeled the
            U.S. power grid as a weighted directed graph and applied max-flow
            min-cut analysis to identify critical transmission bottlenecks and
            simulate cascading failure scenarios for Efficient Resource
            Allocation.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Python",
              "XGBoost",
              "Deep Learning",
              "TensorFlow",
              "Data Mining",
              "Graph Theory",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Distributed Log Analyzer Project */}
        <article className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold text-zinc-900">
              Distributed Log Analyzer using Parallel Computing
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
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
          <p className="mt-6 flex-grow text-lg leading-relaxed text-zinc-600">
            Implemented a distributed system using MPI (Message Passing
            Interface) in C++ to parallelize log file parsing and anomaly
            detection across multiple nodes, reducing analysis time by 70% for
            large-scale server logs. Integrated parallel reduction techniques
            for aggregating metrics like error rates and response times,
            enabling real-time monitoring and scalable debugging in cloud
            environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "C++",
              "MPI",
              "Parallel Computing",
              "Distributed Systems",
              "Log Analysis",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Monte Carlo Simulation Project */}
        <article className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold text-zinc-900">
              Monte Carlo Simulation for Stock Portfolio
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
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
          <p className="mt-6 flex-grow text-lg leading-relaxed text-zinc-600">
            Developed a Monte Carlo simulation to estimate stock portfolio
            values, modeling returns with Cholesky decomposition. Simulated 100
            portfolio projections over 100 days to assess risk and future
            performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Python",
              "Monte Carlo Simulation",
              "Financial Modeling",
              "NumPy",
              "Pandas",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

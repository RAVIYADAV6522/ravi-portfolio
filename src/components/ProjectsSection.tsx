import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Floor Detection using SVM",
      description:
        "Implemented floor vs. non-floor pixel/region classification on indoor images using the CMM dataset and Support Vector Machines. Compared three feature-engineering approaches: RGB-only pixels, RGB + spatial coordinates, and KMeans-based region-level features. Method 3 (KMeans regions) achieved ~92.5% test accuracy with the fastest training time.",
      image: "/projects/floor-detection.png",
      tags: [
        "Python",
        "SVM",
        "scikit-learn",
        "KMeans",
        "Computer Vision",
        "COCO Annotations",
      ],
      links: [
        { label: "GitHub", href: "#", type: "github" },
        { label: "Report", href: "#", type: "report" },
      ],
    },
    {
      title: "Watt-IF – Electricity Data Mining and Resilience",
      description:
        "Conducted large-scale electricity consumption and generation mining using XGBoost, TFT, and deep learning models, achieving improved demand forecasting through advanced feature engineering. Modeled the U.S. power grid as a weighted directed graph and applied max-flow min-cut analysis to identify critical transmission bottlenecks and simulate cascading failure scenarios.",
      image: "/projects/electricity-grid.png",
      tags: [
        "Python",
        "XGBoost",
        "Deep Learning",
        "TensorFlow",
        "Data Mining",
        "Graph Theory",
      ],
      links: [{ label: "GitHub", href: "#", type: "github" }],
    },
    {
      title: "Distributed Log Analyzer using Parallel Computing",
      description:
        "Implemented a distributed system using MPI (Message Passing Interface) in C++ to parallelize log file parsing and anomaly detection across multiple nodes, reducing analysis time by 70% for large-scale server logs. Integrated parallel reduction techniques for aggregating metrics like error rates and response times, enabling real-time monitoring and scalable debugging in cloud environments.",
      image: "/projects/distributed-logs.png",
      tags: [
        "C++",
        "MPI",
        "Parallel Computing",
        "Distributed Systems",
        "Log Analysis",
      ],
      links: [{ label: "GitHub", href: "#", type: "github" }],
    },
    {
      title: "Monte Carlo Simulation for Stock Portfolio",
      description:
        "Developed a Monte Carlo simulation to estimate stock portfolio values, modeling returns with Cholesky decomposition for correlated asset returns. Simulated 100 portfolio projections over 100 days to assess risk and future performance. Implemented visualization and sensitivity analysis for portfolio allocation decisions.",
      image: "/projects/stock-simulation.png",
      tags: [
        "Python",
        "Monte Carlo",
        "Financial Modeling",
        "NumPy",
        "Pandas",
      ],
      links: [{ label: "GitHub", href: "#", type: "github" }],
    },
  ];

  return (
    <section id="projects" className="relative grid-bg overflow-hidden rounded-[3rem] p-8 py-20 sm:p-12 sm:py-32">
      {/* Decorative background glow */}
      <div className="glow-bg left-1/4 top-1/4 h-96 w-96 rounded-full" />
      <div className="glow-bg bottom-1/4 right-1/4 h-96 w-96 rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="animate-shimmer overflow-hidden rounded-full bg-zinc-900/10 px-6 py-2 text-xs font-bold tracking-widest text-zinc-900 uppercase">
            Selected Work
          </div>
          <h2 className="mt-8 text-5xl font-black tracking-tighter text-zinc-900 sm:text-7xl lg:text-8xl">
            Check out my <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent">
              latest work
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
            I build AI-powered solutions and modern web applications. 
            Here&apos;s a curated selection of projects that push the boundaries of 
            technology and design.
          </p>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-zinc-100 sm:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Floating Tags Overlay (Mobile only or decorative) */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-zinc-900 shadow-xl transition-all hover:scale-110 active:scale-95"
                    >
                      {link.type === "github" ? (
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /><path d="M17 3v8H7V3" />
                        </svg>
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-8 sm:p-10">
                <h3 className="text-2xl font-black tracking-tight text-zinc-900 group-hover:text-zinc-700 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-6 flex-grow text-lg leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-1 text-xs font-bold text-zinc-500 transition-colors group-hover:border-zinc-200 group-hover:bg-zinc-100 group-hover:text-zinc-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

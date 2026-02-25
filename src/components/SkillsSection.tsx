export function SkillsSection() {
  const skills = [
    "Docker", // Moving Docker to the front so it leads the train visually
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "HTML/CSS",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="relative flex flex-col justify-center items-center overflow-hidden rounded-[2.5rem] surface p-6 sm:p-8 h-[250px] sm:h-[300px]">
      <div className="z-10 text-center space-y-2 pointer-events-none">
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
          Skills &amp; Tech Stack
        </h2>
        <p className="text-sm font-medium text-zinc-500">
          Technologies I work with
        </p>
      </div>
      
      {/* Perimeter Train Container */}
      <div className="absolute inset-y-12 inset-x-10 sm:inset-y-16 sm:inset-x-20 pointer-events-none">
        {skills.map((skill, idx) => {
          // Perfectly distribute 15 items across a 40-second animation loop
          // (40s / 15 items = 2.66s spacing). This guarantees they never overlap.
          // Docker (idx 0) gets the largest negative delay so it leads the front.
          const spacing = 40 / skills.length;
          const delay = `-` + ((skills.length - idx) * spacing).toFixed(2) + `s`;
          
          return (
            <span
              key={skill}
              className={`absolute flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-bold shadow-lg transition-transform hover:scale-110 pointer-events-auto animate-perimeter-run hover:[animation-play-state:paused] bg-zinc-900 text-white z-10 ${
                skill === "Docker" ? "z-20 scale-105 outline outline-2 outline-white/20" : ""
              }`}
              style={{
                animationDelay: delay,
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}

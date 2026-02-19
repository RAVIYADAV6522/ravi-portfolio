export function SkillsSection() {
  const skills = [
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
    "Docker",
  ];

  return (
    <section id="skills" className="rounded-3xl surface p-6 sm:p-8">
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
        Skills &amp; Tech Stack
      </h2>
      <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-zinc-900 px-3 py-1 font-medium text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

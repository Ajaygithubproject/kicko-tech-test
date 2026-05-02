import Image from "next/image";

const projects = [
  {
    title: "Fintech Analytics Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Healthcare Mobile Portal",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Cloud Operations Dashboard",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=85"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <div className="mb-12 text-center">
        <p className="gradient-text text-sm font-black uppercase tracking-[0.28em]">
          Projects
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Recent digital launches.
        </h2>
      </div>

      <div className="grid gap-7 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-panel group overflow-hidden rounded-3xl p-3"
          >
            <div className="relative h-80 overflow-hidden rounded-[1.4rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
              <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-black text-white">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive, SEO-friendly websites and SaaS platforms built with modern frameworks."
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences with thoughtful flows, reliable APIs, and elegant UI."
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture, deployments, automation, and resilient infrastructure."
  },
  {
    title: "UI/UX Design",
    description:
      "Premium product interfaces shaped around clarity, conversion, and everyday usability."
  }
];

export default function Services() {
  const movingServices = [...services, ...services];

  return (
    <section id="services" className="py-24">
      <div className="section-shell">
      <div className="mb-12 max-w-3xl">
        <p className="gradient-text text-sm font-black uppercase tracking-[0.28em]">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Everything your next digital product needs.
        </h2>
      </div>
      </div>

      <div className="service-marquee relative overflow-hidden py-4">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-sky-100/90 via-sky-50/70 to-transparent sm:w-32" />

        <div className="service-track flex w-max animate-service-marquee gap-6 px-6">
        {movingServices.map((service, index) => (
          <article
            key={`${service.title}-${index}`}
            className="glass-panel group w-[280px] shrink-0 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/75 hover:shadow-glow sm:w-[330px]"
          >
            <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

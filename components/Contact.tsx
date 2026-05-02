export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <p className="gradient-text text-sm font-black uppercase tracking-[0.28em]">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s build something sharp.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Tell us what you are planning. We will help shape the roadmap,
            architecture, and interface into a launch-ready digital product.
          </p>
        </div>

        <form className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Name
              </span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-slate-950 outline-none ring-indigo-500/0 transition duration-300 placeholder:text-slate-400 focus:ring-4 focus:ring-indigo-500/15"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Email
              </span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-slate-950 outline-none ring-indigo-500/0 transition duration-300 placeholder:text-slate-400 focus:ring-4 focus:ring-indigo-500/15"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Message
              </span>
              <textarea
                rows={5}
                placeholder="What would you like to create?"
                className="w-full resize-none rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-slate-950 outline-none ring-indigo-500/0 transition duration-300 placeholder:text-slate-400 focus:ring-4 focus:ring-indigo-500/15"
              />
            </label>
            <button type="submit" className="btn-3d mt-2 w-full">
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

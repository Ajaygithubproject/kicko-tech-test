const links = ["Home", "About", "Services", "Projects", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="text-xl font-black tracking-tight sm:text-2xl">
          <span className="gradient-text">KickoTech</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-slate-950"
            >
              {link}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-3d px-5 py-2.5 text-sm">
          Contact
        </a>
      </nav>
    </header>
  );
}

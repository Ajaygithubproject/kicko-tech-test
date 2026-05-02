import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="overflow-hidden text-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

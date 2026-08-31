import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Ticker } from "./sections/Ticker";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink font-body text-fog">
      {/* Layered ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-blueprint [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black_30%,transparent_100%)]" />
        <div className="drift-glow absolute -top-[22%] right-[-12%] h-[62vh] w-[62vw] rounded-full bg-[radial-gradient(closest-side,rgba(63,217,164,0.11),transparent)]" />
        <div className="absolute bottom-[-32%] left-[-16%] h-[70vh] w-[56vw] rounded-full bg-[radial-gradient(closest-side,rgba(63,217,164,0.05),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      </div>

      {/* Film-grain texture over everything */}
      <div className="bg-noise pointer-events-none fixed inset-0 z-[90] opacity-[0.04]" aria-hidden="true" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

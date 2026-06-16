import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./context/LanguageContext";
import Loader from "./components/Loader";
import CursorGlow from "./components/effects/CursorGlow";
import GsapEffects from "./components/GsapEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyInvest from "./components/WhyInvest";
import Workforce from "./components/Workforce";
import Expansion from "./components/Expansion";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function Site() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CursorGlow />
      <GsapEffects />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyInvest />
        <Workforce />
        <Expansion />
        <Testimonials />
        <Partners />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

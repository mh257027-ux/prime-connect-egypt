import { useState, useEffect } from "react";
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
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

function Site() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* تم تعليق الـ Loader مؤقتاً للتجربة */}
      {/* <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence> */}

      {/* اختبار للتأكد من أن Tailwind يعمل */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-amber-500 text-black px-6 py-3 rounded-lg font-bold text-xl">
        TEST - Tailwind Working!
      </div>

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
import { useState, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PNRChecker } from "./components/PNRChecker";
import { Alternatives } from "./components/Alternatives";
import { FloatingAI } from "./components/FloatingAI";
import { About } from "./components/About";
import { DisclaimerBar, Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import type { ModalData } from "./components/BookingModal";

export default function App() {
  const [heroPnr, setHeroPnr] = useState<string | null>(null);
  const [showAlts, setShowAlts] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const altsRef = useRef<HTMLDivElement>(null);
  const checkerRef = useRef<HTMLDivElement>(null);

  const handleHeroCheck = (pnr: string) => {
    setHeroPnr(pnr);
    setTimeout(() => {
      checkerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleViewAlternatives = () => {
    setShowAlts(true);
    setTimeout(() => {
      altsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Navbar />
      <Hero onCheck={handleHeroCheck} />
      <div ref={checkerRef}>
        <PNRChecker pnrFromHero={heroPnr} onViewAlternatives={handleViewAlternatives} />
      </div>
      <div ref={altsRef}>
        <Alternatives visible={showAlts} onBook={setModalData} />
      </div>
      <About />
      <DisclaimerBar />
      <Footer />
      <BookingModal data={modalData} onClose={() => setModalData(null)} />
      <FloatingAI />
    </div>
  );
}

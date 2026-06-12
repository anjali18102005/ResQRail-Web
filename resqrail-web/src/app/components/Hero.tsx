interface HeroProps {
  onCheck: (pnr: string) => void;
}

export function Hero({ onCheck }: HeroProps) {
  let pnrInput = "";

  const handleCheck = () => {
    onCheck(pnrInput || "1234567890");
  };

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* CSS Landscape layers */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #1a3a6e 40%, #2563aa 65%, #3b82c4 72%)" }} />

      {/* Stars */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(1px 1px at 20% 15%, white 0%, transparent 100%), radial-gradient(1px 1px at 50% 8%, white 0%, transparent 100%), radial-gradient(1px 1px at 70% 20%, white 0%, transparent 100%), radial-gradient(1px 1px at 85% 5%, white 0%, transparent 100%), radial-gradient(1px 1px at 35% 25%, white 0%, transparent 100%), radial-gradient(1px 1px at 60% 12%, white 0%, transparent 100%)",
        opacity: 0.6
      }} />

      {/* Far mountains */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: "50%",
        background: "#1a3a5c",
        clipPath: "polygon(0% 60%, 8% 30%, 18% 50%, 28% 20%, 40% 45%, 52% 15%, 64% 40%, 75% 10%, 85% 35%, 100% 25%, 100% 100%, 0% 100%)"
      }} />

      {/* Near mountains */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: "45%",
        background: "#0f2035",
        clipPath: "polygon(0% 70%, 12% 30%, 25% 55%, 38% 25%, 55% 50%, 70% 20%, 82% 45%, 92% 30%, 100% 40%, 100% 100%, 0% 100%)"
      }} />

      {/* Water band */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: "28%",
        background: "linear-gradient(180deg, #1a4a7a 0%, #0d3060 50%, #081a38 100%)"
      }} />

      {/* City skyline */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: "26%",
        background: "#0a1628",
        clipPath: "polygon(0% 100%, 0% 60%, 2% 60%, 2% 40%, 4% 40%, 4% 60%, 6% 60%, 6% 30%, 8% 30%, 8% 55%, 10% 55%, 10% 35%, 12% 35%, 12% 55%, 14% 55%, 14% 20%, 15% 20%, 15% 55%, 17% 55%, 17% 40%, 19% 40%, 19% 55%, 22% 55%, 22% 45%, 25% 45%, 25% 25%, 27% 25%, 27% 45%, 30% 45%, 30% 60%, 35% 60%, 35% 35%, 37% 35%, 37% 15%, 39% 15%, 39% 35%, 42% 35%, 42% 55%, 45% 55%, 45% 30%, 47% 30%, 47% 55%, 52% 55%, 52% 40%, 55% 40%, 55% 20%, 57% 20%, 57% 40%, 60% 40%, 60% 55%, 65% 55%, 65% 35%, 67% 35%, 67% 55%, 72% 55%, 72% 45%, 75% 45%, 75% 25%, 77% 25%, 77% 45%, 80% 45%, 80% 60%, 83% 60%, 83% 30%, 85% 30%, 85% 55%, 88% 55%, 88% 40%, 90% 40%, 90% 55%, 93% 55%, 93% 45%, 96% 45%, 96% 55%, 100% 55%, 100% 100%)"
      }} />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "12%", background: "#060e1c" }} />

      {/* Railway track */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center" style={{ height: "12%" }}>
        <div className="relative w-24 h-full">
          {/* Rails */}
          <div className="absolute left-2 top-0 bottom-0 w-1 rounded" style={{ background: "#888" }} />
          <div className="absolute right-2 top-0 bottom-0 w-1 rounded" style={{ background: "#888" }} />
          {/* Sleepers */}
          {[0, 16, 32, 48, 64, 80].map(top => (
            <div key={top} className="absolute left-0 right-0 h-2 rounded" style={{ top: `${top}%`, background: "#4a3728" }} />
          ))}
        </div>
      </div>

      {/* Cloud mist gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: "200px",
        background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.12) 0%, transparent 70%)"
      }} />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4" style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
          style={{ backgroundColor: "rgba(0,188,212,0.2)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif", border: "1px solid rgba(0,188,212,0.4)" }}>
          🚆 AI-Powered Railway Intelligence
        </div>

        <h1 className="text-white mb-4 max-w-4xl"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
            letterSpacing: "0.06em",
            lineHeight: 1.15,
            textTransform: "uppercase"
          }}>
          The Intelligent Detour{" "}
          <span style={{ color: "#00BCD4" }}>To Your Destination.</span>
        </h1>

        <p className="mb-8 max-w-2xl" style={{
          fontFamily: "'Open Sans', sans-serif",
          color: "rgba(255,255,255,0.75)",
          fontSize: "1.1rem",
          lineHeight: 1.7
        }}>
          ResQRail instantly finds the smartest alternative train, bus, and flight paths.
          Plan your journey with AI and book securely on official platforms.
        </p>

        {/* Search bar */}
        <div className="flex w-full max-w-xl rounded-full overflow-hidden shadow-2xl" style={{ border: "2px solid #00BCD4" }}>
          <input
            type="text"
            placeholder="Enter your 10-digit PNR number..."
            defaultValue=""
            onChange={e => { pnrInput = e.target.value; }}
            onKeyDown={e => e.key === "Enter" && handleCheck()}
            className="flex-1 px-6 py-4 bg-white text-gray-800 outline-none"
            style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", minWidth: 0 }}
          />
          <button
            onClick={handleCheck}
            className="px-6 py-4 font-bold text-white text-sm tracking-wider whitespace-nowrap transition-colors"
            style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
            Check Now
          </button>
        </div>

        <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Open Sans', sans-serif" }}>
          Try: 1234567890 · No login required
        </p>
      </div>

    </section>
  );
}

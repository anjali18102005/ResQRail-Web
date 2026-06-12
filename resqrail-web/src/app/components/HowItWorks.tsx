const steps = [
  {
    emoji: "🔍",
    num: "01",
    title: "Enter Your PNR",
    desc: "Paste your 10-digit PNR number from your IRCTC booking. Our system fetches live status from the railways instantly.",
  },
  {
    emoji: "📊",
    num: "02",
    title: "Get Risk Analysis",
    desc: "Our AI analyzes historical confirmation rates, quota availability, and seasonal trends to give you a precise confirmation probability.",
  },
  {
    emoji: "🗺️",
    num: "03",
    title: "Book Alternatives",
    desc: "Browse confirmed trains, direct buses, short-haul flights, and smart hybrid combos — all with one-click booking on official sites.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ backgroundColor: "rgba(0,188,212,0.1)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
            THE PROCESS
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            How ResQRail Works
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#8492A6", maxWidth: 500, margin: "0 auto" }}>
            From PNR entry to confirmed booking in under 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num}
              className="relative p-8 rounded-2xl transition-all duration-300 group"
              style={{
                border: "1.5px solid #E8ECF0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                backgroundColor: "#fff"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#00BCD4";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,188,212,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#E8ECF0";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}>

              {/* Step number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
                {step.num}
              </div>

              {/* Emoji circle */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: "linear-gradient(135deg, rgba(0,188,212,0.15) 0%, rgba(0,151,167,0.1) 100%)" }}>
                {step.emoji}
              </div>

              <h3 className="mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1A2B3C" }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#8492A6", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#pnr-checker"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wider transition-colors"
            style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
            Check Your PNR Now →
          </a>
        </div>
      </div>
    </section>
  );
}

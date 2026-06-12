const PILLARS = [
  {
    icon: "🎯",
    title: "Purpose-Built for Waitlisted Passengers",
    desc: "ResQRail was created for the millions of Indian railway passengers who book tickets hoping for confirmation — and need a reliable backup plan when it doesn't arrive.",
  },
  {
    icon: "🔄",
    title: "Multi-Modal Intelligence",
    desc: "We don't just search trains. ResQRail evaluates trains, inter-city buses, short-haul flights, and hybrid combinations to surface every viable option for your journey.",
  },
  {
    icon: "🔒",
    title: "Zero Payment Risk",
    desc: "ResQRail never processes your money. Every booking is completed on the operator's own platform — IRCTC, state transport, or airline website — where your data stays secure.",
  },
  {
    icon: "⚡",
    title: "Real-Time Risk Analysis",
    desc: "Our engine evaluates quota availability, historical confirmation patterns, and seasonal trends to give you a precise, data-backed probability score for your PNR.",
  },
];

const STATS = [
  { value: "5M+", label: "PNRs Analysed" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "2 min", label: "Average Resolution" },
  { value: "0", label: "Payments Processed" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 tracking-widest"
            style={{ backgroundColor: "rgba(0,188,212,0.1)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
            ABOUT RESQRAIL
          </div>
          <h2 className="mb-6" style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: "#1A2B3C",
            lineHeight: 1.2,
          }}>
            India's Intelligent <br />
            <span style={{ color: "#00BCD4" }}>Transit Aggregator</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{
            fontFamily: "'Open Sans', sans-serif",
            color: "#8492A6",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}>
            ResQRail is an intelligent web-based transit aggregator designed for railway passengers
            holding waitlisted tickets. The platform evaluates confirmation risk and generates
            alternative travel combinations — seamlessly redirecting users to official portals
            to securely complete their bookings.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden"
          style={{ backgroundColor: "#E8ECF0" }}>
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-4"
              style={{ backgroundColor: "#ffffff" }}>
              <div className="font-black mb-1" style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "2rem",
                color: "#00BCD4",
              }}>
                {stat.value}
              </div>
              <div className="text-xs font-semibold tracking-wider text-center" style={{ color: "#8492A6", fontFamily: "'Montserrat', sans-serif" }}>
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Mission + visual split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Mission text */}
          <div>
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>OUR MISSION</div>
            <h3 className="mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#1A2B3C", lineHeight: 1.3 }}>
              No passenger should be stranded by a waitlisted ticket.
            </h3>
            <p className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: "#4A5568", fontSize: "0.95rem", lineHeight: 1.9 }}>
              India's railways carry over 23 million passengers daily, yet a significant share travel on unconfirmed waitlisted tickets — often learning their fate only hours before departure. That gap between uncertainty and resolution is exactly where ResQRail operates.
            </p>
            <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#4A5568", fontSize: "0.95rem", lineHeight: 1.9 }}>
              Instead of processing payments natively, ResQRail acts as a <strong style={{ color: "#1A2B3C" }}>smart routing guide</strong> — curating the best combinations and handing off seamlessly to official operator portals, so your money is always in trusted hands.
            </p>

            {/* Key points */}
            <div className="mt-7 space-y-3">
              {[
                "Real-time PNR confirmation probability scoring",
                "Train, bus, flight & hybrid route generation",
                "Direct handoff to IRCTC, airlines & state transport",
                "No account required · No payments processed",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(0,188,212,0.15)" }}>
                    <span style={{ color: "#00BCD4", fontSize: "0.6rem" }}>✓</span>
                  </div>
                  <span className="text-sm" style={{ fontFamily: "'Open Sans', sans-serif", color: "#4A5568" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#1A2B3C" }}>
              <div className="text-xs font-bold tracking-widest mb-6" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>HOW WE WORK</div>
              {[
                { step: "01", title: "Ingest PNR", desc: "You enter your PNR. We fetch live status and quota data from railway systems." },
                { step: "02", title: "Score Risk", desc: "Our model computes a precise confirmation probability based on historic patterns." },
                { step: "03", title: "Generate Alternatives", desc: "We surface confirmed trains, buses, flights, and multi-leg hybrid combinations." },
                { step: "04", title: "Redirect Safely", desc: "You book directly on the operator's official portal. ResQRail never touches your payment." },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-4 items-start" style={{ marginBottom: i < 3 ? "1.5rem" : 0 }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                    style={{ backgroundColor: "#00BCD4", color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>{item.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ backgroundColor: "rgba(0,188,212,0.15)" }} />
          </div>
        </div>

        {/* Pillars grid */}
        <div>
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest mb-2" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>WHAT SETS US APART</div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1A2B3C", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Built Different
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title}
                className="bg-white rounded-2xl p-7 transition-all duration-300"
                style={{ border: "1.5px solid #E8ECF0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#00BCD4";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(0,188,212,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#E8ECF0";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(0,188,212,0.12) 0%, rgba(0,151,167,0.06) 100%)" }}>
                  {p.icon}
                </div>
                <div className="font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2B3C", fontSize: "1rem" }}>
                  {p.title}
                </div>
                <div className="text-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", color: "#8492A6" }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from "react";

const CHIPS = ["Check my PNR again", "Show cheapest bus", "Notify me if WL clears", "Compare all options"];

const MESSAGES = [
  { from: "bot", text: "🚨 Alert: Your PNR WL/12 has low confirmation probability (15%). Refund window closes in 8h 34m. Shall I show alternatives?" },
  { from: "user", text: "Yes, and how far is Pune from Mumbai?" },
  { from: "bot", text: "Mumbai to Pune is approximately 149 km by road (NH48) and 192 km by rail. By Deccan Queen it's 3h 25m. The fastest confirmed train departs at 06:10. Shall I reserve a seat?" },
];

export function AIAgent() {
  const [activeChips, setActiveChips] = useState<string[]>([]);

  const toggleChip = (chip: string) => {
    setActiveChips(prev => prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip]);
  };

  return (
    <section id="ai-agent" className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ backgroundColor: "rgba(0,188,212,0.1)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
            AI AGENT
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "#1A2B3C" }}>
            Your Intelligent Travel Co-Pilot
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Features */}
          <div className="space-y-6">
            {[
              { icon: "🔔", title: "Proactive PNR Monitoring", desc: "Our AI watches your PNR around the clock and alerts you the moment the confirmation probability drops below a safe threshold — giving you time to act." },
              { icon: "🧠", title: "Smart Route Intelligence", desc: "Trained on millions of Indian rail journeys, ResQRail's AI understands quota patterns, seasonal demand, and optimal multi-modal combinations for your route." },
              { icon: "⚡", title: "One-Tap Booking Actions", desc: "From a single chat bubble, you can approve alternative bookings, set price alerts, or request a refund — all without leaving the conversation." },
            ].map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(0,188,212,0.15) 0%, rgba(0,151,167,0.1) 100%)" }}>
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold mb-1" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2B3C" }}>{f.title}</div>
                  <div className="text-sm" style={{ fontFamily: "'Open Sans', sans-serif", color: "#8492A6", lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat widget */}
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1.5px solid #E8ECF0" }}>
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4" style={{ backgroundColor: "#1A2B3C" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: "#00BCD4" }}>🤖</div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>ResQRail AI</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#38A169" }} />
                  <span className="text-xs" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>Monitoring PNR 1234567890</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-5 space-y-3" style={{ backgroundColor: "#ffffff", minHeight: 260 }}>
              {MESSAGES.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 self-end"
                      style={{ backgroundColor: "#00BCD4" }}>🤖</div>
                  )}
                  <div className="px-4 py-2.5 rounded-2xl text-sm max-w-xs"
                    style={{
                      backgroundColor: msg.from === "user" ? "#00BCD4" : "#F5F7FA",
                      color: msg.from === "user" ? "#ffffff" : "#1A2B3C",
                      fontFamily: "'Open Sans', sans-serif",
                      lineHeight: 1.6,
                      borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px"
                    }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick chips */}
            <div className="px-5 pb-3 flex flex-wrap gap-2" style={{ backgroundColor: "#ffffff" }}>
              {CHIPS.map(chip => (
                <button key={chip} onClick={() => toggleChip(chip)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    backgroundColor: activeChips.includes(chip) ? "#00BCD4" : "#F5F7FA",
                    color: activeChips.includes(chip) ? "#ffffff" : "#4A5568",
                    border: activeChips.includes(chip) ? "1px solid #00BCD4" : "1px solid #E8ECF0"
                  }}>
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-5 py-4 flex gap-3" style={{ backgroundColor: "#F5F7FA", borderTop: "1px solid #E8ECF0" }}>
              <input placeholder="Ask ResQRail AI anything..."
                className="flex-1 px-4 py-2 rounded-full text-sm outline-none"
                style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fff" }} />
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm transition-colors"
                style={{ backgroundColor: "#00BCD4" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

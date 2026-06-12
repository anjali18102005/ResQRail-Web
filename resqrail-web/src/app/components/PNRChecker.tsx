import { useState, useEffect, useRef } from "react";

interface PNRCheckerProps {
  pnrFromHero: string | null;
  onViewAlternatives: () => void;
}

export function PNRChecker({ pnrFromHero, onViewAlternatives }: PNRCheckerProps) {
  const [pnr, setPnr] = useState("1234567890");
  const [from, setFrom] = useState("Mumbai CSMT");
  const [to, setTo] = useState("Pune Junction");
  const [date, setDate] = useState("2026-06-15");
  const [showResult, setShowResult] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [countdown, setCountdown] = useState(8 * 3600 + 34 * 60 + 9);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (pnrFromHero) {
      setPnr(pnrFromHero);
      runCheck(pnrFromHero);
    }
  }, [pnrFromHero]);

  const runCheck = (pnrVal?: string) => {
    if (pnrVal) setPnr(pnrVal);
    setShowResult(true);
    setBarWidth(0);
    setCountdown(8 * 3600 + 34 * 60 + 9);
    setTimeout(() => setBarWidth(15), 300);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown(c => {
        if (c <= 0) { clearInterval(timerRef.current!); return 0; }
        return c - 1;
      });
    }, 1000);
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return [h, m, s].map(v => String(v).padStart(2, "0")).join(":");
  };

  return (
    <section id="pnr-checker" className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ backgroundColor: "rgba(0,188,212,0.1)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
            PNR RISK CHECKER
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "#1A2B3C" }}>
            Know Your Confirmation Odds
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8" style={{ border: "1.5px solid #E8ECF0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <h3 className="mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#1A2B3C", fontSize: "1.1rem" }}>
              Analyse Your PNR
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>PNR NUMBER</label>
                <input value={pnr} onChange={e => setPnr(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  placeholder="10-digit PNR number"
                  style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem" }}
                  onFocus={e => (e.target.style.borderColor = "#00BCD4")}
                  onBlur={e => (e.target.style.borderColor = "#E8ECF0")} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>FROM</label>
                  <input value={from} onChange={e => setFrom(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none"
                    style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem" }}
                    onFocus={e => (e.target.style.borderColor = "#00BCD4")}
                    onBlur={e => (e.target.style.borderColor = "#E8ECF0")} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>TO</label>
                  <input value={to} onChange={e => setTo(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none"
                    style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem" }}
                    onFocus={e => (e.target.style.borderColor = "#00BCD4")}
                    onBlur={e => (e.target.style.borderColor = "#E8ECF0")} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>JOURNEY DATE</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg outline-none"
                  style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem" }}
                  onFocus={e => (e.target.style.borderColor = "#00BCD4")}
                  onBlur={e => (e.target.style.borderColor = "#E8ECF0")} />
              </div>
              <button onClick={() => runCheck()}
                className="w-full py-4 rounded-lg text-white font-bold tracking-wider transition-colors"
                style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
                🔍 ANALYSE PNR
              </button>
            </div>
          </div>

          {/* Result card */}
          {showResult ? (
            <div className="bg-white rounded-2xl p-8" style={{ border: "1.5px solid #E8ECF0", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ backgroundColor: "#FEE2E2", color: "#E53E3E", fontFamily: "'Montserrat', sans-serif" }}>
                    ⚠️ HIGH RISK
                  </div>
                  <div className="text-xs" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>Confirmation unlikely</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#8492A6", fontFamily: "'Montserrat', sans-serif" }}>PNR</div>
                  <div className="font-mono font-bold text-lg" style={{ color: "#1A2B3C" }}>{pnr}</div>
                </div>
              </div>

              {/* Probability bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-2" style={{ fontFamily: "'Open Sans', sans-serif", color: "#8492A6" }}>
                  <span>Confirmation Probability</span>
                  <span className="font-bold" style={{ color: "#E53E3E" }}>{barWidth}%</span>
                </div>
                <div className="w-full rounded-full h-3" style={{ backgroundColor: "#F5F7FA" }}>
                  <div className="h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${barWidth}%`, backgroundColor: "#E53E3E" }} />
                </div>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Current Status", val: "WL/12", color: "#E53E3E" },
                  { label: "Journey Time", val: "3h 25m", color: "#1A2B3C" },
                  { label: "Refund Policy", val: "90% back", color: "#38A169" },
                  { label: "RAC Chances", val: "~35%", color: "#D69E2E" },
                ].map(tile => (
                  <div key={tile.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: "#F5F7FA" }}>
                    <div className="text-xs mb-1" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>{tile.label}</div>
                    <div className="font-bold" style={{ color: tile.color, fontFamily: "'Montserrat', sans-serif" }}>{tile.val}</div>
                  </div>
                ))}
              </div>

              {/* Countdown */}
              <div className="rounded-lg p-4 mb-6 text-center" style={{ backgroundColor: "#FFF5F5", border: "1px solid #FED7D7" }}>
                <div className="text-xs font-semibold mb-1" style={{ color: "#E53E3E", fontFamily: "'Montserrat', sans-serif" }}>
                  ⏱ CANCELLATION REFUND WINDOW CLOSES IN
                </div>
                <div className="font-mono font-black text-3xl" style={{ color: "#E53E3E" }}>
                  {formatTime(countdown)}
                </div>
              </div>

              <button onClick={onViewAlternatives}
                className="w-full py-4 rounded-lg text-white font-bold tracking-wider transition-colors"
                style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
                View Alternatives →
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              style={{ border: "1.5px dashed #E8ECF0", minHeight: 300 }}>
              <div className="text-5xl mb-4">🎫</div>
              <p style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
                Enter your PNR number and click Analyse to see your confirmation risk.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

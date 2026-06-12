export function DisclaimerBar() {
  return (
    <div className="py-4 px-6 text-center text-sm" style={{ backgroundColor: "rgba(0,188,212,0.08)", borderTop: "1px solid rgba(0,188,212,0.2)", borderBottom: "1px solid rgba(0,188,212,0.2)" }}>
      <span style={{ color: "#0097A7", fontFamily: "'Open Sans', sans-serif" }}>
        ℹ️ <strong>ResQRail does not process payments</strong> — all booking buttons redirect to official operator websites. Your payment details are never shared with ResQRail.
      </span>
    </div>
  );
}

const LINKS = {
  Features: ["PNR Risk Checker", "Alternative Routes", "AI Agent", "Price Alerts", "Multi-modal Search"],
  "Book Via": ["IRCTC", "IndiGo", "Air India", "RedBus", "MakeMyTrip"],
  Company: ["About Us", "Blog", "Privacy Policy", "Terms of Service", "Contact"],
};

export function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "#1A2B3C" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center text-white font-black text-xl"
              style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>R</div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>ResQRail</div>
              <div className="text-xs tracking-widest" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>TRAVEL SIMPLIFIED</div>
            </div>
          </div>
          <p className="text-sm max-w-md" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.7 }}>
            Intelligent transit aggregation for Indian railway passengers. Smart routing, zero payments processed — always redirected to official portals.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div className="text-xs font-bold tracking-widest mb-4" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
                {title.toUpperCase()}
              </div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors"
                      style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#8492A6")}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-sm" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
            © 2026 ResQRail. All rights reserved.
          </div>
          <div className="text-sm" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
            🔒 No payments processed · Official partner redirects only
          </div>
        </div>

      </div>
    </footer>
  );
}

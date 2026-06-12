const PARTNERS = [
  { name: "IRCTC", url: "https://www.irctc.co.in", emoji: "🚆" },
  { name: "IndiGo", url: "https://www.goindigo.in", emoji: "✈️" },
  { name: "Air India", url: "https://www.airindia.com", emoji: "✈️" },
  { name: "RedBus", url: "https://www.redbus.in", emoji: "🚌" },
  { name: "AbhiBus", url: "https://www.abhibus.com", emoji: "🚌" },
  { name: "MakeMyTrip", url: "https://www.makemytrip.com", emoji: "🗺️" },
  { name: "Goibibo", url: "https://www.goibibo.com", emoji: "🏨" },
];

export function Partners() {
  return (
    <section id="partners" className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-widest"
          style={{ backgroundColor: "rgba(0,188,212,0.1)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
          BOOKING PARTNERS
        </div>
        <h2 className="mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "#1A2B3C" }}>
          Book on Official Platforms
        </h2>
        <p className="mb-10" style={{ fontFamily: "'Open Sans', sans-serif", color: "#8492A6" }}>
          ResQRail is a route planner. You will complete your transaction safely on the operator's portal.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all no-underline"
              style={{
                border: "1.5px solid #E8ECF0",
                color: "#4A5568",
                fontFamily: "'Montserrat', sans-serif",
                textDecoration: "none",
                backgroundColor: "#fff"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#00BCD4";
                e.currentTarget.style.color = "#00BCD4";
                e.currentTarget.style.backgroundColor = "rgba(0,188,212,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#E8ECF0";
                e.currentTarget.style.color = "#4A5568";
                e.currentTarget.style.backgroundColor = "#fff";
              }}>
              <span>{p.emoji}</span>
              <span>{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

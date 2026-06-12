import { useState, useMemo } from "react";
import type { ModalData } from "./BookingModal";

interface AlternativesProps {
  visible: boolean;
  onBook: (data: ModalData) => void;
}

interface Card {
  id: number;
  type: string;
  category: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: string;
  route: string;
  priceMin: number;
  priceMax: number;
  priceClasses: { label: string; price: number }[];
  time: number;
  duration: string;
  dep: string;
  arr: string;
  seats: number;
  transfer?: string;
  legs: { icon: string; label: string; detail: string }[];
  booking: { partner: string; emoji: string; url: string; color: string }[];
  mapUrl: string;
}

const ALL_CARDS: Card[] = [
  {
    id: 1,
    type: "TRAIN",
    category: "cheapest",
    tag: "CONFIRMED TRAIN",
    tagColor: "#38A169",
    tagBg: "#F0FFF4",
    icon: "🚆",
    route: "Mumbai CSMT → Pune Junction",
    priceMin: 485,
    priceMax: 1240,
    priceClasses: [
      { label: "Sleeper (SL)", price: 485 },
      { label: "3rd AC (3A)", price: 1240 },
    ],
    time: 205,
    duration: "3h 25m",
    dep: "06:10",
    arr: "09:35",
    seats: 12,
    legs: [{ icon: "🚆", label: "Mumbai CSMT → Pune", detail: "Deccan Queen · 12028" }],
    booking: [
      { partner: "IRCTC", emoji: "🚆", url: "https://www.irctc.co.in", color: "#1A2B3C" },
    ],
    mapUrl: "https://www.google.com/maps/dir/Mumbai+CSMT/Pune",
  },
  {
    id: 2,
    type: "HYBRID",
    category: "comfortable",
    tag: "TRAIN + BUS COMBO",
    tagColor: "#00BCD4",
    tagBg: "rgba(0,188,212,0.08)",
    icon: "🚆🚌",
    route: "Mumbai → Pune → Nashik",
    priceMin: 775,
    priceMax: 1084,
    priceClasses: [
      { label: "Train Sleeper + Bus Seater", price: 775 },
      { label: "Train 3A + Bus Sleeper", price: 1084 },
    ],
    time: 370,
    duration: "6h 10m",
    dep: "06:10",
    arr: "12:20",
    seats: 8,
    transfer: "Pune Station · 0.8km walk · 45min buffer",
    legs: [
      { icon: "🚆", label: "Mumbai → Pune", detail: "₹485 · 3h 25m" },
      { icon: "🚌", label: "Pune → Nashik (MSRTC)", detail: "₹290 · 2h 45m" },
    ],
    booking: [
      { partner: "IRCTC", emoji: "🚆", url: "https://www.irctc.co.in", color: "#1A2B3C" },
      { partner: "RedBus", emoji: "🚌", url: "https://www.redbus.in", color: "#D84315" },
    ],
    mapUrl: "https://www.google.com/maps/dir/Mumbai/Pune/Nashik",
  },
  {
    id: 3,
    type: "FLIGHT",
    category: "fastest",
    tag: "SHORT-HAUL FLIGHT",
    tagColor: "#1A2B3C",
    tagBg: "#E8ECF0",
    icon: "✈️",
    route: "Mumbai BOM → Chennai MAA",
    priceMin: 3499,
    priceMax: 5200,
    priceClasses: [
      { label: "Economy", price: 3499 },
      { label: "Business", price: 5200 },
    ],
    time: 130,
    duration: "2h 10m",
    dep: "14:30",
    arr: "16:40",
    seats: 4,
    legs: [{ icon: "✈️", label: "IndiGo 6E-204", detail: "BOM → MAA" }],
    booking: [
      { partner: "IndiGo", emoji: "✈️", url: "https://www.goindigo.in", color: "#1A237E" },
      { partner: "MakeMyTrip", emoji: "🗺️", url: "https://www.makemytrip.com", color: "#E53935" },
    ],
    mapUrl: "https://www.google.com/maps/dir/Mumbai+Airport/Chennai+Airport",
  },
  {
    id: 4,
    type: "BUS",
    category: "cheapest",
    tag: "BUS DIRECT",
    tagColor: "#D69E2E",
    tagBg: "#FFFFF0",
    icon: "🚌",
    route: "Mumbai → Pune",
    priceMin: 350,
    priceMax: 599,
    priceClasses: [
      { label: "Seater", price: 350 },
      { label: "Sleeper", price: 599 },
    ],
    time: 270,
    duration: "4h 30m",
    dep: "08:00",
    arr: "12:30",
    seats: 18,
    legs: [{ icon: "🚌", label: "VRL Travels · Mumbai → Pune", detail: "Seater / Sleeper" }],
    booking: [
      { partner: "RedBus", emoji: "🚌", url: "https://www.redbus.in", color: "#D84315" },
      { partner: "AbhiBus", emoji: "🚌", url: "https://www.abhibus.com", color: "#1565C0" },
    ],
    mapUrl: "https://www.google.com/maps/dir/Mumbai/Pune",
  },
  {
    id: 5,
    type: "HYBRID",
    category: "comfortable",
    tag: "TRAIN + FLIGHT",
    tagColor: "#7B2FBE",
    tagBg: "rgba(123,47,190,0.08)",
    icon: "🚆✈️",
    route: "Mumbai → Lonavala → Pune → Delhi",
    priceMin: 2885,
    priceMax: 3800,
    priceClasses: [
      { label: "Economy combo", price: 2885 },
      { label: "Business combo", price: 3800 },
    ],
    time: 255,
    duration: "4h 15m",
    dep: "09:00",
    arr: "13:15",
    seats: 6,
    transfer: "Lonavala → Pune Airport · Cab ~45min · 50min buffer",
    legs: [
      { icon: "🚆", label: "Mumbai → Lonavala (local)", detail: "₹85 · 1h 40m" },
      { icon: "✈️", label: "Pune → Delhi (Air India AI-864)", detail: "₹2,800 · 1h 55m" },
    ],
    booking: [
      { partner: "IRCTC", emoji: "🚆", url: "https://www.irctc.co.in", color: "#1A2B3C" },
      { partner: "Air India", emoji: "✈️", url: "https://www.airindia.com", color: "#C62828" },
      { partner: "MakeMyTrip", emoji: "🗺️", url: "https://www.makemytrip.com", color: "#E53935" },
    ],
    mapUrl: "https://www.google.com/maps/dir/Mumbai/Lonavala/Pune+Airport/Delhi",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Options", icon: "🔍" },
  { key: "cheapest", label: "Cheapest", icon: "💰" },
  { key: "fastest", label: "Fastest", icon: "⚡" },
  { key: "comfortable", label: "Comfortable", icon: "🛋️" },
] as const;

type Category = typeof CATEGORIES[number]["key"];

const MODES = ["ALL", "TRAIN", "BUS", "FLIGHT", "HYBRID"] as const;
type Mode = typeof MODES[number];

function SeatPill({ seats }: { seats: number }) {
  const color = seats <= 3 ? "#E53E3E" : seats <= 10 ? "#D69E2E" : "#38A169";
  const bg = seats <= 3 ? "#FFF5F5" : seats <= 10 ? "#FFFFF0" : "#F0FFF4";
  return (
    <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: bg, color, fontFamily: "'Montserrat', sans-serif" }}>
      {seats} seats
    </span>
  );
}

function PriceRange({ classes }: { classes: { label: string; price: number }[] }) {
  return (
    <div className="mt-3 rounded-xl overflow-hidden" style={{ border: "1px solid #E8ECF0" }}>
      <div className="px-3 py-2 text-xs font-bold tracking-wider" style={{ backgroundColor: "#F5F7FA", color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>
        FARE CLASSES
      </div>
      {classes.map((cls, i) => (
        <div key={i} className="flex items-center justify-between px-3 py-2.5"
          style={{ borderTop: i === 0 ? "none" : "1px solid #E8ECF0" }}>
          <span className="text-sm" style={{ color: "#4A5568", fontFamily: "'Open Sans', sans-serif" }}>{cls.label}</span>
          <span className="font-bold" style={{ color: "#1A2B3C", fontFamily: "'Montserrat', sans-serif" }}>₹{cls.price.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

export function Alternatives({ visible, onBook }: AlternativesProps) {
  const [maxPrice, setMaxPrice] = useState(5000);
  const [category, setCategory] = useState<Category>("all");
  const [mode, setMode] = useState<Mode>("ALL");
  const [sort, setSort] = useState("cheapest");

  const filtered = useMemo(() => {
    let cards = ALL_CARDS.filter(c => c.priceMin <= maxPrice);
    if (category !== "all") cards = cards.filter(c => c.category === category);
    if (mode !== "ALL") cards = cards.filter(c => c.type === mode);
    if (sort === "cheapest") cards = [...cards].sort((a, b) => a.priceMin - b.priceMin);
    else if (sort === "fastest") cards = [...cards].sort((a, b) => a.time - b.time);
    else cards = [...cards].sort((a, b) => a.priceMin / a.time - b.priceMin / b.time);
    return cards;
  }, [maxPrice, category, mode, sort]);

  if (!visible) return null;

  return (
    <section id="alternatives" className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ backgroundColor: "rgba(0,188,212,0.1)", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
            ALTERNATIVE ROUTES
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "#1A2B3C" }}>
            Your Best Options
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {CATEGORIES.map(cat => (
            <button key={cat.key} onClick={() => setCategory(cat.key)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundColor: category === cat.key ? "#1A2B3C" : "#F5F7FA",
                color: category === cat.key ? "#ffffff" : "#4A5568",
                border: category === cat.key ? "2px solid #1A2B3C" : "2px solid #E8ECF0",
                boxShadow: category === cat.key ? "0 4px 16px rgba(26,43,60,0.2)" : "none"
              }}>
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              {category === cat.key && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#00BCD4" }} />}
            </button>
          ))}
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-2xl p-5 mb-8 flex flex-wrap gap-4 items-center"
          style={{ border: "1.5px solid #E8ECF0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          {/* Price slider */}
          <div className="flex-1 min-w-48">
            <div className="flex justify-between text-xs mb-1" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
              <span>Max Price</span>
              <span className="font-bold" style={{ color: "#00BCD4" }}>₹{maxPrice.toLocaleString()}</span>
            </div>
            <input type="range" min={0} max={5500} step={50} value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#00BCD4" }} />
            <div className="flex justify-between text-xs mt-1" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
              <span>₹0</span><span>₹5,500</span>
            </div>
          </div>

          {/* Mode pills */}
          <div className="flex gap-2 flex-wrap">
            {MODES.map(m => (
              <button key={m} onClick={() => setMode(m)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: mode === m ? "#00BCD4" : "#F5F7FA",
                  color: mode === m ? "#ffffff" : "#4A5568",
                  border: mode === m ? "1px solid #00BCD4" : "1px solid #E8ECF0"
                }}>
                {m}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm outline-none"
            style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", color: "#4A5568" }}>
            <option value="cheapest">Cheapest First</option>
            <option value="fastest">Fastest First</option>
            <option value="value">Best Value</option>
          </select>

          <div className="text-sm font-semibold" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
            {filtered.length} of {ALL_CARDS.length} options
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {filtered.map(card => (
            <div key={card.id}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: "1.5px solid #E8ECF0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#00BCD4";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,188,212,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#E8ECF0";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
              }}>
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  {/* Left: tag + route + category badge */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: card.tagBg, color: card.tagColor, fontFamily: "'Montserrat', sans-serif" }}>
                        {card.icon} {card.tag}
                      </span>
                      {card.category === "fastest" && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#EFF6FF", color: "#1D4ED8", fontFamily: "'Montserrat', sans-serif" }}>⚡ Fastest</span>
                      )}
                      {card.category === "cheapest" && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#F0FFF4", color: "#38A169", fontFamily: "'Montserrat', sans-serif" }}>💰 Best Price</span>
                      )}
                      {card.category === "comfortable" && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#FAF5FF", color: "#7B2FBE", fontFamily: "'Montserrat', sans-serif" }}>🛋️ Comfortable</span>
                      )}
                    </div>
                    <div className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2B3C" }}>
                      {card.route}
                    </div>
                  </div>

                  {/* Right: price range + seats */}
                  <div className="text-right">
                    <div className="text-xs font-semibold mb-1" style={{ color: "#8492A6", fontFamily: "'Montserrat', sans-serif" }}>STARTING FROM</div>
                    <div className="font-black text-2xl" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>
                      ₹{card.priceMin.toLocaleString()}
                    </div>
                    {card.priceMax !== card.priceMin && (
                      <div className="text-xs" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
                        up to ₹{card.priceMax.toLocaleString()}
                      </div>
                    )}
                    <div className="flex items-center gap-2 justify-end mt-1">
                      <SeatPill seats={card.seats} />
                      <span className="text-sm font-semibold" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>
                        {card.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Departure → Arrival */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono font-bold text-lg" style={{ color: "#1A2B3C" }}>{card.dep}</span>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="flex-1 h-px" style={{ backgroundColor: "#E8ECF0" }} />
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#F5F7FA", color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>{card.duration}</span>
                    <div className="flex-1 h-px" style={{ backgroundColor: "#E8ECF0" }} />
                  </div>
                  <span className="font-mono font-bold text-lg" style={{ color: "#1A2B3C" }}>{card.arr}</span>
                </div>

                {/* Legs */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {card.legs.map((leg, i) => (
                    <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#F5F7FA", color: "#4A5568", fontFamily: "'Open Sans', sans-serif" }}>
                      {leg.icon} {leg.label} · {leg.detail}
                    </span>
                  ))}
                </div>

                {/* Transfer info */}
                {card.transfer && (
                  <div className="text-xs px-3 py-2 rounded-lg mb-3"
                    style={{ backgroundColor: "rgba(0,188,212,0.06)", color: "#0097A7", fontFamily: "'Open Sans', sans-serif", border: "1px solid rgba(0,188,212,0.2)" }}>
                    🔄 Transfer: {card.transfer}
                  </div>
                )}

                {/* Price classes breakdown */}
                <PriceRange classes={card.priceClasses} />
              </div>

              {/* Booking strip */}
              <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-3"
                style={{ backgroundColor: "#F5F7FA", borderTop: "1px solid #E8ECF0" }}>
                <div className="text-xs" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
                  🔒 Redirects to official site · No payment on ResQRail
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {card.booking.map(b => (
                    <button key={b.partner}
                      onClick={() => onBook({ partner: b.partner, emoji: b.emoji, price: `₹${card.priceMin.toLocaleString()}–₹${card.priceMax.toLocaleString()}`, route: card.route, url: b.url, type: card.type === "FLIGHT" ? "flight" : card.type === "BUS" ? "bus" : "train" })}
                      className="px-4 py-2 rounded-lg text-white text-xs font-bold tracking-wider transition-opacity hover:opacity-90"
                      style={{ backgroundColor: b.color, fontFamily: "'Montserrat', sans-serif" }}>
                      {b.emoji} Book on {b.partner}
                    </button>
                  ))}
                  <a href={card.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-colors"
                    style={{ border: "1.5px solid #00BCD4", color: "#00BCD4", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#00BCD4"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#00BCD4"; }}>
                    🗺️ View Route on Map
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
              No options match your filters. Try increasing the price range or selecting a different category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

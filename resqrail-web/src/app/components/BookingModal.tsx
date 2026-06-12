import { useState } from "react";

export interface ModalData {
  partner: string;
  emoji: string;
  price: string;
  route: string;
  url: string;
  type?: "flight" | "bus" | "train";
}

interface BookingModalProps {
  data: ModalData | null;
  onClose: () => void;
}

export function BookingModal({ data, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [berth, setBerth] = useState("Lower");

  if (!data) return null;

  const handleConfirm = () => {
    window.open(data.url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "#E8ECF0" }}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{data.emoji}</span>
            <div>
              <div className="font-bold" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2B3C" }}>
                Book via {data.partner}
              </div>
              <div className="text-xs" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>Official booking partner</div>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
            style={{ color: "#8492A6" }}>✕</button>
        </div>

        {/* Summary */}
        <div className="px-6 py-4 rounded-lg mx-6 mt-4" style={{ backgroundColor: "#F5F7FA" }}>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              { label: "Route", val: data.route },
              { label: "Price", val: data.price },
            ].map(r => (
              <div key={r.label}>
                <div className="text-xs" style={{ color: "#8492A6", fontFamily: "'Montserrat', sans-serif" }}>{r.label}</div>
                <div className="font-semibold" style={{ color: "#1A2B3C", fontFamily: "'Open Sans', sans-serif" }}>{r.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>PASSENGER NAME</label>
            <input value={name} onChange={e => setName(e.target.value)}
              placeholder="Full name as on ID"
              className="w-full px-4 py-2.5 rounded-lg outline-none"
              style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif" }}
              onFocus={e => (e.target.style.borderColor = "#00BCD4")}
              onBlur={e => (e.target.style.borderColor = "#E8ECF0")} />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>AGE</label>
            <input value={age} onChange={e => setAge(e.target.value)}
              type="number" placeholder="Your age"
              className="w-full px-4 py-2.5 rounded-lg outline-none"
              style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif" }}
              onFocus={e => (e.target.style.borderColor = "#00BCD4")}
              onBlur={e => (e.target.style.borderColor = "#E8ECF0")} />
          </div>
          <div>
            {data.type === "flight" ? (
              <>
                <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>SEAT PREFERENCE</label>
                <select value={berth} onChange={e => setBerth(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg outline-none"
                  style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif" }}>
                  {["Window", "Aisle", "Middle", "No Preference"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </>
            ) : data.type === "bus" ? (
              <>
                <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>SEAT PREFERENCE</label>
                <select value={berth} onChange={e => setBerth(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg outline-none"
                  style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif" }}>
                  {["Window", "Aisle", "No Preference"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <label className="block text-xs font-semibold mb-1 tracking-wider" style={{ color: "#4A5568", fontFamily: "'Montserrat', sans-serif" }}>BERTH PREFERENCE</label>
                <select value={berth} onChange={e => setBerth(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg outline-none"
                  style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif" }}>
                  {["Lower", "Middle", "Upper", "Side Lower", "Side Upper"].map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </>
            )}
          </div>

          <button onClick={handleConfirm}
            className="w-full py-3.5 rounded-lg text-white font-bold tracking-wider transition-colors"
            style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
            Confirm & Continue to {data.partner} →
          </button>

          <p className="text-center text-xs" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>
            Redirected to {data.partner}'s official website. ResQRail does not process payments.
          </p>
        </div>
      </div>
    </div>
  );
}

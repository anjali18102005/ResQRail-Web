import { useState, useRef, useEffect } from "react";
import botAvatar from "../../imports/image.png";

interface Message {
  from: "bot" | "user";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  { from: "bot", text: "👋 Hi! I'm your ResQRail AI. I'm monitoring your PNR and ready to help you find the best alternatives." },
];

const QUICK_REPLIES = [
  "Check my PNR status",
  "Show cheapest option",
  "Show fastest route",
  "How do I get a refund?",
];

const BOT_RESPONSES: Record<string, string> = {
  "Check my PNR status": "Your PNR WL/12 currently has a 15% confirmation probability. The refund window is open. I recommend exploring alternatives now.",
  "Show cheapest option": "The cheapest confirmed option is the **Mumbai CSMT → Pune Junction** train at ₹485 (Sleeper class). Scroll up to see full details and book via IRCTC.",
  "Show fastest route": "The fastest option is the **IndiGo 6E-204** flight at just 2h 10m (₹3,499). Departure 14:30, arrives 16:40.",
  "How do I get a refund?": "You can cancel your waitlisted ticket on IRCTC for a ~90% refund if done before chart preparation. I'd recommend deciding within the next few hours.",
};

export function FloatingAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [open, messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { from: "user", text };
    const botText = BOT_RESPONSES[text] || "Great question! ResQRail is scanning alternatives for your route. Check the alternatives section above for real-time options.";
    const botMsg: Message = { from: "bot", text: botText };
    setMessages(prev => [...prev, userMsg]);
    setTimeout(() => setMessages(prev => [...prev, botMsg]), 700);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 overflow-hidden"
        style={{ backgroundColor: "#00BCD4" }}
        aria-label="Open AI Assistant">
        {open ? (
          <span className="text-white text-xl font-bold">✕</span>
        ) : (
          <img src={botAvatar} alt="AI Assistant" className="w-full h-full object-cover" />
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: "#E53E3E" }}>
            {unread}
          </span>
        )}
      </button>

      {/* Chat panel */}
      <div
        className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right"
        style={{
          width: 340,
          maxHeight: open ? 520 : 0,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          border: "1.5px solid #E8ECF0",
          transform: open ? "scale(1)" : "scale(0.9)",
        }}>

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ backgroundColor: "#1A2B3C" }}>
          <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden">
            <img src={botAvatar} alt="AI" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>ResQRail AI</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#38A169" }} />
              <span className="text-xs truncate" style={{ color: "#8492A6", fontFamily: "'Open Sans', sans-serif" }}>Monitoring your PNR</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: "#ffffff", minHeight: 0 }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              {msg.from === "bot" && (
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0 self-end">
                  <img src={botAvatar} alt="AI" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="px-3 py-2 text-sm max-w-[220px]"
                style={{
                  backgroundColor: msg.from === "user" ? "#00BCD4" : "#F5F7FA",
                  color: msg.from === "user" ? "#ffffff" : "#1A2B3C",
                  fontFamily: "'Open Sans', sans-serif",
                  lineHeight: 1.55,
                  borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "4px 14px 14px 14px",
                  fontSize: "0.82rem"
                }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        <div className="px-3 pb-2 flex flex-wrap gap-1.5 flex-shrink-0" style={{ backgroundColor: "#ffffff" }}>
          {QUICK_REPLIES.map(q => (
            <button key={q} onClick={() => sendMessage(q)}
              className="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:opacity-80"
              style={{
                backgroundColor: "#F5F7FA",
                color: "#4A5568",
                border: "1px solid #E8ECF0",
                fontFamily: "'Open Sans', sans-serif"
              }}>
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-3 py-3 flex gap-2 flex-shrink-0" style={{ backgroundColor: "#F5F7FA", borderTop: "1px solid #E8ECF0" }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask anything..."
            className="flex-1 px-3 py-2 rounded-full text-sm outline-none"
            style={{ border: "1.5px solid #E8ECF0", fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fff", fontSize: "0.82rem" }} />
          <button
            onClick={() => sendMessage(input)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-colors"
            style={{ backgroundColor: "#00BCD4" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0097A7")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00BCD4")}>
            →
          </button>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#1A2B3C", fontFamily: "'Montserrat', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 rounded flex items-center justify-center text-white font-black text-lg"
            style={{ backgroundColor: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>R</div>
          <div>
            <div className="text-white font-bold text-base leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>ResQRail</div>
            <div className="text-xs font-semibold tracking-widest" style={{ color: "#00BCD4", fontFamily: "'Montserrat', sans-serif" }}>TRAVEL SIMPLIFIED</div>
          </div>
        </a>

        {/* Nav links - desktop */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "CHECK PNR", href: "#pnr-checker" },
            { label: "ABOUT", href: "#about" },
          ].map((link) => (
            <a key={link.label} href={link.href}
              className="text-xs font-semibold tracking-widest transition-colors hover:text-white"
              style={{ color: "#8492A6", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </div>

        <div />

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4" style={{ backgroundColor: "#1A2B3C" }}>
          {[
            { label: "CHECK PNR", href: "#pnr-checker" },
            { label: "ABOUT", href: "#about" },
          ].map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-xs font-semibold tracking-widest"
              style={{ color: "#8492A6", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

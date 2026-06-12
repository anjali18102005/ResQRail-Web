# ResQRail — Smart Multimodal Travel Intelligence System

A complete, ready-to-run React + Vite + Tailwind CSS web application that
predicts PNR confirmation outcomes and helps travellers discover the best
multimodal alternatives (train, bus, flight) for their journey.

## ✨ Highlights

- **Home** — animated hero, live stats, feature highlights
- **Features** — overview of the prediction engine and planning tools
- **Reviews** — testimonial carousel
- **FAQ** — accordion-style answers
- **PNR** — the core dashboard:
  - Deterministic, seed-based PNR prediction (every PNR → unique, repeatable result)
  - Travel Confidence cards (confirmation probability, confidence score,
    on-time reliability, seat availability, transfer simplicity)
  - Structured Insight Report (status, outlook, historical trend, demand reasoning)
  - **User-Driven Planning** — sort/filter every alternative yourself
  - **AI-Driven Planning** — automatically highlights the recommended best option
  - Dynamic Google Maps route preview based on the selected option
- **Booking** — review summary, enter passenger details, get a confirmed
  booking ID and success screen (no payment flow)

## 🛠️ Tech Stack

- React 18 + Vite 5
- React Router 6
- Tailwind CSS 3
- Zero external API keys required

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
travel-intel/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── ConfidenceCard.jsx
    │   ├── Footer.jsx
    │   ├── Icons.jsx
    │   ├── MapEmbed.jsx
    │   ├── Navbar.jsx
    │   ├── RouteCard.jsx
    │   └── StatCounter.jsx
    ├── context/
    │   └── BookingContext.jsx
    ├── pages/
    │   ├── Booking.jsx
    │   ├── FAQ.jsx
    │   ├── Features.jsx
    │   ├── Home.jsx
    │   ├── NotFound.jsx
    │   ├── PNR.jsx
    │   └── Reviews.jsx
    └── utils/
        ├── generateData.js
        └── seedRandom.js
```

## 🔢 How PNR Predictions Work

Every PNR string is hashed into a numeric seed (`seedRandom.js`), which
drives a deterministic pseudo-random generator (`generateData.js`). This
means:

- The **same PNR always produces the same result** (repeatable).
- **Different PNRs produce different results** (unique).
- No values are hardcoded — confidence scores, ticket status, insight
  reasoning, and every alternative route are generated dynamically from the
  seed.

## 🗺️ Map Preview

The route preview uses Google's public directions embed
(`https://maps.google.com/maps?saddr=...&daddr=...&output=embed`), which
requires no API key and updates automatically whenever a different route is
selected.

## 📦 Notes

- No payment gateway or transaction system is included — the booking flow
  ends in a "Booking Confirmed" success screen with a generated Booking ID.
- All data is mock/dynamic and intended for demonstration purposes.

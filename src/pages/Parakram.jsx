import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Parakram.css";

// ─── Data ────────────────────────────────────────────────────────────────────

const CEREMONY_DATE = new Date("2026-06-28T00:00:00");

const AWARD_CATEGORIES = [
  {
    id: "leadership",
    icon: "◈",
    label: "Leadership Recognition",
    awards: [
      "Outstanding Club President",
      "Outstanding Club Secretary",
      "Outstanding District Office",
    ],
  },
  {
    id: "avenue",
    icon: "◇",
    label: "Avenue Recognition",
    awards: [
      "Club Service",
      "International Service",
      "Community Service",
      "Professional Development",
      "Literacy and Education",
      "Partners in Service",
      "Public Image / Public Relations",
      "Social Media",
      "Fund Raising",
    ],
  },
  {
    id: "grand",
    icon: "✦",
    label: "Grand Recognition",
    awards: [
      "Outstanding Club Award",
      "People's Choice Award",
      "Special Achievements / Citations",
    ],
  },
];

const CEREMONY_DETAILS = [
  { label: "Date", value: "28th June 2026" },
  { label: "Venue", value: "SDMP Auditorium, YCCE" },
  { label: "District", value: "Rotaract District 3030" },
  { label: "Led by", value: "DRR Rtr. Raghav Pagar & Team Elevate Together" },
  { label: "Hosted by", value: "Rotaract Club of YCCE" },
  { label: "Time", value: "To be announced" },
  { label: "Winners", value: "To be revealed live on stage" },
];

const HOST_CARDS = [
  { label: "District", value: "3030" },
  { label: "DRR", value: "Rtr. Raghav Pagar" },
  { label: "Team", value: "Elevate Together" },
  { label: "Host Club", value: "RC YCCE" },
  { label: "Date", value: "28th June 2026" },
];

const SEALED_CARDS = [
  { icon: "◈", label: "Leadership Awards" },
  { icon: "◇", label: "Avenue Awards" },
  { icon: "✦", label: "Outstanding Club Award" },
  { icon: "❋", label: "Special Achievements" },
];

const FAQS = [
  {
    q: "What is the People's Choice Award?",
    a: "It is the only award decided through public voting. All other awards are evaluated by the DRR and District Team.",
  },
  {
    q: "Who evaluates the other awards?",
    a: "The remaining awards are evaluated by the DRR and District Team. Their decisions are kept sealed until the live ceremony.",
  },
  {
    q: "When will winners be announced?",
    a: "Winners will be revealed live on stage during Parakram 2026 on 28th June 2026.",
  },
  {
    q: "Where will the ceremony take place?",
    a: "Parakram 2026 will be held at SDMP Auditorium, YCCE.",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#parakram-hero" },
  { label: "About", href: "#parakram-about" },
  { label: "Awards", href: "#parakram-awards" },
  { label: "People's Choice", href: "#parakram-peoples-choice" },
  { label: "Ceremony", href: "#parakram-ceremony" },
  { label: "FAQ", href: "#parakram-faq" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCountdown(targetDate) {
  const calc = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, min: 0, sec: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      min: Math.floor((diff % 3600000) / 60000),
      sec: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ParakramNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="parakram-nav">
      <div className="parakram-nav-inner">
        <div className="parakram-nav-left">
          <span className="parakram-nav-brand">PARAKRAM</span>
          <Link to="/" className="parakram-nav-back">
            ← Back to Club Website
          </Link>
        </div>

        <button
          className="parakram-nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`parakram-nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => handleAnchor(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function CountdownBlock({ value, label }) {
  return (
    <div className="parakram-cd-block">
      <span className="parakram-cd-num">{String(value).padStart(2, "0")}</span>
      <span className="parakram-cd-label">{label}</span>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`parakram-faq-item ${open ? "open" : ""}`}>
      <button className="parakram-faq-q" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="parakram-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="parakram-faq-a">{a}</div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Parakram() {
  const { days, hours, min, sec } = useCountdown(CEREMONY_DATE);

  return (
    <div className="parakram-root">
      {/* ── Navbar ── */}
      <ParakramNavbar />

      {/* ── Hero ── */}
      <section id="parakram-hero" className="parakram-hero">
        <div className="parakram-hero-rays" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="parakram-ray" style={{ "--i": i }} />
          ))}
        </div>
        <div className="parakram-hero-overlay" aria-hidden="true" />

        <div className="parakram-hero-content">
          <p className="parakram-hero-district">
            ROTARACT DISTRICT 3030 PRESENTS
          </p>
          <h1 className="parakram-hero-title">PARAKRAM</h1>
          <p className="parakram-hero-sub">DISTRICT AWARDS CEREMONY</p>
          <p className="parakram-hero-year">2026</p>
          <p className="parakram-hero-host">
            HOSTED BY ROTARACT CLUB OF YCCE &nbsp;|&nbsp; 28TH JUNE 2026
          </p>
          <p className="parakram-hero-quote">
            "Honouring Service. Celebrating Leadership. Crowning Impact."
          </p>
          <div className="parakram-hero-btns">
            <a
              href="#parakram-awards"
              className="parakram-btn parakram-btn-gold"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#parakram-awards")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Awards
            </a>
            <a
              href="#parakram-peoples-choice"
              className="parakram-btn parakram-btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#parakram-peoples-choice")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              People's Choice
            </a>
          </div>
        </div>
      </section>

      {/* ── Countdown ── */}
      <section className="parakram-countdown">
        <p className="parakram-section-label">COUNTING DOWN TO PARAKRAM</p>
        <div className="parakram-cd-grid">
          <CountdownBlock value={days} label="Days" />
          <div className="parakram-cd-sep">:</div>
          <CountdownBlock value={hours} label="Hours" />
          <div className="parakram-cd-sep">:</div>
          <CountdownBlock value={min} label="Min" />
          <div className="parakram-cd-sep">:</div>
          <CountdownBlock value={sec} label="Sec" />
        </div>
        <p className="parakram-cd-date">28th June 2026 · SDMP Auditorium, YCCE</p>
      </section>

      {/* ── Hosted By ── */}
      <section className="parakram-host">
        <p className="parakram-section-label">PROUDLY HOSTED BY</p>
        <h2 className="parakram-section-title">Rotaract Club of YCCE</h2>
        <p className="parakram-host-desc">
          Proudly hosting Parakram 2026 for Rotaract District 3030 — celebrating
          service, leadership, projects, administration, and Rotaract excellence.
        </p>
        <div className="parakram-host-cards">
          {HOST_CARDS.map((c) => (
            <div key={c.label} className="parakram-host-card">
              <span className="parakram-host-card-label">{c.label}</span>
              <span className="parakram-host-card-value">{c.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="parakram-about" className="parakram-about">
        <div className="parakram-about-inner">
          <div className="parakram-about-text">
            <p className="parakram-section-label">
              CELEBRATING EXCELLENCE IN RIY 2025–26
            </p>
            <h2 className="parakram-section-title">Parakram 2026</h2>
            <p className="parakram-about-body">
              Parakram is the official District Awards Ceremony of Rotaract
              District 3030, established to honour the clubs, leaders, and
              projects that defined the RIY 2025–26 year. It celebrates the
              immense impact of service and the spirit of leadership excellence.
            </p>
            <blockquote className="parakram-about-quote">
              "Honouring Service. Celebrating Leadership. Crowning Impact. A
              night where excellence is etched into the history of District
              3030."
            </blockquote>
          </div>
          <div className="parakram-about-visual">
            <div className="parakram-trophy-card">
              <div className="parakram-trophy-icon">🏆</div>
              <div className="parakram-trophy-text">
                <span>District</span>
                <span className="parakram-trophy-num">3030</span>
                <span>Awards Ceremony</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Award Recognition ── */}
      <section id="parakram-awards" className="parakram-awards">
        <p className="parakram-section-label">CATEGORIES</p>
        <h2 className="parakram-section-title">Award Recognition</h2>
        <div className="parakram-awards-grid">
          {AWARD_CATEGORIES.map((cat) => (
            <div key={cat.id} className="parakram-award-card">
              <div className="parakram-award-icon">{cat.icon}</div>
              <h3 className="parakram-award-card-title">{cat.label}</h3>
              <ul className="parakram-award-list">
                {cat.awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── People's Choice ── */}
      <section id="parakram-peoples-choice" className="parakram-peoples">
        <div className="parakram-peoples-inner">
          <p className="parakram-section-label">COMMUNITY DECIDES</p>
          <h2 className="parakram-section-title">People's Choice Award</h2>
          <p className="parakram-peoples-body">
            The People's Choice Award is the only award decided through public
            voting. All other awards are evaluated by the DRR and District Team
            and revealed live on stage.
          </p>
          <div className="parakram-peoples-status">
            <div className="parakram-peoples-stat">
              <span className="parakram-peoples-stat-label">
                Nominated Projects
              </span>
              <span className="parakram-peoples-stat-value">
                To be announced
              </span>
            </div>
            <div className="parakram-peoples-stat">
              <span className="parakram-peoples-stat-label">Voting Status</span>
              <span className="parakram-peoples-stat-value">
                To be announced
              </span>
            </div>
          </div>
          <button className="parakram-btn parakram-btn-gold parakram-btn-disabled" disabled>
            Voting Opens Soon
          </button>
        </div>
      </section>

      {/* ── Ceremony Details ── */}
      <section id="parakram-ceremony" className="parakram-ceremony">
        <p className="parakram-section-label">THE EVENING</p>
        <h2 className="parakram-section-title">Ceremony Details</h2>
        <div className="parakram-ceremony-grid">
          <div className="parakram-ceremony-details">
            {CEREMONY_DETAILS.map((d) => (
              <div key={d.label} className="parakram-ceremony-row">
                <span className="parakram-ceremony-row-label">{d.label}</span>
                <span className="parakram-ceremony-row-value">{d.value}</span>
              </div>
            ))}
          </div>
          <div className="parakram-winner-card">
            <div className="parakram-winner-shimmer" aria-hidden="true" />
            <div className="parakram-winner-content">
              <span className="parakram-winner-label">Winner</span>
              <span className="parakram-winner-main">REVEALED LIVE</span>
              <span className="parakram-winner-sub">ON STAGE</span>
              <span className="parakram-winner-icon">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sealed ── */}
      <section className="parakram-sealed">
        <p className="parakram-section-label">SEALED IN SECRECY</p>
        <h2 className="parakram-section-title">Sealed Until the Stage</h2>
        <p className="parakram-sealed-sub">
          Except for the People's Choice Award, category winners remain sealed
          until the official stage announcement.
        </p>
        <div className="parakram-sealed-grid">
          {SEALED_CARDS.map((c) => (
            <div key={c.label} className="parakram-sealed-card">
              <span className="parakram-sealed-card-icon">{c.icon}</span>
              <span className="parakram-sealed-card-label">{c.label}</span>
              <span className="parakram-sealed-lock">🔒</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="parakram-faq" className="parakram-faq">
        <p className="parakram-section-label">GOT QUESTIONS?</p>
        <h2 className="parakram-section-title">Frequently Asked</h2>
        <div className="parakram-faq-list">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="parakram-footer">
        <div className="parakram-footer-brand">PARAKRAM</div>
        <p className="parakram-footer-sub">District Awards Ceremony 2026</p>
        <p className="parakram-footer-district">Rotaract District 3030</p>
        <p className="parakram-footer-tagline">Service. Leadership. Legacy.</p>
        <p className="parakram-footer-host">
          Hosted by Rotaract Club of YCCE
        </p>
        <div className="parakram-footer-links">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Contact District Team</a>
          <span>·</span>
          <Link to="/">Back to Club Website</Link>
        </div>
        {/* Made by Tejasvi — uncomment to show */}
        {/* <p className="parakram-footer-credit">Made by Tejasvi</p> */}
      </footer>
    </div>
  );
}

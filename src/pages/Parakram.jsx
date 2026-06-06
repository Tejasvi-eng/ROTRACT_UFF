import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Parakram.css";

import parakramLogo from "../assets/parakram/parakram-logo.png";
import trophyImage from "../assets/parakram/parakram-trophy.png";

const targetDate = new Date("2026-06-28T18:30:00").getTime();

const getCountdown = () => {
  const now = Date.now();
  const distance = Math.max(targetDate - now, 0);
  return {
    days:    Math.floor(distance / 86400000),
    hours:   Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000)  / 60000),
    seconds: Math.floor((distance % 60000)    / 1000),
  };
};

const pad = (v) => String(v).padStart(2, "0");

export default function Parakram() {
  const [timeLeft, setTimeLeft]   = useState(getCountdown);
  const [openFaq,  setOpenFaq]    = useState(null);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Home",           href: "#home" },
    { label: "About",          href: "#about" },
    { label: "Awards",         href: "#awards" },
    { label: "People's Choice",href: "#peoples-choice" },
    { label: "Ceremony",       href: "#ceremony" },
    { label: "FAQ",            href: "#faq" },
  ];

  const hostStats = useMemo(() => [
    { label: "District",   value: "3030" },
    { label: "DRR",        value: "Rtr. Raghav Pagar" },
    { label: "Team",       value: "Elevate Together" },
    { label: "Host Club",  value: "RC YCCE" },
    { label: "Date",       value: "28.06.2026" },
  ], []);

  const awards = useMemo(() => [
    {
      icon: "★",
      title: "Leadership Recognition",
      items: [
        "Outstanding Club President",
        "Outstanding Club Secretary",
        "Outstanding District Official",
      ],
    },
    {
      icon: "◈",
      title: "Avenue Recognition",
      items: [
        "Club Service & Admin",
        "Community Service",
        "Public Image & PR",
        "Professional Development",
        "Literacy and Education",
        "Partners in Service",
        "Social Media",
        "Fund Raising",
      ],
    },
    {
      icon: "◆",
      title: "Grand Recognition",
      highlight: true,
      items: [
        "Outstanding Club Award",
        "People's Choice Award",
        "District Excellence Award",
        "Achievement Citations",
      ],
    },
  ], []);

  const details = useMemo(() => [
    { icon: "◆", label: "Date",       value: "28th June 2026" },
    { icon: "◇", label: "Venue",      value: "SDMP Auditorium, YCCE" },
    { icon: "◈", label: "District",   value: "Rotaract District 3030" },
    { icon: "✦", label: "Led By",     value: "DRR Rtr. Raghav Pagar and Team Elevate Together" },
    { icon: "✧", label: "Hosted By",  value: "Rotaract Club of YCCE" },
    { icon: "✺", label: "Time",       value: "To be announced" },
  ], []);

  const sealedCards = useMemo(() => [
    "Leadership Awards",
    "Avenue Awards",
    "Outstanding Club",
    "Special Citations",
  ], []);

  const faqs = useMemo(() => [
    {
      question: "What is the People's Choice Award?",
      answer: "The People's Choice Award is the only award decided through public voting, allowing members to recognize high-impact projects.",
    },
    {
      question: "Who evaluates the other awards?",
      answer: "The remaining awards are evaluated by the DRR and District Team based on verified performance benchmarks and administrative reports.",
    },
    {
      question: "When will winners be announced?",
      answer: "Winners will be revealed live on stage during the Parakram ceremony.",
    },
    {
      question: "Where will the ceremony take place?",
      answer: "Parakram 2026 will be held at SDMP Auditorium, YCCE.",
    },
  ], []);

  return (
    <div className="pk-root" id="home">

      {/* ── NAV ── */}
      <nav className="pk-nav">
        <div className="pk-nav-inner">
          <Link to="/" className="pk-brand" onClick={closeMenu}>
            <img src={parakramLogo} alt="Parakram" className="pk-brand-logo" />
            <small className="pk-brand-sub">Back to Club Website</small>
          </Link>

          <div className="pk-nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>

          <button
            className={`pk-hamburger${menuOpen ? " pk-hamburger--open" : ""}`}
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <div className="pk-mobile-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pk-hero" id="hero-section">
        <div className="pk-hero-inner">
          <p className="pk-eyebrow">Rotaract District 3030 Presents</p>
          <img src={parakramLogo} alt="Parakram" className="pk-hero-logo" />
          <h1 className="pk-hero-title">District Awards Ceremony 2026</h1>
          <p className="pk-hero-meta">Hosted by Rotaract Club of YCCE | 28th June 2026</p>
          <p className="pk-hero-quote">
            "Honouring Service. Celebrating Leadership. Crowning Impact."
          </p>
          <div className="pk-hero-btns">
            <a href="#awards"         className="pk-btn pk-btn--gold">Explore Awards</a>
            <a href="#peoples-choice" className="pk-btn pk-btn--outline">People's Choice</a>
          </div>
        </div>
      </section>

      {/* ── COUNTDOWN ── */}
      <section className="pk-countdown-wrap" aria-label="Countdown to Parakram">
        <div className="pk-countdown-card">
          <p className="pk-countdown-title">Countdown to Parakram</p>
          <p className="pk-countdown-sub">District 3030 Awards Ceremony • 28th June 2026</p>
          <div className="pk-countdown-grid">
            {[
              ["Days",  timeLeft.days],
              ["Hours", timeLeft.hours],
              ["Min",   timeLeft.minutes],
              ["Sec",   timeLeft.seconds],
            ].map(([label, val]) => (
              <div className="pk-time-cell" key={label}>
                <div className="pk-time-box">
                  <span className="pk-time-num">{pad(val)}</span>
                </div>
                <span className="pk-time-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOST ── */}
      <section className="pk-section pk-host" id="about">
        <div className="pk-container">
          <div className="pk-divider" />
          <p className="pk-label">Organizing Host</p>
          <h2 className="pk-host-heading pk-gold-text">
            PROUDLY HOSTED BY<br />Rotaract Club of YCCE
          </h2>
          <p className="pk-host-copy">
            Proudly hosting Parakram 2026 for Rotaract District 3030 — celebrating service, leadership,
            projects, administration, and Rotaract excellence.
          </p>
          <div className="pk-stats-grid">
            {hostStats.map((s) => (
              <div className="pk-stat-card pk-glass" key={s.label}>
                <p className="pk-stat-label">{s.label}</p>
                <p className="pk-stat-value">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="pk-section pk-about">
        <div className="pk-container pk-about-grid">
          <div className="pk-trophy-wrap">
            <div className="pk-trophy-corner pk-trophy-corner--tl" />
            <img src={trophyImage} alt="Parakram Trophy" className="pk-trophy-img" />
            <div className="pk-trophy-corner pk-trophy-corner--br" />
          </div>
          <div className="pk-about-copy">
            <p className="pk-label">Celebrating Excellence in RIY 2025–26</p>
            <h2>Parakram 2026</h2>
            <p className="pk-body-text">
              Parakram is the District Awards Ceremony of Rotaract District 3030, created to recognise
              the clubs, leaders, projects, and initiatives that shaped RIY 2025–26. It celebrates
              service impact, leadership responsibility, district participation, public image, and club
              administration.
            </p>
            <blockquote className="pk-blockquote">
              "Honouring Service. Celebrating Leadership. Crowning Impact. A night where excellence is
              etched into the history of District 3030."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="pk-section pk-awards-section" id="awards">
        <div className="pk-container">
          <div className="pk-section-head">
            <p className="pk-label">Categories</p>
            <h2>Award Recognition</h2>
            <div className="pk-divider pk-divider--center" />
          </div>
          <div className="pk-awards-grid">
            {awards.map((a) => (
              <div className="pk-award-card pk-glass" key={a.title}>
                <span className="pk-award-icon">{a.icon}</span>
                <h3 className="pk-award-title">{a.title}</h3>
                <ul className="pk-award-list">
                  {a.items.map((item) => (
                    <li key={item} className={a.highlight ? "pk-award-item--bold" : ""}>
                      <span className="pk-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEOPLE'S CHOICE ── */}
      <section className="pk-section pk-choice-section" id="peoples-choice">
        <div className="pk-container pk-choice-grid">
          <div className="pk-choice-left">
            <p className="pk-label">Public Voting</p>
            <h2 className="pk-choice-heading">People's Choice Award</h2>
            <p className="pk-body-text">
              The People's Choice Award is the only honor decided through public voting. All other awards
              are meticulously evaluated by the DRR and the District Team based on impact reports.
            </p>
            <div className="pk-choice-note pk-glass">
              <p>Note: Evaluation results for all other categories remain sealed until the ceremony.</p>
            </div>
          </div>
          <div className="pk-choice-panel pk-glass">
            <span className="pk-choice-icon">🗳</span>
            <div>
              <h3 className="pk-choice-panel-title">Nominated Projects: To be announced</h3>
              <p className="pk-choice-panel-sub">Voting Status: To be announced</p>
            </div>
            <button className="pk-btn pk-btn--ghost" disabled>Voting Opens Soon</button>
          </div>
        </div>
      </section>

      {/* ── CEREMONY ── */}
      <section className="pk-section pk-ceremony-section" id="ceremony">
        <div className="pk-container">
          <div className="pk-ceremony-card pk-glass">
            <div className="pk-ceremony-grid">
              <div className="pk-ceremony-left">
                <h2 className="pk-ceremony-heading">Ceremony Details</h2>
                <div className="pk-details-grid">
                  {details.map((d) => (
                    <div className="pk-detail-item" key={d.label}>
                      <span className="pk-detail-icon">{d.icon}</span>
                      <div>
                        <p className="pk-detail-value">{d.value}</p>
                        <p className="pk-detail-label">{d.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pk-winner-card pk-mirror-shine">
                <h3 className="pk-winner-title pk-gold-text">Winners</h3>
                <p className="pk-winner-sub">REVEALED LIVE ON STAGE</p>
                <div className="pk-winner-divider" />
                <p className="pk-winner-foot">The culmination of RIY 2025–26 Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEALED ── */}
      <section className="pk-section pk-sealed-section">
        <div className="pk-container pk-sealed-inner">
          <h2 className="pk-sealed-heading">Sealed Until the Stage</h2>
          <p className="pk-sealed-sub">
            "Except for the People's Choice Award, all category winners remain sealed in envelopes
            until the official stage announcement."
          </p>
          <div className="pk-sealed-grid">
            {sealedCards.map((card) => (
              <div className="pk-sealed-card" key={card}>
                <span className="pk-sealed-icon">🔒</span>
                <p className="pk-sealed-name">{card}</p>
                <p className="pk-sealed-tag">Revealing Live</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pk-section pk-faq-section" id="faq">
        <div className="pk-container pk-faq-inner">
          <p className="pk-label pk-label--center">Help Center</p>
          <h2 className="pk-faq-heading">Frequently Asked</h2>
          <div className="pk-faq-list">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div className={`pk-faq-item pk-glass${open ? " pk-faq-item--open" : ""}`} key={faq.question}>
                  <button
                    className="pk-faq-btn"
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{faq.question}</span>
                    <span className={`pk-faq-chevron${open ? " pk-faq-chevron--open" : ""}`}>›</span>
                  </button>
                  {open && <p className="pk-faq-answer">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pk-footer">
        <div className="pk-container">
          <div className="pk-footer-top">
            <div className="pk-footer-brand">
              <img src={parakramLogo} alt="Parakram" className="pk-footer-logo" />
              <p className="pk-footer-brand-text">District Awards Ceremony 2026 • Rotaract District 3030</p>
            </div>
            <div className="pk-footer-center">
              <p className="pk-footer-tagline">Service. Leadership. Legacy.</p>
              <p className="pk-footer-tagline-sub">Honouring District Excellence</p>
            </div>
            <div className="pk-footer-right">
              <p className="pk-footer-hosted-label">Hosted by</p>
              <p className="pk-footer-hosted-value">Rotaract Club of YCCE</p>
            </div>
          </div>
          <div className="pk-divider pk-divider--faint" />
          <div className="pk-footer-bottom">
            <div className="pk-footer-links">
              <Link to="/">Back to Club Website</Link>
              <a href="mailto:rotaractycce@gmail.com">Contact Team</a>
            </div>
            <p className="pk-footer-copy">© 2026 Parakram District Awards. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

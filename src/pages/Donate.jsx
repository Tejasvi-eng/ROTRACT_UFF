import React from "react";
import HeroBanner from "../components/HeroBanner";
import "./Donate.css"; // Make sure to import the CSS file

function Donate() {
  return (
    <>
      <HeroBanner
  title="Helping Hands"
  subtitle="Your contribution helps us create meaningful impact"
  desktopVideo="/videos/donate-desktop.mp4"
/>

      <section className="modern-donate-section">
        <div className="donate-interactive-card">
          <div className="card-content">
            <h2 className="donate-title">Support Our Initiatives</h2>
            <p className="donate-text">
              Your contribution helps Rotaract Club of YCCE organize community
              service projects, leadership programs, and social impact
              initiatives.
            </p>

            <div className="donate-grid">
              <a
                href="https://forms.gle/TDwm7tKXgKQqqNiQA"
                target="_blank"
                rel="noopener noreferrer"
                className="reactive-donate-btn"
              >
                <span>Make a Donation</span>
              </a>
            </div>
          </div>
          
          {/* Decorative glowing orbs behind the card content */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
      </section>
    </>
  );
}

export default Donate;
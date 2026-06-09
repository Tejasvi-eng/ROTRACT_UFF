import { useEffect, useState } from "react";
import "./WelcomePopup.css";
import popupImage from "../assets/popup/popup.PNG";

function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="popup-close"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="popup-image-wrap">
          <img
            src={popupImage}
            alt="Parakram 2026 announcement"
            className="popup-image"
          />
        </div>

        <div className="popup-content">
          <p className="popup-kicker">Rotaract Club of YCCE welcomes you</p>

          <h2>Join Parakram 2026</h2>

          <p>
            Be a part of Rotaract District 3030’s grand awards ceremony — an
            evening dedicated to honouring service, celebrating leadership, and
            crowning impact.
          </p>

          <a
            href="PASTE_REGISTRATION_LINK_HERE"
            target="_blank"
            rel="noreferrer"
            className="popup-btn primary"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;
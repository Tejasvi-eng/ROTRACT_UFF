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
      <div
        className="popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={closePopup}>
          ×
        </button>

        <div className="popup-image-wrap">
          <img
            src={popupImage}
            alt="Rotaract Club announcement"
            className="popup-image"
          />
        </div>

        <div className="popup-content">
          <span className="popup-tag">Welcome</span>

          <h2>Rotaract Club of YCCE</h2>

          <p>
            Join a vibrant community of young leaders creating impact through
            service, leadership, fellowship, and innovation.
          </p>

          <div className="popup-actions">
            <a
              href="https://forms.gle/dfbDcVp2QZboSjNr6"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-btn primary"
              onClick={closePopup}
            >
              Join Us
            </a>

            {/*
            <button
              className="popup-btn secondary"
              onClick={closePopup}
            >
              Maybe Later
            </button>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;
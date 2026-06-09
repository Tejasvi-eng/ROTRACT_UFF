import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="Rotaract YCCE logo"
            className="brand-logo"
          />
          <span className="brand-main">Rotaract YCCE</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/parakram"
              className="Parakram-link"
              onClick={() => setMenuOpen(false)}
            >
              Parakram
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Event
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/donate" onClick={() => setMenuOpen(false)}>
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
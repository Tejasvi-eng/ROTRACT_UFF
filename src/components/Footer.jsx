import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Rotaract YCCE" className="footer-logo" />

          <h3>Rotaract YCCE</h3>

          <p>
            Empowering young leaders to create impact through service,
            fellowship, and leadership.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/rotaractycce/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
            <a href="https://www.linkedin.com/company/rotaract-club-of-ycce/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://www.youtube.com/@rotaractclubofycce3030" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <Link to="/parakram">Parakram</Link>
          <Link to="/about">About Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/donate">Donate</Link>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <p>⌖ YCCE, Nagpur</p>
          <p>✉ rotaractycce@gmail.com</p>
          <p>☏ +91 9096547214</p>
          <p>◎ rotaractycce.com</p>
        </div>

        <div className="footer-column footer-motto">
          <h4>Our Motto</h4>
          <p>
            Together We Rise —<br />
            One Initiative, One Idea,<br />
            One Impact at a Time.
          </p>
          <strong>#ActToImpact</strong>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Rotaract Club of YCCE. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
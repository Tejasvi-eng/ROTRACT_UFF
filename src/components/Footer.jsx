import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

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
            <a
              href="https://www.instagram.com/rotaract_ycce/profilecard/?igsh=MW85bTlybHh1YW83MA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
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

          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt />
              <span>YCCE, Nagpur</span>
            </li>

            <li>
              <FaEnvelope />
              <span>rotaractycce@gmail.com</span>
            </li>

            <li>
              <FaPhoneAlt />
              <span>+91 9096547214</span>
            </li>

            <li>
              <FaInstagram />
              <span>@rotaractycce</span>
            </li>

            <li>
              <FaGlobe />
              <span>rotaractycce.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-motto">
          <h4>Our Motto</h4>
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
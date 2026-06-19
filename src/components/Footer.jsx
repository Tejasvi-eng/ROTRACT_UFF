import React from "react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
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
            href="https://www.instagram.com/rotaract_ycce/profilecard/?igsh=MW85bTlybHh1YW83MA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="http://linkedin.com/company/rotaract-club-of-ycce"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com/@rotaractclubofycce3030"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://whatsapp.com/channel/0029VamW8VY7tkj86XfX0z1A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://x.com/RACYCCE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
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
            <a
              href="https://maps.google.com/?q=Yeshwantrao+Chavan+College+of+Engineering+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              YCCE, Nagpur
            </a>
          </li>

          <li>
            <FaEnvelope />
            <a href="mailto:rotaractycce@gmail.com">
              rotaractycce@gmail.com
            </a>
          </li>

          <li>
            <FaPhoneAlt />
            <a href="tel:+919096547214">
              +91 9096547214
            </a>
          </li>

          <li>
            <FaInstagram />
            <a
              href="https://www.instagram.com/rotaract_ycce/profilecard/?igsh=MW85bTlybHh1YW83MA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              @rotaract_ycce
            </a>
          </li>

          <li>
            <FaGlobe />
            <a
              href="https://rotaractycce.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              rotaractycce.com
            </a>
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
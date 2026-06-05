import React from "react";
import HeroBanner from "../components/HeroBanner";
import "./Contact.css"; // Make sure to create and import this CSS file

function Contact() {
  const linktreeUrl = "https://linktr.ee/rotaract_ycce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnjdgxK600z7yKih_d66QHmuO2Y_aSUEn2Nyj4VO02yKBYFQgA23931Gl3dck_aem_NaVHwasKdgCnZxZF2btAFg";

  return (
    <div className="contact-page-light">
      {/* Hero Video Banner */}
      <HeroBanner
        title="Reach Us"
        subtitle="Let’s Connect & Create Impact Together"
      
        videoSrc="/videos/contact.mp4"
      />

      {/* Decorative Background Orbs */}
      <div className="bg-orb pink-orb-top"></div>
      <div className="bg-orb pink-orb-bottom"></div>

      {/* Contact Info Section */}
      <section className="reactive-contact-section">
        <div className="glass-contact-panel">
          <div className="glass-panel-inner">
            <h2>Get in Touch</h2>
            <div className="text-content">
              <p>
                We’d love to hear from you! Whether you’re interested in joining
                Rotaract Club of YCCE, collaborating on projects, or simply learning
                more about our initiatives, feel free to connect with us.
              </p>
              <p>
                Follow us on social media, explore our work, and stay updated with
                our latest events and activities through our official links.
              </p>
            </div>

            <div className="button-container">
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="reactive-connect-btn"
              >
                <span>Connect With Us</span>
                <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
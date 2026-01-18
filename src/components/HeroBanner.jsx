import { Link } from "react-router-dom";
import "./HeroBanner.css";

function HeroBanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <Link to={buttonLink} className="hero-btn">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export default HeroBanner;
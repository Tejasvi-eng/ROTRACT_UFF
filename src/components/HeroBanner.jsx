import { Link } from "react-router-dom";

function HeroBanner({ title, subtitle, buttonText, buttonLink, videoSrc }) {
  return (
    <section className="hero">
      {videoSrc && (
        <video
          className="hero-video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        {buttonText && buttonLink && (
          <Link to={buttonLink} className="hero-btn">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}

export default HeroBanner;

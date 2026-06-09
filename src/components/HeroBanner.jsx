import { useEffect, useState } from "react";
import "./HeroBanner.css";

function HeroBanner({
  title,
  subtitle,
  buttonText,
  buttonLink,
  videoSrc,
  desktopVideo,
  mobileVideo,
}) {
  const [activeVideo, setActiveVideo] = useState(
    desktopVideo || videoSrc || ""
  );

  useEffect(() => {
    const updateVideo = () => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile && mobileVideo) {
        setActiveVideo(mobileVideo);
      } else if (desktopVideo) {
        setActiveVideo(desktopVideo);
      } else if (videoSrc) {
        setActiveVideo(videoSrc);
      }
    };

    updateVideo();

    window.addEventListener("resize", updateVideo);
    window.addEventListener("orientationchange", updateVideo);

    return () => {
      window.removeEventListener("resize", updateVideo);
      window.removeEventListener("orientationchange", updateVideo);
    };
  }, [videoSrc, desktopVideo, mobileVideo]);

  return (
    <section className="hero-banner">
      {activeVideo && (
        <video
          key={activeVideo}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={activeVideo} type="video/mp4" />
        </video>
      )}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}

        {buttonText && buttonLink && (
          <a href={buttonLink} className="hero-btn">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}

export default HeroBanner;
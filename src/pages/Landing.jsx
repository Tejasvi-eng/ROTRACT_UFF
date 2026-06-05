import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <>
      {/* Hero Video Banner */}
      <HeroBanner
        title="Act To Impact"
        subtitle="Service • Leadership • Fellowship"
        buttonText="Join Us"
        buttonLink="/join-us"
        videoSrc="/videos/landing.mp4"
      />

      {/* About Preview */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            About Rotaract Club of YCCE
          </h2>
          <div className="about-content animate-slide-up">
            <p className="about-text">
              <strong>Rotaract Club of YCCE (ACT–YCCE)</strong>
            </p>
            <p className="about-text">
              The Rotaract Club of YCCE (ACT–YCCE) is an institution-based youth 
              organization functioning under Rotary International District 3030. 
              Chartered in 2015, the club has consistently grown into one of the 
              most active, impactful, and recognized Rotaract clubs in the district.
            </p>
            <p className="about-text highlight-card">
               ACT–YCCE was proudly honored as the <strong>Golden Club of RID 3030</strong> 
              for RIY 2024–25 and holds the distinction of being the first Rotaract club 
              in RID 3030 to receive a <strong>Global Grant</strong> from Rotary International, 
              reflecting its commitment to meaningful and sustainable service.
            </p>
            <p className="about-text">
              Driven by the core values of <strong>service, leadership, fellowship,</strong> and 
              <strong> professional development</strong>, the club actively conducts:
            </p>
            <ul className="features-list">
              <li> Community service projects</li>
              <li> Digital literacy initiatives</li>
              <li> Social awareness campaigns</li>
              <li> Donation drives</li>
              <li> Leadership development programs</li>
              <li> Skill-building workshops</li>
            </ul>
            <p className="about-text">
              More than an organization, ACT–YCCE is a <strong>family of passionate changemakers</strong> 
              who believe in creating impact through collective action. By empowering youth to 
              lead with empathy and responsibility, the club continues to make a positive 
              difference on campus and in the community.
            </p>
            <p className="about-text quote">
              Together we rise — one initiative, one idea, one impact at a time.
            </p>
            <p className="hashtag animate-pulse">#ActToImpact</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta animate-fade-in">
        <div className="cta-gradient"></div>
        <h2 className="cta-title">Be the Change. Lead the Future.</h2>
        <Link to="/join-us" className="cta-btn shimmer-btn">
          <span className="btn-text">Become a Member</span>
          <span className="btn-arrow">→</span>
        </Link>
      </section>
    </>
  );
}

export default Landing;
import HeroBanner from "../components/HeroBanner";
import DevelopersSection from "../components/DevelopersSection";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const impactAreas = [
    {
      title: "Community Service",
      text: "Health, education, awareness campaigns, donation drives and grassroots social impact.",
    },
    {
      title: "Professional Development",
      text: "Leadership development, skill-building workshops, communication and career-focused learning.",
    },
    {
      title: "International Service",
      text: "Global collaborations, cultural exchange, twin-club connections and goodwill projects.",
    },
    {
      title: "Club Service",
      text: "Fellowship, member bonding, team spirit, internal growth and club engagement.",
    },
    {
      title: "Public Image",
      text: "Creative storytelling, social media visibility, event branding and impact documentation.",
    },
    {
      title: "Membership",
      text: "Welcoming new changemakers and nurturing a strong, active Rotaract family.",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Act To Impact"
        subtitle="Service • Leadership • Fellowship"
        buttonText="Join Us"
        buttonLink="/join-us"
        desktopVideo="/videos/join-desktop.mp4"
        mobileVideo="/videos/join-mobile.mp4"
      />

      <section className="section about-section">
        <div className="container">
          <div className="section-eyebrow">Who We Are</div>

          <h2 className="section-title animate-fade-in">
            About Rotaract Club of YCCE
          </h2>

          <div className="about-content animate-slide-up">
            <p className="about-label">
              Rotaract Club of YCCE <span>(ACT–YCCE)</span>
            </p>

            <p className="about-text">
              The Rotaract Club of YCCE is an institution-based youth
              organization functioning under Rotary International District 3030.
              Chartered in 2015, the club has consistently grown into one of the
              most active, impactful, and recognized Rotaract clubs in the
              district.
            </p>

            <div className="legacy-card">
              <div className="legacy-icon">✦</div>
              <p>
                ACT–YCCE was proudly honoured as the{" "}
                <strong>Golden Club of RID 3030</strong> for RIY 2024–25 and
                holds the distinction of being the first Rotaract club in RID
                3030 to receive a <strong>Global Grant</strong> from Rotary
                International, reflecting its commitment to meaningful and
                sustainable service.
              </p>
            </div>

            <p className="about-text">
              Driven by the core values of{" "}
              <strong>service, leadership, fellowship,</strong> and{" "}
              <strong>professional development</strong>, the club creates
              opportunities for young changemakers to learn, lead, serve and
              build lasting impact.
            </p>

            <div className="impact-showcase">
              <div className="impact-heading">
                <span>Our Avenues</span>
                <h3>Where We Create Impact</h3>
                <p>
                  Every avenue contributes to the club’s mission through focused
                  initiatives, meaningful collaborations and member-driven
                  execution.
                </p>
              </div>

              <div className="impact-grid">
                {impactAreas.map((item, index) => (
                  <div
                    className="impact-card"
                    key={item.title}
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="impact-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="about-text">
              More than an organization, ACT–YCCE is a{" "}
              <strong>family of passionate changemakers</strong> who believe in
              creating impact through collective action. By empowering youth to
              lead with empathy and responsibility, the club continues to make a
              positive difference on campus and in the community.
            </p>

            <div className="quote-card">
              Together we rise — one initiative, one idea, one impact at a time.
            </div>

            <p className="hashtag animate-pulse">#ActToImpact</p>

            <div className="about-actions">
              <Link to="/about" className="cta-btn shimmer-btn">
                <span className="btn-text">Know More About Us</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta animate-fade-in">
        <div className="cta-gradient"></div>
        <h2 className="cta-title">Be the Change. Lead the Future.</h2>
        <p className="cta-subtitle">
          Join a community of young leaders creating service, fellowship and
          impact with purpose.
        </p>
        <Link to="/join-us" className="cta-btn cta-btn-light shimmer-btn">
          <span className="btn-text">Become a Member</span>
          <span className="btn-arrow">→</span>
        </Link>
      </section>

      <DevelopersSection />
    </>
  );
}

export default Landing;
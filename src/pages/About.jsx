import HeroBanner from "../components/HeroBanner";

function About() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        title="Who We Are"
        subtitle="Leadership • Service • Social Impact"
        buttonText="Join Us"
        buttonLink="/join-us"
      />

      {/* About Club */}
      <section className="section">
        <h2>About Rotaract Club of YCCE</h2>
        <p>
          Rotaract Club of YCCE is a youth-led organization dedicated to
          community service, leadership development, and professional growth.
          We provide a platform for young individuals to create meaningful
          social impact while building lifelong skills and connections.
        </p>
      </section>

      {/* Team Section */}
      <section className="section light">
        <h2>Board of Directors</h2>

        <div className="team-grid">
          {[
            "President",
            "Vice President",
            "Secretary",
            "Joint Secretary",
            "Treasurer",
            "Club Service Director",
            "Community Service Director",
            "International Service Director",
            "Professional Development Director",
            "Digital Media Director",
            "Public Relations Director",
            "Membership Director",
            "Sports Director",
            "Cultural Director",
            "Editorial Director"
          ].map((role, index) => (
            <div className="team-card" key={index}>
              <div className="team-photo"></div>
              <h3>{role}</h3>
              <p>Rotaractor Name</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <h2>Our Achievements</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-img"></div>
            <h3>Community Impact Award</h3>
            <p>
              Recognized for outstanding community service initiatives and
              social impact activities.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-img"></div>
            <h3>Best Club Performance</h3>
            <p>
              Awarded for excellence in club management, events, and leadership.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-img"></div>
            <h3>Leadership Excellence</h3>
            <p>
              Honored for promoting youth leadership and professional
              development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
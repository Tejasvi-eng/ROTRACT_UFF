import HeroBanner from "../components/HeroBanner"

function JoinUs() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        title="Get Involved"
        subtitle="Leadership • Service • Fellowship"
        buttonText="Become a Member"
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSfB8vdvQVrJVEmwFapMZ6ouzzzjAJjCdPeDdQuf2xcOp3vprQ/viewform"
      />

      {/* Rotaract International */}
      <section className="section">
        <h2>About Rotaract International</h2>
        <p>
          Rotaract is a global organization of young leaders and professionals
          aged 18 and above who come together to exchange ideas, develop
          leadership skills, and take action through community and international
          service.
        </p>
      </section>

      {/* Rotaract Club of YCC */}
      <section className="section light">
        <h2>Rotaract Club of YCC</h2>
        <p>
          Rotaract Club of YCC is a dynamic youth-driven club committed to social
          impact, leadership development, and professional growth. We work
          actively on community projects, events, and initiatives that create
          meaningful change.
        </p>
      </section>

      {/* Become Member CTA */}
      <section className="cta">
        <h2>Ready to Make an Impact?</h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfB8vdvQVrJVEmwFapMZ6ouzzzjAJjCdPeDdQuf2xcOp3vprQ/viewform"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Become a Member
        </a>
      </section>
    </>
  );
}

export default JoinUs;

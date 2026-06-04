import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";

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
      <section className="section">
        <h2>About Rotaract Club of YCCE</h2>
        <p>
          Rotaract Club of YCCE (ACT–YCCE)
          The Rotaract Club of YCCE (ACT–YCCE) is an institution-based youth organization functioning under Rotary International District 3030. Chartered in 2015, the club has consistently grown into one of the most active, impactful, and recognized Rotaract clubs in the district.
          ACT–YCCE was proudly honored as the Golden Club of RID 3030 for RIY 2024–25 and holds the distinction of being the first Rotaract club in RID 3030 to receive a Global Grant from Rotary International, reflecting its commitment to meaningful and sustainable service.
          Driven by the core values of service, leadership, fellowship, and professional development, the club actively conducts community service projects, digital literacy initiatives, social awareness campaigns, donation drives, leadership development programs, and skill-building workshops.
          More than an organization, ACT–YCCE is a family of passionate changemakers who believe in creating impact through collective action. By empowering youth to lead with empathy and responsibility, the club continues to make a positive difference on campus and in the community.
          Together we rise — one initiative, one idea, one impact at a time.
          #ActToImpact
        </p>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Be the Change. Lead the Future.</h2>
        <Link to="/join-us" className="cta-btn">
          Become a Member
        </Link>
      </section>
    </>
  );
}

export default Landing;

import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <HeroBanner
        title="Act To Impact"
        subtitle="Service • Leadership • Fellowship"
        buttonText="Join Us"
        buttonLink="/join-us"
      />

      <section className="section">
        <h2>About Rotaract Club of YCCE</h2>
        <p>
          Rotaract Club of YCCE is a youth-led organization working towards
          community development, leadership, and professional growth.
        </p>
      </section>

      <section className="section light">
        <h2>Upcoming Events</h2>
        <div className="event-preview">
          <div className="event-card">Blood Donation Camp</div>
          <div className="event-card">Tree Plantation Drive</div>
          <div className="event-card">Leadership Workshop</div>
        </div>
      </section>

      <section className="cta">
        <h2>Get Involved Today</h2>
        <Link to="/join-us" className="cta-btn">
          Become a Member
        </Link>
      </section>
    </>
  );
}

export default Landing;

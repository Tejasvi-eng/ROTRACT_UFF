import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import "./About.css";

/* Historical Section Images */
import rajmudra10Years from "../assets/rajmudra.jpeg";
import shivaji from "../assets/shivaji.jpeg";
import parentClub from "../assets/parent-club.jpg";
import charter from "../assets/charter.jpeg";

/* Team Images */
import president from "../assets/team/president.jpg";
import vicePresident from "../assets/team/vice-president.jpg";
import secretary from "../assets/team/general-secretary.jpeg";
import treasurer from "../assets/team/treasurer.jpg";
import international from "../assets/team/international.jpeg";
import professional from "../assets/team/professional.jpeg";
import clubService from "../assets/team/club-service.jpg";
import communityMedical from "../assets/team/community-medical.jpg";
import communityNonMedical from "../assets/team/community-non-medical.jpg";
import foundation from "../assets/team/foundation.jpg";
import publicImage from "../assets/team/public-image.jpg";
import membership from "../assets/team/membership.jpeg";

function About() {
  const [flippedCard, setFlippedCard] = useState(null);

  const team = [
    
    {
      role: "Vice President",
      name: "Rtr. Aditya Chafale",
      photo: vicePresident,
      description:
        "Enhancing organizational synergy, driving strategic planning, and empowering collaborative leadership across teams",
      message:
        "As Vice President, my focus is on fostering collaboration, promoting leadership development, and ensuring smooth project execution. By encouraging teamwork and innovation, we will create an inclusive environment where everyone can thrive.",
    },
    {
      role: "Treasurer",
      name: "Rtr. Sahil Karadbhajne",
      photo: treasurer,
      description:
        "Driving financial accountability and building a sustainable foundation for impactful service.",
      message:
        "As Treasurer, my vision is to secure a financially strong and sustainable club through effective budgeting and responsible resource management. By maintaining transparent financial practices, we ensure every project has the support needed to create lasting community impact.",
    },
    {
      role: "International Services",
      name: "Rtr. Tejasvi Jadhao",
      photo: international,
      description:
        "Fostering global partnerships, cross-cultural collaboration, and meaningful youth development through impactful international service",
      message:
        "As International Service Director, my role is to strengthen the club’s international presence by building meaningful collaborations, coordinating global service initiatives, and encouraging cultural exchange. I aim to create opportunities where members can connect, learn, serve, and grow with a broader global perspective.",
    },
    {
      role: "Professional Services",
      name: "Rtr. Rutvika Kamarkar",
      photo: professional,
      description:
        "Fostering professional growth and unlocking future career opportunities.",
      message:
        "As Professional Services Director, I am committed to enhancing employability, communication, and leadership skills. Through curated workshops and corporate networking, we will empower members to confidently navigate their personal and professional journeys.",
    },
    {
      role: "Club Services Director",
      name: "Rtr. Aditya Tekade",
      photo: clubService,
      description:
        "Fostering internal unity, cultivating a vibrant club culture, and nurturing lifelong fellowship",
      message:
        "As Club Services Director, I am dedicated to creating a strong sense of belonging through innovative events and team-building activities. By encouraging active participation, we will build a supportive community that inspires collective success.",
    },
    {
      role: "Community Services (Medical)",
      name: "Rtr. Rushikesh Totade",
      photo: communityMedical,
      description:
        "Healing communities and delivering accessible medical support.",
      message:
        "As Community Service Director (Medical), I aim to bridge the gap between healthcare resources and those in need. By organizing impactful medical camps, blood drives, and awareness campaigns, we will inspire positive community well-being.",
    },
    {
      role: "Community Services (Non-Medical)",
      name: "Rtr. Sujal Zalke",
      photo: communityNonMedical,
      description:
        "Uplifting society through education, donation drives, and grassroots action.",
      message:
        "Non-Medical Community Service focuses on social upliftment through drives, awareness, education, and grassroots action that creates visible change in society.",
    },
    {
      role: "Foundation Chair",
      name: "Rtr. Vaishnavi Dhuriya",
      photo: foundation,
      description:
        "Securing the future through grants, fundraising, and Rotary Foundation goals.",
      message:
        "Honored to leverage my experience to drive collective service and sustainable community growth. My goal is to inspire members to execute purposeful projects, leaving a lasting legacy of impactful, compassionate change.",
    },
    {
      role: "Public Image Chair",
      name: "Rtr. Neha Kotalwar",
      photo: publicImage,
      description:
        "Amplifying our collective voice, shaping digital brand identity, and showcasing transformative community impact.",
      message:
        "As Public Image Chair, I am dedicated to presenting every initiative with creativity and consistency. By blending compelling storytelling with modern design, we will elevate our digital footprint and maximize our audience reach.",
    },
    {
      role: "Membership Chair",
      name: "Rtr. Nandini Pawar",
      photo: membership,
      description:
        "Strengthening club foundations through inclusivity, meaningful engagement, and sustainable member retention",
      message:
        "As Membership Chair, my commitment is to create a welcoming environment where every member feels valued. Through structured mentorship and engagement initiatives, we will empower individuals to build leadership qualities and lasting connections.",
    },
  ];

  const handleFlip = (name) => {
    setFlippedCard((current) => (current === name ? null : name));
  };

  const handleKeyFlip = (event, name) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFlip(name);
    }
  };

  return (
    <div className="about-page-royal">
      <HeroBanner
        title="Who We Are"
        subtitle="Leadership • Service • Social Impact"
        videoSrc="/videos/about.mp4"
      />

      <section className="reactive-about-section">
        <div className="ornate-header-container">
          <div className="ornate-header">
            <h2>About Rotaract Club of YCCE</h2>
          </div>
        </div>

        <div className="intro-section">
          <div className="intro-seal">
            <img src={rajmudra10Years} alt="Celebrating 10 Glorious Years" />
          </div>

          <div className="vertical-divider"></div>

          <div className="intro-text-column">
            <p>
              Welcome to the Rotaract Club of YCCE (ACT–YCCE) — a space where
              purpose meets passion and people come together to create meaningful
              change through service and leadership. Since our charter in 2015,
              we’ve grown into one of the most vibrant and impactful
              institution-based clubs of Rotary International District 3030,
              proudly recognized as the Golden Club of 3030 for RIY 2024–25.
            </p>

            <p>
              Driven by innovation, inclusiveness, and teamwork, RAC YCCE
              believes that every small action can create a ripple of lasting
              impact. From community service initiatives and donation drives to
              leadership programs and cultural events, our projects are designed
              to uplift communities, empower youth, and build a better tomorrow.
            </p>

            <p>
              With every project, partnership, and experience, we continue to
              grow stronger — not just as a club, but as a family with a shared
              vision of Service Above Self.
            </p>
          </div>
        </div>

        <div className="royal-cards-container">
          <div className="royal-card">
            <div className="royal-card-inner">
              <div className="royal-card-text">
                <h3>Our Theme — Shiv Rajmudra</h3>
                <p>
                  The theme of Rotaract Club of YCCE for this year is Shiv
                  Rajmudra — a symbol of courage, leadership, vision, and
                  responsibility. Inspired by the ideals of Chhatrapati Shivaji
                  Maharaj, we aim to walk on the path of selfless service,
                  strong administration, people-centric leadership, and fearless
                  action. This theme reminds us that true leadership is not just
                  about holding a position, but about creating impact with
                  discipline, dignity, and purpose.
                </p>
              </div>

              <div className="royal-card-image">
                <img
                  src={shivaji}
                  alt="Chhatrapati Shivaji Maharaj with Rajmudra"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="royal-card">
            <div className="royal-card-inner">
              <div className="royal-card-text">
                <h3>Our Parent Club</h3>
                <p>
                  Rotaract Club of YCCE is proudly sponsored by our parent
                  Rotary Club, Rotary Club of Nagpur Downtown, led by Rtn.
                  Chandrakant Arya. Their guidance, support, and strong Rotary
                  values continue to inspire us in strengthening service,
                  leadership, and community impact through every initiative we
                  undertake.
                </p>
              </div>

              <div className="royal-card-image">
                <img
                  src={parentClub}
                  alt="Rotary Club of Nagpur Downtown"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="royal-card">
            <div className="royal-card-inner">
              <div className="royal-card-text">
                <h3>Our Charter and Legacy</h3>
                <p>
                  Rotaract Club of YCCE was chartered on 26 February 2015. Since
                  then, the club has grown with a strong commitment to service,
                  fellowship, leadership, and youth empowerment. As we proudly
                  add our Charter Certificate, we celebrate the successful
                  completion of 10 glorious years of Rotaract excellence,
                  impactful projects, dedicated members, and a legacy that
                  continues to grow stronger every year.
                </p>

                <div className="club-id-tag">Club ID: 92361</div>
              </div>

              <div className="royal-card-image">
                <img
                  src={charter}
                  alt="Rotaract YCCE Charter Certificate"
                  className="charter-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leaders-magazine-section">
        <div className="leadership-heading">
          <span>✦ Leadership Messages ✦</span>
        </div>

        <div className="magazine-card">
          <div className="mag-content">
            <h4 className="mag-subtitle">FROM THE</h4>
            <h2 className="mag-title">President</h2>
            <div className="mag-divider-star">✦</div>

            <p>
             As President of the Rotaract Club of YCCE, I believe real growth begins when we step beyond comfort zones and challenge conventional thinking. This tenure has taught us to face rejection, setbacks, and uncertainty with resilience, teamwork, and a stronger will to create impact.

            </p>

            <p>
              Our focus has always been to do things differently, empower young leaders, serve the community, and turn ideas into meaningful action. None of this would be possible without our passionate members, who continue to transform vision into reality.
            </p>
            <p>
             As we move forward, we remain committed to building opportunities, inspiring positive change, and leaving behind a legacy of service, leadership, and lasting impact.
            </p>

            <blockquote className="mag-quote">
              Leadership is not about being in charge.
              <br />
              It is about taking care of those in your charge.
            </blockquote>

            <div className="mag-author">
              <h3>RTR. VANSH KHOJRE</h3>
              <h4>
                PRESIDENT
                <br />
                2025-26
              </h4>
            </div>
          </div>

          <div className="mag-image-container">
            <img src={president} alt="President Vansh Khojre" loading="lazy" />
          </div>
        </div>

        <div className="magazine-card reverse">
          <div className="mag-content">
          <h4 className="mag-subtitle">FROM THE</h4>
          <h2 className="mag-title">Secretary</h2>
          <div className="mag-divider-star">✦</div>

          <p>
            I am Rtr. Soham Nerkar, and Rotaract Club of YCCE has always felt like
            a family to me. Serving as General Secretary for 2025–26 has been a
            transformative journey filled with challenges, learning, and unforgettable
            memories.
          </p>

          <p>
            Taking responsibility midway through the tenure pushed me beyond my comfort
            zone and taught me adaptability, teamwork, and perseverance. My vision was
            to help build a stronger, more connected, and future-ready club through
            systems and initiatives that continue to benefit future Rotaractors.
          </p>

          <p>
            I am grateful to my team, members, and especially our President, Rtr. Vansh
            Khojre, for their trust and support. Rotaract helped me grow from someone
            who stayed in the background into someone ready to take responsibility and
            serve with confidence.
          </p>

          <blockquote className="mag-quote">
            Administrative excellence is not a background task;
            <br />
            it is the stage upon which leadership performs.
          </blockquote>

          <div className="mag-author">
            <h3>RTR. SOHAM NERKAR</h3>
            <h4>
              GENERAL SECRETARY
              <br />
              2025-26
            </h4>
          </div>
        </div>

          <div className="mag-image-container">
            <img
              src={secretary}
              alt="General Secretary Soham Nerkar"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="reactive-team-section">
        <div className="ornate-header-container">
          <div className="ornate-header">
            <h2>Board of Directors</h2>
          </div>
        </div>

        <div className="reactive-team-grid">
          {team.map((member, index) => (
  <div
    className={`royal-profile-card ${
      flippedCard === member.name ? "is-flipped" : ""
    }`}
    key={member.name}
    role="button"
    tabIndex={0}
    aria-label={`View message from ${member.name}`}
    onClick={() => handleFlip(member.name)}
    onKeyDown={(event) => handleKeyFlip(event, member.name)}
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <div className="royal-profile-flipper">
      <div className="royal-profile-face royal-profile-front">
        <div className="profile-image-wrapper">
          <img
            src={member.photo}
            alt={member.name}
            className="profile-img"
            loading="lazy"
          />
          <span className="flip-hint">Tap to view message</span>
        </div>

        <div className="profile-content">
          <h3 className="profile-role">{member.role}</h3>
          <p className="profile-name">{member.name}</p>
          <p className="profile-tagline">{member.description}</p>
        </div>
      </div>

      <div className="royal-profile-face royal-profile-back">
        <p className="back-label">Message from</p>
        <h3>{member.role}</h3>
        <h4>{member.name}</h4>
        <p>{member.message || "Message will be updated soon."}</p>
        <span>Tap again to return</span>
      </div>
    </div>
  </div>
))}
        </div>
      </section>
    </div>
  );
}

export default About;
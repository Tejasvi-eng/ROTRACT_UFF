import React from "react";
import HeroBanner from "../components/HeroBanner";
import "./About.css";

/* Team Images */
import president from "../assets/team/president.jpg";
import vicePresident from "../assets/team/vice-president.jpg";
import secretary from "../assets/team/general-secretary.jpg";
import treasurer from "../assets/team/treasurer.jpg";
import sergeant from "../assets/team/sergeant.jpg";
import international from "../assets/team/international.jpg";
import professional from "../assets/team/professional.jpg";
import clubService from "../assets/team/club-service.jpg";
import communityMedical from "../assets/team/community-medical.jpg";
import communityNonMedical from "../assets/team/community-non-medical.jpg";
import vocational from "../assets/team/vocational.jpg";
import pro from "../assets/team/pro.jpg";
import foundation from "../assets/team/foundation.jpg";
import publicImage from "../assets/team/public-image.jpg";
import membership from "../assets/team/membership.jpg";

function About() {
  const team = [
    { role: "President", name: "Rtr. Vansh Khojre", photo: president, description: "Leading with vision, empowering the team, and turning ideas into impactful realities." },
    { role: "Vice President", name: "Rtr. Aditya Chafale", photo: vicePresident, description: "The strategic force driving initiatives and supporting the club's core mission." },
    { role: "General Secretary", name: "Rtr. Soham Nerkar", photo: secretary, description: "The backbone of operations, ensuring seamless communication and execution." },
    { role: "Treasurer", name: "Rtr. Sahil Karadbhajne", photo: treasurer, description: "Managing resources with precision to fuel our community projects." },
    { role: "International Services", name: "Rtr. Tejasvi Jadhao", photo: international, description: "Bridging borders and fostering global connections for worldwide impact." },
    { role: "Professional Services", name: "Rtr. Rutvika Kamarkar", photo: professional, description: "Cultivating leadership, career growth, and skill-building for our members." },
    { role: "Club Services Director", name: "Rtr. Aditya Tekade", photo: clubService, description: "Strengthening bonds, organizing fellowships, and keeping the club spirit alive." },
    { role: "Community Services (Medical)", name: "Rtr. Rushikesh Totade", photo: communityMedical, description: "Championing health, wellness, and medical support for those in need." },
    { role: "Community Services (Non-Medical)", name: "Rtr. Sujal Zalke", photo: communityNonMedical, description: "Uplifting society through education, donation drives, and grassroots action." },
    { role: "Public Relation Officer", name: "Rtr. Ojas Deshmukh", photo: pro, description: "The voice of the club, building relationships and amplifying our message." },
    { role: "Foundation Chair", name: "Rtr. Vaishnavi Dhuriya", photo: foundation, description: "Securing the future through grants, fundraising, and Rotary Foundation goals." },
    { role: "Public Image Chair", name: "Rtr. Neha Kotalwar", photo: publicImage, description: "Crafting the visual identity and showcasing our impact to the world." },
    { role: "Membership Chair", name: "Rtr. Nandini Pawar", photo: membership, description: "Welcoming new changemakers and nurturing a growing, passionate family." },
  ];

  return (
    <div className="about-page-light">
      <HeroBanner
        title="Who Are We"
        subtitle="Leadership • Service • Social Impact"
        videoSrc="/videos/about.mp4"
      />

      <div className="bg-orb pink-orb-top"></div>
      <div className="bg-orb pink-orb-bottom"></div>

      <section className="reactive-about-section">
        <div className="glass-panel">
          <h2>About Rotaract Club of YCCE</h2>
          <div className="text-content">
            <p>
              Welcome to the Rotaract Club of YCCE (ACT–YCCE) — a space where purpose meets passion and people come together to create meaningful change through service and leadership. Since our charter in 2015, we’ve grown into one of the most vibrant and impactful institution-based clubs of Rotary International District 3030, proudly recognized as the Golden Club of 3030 for RIY 2024–25.
            </p>
            <p>
              Driven by innovation, inclusiveness, and teamwork, RAC YCCE believes that every small action can create a ripple of lasting impact. From community service initiatives and donation drives to professional development sessions, leadership workshops, and cultural collaborations, every project we undertake reflects our spirit of growth through service and our commitment to making a difference.
            </p>
            <p>
              We are more than just a club — we are a family of changemakers, united by the will to learn, lead, and serve. Through leadership opportunities, impactful projects, and professional growth initiatives, we empower our members to become confident leaders and compassionate citizens, ready to create lasting impact within and beyond the campus.
            </p>
            <p className="highlight-tag">
              Together we rise — one initiative, one idea, one impact at a time. <br/>
              <strong>#ActToImpact</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="reactive-team-section">
        <div className="section-header">
          <h2>Board of Directors</h2>
          <div className="header-underline"></div>
        </div>

        <div className="reactive-team-grid">
          {team.map((member, index) => (
            <div 
              className="glass-profile-card" 
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="glass-card-inner">
                <div className="profile-image-wrapper">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="profile-img"
                    loading="lazy"
                  />
                </div>
                <div className="profile-content">
                  <h3 className="profile-role">{member.role}</h3>
                  <p className="profile-name">{member.name}</p>
                  {/* The new interesting description goes here */}
                  <p className="profile-tagline">{member.description}</p>
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
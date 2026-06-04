import HeroBanner from "../components/HeroBanner";

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
    { role: "President", name: "Rtr. Vansh Khojre", photo: president },
    { role: "Vice President", name: "Rtr. Aditya Chafale", photo: vicePresident },
    { role: "General Secretary", name: "Rtr. Soham Nerkar", photo: secretary },
    { role: "Treasurer", name: "Rtr. Sahil Karadbhajne", photo: treasurer },
    

    { role: "International Services Director", name: "Rtr. Tejasvi Jadhao", photo: international },
    { role: "Professional Services Director", name: "Rtr. Rutvika Kamarkar", photo: professional },
    { role: "Club Services Director", name: "Rtr. Aditya Tekade", photo: clubService },

    { role: "Community Services Director (Medical)", name: "Rtr. Rushikesh Totade", photo: communityMedical },
    { role: "Community Services Director (Non-Medical)", name: "Rtr. Sujal Zalke", photo: communityNonMedical },

   
    { role: "Public Relation Officer", name: "Rtr. Ojas Deshmukh", photo: pro },

    { role: "Foundation Chair", name: "Rtr. Vaishnavi Dhuriya", photo: foundation },
    { role: "Public Image Chair", name: "Rtr. Neha Kotalwar", photo: publicImage },
    { role: "Membership Chair", name: "Rtr. Nandini Pawar", photo: membership },
  ];

  return (
    <>
      {/* Hero Video Banner */}
      <HeroBanner
        title="Who We Are"
        subtitle="Leadership • Service • Social Impact"
        videoSrc="/videos/about.mp4"
      />

      {/* About Section */}
      <section className="section">
        <h2>About Rotaract Club of YCCE</h2>
        <p>
          Welcome to the Rotaract Club of YCCE (ACT–YCCE) — a space where purpose meets passion and people come together to create meaningful change through service and leadership. Since our charter in 2015, we’ve grown into one of the most vibrant and impactful institution-based clubs of Rotary International District 3030, proudly recognized as the Golden Club of 3030 for RIY 2024–25.
          Driven by innovation, inclusiveness, and teamwork, RAC YCCE believes that every small action can create a ripple of lasting impact. From community service initiatives and donation drives to professional development sessions, leadership workshops, and cultural collaborations, every project we undertake reflects our spirit of growth through service and our commitment to making a difference.
          We are more than just a club — we are a family of changemakers, united by the will to learn, lead, and serve. Through leadership opportunities, impactful projects, and professional growth initiatives, we empower our members to become confident leaders and compassionate citizens, ready to create lasting impact within and beyond the campus.
          Together we rise — one initiative, one idea, one impact at a time. 
          #ActToImpact
        </p>
      </section>

      {/* Team Section */}
      <section className="section light">
        <h2>Board of Directors</h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
              />
              <h3>{member.role}</h3>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;

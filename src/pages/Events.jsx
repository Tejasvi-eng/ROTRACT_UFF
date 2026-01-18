import HeroBanner from "../components/HeroBanner";

function Events() {
  const events = [
    {
      title: "Blood Donation Camp",
      description:
        "A life-saving initiative encouraging voluntary blood donation among youth.",
    },
    {
      title: "Tree Plantation Drive",
      description:
        "An environmental initiative aimed at promoting greenery and sustainability.",
    },
    {
      title: "Leadership Development Workshop",
      description:
        "A workshop focused on enhancing leadership and professional skills.",
    },
    {
      title: "Cleanliness Drive",
      description:
        "Community cleanliness drive promoting hygiene and civic responsibility.",
    },
    {
      title: "Health Awareness Camp",
      description:
        "An awareness program focusing on preventive healthcare and wellness.",
    },
    {
      title: "Women Empowerment Talk",
      description:
        "A session highlighting women leadership and empowerment initiatives.",
    },
    {
      title: "Digital Literacy Program",
      description:
        "Helping communities understand basic digital tools and online safety.",
    },
    {
      title: "Career Guidance Seminar",
      description:
        "Guidance session for students on career planning and opportunities.",
    },
    {
      title: "Road Safety Awareness",
      description:
        "Promoting responsible driving and road safety practices.",
    },
    {
      title: "Mental Health Awareness",
      description:
        "Session emphasizing mental well-being and stress management.",
    },
    {
      title: "Social Media for Good",
      description:
        "Using digital platforms to create positive social impact.",
    },
    {
      title: "Fundraising Drive",
      description:
        "Fundraising initiative to support community welfare projects.",
    },
    {
      title: "Education Support Program",
      description:
        "Supporting underprivileged students through educational resources.",
    },
    {
      title: "Disaster Relief Activity",
      description:
        "Providing relief materials and support during emergencies.",
    },
    {
      title: "Youth Leadership Meet",
      description:
        "A networking and leadership meet for young professionals.",
    },
    {
      title: "Skill Development Workshop",
      description:
        "Hands-on skill development sessions for personal growth.",
    },
    {
      title: "Community Outreach Program",
      description:
        "Engaging with local communities to understand and address issues.",
    },
    {
      title: "Environmental Awareness Talk",
      description:
        "Educating youth on environmental challenges and solutions.",
    },
    {
      title: "Cultural Exchange Program",
      description:
        "Promoting cultural understanding and fellowship.",
    },
    {
      title: "Annual Rotaract Conference",
      description:
        "A flagship event bringing Rotaractors together for collaboration.",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        title="Creating Impact"
        subtitle="Our Events & Initiatives"
        buttonText="Join Us"
        buttonLink="/join-us"
      />

      {/* Events Section */}
      <section className="section">
        <h2>Our Events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card-lg" key={index}>
              <div className="event-banner"></div>

              <h3>{event.title}</h3>
              <p>{event.description}</p>

              <div className="event-media">
                <span>Photos</span>
                <span>Videos</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;

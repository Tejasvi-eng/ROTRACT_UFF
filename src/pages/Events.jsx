import HeroBanner from "../components/HeroBanner";

/* Hero Video */
import eventsVideo from "../assets/videos/events.mp4";

/* Event Images */
import event1 from "../assets/events/event1.jpg";
import event2 from "../assets/events/event2.jpg";
import event3 from "../assets/events/event3.jpg";
import event4 from "../assets/events/event4.jpg";
import event5 from "../assets/events/event5.jpg";
import event6 from "../assets/events/event6.jpg";
import event7 from "../assets/events/event7.jpg";
import event8 from "../assets/events/event8.jpg";
import event9 from "../assets/events/event9.jpg";
import event10 from "../assets/events/event10.jpg";
import event11 from "../assets/events/event11.jpg";
import event12 from "../assets/events/event12.jpg";
import event13 from "../assets/events/event13.jpg";
import event14 from "../assets/events/event14.jpg";
import event15 from "../assets/events/event15.jpg";
import event16 from "../assets/events/event16.jpg";
import event17 from "../assets/events/event17.jpg";
import event18 from "../assets/events/event18.jpg";
import event19 from "../assets/events/event19.jpg";
import event20 from "../assets/events/event20.jpg";

function Events() {
  const events = [
    {
      title: "Shubharambha",
      description:
        "Shubharambh marks a new journey for Rotaract Club of YCCE!  We begin this tenure with vision and commitment to serve.  Here’s to impact, collaboration, and service ahead!!!  ",
      image: event1,
      link: "https://example.com/report/shubharambha",
    },
    {
      title: "Fellowships",
      description:
        "The Beginning of a New Chapter  Stepping into our first fellowship, filled with ideas, learning, and purpose. Grateful for the opportunity to grow, connect, and create impact with passionate minds. ",
      image: event2,
      link: "https://example.com/report/fellowships",
    },
    {
      title: "Tarunpatra",
      description:
        "Through our Banner Donation Drive in slum areas, we aimed to bring dignity and support to communities in need. ",
      image: event3,
      link: "https://example.com/report/tarunpatra",
    },
    {
      title: "Thread of Honour",
      description:
        "A small gesture, a big impact!  Celebrating Raksha Bandhan with gratitude for the unsung heroes of our campus.",
      image: event4,
      link: "https://example.com/report/thread-of-honour",
    },
    {
      title: "Ek Vadal Bhartach",
      description:
        "Celebrating freedom through unity, service & patriotism!  Grateful to have volunteered on this Independence Day. ",
      image: event5,
      link: "https://example.com/report/ek-vadal-bhartach",
    },
    {
      title: "Sports Fellowship",
      description:
        "Building Bonds Beyond Boundaries! Energy, enthusiasm, and endless smiles filled the day. ",
      image: event6,
      link: "https://example.com/report/sports-fellowship",
    },
    {
      title: "Azadi Ka Safar",
      description:
        "Reliving the glorious journey of India’s independence through knowledge and curiosity!",
      image: event7,
      link: "https://example.com/report/azadi-ka-safar",
    },
    {
      title: "Regional Training Program",
      description:
        "A power-packed session that taught us how the club works and how every effort creates impact. ",
      image: event8,
      link: "https://example.com/report/regional-training-program",
    },
    {
      title: "Nirmalya 3.0",
      description:
        "Devotion to Conservation Turning sacred offerings into action for a cleaner, greener environment. ",
      image: event9,
      link: "https://example.com/report/nirmalya-3",
    },
    {
      title: "Nature Trail Visit",
      description:
        "Gorewada  Green Steps for a Better Future! Fresh air, wildlife, and stronger bonds. ",
      image: event10,
      link: "https://example.com/report/nature-trail-visit",
    },
    {
      title: "Raas Garba 2025",
      description:
        "Beats thundered, colors sparkled, and every step united the crowd in rhythm and joy. ",
      image: event11,
      link: "https://example.com/report/raas-garba-2025",
    },
    {
      title: "Small Act, Big Impact",
      description:
        "A session highlighting how even the smallest actions can bring the biggest change! ",
      image: event12,
      link: "https://example.com/report/small-act-big-impact",
    },
    {
      title: "Tour de Memories 2025",
      description:
        "Laughter, cheers, and endless smiles! Rotaractors shared favorite R.I.D.E. moments. ",
      image: event13,
      link: "https://example.com/report/tour-de-memories-2025",
    },
    {
      title: "Aashayein",
      description:
        "Regional Diwali Celebration Bringing clubs together for celebration and community service.",
      image: event14,
      link: "https://example.com/report/aashayein",
    },
    {
      title: "Jashn-e-Diwali",
      description:
        "Celebrated with laughter, music, vibrant Diwali spirit, and unforgettable memories. ",
      image: event15,
      link: "https://shorturl.at/4XUzD",
    },
    {
      title: "READRISE",
      description:
        "District Literacy Initiative with book donation drives and storytelling sessions. ",
      image: event16,
      link: "https://example.com/report/readrise",
    },
    {
      title: "Bedsheet Donation Drive",
      description:
        "A small effort, a big difference. Sharing warmth, care, and comfort. ",
      image: event17,
      link: "https://example.com/report/bedsheet-donation-drive",
    },
    {
      title: "SANITARY DONATION DRIVE",
      description:
        "Providing underprivileged women and girls with essential hygiene products.",
      image: event18,
      link: "https://example.com/report/sanitary-donation-drive",
    },
    {
      title: "Anna Dhanam",
      description:
        "A noble act of feeding the hungry with compassion and service. ",
      image: event19,
      link: "https://example.com/report/anna-dhanam",
    },
    {
      title: "Club Presentation",
      description:
        "A journey built with teamwork, laughter, dedication, and unforgettable memories. ",
      image: event20,
      link: "https://example.com/report/club-presentation",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Creating Impact"
        subtitle="Our Events & Initiatives"
        videoSrc={eventsVideo}
      />

      <section className="section">
        <h2>Our Events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div className="event-card-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-banner-img"
                />

                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
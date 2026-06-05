import React from "react";
import HeroBanner from "../components/HeroBanner";
import "./Events.css";

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
    { title: "Shubharambha", description: "Shubharambh marks a new journey for Rotaract Club of YCCE! We begin this tenure with vision and commitment to serve.", image: event1 },
    { title: "Fellowships", description: "Stepping into our first fellowship, filled with ideas, learning, and purpose.", image: event2 },
    { title: "Tarunpatra", description: "Through our Banner Donation Drive in slum areas, we aimed to bring dignity and support to communities in need.", image: event3 },
    { title: "Thread of Honour", description: "A small gesture, a big impact! Celebrating Raksha Bandhan with gratitude for the unsung heroes of our campus.", image: event4 },
    { title: "Ek Vadal Bhartach", description: "Celebrating freedom through unity, service & patriotism! Grateful to have volunteered on this Independence Day.", image: event5 },
    { title: "Sports Fellowship", description: "Building Bonds Beyond Boundaries! Energy, enthusiasm, and endless smiles filled the day.", image: event6 },
    { title: "Azadi Ka Safar", description: "Reliving the glorious journey of India’s independence through knowledge and curiosity!", image: event7 },
    { title: "Regional Training Program", description: "A power-packed session that taught us how the club works and how every effort creates impact.", image: event8 },
    { title: "Nirmalya 3.0", description: "Devotion to Conservation. Turning sacred offerings into action for a cleaner, greener environment.", image: event9 },
    { title: "Nature Trail Visit", description: "Gorewada Green Steps for a Better Future! Fresh air, wildlife, and stronger bonds.", image: event10 },
    { title: "Raas Garba 2025", description: "Beats thundered, colors sparkled, and every step united the crowd in rhythm and joy.", image: event11 },
    { title: "Small Act, Big Impact", description: "A session highlighting how even the smallest actions can bring the biggest change!", image: event12 },
    { title: "Tour de Memories 2025", description: "Laughter, cheers, and endless smiles! Rotaractors shared favorite R.I.D.E. moments.", image: event13 },
    { title: "Aashayein", description: "Regional Diwali Celebration Bringing clubs together for celebration and community service.", image: event14 },
    { title: "Jashn-e-Diwali", description: "Celebrated with laughter, music, vibrant Diwali spirit, and unforgettable memories.", image: event15 },
    { title: "READRISE", description: "District Literacy Initiative with book donation drives and storytelling sessions.", image: event16 },
    { title: "Bedsheet Donation Drive", description: "A small effort, a big difference. Sharing warmth, care, and comfort.", image: event17 },
    { title: "SANITARY DONATION DRIVE", description: "Providing underprivileged women and girls with essential hygiene products.", image: event18 },
    { title: "Anna Dhanam", description: "A noble act of feeding the hungry with compassion and service.", image: event19 },
    { title: "Club Presentation", description: "A journey built with teamwork, laughter, dedication, and unforgettable memories.", image: event20 },
  ];

  return (
    <div className="events-page-light">
      <HeroBanner
        title="Creating Impact"
        subtitle="Our Events & Initiatives"
        videoSrc={eventsVideo}
      />

      <section className="reactive-events-section">
        
        {/* Decorative Background Orbs */}
        <div className="bg-orb pink-orb-left"></div>
        <div className="bg-orb pink-orb-right"></div>

        {/* Dynamic Reactive Grid */}
        <div className="reactive-events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className="glass-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="glass-card-inner">
                <div className="glass-image-wrapper">
                  <img src={event.image} alt={event.title} className="glass-img" />
                </div>
                
                <div className="glass-content">
                  <h3 className="glass-title">{event.title}</h3>
                  <p className="glass-description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
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
    { title: "Shubharambha", description: "Shubharambh marks a new journey for Rotaract Club of YCCE! ✨ We begin this tenure with vision and commitment to serve. 🚀Here’s to impact, collaboration, and service ahead!!!🤝", image: event1 },
    { title: "Fellowships ", description: "✨ The Beginning of a New Chapter ✨ Stepping into our first fellowship, filled with ideas, learning, and purpose. Grateful for the opportunity to grow, connect, and create impact with passionate minds. Every step counts and this one feels special. 💫", image: event2 },
    { title: "Tarunpatra", description: "Through our Banner Donation Drive in slum areas, we aimed to bring dignity and support to communities in need. 🤝💙 A small step towards creating a bigger impact. 🌍", image: event3 },
    { title: "Thread of Honour", description: "A small gesture, a big impact! 💛 Celebrating Raksha Bandhan with gratitude for the unsung heroes of our campus. 🤝✨", image: event4 },
    { title: "Ek Vadal Bhartach", description: "Celebrating freedom through unity, service & patriotism!✨ Grateful to have volunteered on this Independence Day and be part of something truly impactful. 💙", image: event5 },
    { title: "Sports Fellowship ", description: "Building Bonds Beyond Boundaries! Energy, enthusiasm, and endless smiles filled the day as Rotaract Clubs of GHRCACS and YCCE came together for a friendly sports fellowship! 🏅 From teamwork to sportsmanship, every match strengthened our bond and reminded us that friendship grows stronger when we play together. 💪✨", image: event6 },
    { title: "✨Azadi Ka Safar✨", description: "Reliving the glorious journey of India’s independence through knowledge 📚and curiosity!🇮🇳 Our Quiz Competition was a celebration of history, courage, and the undying spirit of freedom🕊🔥. Kudos to all the participants for making it impactful🤝.", image: event7 },
    { title: "Regional training program ", description: " A power-packed session that taught us how the club works, how points are divided, and how every small effort creates a big impact 💡. The learnings will surely guide us to create greater change together 🙌💪", image: event8 },
    { title: "Nirmalya 3.0", description: "Devotion to Conservation ♻ Collected sacred offerings and flowers, turning devotion into action for a cleaner, greener environment. 🌸💚 🤝 Together, small acts of care can create lasting change. 🌍✨.", image: event9 },
    { title: "Nature Trail Visit", description: "Gorewada 🌿 Green Steps for a Better Future! On September 20, Rotaract YCCE spent a refreshing morning on the Gorewada Nature Trail, enjoying fresh air, spotting wildlife, and strengthening our bonds. 🌏💚", image: event10 },
    { title: "Raas Garba 2025", description: " Jaripatka at its festive best! Beats thundered, colors sparkled, and every step united the crowd in rhythm and joy. 💃🎶 Pure energy, endless smiles, and unforgettable vibes — a night of dance, culture, and togetherness! ❤️", image: event11 },
    { title: "Small Act, Big Impact", description: "A session that highlighted how even the smallest actions can bring the biggest change! 🌍 From fun activities like Rapid Fire Quiz, Impact Chain, and Myth Bust to inspiring talks on Sustainable Development, the event was filled with learning and energy. 💚", image: event12 },
    { title: "our de Memories 2025", description: "Laughter, cheers, and endless smiles! 💫 Rotaractors shared favorite R.I.D.E. moments, photos, and tips, passing the memory chain forward. 🤝📸 ", image: event13 },
    { title: "Aashayein", description: " Regional Diwali Celebration 🎇 On 16th October 2025, Rotaract Club of YCCE hosted Aashayein along with co-hosts — RAC JDCOEM, RAC West Illumin8, RAC GHRUA, and RAC GHRSTU, with participation from RAC VSPM Physio and RAC DMPDSVM, at Shri Vivekanand Primary School, Jagruti Colony, Nagpur.", image: event14 },
    { title: "Jashn-e-Diwali", description: "The Rotaract Club of YCCE celebrated Jashn-e-Diwali with laughter, music, and vibrant Diwali spirit. 💫 Fun games, joyful vibes, and radiant smiles lit up the day — because festivals shine brightest when celebrated with our Rotaract family. 🩷🌠 ", image: event15 },
    { title: "Fellowship", description: "An evening filled with laughter, games, and memories Rotaract Fellowship brought members together to bond, share, and celebrate the true spirit of fellowship. Moments that strengthened friendships and created lasting connections.✨", image: event16 },
    { title: "READRISE", description: "READRISE District Literacy Initiative Successfully Conducted! ✨ Our club proudly organized a meaningful book donation drive and storytelling session, spreading smiles and inspiring young minds to read. 💛Together, we lit a spark of literacy and joy in our community! 🌟", image: event17 },
    { title: "Bedsheet Donation Drive", description: "Successfully Completed✨ A small effort, a big difference 🤍 Through this drive, we shared warmth, care, and comfort with those who need it the most. Proud of our members for turning kindness into action. 💫 Together, we continue to Act to Impact🌍🤝", image: event18 },
    { title: "Club Presentation", description: "This journey was built with emotions, teamwork, laughter, little chaos, and a lot of care turning moments into memories that will stay with us forever.", image: event19 },
    { title: "Anna Dhanam", description: "noble act of feeding the hungry. It is a gesture of service, compassion, and social responsibility.", image: event20 },
  ]
return (
    <>
      {/* Hero Video Banner */}
      <HeroBanner
        title="Creating Impact"
        subtitle="Our Events & Initiatives"
        videoSrc={eventsVideo}
      />

      {/* Events Section */}
      <section className="section">
        <h2>Our Events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card-lg" key={index}>
              <img
                src={event.image}
                alt={event.title}
                className="event-banner-img"
              />

              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;

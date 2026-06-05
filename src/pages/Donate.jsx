import HeroBanner from "../components/HeroBanner";

function Donate() {
return (
<> <HeroBanner
     title="Helping Hands"
     subtitle="Support Service • Support Change"
     videoSrc="/videos/donate.mp4"
   />

```
  <section className="section">
    <h2>Support Our Initiatives</h2>

    <p>
      Your contribution helps Rotaract Club of YCCE organize community
      service projects, leadership programs, and social impact initiatives.
      To make a donation, please use the payment options available through
      the form below.
    </p>

    <div className="donate-grid">
      <a
        href="https://forms.gle/TDwm7tKXgKQqqNiQA"
        target="_blank"
        rel="noopener noreferrer"
        className="donate-btn"
      >
        Make Payment
      </a>
    </div>
  </section>
</>

);
}

export default Donate;

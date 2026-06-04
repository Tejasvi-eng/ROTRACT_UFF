import HeroBanner from "../components/HeroBanner";

function Donate() {
  const payments = [
    { amount: 500, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=500&cu=INR" },
    { amount: 1000, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=1000&cu=INR" },
    { amount: 2000, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=2000&cu=INR" },
    { amount: 2500, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=2500&cu=INR" },
    { amount: 3000, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=3000&cu=INR" },
    { amount: 4000, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=4000&cu=INR" },
    { amount: 4500, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=4500&cu=INR" },
    { amount: 5000, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=5000&cu=INR" },
    { amount: 10000, link: "upi://pay?pa=9309282539@pthdfc&pn=Sahil%20Kailash%20Kardbhajne&am=10000&cu=INR" }
  ];

  return (
    <>
      {/* Hero Video Banner */}
      <HeroBanner
        title="Helping Hands"
        subtitle="Support Service • Support Change"
        videoSrc="/videos/donate.mp4"
      />

      {/* Donation Section */}
      <section className="section">
        <h2>Support Our Initiatives</h2>

        <p>
          Your contribution helps Rotaract Club of YCCE organize community
          service projects, leadership programs, and social impact initiatives.
          Choose a contribution amount below to support our work.
        </p>

        <div className="donate-grid">
          {payments.map((pay, index) => (
            <a
              key={index}
              href={pay.link}
              className="donate-btn"
            >
              Donate ₹{pay.amount}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Donate;

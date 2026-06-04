import HeroBanner from "../components/HeroBanner";

function Contact() {
  return (
    <>
      {/* Hero Video Banner */}
      <HeroBanner
        title="Reach Us"
        subtitle="Let’s Connect & Create Impact Together"
        buttonText="Connect Us"
        buttonLink="https://linktr.ee/rotaract_ycce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnjdgxK600z7yKih_d66QHmuO2Y_aSUEn2Nyj4VO02yKBYFQgA23931Gl3dck_aem_NaVHwasKdgCnZxZF2btAFg"
        videoSrc="/videos/contact.mp4"
      />

      {/* Contact Info Section */}
      <section className="section">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you! Whether you’re interested in joining
          Rotaract Club of YCCE, collaborating on projects, or simply learning
          more about our initiatives, feel free to connect with us.
        </p>

        <p>
          Follow us on social media, explore our work, and stay updated with
          our latest events and activities through our official links.
        </p>

        <a
          href="https://linktr.ee/rotaract_ycce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnjdgxK600z7yKih_d66QHmuO2Y_aSUEn2Nyj4VO02yKBYFQgA23931Gl3dck_aem_NaVHwasKdgCnZxZF2btAFg"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
          style={{ marginTop: "30px", display: "inline-block" }}
        >
          Connect Us
        </a>
      </section>
    </>
  );
}

export default Contact;

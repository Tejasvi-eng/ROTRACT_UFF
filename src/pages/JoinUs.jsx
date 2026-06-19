import HeroBanner from "../components/HeroBanner";

function Join() {
  return (
    <>
      <HeroBanner
        title="Become a Rotaractor"
        subtitle="Serve • Lead • Connect"
        videoSrc="/videos/about.mp4"
        buttonText="Fill Membership Form"
        buttonLink="https://forms.gle/WTx5Mwv4HCkWhYaw7"
      />
    </>
  );
}

export default Join;
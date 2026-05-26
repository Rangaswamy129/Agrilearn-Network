import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">

      <video
        className="about-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/Agriculturevideo.mp4" type="video/mp4" />
      </video>

      <div className="about-overlay">

        <h1>About Agriculture</h1>

        <section>
          <h2>🌾 Importance of Agriculture</h2>
          <p>
            Agriculture is one of the most important sectors in the world.
            It provides food, raw materials, and employment for millions of
            people. Farmers cultivate crops and raise livestock to meet the
            food demands of a growing population.
          </p>
        </section>

        <section>
          <h2>🚜 Modern Farming Technologies</h2>
          <p>
            Modern agriculture uses advanced technologies like drones,
            smart irrigation systems, AI-based crop monitoring, and
            automated machinery. These innovations help farmers improve
            productivity and reduce resource waste.
          </p>
        </section>

        <section>
          <h2>🌱 Sustainable Agriculture</h2>
          <p>
            Sustainable agriculture focuses on protecting the environment
            while maintaining productivity. Practices such as crop rotation,
            organic farming, and water conservation help ensure long-term
            agricultural success.
          </p>
        </section>

        <section>
          <h2>📊 Agriculture Statistics</h2>
          <p>
            Agriculture supports more than 50% of the global population
            directly or indirectly. It contributes significantly to
            economic growth and food security across the world.
          </p>
        </section>

        <section>
          <h2>👨‍🌾 Farmer Support</h2>
          <p>
            Platforms like AgriLearnNetwork aim to provide farmers with
            educational resources, market information, modern techniques,
            and digital tools that help improve farming efficiency and
            income.
          </p>
        </section>

      </div>

    </div>
  );
};

export default About;
import { useState, useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const slides = ["slide1", "slide2", "slide3"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 seconds for a premium cinematic layout pace

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`home-hero-viewport ${slides[current]}`}>
      
      
      {/* 1. Main Center-Left Giant Typography Block */}
      <div className="hero-main-content">
        <h1 className="hero-headline">
        
          <span className="text-effects-wrapper" data-text="farming medicine.">Welcome To Agrilearn Network.</span>
        </h1>
      </div>

      {/* 2. Bottom Informational Footer Grid Grouping */}
      <div className="hero-bottom-grid">
        
        <p className="hero-subtext">
          We unravel complex agriculture with optogenetics, chemistry, <br />
          and AI for smart cultivation and agricultural asset discovery.
        </p>

        {/* 3. Integrated Action Combo Capsule Button (Bottom Right) */}
        <div className="hero-action-capsule-wrapper">
          <button className="action-pill-main">
            Discover Our Platform
          </button>
          <button className="action-pill-arrow">
            →
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;
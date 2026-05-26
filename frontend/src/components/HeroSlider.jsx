import { useState, useEffect } from "react";
import "../styles/home.css";

const HeroSlider = ({ title, subtitle }) => {
  const [current, setCurrent] = useState(0);
  const slides = ["slide1", "slide2", "slide3"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`slider ${slides[current]}`}>
      <div className="overlay">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default HeroSlider;
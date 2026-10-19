import "./HeroSection.scss";
import { useState, useEffect } from "react";
import banner1 from "../../../Assets/Banners/Image-1.webp";
import banner2 from "../../../Assets/Banners/Image-2.webp";

const SLIDE_INTERVAL = 5000;

const slides = [
  {
    image: banner1,
    kicker: "Shahrukhz by Danube Properties",
    title: "SHAHRUKHZ",
    subtitle: "Premium Commercial Offices on Sheikh Zayed Road",
    description:
      "A signature 55-storey SRK-branded commercial tower. Premium office spaces for global businesses, innovators, and investors, starting from AED 1.9M.",
  },
  {
    image: banner2,
    kicker: "New Launch · Limited Availability",
    title: "SHEIKH ZAYED ROAD",
    subtitle: "Dubai’s First SRK-Branded Commercial Tower",
    description:
      "Register your interest in premium offices with a flexible 70/30 plan and 1% monthly payments after completion.",
  },
];

const heroStats = [
  { value: "55-Storey", label: "SRK-Branded Commercial Tower" },
  { value: "New Launch", label: "Limited Availability" },
  { value: "70/30", label: "1% Payment Plan" },
  { value: "AED 1.9M", label: "Starting Price" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-hero">
      <div className="overlay"></div>
      <div className="banner-container">
        {slides.map((item, index) => (
          <img
            key={index}
            className={`banner-image ${index === currentSlide ? "active" : ""}`}
            src={item.image}
            alt={`Shahrukhz by Danube — ${item.title}`}
          />
        ))}
      </div>

      <div className="hero-content">
        <span className="hero-kicker">{slide.kicker}</span>
        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-subtitle">{slide.subtitle}</p>
        <p className="hero-description">{slide.description}</p>
        <button className="btn btn-glass content-button" onClick={scrollToContact}>
          Register your interest
        </button>
      </div>

      <div className="pagination-container">
        {slides.map((_, index) => (
          <div
            key={`pagination-${index}`}
            className={`pagination-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            <div className="dot-indicator"></div>
            {index === currentSlide && (
              <div key={`filling-${currentSlide}`} className="filling-line"></div>
            )}
          </div>
        ))}
      </div>

      <div className="hero-stats">
        {heroStats.map((item) => (
          <div className="hero-stat" key={item.value}>
            <span className="hero-stat-value">{item.value}</span>
            <span className="hero-stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

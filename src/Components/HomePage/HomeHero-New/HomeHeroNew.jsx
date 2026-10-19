import { useState } from "react";
import "./HomeHeroNew.scss";
import bannerImageDesktop from "../../../Assets/Banners/Image-1.webp";
import bannerImageMobile from "../../../Assets/Banners/Image-2.webp";
import useIsMobile from "../../../Utils/useIsMobile";

export default function HomeHero() {
  const isMobile = useIsMobile(768);
  const [videoReady, setVideoReady] = useState(false);

  const placeholderSrc = isMobile ? bannerImageMobile : bannerImageDesktop;

  return (
    <div className="home-hero">
      <div className="overlay overlay--hero" aria-hidden="true"></div>
      <div className="banner-container">
        {/* Placeholder / preloader image - visible until video is ready */}
        <img
          src={placeholderSrc}
          alt="Azizi Jaddaf Beach Oasis - Al Jaddaf, Dubai"
          className={`banner-placeholder ${videoReady ? "hidden" : ""}`}
        />
        {/* <video
          className="banner-video"
          src={isMobile ? bannerVideo2 : bannerVideo1}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
        >
          <source src={isMobile ? bannerVideo2 : bannerVideo1} type="video/mp4" />
        </video> */}
      </div>
      
      {/* Content Text - Left Bottom */}
      <div className="hero-content-left">
        {/* <h1 className="content-title">
          AZIZI JADDAF BEACH OASIS
        </h1>
        <p className="content-description">
          Azizi Jaddaf Beach Oasis brings the beach lifestyle to the city — combining waterfront serenity with urban connectivity. Designed for those who want open views, relaxed living, and effortless access to Dubai's key destinations.
        </p>
        <p className="hero-price">
          Starting from AED <strong>2.09M</strong>
        </p>
        <p className="content-description content-description--small">
          At its heart lies a crystal-clear central beach, creating a resort-inspired setting where everyday life feels like a getaway. Enjoy modern architecture, curated amenities, and seamless connectivity just minutes from Downtown Dubai.
        </p> */}
        <button 
          className="btn btn-dark content-button" 
          onClick={() => {
            const contactSection = document.getElementById('contact-us');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Schedule Your Viewing
        </button>
      </div>
    </div>
  );
}
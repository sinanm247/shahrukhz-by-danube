import "./KeyFeaturesSection.scss";

const keyFeatures = [
  "Modern freehold studios, spacious one-bedroom apartments, and sophisticated penthouses",
  "Signature beach-style pool with world-class amenities",
  "Easy within walking distance to Al Jaddaf metro station",
  "Exceptional connectivity to Al Khail Road and Sheikh Zayed Road",
  "Surrounded by the city's key business and leisure destinations",
  "Top-tier finishes",
];

const amenities = [
  "Swimming pools for adults and kids",
  "Separate gyms for men and women",
  "Cinema hall",
  "Indoor children's play area",
  "Multipurpose hall",
  "Ample parking",
  "24/7 security",
];

export default function KeyFeaturesSection() {
  return (
    <section id="key-features" className="key-features-section section-container">
      <div className="features-amenities-split">
        {/* Left: Key Features */}
        <div className="features-col">
          <header className="section-header">
            <h2 className="section-tagline">Key Features</h2>
            <h1 className="section-title">KEY FEATURES</h1>
          </header>
          <ul className="features-list">
            {keyFeatures.map((item, index) => (
              <li key={index} className="feature-item">
                <span className="bullet">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#contact-us" className="btn btn-primary">
            Schedule Your Viewing
          </a>
        </div>

        {/* Right: Exclusive Amenities */}
        <div id="amenities" className="amenities-col">
          <header className="section-header">
            <h2 className="section-tagline">Lifestyle</h2>
            <h1 className="section-title">EXCLUSIVE AMENITIES</h1>
          </header>
          <ul className="amenities-list">
            {amenities.map((item, index) => (
              <li key={index} className="amenity-item">
                <span className="bullet">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#contact-us" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

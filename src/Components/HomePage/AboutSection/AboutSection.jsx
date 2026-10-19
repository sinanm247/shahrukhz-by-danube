import "./AboutSection.scss";
import exterior from "../../../Assets/Exteriors/Image-1.webp";
import interior from "../../../Assets/Interiors/Image-1.webp";
import amenity from "../../../Assets/Amenities/Image-2.webp";

const portraits = [
    { src: exterior, alt: "Shahrukhz Tower arrival on Sheikh Zayed Road" },
    { src: interior, alt: "Shahrukhz meeting lounge with city views" },
    { src: amenity, alt: "Shahrukhz sky pool and signature lounge" },
];

const AboutSection = () => {
    const openBrochure = () => {
        window.dispatchEvent(new CustomEvent("open-brochure"));
    };

    return (
        <section id="about-us" className="about-us-section">
            <div className="about-inner">
                <div className="about-portraits">
                    {portraits.map((item, index) => (
                        <figure key={index} className={`portrait portrait-${index + 1}`}>
                            <img src={item.src} alt={item.alt} />
                        </figure>
                    ))}
                </div>

                <div className="about-content section-header">
                    <h2 className="section-tagline">About Shahrukhz by Danube</h2>
                    <h1 className="section-title">
                        Introducing Dubai’s Most Iconic Commercial Address
                    </h1>
                    <p className="section-description">
                        Shahrukhz by Danube presents a signature 55-storey commercial tower on Sheikh Zayed Road. As Dubai’s first SRK-branded commercial tower, it offers premium office spaces crafted for global businesses, innovators, and investors, with 35+ world-class amenities and exceptional connectivity.
                    </p>
                    <button type="button" className="btn btn-primary" onClick={openBrochure}>
                        Request Brochure
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

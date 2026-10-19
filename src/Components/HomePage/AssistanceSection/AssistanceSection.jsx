import "./AssistanceSection.scss";
import bgImage from "../../../Assets/Exteriors/Image-1.webp";

export default function AssistanceSection() {
    return (
        <section id="cta-section" className="common-cta-section">
            <img className="cta-bg-image" src={bgImage} alt="Shahrukhz by Danube on Sheikh Zayed Road" />
            <div className="cta-overlay"></div>

            <div className="cta-content section-container section-header section-header--light">
                <h2 className="section-tagline">Need Assistance?</h2>
                <h1 className="section-title">Schedule a Quick Call with Our Team</h1>
                <p className="section-description">
                    Premium commercial offices on Sheikh Zayed Road, starting from AED 1.9M. Limited availability on the new launch.
                </p>

                <a href="#contact-us" className="btn btn-glass">
                    Request A Call Back
                </a>
            </div>
        </section>
    );
}

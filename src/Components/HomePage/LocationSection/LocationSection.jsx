import "./LocationSection.scss";
import image from "../../../Assets/Common/Location.webp";

const places = [
    { name: "Palm Jumeirah", time: "05 MIN" },
    { name: "Dubai Marina & Burj Al Arab", time: "08 MIN" },
    { name: "Dubai Mall / Burj Khalifa", time: "12 MIN" },
    { name: "Dubai International Airport", time: "20 MIN" },
];

export default function LocationSection() {
    return (
        <section id="location" className="location-section">
            <div className="location-inner">
                <div className="location-content">
                    <div className="section-header">
                        <h2 className="section-tagline">Location</h2>
                        <h1 className="section-title">A Prime Location on Sheikh Zayed Road</h1>
                        <p className="section-description">
                            Shahrukhz by Danube Properties is strategically located on Sheikh Zayed Road, offering seamless access to Dubai’s most important business and lifestyle destinations. With direct connectivity to Downtown Dubai, DIFC, Business Bay and major transport routes, it places your office at the center of everything.
                        </p>
                    </div>

                    <ul className="places-list">
                        {places.map((place) => (
                            <li key={place.name} className="place-item">
                                <span className="place-time">{place.time}</span>
                                <span className="place-name">{place.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="location-image-wrap">
                    <img
                        src={image}
                        alt="Shahrukhz by Danube on Sheikh Zayed Road, with nearby destinations"
                        className="location-image"
                    />
                </div>
            </div>
        </section>
    );
}

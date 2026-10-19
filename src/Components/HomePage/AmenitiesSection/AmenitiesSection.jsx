import "./AmenitiesSection.scss";
import amenityImage from "../../../Assets/Amenities/Image-1.webp";

const business = [
    "Boardrooms, Executive Meeting Rooms & Multipurpose Hall",
    "Sky Pool, Signature Sky Lounge & Helipad",
    "Fully Equipped Gym & Wellness Facilities",
];

const lifestyle = [
    "Break Yard, Zen Garden & Urban Park",
    "Valet Parking & EV Charging Stations",
    "Padel Court, Cricket Pitch & Badminton Court",
];

export default function AmenitiesSection() {
    return (
        <section id="amenities" className="clusters-section">
            <div className="clusters-split">
                <div className="clusters-content">
                    <div className="section-header">
                        <h2 className="section-tagline">Features & Amenities</h2>
                        <h1 className="section-title">Elevate Every Workday with 35+ World-Class Amenities</h1>
                        <p className="section-description">
                            Shahrukhz by Danube offers an extensive mix of business, wellness, lifestyle, and recreational amenities, thoughtfully designed across multiple levels to enhance productivity, comfort, and everyday convenience.
                        </p>
                    </div>

                    <div className="clusters-groups">
                        <article className="cluster-group">
                            <p className="group-label">Work & Wellness</p>
                            <ul>
                                {business.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                        <article className="cluster-group">
                            <p className="group-label">Lifestyle & Recreation</p>
                            <ul>
                                {lifestyle.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>

                <div className="clusters-map-wrap">
                    <img src={amenityImage} alt="Shahrukhz signature sky lounge" />
                </div>
            </div>
        </section>
    );
}

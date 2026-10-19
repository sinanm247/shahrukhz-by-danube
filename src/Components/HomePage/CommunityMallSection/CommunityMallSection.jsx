import "./CommunityMallSection.scss";
import mallIcons from "../../../Assets/Locations/Image-5.webp";

const mallAmenities = [
    "Shopping",
    "Cafes & Restaurants",
    "VIP Lounge",
    "Gym",
    "Pool",
    "Sauna",
    "Steam Room",
    "Massage Room",
    "Jacuzzi",
    "Game Room",
    "Adventure Zone",
    "Escape Room",
    "Cinema",
    "Food Court",
    "Supermarket",
    "Medical Clinic",
];

export default function CommunityMallSection() {
    return (
        <section id="community-mall" className="mall-section">
            <div className="mall-split">
                <div className="mall-content">
                    <div className="section-header section-header--light">
                        <h2 className="section-tagline">The Community Mall</h2>
                        <h1 className="section-title">WHERE CONVENIENCE MEETS PRIVILEGE</h1>
                        <p className="section-description">
                            Spanning 700,000 square feet, the Community Mall is your curated space, reserved for residents.
                            From local names to world-class brands, it brings together everything for every need and every
                            age. A private members' lounge welcomes VIP residents with preferential offers and priority
                            access to all the Mall has to offer. This is retail reimagined as a resident's reward.
                        </p>
                    </div>
                    <ul className="mall-grid">
                        {mallAmenities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <a href="#contact-us" className="btn btn-glass">Discover the Mall</a>
                </div>
                <div className="mall-image">
                    <img src={mallIcons} alt="Azizi Florence Community Mall amenities" />
                </div>
            </div>
        </section>
    );
}

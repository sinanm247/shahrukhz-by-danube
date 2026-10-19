import "./ArrivalSection.scss";
import arrivalImage from "../../../Assets/Amenities/Image-1.webp";

export default function ArrivalSection() {
    return (
        <section id="arrival" className="arrival-section">
            <div className="arrival-media">
                <img src={arrivalImage} alt="Azizi Florence arrival landscape and community gateway" />
            </div>
            <div className="arrival-copy">
                <p className="arrival-kicker">The Arrival Experience</p>
                <h2>
                    “A WING IN FLIGHT”
                    <span>INSPIRED BY THE SPIRIT OF THE FALCON</span>
                </h2>
                <blockquote>
                    Arrival is the first act of belonging. Inspired by a falcon in flight, a creature of precision, poise
                    and effortless grace, the entry canopy rises not as a gate, but as its wing caught in flight. At its
                    centre, it bows gently to the earth, giving life to the landscape below. Light moves across its form
                    through the day, so that no arrival is ever quite the same.
                </blockquote>
            </div>
        </section>
    );
}

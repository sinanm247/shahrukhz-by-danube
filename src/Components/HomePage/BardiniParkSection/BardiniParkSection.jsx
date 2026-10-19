import "./BardiniParkSection.scss";
import parkIcons from "../../../Assets/Locations/Image-4.webp";

const parkAmenities = [
    "Flower Garden",
    "Zen Garden",
    "Running & Walking Tracks",
    "Cycling Tracks",
    "Basketball Courts",
    "Tennis Courts",
    "Volleyball Courts",
    "Dry Fountain",
    "Skating Park",
    "Kids Play Area",
    "Water Park",
    "Food Trucks",
    "Outdoor Theater",
    "Dancing Fountains",
    "Weekend Market",
    "Picnic & BBQ Areas",
    "Outdoor Wellness",
    "Outdoor Fitness",
    "Family Gatherings",
    "Restaurant & Cafe",
    "Sculpture Park",
    "Glow Garden",
    "Art & Cultural Plaza",
    "Changing & Toilet Blocks",
    "Yoga Lawn",
    "Mini Golf",
    "Swimming Pools",
    "EV Charging Station",
    "Pet Park",
    "Open Green Spaces",
    "Theme Park",
    "Visitor Parking",
];

export default function BardiniParkSection() {
    return (
        <section id="bardini-park" className="bardini-section">
            <div className="bardini-split">
                <div className="bardini-image">
                    <img src={parkIcons} alt="Azizi Bardini Park amenities" />
                </div>
                <div className="bardini-content">
                    <div className="section-header">
                        <h2 className="section-tagline">Azizi Bardini Park</h2>
                        <h1 className="section-title">NOT SIMPLY A PARK. A DESTINATION.</h1>
                        <p className="section-description">
                            At the heart of Azizi Florence rises a park like no other, binding all six clusters into one and
                            standing as the community's defining landmark. Spread across 1.7 million sq.ft, it invites life
                            to unfold — quiet mornings, open-air concerts, golden evenings — where every path leads and where
                            the extraordinary becomes everyday.
                        </p>
                        <p className="section-description">
                            Within it, thirty-two zones give the day its rhythm, room to play, to gather, to pause, while
                            sixteen places to dine turn an evening into an occasion. This is where the community comes to
                            breathe, to celebrate and to belong.
                        </p>
                    </div>
                    <p className="amenity-count">32 Azizi Bardini Park Amenities</p>
                    <ul className="amenity-pills">
                        {parkAmenities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <a href="#contact-us" className="btn btn-primary">Experience Florence</a>
                </div>
            </div>
        </section>
    );
}

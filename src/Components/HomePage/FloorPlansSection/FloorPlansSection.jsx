import "./FloorPlansSection.scss";
import { featuredFloorPlans } from "../../../Utils/floorPlans";
import premium3Bhk from "../../../Assets/Floor-Plans/Premium-3BHK.webp";
import signatureKings from "../../../Assets/Floor-Plans/Sig-Kings-Ocean.webp";
import penthouseB from "../../../Assets/Floor-Plans/5BHK-Penthouse-B.webp";

const planImages = {
    "premium-3bhk": premium3Bhk,
    "signature-kings": signatureKings,
    "penthouse-b": penthouseB,
};

export default function FloorPlansSection() {
    const downloadFloorPlan = (configuration = "") => {
        window.dispatchEvent(new CustomEvent("open-brochure", {
            detail: { configuration, download: "floorplan" },
        }));
    };

    return (
        <section id="floor-plans">
            <div className="floorplan-section section-container">
                <div className="floorplan-header section-header">
                    <h2 className="section-tagline">Floor Plans</h2>
                    <h1 className="section-title">Three Signature Layouts</h1>
                    <p className="section-description">
                        A premium three bedroom, the Signature King's Ocean Suite, and the five bedroom penthouse on levels 56 and 57.
                    </p>
                </div>

                <div className="featured-plans">
                    {featuredFloorPlans.map((plan) => (
                        <article className="featured-plan" key={plan.id}>
                            <figure className="featured-plan-figure">
                                <img src={planImages[plan.image]} alt={`${plan.title} floor plan`} />
                            </figure>
                            <div className="featured-plan-copy">
                                {plan.level && <p className="plan-level">{plan.level}</p>}
                                <h3>{plan.title}</h3>
                                <p className="plan-view">{plan.view}</p>
                                <dl className="plan-facts">
                                    {plan.price ? (
                                        <div>
                                            <dt>Price</dt>
                                            <dd>{plan.price}</dd>
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <dt>Starting</dt>
                                                <dd>{plan.starting}</dd>
                                            </div>
                                            <div>
                                                <dt>Average</dt>
                                                <dd>{plan.average}</dd>
                                            </div>
                                        </>
                                    )}
                                    {plan.areas.map((area) => (
                                        <div key={area.label}>
                                            <dt>{area.label}</dt>
                                            <dd>{area.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <ul className="plan-features">
                                    {plan.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="floorplan-cta">
                    <h2>Need the rest of the layouts?</h2>
                    <p>Download the floor plan for the full set of unit drawings and dimensions.</p>
                    <button type="button" className="btn btn-primary" onClick={() => downloadFloorPlan()}>
                        Download Floor Plan Now
                    </button>
                </div>
            </div>
        </section>
    );
}

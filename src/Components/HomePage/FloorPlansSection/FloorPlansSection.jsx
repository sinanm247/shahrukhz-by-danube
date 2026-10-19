import "./FloorPlansSection.scss";
import { pricingOptions } from "../../../Utils/floorPlans";

export default function FloorPlansSection() {
    const downloadPlan = (name) => {
        window.dispatchEvent(new CustomEvent("open-brochure", { detail: { configuration: name } }));
    };

    return (
        <section id="floor-plans">
            <div className="floorplan-section section-container">
                <div className="floorplan-header section-header">
                    <h2 className="section-tagline">Floor Plans</h2>
                    <h1 className="section-title">Office Configurations</h1>
                    <p className="section-description">
                        Studio, one, two and three bedroom premium layouts. Floor plan drawings are shared with the brochure after you register.
                    </p>
                </div>

                <div className="plan-grid">
                    {pricingOptions.map((plan) => (
                        <article key={plan.name} className="plan-card">
                            <p className="plan-type">{plan.type}</p>
                            <h3 className="plan-name">{plan.name}</h3>
                            <p className="plan-price">{plan.aed}</p>
                            <button type="button" className="btn btn-primary" onClick={() => downloadPlan(plan.name)}>
                                Download
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

import "./InvestorAdvantageSection.scss";
import towerImage from "../../../Assets/Exteriors/Image-3.webp";

const steps = [
    { value: "30%", label: "During Construction" },
    { value: "70%", label: "On handover (December 2029)" },
    { value: "1%", label: "Monthly After Completion" },
];

export default function InvestorAdvantageSection() {
    return (
        <section id="investor" className="masterplan-section">
            <div className="masterplan-copy">
                <div className="section-header section-header--light">
                    <h2 className="section-tagline">Investor Advantage</h2>
                    <h1 className="section-title">Payment Plan</h1>
                    <p className="section-description">
                        Secure a Shahrukhz office on a 30/70 payment plan, with 30% during construction and 70% on handover in December 2029.
                    </p>
                </div>
            </div>

            <div className="masterplan-stats">
                {steps.map((item) => (
                    <article key={item.label} className="stat-cell">
                        <p className="stat-value">{item.value}</p>
                        <p className="stat-label">{item.label}</p>
                    </article>
                ))}
            </div>

            <figure className="masterplan-figure">
                <img src={towerImage} alt="Shahrukhz by Danube tower exterior" />
                <figcaption>Sheikh Zayed Road · Handover December 2029</figcaption>
            </figure>
        </section>
    );
}

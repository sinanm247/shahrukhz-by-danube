import "./PrestigeSection.scss";

const highlights = [
    { value: "55", unit: "STOREYS", label: "Commercial Tower" },
    { value: "35+", unit: "AMENITIES", label: "Across the Tower" },
    { value: "AED 1.65M", unit: "STARTING", label: "Premium Offices" },
    { value: "30/70", unit: "PLAN", label: "1% Monthly After Completion" },
    { value: "Dec 2029", unit: "HANDOVER", label: "On Completion" },
    { value: "SZR", unit: "DUBAI", label: "Sheikh Zayed Road" },
];

export default function PrestigeSection() {
    return (
        <section id="lifestyle" className="lifestyle-section">
            <div className="lifestyle-header section-header">
                <h2 className="section-tagline">Corporate Prestige</h2>
                <h1 className="section-title">Experience a New Level of Corporate Prestige</h1>
                <p className="section-description">
                    Shahrukhz by Danube Properties offers refined office spaces with premium finishes and smart layouts, creating an elevated corporate environment designed to enhance productivity, comfort, and brand presence.
                </p>
                <p className="section-description lifestyle-second">
                    Shahrukhz by Danube combines a prime Sheikh Zayed Road location, luxury design, and strong market demand, offering investors a dependable commercial asset with long-term value and attractive returns.
                </p>
            </div>

            <div className="lifestyle-rail">
                {highlights.map((item) => (
                    <article key={item.label} className="highlight-card">
                        <span className="highlight-value">{item.value}</span>
                        <span className="highlight-unit">{item.unit}</span>
                        <span className="highlight-label">{item.label}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}

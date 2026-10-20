import "./PricingSection.scss";
import { configurationPricing, oceanViewPricing, residencesPricing } from "../../../Utils/floorPlans";

const formatPrice = (value) => `AED ${value}`;

export default function PricingSection() {
    const downloadPriceList = () => {
        window.dispatchEvent(new CustomEvent("open-brochure", {
            detail: { download: "pricelist" },
        }));
    };

    const oceanLevels = oceanViewPricing.reduce((groups, row) => {
        const last = groups[groups.length - 1];
        if (last && last.level === row.level) {
            last.rows.push(row);
        } else {
            groups.push({ level: row.level, rows: [row] });
        }
        return groups;
    }, []);

    return (
        <section id="price-list">
            <div className="pricing-list-section section-container">
                <div className="pricing-list-header section-header">
                    <h2 className="section-tagline">Configuration & Pricing Details</h2>
                    <h1 className="section-title">Residences at Shahrukhz by Danube</h1>
                    <p className="section-description">
                        Starting and average prices in AED, from studios through penthouses on levels 56 and 57.
                    </p>
                </div>

                <div className="price-block">
                    <div className="price-table-wrap">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Views</th>
                                    <th>Starting Price</th>
                                    <th>Average Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {configurationPricing.map((row) => (
                                    <tr key={`${row.type}-${row.views}-${row.starting}`}>
                                        <td>{row.type}</td>
                                        <td>{row.views}</td>
                                        <td className="price-figure">{formatPrice(row.starting)}</td>
                                        <td className="price-figure">{formatPrice(row.average)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="price-block">
                    <h2 className="price-block-title">Ocean View Residences</h2>
                    <div className="price-table-wrap">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Type</th>
                                    <th>Starting Price</th>
                                    <th>Average Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oceanLevels.map((group) =>
                                    group.rows.map((row, index) => (
                                        <tr key={`${group.level}-${row.type}-${row.starting}`}>
                                            {index === 0 && (
                                                <td className="level-cell" rowSpan={group.rows.length}>
                                                    {group.level}
                                                </td>
                                            )}
                                            <td>
                                                {row.type}
                                                {row.note && <span className="price-note">{row.note}</span>}
                                            </td>
                                            <td className="price-figure">{formatPrice(row.starting)}</td>
                                            <td className="price-figure">{formatPrice(row.average)}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="price-block">
                    <h2 className="price-block-title">Shahrukhz Residences — 56 & 57 Levels</h2>
                    <div className="price-table-wrap">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>View</th>
                                    <th>Area (Sq.Ft)</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {residencesPricing.map((row) => (
                                    <tr key={row.type}>
                                        <td>{row.type}</td>
                                        <td>{row.view}</td>
                                        <td>{row.area}</td>
                                        <td className="price-figure">{formatPrice(row.price)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className="price-list-note">
                    All amounts are in AED. Information, plans and pricing are approximate and for illustration only. The developer may revise them without notice. Unit details can vary with availability and the specific unit.
                </p>

                <div className="price-list-cta">
                    <h2>Want the full price list?</h2>
                    <p>Download the price list for every configuration and the latest figures.</p>
                    <button type="button" className="btn btn-primary" onClick={downloadPriceList}>
                        Download Price List Now
                    </button>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import "./PaymentPlanSection.scss";

const paymentSteps = [
    {
        value: "70%",
        title: "During Construction",
        text: "Pay easy installments throughout the construction period until handover.",
    },
    {
        value: "30%",
        title: "Post Handover",
        text: "Settle the remaining balance through convenient 1% monthly installments after handover.",
    },
];

export default function PaymentPlanSection() {
    const openBrochure = () => {
        window.dispatchEvent(new CustomEvent("open-brochure"));
    };

    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-header section-header">
                    <h2 className="section-tagline">Shahrukhz by Danube Payment Plan</h2>
                    <h1 className="section-title">Flexible 1% Monthly Payment Plan</h1>
                    <p className="section-description">
                        Shahrukhz by Danube offers a flexible 70/30 payment plan, enabling investors to secure premium office spaces with convenient installments during construction and 1% monthly payments after completion.
                    </p>
                </div>

                <div className="pricing-cards">
                    {paymentSteps.map((card, index) => (
                        <motion.div
                            key={card.title}
                            className="pricing-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <p className="card-price-aed">{card.value}</p>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-detail">{card.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="pricing-footer payment-actions">
                    <button type="button" className="btn btn-primary" onClick={openBrochure}>
                        Download Payment Plan
                    </button>
                    <button type="button" className="btn btn-primary brochure-outline" onClick={openBrochure}>
                        Download Brochure
                    </button>
                </div>

                <p className="price-disclaimer">
                    Payment terms are subject to change and availability. The brochure includes the latest payment schedule. Handover is scheduled for December 2029.
                </p>
            </div>
        </section>
    );
}

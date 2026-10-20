import logo from "../../../Assets/Logo/Shahrukz-by-Danube-Logo.png";
import { useLocation } from "react-router-dom";
import "./Footer.scss";
import propwiseLogo from "../../../Assets/Logo/propwise-logo-white.png";
import qrCode from "../../../Assets/Common/qr-code.jpeg";

export default function Footer() {
    const location = useLocation();
    return (
        <footer className="footer">
            <div className="footer_row">
                <div className="footer_col contact_us_col">
                    <div className="contact_content">
                        <img src={logo} className="company_logo" alt="Shahrukhz by Danube" />
                        <div className="contact_details_group">
                            <h2 className="head">About Shahrukhz by Danube</h2>
                            <p className="description">
                                Shahrukhz by Danube presents a signature 55-storey commercial tower on Sheikh Zayed Road. Dubai’s first SRK-branded commercial tower, with premium offices, 35+ amenities and a flexible 30/70 payment plan. Starting from AED 1.65M.
                            </p>
                            {location.pathname === "/thank-you" && (
                            <div className="company_website">
                                <a className="website_link" href="https://www.danubeproperties.com" target="_blank" rel="noopener noreferrer">Danube Properties</a>
                            </div>)}
                        </div>
                    </div>
                </div>

                <div className="footer_col">
                    <h2 className="head">Shahrukhz by Danube</h2>
                    <ul>
                        <li><a href="#about-us">About</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#pricing">Payment Plan</a></li>
                        <li><a href="#price-list">Pricing</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#floor-plans">Floor Plans</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer_col">
                    <h2 className="head">Location</h2>
                    <ul>
                        <li>Sheikh Zayed Road</li>
                        <li>Dubai, UAE</li>
                        <li>Palm Jumeirah — 05 min</li>
                        <li>Dubai Marina & Burj Al Arab — 08 min</li>
                        <li>Dubai Mall / Burj Khalifa — 12 min</li>
                        <li>Dubai International Airport — 20 min</li>
                    </ul>
                </div>

                <div className="footer_col">
                    <h2 className="head">The Tower</h2>
                    <ul>
                        <li>55-storey commercial tower</li>
                        <li>SRK-branded address</li>
                        <li>35+ world-class amenities</li>
                        <li>Starting from AED 1.65M</li>
                        <li>30/70 · 1% payment plan</li>
                        <li>Handover December 2029</li>
                        <li>New launch · limited availability</li>
                    </ul>
                </div>
            </div>

            <div className="footer_disclaimer">
                <p>
                    Shahrukhz by Danube Properties, Sheikh Zayed Road — Dubai, UAE<br />
                    Premium Commercial Offices
                </p>
            </div>

            <div className="footer_disclaimer">
                <div className="propwise-brand">
                    <img src={propwiseLogo} className="propwise-logo" alt="Propwise Realty" />
                    <img src={qrCode} className="permit-card-qr" alt="Propwise Realty QR code" />
                </div>
                <p>
                    Office No. M2-183, Aura Xavier Business Center, BN Complex Al Muteena Deira Dubai, UAE<br />
                    License No: 1503017
                </p>
            </div>

            <div className="footer_disclaimer">
                <p>
                    <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agency namely Propwise Realty LLC. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Agency (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorised use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
            </div>

            <div className="bottom_footer">
                <div className="left_section">
                    <p>Privacy Policy</p>
                    <span className="separator">|</span>
                    <p>Terms & Conditions</p>
                </div>
                <div className="right_section">
                    <p>© 2026 Shahrukhz by Danube. All Rights Reserved. | Propwise Realty LLC</p>
                </div>
            </div>
        </footer>
    );
}

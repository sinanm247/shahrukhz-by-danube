import { useState } from 'react';
import "./GallerySection.scss";

import amenity1 from "../../../Assets/Amenities/Image-1.webp";
import amenity2 from "../../../Assets/Amenities/Image-2.webp";
import amenity3 from "../../../Assets/Amenities/Image-3.webp";
import amenity4 from "../../../Assets/Amenities/Image-4.webp";
import exterior1 from "../../../Assets/Exteriors/Image-1.webp";
import exterior2 from "../../../Assets/Exteriors/Image-2.webp";
import exterior3 from "../../../Assets/Exteriors/Image-3.webp";
import interior1 from "../../../Assets/Interiors/Image-1.webp";
import interior2 from "../../../Assets/Interiors/Image-2.webp";
import interior3 from "../../../Assets/Interiors/Image-3.webp";
import interior4 from "../../../Assets/Interiors/Image-4.webp";
import interior5 from "../../../Assets/Interiors/Image-5.webp";

const galleryImages = [
    { src: exterior1, alt: "Shahrukhz Tower arrival", category: "Exteriors" },
    { src: exterior2, alt: "Shahrukhz entrance", category: "Exteriors" },
    { src: exterior3, alt: "Shahrukhz tower exterior", category: "Exteriors" },
    { src: amenity1, alt: "Shahrukhz sky lounge", category: "Amenities" },
    { src: amenity2, alt: "Shahrukhz sky pool", category: "Amenities" },
    { src: amenity3, alt: "Shahrukhz amenities", category: "Amenities" },
    { src: amenity4, alt: "Shahrukhz lifestyle amenities", category: "Amenities" },
    { src: interior1, alt: "Shahrukhz interior lounge", category: "Interiors" },
    { src: interior2, alt: "Shahrukhz interior", category: "Interiors" },
    { src: interior3, alt: "Shahrukhz office interior", category: "Interiors" },
    { src: interior4, alt: "Shahrukhz interior finish", category: "Interiors" },
    { src: interior5, alt: "Shahrukhz interior space", category: "Interiors" },
];

const filters = ["All", "Amenities", "Exteriors", "Interiors"];

export default function GallerySection() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const visibleImages = galleryImages.filter(
        (item) => activeFilter === "All" || item.category === activeFilter
    );

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-container">
                <header className="gallery-header section-header">
                    <h2 className="section-tagline">Gallery</h2>
                    <h1 className="section-title">Shahrukhz by Danube</h1>
                    <p className="section-description">
                        Amenities, exteriors and interiors of the 55-storey commercial tower on Sheikh Zayed Road.
                    </p>
                </header>

                <div className="gallery-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={`gallery-filter ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {visibleImages.map((item, index) => (
                        <div
                            key={`${item.category}-${index}`}
                            className="gallery-item"
                            onClick={() => setLightboxImage(item)}
                        >
                            <div className="gallery-item-inner">
                                <img src={item.src} alt={item.alt} />
                                <div className="gallery-item-overlay">
                                    <span className="view-text">{item.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxImage && (
                <div
                    className="gallery-lightbox"
                    onClick={() => setLightboxImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    <button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close">
                        ×
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightboxImage.src} alt={lightboxImage.alt} />
                    </div>
                </div>
            )}
        </section>
    );
}

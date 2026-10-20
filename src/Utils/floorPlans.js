export const startingPriceLabel = "AED 1.65M";
export const startingPriceFull = "AED 1,650,000";

export const configurationPricing = [
    { type: "Studio", views: "Skyline Sea View", starting: "1.65M", average: "1.85M" },
    { type: "Flex Studio", views: "Skyline Sea View", starting: "1.85M", average: "2M" },
    { type: "Flex Studio", views: "Panoramic Sea View", starting: "2M", average: "2.1M" },
    { type: "1 BHK", views: "Skyline Sea View", starting: "2.3M", average: "2.5M" },
    { type: "1 BHK", views: "Panoramic Sea View", starting: "2.6M", average: "2.8M" },
    { type: "Flex 1 BHK", views: "Panoramic Sea View & Skyline Sea View", starting: "2.95M", average: "3.1M" },
    { type: "Flex Plus 1 BHK", views: "Panoramic Sea View", starting: "3.4M", average: "3.6M" },
    { type: "King's 1 BHK", views: "Panoramic Sea View", starting: "3.4M", average: "3.6M" },
    { type: "Flex Plus 2 BHK", views: "Panoramic Sea View", starting: "4.25M", average: "4.7M" },
    { type: "King's 2 BHK", views: "Panoramic Sea View", starting: "4.95M", average: "5.4M" },
    { type: "3 BHK", views: "Panoramic Sea View", starting: "6.5M", average: "6.7M" },
];

export const oceanViewPricing = [
    { level: "1st to 4th Level", type: "Ocean Flex Studio", starting: "1.94M", average: "1.97M" },
    { level: "1st to 4th Level", type: "Ocean Flex Plus 1 BHK", starting: "3.5M", average: "3.61M" },
    { level: "1st to 4th Level", type: "Ocean Flex Plus 2 BHK", starting: "4.3M", average: "4.4M" },
    { level: "5th to 8th Level", type: "Ocean Flex Plus 2 BHK", note: "Higher Area", starting: "4.8M", average: "4.85M" },
    { level: "5th to 8th Level", type: "Signature King's Ocean Suite", starting: "6.2M", average: "6.7M" },
];

export const residencesPricing = [
    { type: "4 BHK Premium Penthouse", view: "Panoramic Sea View & Skyline Sea View", area: "2,594", price: "15M" },
    { type: "5 BHK Premium Penthouse - Type A", view: "Panoramic Sea View", area: "3,607", price: "22M" },
    { type: "5 BHK Premium Penthouse - Type B", view: "Panoramic Sea View & Skyline Sea View", area: "3,565", price: "20M" },
];

export const featuredFloorPlans = [
    {
        id: "premium-3-bedroom",
        title: "Premium 3 Bedroom",
        configuration: "3 BHK",
        image: "premium-3bhk",
        view: "Panoramic Sea View & Skyline Sea View",
        starting: "AED 6.5M",
        average: "AED 6.7M",
        areas: [
            { label: "Apartment", value: "1,138 Sq.Ft" },
            { label: "Balcony", value: "308 Sq.Ft" },
            { label: "Total", value: "1,446 Sq.Ft" },
        ],
        features: ["Convertible Kitchen", "Multipurpose Room"],
    },
    {
        id: "signature-kings-ocean",
        title: "Signature King's Ocean Suite",
        configuration: "Signature King's Ocean Suite",
        image: "signature-kings",
        level: "Levels 5 – 8",
        view: "Panoramic Sea View",
        starting: "AED 6.2M",
        average: "AED 6.7M",
        areas: [
            { label: "Apartment", value: "1,263 – 1,302 Sq.Ft" },
            { label: "Balcony", value: "251 – 314 Sq.Ft" },
            { label: "Total", value: "1,524 – 1,616 Sq.Ft" },
        ],
        features: ["Convertible Kitchen", "Dual Access Bath", "Utility with Bath", "King's Wardrobe & Dress", "Multipurpose Room with Bath"],
    },
    {
        id: "penthouse-b",
        title: "5 Bedroom Premium Penthouse - B",
        configuration: "5 BHK Premium Penthouse - Type B",
        image: "penthouse-b",
        level: "Levels 56 & 57",
        view: "Panoramic Sea View & Skyline Sea View",
        price: "AED 20M",
        areas: [
            { label: "Apartment", value: "2,692 Sq.Ft" },
            { label: "Balcony", value: "873 Sq.Ft" },
            { label: "Total", value: "3,565 Sq.Ft" },
        ],
        features: ["Maid Room"],
    },
];

const optionName = (row) => (row.note ? `${row.type} (${row.note})` : row.type);

export const floorPlanOptions = [...new Set([
    ...configurationPricing.map((row) => row.type),
    ...oceanViewPricing.map(optionName),
    ...residencesPricing.map((row) => row.type),
])];

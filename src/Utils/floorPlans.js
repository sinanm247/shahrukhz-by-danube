export const startingPriceLabel = "AED 1.9M";
export const startingPriceFull = "AED 1,900,000";

export const pricingOptions = [
    { name: "Studio", type: "Office", aed: "From AED 1.7M", aedFull: "From AED 1,700,000" },
    { name: "1 Bedroom", type: "Office", aed: "AED 2.6M – 3.4M", aedFull: "AED 2,600,000 – 3,400,000" },
    { name: "2 Bedroom Premium", type: "Premium", aed: "AED 4.25M", aedFull: "AED 4,250,000" },
    { name: "3 Bedroom Premium", type: "Premium", aed: "AED 6.5M", aedFull: "AED 6,500,000" },
];

export const floorPlanOptions = pricingOptions.map((item) => item.name);

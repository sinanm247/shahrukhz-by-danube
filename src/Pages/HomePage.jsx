import { Fragment } from "react";
import HeroSection from "../Components/HomePage/HeroSection/HeroSection";
import AboutSection from "../Components/HomePage/AboutSection/AboutSection";
import PrestigeSection from "../Components/HomePage/PrestigeSection/PrestigeSection";
import AmenitiesSection from "../Components/HomePage/AmenitiesSection/AmenitiesSection";
import CallBackSection from "../Components/HomePage/CallBackSection/CallBackSection";
import PaymentPlanSection from "../Components/HomePage/PaymentPlanSection/PaymentPlanSection";
import LocationSection from "../Components/HomePage/LocationSection/LocationSection";
import InvestorAdvantageSection from "../Components/HomePage/InvestorAdvantageSection/InvestorAdvantageSection";
import FloorPlansSection from "../Components/HomePage/FloorPlansSection/FloorPlansSection";
import AssistanceSection from "../Components/HomePage/AssistanceSection/AssistanceSection";
import GallerySection from "../Components/HomePage/GallerySection/GallerySection";
import Helmet from "../General/Helmet";

export default function HomePage() {
    return (
        <Fragment>
            <Helmet title="Shahrukhz by Danube | Premium Commercial Offices on Sheikh Zayed Road" />
            <HeroSection />
            <AboutSection />
            <PrestigeSection />
            <AmenitiesSection />
            <CallBackSection />
            <PaymentPlanSection />
            <LocationSection />
            <InvestorAdvantageSection />
            <FloorPlansSection />
            <AssistanceSection />
            <GallerySection />
        </Fragment>
    );
}

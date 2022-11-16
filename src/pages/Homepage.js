import React from "react";
import HomePageCarousel from "../components/HomePageCarousel";
import NavbarComp from "../components/NavbarComp";
import Figures from "../components/Figures";
import Sustainable from "../components/Sustainable";
import SpecialistsProduct from "../components/SpecialistsProduct";
import RecentInstallations from "../components/RecentInstallations";
import CoreValues from "../components/CoreValues";
import TrustedClient from "../components/TrustedClient";
import RecentNews from "../components/RecentNews";
import Footer from "../components/Footer";
import IntroText from "../components/IntroText";

export default function Homepage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <NavbarComp />
      <HomePageCarousel />
      <Figures />
      <IntroText />
      <Sustainable />
      <SpecialistsProduct />
      <RecentInstallations />
      <CoreValues />
      <TrustedClient />
      <RecentNews />
      <Footer />
    </div>
  );
}

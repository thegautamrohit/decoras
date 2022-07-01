import React from "react";
import Banner from "../components/commonComponents/Banner/Banner";
import Image from "../Assets/Banner/luxury-modern-dark-living-room-interior@2x.png";
import AboutContent from "../components/About/AboutContent";

function about() {
  return (
    <>
      <Banner img={Image} title="ABOUT US" />
      <AboutContent />
    </>
  );
}

export default about;

import React from "react";
import Banner from "../components/commonComponents/Banner/Banner";
import Image from "../Assets/Banner/banner1.png";
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

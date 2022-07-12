import React from "react";
import Fade from "react-reveal/Fade";
import Banner from "../components/commonComponents/Banner/Banner";
import Image from "../Assets/Banner/desktop_banner/banner1.png";
import AboutContent from "../components/About/AboutContent";
import AboutMission from "../components/About/AboutMission";

function about() {
  return (
    <>
      <Banner img={Image} title="ABOUT US" />
      <Fade bottom big>
        <AboutContent />
      </Fade>
      <Fade bottom big>
        <AboutMission />
      </Fade>
    </>
  );
}

export default about;

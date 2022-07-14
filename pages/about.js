import React from "react";
// import Fade from "react-reveal/Fade";
import Banner from "../components/commonComponents/Banner/Banner";
import Image from "../Assets/misc/aboutBanner.png";
import AboutContent from "../components/About/AboutContent";
// import AboutMission from "../components/About/AboutMission";

function about() {
  return (
    <>
      <Banner img={Image} title="ABOUT US" />
      {/* <Fade bottom big> */}
        <AboutContent />
      {/* </Fade> */}
    </>
  );
}

export default about;

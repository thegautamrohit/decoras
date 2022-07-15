import React from "react";
import Banner from "../components/commonComponents/Banner/Banner";
import Image from "../Assets/misc/contactBanner.png";
import ContactSection from "../components/Contact/ContactSection";

function contact() {
  return (
    <>
      <Banner img={Image} title="CONTACT US" />
      <ContactSection />
    </>
  );
}

export default contact;

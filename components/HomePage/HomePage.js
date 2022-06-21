import React from "react";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("./AboutSection/AboutSection"));

function HomePage() {
  return (
    <>
      <AboutSection />
    </>
  );
}

export default HomePage;

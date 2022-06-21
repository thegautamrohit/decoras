import React from "react";
import AboutSection from "../components/HomePage/AboutSection";
import Banner from "../components/HomePage/Banner";
function index() {
  return (
    <div className="homepage__global">
      <Banner />
      <AboutSection />
    </div>
  );
}

export default index;

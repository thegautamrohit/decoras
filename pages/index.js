import React from "react";
import AboutSection from "../components/HomePage/AboutSection";
import Banner from "../components/HomePage/Banner";
import Collections from "../components/HomePage/Collection/Collections";
function index() {
  return (
    <div className="homepage__global">
      {/* <Banner />
      <Collections /> */}
      <AboutSection />
    </div>
  );
}

export default index;

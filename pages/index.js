import React from "react";
import dynamic from "next/dynamic";
import AboutSection from "../components/HomePage/AboutSection";
const Banner = dynamic(() => import("../components/HomePage/Banner"), {
  ssr: false,
});

import Collections from "../components/HomePage/Collection/Collections";

function index() {
  return (
    <div className="homepage__global">
      <Banner />

      <Collections />
      <AboutSection />
    </div>
  );
}

export default index;

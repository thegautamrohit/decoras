import React from "react";
import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("../components/HomePage/AboutSection"),
  {
    ssr: false,
  }
);
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

import React, { useEffect, useState } from "react";

import Image from "next/image";

const Banner = ({ name, img }) => {
  useEffect(() => {
    if (name !== "") {
      const animate = document.getElementsByClassName("animation__title")[0];
      const mainHeader = document.getElementsByClassName(
        "bannerCollectionMainHeader"
      )[0];
      const mainHeaderData = document.getElementsByClassName(
        "bannerCollectionMainHeaderData"
      )[0];
      mainHeader.style.display = "none";
      mainHeaderData.style.display = "none";
      animate.style.transform = "translateX(0)";
      // console.log(animate);
    }

    return () => {
      if (name !== "") {
        animate.style.transform = "";
        mainHeader.style.display = "";
        mainHeaderData.style.display = "";
      }
    };
  }, [name]);

  return (
    <div className="bannerCollection">
      <div className="bannerCollectionImage">
        <Image src={img} layout="fixed" objectFit="cover" height={430} />
      </div>

      <h1 className="bannerCollectionMainHeader">OUR COLLECTION</h1>
      <h4 className="bannerCollectionMainHeaderData">
        Our collection contains work from emerging talent and internationally
        recognized designers.
      </h4>

      <h1 className="animation__title">{name}</h1>
    </div>
  );
};

export default Banner;

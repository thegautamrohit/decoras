import React, { useEffect, useState } from "react";

import Image from "next/image";

const Banner = ({ name, img }) => {
  console.log(img);

  useEffect(() => {
    if (name !== "") {
      const animate = document.getElementsByClassName("animation__title")[0];
      // const mainHeader = document.getElementsByClassName(
      //   "bannerCollectionMainHeader"
      // )[0];
      // const mainHeaderData = document.getElementsByClassName(
      //   "bannerCollectionMainHeaderData"
      // )[0];
      // mainHeader.style.display = "none";
      // mainHeaderData.style.display = "none";
      animate.style.transform = "translateX(0)";
      // console.log(animate);
    }

    return () => {
      if (name !== "") {
        animate.style.transform = "";
        // mainHeader.style.display = "";
        // mainHeaderData.style.display = "";
      }
    };
  }, [name]);

  return (
    <div
      className="bannerCollection"
      style={{
        backgroundImage: `url(${img?.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* <div className="bannerCollectionImage">
        <Image
          src={img?.src}
          layout="fixed"
          objectFit="cover"
          height={430}
          width={1248}
        />
      </div> */}

      <h1 className="animation__title">{name}</h1>
    </div>
  );
};

export default Banner;

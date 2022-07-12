import React from "react";

function Banner({ img, title }) {
  //   console.log(img);

  return (
    <div
      className="common__banner__container"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="common__banner__overlay"></div>
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;

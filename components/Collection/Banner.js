import React from "react";

const Banner = ({ name }) => {
  return (
    <div className="bannerCollection">
      {name === "" ? (
        <>
          <h1>OUR COLLECTION</h1>
          <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h4>
        </>
      ) : (
        <>
          <h1>{name}</h1>
        </>
      )}
    </div>
  );
};

export default Banner;

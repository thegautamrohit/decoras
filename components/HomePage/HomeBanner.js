import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Banner1 from "../../Assets/Banner/banner1.png";
import Banner2 from "../../Assets/Banner/banner2.png";
import Banner3 from "../../Assets/Banner/banner3.png";
import Banner4 from "../../Assets/Banner/banner4.png";
import Banner5 from "../../Assets/Banner/banner5.png";
import Banner6 from "../../Assets/Banner/banner6.png";
import Banner7 from "../../Assets/Banner/banner7.png";
import Banner8 from "../../Assets/Banner/banner8.png";
import Banner9 from "../../Assets/Banner/banner9.png";
import Image from "next/image";

function HomeBanner() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };

  const settings = {
    dots: true,
    // autoplay: true,
    speed: 1000,
    slidesToShow: 1.5,
  };

  console.log(width, width * 0.85);

  const data = [
    {
      id: 1,
      image: Banner1,
    },
    {
      id: 2,
      image: Banner2,
    },
    {
      id: 3,
      image: Banner3,
    },
    {
      id: 4,
      image: Banner4,
    },
    {
      id: 5,
      image: Banner5,
    },
    {
      id: 6,
      image: Banner6,
    },
    {
      id: 7,
      image: Banner7,
    },
    {
      id: 8,
      image: Banner8,
    },
    {
      id: 9,
      image: Banner9,
    },
  ];

  return (
    <div className="homepage__banner__carousel__container">
      <Slider settings={settings}>
        {data?.map((item) => (
          <div className="homepage__banner__carousel__single__slide">
            {width && (
              <Image
                src={item?.image.src}
                id={item?.id}
                width={width * 0.8}
                height={width * 0.4}
                layout="intrinsic"
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBanner;

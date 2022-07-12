import React from "react";

import Banner1 from "../../Assets/Banner/banner1.png";
import Banner2 from "../../Assets/Banner/banner2.png";
import Banner3 from "../../Assets/Banner/banner3.png";
import Banner4 from "../../Assets/Banner/banner4.png";
import Banner5 from "../../Assets/Banner/banner5.png";
import Banner6 from "../../Assets/Banner/banner6.png";
import Banner7 from "../../Assets/Banner/banner7.png";
import Banner8 from "../../Assets/Banner/banner8.png";
import Banner9 from "../../Assets/Banner/banner9.png";
import BannerMobile1 from "../../Assets/Banner/bannerMobile1.png";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const dataDesktop = [
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
const dataMobile = [
  {
    id: 1,
    image: BannerMobile1,
  },
  {
    id: 2,
    image: BannerMobile1,
  },
  {
    id: 3,
    image: BannerMobile1,
  },
  {
    id: 4,
    image: BannerMobile1,
  },
  {
    id: 5,
    image: BannerMobile1,
  },
  {
    id: 6,
    image: BannerMobile1,
  },
  {
    id: 7,
    image: BannerMobile1,
  },
  {
    id: 8,
    image: BannerMobile1,
  },
  {
    id: 9,
    image: BannerMobile1,
  },
];
const Banner = () => {
  return (
    <>
      <div className="homepage__banner">
        <Swiper
          spaceBetween={40}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="whole__carousal"
        >
          {dataDesktop?.map((item, index) => {
            return (
              <SwiperSlide>
                <Image alt="Decoras" src={item.image} objectFit="cover" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="homepage__banner__mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="whole__carousal"
        >
          {dataMobile?.map((item, index) => {
            return (
              <SwiperSlide>
                <Image alt="Decoras" src={item.image} objectFit="cover" />
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

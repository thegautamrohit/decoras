import React, { useState, useEffect } from "react";
import Carousel, { CarouselItem } from "../commonComponents/Carousal/Caraousal";
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
import Button from "../commonComponents/Button/Button";
import { Pagination } from "swiper";
// import Slider from "react-slick";
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
  const [width, setWidth] = useState(1548);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    className: "whole__carousal",
  };

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);

    const reportWindowSize = () => setWidth(window.innerWidth);
  }, []);

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
        >
          {dataDesktop?.map((item, index) => {
            return (
              <SwiperSlide>
                <Image alt="Decoras" src={item.image} objectFit="cover" />
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
        {/* <Slider {...settings}></Slider> */}

        {/* <Carousel title="Homepage" details={data}>
        {data?.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <>
                <Image
                  alt="Decoras"
                  src={item.image}
                  layout="fixed"
                  width={window.innerWidth}
                  height={window.innerWidth < 768 ? 400 : 574}
                  objectFit="cover"
                />
                <div className="carousel__caption">
                  <h1>WE LOVE INTERIORS</h1>
                  <h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy e
                  </h3>
                  <Button title={"Explore"} />
                </div>
              </>
            </CarouselItem>
          );
        })}
      </Carousel> */}
      </div>

      <div className="homepage__banner__mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
        {/* <Slider {...settings}></Slider> */}

        {/* <Carousel title="Homepage" details={data}>
        {data?.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <>
                <Image
                  alt="Decoras"
                  src={item.image}
                  layout="fixed"
                  width={window.innerWidth}
                  height={window.innerWidth < 768 ? 400 : 574}
                  objectFit="cover"
                />
                <div className="carousel__caption">
                  <h1>WE LOVE INTERIORS</h1>
                  <h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy e
                  </h3>
                  <Button title={"Explore"} />
                </div>
              </>
            </CarouselItem>
          );
        })}
      </Carousel> */}
      </div>
    </>
  );
};

export default Banner;

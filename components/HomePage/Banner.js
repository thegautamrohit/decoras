import React, { useRef, useCallback } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Banner1 from "../../Assets/Banner/desktop_banner/banner1.png";
import Banner2 from "../../Assets/Banner/desktop_banner/banner2.png";
import Banner3 from "../../Assets/Banner/desktop_banner/banner3.png";
import Banner4 from "../../Assets/Banner/desktop_banner/banner4.png";
import Banner5 from "../../Assets/Banner/desktop_banner/banner5.png";
import Banner6 from "../../Assets/Banner/desktop_banner/banner6.png";
import Banner7 from "../../Assets/Banner/desktop_banner/banner7.png";
import BannerMobile1 from "../../Assets/Banner/mobile_banners/banner1.png";
import BannerMobile2 from "../../Assets/Banner/mobile_banners/banner2.png";
import BannerMobile3 from "../../Assets/Banner/mobile_banners/banner3.png";
import BannerMobile4 from "../../Assets/Banner/mobile_banners/banner4.png";
import BannerMobile5 from "../../Assets/Banner/mobile_banners/banner5.png";
import BannerMobile6 from "../../Assets/Banner/mobile_banners/banner6.png";
import BannerMobile7 from "../../Assets/Banner/mobile_banners/banner7.png";
import Image from "next/image";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);
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
];
const dataMobile = [
  {
    id: 1,
    image: BannerMobile1,
  },
  {
    id: 2,
    image: BannerMobile2,
  },
  {
    id: 3,
    image: BannerMobile3,
  },
  {
    id: 4,
    image: BannerMobile4,
  },
  {
    id: 5,
    image: BannerMobile5,
  },
  {
    id: 6,
    image: BannerMobile6,
  },
  {
    id: 7,
    image: BannerMobile7,
  },
];
const Banner = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <div className="homepage__banner">
        <Swiper
          ref={sliderRef}
          spaceBetween={40}
          slidesPerView={"auto"}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="whole__carousal"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {dataDesktop?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image alt="Decoras" src={item.image} objectFit="cover" />
              </SwiperSlide>
            );
          })}

          <div onClick={handlePrev} className="banner__carousal__arrow__left">
            <BsArrowLeft color="#6c6c6c" style={{ fontSize: 20 }} />
          </div>
          <div onClick={handleNext} className="banner__carousal__arrow__right">
            <BsArrowRight
              color="#6c6c6c"
              style={{ fontSize: 20, fontWeight: "bolder" }}
            />
          </div>
        </Swiper>
      </div>

      <div className="homepage__banner__mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="whole__carousal"
        >
          {dataMobile?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image alt="Decoras" src={item.image} objectFit="cover" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

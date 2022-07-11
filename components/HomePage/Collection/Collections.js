import React, { useRef, useCallback } from "react";
// import Carousel, { CarouselItem } from "./CollectionCarousel";
import Image from "next/image";
import Img1 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC501.png";
import Img2 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC502.png";
import Img3 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC503.png";
import Img4 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC504.png";
import Img5 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC505.png";
import Img6 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC506.png";
import Img7 from "../../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC508.png";
import Button from "../../commonComponents/Button/Button";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

SwiperCore.use([Navigation]);
function Collections() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const data = [
    {
      id: 1,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img1,
      color: "#F6F7F9",
    },
    {
      id: 2,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img2,
      color: "#F3F9F1",
    },
    {
      id: 3,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img3,
      color: "#F9F1F9",
    },
    {
      id: 4,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img4,
      color: "#F9F6F1",
    },
    {
      id: 5,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img5,
      color: "#F3F9F1",
    },
    {
      id: 6,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img6,
      color: "#F6F7F9",
    },
    {
      id: 7,
      name: "LOUNGE CHAIR",
      category: "Living",
      code: "LC207",
      img: Img7,
      color: "#F9F6F1",
    },
  ];

  return (
    <div className="our__collection__container">
      <div className="our__collection__top__bar">
        <div className="our__collection__top__bar__head">
          <h1>OUR COLLECTIONS</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
        </div>
        <Button title={"View All"} />
      </div>

      <Swiper
        ref={sliderRef}
        spaceBetween={40}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide>
              <div
                className="our__collection__Product__card"
                style={{
                  backgroundColor: `${item.color}`,
                }}
              >
                <Image
                  alt="Decoras"
                  src={item.img}
                  layout="fixed"
                  height={200}
                  width={180}
                />

                <div className="our__collection__card__name">
                  <p>{item?.name}</p>
                  <p>{item?.code}</p>
                </div>

                <p>{item?.category}</p>
              </div>
            </SwiperSlide>
          );
        })}
        <div />
        <div onClick={handlePrev} className="collection__carousal__arrow__left">
          <BsArrowLeft color="#6c6c6c" />
        </div>
        <div
          onClick={handleNext}
          className="collection__carousal__arrow__right"
        >
          <BsArrowRight color="#6c6c6c" style={{ color: "#6c6c6c" }} />
        </div>
        ...
      </Swiper>

      {/* <Carousel>
        {data?.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <div
                className="our__collection__Product__card"
                style={{
                  backgroundColor: `${item.color}`,
                }}
              >
                <Image
                  alt="Decoras"
                  src={item.img}
                  layout="fixed"
                  height={200}
                  width={180}
                />

                <div className="our__collection__card__name">
                  <p>{item?.name}</p>
                  <p>{item?.code}</p>
                </div>

                <p>{item?.category}</p>
              </div>
            </CarouselItem>
          );
        })}
      </Carousel> */}
    </div>
  );
}

export default Collections;

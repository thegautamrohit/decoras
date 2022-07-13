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
import { ProductData } from "../../ProductData";
import { shuffleArray } from "../../../helper/helper";
SwiperCore.use([Navigation]);

const shuffledArray = shuffleArray(ProductData);
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

  const colors = [
    "#F6F7F9",
    "#F3F9F1",
    "#F9F1F9",
    "#F9F6F1",
    "#F3F9F1",
    "#F6F7F9",
    "#F9F6F1",
  ];

  return (
    <div className="our__collection__container">
      <div className="our__collection__top__bar">
        <div className="our__collection__top__bar__head">
          <h1>OUR COLLECTIONS</h1>
          <p>
            Our collection contains work from emerging talent and
            internationally recognized designers.
          </p>
        </div>
        <div className="our__collection__desk_btn">
          <Button title={"View All"} place={"collection"} />
        </div>
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
        {shuffledArray?.slice(0, 20).map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="our__collection__Product__card"
                style={{
                  backgroundColor: `${
                    colors[Math.floor(Math.random() * colors.length)]
                  }`,
                }}
              >
                <Image
                  alt="Decoras"
                  src={item.img}
                  layout="fixed"
                  objectFit="contain"
                  height={200}
                  width={180}
                />

                <div className="our__collection__card__name">
                  <p>{item?.sub_category}</p>
                  <p>{item?.code}</p>
                </div>

                {/* <p>{item?.category}</p> */}
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
      </Swiper>

      <div className="our__collection__mob_btn">
        <Button title={"View All"} place={"collection"} />
      </div>
    </div>
  );
}

export default Collections;

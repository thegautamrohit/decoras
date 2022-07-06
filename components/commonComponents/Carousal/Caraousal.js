import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export const CarouselItem = ({ children }) => {
  return <>{children}</>;
};

const Carousel = ({ children, details }) => {
  useEffect(() => {
    // setInterval(() => {
    //   if (activeIndex < details.length) {
    //     console.log(activeIndex, "children");
    //     setActiveIndex((prev) => prev + 1);
    //   }
    // }, 5000);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [data, setData] = useState([]);

  const leftSlide = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const rightSlide = (newIndex) => {
    let arr = data;
    let ele = arr[newIndex];
    arr.push(ele);

    setData([...arr]);

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setData([...children]);
  }, []);

  return (
    <>
      <div className="natural__carousal__container__desktop">
        <div
          //   {...handlers}
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="carousel__inner"
            style={{
              transform: `translateX(-${
                window.innerWidth > 1474
                  ? 1248 * activeIndex
                  : (1198 - window.innerWidth / 10) * activeIndex - activeIndex
              }px)`,
            }}
          >
            {data.map((child, index) => {
              return (
                <div
                  className="natural__carousal__image__single__slide"
                  key={index}
                >
                  {child}
                </div>
              );
            })}
          </div>
          <div className="banner__scroll__container">
            {details.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeIndex === index
                      ? "active__banner__scroll"
                      : "banner__scroll"
                  }
                  onClick={() => setActiveIndex(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="natural__carousal__container__mobile">
        <div
          // {...handlers}
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="carousel__inner"
            style={{
              transform: `translateX(-${100 * activeIndex + 10 * activeIndex}%)`,
            }}
          >
            {data.map((child, index) => {
              return (
                <div
                  key={index}
                  className="natural__carousal__image__single__slide"
                >
                  {child}
                </div>
              );
            })}
          </div>

          <div className="banner__scroll__container__mobile">
            {details.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeIndex === index
                      ? "active__banner__scroll__mobile"
                      : "banner__scroll__mobile"
                  }
                  onClick={() => setActiveIndex(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;

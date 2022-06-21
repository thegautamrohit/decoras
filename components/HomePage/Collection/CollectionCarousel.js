import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export const CarouselItem = ({ children }) => {
  return <>{children}</>;
};

const Carousel = ({ children, details }) => {
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
                1240 * activeIndex + 1 * activeIndex
              }px)`,
            }}
          >
            {data.map((child, index) => {
              return (
                <div className="natural__carousal__image__single__slide">
                  {child}
                </div>
              );
            })}
          </div>
          <div className="natural__carousal__arrow">
            {activeIndex > 0 && (
              <div
                className="natural__carousal__arrow__left"
                onClick={() => {
                  leftSlide(activeIndex - 1);
                }}
              >
                <GrPrevious color="white" />
              </div>
            )}

            <div
              className="natural__carousal__arrow__right"
              onClick={() => {
                rightSlide(activeIndex + 1);
              }}
            >
              <GrNext color="white" style={{ color: "white" }} />
            </div>
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
            className="inner"
            style={{
              transform: `translateX(-${
                240 * activeIndex + 1 * activeIndex
              }px)`,
            }}
          >
            {data.map((child, index) => {
              return (
                <div className="natural__carousal__image__single">{child}</div>
              );
            })}
          </div>

          <div className="natural__carousal__arrow__mobile">
            {activeIndex > 0 && (
              <div
                className="natural__carousal__arrow__left"
                onClick={() => {
                  leftSlide(activeIndex - 1);
                }}
              >
                <GrPrevious color="white" />
              </div>
            )}

            <div
              className="natural__carousal__arrow__right"
              onClick={() => {
                rightSlide(activeIndex + 1);
              }}
            >
              <GrNext color="white" style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;

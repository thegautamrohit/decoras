import React, { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
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
      <div className="collection__carousal__container__desktop">
        <div
          //   {...handlers}
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="collection__carousel__inner"
            style={{
              transform: `translateX(-${
                272 * activeIndex + 1 * activeIndex
              }px)`,
            }}
          >
            {data.map((child, index) => {
              return (
                <div className="collection__carousal__image__single__slide">
                  {child}
                </div>
              );
            })}
          </div>
          <div className="collection__carousal__arrow">
            {activeIndex > 0 && (
              <div
                className="collection__carousal__arrow__left"
                onClick={() => {
                  leftSlide(activeIndex - 1);
                }}
              >
                <BsArrowLeft color="#6c6c6c" />
              </div>
            )}

            <div
              className="collection__carousal__arrow__right"
              onClick={() => {
                rightSlide(activeIndex + 1);
              }}
            >
              <BsArrowRight color="#6c6c6c" style={{ color: "#6c6c6c" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="collection__carousal__container__mobile">
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
                <div className="collection__carousal__image__single">
                  {child}
                </div>
              );
            })}
          </div>

          <div className="collection__carousal__arrow__mobile">
            {activeIndex > 0 && (
              <div
                className="collection__carousal__arrow__left"
                onClick={() => {
                  leftSlide(activeIndex - 1);
                }}
              >
                <BsArrowLeft color="#6c6c6c" />
              </div>
            )}

            <div
              className="collection__carousal__arrow__right"
              onClick={() => {
                rightSlide(activeIndex + 1);
              }}
            >
              <BsArrowRight color="#6c6c6c" style={{ color: "#6c6c6c" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;

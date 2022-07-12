import React, { useState } from "react";
import Card from "../commonComponents/Cards/Card";
import { MdArrowBack } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
const MiddleSection = ({
  selected,
  category,
  categoryArray,
  shuffledArray,
  back,
  selectedSub,
  sub_category,
}) => {
  const [more, setMore] = useState(12);
  return (
    <div className="middle__section__container">
      <div
        className="middle__section__chips__container"
        style={{
          gridTemplateColumns: `repeat(${
            categoryArray.length + 2
          } , max-content)`,
        }}
      >
        {category.clicked && (
          <div className="middle__section__button" onClick={() => back()}>
            <MdArrowBack style={{ fontSize: 24, fontWeight: "lighter" }} />
          </div>
        )}
        {!category.clicked &&
          categoryArray.map((chips, index) => {
            return (
              <div
                className="middle__section__chips"
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() =>
                  selected({
                    name: chips,
                    clicked: true,
                    id: index,
                  })
                }
              >
                <p>{chips}</p>
              </div>
            );
          })}
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          className="collections__chips"
        > */}
        {category.clicked &&
          categoryArray.map((chips, index) => {
            return (
              // <SwiperSlide>
              <div
                key={index}
                className="middle__section__chips"
                style={
                  sub_category.id === index
                    ? {
                        cursor: "pointer",
                        backgroundColor: "var(--beige)",
                        border: "none",
                      }
                    : { cursor: "pointer" }
                }
                onClick={() =>
                  selectedSub({
                    name: chips,
                    clicked: true,
                    id: index,
                  })
                }
              >
                <p>{chips === category.name ? `All ${chips}` : chips}</p>
              </div>
              // {/* </SwiperSlide> */}
            );
          })}
        {/* </Swiper> */}
      </div>
      <div className="middle__section__cards__container">
        {shuffledArray.slice(0, more).map((cards, index) => (
          <Card data={cards} key={index} />
        ))}
      </div>
      <div className="middle__section__view__more">
        <button className="button" onClick={() => setMore((prev) => prev + 15)}>
          View More
        </button>
      </div>
    </div>
  );
};

export default MiddleSection;

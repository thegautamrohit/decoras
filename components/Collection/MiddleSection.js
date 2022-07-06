import React, { useState } from "react";
import Card from "../commonComponents/Cards/Card";
import { MdArrowBack } from "react-icons/md";

const MiddleSection = ({
  selected,
  category,
  categoryArray,
  shuffledArray,
  back,
  selectedSub,
}) => {
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
        {category.clicked &&
          categoryArray.map((chips, index) => {
            return (
              <div
                className="middle__section__chips"
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() =>
                  selectedSub({
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
      </div>
      <div className="middle__section__cards__container">
        {shuffledArray.map((cards, index) => (
          <Card data={cards} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;

import React, { useState } from "react";
import Card from "../commonComponents/Cards/Card";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const MiddleSection = ({
  selected,
  category,
  categoryArray,
  shuffledArray,
}) => {
  return (
    <div className="middle__section__container">
      <div
        className="middle__section__chips__container"
        style={{
          gridTemplateColumns: `repeat(${
            categoryArray.length + 10
          } , max-content)`,
        }}
      >
        {category.clicked && (
          <>
            <IoChevronBackCircleOutline style={{ fontSize: 44 }} />

            <div
              className="middle__section__chips"
              style={
                category.clicked
                  ? { backgroundColor: "var(--beige)", fontWeight: "medium" }
                  : {}
              }
            >
              <p>{category.name}</p>
            </div>
          </>
        )}
        {categoryArray.map((chips, index) => {
          return (
            <div
              className="middle__section__chips"
              style={
                category.clicked
                  ? { pointerEvents: "none" }
                  : { cursor: "pointer" }
              }
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

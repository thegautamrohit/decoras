import React, { useState } from "react";
import Card from "../commonComponents/Cards/Card";
import { ProductData } from "../ProductData";

const MiddleSection = ({ selected, category }) => {
  console.log(ProductData);
  return (
    <div className="middle__section__container">
      <div
        className="middle__section__chips__container"
        // style={{ gridTemplateColumns: `repeat(${Chips.length} , 1fr)` }}
      >
        {/* {Chips.map((chips, index) => {
          return (
            <div
              className="middle__section__chips"
              key={index}
              onClick={() =>
                selected({ name: chips, clicked: true, id: index })
              }
              style={
                category.clicked && category.id === index
                  ? { backgroundColor: "var(--beige)", fontWeight: "medium" }
                  : {}
              }
            >
              <p>{chips}</p>
            </div>
          );
        })} */}
      </div>
      <div className="middle__section__cards__container">
        {/* {data.map((cards, index) => (
          <Card data={cards} key={index} />
        ))} */}
      </div>
    </div>
  );
};

export default MiddleSection;

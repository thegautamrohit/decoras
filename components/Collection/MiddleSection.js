import React from "react";
import Img1 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC501.png";
import Img2 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC502.png";
import Img3 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC503.png";
import Img4 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC504.png";
import Img5 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC505.png";
import Img6 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC506.png";
import Img7 from "../../Assets/Cut outs/Decoras images cut out/living/Accent chairs cutout/AC508.png";
import Card from "../commonComponents/Cards/Card";

const Chips = [
  "Category A",
  "Category B",
  "Category C",
  "Category D",
  "Category E",
  "Category F",
  "Category G",
];

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

const MiddleSection = () => {
  return (
    <div className="middle__section__container">
      <div
        className="middle__section__chips__container"
        style={{ gridTemplateColumns: `repeat(${Chips.length} , 1fr)` }}
      >
        {Chips.map((chips, index) => {
          return (
            <div className="middle__section__chips" key={index}>
              <p>{chips}</p>
            </div>
          );
        })}
      </div>
      <div className="middle__section__cards__container">
        {data.map((cards, index) => (
          <Card data={cards} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;

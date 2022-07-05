import React from "react";
import Image from "next/image";

const colors = [
  "#F6F7F9",
  "#F3F9F1",
  "#F9F1F9",
  "#F9F6F1",
  "#F3F9F1",
  "#F6F7F9",
  "#F9F6F1",
];

const Card = ({ data }) => {
  return (
    <div
      className="our__collection__Product__card"
      style={{
        backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
      }}
    >
      <Image
        alt="Decoras"
        src={data.img}
        layout="fixed"
        height={200}
        width={180}
      />

      <div className="our__collection__card__name">
        <p>{data?.sub_category}</p>
        <p>{data?.code}</p>
      </div>

      <p>{data?.category}</p>
    </div>
  );
};

export default Card;

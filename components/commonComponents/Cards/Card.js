import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div
      className="our__collection__Product__card"
      style={{
        backgroundColor: `${data.color}`,
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
        <p>{data?.name}</p>
        <p>{data?.code}</p>
      </div>

      <p>{data?.category}</p>
    </div>
  );
};

export default Card;

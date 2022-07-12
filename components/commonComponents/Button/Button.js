import React from "react";
import Link from "next/link";
const Button = ({ title, place }) => {
  return (
    <>
      {place === "collection" ? (
        <Link href={place === "collection" && "/our-collection"}>
          <a className="button">{title}</a>
        </Link>
      ) : (
        <button className="button">{title}</button>
      )}
    </>
  );
};

export default Button;

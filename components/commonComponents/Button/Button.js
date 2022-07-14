import React from "react";
import Link from "next/link";
const Button = ({ title, place }) => {
  return (
    <>
      {place ? (
        <Link href={place}>
          <a className="button">{title}</a>
        </Link>
      ) : (
        <button className="button">{title}</button>
      )}
    </>
  );
};

export default Button;

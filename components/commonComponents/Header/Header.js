import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="main__header">
      <div className="main__header__link">
        <Link href="/">Home</Link>
        <Link href="/">Our Collection</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
      </div>
    </div>
  );
}

export default Header;

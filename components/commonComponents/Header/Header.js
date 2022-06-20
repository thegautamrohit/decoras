import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../Assets/Logo/DecorasLogo.png";
import { useRouter } from "next/router";
function Header({ children, href }) {
  const router = useRouter();

  console.log(href, router.asPath);
  return (
    <div className="main__header">
      <div className="main__header__link">
        <Link href="/">Home</Link>
        <Link href="/">Our Collection</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div className="main__header__logo">
        <Image layout="intrinsic" src={Logo} />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;

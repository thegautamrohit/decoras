import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../Assets/Logo/DecorasLogo.png";
import { useRouter } from "next/router";
function Header({ children, href }) {
  const router = useRouter();

  return (
    <div className="main__header">
      <div className="main__header__link">
        <Link href="/">
          <a
            style={
              router.asPath === "/"
                ? { color: "var(--black)" }
                : { color: "var(--beige)" }
            }
          >
            Home
          </a>
        </Link>
        <Link href="/our-collection">
          <a
            style={
              router.asPath === "/"
                ? { color: "var(--black)" }
                : { color: "var(--beige)" }
            }
          >
            Our Collection
          </a>
        </Link>
        <Link href="/about-us">
          <a
            style={
              router.asPath === "/"
                ? { color: "var(--black)" }
                : { color: "var(--beige)" }
            }
          >
            About Us
          </a>
        </Link>
        <Link href="/contact-us">
          <a
            style={
              router.asPath === "/"
                ? { color: "var(--black)" }
                : { color: "var(--beige)" }
            }
          >
            Contact Us
          </a>
        </Link>
      </div>
      <div className="main__header__logo">
        <Image layout="intrinsic" src={Logo} />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;

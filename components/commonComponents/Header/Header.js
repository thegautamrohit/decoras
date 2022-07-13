import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../Assets/Logo/DecorasLogo.png";
import Icon from "../../../Assets/misc/headericon.png";
import { useRouter } from "next/router";
function Header({ children, href }) {
  const router = useRouter();

  const [show, setShow] = useState(100);
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    if (toggle) {
      setToggle(false);
      setShow(100);
    } else {
      setToggle(true);
      setShow(0);
    }
  };

  const hideHandler = (e) => {
    setShow(100);
    setToggle(false);
  };

  return (
    <>
      <header className="main__header">
        <div className="main__header__main">
          <div className="main__header__link">
            <Link href="/">
              <a
                style={
                  router.asPath === "/"
                    ? { color: "var(--black)", fontWeight: "600" }
                    : { color: "var(--grey)", textDecoration: "none" }
                }
              >
                Home
              </a>
            </Link>
            <Link href="/our-collection">
              <a
                style={
                  router.asPath === "/our-collection"
                    ? { color: "var(--black)", fontWeight: "600" }
                    : { color: "var(--grey)", textDecoration: "none" }
                }
              >
                Our Collection
              </a>
            </Link>
            <Link href="/about">
              <a
                style={
                  router.asPath === "/about"
                    ? { color: "var(--black)", fontWeight: "600" }
                    : { color: "var(--grey)", textDecoration: "none" }
                }
              >
                About Us
              </a>
            </Link>
            <Link href="/contact">
              <a
                style={
                  router.asPath === "/contact"
                    ? { color: "var(--black)", fontWeight: "600" }
                    : { color: "var(--grey)", textDecoration: "none" }
                }
              >
                Contact Us
              </a>
            </Link>
          </div>
          <Link href="/">
            <a className="main__header__logo">
              <Image
                alt="Decoras"
                layout="intrinsic"
                src={Logo}
                height={46}
                width={136}
              />
            </a>
          </Link>
          <div className="main__header__right__icon">
            <Image alt="Decoras" layout="intrinsic" src={Icon} />
          </div>
        </div>
      </header>

      {/* mobile version */}

      <header className="main__header__mob">
        <div
          style={{
            visibility: "hidden",
            pointerEvents: "none",
          }}
        >
          Close
        </div>
        <div className="header__logo__mob">
          <Image alt="Decoras" layout="intrinsic" src={Logo} />
        </div>

        <div
          className={
            toggle
              ? "main__header__mob__hamburger_open"
              : "main__header__mob__hamburger"
          }
          onClick={() => clickHandler()}
        >
          <div className="hamburger_btn_burger_1"></div>
          <div className="hamburger_btn_burger_2"></div>
          <div className="hamburger_btn_burger_3"></div>
        </div>

        <div
          className={
            !toggle
              ? "main__header__mob__overlay__hide"
              : "main__header__mob__overlay__show"
          }
          onClick={(e) => hideHandler(e)}
        ></div>
        <div
          className="main__header__mob__side__drawer"
          style={{
            transform: `translateX(${show}%)`,
          }}
        >
          <Link href="/">
            <a
              className={
                router.asPath === "/"
                  ? "header_mob_link_active"
                  : "header_mob_link"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/our-collection">
            <a
              className={
                router.asPath === "/our-collection"
                  ? "header_mob_link_active"
                  : "header_mob_link"
              }
            >
              Collections
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.asPath === "/about"
                  ? "header_mob_link_active"
                  : "header_mob_link"
              }
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.asPath === "/contact"
                  ? "header_mob_link_active"
                  : "header_mob_link"
              }
            >
              Contact
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;

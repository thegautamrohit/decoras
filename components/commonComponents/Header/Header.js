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
  const [expand, setExpand] = useState(false);

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

  const expandHandler = (e) => {
    setExpand(!expand);
  };

  return (
    <>
      <header className="main__header">
        <div className="main__header__main">
          <div className="main__header__link">
            <Link href="/">
              <a
                className="main__header__mono__link"
                style={
                  router.asPath === "/"
                    ? { color: "var(--black)", fontWeight: "600" }
                    : { color: "var(--grey)", textDecoration: "none" }
                }
              >
                Home
              </a>
            </Link>
            <div
              className="header_drop_down_menu"
              style={
                router.asPath.includes("our-collection")
                  ? { color: "var(--black)", fontWeight: "600" }
                  : { color: "var(--grey)", textDecoration: "none" }
              }
            >
              Our Collection
              <div className="header__drop__down__categories">
                <Link href="/our-collection/Furnishing">
                  <a className="header__drop__down__category">Furnishing</a>
                </Link>

                <Link href="/our-collection/Bags_and_Stationery">
                  <a className="header__drop__down__category">
                    Bags and Stationery
                  </a>
                </Link>

                <Link href="/our-collection/Table_Linen">
                  <a className="header__drop__down__category">Table Linen</a>
                </Link>

                <Link href="/our-collection/Kitchen_Linen">
                  <a className="header__drop__down__category">Kitchen Linen</a>
                </Link>

                <Link href="/our-collection/Decor">
                  <a className="header__drop__down__category">Decor</a>
                </Link>

                <Link href="/our-collection/Living">
                  <a className="header__drop__down__category">Living</a>
                </Link>

                <Link href="/our-collection/Floor_Covering">
                  <a className="header__drop__down__category">Floor Covering</a>
                </Link>
              </div>
            </div>
            <Link href="/about">
              <a
                className="main__header__mono__link"
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
                className="main__header__mono__link"
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
          <div onClick={(e) => expandHandler(e)}>
            <div
              className={
                router.asPath.includes("our-collection")
                  ? "header_mob_link_active"
                  : "header_mob_link"
              }
            >
              Collections
            </div>

            {expand && (
              <div className="header__drop__down__categories_mob">
                <Link href="/our-collection/Furnishing">
                  <a className="header__drop__down__category_mob">Furnishing</a>
                </Link>

                <Link href="/our-collection/Bags_and_Stationery">
                  <a className="header__drop__down__category_mob">
                    Bags and Stationery
                  </a>
                </Link>

                <Link href="/our-collection/Table_Linen">
                  <a className="header__drop__down__category_mob">
                    Table Linen
                  </a>
                </Link>

                <Link href="/our-collection/Kitchen_Linen">
                  <a className="header__drop__down__category_mob">
                    Kitchen Linen
                  </a>
                </Link>

                <Link href="/our-collection/Decor">
                  <a className="header__drop__down__category_mob">Decor</a>
                </Link>

                <Link href="/our-collection/Living">
                  <a className="header__drop__down__category_mob">Living</a>
                </Link>

                <Link href="/our-collection/Floor_Covering">
                  <a className="header__drop__down__category_mob">
                    Floor Covering
                  </a>
                </Link>
              </div>
            )}
          </div>
          <Link href="/about">
            <a
              className={
                router.asPath === "/about"
                  ? "header_mob_link_active"
                  : "header_mob_link"
              }
            >
              About Us
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
              Contact Us
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../Assets/Logo/DecorasLogo.png";
import Scroll from "../../../Assets/misc/scrollTop.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer__container">
      <div className="footer__container__main">
        <div className="footer__top__bar">
          <div className="footer__decoras__icon">
            <Image
              alt="Decoras"
              src={Logo}
              className="footer__decoras__icon__image"
              layout="intrinsic"
              width={130}
              height={44}
            />
          </div>

          <div className="footer__scroll__top" onClick={() => scrollTop()}>
            <Image alt="Decoras" src={Scroll} height={50} width={50} />
          </div>
        </div>

        <div className="footer__middle__bar">
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? "active__footer__link"
                  : "inactive__footer__link"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/our-collection">
            <a
              className={
                router.pathname == "/our-collection"
                  ? "active__footer__link"
                  : "inactive__footer__link"
              }
            >
              Collections
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname == "/about"
                  ? "active__footer__link"
                  : "inactive__footer__link"
              }
            >
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname == "/contact"
                  ? "active__footer__link"
                  : "inactive__footer__link"
              }
            >
              Contact Us
            </a>
          </Link>
        </div>

        <div className="footer__bottom__bar">
          <div className="footer__social_icons">
            <Link className="footer__social__mono__link" href="/">
              <a className="footer__social__mono__link">
                <FaFacebookF color="#23332F" />
              </a>
            </Link>
            <Link className="footer__social__mono__link" href="/">
              <a className="footer__social__mono__link">
                <BsInstagram color="#23332F" />
              </a>
            </Link>
            <Link className="footer__social__mono__link" href="/">
              <a className="footer__social__mono__link">
                <BsWhatsapp color="#23332F" />
              </a>
            </Link>
            <Link className="footer__social__mono__link" href="/">
              <a className="footer__social__mono__link">
                <FaLinkedinIn color="#23332F" />
              </a>
            </Link>
          </div>

          <div className="footer__disclaimer__bar">
            <p>Disclaimer</p>
            <p>Privacy Policy</p>
            <p>2022 Decoras</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../Assets/Logo/DecorasLogo.png";
import { BsArrowUpCircleFill, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__top__bar">
        <div className="footer__decoras__icon">
          <Image
            src={Logo}
            className="footer__decoras__icon__image"
            layout="fill"
          />
        </div>

        <div className="footer__scroll__top">
          <BsArrowUpCircleFill size={50} />
        </div>
      </div>

      <div className="footer__middle__bar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Collections</a>
        </Link>
        <Link href="/about-us">
          <a>About us</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact us</a>
        </Link>
      </div>

      <div className="footer__bottom__bar">
        <div className="footer__social_icons">
          <Link href="/">
            <a>
              <FaFacebookF />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BsInstagram />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import About from "../../Assets/Homepage/About/about.png";
import Mission from "../../Assets/Homepage/About/mission.png";
import Button from "../commonComponents/Button/Button";

function AboutSection() {
  return (
    <ParallaxProvider speed={-10}>
      <div className="about__section__container">
        <div className="about__section__mono__slab">
          <div className="about__mono__slab__content_1">
            <h1>About Us</h1>
            <p>
              We are fueled by passion for design and a desire to help others
              create a space they love.
            </p>
            <Button title="Read More" />
          </div>
          <div className="about__mono__slab__image_1">
            {/* <Image
            alt="Decoras"
            src={About}
            className="about__mono__slab__image__img"
            layout="fill"
          /> */}
          </div>
        </div>
        <div className="about__section__mono__slab">
          <div className="about__mono__slab__content_2">
            <h1>Our Mission</h1>
            <p>
              We believe that healthy ideas flourish in an healthy environment,
              which is why we have created an stress-free way to bring serenity
              into your home, through our signature collections of home decor
              products.
            </p>
            {/* <Button title="Read More" /> */}
          </div>
          <div className="about__mono__slab__image_2">
            {/* <Image
            alt="Decoras"
            src={Mission}
            className="about__mono__slab__image__img"
            layout="fill"
          /> */}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default AboutSection;

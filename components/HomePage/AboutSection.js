import React, { useState, useEffect } from "react";
import Image from "next/image";
import About from "../../Assets/Homepage/About/about.png";
import Mission from "../../Assets/Homepage/About/mission.png";
import Button from "../commonComponents/Button/Button";

function AboutSection() {
  const [offsetY, setOffsetY] = useState(0);

  const offSet = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", offSet);

    return () => window.removeEventListener("scroll", offSet);
  }, []);

  return (
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
        <div className="about__mono__slab__image__container">
          <div
            className="about__mono__slab__image_1"
            style={{ transform: `translateY(${offsetY * 0.2 - 160}px)` }}
          ></div>
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
        <div className="about__mono__slab__image__container">
          <div
            className="about__mono__slab__image_2"
            style={{ transform: `translateY(${offsetY * 0.2 - 190}px)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

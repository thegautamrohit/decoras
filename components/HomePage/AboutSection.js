import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import About from "../../Assets/Homepage/About/about.png";
import Mission from "../../Assets/Homepage/About/mission.png";
import Button from "../commonComponents/Button/Button";

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

function AboutSection() {
  const ref = useRef();
  const [offsetY, setOffsetY] = useState(0);

  const offSet = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", offSet);

    return () => window.removeEventListener("scroll", offSet);
  }, []);

  const onScreen = useOnScreen(ref, "0px");

  console.log(onScreen);

  return (
    <div className="about__section__container" ref={ref}>
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
            style={{ transform: `translateY(${offsetY * 0.3 - 260}px)` }}
          >
            {/* <Image
            alt="Decoras"
            src={About}
            className="about__mono__slab__image__img"
            layout="fill"
          /> */}
          </div>
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
          <Button title="Read More" />
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
  );
}

export default AboutSection;

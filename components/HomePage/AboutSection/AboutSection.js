import React from "react";
import Image from "next/image";
import About from "../../../Assets/Homepage/About/about.png";
import Mission from "../../../Assets/Homepage/About/mission.png";
import Button from "../../commonComponents/Button/Button";

function AboutSection() {
  return (
    <div className="about__section__container">
      <div className="about__section__mono__slab">
        <div className="about__mono__slab__content">
          <h1>About Us</h1>
          <p>
            No middlemen, exclusives from over the globe, Reliable customer
            service, One stop shop for Home Owners, providing local products.
          </p>
          <Button title="Read More" />
        </div>
        <div className="about__mono__slab__image">
          <Image src={About} layout="intrinsic" />
        </div>
      </div>
      <div className="about__section__mono__slab">
        <div className="about__mono__slab__content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat
          </p>
          <Button title="Read More" />
        </div>
        <div className="about__mono__slab__image">
          <Image src={Mission} layout="intrinsic" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

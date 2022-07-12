import React from "react";
import Image from "next/image";
import About1 from "../../Assets/Banner/desktop_banner/banner5.png";

function AboutMission() {
  return (
    <div className="about__content__mission__container">
      <div className="about__content__content">
        <h1>OUR MISSION</h1>
        <div className="about__mission__mob__image">
          <Image
            alt="Decoras"
            src={About1}
            height={351}
            width={600}
            layout="responsive"
          />
        </div>
        <p>
          We believe that healthy ideas flourish in an healthy environment,
          which is why we have created an stress-free way to bring serenity into
          your home, through our signature collections of home decor products.
        </p>
      </div>
      <div className="about__content__image">
        <Image
          alt="Decoras"
          src={About1}
          height={351}
          width={600}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default AboutMission;

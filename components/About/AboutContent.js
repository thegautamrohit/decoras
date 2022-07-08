import Image from "next/image";
import About1 from "../../Assets/Banner/banner5.png";
import React from "react";

function AboutContent() {
  return (
    <>
      <h1 className="about__content__head__text">CREATE A SPACE YOU LOVE</h1>
      <div className="about__content__space__container">
        <div className="about__content__image__bar">
          <div className="about_content__image__sub_1">
            <div className="about__content__image__part_1">
              <Image
                alt="Decoras"
                src={About1}
                width={327}
                height={254}
                layout="intrinsic"
              />
            </div>
            <div className="about__content__image__part_2">
              <Image
                alt="Decoras"
                src={About1}
                width={251}
                height={160}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="about_content__image__sub_2">
            <div className="about__content__image__part_3">
              <Image
                alt="Decoras"
                src={About1}
                width={251}
                height={169}
                layout="intrinsic"
              />
            </div>

            <div className="about__content__image__part_4">
              <Image
                alt="Decoras"
                src={About1}
                width={327}
                height={263}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>

        <div className="about__content__space__text">
          <h1>CREATE A SPACE YOU LOVE</h1>
          <p>
            Decoras is a state of the art home decor brand which is built on the
            pillars of luxury, e’lan, elegance and class. Our products enchant
            for their sobriety, to last for generations, faithful to the shapes
            of each period, with a touch of the present.
          </p>

          <p>
            We are fueled by passion for design and a desire to help others
            create a space they love.
          </p>
          <p>
            Each product has been designed to cater to comfort and functionality
            of your home. Our products can simply add a refreshing appeal to
            your old spaces or you can look for complete set-ups as per your
            liking.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutContent;

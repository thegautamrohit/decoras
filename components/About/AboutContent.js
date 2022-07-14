import React, { useState, useEffect } from "react";

function AboutContent() {
  const [offsetY, setOffsetY] = useState(0);

  const offSet = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", offSet);

    return () => window.removeEventListener("scroll", offSet);
  }, []);
  return (
    <>
      {/* <h1 className="about__content__head__text">CREATE A SPACE YOU LOVE</h1> */}
      <div className="about__content__space__container">
        <div className="about__mono__slab__image__container">
          <div
            className="about__page__image"
            style={{ transform: `translateY(${offsetY * 0.2 - 40}px)` }}
          ></div>
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

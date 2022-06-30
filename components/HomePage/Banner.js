import React, { useState } from "react";
import Carousel, { CarouselItem } from "../commonComponents/Carousal/Caraousal";
import BannerImage from "../../Assets/Banner/luxury-modern-dark-living-room-interior@2x.png";
import Image from "next/image";
import Button from "../commonComponents/Button/Button";

const data = [
  {
    id: 1,
    image: BannerImage,
  },
  {
    id: 2,
    image: BannerImage,
  },
  {
    id: 3,
    image: BannerImage,
  },
  {
    id: 4,
    image: BannerImage,
  },
  {
    id: 5,
    image: BannerImage,
  },
  {
    id: 6,
    image: BannerImage,
  },
  {
    id: 7,
    image: BannerImage,
  },
];
const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  return (
    <div className="homepage__banner">
      <Carousel title="Homepage" details={data} Index={bannerIndex}>
        {data?.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <>
                <Image
                  alt="Decoras"
                  src={item.image}
                  layout="fixed"
                  width={1548}
                  height={574}
                />
                <div className="carousel__caption">
                  <h1>WE LOVE INTERIORS</h1>
                  <h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy e
                  </h3>
                  <Button title={"Explore"} />
                </div>
              </>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;

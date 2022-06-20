import React from "react";
import Carousel, { CarouselItem } from "../commonComponents/Carousal/Caraousal";
import BannerImage from "../../Assets/Banner/luxury-modern-dark-living-room-interior@2x.png";

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
  return (
    <div className="homepage__banner">
      <Carousel title="Homepage">
        {data?.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <img src={item.image} />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;

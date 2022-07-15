import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Living from "../../Assets/collection/Living.png";
import Bags_and_stationery from "../../Assets/collection/Bags_and_stationery.jpg";
import Decor from "../../Assets/collection/Decor.jpg";
import Floor_Covering from "../../Assets/collection/Floor_Covering.png";
import Furnishing from "../../Assets/collection/Furnishing.png";
import Kitchen_Linens from "../../Assets/collection/Kitchen_Linen.jpg";
import Table_Linens from "../../Assets/collection/Table_Linens.png";

const Banner = ({ name }) => {
  const router = useRouter();
  const [image, setImage] = useState();

  const data = [
    {
      id: 1,
      name: "Bags_and_stationery",
      image: Bags_and_stationery,
    },
    {
      id: 2,
      name: "Decor",
      image: Decor,
    },
    {
      id: 3,
      name: "Floor_Covering",
      image: Floor_Covering,
    },
    {
      id: 4,
      name: "Furnishing",
      image: Furnishing,
    },
    {
      id: 5,
      name: "Kitchen_Linens",
      image: Kitchen_Linens,
    },
    {
      id: 6,
      name: "Living",
      image: Living,
    },
    {
      id: 7,
      name: "Table_Linens",
      image: Table_Linens,
    },
  ];

  useEffect(() => {
    if (name !== "") {
      const animate = document.getElementsByClassName("animation__title")[0];

      animate.style.transform = "translateX(0)";
    }

    const replaceDash = router.query.slug
      .toLowerCase()
      .replace("_", " ")
      .replace("_", " ");

    const img = data.filter(
      (item) =>
        item.name.toLowerCase().replace("_", " ").replace("_", " ") ===
        replaceDash
    );

    setImage(img[0]?.image.src);

    return () => {
      if (name !== "") {
        animate.style.transform = "";
      }
    };
  }, [name]);

  return (
    <div
      className="bannerCollection"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="bannerCollectionImage">
        <Image
          src={Living}
          layout="fixed"
          objectFit="cover"
          height={430}
          width={1248}
        />
      </div> */}

      <h1 className="animation__title">{name}</h1>
    </div>
  );
};

export default Banner;

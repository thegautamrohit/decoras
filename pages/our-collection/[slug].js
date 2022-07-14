import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MiddleSection from "../../components/Collection/MiddleSection";
import { ProductData } from "../../components/ProductData";
import { filterCategory, shuffleArray, filterArray } from "../../helper/helper";
import Bags_and_stationery from "../../Assets/collection/Bags_and_stationery.jpg";
import Decor from "../../Assets/collection/Decor.jpg";
import Floor_Covering from "../../Assets/collection/Floor_Covering.png";
import Furnishing from "../../Assets/collection/Furnishing.png";
import Kitchen_Linens from "../../Assets/collection/Kitchen_Linen.jpg";
import Living from "../../Assets/collection/Living.png";
import Table_Linens from "../../Assets/collection/Table_Linens.png";
const Banner = dynamic(() => import("../../components/Collection/Banner"), {
  ssr: true,
});
const shallowCopy = JSON.parse(JSON.stringify(ProductData));

const shuffledArray = shuffleArray(shallowCopy);

const categoryArray = filterCategory(ProductData);

const Collection = ({ val, img }) => {
  const [category, setCategory] = useState({ name: "", clicked: false, id: 0 });
  const [sub_category, setSub_Category] = useState({
    name: "",
    clicked: false,
    id: 0,
  });
  const [shuffled, setShuffled] = useState([]);
  const [categorizedArray, setCategorizedArray] = useState([]);

  useEffect(() => {
    const filterCategory = ProductData.filter(
      (item) => item.category.toLowerCase() === val
    ).map((item) => item.sub_category);

    const filteredData = filterArray(filterCategory);

    setCategorizedArray([...filteredData]);
    const getSpecificCategory = ProductData.filter(
      (item) => item.category.toLowerCase() === val
    );
    shuffleArray(getSpecificCategory);
    setShuffled([...getSpecificCategory]);
    setSub_Category({ name: "", clicked: false, id: 0 });
  }, [val]);

  // const selectedCategory = (data) => {
  //   setCategory(data);

  //   const filterCategory = ProductData.filter(
  //     (item) => item.category === val
  //   ).map((item) => item.sub_category);
  //   const filteredData = filterArray(filterCategory);

  //   setCategorizedArray([`${data.name}`, ...filteredData]);
  //   const getSpecificCategory = ProductData.filter(
  //     (item) => item.category === data.name
  //   );
  //   shuffleArray(getSpecificCategory);
  //   setShuffled([...getSpecificCategory]);
  // };
  const selectedCategorySub = (data) => {
    let getSpecificCategory = [];
    setSub_Category(data);

    getSpecificCategory = ProductData.filter(
      (item) => item.sub_category === data.name
    );

    shuffleArray(getSpecificCategory);
    setShuffled([...getSpecificCategory]);
  };

  const goBack = () => {
    setCategorizedArray(categoryArray);
    setShuffled(shuffledArray);
    setCategory({ name: "", clicked: false, id: 0 });
    setSub_Category({ name: "", clicked: false, id: 0 });
  };

  // console.log();

  return (
    <div className="our__collection">
      <Banner name={val} img={img} />
      <MiddleSection
        // selected={(data) => selectedCategory(data)}
        selectedSub={(data) => selectedCategorySub(data)}
        category={category}
        sub_category={sub_category}
        categoryArray={categorizedArray}
        shuffledArray={shuffled}
        back={() => goBack()}
      />
    </div>
  );
};

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

export async function getServerSideProps(context) {
  const replaceDash = context.query.slug
    .toLowerCase()
    .replace("_", " ")
    .replace("_", " ");

  const img = data.filter(
    (item) =>
      item.name.toLowerCase().replace("_", " ").replace("_", " ") ===
      replaceDash
  );

  return {
    props: {
      val: replaceDash,
      img: img[0].image,
    }, // will be passed to the page component as props
  };
}

export default Collection;

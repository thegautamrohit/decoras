import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MiddleSection from "../components/Collection/MiddleSection";
import { ProductData } from "../components/ProductData";
import { filterCategory, shuffleArray, filterArray } from "../helper/helper";

const Banner = dynamic(() => import("../components/Collection/Banner"), {
  ssr: true,
});
const shallowCopy = JSON.parse(JSON.stringify(ProductData));

const shuffledArray = shuffleArray(shallowCopy);

const categoryArray = filterCategory(ProductData);

const Collection = () => {
  const [category, setCategory] = useState({ name: "", clicked: false, id: 0 });
  const [sub_category, setSub_Category] = useState({
    name: "",
    clicked: false,
    id: 0,
  });
  const [shuffled, setShuffled] = useState([]);
  const [categorizedArray, setCategorizedArray] = useState([]);

  useEffect(() => {
    setShuffled(shuffledArray);
    setCategorizedArray(categoryArray);
  }, []);

  const selectedCategory = (data) => {
    setCategory(data);

    const filterCategory = ProductData.filter(
      (item) => item.category === data.name
    ).map((item) => item.sub_category);
    const filteredData = filterArray(filterCategory);

    setCategorizedArray([`${data.name}`, ...filteredData]);
    const getSpecificCategory = ProductData.filter(
      (item) => item.category === data.name
    );
    shuffleArray(getSpecificCategory);
    setShuffled([...getSpecificCategory]);
  };
  const selectedCategorySub = (data) => {
    let getSpecificCategory = [];
    setSub_Category(data);

    console.log(data.name, categorizedArray[0]);
    if (data.name === categorizedArray[0]) {
      getSpecificCategory = ProductData.filter(
        (item) => item.category === data.name
      );
    } else {
      getSpecificCategory = ProductData.filter(
        (item) => item.sub_category === data.name
      );
    }

    shuffleArray(getSpecificCategory);
    setShuffled([...getSpecificCategory]);
  };

  const goBack = () => {
    setCategorizedArray(categoryArray);
    setShuffled(shuffledArray);
    setCategory({ name: "", clicked: false, id: 0 });
    setSub_Category({ name: "", clicked: false, id: 0 });
  };

  return (
    <div className="our__collection">
      <Banner name={category.name} />
      <MiddleSection
        selected={(data) => selectedCategory(data)}
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

export default Collection;

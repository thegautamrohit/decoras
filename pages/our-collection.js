import React, { useState, useEffect } from "react";
import Banner from "../components/Collection/Banner";
import MiddleSection from "../components/Collection/MiddleSection";
import { ProductData } from "../components/ProductData";
import { filterCategory, shuffleArray, filterArray } from "../helper/helper";

const shallowCopy = JSON.parse(JSON.stringify(ProductData));

const shuffledArray = shuffleArray(shallowCopy);

const categoryArray = filterCategory(ProductData);

const Collection = () => {
  const [category, setCategory] = useState({ name: "", clicked: false, id: 0 });
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

    setCategorizedArray([...filteredData]);
    const getSpecificCategory = ProductData.filter(
      (item) => item.category === data.name
    );
    shuffleArray(getSpecificCategory);
    setShuffled([...getSpecificCategory]);
  };

  return (
    <div className="our__collection">
      <Banner name={category.name} />
      <MiddleSection
        selected={(data) => selectedCategory(data)}
        category={category}
        categoryArray={categorizedArray}
        shuffledArray={shuffled}
      />
    </div>
  );
};

export default Collection;

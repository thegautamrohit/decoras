import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MiddleSection from "../../components/Collection/MiddleSection";
import { ProductData } from "../../components/ProductData";
import { filterCategory, shuffleArray, filterArray } from "../../helper/helper";

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

export async function getServerSideProps(context) {
  const replaceDash = context.query.slug
    .toLowerCase()
    .replace("_", " ")
    .replace("_", " ");

  return {
    props: {
      val: replaceDash,
    }, // will be passed to the page component as props
  };
}

export default Collection;

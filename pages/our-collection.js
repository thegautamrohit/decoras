import React, { useState } from "react";
import Banner from "../components/Collection/Banner";
import MiddleSection from "../components/Collection/MiddleSection";

const Collection = () => {
  const [category, setCategory] = useState({ name: "", clicked: false, id: 0 });

  console.log(category);
  return (
    <div className="our__collection">
      <Banner name={category.name} />
      <MiddleSection
        selected={(data) => setCategory(data)}
        category={category}
      />
    </div>
  );
};

export default Collection;

import { ProductData } from "../components/ProductData";
const categoryArray = [];

export const filterCategory = (category) => {
  category.forEach((item) => {
    if (!categoryArray.includes(item.category)) {
      categoryArray.push(item.category);
    }
  });
  return categoryArray;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const filterArray = (array) => {
  const result = [];
  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
};

// guide-ui/src/components/api.js

import { products } from "../data/products.js";

export const fetchSearchResults = async (
  searchQuery,
  universities,
  experience,
  category
) => {
  // Separate normal products and bundled products
  const normalProducts = products.filter((product) => !product.products);
  const bundledProducts = products.filter((product) => product.products);

  return {
    searchQuery,
    universities,
    experience,
    category,
    normalProducts,
    bundledProducts,
  };
};

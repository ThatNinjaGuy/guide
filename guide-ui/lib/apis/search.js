// guide-ui/src/components/api.js

import { fetchProducts } from "./products";

export const fetchSearchResults = async (
  searchQuery,
  universities,
  experience,
  category
) => {
  const products = await fetchProducts();

  // Filter products based on search criteria
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

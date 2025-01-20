import { Product, fetchProducts } from "./products";

interface SearchResults {
  searchQuery: string;
  universities: string[];
  experience: string[];
  category: string[];
  normalProducts: Product[];
  bundledProducts: Product[];
}

export const fetchSearchResults = async (
  searchQuery: string,
  universities: string[],
  experience: string[],
  category: string[]
): Promise<SearchResults> => {
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

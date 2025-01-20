import { ref, get, child } from "firebase/database";
import { db } from "@/lib/config/firebase";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  products?: string[];
}

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const productsRef = ref(db, "products");
    const snapshot = await get(productsRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log("No products available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch only bundled products by filtering locally
export const fetchFeaturedBundles = async (): Promise<Product[]> => {
  try {
    const products = await fetchProducts();
    return products.filter((product) => product.products);
  } catch (error) {
    console.error("Error fetching bundled products:", error);
    return [];
  }
};

// Fetch a single product by ID
export const fetchProductById = async (
  productId: string
): Promise<Product | null> => {
  try {
    const productRef = child(ref(db, "products"), productId);
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log(`No product found with ID: ${productId}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    return null;
  }
};

// Fetch multiple products by their IDs
export const fetchProductsByIds = async (
  productIds: string[]
): Promise<Product[]> => {
  try {
    const products = await Promise.all(
      productIds.map(async (id) => {
        const product = await fetchProductById(id);
        return product;
      })
    );
    return products.filter((product): product is Product => product !== null);
  } catch (error) {
    console.error("Error fetching products by IDs:", error);
    return [];
  }
};

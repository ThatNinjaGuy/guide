import { ref, set } from "firebase/database";
import { db } from "../config/firebase.js";
import { categories } from "../data/categories.js";

export const seedCategories = async () => {
  try {
    // Create a reference to the categories node
    const categoriesRef = ref(db, "categories");

    // Convert array to object with IDs as keys
    const categoriesObject = categories.reduce((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {});

    // Set the data in Firebase
    await set(categoriesRef, categoriesObject);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

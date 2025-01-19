import { ref, set } from "firebase/database";
import { db } from "./firebase.js"; // Adjust the path if needed
import { categories } from "./data/categories.js"; // Adjust the path if needed
import { experiences } from "./data/experience.js";
import { products } from "./data/products.js";
import { universities } from "./data/universities.js";

export const seedCategories = async () => {
  try {
    const categoriesRef = ref(db, "categories");
    const categoriesObject = categories.reduce((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {});

    await set(categoriesRef, categoriesObject);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

export const seedExperiences = async () => {
  try {
    const experiencesRef = ref(db, "experiences");
    const experiencesObject = experiences.reduce((acc, experience) => {
      acc[experience.id] = experience;
      return acc;
    }, {});

    await set(experiencesRef, experiencesObject);
    console.log("Experiences seeded successfully!");
  } catch (error) {
    console.error("Error seeding experiences:", error);
  }
};

export const seedProducts = async () => {
  try {
    const productsRef = ref(db, "products");
    const productsObject = products.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {});

    await set(productsRef, productsObject);
    console.log("Products seeded successfully!");
  } catch (error) {
    console.error("Error seeding products:", error);
  }
};

export const seedUniversities = async () => {
  try {
    const universitiesRef = ref(db, "universities");
    const universitiesObject = universities.reduce((acc, university) => {
      acc[university.id] = university;
      return acc;
    }, {});

    await set(universitiesRef, universitiesObject);
    console.log("Universities seeded successfully!");
  } catch (error) {
    console.error("Error seeding universities:", error);
  }
};

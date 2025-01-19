import { seedCategories } from "./seedDatabase";

const runSeed = async () => {
  try {
    await seedCategories();
    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error running seed:", error);
  }
};

runSeed();

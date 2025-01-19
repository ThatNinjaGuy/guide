import {
  seedCategories,
  seedExperiences,
  seedProducts,
  seedUniversities,
} from "./seedDatabase.js";

const runSeed = async () => {
  try {
    await seedCategories();
    await seedExperiences();
    await seedProducts();
    await seedUniversities();
    console.log("All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

runSeed();

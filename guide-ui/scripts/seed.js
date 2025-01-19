import { seedCategories } from "../src/utils/seedDatabase.js";

seedCategories()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

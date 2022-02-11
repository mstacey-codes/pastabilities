import { Category } from "../../models/index.js";

class CategorySeeder {
  static async seed() {
    const categoriesData = [
      { name: "Short" },
      { name: "Long" },
      { name: "Soup" },
      { name: "Fillable" },
      { name: "Fun" },
      { name: "Other" },
    ];
    for (const singleCategoryData of categoriesData) {
      const currentCategory = await Category.query().findOne({ name: singleCategoryData.name });
      if (!currentCategory) {
        await Category.query().insert(singleCategoryData);
      }
    }
  }
}

export default CategorySeeder;

import { Pasta, Category } from "../../models/index.js";

class PastaSeeder {
  static async seed() {
    const pastasData = [
      {
        name: "spaghetti",
        description: "Long Noodle good for chicken parm!",
        categoryId: (await Category.query().findOne({ name: "Long" })).id,
      },
      {
        name: "cavatappi",
        description: "Spiral Pasta!",
        categoryId: (await Category.query().findOne({ name: "Short" })).id,
      },
      {
        name: "elbow",
        description: "It Looks Like an Elbow!!",
        categoryId: (await Category.query().findOne({ name: "Short" })).id,
      },
      {
        name: "capelli de chef",
        description: "Is this a chefs hat?!",
        categoryId: (await Category.query().findOne({ name: "Fun" })).id,
      },
      {
        name: "farfalle",
        description: "Bowties are stylish, and so are butterflies.",
        categoryId: (await Category.query().findOne({ name: "Fun" })).id,
      },
    ];
    for (const singlePastaData of pastasData) {
      const currentPasta = await Pasta.query().findOne({ name: singlePastaData.name });
      if (!currentPasta) {
        await Pasta.query().insert(singlePastaData);
      }
    }
  }
}

export default PastaSeeder;

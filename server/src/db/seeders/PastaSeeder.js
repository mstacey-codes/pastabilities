import { Pasta } from "../../models/index.js";

class PastaSeeder {
  static async seed() {
    const pastasData = [
      {
        name: "spaghetti",
        description: "Long Noodle good for chicken parm!",
        categoryId: 2,
      },
      {
        name: "cavatappi",
        description: "Spiral Pasta!",
        categoryId: 1,
      },
      {
        name: "elbow",
        description: "It Looks Like an Elbow!!",
        categoryId: 1,
      },
      {
        name: "capelli de chef",
        description: "Is this a chefs hat?!",
        categoryId: 6,
      },
      {
        name: "farfalle",
        description: "Bowties are stylish, and so are butterflies.",
        categoryId: 6,
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

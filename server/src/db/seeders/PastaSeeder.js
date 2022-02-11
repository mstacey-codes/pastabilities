import { Pasta, Category } from "../../models/index.js";

class PastaSeeder {
  static async seed() {
    const pastasData = [
      {
        name: "spaghetti",
        description:
          "A long, rounded noodle that is extruded. Classically goes with red sauce and meat.",
        categoryId: (await Category.query().findOne({ name: "Long" })).id,
      },
      {
        name: "fettucine",
        description: "A long, flat noodle that is associated with alfredo sauce and Rome.",
        categoryId: (await Category.query().findOne({ name: "Long" })).id,
      },
      {
        name: "angel hair",
        description: "One of the thinnest noodles available, it pairs well with oil based sauces.",
        categoryId: (await Category.query().findOne({ name: "Long" })).id,
      },
      {
        name: "bucatini",
        description:
          "This pasta is thin and hollow, and some people have noticed that it's shaped like a straw- so they sell it as an eco-friendly straw.",
        categoryId: (await Category.query().findOne({ name: "Long" })).id,
      },
      {
        name: "cavatappi",
        description: "A ridged, corkscrew, hollow pasta. It works very well with many sauces.",
        categoryId: (await Category.query().findOne({ name: "Short" })).id,
      },
      {
        name: "macaroni",
        description: "Often called 'elbows', it's a small, curved tube.",
        categoryId: (await Category.query().findOne({ name: "Short" })).id,
      },
      {
        name: "penne",
        description:
          "Hollow cylinders that are cut at parallel angles on each end. Can be smooth or ridged.",
        categoryId: (await Category.query().findOne({ name: "Short" })).id,
      },
      {
        name: "rotelle",
        description: "This pasta is shaped like tiny wagon wheels, typically with six spokes.",
        categoryId: (await Category.query().findOne({ name: "Fun" })).id,
      },
      {
        name: "paccheri",
        description:
          "These large tubular pastas often collapse under their own weight when cooked.",
        categoryId: (await Category.query().findOne({ name: "Short" })).id,
      },
      {
        name: "alfabeti",
        description: "Often given to small children, this pasta is shaped into letters.",
        categoryId: (await Category.query().findOne({ name: "Soup" })).id,
      },
      {
        name: "ditali",
        description: "Ditali are hollow pastas, as short as they are wide!",
        categoryId: (await Category.query().findOne({ name: "Soup" })).id,
      },
      {
        name: "stelle",
        description: "These tiny stars are best used in soups because they drown in sauce.",
        categoryId: (await Category.query().findOne({ name: "Soup" })).id,
      },
      {
        name: "cannelloni",
        description:
          "These long tubes are often filled with cheese or meat, covered in sauce, and baked.",
        categoryId: (await Category.query().findOne({ name: "Fillable" })).id,
      },
      {
        name: "ravioli",
        description:
          "The classic filled pasta! Fillings vary wildly, but they are known for their flat bottom and rounded top.",
        categoryId: (await Category.query().findOne({ name: "Fillable" })).id,
      },
      {
        name: "tortellini",
        description:
          "Tortellini are often make with one sheet of pasta; filling is put in and it is folded over like a dumpling.",
        categoryId: (await Category.query().findOne({ name: "Fillable" })).id,
      },
      {
        name: "farfalle",
        description:
          "While these pastas are named after butterflies, don't be surprised if someone calls them bowties!",
        categoryId: (await Category.query().findOne({ name: "Fun" })).id,
      },
      {
        name: "cascatelli",
        description:
          "This pasta was invented in 2021 by a podcast! It was designed to hold sauces like no other!",
        categoryId: (await Category.query().findOne({ name: "Fun" })).id,
      },
      {
        name: "gnocchi",
        description:
          "Made primarily with potatoes, gnocchi are a classic pasta with a bit of a twist.",
        categoryId: (await Category.query().findOne({ name: "Other" })).id,
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

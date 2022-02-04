import { Pasta, Review } from "../../models/index.js";

class ReviewSeeder {
  static async seed() {
    const reviewData = [
      {
        title: "spaghetti is gooood!",
        review: "It goes so well with chicken parm",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "spaghetti" })).id,
      },
      {
        title: "spaghetti with meatballs",
        review: "Sweedish meatballs with spaghet!",
        rating: "4",
        pastaId: (await Pasta.query().findOne({ name: "spaghetti" })).id,
      },
    ];
    for (const singleReviewData of reviewData) {
      const currentReview = await Review.query().findOne({ title: singleReviewData.title });
      if (!currentReview) {
        await Review.query().insert(singleReviewData);
      }
    }
  }
}

export default ReviewSeeder;

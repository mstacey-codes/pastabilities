import { Pasta, Review } from "../../models/index.js";

class ReviewSeeder {
  static async seed() {

    spaghettiQuery = (await Pasta.query().findOne({ name: "spaghetti" })).id
    
    const reviewData = [
      {
        title: "spaghetti is gooood!",
        body: "It goes so well with chicken parm",
        rating: "5",
        pastaId: {spaghettiQuery}
      },
      {
        title: "spaghetti with meatballs",
        body: "Sweedish meatballs with spaghet!",
        rating: "4",
        pastaId: {spaghettiQuery}
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

import { Pasta, Review, User } from "../../models/index.js";

class ReviewSeeder {
  static async seed() {
    const reviewData = [
      {
        title: "spaghetti is gooood!",
        body: "When I'm feeling down, all I really want is a big bowl of spaghetti noodles...",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "spaghetti" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "spaghetti with meatballs",
        body: "Sweedish meatballs with spaghet!",
        rating: "4",
        pastaId: (await Pasta.query().findOne({ name: "spaghetti" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
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

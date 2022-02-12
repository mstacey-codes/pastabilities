import ReviewsSerializer from "./ReviewsSerializer.js";

class PastasSerializer {
  static async getSummary(pasta) {
    const allowedAttributes = ["id", "name", "description"];

    let serializedPasta = {};
    for (const attribute of allowedAttributes) {
      serializedPasta[attribute] = pasta[attribute];
    }
    const relatedReviews = await pasta.$relatedQuery("reviews");
    serializedPasta.numberOfReviews = relatedReviews.length;
    if (relatedReviews.length !== 0) {
      const allRatings = relatedReviews.map((review) => {
        return review.rating;
      });
      const totalledRatings = allRatings.reduce((memo, current) => {
        return (memo += current);
      }, 0);

      let averageRating = (totalledRatings / allRatings.length).toFixed(2);

      serializedPasta.averageRating = averageRating;
    }
    return serializedPasta;
  }

  static async getDetails(pasta) {
    const serializedPasta = this.getSummary(pasta);
    const relatedReviews = await pasta.$relatedQuery("reviews");
    const serializedReviews = await ReviewsSerializer.getSummary(relatedReviews);
    console.log(serializedReviews);
    serializedPasta.reviews = serializedReviews;
    return serializedPasta;
  }

  // static async getDetails(pasta) {
  //   const serializedPasta = this.getSummary(pasta);
  //   const relatedReviews = await pasta.$relatedQuery("reviews");
  //   const serializedReviews = await ReviewsSerializer.getDetails(review);
  //   console.log(serializedReviews);
  //   serializedPasta.reviews = serializedReviews;
  //   return serializedPasta;
  // }

  // static async getAllDetails(pasta) {
  //   const serializedPasta = this.getSummary(pasta);
  //   serializedPasta.category = relatedCategory;
  //   serializedPasta.reviews = relatedReviews;

  // if (relatedReviews.length !== 0) {
  //   const allRatings = relatedReviews.map((review) => {
  //     return review.rating;
  //   });
  //   const totalledRatings = allRatings.reduce((memo, current) => {
  //     return (memo += current);
  //   }, 0);

  //   let averageRating = (totalledRatings / allRatings.length).toFixed(2);

  //   serializedPasta.averageRating = averageRating;
  // }
  // return serializedPasta;
}

export default PastasSerializer;

class PastasSerializer {
  static async getDetails(pasta) {
    const allowedAttributes = ["id", "name", "description"];

    let serializedPasta = {};
    for (const attribute of allowedAttributes) {
      serializedPasta[attribute] = pasta[attribute];
    }
    const relatedCategory = await pasta.$relatedQuery("category");
    const relatedReviews = await pasta.$relatedQuery("reviews");
    serializedPasta.category = relatedCategory;
    serializedPasta.reviews = relatedReviews;

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
}

export default PastasSerializer;

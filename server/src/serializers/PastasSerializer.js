import ReviewsSerializer from "./ReviewsSerializer.js";

class PastasSerializer {
  static getSummary(pasta) {
    const allowedAttributes = ["id", "name", "description"];

    let serializedPasta = {};
    for (const attribute of allowedAttributes) {
      serializedPasta[attribute] = pasta[attribute];
    }
    return serializedPasta;
  }

  static async getDetails(pasta) {
    const serializedPasta = this.getSummary(pasta)
    const relatedReviews = await pasta.$relatedQuery("reviews")
    const serializedReviews = await Promise.all(
      relatedReviews.map(async (review) => await ReviewsSerializer.getDetails(review))
    )
    serializedPasta.reviews = serializedReviews
    return serializedPasta 
  }
}

export default PastasSerializer;

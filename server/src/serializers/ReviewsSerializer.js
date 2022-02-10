import VotesSerializer from "./VotesSerializer.js"

class ReviewsSerializer {
  static getSummary(review) {
    const allowedAttributes = ['id', 'title', 'body', 'rating', 'recipe']
    let serializedReview = {}
    for (const attribute of allowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }
    return serializedReview
  }

  static async getDetails(review) {
    const serializedReview = this.getSummary(review)
    const relatedVotes = await review.$relatedQuery("votes")
    const serializedVotes = relatedVotes.map((vote) => {
      return VotesSerializer.getSummary(vote)
    })
    serializedReview.votes = serializedVotes
    serializedReview.voteCount = await VotesSerializer.getVoteCount(review.id)
    let usersVoted = await VotesSerializer.getReviewers(review.id)
    const reviewerIds = usersVoted.map((reviewer) =>{
      return reviewer.userId
    })
    serializedReview.reviewersVoted = reviewerIds
    return serializedReview
  }
}

export default ReviewsSerializer

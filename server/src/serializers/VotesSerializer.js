// import Review from "../models/Review.js"
import { Vote } from "../models/index.js"

class VotesSerializer {
  static getSummary(vote) {
    const allowedAttributes = ['id', 'value']
    let serializedVote = {}
    for (const attribute of allowedAttributes) {
      serializedVote[attribute] = vote[attribute]
    }
    return serializedVote
  }

  static async getVoteCount(reviewId) {
    const voteSum = await Vote.query().where({reviewId: reviewId}).sum("value")
    let trueSum = voteSum[0].sum
    if (!trueSum) {
      trueSum = 0
    }
    return trueSum
  }

  static async getReviewers(reviewId) {
    const reviewVoters = await Vote.query().where({reviewId: reviewId})
    return reviewVoters
  }
}

export default VotesSerializer 

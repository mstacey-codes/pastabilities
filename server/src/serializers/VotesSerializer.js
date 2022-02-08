import Review from "../src/models/Review.js"

class VoteSerializer {
  static async getTotal(reviewId) {
    const review = await Review.query().findById(reviewId)
    const relatedVotes = await review.$relatedQuery("votes")

    let totalCount = {
      upVote: 0,
      downVote: 0
    }

    relatedVotes.forEach(relatedVote => {
      if (relatedVote.value === 1) {
        totalCount.vote++
      } else if (relatedVote.value === -1) {
        totalCount.vote--
      }
    })

    return totalCount
  }

  static async checkForLastVote(reviewId, userId) {
    const review = await Review.query().findById(reviewId)
    const lastVote = await review.$relatedQuery("votes").findOne({ userId: userId })
    if (!lastVote) {
      return false
    }
    return true
  }
}

export default VoteSerializer 
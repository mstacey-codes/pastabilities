import express from "express"
import { Vote } from "../../../models/index.js"

const reviewVotesRouter = new express.Router({ mergeParams: true })

reviewVotesRouter.post("/", async (req, res) => {
  const { reviewId } = req.params
  const { value, userId } = req.body

  try {
    const newVote = await Vote.query().insertAndFetch({ value, userId, reviewId })
    return res.status(201).json({ votes: newVote })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

export default reviewVotesRouter
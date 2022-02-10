import express from 'express'
import reviewVotesRouter from './reviewVotesRouter.js'
import { Vote } from "../../../models/index.js"

const votesRouter = new express.Router()

votesRouter.get('/', async (req, res) => {
    try {
        const votes = await Vote.query()
        let voteValue
        if (votes.length === 0) {
            voteValue = 0
        }
        return res.status(201).json({ votes: voteValue })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

votesRouter.use('/:reviewId/votes', reviewVotesRouter)

export default votesRouter
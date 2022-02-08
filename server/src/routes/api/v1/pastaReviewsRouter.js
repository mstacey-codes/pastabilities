import express from 'express'
import objection from 'objection'
import { Review } from '../../../models/index.js'
const { ValidationError } = objection

import cleanUserInput from '../../../services/cleanUserInput.js'

const pastaReviewsRouter = new express.Router({ mergeParams: true })

pastaReviewsRouter.post('/', async (req, res) => {
    const formInput = cleanUserInput(req.body)
    const { title, rating, body, recipe } = formInput
    const { pastaId } = req.params

    try {
        const newReview = await Review.query().insertAndFetch({ title, rating, body, recipe, pastaId })
        return res.status(201).json({ reviews: newReview })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default pastaReviewsRouter
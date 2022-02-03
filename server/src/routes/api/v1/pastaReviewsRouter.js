import express from 'express'
import objection from 'objection'
import { Review } from '../../../models'
const { ValidationError } = objection

import cleanUserInput from '../../../services/cleanUserInput.js'

const pastaReviewsRouter = new express.Router({ mergeParams: true })

pastaReviewsRouter.post('/', async (req, res) => {
    const { body } = req
    const formInput = cleanUserInput(body)
    const { rating, review, recipe } = formInput
    const { pastaId } = req.params

    try {
        const newReview = await Review.query().insertAndFetch({ rating, review, recipe, pastaId })
        return res.status(201).json({ review: newReview })
    } catch (error) {
        console.log(error)
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default pastaReviewsRouter
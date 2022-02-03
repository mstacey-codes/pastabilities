import express from 'express'
import objection from 'objection'
const { ValidationError } = objection
import Review from '../../../models/Review.js'

const reviewsRouter = new express.Router()

reviewsRouter.get('/', async (req, res) => {
    try {
        const reviews = await Review.query()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default reviewsRouter
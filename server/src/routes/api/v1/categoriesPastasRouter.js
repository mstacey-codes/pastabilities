import express from "express"
import objection from 'objection'
import { Pasta } from "../../../models/index.js"
const { ValidationError } = objection
import cleanUserInput from "../../../services/cleanUserInput.js"

const categoriesPastasRouter = new express.Router({ mergeParams: true })

categoriesPastasRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { name, description } = formInput
  const { categoryId } = req.params 
  console.log(name, description, categoryId)
  try {
    const newPasta = await Pasta.query().insertAndFetch({ name, description, categoryId })
    return res.status(200).json({ pasta: newPasta })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({errors: error.data})
    }
    return res.status(500).json({errors: error})
  }
})

export default categoriesPastasRouter
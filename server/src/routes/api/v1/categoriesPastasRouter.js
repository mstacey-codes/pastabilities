import express from "express";
import objection from "objection";
import { Pasta } from "../../../models/index.js";
const { ValidationError } = objection;
import cleanUserInput from "../../../services/cleanUserInput.js";

const categoriesPastasRouter = new express.Router({ mergeParams: true });

categoriesPastasRouter.post("/", async (req, res) => {
  const { body } = req;
  body.name = body.name.toLowerCase();
  // body.name = lowerCaseName
  const formInput = cleanUserInput(body);
  console.log(formInput)
  const { name, description } = formInput;
  const { categoryId } = req.params;

  try {
    const newPasta = await Pasta.query().insertAndFetch({ name, description, categoryId });
    return res.status(201).json({ pasta: newPasta });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    console.log(error)
    return res.status(500).json({ errors: error });
  }
});

export default categoriesPastasRouter;

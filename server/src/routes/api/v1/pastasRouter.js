import express from "express";
import PastasSerializer from "../../../serializers/PastasSerializer.js";
import pastaReviewsRouter from "./pastaReviewsRouter.js";

import { Pasta } from "../../../models/index.js";

const pastasRouter = new express.Router();

pastasRouter.get("/", async (req, res) => {
  try {
    const pastas = await Pasta.query();
    const serializedPastas = await Promise.all(
      pastas.map(async (pasta) => {
        return PastasSerializer.getSummary(pasta);
      })
    );
    return res.status(200).json({ pastas: serializedPastas });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

pastasRouter.get("/:id", async (req, res) => {
  const pastaIndex = req.params.id;
  try {
    const pasta = await Pasta.query().findById(pastaIndex);
    const serializedPasta = await PastasSerializer.getDetails(pasta);
    return res.status(200).json({ pasta: serializedPasta });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

pastasRouter.use("/:pastaId/reviews", pastaReviewsRouter);

export default pastasRouter;

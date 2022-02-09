import express from "express";
import CategoriesSerializer from "../../../serializers/CategoriesSerializer.js";
import categoriesPastasRouter from "./categoriesPastasRouter.js";
import { Category } from "../../../models/index.js";

const categoriesRouter = new express.Router();

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.query();
    const serializedCategories = await Promise.all(
      categories.map(async (category) => {
        return CategoriesSerializer.getSummary(category);
      })
    );
    return res.status(200).json({ categories: serializedCategories });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

categoriesRouter.get("/:id", async (req, res) => {
  const categoryIndex = req.params.id;
  try {
    const category = await Category.query().findById(categoryIndex);
    const serializedCategoryPastas = await CategoriesSerializer.getDetails(category);
    return res.status(200).json({ category: serializedCategoryPastas });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

categoriesRouter.use("/:categoryId/pastas", categoriesPastasRouter)

export default categoriesRouter;

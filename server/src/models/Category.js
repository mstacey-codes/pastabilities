const Model = require("./Model.js");

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    const Pasta = require("./Pasta");

    return {
      pastas: {
        relation: Model.HasManyRelation,
        modelClass: Pasta,
        join: {
          from: "categories.id",
          to: "pastas.categoryId",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    };
  }
}

module.exports = Category;

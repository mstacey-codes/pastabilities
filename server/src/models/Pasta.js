const Model = require("./Model.js");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
  fields: ["name"],
  identifiers: ["id"],
});

class Pasta extends unique(Model) {
  static get tableName() {
    return "pastas";
  }

  static get relationMappings() {
    const Category = require("./Category");

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "pastas.categoryId",
          to: "categories.id",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description", "categoryId"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        categoryId: { type: ["string", "integer"] },
      },
    };
  }
}

module.exports = Pasta;

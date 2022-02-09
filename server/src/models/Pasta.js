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
    const Category = require("./Category.js");
    const Review = require("./Review.js")
    const User = require("./User.js")

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "pastas.categoryId",
          to: "categories.id",
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "pastas.id",
          to: "reviews.pastaId"
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "pastas.id",
          through: {
            from: "reviews.pastaId",
            to: "reviews.userId"
          },
          to: "users.id"
        }
      }
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

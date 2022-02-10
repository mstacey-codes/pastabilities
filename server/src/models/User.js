/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Review = require("./Review.js")
    const Pasta = require("./Pasta.js")

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "users.id",
          to: "reviews.userId"
        }
      },
      pastas: {
        relation: Model.ManyToManyRelation,
        modelClass: Pasta,
        join: {
          from: "users.id",
          through: {
            from: "reviews.userId",
            to: "reviews.pastaId"
          },
          to: "pastas.id"
        }
      }
    }
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email"],

      properties: {
        email: { type: "string", format: "email" },
        cryptedPassword: { type: "string" },
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }

  static get relationMappings() {
    const Vote = require("./Vote.js")
    return {
      vote: {
        relation: Model.HasManyRelation,
        modelClass: Vote,
        join: {
          from: 'users.id',
          to: 'votes.userId'
        }
      }
    }
  }
}

module.exports = User;

const Model = require('./Model.js')

class Vote extends Model{
  static get tableName(){
    return 'votes'
  }

  static get relationMappings(){
    const Review = require('./Review.js')
    const User = require('./User.js')

    return {
      review: {
        relation: Model.BelongsToOneRelation,
        modelClass: Review,
        join: {
          from: 'votes.reviewId',
          to: 'reviews.id'
        }
      },

      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'votes.userId',
          to: 'users.id'
        }
      }
    }
  }

  static get jsonSchema(){
    return {
      type: 'object',
      required: ['value'],
      properties: {
        value: {type: ['string', 'integer']}
      }
    }
  }
}

module.exports = Vote 

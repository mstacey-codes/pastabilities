const Model = require('./Model.js')
const User = require('./User.js')

class Review extends Model {
    static get tableName() {
        return 'reviews'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title', 'rating'],
            properties: {
                title: { type: 'string' },
                rating: { type: ['string','integer'], minimum: 1, maximum: 5 },
                body: { type: 'string' },
                recipe: { type: 'string' }
            }
        }
    }
    static relationMappings() {
        const Pasta = require('./Pasta.js')
        const Vote = require("./Vote.js")
        const User = require('./User.js')
        
        return {
            pasta: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pasta,
                join: {
                    from: 'reviews.pastaId',
                    to: 'pastas.id'
                }
            },
            votes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                    from: 'reviews.id',
                    to: 'votes.reviewId'
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'reviews.userId',
                    to: 'users.id'
 
                }
             }
        }
    }
}

module.exports = Review
const Model = require('./Model.js')

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

        return {
            pasta: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pasta,
                join: {
                    from: 'reviews.pastaId',
                    to: 'pastas.id'
                }
            }
        }
    }
}

module.exports = Review
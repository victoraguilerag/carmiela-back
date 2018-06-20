const { Model } = require('objection')
const path = require('path')

class Redes extends Model {
	static get tableName () {
		return 'redes'
	}

	static get relationMappings () {
		return {
			redes: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Personal'),
				join: {
					from: 'redes.personal_id',
					to: 'personal.id'
				}
			}
		}
	}
}

module.exports = Redes

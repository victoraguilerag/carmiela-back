const { Model } = require('objection')
const path = require('path')

class Personal extends Model {
	static get tableName () {
		return 'personal'
	}

	static get relationMappings () {
		return {
			redes: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Redes'),
				join: {
					from: 'personal.id',
					to: 'redes.personal_id'
				}
			}
		}
	}
}

module.exports = Personal

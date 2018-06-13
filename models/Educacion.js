const { Model } = require('objection')
const path = require('path')

class Educacion extends Model {
	static get tableName () {
		return 'fragmento-educacion'
	}

	static get relationMappings () {
		return {
			experiencia: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Experiencia'),
				join: {
					from: 'fragmento-educacion.experiencia_id',
					to: 'experiencia.id'
				}
			},
		}
	}
}

module.exports = Educacion
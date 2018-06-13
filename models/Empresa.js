Empresa.jsconst { Model } = require('objection')
const path = require('path')

class Empresa extends Model {
	static get tableName () {
		return 'empresa'
	}

	static get relationMappings () {
		return {
			experiencia: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Experiencia'),
				join: {
					from: 'empresa.experiencia_id',
					to: 'experiencia.id'
				}
			},
		}
	}
}

module.exports = Empresa
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
			social: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Social'),
				join: {
					from: 'empresa.id',
					to: 'fragmento-social.empresa_id'
				}
			},
			link: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Link'),
				join: {
					from: 'empresa.id',
					to: 'fragmento-link.empresa_id'
				}
			},
			posiciones: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Posiciones'),
				join: {
					from: 'empresa.id',
					to: 'posicion.empresa_id'
				}
			}
		}
	}
}

module.exports = Empresa

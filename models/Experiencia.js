const { Model } = require('objection')
const path = require('path')

class Experiencia extends Model {
	static get tableName () {
		return 'experiencia'
	}

	static get relationMappings () {
		return {
			educacion: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Educacion'),
				join: {
					from: 'experiencia.id',
					to: 'fragmento-educacion.experiencia_id'
				}
			},
			profesional: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Empresa'),
				join: {
					from: 'experiencia.id',
					to: 'empresa.experiencia_id'
				}
			},
			skills: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Skill'),
				join: {
					from: 'experiencia.id',
					to: 'skill.experiencia_id'
				}
			}
		}
	}
}

module.exports = Experiencia
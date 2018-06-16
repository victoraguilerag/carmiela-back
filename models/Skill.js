const { Model } = require('objection')
const path = require('path')

class Skill extends Model {
	static get tableName () {
		return 'skill'
	}

	static get relationMappings () {
		return {
			skills: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Experiencia'),
				join: {
					from: 'skill.experiencia_id',
					to: 'experiencia.id'
				}
			},
			principales: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Principales'),
				join: {
					from: 'skill.id',
					to: 'fragmento-skill-principales.skills_id'
				}
			},
			secundarios: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Secundarios'),
				join: {
					from: 'skill.id',
					to: 'fragmento-skill-secundarios.skills_id'
				}
			}

		}
	}
}

module.exports = Skill
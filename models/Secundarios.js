const { Model } = require('objection')
const path = require('path')

class Secundarios extends Model {
	static get tableName () {
		return 'fragmento-skill-secundarios'
	}

	static get relationMappings () {
		return {
			skill: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Skill'),
				join: {
					from: 'fragmento-skill-secundarios.skills_id',
					to: 'skill.id'
				}
			}
		}
	}
}

module.exports = Secundarios
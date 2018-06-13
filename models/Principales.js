const { Model } = require('objection')
const path = require('path')

class Principales extends Model {
	static get tableName () {
		return 'fragmento-skill-principales'
	}

	static get relationMappings () {
		return {
			skill: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Skill'),
				join: {
					from: 'fragmento-skill-principales.skills_id',
					to: 'skill.id'
				}
			}
		}
	}
}

module.exports = Principales
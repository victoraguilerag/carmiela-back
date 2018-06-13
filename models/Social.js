const { Model } = require('objection')
const path = require('path')

class Social extends Model {
	static get tableName () {
		return 'fragmento-social'
	}

	static get relationMappings () {
		return {
			empresa: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Empresa'),
				join: {
					from: 'fragmento-social.empresa_id',
					to: 'empresa.id'
				}
			}
		}
	}
}

module.exports = Social

const { Model } = require('objection')
const path = require('path')

class Link extends Model {
	static get tableName () {
		return 'fragmento-link'
	}

	static get relationMappings () {
		return {
			empresa: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Empresa'),
				join: {
					from: 'fragmento-link.empresa_id',
					to: 'empresa.id'
				}
			}
		}
	}
}

module.exports = Link

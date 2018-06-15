const { Model } = require('objection')
const path = require('path')

class Fragmento extends Model {
	static get tableName () {
		return 'fragmento'
	}

	static get relationMappings () {
		return {
			cuerpo: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Cuerpo'),
				join: {
					from: 'fragmento.fragmento_id',
					to: 'fragmento-articulo.id '
				}
			}
		}
	}
}

module.exports = Fragmento
const { Model } = require('objection')
const path = require('path')

class Cuerpo extends Model {
	static get tableName () {
		return 'fragmento-articulo'
	}

	static get relationMappings () {
		return {
			articulo: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Articulos'),
				join: {
					from: 'fragmento-articulo.cuerpo_id',
					to: 'articulos.id'
				}
			}
		}
	}
}

module.exports = Cuerpo
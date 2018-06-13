const { Model } = require('objection')
const path = require('path')

class Articulos extends Model {
	static get tableName () {
		return 'articulos'
	}

	static get relationMappings () {
		return {
			cuerpo: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Cuerpo'),
				join: {
					from: 'articulos.id',
					to: 'fragmento-articulo.cuerpo_id'
				}
			}
		}
	}
}

module.exports = Articulos
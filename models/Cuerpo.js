const { Model } = require('objection')
const path = require('path')

class Cuerpo extends Model {
	static get tableName () {
		return 'fragmento-articulo'
	}

	static get relationMappings () {
		return {
			cuerpo: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Articulos'),
				join: {
					from: 'fragmento-articulo.cuerpo_id',
					to: 'articulos.id'
				}
			},
			fragmento: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Fragmento'),
				join: {
					from: 'fragmento-articulo.id',
					to: 'fragmento.fragmento_id'
				}
			}
		}
	}
}

module.exports = Cuerpo
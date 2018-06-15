const { Model } = require('objection')
const path = require('path')

class Descripcion extends Model {
	static get tableName () {
		return 'fragmento-descripcion'
	}

	static get relationMappings () {
		return {
			descripcion: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Posiciones'),
				join: {
					from: 'fragmento-descripcion.posicion_id',
          			to: 'posicion.id',
				}
			}
		}
	}
}

module.exports = Descripcion

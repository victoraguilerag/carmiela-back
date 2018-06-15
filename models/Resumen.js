const { Model } = require('objection')
const path = require('path')

class Resumen extends Model {
	static get tableName () {
		return 'fragmento-posicion'
	}

	static get relationMappings () {
		return {
			resumen: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Posiciones'),
				join: {
					from: 'fragmento-posicion.posicion_id',
          			to: 'posicion.id',
				}
			}
		}
	}
}

module.exports = Resumen

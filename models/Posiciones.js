const { Model } = require('objection')
const path = require('path')

class Posiciones extends Model {
	static get tableName () {
		return 'posicion'
	}

	static get relationMappings () {
		return {
			empresa: {
				relation: Model.BelongsToOneRelation,
				modelClass: path.join(__dirname, '/Empresa'),
				join: {
					from: 'posicion.empresa_id',
					to: 'empresa.id'
				}
			},
			resumen: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, '/Resumen'),
				join: {
					from: 'posicion.id',
					to: 'fragmento-posicion.posicion_id'
				}
			},
			descripcion: {
				relation: Model.HasManyRelation,
				modelClass: path.join(__dirname, 'Descripcion'),
				join: {
					from: 'posicion_id',
					to: 'fragmento-descripcion.posicion_id'
				}
			}
		}
	}
}

module.exports = Posiciones

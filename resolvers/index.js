var api = require('./api')
require('../db/setup')
var Articulos = require('../models/Articulos')
var Experiencia = require('../models/Experiencia')
var Fragmento = require('../models/Fragmento')

var resolvers = {
	Query: {
		articulos: () => Articulos.query().eager('[cuerpo, cuerpo.[fragmento]]'),
		experiencia: () => Experiencia.query().eager('[educacion, profesional, profesional.[link, social, posiciones], profesional.posiciones.resumen, skills.[principales, secundarios]]'),
		fragmentos: () => Fragmento.query()
	}
}

module.exports = resolvers

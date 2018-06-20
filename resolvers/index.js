require('../db/setup')
var Articulos = require('../models/Articulos')
var Experiencia = require('../models/Experiencia')
var Fragmento = require('../models/Fragmento')
var Personal = require('../models/Personal')

var resolvers = {
	Query: {
		personal: () => Personal.query().eager('redes'),
		articulos: () => Articulos.query().eager('[cuerpo, cuerpo.[fragmento]]'),
		articulo: (rootValue, args) => Articulos.query().eager('[cuerpo, cuerpo.[fragmento]]').findById(args.id),
		experiencia: () => Experiencia.query().eager('[educacion, profesional, profesional.[link, social, posiciones, posiciones.resumen], skills.[principales, secundarios]]'),
		fragmentos: () => Fragmento.query()
	}
}

module.exports = resolvers

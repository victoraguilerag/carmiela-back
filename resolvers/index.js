require('../db/setup')
var Articulos = require('../models/Articulos')
var Experiencia = require('../models/Experiencia')
var Personal = require('../models/Personal')

var resolvers = {
	Query: {
		personal: () => Personal.query().eager('redes'),
		articulos: () => Articulos.query().eager('cuerpo'),
		articulo: (rootValue, args) => Articulos.query().eager('[cuerpo]').findById(args.id),
		experiencia: () => Experiencia.query().eager('[educacion, profesional, profesional.[link, social, posiciones, posiciones.resumen], skills.[principales, secundarios]]'),
	},
	Mutation: {
		articuloEdit: (_, args) => {
			console.log(args);
			return Articulos.query().eager('[cuerpo]').findById(args.articuloId).upsertGraph({
				id: args.articuloId,
				portada: args.articulo.portada,
				titulo: args.articulo.titulo,
				cuerpo: args.articulo.cuerpo
			})
		}
	}
}

module.exports = resolvers

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
			console.log('editando articulo ' + args.articulo.titulo);
			return Articulos.query().eager('[cuerpo]').findById(args.articuloId).upsertGraph({
				id: args.articuloId,
				portada: args.articulo.portada,
				titulo: args.articulo.titulo,
				cuerpo: args.articulo.cuerpo
			})
		},
		articuloAdd: (_, args) => {
			console.log('agregando articulo ' + args.articulo.titulo);
			const articulo = Articulos.query().insertGraph({
				titulo: args.articulo.titulo,
				portada: args.articulo.portada,
				fecha: args.articulo.fecha
			})
			console.log('resultado ' + articulo)
			return articulo
		},
		articuloRemove: (_, args) => {
			console.log('eliminando articulo ' + args.articuloId)
			return Articulos.query().findById(args.articuloId).then((articulo) => {
				return Articulos.query().deleteById(args.articuloId).then((deleteRows) => {
					if (deleteRows > 0) return articulo
					throw new Error(`El articulo no pudo ser eliminado`)
				})
			})
		}
	}
}

module.exports = resolvers

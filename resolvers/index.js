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
		fragmentos: () => Fragmento.query(),
		fragmento: (rootValue, args) => Fragmento.query().findById(args.id)
	},
	Mutation: {
		fragmentoEdit: (_, args) => {
			return Fragmento.query().patchAndFetchById(args.fragmentoId, args.fragmento)
		},
		articuloEdit: (_, args) => {
			console.log(args);
			return Articulos.query().eager('[cuerpo, cuerpo.[fragmento]]').patchAndFetchById(args.articuloId, args.articulo).then(async (articulo) => {
				if (args.fragmentos) {
					for(let i=0;i<args.fragmentos.id;i++){
						let fragmento = await Fragmento.query.patchAndFetchById(args.fragmentos[i].id,args.fragmentos[i])
					}
					return articulo
				} else {
					return articulo
				}
			})
		}
	}
}

module.exports = resolvers

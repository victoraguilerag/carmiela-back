var { makeExecutableSchema } = require('graphql-tools');
var Articulo = require('./Articulo')
var Experiencia = require('./Experiencia')
var Personal = require('./Personal')
var resolvers = require('../resolvers')

var rootTypes = `
  type Query {
    personal: [Personal]
  	articulos: [Articulo]
    articulo(id: Int): Articulo
  	experiencia: [Experiencia]
  	fragmentos: [Fragmento]
    fragmento(id: Int): Fragmento
  }
  type Mutation {
    fragmentoEdit(fragmentoId: Int!, fragmento: FragmentoEditable): Fragmento
    articuloEdit(articuloId: Int!, articulo: ArticuloEditable, fragmentos: [CuerpoEditable]):Articulo
  }
`

var schema = makeExecutableSchema({
	typeDefs: [rootTypes, Articulo, Experiencia, Personal],
	resolvers,
})



module.exports = schema

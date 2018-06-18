var { makeExecutableSchema } = require('graphql-tools');
var Articulo = require('./Articulo')
var Experiencia = require('./Experiencia')
var resolvers = require('../resolvers')

var rootTypes = `
  type Query {
  	articulos: [Articulo]
    articulo(id: Int): Articulo
  	experiencia: [Experiencia]
  	fragmentos: [Fragmento]
  }
`

var schema = makeExecutableSchema({
	typeDefs: [rootTypes, Articulo, Experiencia],
	resolvers,
})



module.exports = schema

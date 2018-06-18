var express = require('express')
var bodyParser = require('body-parser')
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
var schema = require('./schema')
var cors = require('cors')

var app = express()

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3001, () => {
	console.log('Go to http://localhost:3001/graphiql to run queries!')
})

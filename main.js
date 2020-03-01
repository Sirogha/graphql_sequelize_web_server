'use strict';
const config = require('./config');

const express = require('express');
const graphqlExpress = require('express-graphql');
const { buildSchema, Source } = require('graphql');
const resolvers = require('./resolvers');
const fs = require('fs');
const models = require('./models');

const app = express();
const graphQLSchema = fs.readFile('./schemas/schema.graphql', {encoding: 'utf8'}, (err, result) => {
    if (err) throw 'Bad graphql schema file path';
    models.sequelize.sync().then(() => {
        app.use('/graphql', graphqlExpress({
            schema: buildSchema(new Source(result,'schemas/schema.graphql', 0)),
            rootValue: resolvers,
            graphiql: true
        }));
        app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
    }).catch((err) => {
        console.error(err);
        throw 'Sequelize sync error';
    });
});

exports.httpServer = {};
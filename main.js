'use strict';
require('./config');
console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
const express = require('express');
const graphqlExpress = require('express-graphql');
const { buildSchema, Source } = require('graphql');
const resolvers = require('./resolvers');
const fs = require('fs');
const models = require('./models');

const app = express();
fs.readFile('./schemas/schema.graphql', {encoding: 'utf8'}, (err, result) => {
    if (err) throw 'Bad graphql schema file path';
    models.sequelize.sync().then(() => {
        app.use('/graphql', graphqlExpress({
            schema: buildSchema(new Source(result,'schema.graphql1', 0)),
            rootValue: resolvers,
            graphiql: true
        }));
        // only for Heroku
        app.use('/', (req, res) => {
            return res.status(200).send('<body>My app in graphql on link:<a href="/graphql">GraphQl app</a></body>')
        });
        app.listen(process.env.PORT || 4000, () => console.log('Now browse to localhost:4000/graphql'));
    }).catch((err) => {
        console.error(err);
        throw 'Sequelize sync error';
    });
});

exports.httpServer = {};
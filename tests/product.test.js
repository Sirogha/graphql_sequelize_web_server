'use strict';
const config = require('../config');
const models = require('../models');
const resolvers = require('../resolvers');

beforeAll(() => {
    return models.sequelize.sync().then(() => {})
});

test('create product test', () => {
    return resolvers.createProduct({
        productInput: {
            name: "sdfgdf",
            price: 5,
            quantityInStock: 11
        }
    }).then((data) => {
        expect(data).toEqual(1)
    });
});
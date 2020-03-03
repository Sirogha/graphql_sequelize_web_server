'use strict';
require('../config');
const models = require('../models');
const resolvers = require('../resolvers');

beforeAll(() => {
    return models.sequelize.sync().then(() => {})
});

test('create product socks', () => {
    return resolvers.createProduct({
        productInput: {
            name: "Socks",
            price: 5,
            quantityInStock: 11
        }
    }).then((data) => {
        expect(data).toEqual(1)
    });
});

test('create product shoes', () => {
    return resolvers.createProduct({
        productInput: {
            name: "Shoes",
            price: 15,
            quantityInStock: 23
        }
    }).then((data) => {
        expect(data).toEqual(2)
    });
});

test('get all products', () => {
    return resolvers.getProducts().then((data) => {
        expect(data.length).toEqual(1)
    });
});
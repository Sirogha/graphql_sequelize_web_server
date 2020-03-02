const models = require('../models');

const products = () => {
    return [1];
};

const getProduct = (id) => {
    return {a: 1};
};

const createProduct = async (data) => {
    return models.product.create({
        name: data.productInput.name,
        description: data.productInput.description,
        price: data.productInput.price,
        quantityInStock: data.productInput.quantityInStock
    }).then((result) => {
        return result.dataValues.id;
    }).catch((err) => {
        console.error(err);
        throw err;
    });
};

const productResolver = {
    products,
    getProduct,
    createProduct
};

module.exports = productResolver;
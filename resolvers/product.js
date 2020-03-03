const models = require('../models');

const getProducts = () => {
    return models.product.findAll().then((result) => {
        return result;
    }).catch((err) => {
        console.error(err);
        throw err;
    });
};

const getProduct = (data) => {
    return models.product.findByPk(data.id).then((result) => {
        return result;
    }).catch((err) => {
        console.error(err);
        throw err;
    });
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
    getProducts,
    getProduct,
    createProduct
};

module.exports = productResolver;
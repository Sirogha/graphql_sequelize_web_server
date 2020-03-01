module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: '...'
        },
        price: DataTypes.INTEGER,
        quantityInStock: DataTypes.INTEGER
    });

    // Product.associate = function(models) {
    //     models.Product.hasMany(models.Task);
    // };

    return Product;
};
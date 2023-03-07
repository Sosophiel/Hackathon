const {db} = require('../config/db.js');

const getAllProducts = () => {
    return db('products')
    .select ('id', 'name')
    .orderBy('name');
}



const addProduct = (id_receiver, id_product, quantity) => { 
    return db('basket').insert({ID_receiver: ID_receiver, id_product: id_product, quantity: quantity})
}

module.exports = {
    getAllProducts, addProduct
}
const {db} = require('../config/db.js');

const getAllBaskets = () => {
    return db('basket')
    .join('products', 'basket.id_product', '=', 'products.id')
    .join('receiver', 'receiver.id', '=', 'basket.id_receiver')
    .select('basket.id_receiver', 'receiver.name ','basket.id_product', 'products.name', 'basket.quantity')
}

const getBasketByReceiver = (pid) => {
    return  db('basket')
    .join('products', 'basket.id_product', '=', 'products.id')
    .select('basket.id_receiver', 'basket.id_product', 'products.name', 'basket.quantity')
    .where({id_receiver:pid})
}

const addProduct = (id_receiver, id_product, quantity) => { 
    return db('basket').insert({id_receiver: id_receiver, id_product: id_product, quantity: quantity})
}

const removeProduct = (id_receiver, id_product) => { 
    return db('basket')
    .where({id_receiver : id_receiver, id_product : id_product})
    .del()
}

module.exports = {
    getAllBaskets, getBasketByReceiver, addProduct, removeProduct
}


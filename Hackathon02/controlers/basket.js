const {getAllBaskets, getBasketByReceiver, addProduct, removeProduct} = require('../modules/basket.js');

const _getAllBaskets= (req, res) => {
    getAllBaskets()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
}

const _getBasketByReceiver= (req, res) => {
    getBasketByReceiver(req.params.receiver)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
}

const _addProduct= (req, res) => {
    const {id_receiver, id_product, quantity} = req.body
    addProduct(id_receiver, id_product, quantity)
    .then((data) => res.json(data))
    .catch((err) => console.error(err))
}

const _removeProduct= (req, res) => {
    const {id_receiver, id_product} = req.params
    removeProduct(id_receiver, id_product)
    .then((data) => res.json(data))
    .catch((err) => console.error(err))
}


module.exports = {
    _getAllBaskets , _getBasketByReceiver, _addProduct, _removeProduct
}
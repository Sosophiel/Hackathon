const {getAllProducts, addProduct} = require('../modules/products.js');

const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
}

const _addProduct = (req, res) => {
    const {id_receiver, id_product, quantity} = req.body
    console.log(req.body)
    addProduct(id_receiver, id_product, quantity)
    .then((data) => res.json(data))
    .catch((err) => console.error(err))
}


module.exports = {
    _getAllProducts, _addProduct
}
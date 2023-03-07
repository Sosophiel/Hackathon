const express = require('express');
const {_getAllBaskets , _getBasketByReceiver, _addProduct, _removeProduct} = require('../controlers/basket.js');

const router = express.Router();

router.get('/', _getAllBaskets);

router.get('/receiver/:id', _getBasketByReceiver);

router.post('/add', _addProduct);

router.delete('/remove/:id_receiver/:id_product', _removeProduct);

module.exports = router;


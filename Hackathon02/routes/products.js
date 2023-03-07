const express = require('express');
const {_getAllProducts, _addProduct} = require('../controlers/products.js');

const router = express.Router();

router.get('/', _getAllProducts);

router.post('/add', _addProduct);

module.exports = router;


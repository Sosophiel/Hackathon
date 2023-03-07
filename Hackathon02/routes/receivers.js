const express = require('express');
const { _getAllReceivers, _addReceiver, _removeReceiver} = require('../controlers/receiver.js');

const router = express.Router();

router.get('/', _getAllReceivers);

router.post('/add', _addReceiver)
router.delete('/remove/:id', _removeReceiver)

module.exports = router;





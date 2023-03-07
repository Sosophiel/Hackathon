const {getAllReceivers, addReceiver, removeReceiver} = require('../modules/receiver.js');

const _getAllReceivers= (req, res) => {
    getAllReceivers()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
}

const _addReceiver = (req, res) => {
    const {name, address} = req.body
    addReceiver(name, address)
    .then((data) => res.json(data))
    .catch((err) => console.error(err))
}

const _removeReceiver= (req, res) => {
    const {id} = req.params
    removeReceiver(id)
    .then((data) => res.json(data))
    .catch((err) => console.error(err))
}


module.exports = {
    _getAllReceivers, _addReceiver, _removeReceiver
}
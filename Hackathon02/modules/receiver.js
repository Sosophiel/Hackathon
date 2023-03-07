const {db} = require('../config/db.js');

const getAllReceivers = () => {
    return db('receiver')
    .select ('id', 'name', 'address')
    .orderBy('name');
}

const getReceiverById = (id) => {
    return db('receiver')
    .select ('id', 'name', 'address')
    .where({id:id})
}


const addReceiver = (name, address) => { 
    return db('receiver').insert({name: name, address: address})
}


const removeReceiver = (id) => { 
    return db('receiver')
    .where({id : id})
    .del()
}

module.exports = {
    getAllReceivers, getReceiverById, addReceiver, removeReceiver
}


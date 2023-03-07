const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config()


const app = express();
app.use(cors())
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 5002

app.listen(port, ()=>{
    console.log(`run on port ${port}`)
})

const products_router = require('./routes/products.js')
const receivers_router = require('./routes/receivers.js')
const basket_router = require('./routes/basket.js')

app.use('/api/products', products_router)
app.use('/api/receivers', receivers_router)
app.use('/api/basket', basket_router)

app.get('/', (req, res) => { 
    //res.redirect("/receivers")
    res.render('index')
})

const {getAllReceivers, getReceiverById, addReceiver} = require('./modules/receiver.js');
const { getBasketByReceiver } = require('./modules/basket.js');

app.get('/receivers', (req, res) => { 
    getAllReceivers()
    .then(data => {
        res.render("receivers", {receivers : data})
    })
    .catch(err => {
        console.log(err);
    })
    
})

app.get('/baskets', (req, res) => { 

    res.render("baskets")
})

app.get('/baskets/:id', (req, res) => { 

    const id = req.params.id
    let receiver = null
    getReceiverById(id)
    .then(data => {
        console.log(data)
        receiver = data[0]
        return 
    })
    .then(() => {
        return getBasketByReceiver(id)
    })
    .then((basket) => {
        res.render("baskets", {receiver : receiver, basket : basket})
    })
    .catch(err => {
        console.log(err);
    })
})



// app.get('/api/products', (req, res) => {
//     res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//     const product_id = req.params.id;
//     const product = products.filter((item) => item.id == product_id);
//     res.json(product);
// });


// app.get('/api/search', (req, res) => {
//     console.log(req.query)
//     res.send('OK')
// });


// app.put('/api/products/:id', (req, res) => {
//     const id = req.params.id;
//     const index = products.findIndex (item => item.id == id);
//     if (index === -1) {
//         return res.status(404).json({msg:'product not found'});
//     }
//     const updatedProduct = {
//         id: products[index].id,
//         name: req.body.name,
//         price: req.body.price,
//     }
//     products[index] = updatedProduct;
//     res.status(200).json(Product)
// })




// app.delete('api/products/:id',(req, res) => {
//     const id = req.params.id;
//     const index = products.findIndex (item => item.id == id);

//     if (index === -1) {
//         return res.status(404).json({msg:'product not found'});
//     }
//     products.splice (index, 1);
//     res.status(200).json(products);
// })
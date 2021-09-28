require('dotenv').config();
const express = require('express');
const connectdb = require('./config/connectdb');
const Product = require('./models/Product')

const portNumber = process.env.PORT;

const app = express();
connectdb();

app.get('/', async (req, res) => {
    const products = await Product.find({});
    if (products.length === 0)
        res.status(500).send('Server Error');

    res.send(products);
});

app.get('/:productName', async (req, res) => {
    const productName = req.params.productName;
    console.log(productName);
    const product = await Product.find({ name: productName });
    if (product.length === 0)
        res.status(404).send('Product Not Found');
    console.log(product);
    res.send(product);
})

app.listen(portNumber, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`# Server is online on : http://localhost:${portNumber}`);
    }
})
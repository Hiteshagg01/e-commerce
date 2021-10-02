require('dotenv').config();
const express = require('express');
const connectdb = require('./config/connectdb');
const Product = require('./models/Product')

const portNumber = process.env.PORT;

const app = express();
connectdb();

app.get('/api/products', async (req, res) => {

    const products = await Product.find({});

    res.json(products);
});

app.get('/api/products/:productid', async (req, res) => {

    const product = await Product.find({ _id: req.params.productid });

    if (!product.length) {
        res.status(404).json('I dont have that');
    } else {
        res.json(product);
    }
})

app.listen(portNumber, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.clear();
        console.log(`# Server is online on : http://localhost:${portNumber}`);
    }
})
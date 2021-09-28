const connectdb = require('./config/connectdb');
const Product = require('./models/Product');
const products = require('./data/products');

connectdb();

const seedData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log('Data Seeding into db completed');
        process.exit();

    } catch (error) {
        console.error('Failed to Seed data into db');
        process.exit(1);
    }
}

seedData();
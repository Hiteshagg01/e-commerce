require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const mongoConnect = async () => {
    await mongoose.connect(mongoURI, (err) => {
        if (err) {
            console.error(`> Failed to connect with mongodb on : ${mongoURI}`);
        }
        console.log(`> Connected to mongodb on ${mongoURI}`);
    });
}

module.exports = mongoConnect;
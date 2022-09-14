const express = require('express')
const mongoose = require('mongoose')
const config = require('./config.js')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express();
dotenv.config();

if (config.isVercel) {
    app.use(async (req, res, next) => {
        await mongoose.connect(config.mongo);
        return next();
    });
}

// Middleware
app.use(cors());

app.get('/', (req,res)=> {
    console.log("hello world!!")
    res.send("Hi, Vercel")
})

module.exports = app;
const express = require('express')
const mongoose = require('mongoose')
const config = require('./config.js')

const app = express();
const PORT = 8080
const todoRouter = require('./src/api/todo/todo.route')

app.use('/', todoRouter)

// app.get('/', (req,res)=> {
//     console.log("hello world")
//     res.send("Hi")
// })


const connect = async () => {
    try {
        await mongoose.connect(config.mongo);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

connect();
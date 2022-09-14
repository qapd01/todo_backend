const mongoose = require('mongoose')
const config = require('./config.js')
const app = require('./api/index.js')

const PORT = config.port || 8080;

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

app.get('/', (req,res)=> {
    console.log("hello world")
    res.send("Hi")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

connect();

const mongoose = require("mongoose");
const config = require('./config')
const app = require('./api/index')


const PORT = require('./config')


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
  console.log(`Server is listening on port ${PORT}`);
});

connect();

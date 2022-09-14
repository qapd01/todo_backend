const dotenv = require('dotenv')
dotenv.config();

const config = {
  port: +process.env.PORT || 8080,
  mongo: process.env.MONGO,
};

module.exports = config;

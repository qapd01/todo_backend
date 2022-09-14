const dotenv = require('dotenv')
dotenv.config();

const config = {
  port: +process.env.PORT || 8080,
  mongo: process.env.MONGO,
  isVercel: process.env.IS_VERCEL || false,
};

module.exports = config;

// .dovenv that ensure
require('dotenv-safe').config({
  allowEmptyValues: true,
  example: './.env.example',
});

const mongo = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  database: process.env.MONGO_DATABASE,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
};

const uri = `${mongo.user}:${mongo.pass}@${mongo.host}:${mongo.port}/${mongo.database}`;

const config = {
  env: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT,
  mongoUri: `mongodb://${uri}`,
};

module.exports = config;

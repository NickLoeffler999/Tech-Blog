// This will handle the connection to the database.
const Sequelize = require("sequelize");

// This will allow us to use the .env file to hide our username and password.
require("dotenv").config();

// This will create the connection to the database whether it is on Heroku or local.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USERNAME,
      process.env.DB_PW,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;

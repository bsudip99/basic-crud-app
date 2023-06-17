const { Sequelize } = require('sequelize');


const env = process.env.NODE_ENV || 'development';
// const configPath = '../../config/config.json';
const config = require(__dirname+'/../../config/config.json')[env];

//Database connection
const sequelize = new Sequelize(config.database, config.username, config.password , config);

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));


module.exports = sequelize;
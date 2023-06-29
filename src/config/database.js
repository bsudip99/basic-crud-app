const { Sequelize } = require('sequelize');
const config = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

//Database connection
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password , dbConfig);

// Test the database connection
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected'))
//   .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;
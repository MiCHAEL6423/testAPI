const Sequelize = require('sequelize');
const sequelize = new Sequelize('MakeItAll', 'root', 'lkeAyX1T6v', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
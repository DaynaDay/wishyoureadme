const { Model, DataTypes } = require('sequelize');
//communicating with mySQL database
const sequelize = require('../config/connection');

class Wishlist extends Model {}
//exists to create connection btwn tables, populated by user id and book id
Wishlist.init({}, { sequelize });

module.exports = Wishlist;

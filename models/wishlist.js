<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
//communicating with mySQL database
const sequelize = require("../config/connection");

class Wishlist extends Model {};
//exists to create connection btwn tables, populated by user id and book id
Wishlist.init({},{sequelize});
=======
const { Model, DataTypes } = require('sequelize');
//communicating with mySQL database
const sequelize = require('../config/connection');

class Wishlist extends Model {}
//exists to create connection btwn tables, populated by user id and book id
Wishlist.init({}, { sequelize });
>>>>>>> 652a5bef0b650b7f992e49060904eaea54881e57

module.exports = Wishlist;

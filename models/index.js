const User = require('./user');
const Book = require('./book');
const Wishlist = require('./wishlist');

//tell how they talk
User.belongsToMany(Book, { through: Wishlist });
Book.belongsToMany(User, { through: Wishlist });

//if we want more models, put them here and add them to the object, and associate tables
module.exports = {Book, User, Wishlist};

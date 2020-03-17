<<<<<<< HEAD
const Book = require("./book");
const User = require("./user");
const Wishlist = require("./wishlist")

//tell how they talk
Book.belongsToMany(User,{through:Wishlist});
User.belongsToMany(Book,{through:Wishlist});
//if we want more models, put them here and add them to the object, and associate tables
module.exports = {Book, User, Wishlist};
=======
const User = require('./user');
const Book = require('./book');
const Wishlist = require('./wishlist');

//tell how they talk
User.belongsToMany(Book, { through: Wishlist });
Book.belongsToMany(User, { through: Wishlist });

//if we want more models, put them here and add them to the object, and associate tables
module.exports = { Book, User, Wishlist };
>>>>>>> 652a5bef0b650b7f992e49060904eaea54881e57

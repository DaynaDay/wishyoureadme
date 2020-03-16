// import router
const router = require('express').Router();

// import api route files
const bookRoutes = require('./book-routes');
const authRoutes = require('./auth-routes');
const userRoutes = require('./user-routes');
const wishlistRoutes = require('./wishlist-routes');

// set up and prepend api routes from imported files
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/auth', authRoutes);

// export packaged routes
module.exports = router;

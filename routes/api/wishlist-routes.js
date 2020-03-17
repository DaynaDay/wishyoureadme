const router = require('express').Router();
const { User, Wishlist, Book } = require('../../models');
const checkAuth = require('../../middleware/check-auth');

// add book to a user's wishlist
router.post('/', checkAuth, (req, res) => {
  /* req.body => { BookId: 1 } */
  Wishlist.create({
    BookId: req.body.BookId,
    UserId: req.id
  })
    .then(wishlistdata => res.json(wishlistdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;

// import express router
const router = require('express').Router();
// import models
const { Post, Book } = require('../../models');

// import auth middleware
//const checkAuth = require('../../middleware/check-auth');

// get all Posts with associated book
// will eventually be `/api/posts`
router.get('/',  (req, res) => {
  Post.findAll({
    include: [Book]
  })
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a post by id with associated book
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [Book]
  })
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new post
router.post('/',  (req, res) => {
  /* 
  {
    title: "post title",
    body: "long post body of paragraphs",
    BookId: 1
  }
  */

  // set UserID
  req.body.BookId = req.id;

  Post.create(req.body)
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
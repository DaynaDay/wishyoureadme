// import express router
const router = require("express").Router();
// import models
const { Book } = require("../../models");

// get all Books
// will eventually be `/api/books`
router.get("/", (req, res) => {
  Book.findAll({})
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a book by id
router.get("/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new book
router.post("/", (req, res) => {
  /* 
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    category: 'Mystery'
  }
  */

  Book.create(req.body)
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;

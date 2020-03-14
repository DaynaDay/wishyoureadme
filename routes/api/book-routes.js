// import express router
const router = require("express").Router();
// import models
const { Book } = require("../../models");

// get all Users with associated posts
// will eventually be `/api/users`
router.get("/", (req, res) => {
  Book.findAll({})
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a post by id with associated posts
router.get("/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new user
router.post("/", (req, res) => {
  /* 
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    category: 'Mystery'
  }
  */

  Book.create(req.body)
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;

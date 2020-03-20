// import express router
const router = require('express').Router();
const jwt = require('jsonwebtoken');
// import models
const { Wishlist, Book, User } = require('../../models');

// get all Users with associated books
// will eventually be `/api/users`
router.get('/', (req, res) => {
  User.findAll({
    include: [
      {
        model: Book,
        through: Wishlist
      }
    ]
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a user by id with associated books
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Book,
        through: Wishlist
      }
    ]
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new user
router.post('/', (req, res) => {
  /* 
  {
    name: "Alex",
    email: "alex.rosenkranz@hotmail.biz",
    password: '1234'
  }
  */

  User.create(req.body)
    .then(userdata => {
      // give user token upon creation
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            name: userdata.name,
            email: userdata.email,
            id: userdata.id
          }
        },
        'shhhhh'
      );
      console.log("usercreated");
      res.json({ userdata, token });
    })
    .catch(err => {
      console.log(err);

      res.json(err);
    });
});

// update user by id
router.put('/:id', (req, res) => {
  User.update(req.body, {
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

// delete user by id
router.delete('/:id', (req, res) => {
  User.destroy({
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

module.exports = router;

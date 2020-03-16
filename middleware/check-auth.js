const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

  // check if token is authorization token
  // $.ajax({
  //   url: '/api/wishlist',
  //   data: {
  //     BookId: 1
  //   },
  //   headers: {
  //     Authorization: 'Bearer <token>'
  //   }
  // })

  if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }

  if (!token) {
    res.status(400).json('Unauthorized: No token provided');
    return;
  }

  // check if jwt token is valid
  jwt.verify(token, 'shhhhh', (err, decoded) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Unauthorized: Invalid token'
      });
      return;
    }
    console.log(decoded);
    // send them on their way but set email and id values to request
    req.email = decoded.data.email;
    req.id = decoded.data.id;
    next();
  });
};

module.exports = checkAuth;

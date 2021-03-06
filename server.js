const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path")
//middleware-ish. let server know we're using JSON
app.use(express.json());
//not sure.
app.use(express.urlencoded({ extended: true }));

// if you have a front-end...use express.static('public')
app.use(express.static(path.join(__dirname, '/public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});

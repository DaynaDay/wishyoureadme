// express router in a variable
const router = require("express").Router();

// collect all api endpoints in api index page
const apiRoutes = require("./api");

//first argument is a path, anything in APIroutes will have it preceding it. It will appear in the URL bar
router.use("/api", apiRoutes);

// IF WE HAD HTML ROUTES, THEY'D BE SET UP HERE
module.exports = router;

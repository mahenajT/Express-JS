// Import Express Module
const Express = require("express");
const route = Express(); //This line calls the express function, which returns an instance of an Express application

// Download Response
route.get("/download", function (req, res) {
  res.download("6_Image.jpg");
});

route.listen(" ", function () {
  console.log("Running Express Successful");
});

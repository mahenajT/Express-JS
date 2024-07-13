



const express = require("express"); // Express Js Module
app = express(); // Call




















// Express.js Routing
app.get("/", function (request, response) {
  response.send("Home Page");
});
app.get("/about", function (request, response) {
  response.send("About Page");
});
app.get("/Contact", function (request, response) {
  response.send("Contact Page");
});
app.get("/blog", function (request, response) {
  response.send("Blog Page");
});
app.listen(8000, function () {
  //app run
  console.log("Server Run Success");
});




















app.get("/", function (request, response) {
  response.send("Home Page");
});

// With the help of Postman - these methods will run
app.post("/about", function (request, response) {
  response.send("About Page");
});
app.put("/contact", function (request, response) {
  response.send("Contact Page");
});
app.delete("/blog", function (request, response) {
  response.send("Blog Page");
});
app.listen(8000, function () {
  //app run
  console.log("Server Run Success");
});

const express = require("express");
const app = express();





// Simple Post Request
app.post("/", (req, res) => {
  res.send("This is simple Post Request!");
});





//Post Request with URL Query
app.post("/one", (req, res) => {
  let city = req.query.city;
  let country = req.query.country;
  res.send(city + " belongs to =" + " " + country);
});





//Header
app.post("/two", (req, res) => {
  let user = req.header("userName");
  let password = req.header("password");
  res.send(user + " = " + password);
});





app.listen(8000, function () {
  console.log("Sever Running Successfully");
});

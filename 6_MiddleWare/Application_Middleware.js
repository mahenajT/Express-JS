const express = require("express");
let app = new express(); // Express Class Object

// Will execute in all Route
app.use(function (req, res, next) {
  console.log("I am Application level middle");
  next();
});

app.get("/", (req, res) => {
  res.send("I am a home page");
});

app.get("/about", (req, res) => {
  res.send("I am a About page");
});

app.get("/blog", (req, res) => {
  res.send("I am a Blog page");
});

app.listen(3000, function () {
  console.log("Success");
});

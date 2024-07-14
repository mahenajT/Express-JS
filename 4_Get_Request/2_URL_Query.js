//Get Request With URL Query

const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  let first = req.query.firstName;
  let lastName = req.query.lastName;
  res.end(first + " " + "" + lastName);
});
// URL = http://localhost:8010/about?firstName=John&lastName=Doe

app.get("/", (req, res) => {
  let cities = req.query.city;
  let countries = req.query.country;
  res.end(cities + " Belongs To = " + " " + countries);
});
// URL = http://localhost:8010/?city=New%20York&country=USA

app.listen(8010, function () {
  console.log("Successful");
});

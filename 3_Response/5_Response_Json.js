const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("This Is Home Page");
});

// Json  Response
app.get("/about", function (req, res) {
  let JSONArray = [
    {
      name: "Rabbil",
      age: 23,
      occupation: "Web development",
    },
    {
      name: "Ostad",
      age: 23,
      occupation: "Course",
    },
  ];

  res.json(JSONArray);
});

app.listen(6060, function () {
  console.log("SuccessFull");
});

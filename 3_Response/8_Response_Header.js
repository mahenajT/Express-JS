const express = require("express");
app = express();

app.get("/", function (req, res) {
  res.append("Author", "Mahenaj");
  res.append("City", "Chittagong");
  res.append("Age", "15");
  res.append("Occupation", "Student");
  res.status(201).end("Changed");
});

app.listen(3000, function () {
  console.log("Success");
});

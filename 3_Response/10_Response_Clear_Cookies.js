const express = require("express");
app = express();

app.get("/seven", (req, res) => {
  res.cookie("Key", "Value");
  res.cookie("Laptop", "HP Laptop");
  res.cookie("Mobile", "Redmi");
  res.end("Cookies Sent");
});

app.get("/eight", (req, res) => {
  res.clearCookie("Key");
  res.clearCookie("Laptop");
  res.clearCookie("Mobile");
  res.clearCookie("Name");
  res.clearCookie("Mentor");
  res.clearCookie("Course");
  res.send("Cookies Cleared");
});

app.listen(4124, function () {
  console.log("Express Server Running Successfully");
});

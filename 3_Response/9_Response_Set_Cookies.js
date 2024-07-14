const express = require("express");
const app = express();

// Set Cookies
app.get("/cookies", (req, res) => {
  res.cookie("Key", "Value");
  res.cookie("Name", "Cookie");
  res.cookie("Mentor", "Rabbil_Hassan_Rupom");
  res.cookie("Course", "Mern");
  res.end("Cookie Set Successfully");
});

app.listen(3000, function () {
  console.log("Server running successfully.");
});

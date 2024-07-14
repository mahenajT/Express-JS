// Import Express.js Module

const express = require("express");
app = express();

// redirect()
app.get("/Bangladesh ", function (req, res) {
  res.redirect("http://127.0.0.1:3000/India");
});
// send()
app.get("/India", function (req, res) {
  res.send("This is India. The response redirected from Bangladesh. Nice to meet you all ");
});
// listen()
app.listen(3000, function () {
  console.log("Successfully redirected to the server.");
});

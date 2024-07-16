// Specific Route Level middleWare
const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});
// Specially for about section
app.use("/about", function (req, res, next) {
  console.log("I am Route Level Middleware");
  next();
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

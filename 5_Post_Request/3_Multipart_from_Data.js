// Install Multer Package
const express = require("express");
const multer = require("multer");
let app = express(); //instance of express Application
let multerInstance = multer();

app.use(multerInstance.array());
app.use(express.static("public"));

app.post("/", (req, res) => {
  let JSONData = req.body;
  res.send(JSON.stringify(JSONData));
});

app.listen(4000, function () {
  console.log("success");
});

// Install body-parser node Package
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.json()); // for parsing application/json()




// Send JSON raw Data in JSON body
app.post("/", (req, res) => {
  let jsonData = req.body;
  let JSONString = JSON.stringify(jsonData);
  res.send(JSONString);
});




// Specific Key catch then Show the value in The Response
app.post("/one", (req, res) => {
  let jsonData = req.body;
  let name = jsonData.name;
  res.send(name);
});




app.listen(8010, function () {
  console.log("Successfully running");
});

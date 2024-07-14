const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let name1 = req.header("firstName");
  let name2 = req.header("lastName");
  let host = req.header("Host");

  res.end(host);
  res.end(name1 + " " + name2);
});

app.listen(3000, function () {
  console.log("Successful");
});

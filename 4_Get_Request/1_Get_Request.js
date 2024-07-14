const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.end("This is simple get Request");
});

app.listen(2000, () => {
  console.log("Server started on port 2000");
});

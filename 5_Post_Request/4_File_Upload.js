const multer = require("multer");
const express = require("express");
let app = express();
let storage = multer.diskStorage({
  //Object

  destination: function (req, file, callback) {
    // destination = Property

    callback(null, "./4_upload");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("myFile");
app.post("/", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error Uploading File.", err);
    } else {
      res.end("File Uploaded Successfully.");
    }
  });
});

app.listen(7000, function () {
  console.log("Server running successfully.");
});

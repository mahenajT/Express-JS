const expressModule = require("express");
app = expressModule();

app.get("/", function (req, res) {// Route1
  res.send("I am a home page");
});

// Status Code Manipulate
app.post("/about", function (req, res) {// Route2
  res.status(401).end("Unauthorized");
});

app.put("/blog",  function(req, res){
  res.status("201").end(" the request was successfully fulfilled and resulted in one or possibly multiple new resources being created")
})


app.listen("5050", function(){
  console.log("Server is running Successfully");
})
const express = require("express") // Express Js Module

app = express() // Call

app.get("/", function (request, response) {
    response.send("My first Express JS Application. Hello Express JS!")
})

app.listen(8000, function (){ //app run
    console.log("Server Run Success")
})
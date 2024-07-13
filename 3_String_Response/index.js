const express = require("express");
app = express();

// Simple String Response
/*

 - A "string response" typically refers to a piece of text data returned by a program, function, or system. This term can be encountered in various contexts
 - Programming and APIs: When a function or API call is made, the response might be in the form of a string, which is a sequence of characters. For example, an API might return a JSON string or an error message as a string.

*/


app.get("/", function (request, response) {
  response.send("This is simple string response");
});

app.post("/about", function (req, res) {
  res.end(
    "This is an about page. Thanks for coming here, If You forget codes or syntax or structure always read 'Robbi Zidni I'lma' "
  );
});

app.listen(8080, function () {
  console.log("Successfully listening on 8080");
});

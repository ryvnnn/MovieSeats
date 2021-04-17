const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});

let count = document.getElementById("count");
// document.getElementsByClassName("seat").addEventLister("click", function () {});

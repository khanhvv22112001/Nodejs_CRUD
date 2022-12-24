const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const app = express();

const port = 3000;

//log requests
app.use(morgan("combined"));

//Template engine

//parse request to body-parser
app.use(bodyparser.urlencoded({ urlencoded: true }));

//set view engine
app.set("view engine", "ejs");
// app.set("view", path.resolve(__dirname, "views/ejs"))

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});
app.get("/update-user", (req, res) => {
  res.render("update_user");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

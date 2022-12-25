const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./server/database/connection");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//fix warning strictQurery
mongoose.set("strictQuery", false);

//log requests
app.use(morgan("combined"));

//mongoDB connect
connectDB();
//Template engine

//parse request to body-parser
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
// app.set("view", path.resolve(__dirname, "views/ejs"))

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

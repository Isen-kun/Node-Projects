console.clear();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

//Import routes
const postsRoute = require("./routes/posts");

app.use(bodyParser.json());
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db");
});

//listening to the server
app.listen(3000);

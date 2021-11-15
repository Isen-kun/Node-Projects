const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
console.clear();

//connect to db
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to db");
});

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//middlewares
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
  console.log("server running");
});

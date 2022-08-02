const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
const port = 3000;
console.clear();

//Middleware
app.use(express.json());
app.use("/api/v1/tasks", tasks);

//Routes
app.get("/", (req, res) => {
  res.send("This is the home directory");
});

app.listen(port, () => {
  console.log("server is running");
});

console.clear();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);

  res.send("id: " + req.query.id);
});

app.listen(8080);

// const express = require("express");
// const path = require("path");
// const app = express();
// const router = express.Router();
// const bodyparser = require("body-parser");
// const port = process.env.port || 8080;
// const myObj = require("./users");
// const users = require("./user");

// app.use("/users", users);

// // app
//   .route("/users")
//   .get((req, res) => res.send("Test GET"))
//   .post((req, res) => res.send("Test POST"))
//   .put((req, res) => res.send("Test PUT"));

// const filename = "index.html";
// const url = path.join(__dirname, "public", filename);
// console.log(url);

// app.use(express.static(__dirname + "/public"));

// const logOutput = (req, res, next) => {
//   console.log("Middleware in action");
//   console.log(req.params);
//   next();
// };

// app.use(logOutput);

// app.use(bodyparser.urlencoded({ extended: true }));

// app.get("/users/:id", (req, res) => {
//   let myJson = [];
//   if (myObj.users.some((ele) => ele.id == req.params.id)) {
//     myJson = myObj.users.filter((ele) => ele.id == req.params.id);
//   }
//   res.json(myJson);
// });

// app.post("/users", (req, res) => {
//   console.log(req.body);
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/user", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

//
//

// app.post("/users", (req, res) => {
//   console.log(req.body);
//   res.send(`DONE:User ${req.body.user} ID ${req.body.id}`);
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("found " + id);
//   res.send("found " + id);
// });

// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("deleted " + id);
//   res.send({ status: "deleted", id: id });
// });

// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("Updated " + id);
//   res.send({ status: "updated", id: id });
// });

// app.listen(port, () => {
//   console.log(`Ready listening on ${port}`);
// });

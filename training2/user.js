const express = require("express");
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log("Users middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("Main User");
});
router.get("/info", (req, res) => {
  res.send("User Info");
});

module.exports = router;

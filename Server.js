/* modules and dependencies */
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/* import files */

/* init */
const Server = express();
const PORT = process.env.PORT || 5000;

/* database */
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected...");
  })
  .catch((err) => {
    console.log(err);
  });

/* middleware */
Server.use(express.static("./public"));
Server.use(express.json());

// api routes
Server.route("/api").post((req, res) => {
  res.send({
    value:
      "This is the entrypoint. You send: " +
      (req.body.test ? req.body.test : "nothing!?!")
  });
});

// Server
Server.listen(PORT, () => {
  console.log("server started...");
});

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

const Server = express();
const PORT = process.env.PORT || 5000; /* eslint-disable-line no-undef */

mongoose
  /* eslint-disable-next-line no-undef */
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

Server.use(express.static("./public"));
Server.use(express.json());

Server.route("/api").get((req, res) => {
  res.send({
    value: "This is the entrypoint. You send a GET request."
  });
});

Server.route("/api/login").post(publicRoutes.login);
Server.route("/api/register").post(publicRoutes.register);
Server.route("/api/uniqueID").post(publicRoutes.uniqueID);
Server.route("/api/forgotPassword").post(publicRoutes.forgotPassword);

Server.route("/api/changePassword").post(privateRoutes.changePassword);

Server.listen(PORT, () => {
  console.log("server started...");
});

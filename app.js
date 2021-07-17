// jshint esversion:6


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const lodash = require('lodash');


const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("home");
});

//now working on the login routes
app.get("/getstarted", function(req, res) {
  res.render("login");
});

//now working on the register routes
app.get("/register", function(req, res) {
  res.render("register");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running port 3000 ")
});

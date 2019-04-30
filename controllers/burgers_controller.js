var express = require("express");

var app = express();

var burger = require("../models/burger.js");

app.get("/", function(req, res) {
  orm.selectAll(function(results) {
    callback(results);
    res.render("index", results);
  });
});

app.post("/", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(results) {
      res.render("index", results);
    }
  );
});

app.put("/", function(req, res) {
  burger.updateOne("devoured", req.body.devoured, function(results) {
    res.render("index", results);
  });
});

// Export routes for server.js to use.
module.exports = app;

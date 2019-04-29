var connection = require("./connection.js");

var tableName = "burgers";

var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM " + tableName;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(req, res, callback) {
    var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    var values = { burger_name: req.body.burger_name, devoured: false };

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(req, res, callback) {
    var queryString = "UPDATE " + tableName + " SET ? WHERE ?";
    var values = [{devoured: req.body.devoured}, {burger_name: req.body.burger_name}];

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;

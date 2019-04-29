var connection = require("./connection.js");

var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM burgers_db";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(req, res, callback) {
    var queryString = "INSERT INTO burgers_db SET ?";
    var values = { burger_name: req.body.burger_name, devoured: false };

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;

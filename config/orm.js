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
  insertOne: function(burger, callback) {
    var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    burger.devoured = burger.devoured || 0;
    connection.query(queryString, [burger.burger_name, burger.devoured], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(burger, callback) {
    var queryString = "UPDATE " + tableName + " SET devoured = ? WHERE id = ?";
    burger.devoured = 1;
    connection.query(queryString, [burger.devoured, burger.id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;

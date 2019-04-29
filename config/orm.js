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
  insertOne: function(burgerName, callback) {
    var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    burgerName.devoured = burgerName.devoured || 0;
    connection.query(queryString, [burgerName.burger_name, burgerName.devoured], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(burgerName, callback) {
    var queryString = "UPDATE " + tableName + " SET devoured = ? WHERE id = ?";
    burgerName.devoured = 1;
    connection.query(queryString, [burgerName.devoured, burgerName.id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;

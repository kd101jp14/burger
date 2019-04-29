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
    connection.query(queryString, [burgerName, false], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(burgerName, callback) {
    var queryString = "UPDATE " + tableName + " SET devoured = ? WHERE burger_name = ?";

    connection.query(queryString, [true, burgerName], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;

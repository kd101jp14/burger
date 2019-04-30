// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll(function(results) {
      callback(results);
    });
  },
  insertOne: function(burgerName, callback) {
    orm.insertOne(burgerName, function(results) {
      callback(results);
    });
  },
  updateOne: function(burgerName, callback) {
    orm.updateOne(burgerName, function(results) {
      callback(results);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
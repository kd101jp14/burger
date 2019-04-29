// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },
  insertOne: function(burgerName, callback) {
    orm.insertOne(burgerName, function(res) {
      callback(res);
    });
  },
  updateOne: function(burgerName, callback) {
    orm.updateOne(burgerName, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
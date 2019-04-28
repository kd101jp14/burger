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
    }
  };
  
  module.exports = orm;
  
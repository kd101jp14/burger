// Require MySQL
var mysql = require("mysql");

// Require sercret password
var passwordModule = require("../password_module.js");

// Set up MySQL connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: passwordModule.password,
  database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;

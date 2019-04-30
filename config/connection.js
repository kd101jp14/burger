// Require MySQL
var mysql = require("mysql");

// Require sercret password
var passwordModule = require("../password_module.js");

var connection;

// Hook up app with JawsDB or set up MySQL connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: passwordModule.password,
    database: "burgers_db"
  });
};

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

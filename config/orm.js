// Import MySQL connection
var connection = require("./connection.js");

// Helper function for SQL syntax
// Loops through and creates an array of question marks and turns it into a string.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {burger_name: Big Burger, devoured: 0}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;


// var tableName = "burgers";

// var orm = {
//   selectAll: function(callback) {
//     var queryString = "SELECT * FROM " + tableName;

//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       callback(result);
//     });
//   },
//   insertOne: function(burgerName, callback) {
//     var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
//     burgerName.devoured = burgerName.devoured || 0;
//     connection.query(queryString, [burgerName.burger_name, burgerName.devoured], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       callback(result);
//     });
//   },
//   updateOne: function(burgerName, callback) {
//     var queryString = "UPDATE " + tableName + " SET devoured = ? WHERE id = ?";
//     burgerName.devoured = 1;
//     connection.query(queryString, [burgerName.devoured, burgerName.id], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       callback(result);
//     });
//   }
// };

// module.exports = orm;

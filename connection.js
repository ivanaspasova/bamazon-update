var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "*****",
  database: "bamazon"
});
var conn = function() {
  connection.connect();
};
module.exports = {
  connection: connection,
  connectDB: conn
};

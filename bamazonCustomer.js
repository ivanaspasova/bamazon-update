var inquirer = require("inquirer");
var conn = require("./connection.js");
var connection = conn.connection;
conn.connectDB();
connection.query("SELECT * FROM products", function(err, results, fields) {
  if (err) throw err;

  for (var i = 0; i < results.length; i++) {
    console.log(
      results[i].item_id +
        " " +
        results[i].product_name +
        " " +
        results[i].department_name +
        " $" +
        results[i].price +
        " " +
        results[i].stock_quantity
    );
  }
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What is the ID name of the product you would like to purchase?",
        name: "ID name"
      },
      {
        type: "input",
        message: "How many items would you like to buy?",
        name: "Number of Items"
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    });
});

let selectQuery = connection.query("SELECT * FROM products WHERE creator = ?");

//7. Once the customer has placed the order, the application should check if the store has enough
//of the product to meet the customer's request.

//* If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order
//from going through.

//8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
// * This means updating the SQL database to reflect the remaining quantity.
//* Once the update goes through, show the customer the total cost of their purchase.

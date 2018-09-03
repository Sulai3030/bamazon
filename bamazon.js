/*challenge 1

//create db: bamazon*/
DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazon_db;

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password:"",
  databse: "bamazonDB"
});

/*table: products*/
CREATE TABLE products(
  name VARCHAR (30) NOT NULL,)
  id INTEGER(5) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR (30),
  department_name VARCHAR (30) NOT NULL,
  price INTEGER (5),
  stock_quantity INTEGER (5),

 );
	/*inside table: item_id
	//product_name
	//department_name
	//price
	//stock_quanity

*/
/*DROP DATABASE IF EXISTS*/

DROP DATABASE bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazon;

CREATE TABLE products (
  id INT AUTO_INCREMENT,
  item_id VARCHAR(100) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price double default 0,
  stock_quanity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0001", "Apple", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0002", "Cookies", "Food", .5, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0003", "Oranges", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0004", "Pears", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0005", "Salt", "Food", 2, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0006", "Plums", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0007", "Cherries", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0008", "Limes", "Food", .50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0009", "Oranges", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0010", "Banana", "Food", 4, 100);

/*insert 10 items (you will need to save a sql data (bamazon.sql))

//create js file: bamazonCustomer.js*/
var mysql = require("mysql");
var inquirer = require("inquirer");

/*create the connection information for the sql database*/
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  /* Your username*/
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

/* connect to the mysql server and sql database*/
connection.connect(function(err) {
  if (err) throw err;
  /*run the start function after the connection is made to prompt the user
  start();
  //console.log("working");
});
	//file to run application
// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "buyItem",
      type: "list",
      message: "What Item would you like to do?",
      choices: [ "BUY"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.buyItem.toUpperCase() === "BUY") {
        placeOrder();
        //console.log("we are in the placeOrder fx");
      }
      else {
        //bidAuction();
      }
    });
}



	//1. prompt user (start fx)
		//ask for ID of pdt they would like to buy
		//how many units of product would they like


	//run fx (placeOrder)
function placeOrder() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "Whice Item would you like to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How much would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
            console.log(chosenItem);
          }
        }

        // determine if bid was high enough
        if (parseInt(answer.quantity)< chosenItem.stock_quanity ) {
        //fx to update inventory
          // bid was high enough, so update db, let the user know, and start over
          console.log("updating the quanity");
          // connection.query(
          //   "UPDATE auctions SET ? WHERE ?",
          //   [
          //     {
          //       highest_bid: answer.bid
          //     },
          //     {
          //       id: chosenItem.id
          //     }
          //   ],
          //   function(error) {
          //     if (error) throw err;
          //     console.log("Bid placed successfully!");
          //     start();
          //   }
          // );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Insufficient quantity");
          start();
        }
      });
  });
}

		//checks the product to see if there is enough inventory
			//if(enough pdts)
				//update inventory
				//if(inventory ==0)
					//remove item

			//else
				//tell user Insufficient quantity!





//fx to delete inventory


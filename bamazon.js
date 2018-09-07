//challenge 1
//create js file: bamazonCustomer.js
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  readProducts();
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

//read products function
function readProducts() 
{
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) 
    {
      console.log(res[i].item_id + " \v " + res[i].product_name + " \t " + res[i].department_name + " \t " + res[i].price + " \t " + res[i].stock_quanity );
    }
    console.log("-----------------------------------");

    // Log all results of the SELECT statement
    //console.log(res);
    connection.end();

  });

  
}

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
      .then(function(answer) 
      {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
            
          }
        }

        // determine if bid was high enough
        if (parseInt(answer.quantity)<= parseInt(chosenItem.stock_quanity) ) 
        {
        //fx to update inventory
          // bid was high enough, so update db, let the user know, and start over
          console.log("updating the quanity");
           connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quanity: parseInt(chosenItem.stock_quanity)- parseInt(answer.quantity)
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Thank you for buying from Bamazon. Please come again!");
              console.log("checking to see if quant needs deletion")
              // console.log(chosenItem.item_id)
              // console.log(chosenItem.product_name)
              // console.log(chosenItem.stock_quanity)
              // console.log(answer.quantity)
        if(parseInt(chosenItem.stock_quanity)-parseInt(answer.quantity)==0)
           {
            console.log("deleting item");
            deleteProduct(chosenItem.item_id)
           }
              readProducts();
              start();
            }
          );
           //once order is done check if quantity =0, if so remove from inventory
           

        }
        else 
        {
          // bid wasn't high enough, so apologize and start over
          console.log("Insufficient quantity");
          readProducts();
          start();
        }

        
      });
  });
}

function deleteProduct(myItemId) {
  console.log("Deleting inventory  ...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      item_id: myItemId
    },
    function(err, res) {
      console.log(" products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      //readProducts();
    }
  );
}

		//checks the product to see if there is enough inventory
			//if(enough pdts)
				//update inventory
				//if(inventory ==0)
					//remove item

			//else
				//tell user Insufficient quantity!





//fx to delete inventory


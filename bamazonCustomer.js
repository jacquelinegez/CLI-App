var mysql = require("mysql");
var inquirer = require ("inquirer");
//var Table = require ("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db" 
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllItems();
});
function queryAllItems() {
    connection.query("SELECT * FROM product", function (err, res) {
        if (err) throw err;
        console.log("Here's a list of our available items");
        console.log('  ID  |  Product Name  |  Department Name  |   Price  | In Stock');
        console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
       
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
        }
        askUser();
    })
};

function askUser() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Enter the item ID of the product you'd like to purchase"
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter the quantity you want to purchase"
            }
        ])
        .then(function (answer) {
            checkAvailability(answer.id, answer.quantity);
            
        })
};

function checkAvailability(id, quantity) {
    connection.query("SELECT * FROM product",
        function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                var selectID = parseInt(res[i].item_id);
                if (parseInt(id) === selectID) {
                    var chosenItem = res[i];
                    if (parseInt(quantity) > chosenItem.stock_qt) {
                        console.log("OUT OF STOCK");
                        console.log("Product selected: " + chosenItem.product_name);
                        console.log("Quantity selected: " + parseInt(quantity));

                        connection.end();
                    } else {
                        console.log("order successfully placed");
                        console.log("Product selected: " + chosenItem.product_name);
                        console.log("Quantity selected: " + parseInt(quantity));
                        updateProduct(chosenItem, quantity);
                    }
                    break;
                }
            }

        })
};

function updateProduct(item, quantity) {
    console.log("===================================================");
    console.log("Updating stock quantity for: " + item.product_name);
    var query = connection.query(
        "UPDATE product SET ? WHERE ?",
        [
            {
                stock_quantity: parseInt(item.stock_quantity) - parseInt(quantity)
            },
            {
                item_id: item.item_id
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product updated!\n");
        }
    );

    console.log("Total cost for this order: $" + parseInt(item.price) * parseInt(quantity));

    connection.end();
}



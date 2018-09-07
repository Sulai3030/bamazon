Bamazon is a project utilizing Node.js and MySQL.  The goal was to create a vitual storefront(pic 1), like a simplified version of the real Amazon.com store front. 

I created a fruit store. I started by creating a MySQL databse using MySQL Workbench called bamazon(pic 2database). 
Then I created a table filled tith identifyers that would allow a end-user to find products by item_id, product_name, department_name, price, and the stock_quantity.(table_creaton pic)

After entering this information I created a table that would allow the end-user to search for thse items.(table_creation)

After this I created prompts that would ask the user for their inquiries. Once the end-user has decided what to buy the databse will check to see if the how many of the item are in stock and then return the result.  If there is not enough of the item the app will log and amswer stating that there is not enough of the item to order.

If there is enough of the item, then the user's request is fullfilled. Which will then update the count of the item in the databse which will then should an updated quaitity.


https://sulai3030.github.io/bamazon/
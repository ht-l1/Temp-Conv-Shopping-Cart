Create a simple shopping cart application using basic JavaScript.:

Set up a project folder as usual with:
-An HTML file named myshoppingcart
-A script folder
-A script file 

Add a heading in the HTML file that says "My Shopping Cart".

Create a link to your JS file in the HTML document.

Ask the user to input their name.

Ask the user to input 3 product names and their 3 product prices (you will need 3 prompts for the product names and 3 prompts for the prices).

Use a conditional statement to determine if the price for each product is 0 or is not a number, then tell the user the price isn't valid and to enter a new price. 

Calculate the subtotal of the items by adding them together.

Calculate the grand total by adding a tax of 6.25%

Display the message "customerName, your grand total is: $grandTotal" to a paragraph tag on the HTML page using .getElementById

 

Tips: 
Use pseudocode to help you with creating a blueprint of the app before you start writing JavaScript. 

Store the different prompts into variables. 

Think about when you should use let or const.

Use descriptive variable names: e.g. product1Name

Remember to use Number(), and be thoughtful about where to use it (when you store the prompt to a variable or when you perform calculations? Which is more efficient?)

Please create a GitHub repo and push your solution, and submit the repo URL.



BONUS:
Let’s add some images!

In the past we set the innerHTML of an element by coding:

document.getElementById("demo").innerHTML = "hello world"; 
Using this same syntax, how do you think we can set the src attribute of an image element?

Put 3 image tags in the HTML document, each with its own id.

In the script file, ask the user to input 3 image URLs of the grocery items. Hint: This means you need 3 more prompts.

In the script file, set the image src attribute to those URLs from the user. Hint: where we used .innerHTML, use .src

Set the image alt attributes to its corresponding product name. So, instead of using .src like we did in step 3 above, what should we use?

You may add additional HTML and create CSS. However, we will only be looking at your JavaScript.
// 1) Link this script file to the HTML file. Confirm it is linked by console.log-ing something.

// PART 1: SYNTAX PRACTICE
// PART 1.A: LOGICAL OPERATORS
console.log(`
PART 1.A LOGICAL OPERATORS`); 

// Directions: Use the variables below for the logical operator questions that follow. Each of your answers below should be in a separate console.log.
let logA = 5;
let logB = 10;
let logC = 11;
let logD = 42;
let logE = 55;

// Directions: Use a logical operator to write an expression that will evaluate to either TRUE or FALSE to figure out...

// Example) Is logA less than logB AND less than logC?
console.log((logA < logB) && (logA < logC));

// 1) Is logC less than logD AND less than logB?
console.log((logC < logD) && (logC < logB));

// 2) Is logC less than logD OR less than logB?
console.log((logC < logD) || (logC < logB));

// 3) Is logA greater than logD OR less than logE?
console.log((logA > logD) || (logA < logE));

// 4) Is logE greater than logB AND logD?
console.log((logE > logB) && (logE > logD));

// 5) Is logE divided by logA equal to log C, AND is logA multiplied by logC equal to logE? 
console.log((logE / logA == logC) && (logA * logC == logE));

// 6) Check to see if typeof(logE) does not equal "number".
console.log(!typeof(logE) == "number");


// PART 1.B: ASSIGNMENT OPERATORS
console.log(`
PART 1.B ASSIGNMENT OPERATORS`); 

// Directions: Use the variables below for the assignment operator question that follow. You will need 3 separate console.logs for the following question

let sentence = "I am becoming good at "
let answerHtml = "HTML, ";
let answerCss = "CSS, ";
let answerJs = "and JavaScript.";

// 7) Write 3 console.logs below using only the 4 variables above + assignment operators to create the following three lines in the console:
// I am becoming good at HTML, 
// I am becoming good at HTML, CSS,
// I am becoming good at HTML, CSS, and JavaScript.
console.log (sentence += answerHtml);
console.log (sentence += answerCss);
console.log (sentence += answerJs);



// PART 1.C: NESTED CONDITIONALS
console.log(`
PART 1.C NESTED CONDITIONALS`); 

// 8) 
// Directions: Write one or more nested conditional statements using the variable trafficLight below. Your conditional should do the following: 
    // The conditional should first test to see if trafficLight is equal to "red". If it is, console.log: "Stop!". 
    // If trafficLight does not equal "red", console.log: "You can keep going.". 
    // But after that, test whether trafficLight is equal to "yellow", and if it is, console.log: "Slow down though." 
    // If trafficLight is "green", console.log "It is green." 
    // If trafficLight does not equal any of these, console.log: "Caution! Something is very wrong. Proceed carefully."
    // You can change the value of trafficLight to test your code.

let trafficLight = "red";

if (trafficLight == "red") {
    console.log("Stop!");
} else {
    console.log("You can keep going.")
    if (trafficLight == "yellow") {
        console.log("Slow down though.");
    } else if (trafficLight == "green") {
        console.log("It is green.")
    } else {
        console.log("Caution! Something is very wrong. Proceed carefully.");
    };
};

// PART 2: SHOPPING CART APP
console.log(`
PART 2 SHOPPING CART APP`); 

// Directions: Do your work below using the direction in the README.md file.

const userName = prompt("Welcome to the shopping cart! What's your name?");

const item1 = prompt("Item 1 name:");
let item1price = Number(prompt(`${item1} price:`));

const item2 = prompt("Item 2 name");
let item2price = Number(prompt(`${item2} price:`));

const item3 = prompt("Item 3 name");
let item3price = Number(prompt(`${item3} price:`));

// If any of the itemprices is not a number or is 0, ask for the price again.
if (!item1price || item1price == 0) {
    item1price = Number(prompt(`${item1} price is not valid, please enter a price`));
}
if (!item2price || item2price == 0) {
    item2price = Number(prompt(`${item2} price is not valid, please enter a price`));
}
if (!item3price || item3price == 0) {
    item3price = Number(prompt(`${item3} price is not valid, please enter a price`));
}

//Add prices together and multiply by 1.0625 to add tax.
const total = (item1price + item2price + item3price) * 1.0625;
document.getElementById('total').innerHTML = `${userName}, your grand total is: $${total}.`

// // Bonus
// let item1img = prompt(`${item1} image URL:`);
// let item2img = prompt(`${item2} image URL:`);
// let item3img = prompt(`${item3} image URL:`); 

// document.getElementById('item1img').src = item1img;
// document.getElementById('item2img').src = item2img;
// document.getElementById('item3img').src = item3img;

// document.getElementById('item1img').alt = item1;
// document.getElementById('item2img').alt = item2;
// document.getElementById('item3img').alt = item3;
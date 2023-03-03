// 1) Link this script file to the HTML file. Confirm it is linked by console.log-ing something.

// PART 1: SYNTAX PRACTICE
// PART 1.A: COMPARISON OPERATORS
console.log(`
PART 1.A COMPARISON OPERATORS`); 

// Directions: Use the variables below for the comparison operators questions that follow. Each of your answers below should be in a separate console.log.
let compA = 5;
let compB = 8;
let compC = "8";

// Directions: Use a comparison operator to write an expression that will evaluate to either TRUE or FALSE to figure out...

// Example) Is compA greater than compC?
console.log(compA > compC);

// 1) Is compA less than compB?
console.log(compA < compB);

// 2) Is comp B greater than or equal to compC?
console.log(compB >= compC);

// 3) Is compB less than or equal to compA?
console.log(compB <= compA);

// 4) Is compB equal to compC?
console.log(compB == compC);

// 5) Is compB strictly equal to compC in value and type?
console.log(compB === compC);

// 6) Is compA not equal to CompC?
console.log(compA != compC);

// 7) Is compB not equal to CompC?
console.log(compB != compC);

// 8) Is compB strictly not equal to CompC?
console.log(compB !== compC);


// PART 1.B: CONDITIONAL STATEMENT
console.log(`
PART 1.B CONDITIONAL STATEMENT`); 

// Directions: The variables below represent the number of minutes 3 different students want to study for each weekday while learning JavaScript. Use the varialbes in the conditional statements you'll write for the following scenarios.  
let goalA = 15;
let goalB = 30;
let goalC = 90;
 
// 9) If student A's goal is less than 30 minutes, console.log the following string: `Student A is studying less than 30 minutes each day. Make sure their study methods are effective.`

if (goalA < 30) {
    console.log(`Student A is studying less than 30 minutes each day. Make sure their study methods are effective.`);
};

// 10) If student B's goal is greater than or equal to 30 minutes, console.log the following string: `Student B's goal is to study 30 minutes or more.` 
    // If not, console.log the following string: `Student B is planning to study less than 30 minutes each day. Check on their availability.`
if (goalB >= 30) {
   console.log(`Student B's goal is to study 30 minutes or more.`); 
} else {
    console.log(`Student B is planning to study less than 30 minutes each day. Check on their availability.`);
};


// 11) Use one condtional statement to do the following:
    //If student C's goal is less than 30 minutes, console.log the following string: `Student C is studying less than 30 minutes each day. Make sure their study methods are effective.` 
    
    // If student C's goal is less than or equal to 45 minutes, console.log the following string: `Student C's goal is to study between 30 and 45 minutes. Keep encouraging them.`

    // If neither of those things are true, console.log the following string: `Student C's goal is to study more than 45 minutes each day. Check in on their capacity.` 

if (goalC < 30) {
    console.log(`Student C is studying less than 30 minutes each day. Make sure their study methods are effective.`); 
} else if (goalC <= 45){
    console.log(`Student C's goal is to study between 30 and 45 minutes. Keep encouraging them.`);
} else {
    console.log(`Student C's goal is to study more than 45 minutes each day. Check in on their capacity.`);
};


// PART 1.C: ARITHMETIC OPERATORS & TYPE CONVERSION
console.log(`
PART 1.C ARITHMETIC OPERATORS & TYPE CONVERSION`); 

// Directions: Use the variables below for the arithmetic operators questions that follow. Each of your answers below should be in a separate console.log.
let mathA = 8;
let mathB = "4";
let mathC = 2;

// Directions: Use an arithmetic operator to write an expression to figure out...

// Example) What is mathA plus mathC?
console.log(mathA + mathC);

// 12) What is mathA plus mathB?
console.log(mathA + mathB);

// 13) Why doesn't mathA plus mathB equal 12 in the question above? Console.log your answer in a string.
console.log(`mathA plus mathB equals 84 and not 12 because the mathB is a string and mathB is a number. Concatenation happens instead of addition.`);

// 14) Write an expression where mathA plus mathB adds up to 12.
console.log(mathA + Number(mathB));

// 15) What is mathC minus mathB?
console.log(mathC - mathB);

// 16) What is mathA multiplied by mathB?
console.log(mathA * mathB);

// 17) What is 5 raised to the power of 3?
console.log(5 ** 3);

// 18) What is 12 divided by 6?
console.log(12 / 6);

// 19) What is the remainder when you divide 13 by 3?
console.log(13 % 3);

// 20) Add 1 to mathA using the increment operator.
console.log(++mathA);

// 21) Subtract 1 from mathA using the decrement operator.
console.log(--mathA);

// 22) What's the difference between the following two console.logs? Explain why the results in the console are what they are. 
console.log(100 + 5 * 2);
console.log((100 + 5) * 2);
console.log(`The first console.log evaluates to 110 in the console because of order of operations (PEMDAS). 5 and 2 are multiplied together to get 10 before being added to 100. The second console.log evaluates to 210 because 100 plus 5 is completed first to produce 105, and then 105 is multiplied by 2 to get 210.`);

// PART 2: TEMPERATURE CONVERSION APP
// Directions: In the index.html file take a look at the two paragraph tags, and note that one has an id="celcius" and the other has an id="message". Use what you've learned about JavaScript so far to make an app that does the following things:


// Ask the user for the temperature in Fahrenheit via a prompt.

// Convert the number to Celcius and display that number in the first paragraph tag in index.html.
    // The equation to get the degrees in Celcius is: 
    // °C = 5 / 9(°F - 32).

// In the second paragraph tag, display a message based on the temperatrue the user entered. 
    // If the degrees in Fahrenheit is less than 65, the message should be: `Oh, that's cold!`
    // If the degrees in Fahrenheit is greater than or equal to 65, the message should be: `The temperature is not too cold for me!`
    // Otherwise, if neither of those conditions is true, the message should be: `That's not a temperature. Refresh and enter the degrees in Fahrenheit as a number.`

// First, think about each step. Write pseudocode with comments to plan out the steps you'll need to take to build the app. Remember to test your code throughout the process by using console.logs and checking the browser and the console.

// For hints on building this app, scroll down.

let degFahren = Number(prompt("Enter the degrees in Fahrenheit."));
let messageToDisplay;

if (degFahren < 65) {
    messageToDisplay = `Oh, that's cold!`;
} else if (degFahren >= 65) {
    messageToDisplay = `The temperature is not too cold for me!`;
} else {
    celcius = "";
    messageToDisplay = `That's not a temperature. Refresh and enter the degrees in Fahrenheit as a number.`;
}

let degCel = getDegree();

function getDegree(degFahren) {
    return (5 / 9) * (degFahren - 32);
}
getDegree();
let celciusToDisplay = `${degFahren}\xB0 Fahrenheit is ${degCel}\xB0 Celcius`;

document.getElementById('celciusToDisplay').innerHTML = celciusToDisplay;
document.getElementById('messageToDisplay').innerHTML = messageToDisplay;

































// Hint 1: 
// Check to see if your equation looks like this:
// (5 / 9) * (fahrVar - 32)















// Hint 2:
// To display the two things you need to, you will need to use document.getElementById('id').innerHTML using the ids that are already on the paragraph tags in the index.html file.
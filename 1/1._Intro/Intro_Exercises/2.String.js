// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var result = parseFloat(numberOne) + parseFloat(numberTwo);
var result2 = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(6);

console.log((result.toFixed(2)));
console.log(result2);

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

var total = one + two + three;

var average = parseFloat(total/3).toFixed(5);

console.log(((one + two + three) / 3).toFixed(5));

// Show in the console the avg. with 5 decimals

// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

console.log(letters.charAt[2])
console.log(letters[2]);

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

console.log(fact.indexOf("j"));

fact = fact.replace("j", "J");

console.log(fact);

// capitalize the J in Javascript

// --------------------------------------
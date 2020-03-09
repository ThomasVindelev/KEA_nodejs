var firstName = "Thomas";
var lastName = "Vindelev";
let myName = `My name is ${firstName}`
var cars = ["Cars", 123]

console.log(myName)
console.log("My first name is", firstName, "and my last name is", lastName);
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

var year = "2017";
var number = 1;

var newYear = parseInt(year) + number
var newYear2 = +(year) + number

console.log(Number(year)+number)
console.log(newYear)
console.log(newYear2)

for (i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

function calculate(first, second, operation) { 
    return operation(first, second) 
} 

function add(first, second) { 
    return first + second 
} 

function subtract(first, second) { 
    return first - second 
} 

let operations = [add, subtract] 

console.log(calculate(2, 3, operations[0])) 
console.log(calculate(2, 3, operations[1])) 

// 5 
// -1

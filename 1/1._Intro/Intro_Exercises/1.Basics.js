var firstName = "Thomas";
var lastName = "Vindelev";
let myName = `My name is ${firstName}`

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
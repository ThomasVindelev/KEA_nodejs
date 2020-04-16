// test shows if the pattern appears in the string
// i flag = case sensitive

const myRegEx = /Hello/i
const result = myRegEx.test("Hello World")

console.log(result)

// Pipe = or

const petRegEx = /alpaca|cow|sheep/
const petString = "Anders has an alpaca"

console.log(petRegEx.test(petString))

// Match
const extractString = "Extract this word from the string"
const wordRegex = /word/
console.log(extractString.match(wordRegex))

const extractStringJeff = "Extract this word from the string"
const wordRegexJeff = /jeff/
console.log(extractStringJeff.match(wordRegexJeff))

// G flag

console.log("Repeat, Repeat, Repeat".match(/Repeat/g))

console.log("Twinkle, twinkle, little star".match(/Twinkle/ig))

// Wildcards

const humStr = "That's humbug!"
const hugStr = "I need a hug."
const huRegex = /hu./

console.log(humStr.match(huRegex))
console.log(hugStr.match(huRegex))

console.log("He's a fun 'un".match(/.un/))
console.log("I found big bugs in my bag".match(/b[aiu]g/ig))
console.log("I found big bugs in my bag".match(/[aeiou]/ig))

// Range
console.log("123abc456".match(/[0-9]/g))

console.log("Twinkle, twinkle, little star".match(/[^a-z]/ig))
console.log(addition("Hey ", "there"));

// funktionen kan kaldes før den deklareres, fordi den læser hele filen, inden den kører den
// dette kaldes for hoisting

function addition(a, b) {
    return a + b;
}

// hoisting
test = 1;
var test;

const constant = "This is a constant variable";

console.log(addition(2, 5));

// dette er en global variabel
global = 10;

// dette er det næste niveau
var næsten_global;

// disse eksisterer kun i { blocks }
let kun_i_blocks;

// disse skal ikke ændre værdi, og den kan ikke instantieres uden en værdi
const this_is_a_constant = "Skal altid have en værdi";

function pokeMe() {
    console.log("Meow");
}

pokeMe();

function approachSomeone(someoneToPoke) {
    console.log("tip tap tip tap");
    console.log(someoneToPoke);
    someoneToPoke();
}

approachSomeone(pokeMe);

const introduce = function(name) {
    console.log("Hello my name is", name);
}

introduce("Thomas");

const prepareIntroduction = (introducerFunction, name) => {
    console.log("HmMmHmHmMhMm");
    introducerFunction(name);
}

prepareIntroduction(introduce, "Thomas");

// another way of writing functions

const newFunction = (name) => {
    console.log("ahAHAhaHAAHHAaaHa ligemeget", name)
}

newFunction("lmao")

const aboutMe = me => {
    console.log("My hobby is", me.hobby);
}

// you can store functions in objects, with or without parameters

meMyselfAndI = {
    "hobby": "Music",
    "functionTesting": () => {
        console.log("orrre");
    },
    "withParams": (param) => {
        console.log("You've passed the value of", param)
    }
}

aboutMe(meMyselfAndI);

meMyselfAndI.functionTesting();

meMyselfAndI.withParams("lululululululul");
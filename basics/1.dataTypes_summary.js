// JS is dynamically typed Language, because in this we don't have defined dataTypes manually

// categorize
// 1. Primitive Data Types : call by value copied
// 7 types : String | Number | Boolean | null | undefined | Symbol | BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number
const isLoggedIn = false; //  boolean

// null
const outside = null;
console.log("null" + typeof outside);

//  undefined
let userEmail;
console.log("undefined" + typeof userEmail);

// Symbol always return unique value
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
console.log("Symbol" + typeof id);

// bigInt
const bigNumber = 3423432434344n;
console.log("bigInt" + typeof bigNumber);

// 2. Non- Primitive or reference Data Types
// 3 types : Arrays | Objects | Functions

// Arrays
const heroes = ["Shaktiman", "Batman", "Superman"];
console.log("Arrays" + typeof heroes);

// objects
const obj = {
  name: "Seemant",
  age: 22,
};
console.log("Objects" + typeof obj);

// Functions
const myFunc = function () {
  console.log("Hello World!");
};
console.log("Functions" + typeof myFunc);

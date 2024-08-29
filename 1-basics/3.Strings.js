const gameName = new String("Seemant Kamlapuri");
console.log(gameName);

const name = "Seemant";

const repoCount = 50;

console.log(name + repoCount + " Value"); // outdated format

console.log(`My Name is ${name} and my repo count is ${repoCount}`); // new Format - called "String Interpolation".

// methods of strings

// length
console.log(gameName.length);

// toUpperCase()
console.log(gameName.toUpperCase());

// charAt
console.log(gameName.charAt(4));

// indexOf
console.log(gameName.indexOf("S"));

// substring
const firstName = gameName.substring(0, 7);
console.log(firstName);

// slice : like substring but work for negative index also
const anotherName = gameName.slice(-8, 4);
console.log(anotherName);

// trim : remove redundant spaces or newLine from start and end of string
const newString = "        smeknf  dkm   ";
console.log(newString);
console.log(newString.trim());

// replace : replace substring with another substring
const url = "https://seemant.com/seemant%20kamlapuri";
console.log(url.replace("%20", "-"));

// includes : return boolean value , check for part of string is present or not
console.log(url.includes("seemant"));

// split : split substring with using seprator (conversion string into arrays)
console.log(gameName.split(" "));

// anchor : return anchor element
const anchorString = "Hello World";
anchorString.anchor("hello");

// and more methods............

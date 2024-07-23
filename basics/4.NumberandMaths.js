// ++++++++++++++++NUMBERS+++++++++++++++++++++++

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// Numbers methods
// toString() : convert number into string
console.log(balance.toString());

// toFixed() : it shows precision values after . "Decimal"
console.log(balance.toFixed(2));

// toPrecision()
const otherNum = 23.8966;
console.log(otherNum.toPrecision(3));

// toLocaleString() : representational numbers in string which is easy to read
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++++++++MATHS++++++++++++++++++++++++++

console.log(Math);

// Maths methods

// abs() : convert the negative value into positive
console.log(Math.abs(-4));

// round() : always shows round off value '4.3' shows '4'
console.log(Math.round(4.3));

// ceil() : always shows upto value like '4.2' shows '5'
console.log(Math.ceil(4.2));

// floor() : always shows upto value like '4.6' shows '4'
console.log(Math.floor(4.6));

// sqrt()
console.log(Math.sqrt(5));

// min()
console.log(Math.min(4, 3, 5, 6));

// max()
console.log(Math.max(4, 5, 6, 7, 8));

// random() : always return value between 0 to 1
console.log(Math.random() * 10 + 1);

// question range of math.random lie between min and max value
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

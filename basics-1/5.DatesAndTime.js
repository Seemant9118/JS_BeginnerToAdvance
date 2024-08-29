// ++++++++++++++++++++++Dates++++++++++++++++

let myDate = new Date();
console.log(typeof myDate); // object

let myCustomDate = new Date(2023, 0, 23);
console.log(myCustomDate.toDateString());

// Dates methods

// toString()
console.log(myDate.toString());

// toDateString()
console.log(myDate.toDateString());

// toLocaleString()
console.log(myDate.toLocaleString());

// toLocaleDateString()
console.log(myDate.toLocaleDateString());

// timeStamps : return in ms
let myTimeStamps = Date.now();
console.log(myTimeStamps);

console.log(myTimeStamps);

// conversion date into ms
console.log(myCustomDate.getTime());

// conversion ms into sec
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

// getMonth()
console.log(newDate.getMonth());

// getDay()
console.log(newDate.getDay());

// customization date
const customizeDate = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(customizeDate);



// object literals - when we declare object using literal
const mySym = Symbol("key1");

const user = {
  [mySym]: "ss",
  name: "Seemant",
  designation: "Software Developer",
  age: "22",
  email: "Seemant@google.com",
  isAvail: true,
  lastWeekOff: ["Sunday", "Saturday"],
};

// How to access object keys
console.log(user.email);
console.log(user["email"]);
console.log(user[mySym]);

// How to change object value
user.email = "Seemant@gmail.com";

// freeze object to prevent changes
// Object.freeze(user);
// user.email = "alex@gmail.com"; // changes : invalidemail
// console.log(user);

// adding fn in object as a key
user.greeting = function () {
  console.log(`hello ${this.name} from function greeting`);
};
user.greeting();

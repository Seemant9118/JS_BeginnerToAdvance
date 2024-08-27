// 'this' only we work in objects and also in normal functions only
const user = {
  username: "Seemant",
  price: "499.00",
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to our world`);
    console.log(this);
  },
};

// user.welcomeMessage();
// // after change the username, welcomeMessage print genrice username
// user.username = "ROY";
// user.welcomeMessage();

// console.log(this);

// 'this' not be working in normal functions / arrow function / function expressions
function one() {
  let username = "Rock";
  console.log(this.username);
}
one();
const oneA = () => {
  let username = "seemant";
  console.log(this.username);
};
oneA();

// ARROW FUNCTIONS
// const addTwo = (num1, num2) => num1 + num2; // return evaluated number : Implicit return in arrow fn, when fn is in one line only
const addTwo = (num1, num2) => ({
  username: "Seemant",
}); //return object :  Implicit return in arrow fn, when fn is in one line only
console.log(addTwo(3, 4));
